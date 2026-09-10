<?php
/**
 * Locates the untracked config holding the DB, Authorize.Net and SMTP secrets.
 *
 * The legacy code hardcodes /var/www/vhosts/ceunits.com/secure_files/ in half a
 * dozen files. That path is correct on the production box and wrong everywhere
 * else, so the copies here call this instead.
 *
 * The directory is deliberately OUTSIDE the docroot and outside git: it holds
 * live payment credentials. Nothing in this repo may contain them. See
 * secure_files.example.php for the full list of constants that must be defined.
 *
 * Resolution order, first hit wins:
 *   1. the CEU_SECURE_FILES environment variable (set it in the vhost or
 *      docker-compose to put the directory wherever you like)
 *   2. a secure_files/ sibling of the docroot — the layout that keeps it out of
 *      the web root on a standard install
 *   3. the production path, so a copy deployed there keeps working unchanged
 */
if (!function_exists('ceu_secure_files_dir')) {
    function ceu_secure_files_dir(): string {
        static $dir = null;
        if ($dir !== null) return $dir;

        $candidates = [];

        $env = getenv('CEU_SECURE_FILES');
        if ($env) $candidates[] = $env;

        $docroot = $_SERVER['DOCUMENT_ROOT'] ?? '';
        if ($docroot) $candidates[] = dirname($docroot) . '/secure_files';

        // Two levels up from this file is the docroot's parent: this tree sits at
        // <docroot>/includes/, the legacy layout. Note the docroot is the REPO
        // ROOT here, not wordpress/ — WordPress core lives in a subdirectory
        // (siteurl ends /wordpress, home is the docroot), and the root index.php
        // boots it from there.
        $candidates[] = dirname(__DIR__, 2) . '/secure_files';
        $candidates[] = '/var/www/vhosts/ceunits.com/secure_files';

        foreach ($candidates as $candidate) {
            if ($candidate && is_dir($candidate)) {
                return $dir = rtrim($candidate, '/');
            }
        }

        return $dir = '';
    }
}

/**
 * Load one file out of that directory. Returns false when it is not there, so a
 * caller can fail loudly rather than run on half a configuration.
 */
if (!function_exists('ceu_load_secure_file')) {
    function ceu_load_secure_file(string $name): bool {
        $dir = ceu_secure_files_dir();
        if (!$dir) return false;

        $path = $dir . '/' . $name;
        if (!is_readable($path)) return false;

        include_once $path;
        return true;
    }
}
