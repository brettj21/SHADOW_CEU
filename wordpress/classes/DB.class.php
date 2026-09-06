<?php

// PHP 8.1+ changed mysqli's default error mode to throw exceptions. This legacy
// app handles DB errors the old way (`... or die(mysqli_error())`), so restore
// the pre-8.1 behavior: failed queries/connections return false instead of
// throwing. Applies to every class that includes DB.class.php.
mysqli_report(MYSQLI_REPORT_OFF);

class DB {

    public $db_id;

    public function __construct() {
        require_once(__DIR__ . '/../includes/secure_files.php');
ceu_load_secure_file('variables.php');

        //self::getBdd();
        $this->db_id = mysqli_connect(DB_HOST, DB_LOGIN, DB_PASS, DB);
        

/*
        try{
            $dsn = 'mysql:host=localhost:3306;dbname=' . DB;
            $dbh = new pdo($dsn, DB_LOGIN, DB_PASS,
                array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
            die(json_encode(array('outcome' => true)));
        }
        catch(PDOException $ex){
            die(json_encode(array('outcome' => false, 'message' => 'Unable to connect')));
        }
*/
        //$dsn = 'mysql:host=localhost:3306;dbname=' . DB;
        //$this->db_id =  new PDO($dsn, DB_LOGIN, DB_PASS);
    }

    public static function getBdd() {
        if(is_null(self::$db_id)) {
            $dsn = 'mysql:host=localhost:3306;dbname=' . DB;
            self::$db_id = new PDO($dsn, DB_LOGIN, DB_PASS);
        }
        return self::$db_id;
    }

}