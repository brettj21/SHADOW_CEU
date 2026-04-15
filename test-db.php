<?php
$db = new mysqli('localhost', 'db31242_CEU2', 'Tth3c0l0ny2055', 'CEU_DB');
if ($db->connect_error) {
    echo 'FAILED: ' . $db->connect_error;
} else {
    echo 'SUCCESS';
    $db->close();
}
