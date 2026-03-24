<?php

$loadData = true;

include_once($_SERVER['DOCUMENT_ROOT'] . "/includes/global.php");

?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<title>Facebook Promotion <?php echo BUS_NAME ?> - <?php echo SITE ?></title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="shortcut icon" href="<?php echo SECURE_PATH ?>/favicon.ico" />
<meta name="description" content="CEUnits Facebook Promotion." />

<?php include("includes/js.html"); ?>
<link rel="stylesheet" type="text/css" href="/css/main.css"></style>

<style>
#marquee_line_1 { padding:0 0 0 0 !important; }
.fb_copy_promo { color:#000; font-size:12px; font-weight:700; }
</style>
</head>

<body>

<div id="container">

<?php include("includes/header.php"); ?>
        
    <div id="training_info">
    
    	

        <div id="clear5Bottom"></div>
    
    	<div id="marquee_line_2" style="padding-bottom:0px; padding-left:10px;">Facebook Promo</div>
        <div id="clear10Bottom"></div>
        <div id="marquee_line_1" style="padding:0 0 0 15px !important;">Share CEUnits on Facebook and receive $10.00 off your total.</div>
        <div id="clear10Bottom"></div>
            
        <hr style="color:#1c4280;" />
 
           <br /><br />
           <div id="marquee_line_1">1 - Log in to your CEUnits account. </div>
           <div id="clear10Bottom"></div>
           <div class="fb_copy_promo">Log in to your CEUnits account and you will see a Facebook button. Click on the share button, tell your friends about CEUnits and you will see a $10.00 Available Discount on your shopping cart page. </div>
           <br /><br />
		<img src="/images/fb_promo_1.jpg" /><br />

		<div id="clear20Bottom"></div>
            
        <hr style="color:#1c4280;" />
 
           <br /><br />
           <div id="marquee_line_1">2 - Click on the $10.00 discount once you have an item in your shopping cart. </div>
           <div id="clear10Bottom"></div>
           <div class="fb_copy_promo">Once your share on Facebook, you will see the $10.00 available discount on your shopping cart page. Click on your $10.00 discount to subtract $10.00 from your total.</div>
           <br /><br />
        	<img src="/images/fb_promo_2.jpg" /><br />

		<div id="clear20Bottom"></div>
            
        <hr style="color:#1c4280;" />
 
           <br /><br />
           <div id="marquee_line_1">3 - You are ready to go. </div>
           <div id="clear10Bottom"></div>
           <div class="fb_copy_promo">Hit the checkout button and continue your checkout process. </div>
           <br /><br />
			<img src="/images/fb_promo_3.jpg" />
        
            
    </div>
 
</div>

<?php include("includes/footer.php") ?>
    

</body>
</html>