<?php

namespace NSL\Persistent\Storage;

class Session extends StorageAbstract {

    /**
     * @var string name of the cookie. Can be changed with nsl_session_name filter and NSL_SESSION_NAME constant.
     *
     * @see https://pantheon.io/docs/caching-advanced-topics/
     */
    private $sessionName = 'SESSnsl';

    public function __construct() {

        /**
         * WP Engine hosting needs custom cookie name to prevent caching.
         *
         * @see https://wpengine.com/support/wpengine-ecommerce/
         */
        if (class_exists('WpePlugin_common', false)) {
            $this->sessionName = 'wordpress_nsl';
        }
        if (defined('NSL_SESSION_NAME')) {
            $this->sessionName = NSL_SESSION_NAME;
        }
        $this->sessionName = apply_filters('nsl_session_name', $this->sessionName);
    }

    public function clear() {
        parent::clear();

        $this->destroy();
    }

    private function destroy() {
        $sessionID = $this->sessionId;
        if ($sessionID) {
            $this->setCookie($sessionID, time() - YEAR_IN_SECONDS, apply_filters('nsl_session_use_secure_cookie', false));

            add_action('shutdown', array(
                $this,
                'destroySiteTransient'
            ));
        }
    }

    public function destroySiteTransient() {
        $sessionID = $this->sessionId;
        if ($sessionID) {
            delete_site_transient('nsl_' . $sessionID);
        }
    }

    protected function load($createSession = false) {
        static $isLoaded = false;
        if ($this->sessionId === null) {
            if (isset($_COOKIE[$this->sessionName])) {
                $this->sessionId = 'nsl_persistent_' . md5(SECURE_AUTH_KEY . $_COOKIE[$this->sessionName]);
            } else if ($createSession) {
                $unique = uniqid('nsl', true);

                $this->setCookie($unique, apply_filters('nsl_session_cookie_expiration', 0), apply_filters('nsl_session_use_secure_cookie', false));

                $this->sessionId = 'nsl_persistent_' . md5(SECURE_AUTH_KEY . $unique);

                $isLoaded = true;
            }
        }

        if (!$isLoaded) {
            if ($this->sessionId !== null) {
                $data = maybe_unserialize(get_site_transient($this->sessionId));
                if (is_array($data)) {
                    $this->data = $data;
                }
                $isLoaded = true;
            }
        }
    }

    private function setCookie($value, $expire, $secure = false) {

        $path = COOKIEPATH ? COOKIEPATH : '/';

        if (is_ssl()) {
            /**
             * Apple Sign In uses response_mode=form_post, so its callback is a cross-site POST.
             * A cookie without SameSite is treated as SameSite=Lax by browsers and is not sent on
             * cross-site POST requests, which breaks OAuth state validation. SameSite=None allows
             * the session cookie to be sent, but requires the Secure attribute.
             */
            setcookie($this->sessionName, $value, array(
                'expires'  => $expire,
                'path'     => $path,
                'domain'   => COOKIE_DOMAIN,
                'secure'   => true,
                'httponly' => true,
                'samesite' => 'None',
            ));
        } else {
            // SameSite=None is not allowed without Secure, which requires HTTPS. Keep legacy behavior on HTTP.
            setcookie($this->sessionName, $value, $expire, $path, COOKIE_DOMAIN, $secure);
        }
    }
}