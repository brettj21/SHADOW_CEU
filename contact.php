<?php

$loadData = true;

include_once($_SERVER['DOCUMENT_ROOT'] . "/includes/global.php");

checkUserStatus(); // IF USER HAS COOKIES - ATTEMPT TO LOGIN
//checkLoggedIn("user/"); // IF ALREADY LOGGED IN - REDIRECT

$er = $_GET['er'];
if($er == "1")
	$msg = '<div id="clear25Bottom"></div><span id="error_msg">Email address or password appear to be invalid.</span>';
if($_GET['s'] == "1")
	$msg = '<div id="clear25Bottom"></div><span id="error_msg">Thank you for contacting us.<br />Our response time is usually within 24 hours Monday - Friday</span>';
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<title>Contact Us | Ask Us A Question - CEUnits.com</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="shortcut icon" href="<?php echo SECURE_PATH ?>/favicon.ico" />
<meta name="description" content="Do you have questions about CEU? Contact our team and see how they can help you today." />

    <meta http-equiv="cleartype" content="on">
    <meta name="HandheldFriendly" content="True">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

<?php include("includes/js.html"); ?>
<link rel="stylesheet" type="text/css" href="/css/main.css">

    <link rel="stylesheet" type="text/css" href="/css/body.css" />
    <link rel="stylesheet" type="text/css" href="/css/header.css" />

</head>

<body>

<div id="container">
    <main id="panel">
    <?php include("includes/header.php"); ?>
        
    <div id="training_info">

        <div id="marquee_line_2">Contact Us</div>

        <div id="clear10Bottom"></div>
        <hr style="color:#1c4280;" />
        <?php echo $msg ?>

    	<div class="left">
            <?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/left_column_logged_out.php"); ?>
        </div>
                
        <div class="right">

            <form action="<?php echo ROOT ?>process/forms" method="post" name="contact_us">

                <span id="user_sub_font"></span>
            
                <div class="floatLeft">
                    <div id="user_form_label">
                        Name
                        <div id="loginInputLrg"><input type="text" name="name" value="" /></div>
                    </div>

                    <div id="user_form_label" class="e1">
                        Email Address
                        <div id="loginInputLrg"><input type="text" name="ea" value="" /></div>
                    </div>

                    <div id="user_form_label" class="e2">
                        Email Address
                        <div id="loginInputLrg"><input type="text" name="email_contact" value="" /></div>
                    </div>

                    <div id="user_form_label">Need help with
                        <div id="clear5Bottom"></div>
                        <select onchange="contactHelp(this);" tabindex="3" class="stdForm" name="helpWith" type="SELECT">
                            <option selected="" value="">Make Selection
                            </option><option value="Login">Login / Password Help
                            </option><option value="Payment">Payment Help
                            </option><option value="Duplicate">Duplicate Payment
                            </option><option value="Academic">Academic Issue
                            </option><option value="Cert">Certificate Help
                            </option><option value="Accreditations">Accreditations
                            </option><option value="Promo">Promo Codes
                            </option>
                        </select>
                    </div>
                </div>
    
                <div id="user_form_label">Comment
                    <div id="formInputComment"><textarea name="comments" value="" id="stdForm"></textarea></div>
                </div>
                <div id="clear5Bottom"></div>
                <div style="float:left;"><a href="javascript:void(0);" onClick="checkContactForm();" class="login_btn" style="margin-top:10px;">SUBMIT</a></div>

                <input type="hidden" name="todo" value="contact_us" />
            </form>
            <div id="clear5Bottom"></div>
            <div class="mobile_acc">
                <?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/accreditations.html"); ?>
            </div>
        </div>

    </div>
    </main>
</div><?php

include($_SERVER['DOCUMENT_ROOT'] . "/includes/mobile_pop_nav.php");
include("includes/footer.php");
include($_SERVER['DOCUMENT_ROOT'] . "/includes/js_lower.html");

?>
    
<script language="javascript">
    $(document).ready(
    function() {
        $('.e2').hide()
    });
</script>
</body>
</html>