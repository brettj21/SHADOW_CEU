<?php

$loadData = true;

include_once($_SERVER['DOCUMENT_ROOT'] . "/includes/global.php");

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<title>404 <?php echo BUS_NAME ?> - <?php echo SITE ?></title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="shortcut icon" href="<?php echo SECURE_PATH ?>/favicon.ico" />
<meta name="description" content="404 Page - page not found." />

<?php include("includes/js.html"); ?>
<link rel="stylesheet" type="text/css" href="/css/main.css" />

    <link rel="stylesheet" type="text/css" href="/css/body.css" />
    <link rel="stylesheet" type="text/css" href="/css/header.css" />


</head>

<body>

<div id="container">
    <main id="panel">

<?php include("includes/header.php"); ?>
        
    <div id="training_info">
    
    	

        <div id="clear5Bottom"></div>
    
    	<div id="marquee_line_2" style="padding-bottom:0px; padding-left:10px;">404</div>
        
        <div id="clear10Bottom"></div>
            
        <hr style="color:#1c4280;" />

           
        <div style="margin:15px 0 80px 40px; font-size:20px; font-weight:700;">
            The page you are looking for does not exist.
            <br /><br />
            <div style="font-size:14px;">
            POPULAR TRAININGS<br /><br />
            <a href="/<?php echo $profession ?>/116/">HIPAA</a><br />
            <a href="/<?php echo $profession ?>/141/">Law and Ethics</a><br />
            <a href="/<?php echo $profession ?>/123/">Supervision</a><br />
            <a href="/<?php echo $profession ?>/132/">Ethics</a>
            <br /><br />
            PROFESSIONS<br /><br />
        	<a href="/nursing/" class="links">Nursing</a><br />
        	<a href="/social-workers/" class="links">Social Worker</a><br />
            <a href="/mft-lcsw/" class="links">MFT / LCSW </a><br /> 
        	<a href="/psychologist/" class="links">Psychologist</a><br />
        	<a href="/insurance/" class="links">Insurance</a><br />
            <a href="/counselor-addiction/" class="links">Counselor / Addiction</a>
            </div>
        </div>
        
            
    </div>
    </main>
</div><?php

include($_SERVER['DOCUMENT_ROOT'] . "/includes/mobile_pop_nav.php");
include("includes/footer.php");
include($_SERVER['DOCUMENT_ROOT'] . "/includes/js_lower.html");

?>
</body>
</html>