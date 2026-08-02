<?php
defined('ABSPATH') || die();
/** @var $this NextendSocialProviderAdmin */

$provider = $this->getProvider();
?>

<div class="nsl-admin-sub-content">
    <?php $this->renderGettingStartedHead(); ?>

    <ul>
        <li>
            <b>Authorised redirect URIs:</b>
            <ul class='nsl-list-disc'>
                <?php
                $loginUrls = $provider->getAllRedirectUrisForAppCreation();
                foreach ($loginUrls as $loginUrl) {
                    echo "<li>" . esc_url($loginUrl) . "</li>";
                }
                ?>
            </ul>
        </li>
        <li>
            <b>Authorized domains:</b>
            <ul class='nsl-list-disc'>
                <li><?php echo NextendSocialLogin::getDomain(); ?></li>
            </ul>
        </li>
    </ul>

    <?php $this->renderGettingStartedFooter(); ?>
</div>