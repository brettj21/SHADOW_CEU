<?php

$loadData = true;
$loadTrainings = true;

$cert_id = $_GET['cid'] != "" ? $_GET['cid'] : "";

include_once($_SERVER['DOCUMENT_ROOT'] . "/includes/global.php");

if(!$isUser)
	header("location: /");

if($cert_id != "" && isset($_COOKIE['ceu']))
	$cert = $dbTrainingData->getCertById($cert_id, $_COOKIE['ceu']);

if(in_array($cert['TRAINING_ID'], LIVE_COURSES)) { // CURRENTLY THE ONLY LIVE COURSE IS 215
    $type = "live";
} else {
    $type = "online";
}
// THIS IS FOR TESTING ONLY AND CAN BE REMOVED ONCE DONE
$profession = $_GET['p'] != "" ? $_GET['p'] : $profession;
$state = $_GET['s'] != "" ? $_GET['s'] : $state;

$state = $cert['STATE'] != '' ? $cert['STATE'] : $state;

$provider_num .= "<br />NAADAC " . NAADAC;
$provider_num .= "<br />NBCC " . NBCC;
$provider_num .= "<br />ASWB " . ASWB;
//$provider_num .= "<br />CAADE " . CAADE;
$provider_num .= "<br />NEW YORK " . NY_LIC;
//$provider_num .= "<br />" . APA . "<br />888-702-9680";

$q[] = "The Learning Objectives in the Course Description were met in this training";
$q[] = "The course material is relevant to my practice";
$q[] = "The training met my professional and education learning needs";
$q[] = "The manner in which this material was presented was effective";
$q[] = "The course material is presented in an understandable manner";
$q[] = "The educational level of this course is appropriate";
$q[] = "The course material is accurate and current";
$q[] = "The instructor is knowledgeable of the subject manner";
$q[] = "The Length of the training was equal to the amount of credits earned";
$q[] = "The technology was appropriate to support participant learning";
$q[] = "The user friendliness of the course technology was appropriate";
$q[] = "The technology was responsive to participants";
$q[] = "The overall course technology was user friendly";
$q[] = "If you requested accommodations for a disability were your needs met?";
$q[] = "The accessibility for assistance if needed was handled in a timely manner";
//$q[] = "The length of time to complete the course matches the number of CE credits awarded for the course.";

// EVAL REMOVED 040620 - switch back to add course eval
$eval_complete = false;
$eval_complete = $dbData->getUserEvals($_COOKIE['ceu'], $cert['TRAINING_ID']);


?><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<style>
/* OVERLAY */
#overlay {
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:#000;
    opacity:0.5;
    filter:alpha(opacity=50);
}

#modal {
    position:absolute;
    background:rgba(0,0,0,0.2);
    border-radius:14px;
    padding:8px;
    opacity:0.9;
    filter:alpha(opacity=90);
}

#content {
    border-radius:8px;
    background:#fff;
    padding:20px;
}

/*#close {
    position:absolute;
    background:url(/images/close.png) 0 0 no-repeat;
    width:24px;
    height:27px;
    display:block;
    text-indent:-9999px;
    top:-7px;
    right:-7px;
}*/
.t {
    width:25%; display:block; float:left; text-align:right; color:#666666;
}
.c {
    width:70%; display:block; float:left; text-align:left;
}
</style>

<title>Certificate - <?php echo BUS_NAME ?></title>
<link rel="stylesheet" type="text/css" href="/css/main.css"></style>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script><?php

if($eval_complete === -1 || $eval_complete === 0):

    ?>var modal = (function(){
        var method = {}, $overlay, $modal, $content, $close;

        // Center the modal in the viewport
        method.center = function () {
            var top, left;

            top = 100;//Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
            left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

            $modal.css({
                top:top + $(window).scrollTop(),
                left:left + $(window).scrollLeft()
            });
        };

        // Open the modal
        method.open = function (settings) {
            $content.empty().append(settings.content);

            $modal.css({
                width: 600,//settings.width || 'auto',
                height: settings.height || 'auto'
            });

            method.center();
            $(window).bind('resize.modal', method.center);
            $modal.show();
            $overlay.show();
        };

        // Close the modal
        method.close = function () {
            $modal.hide();
            $overlay.hide();
            $content.empty();
            $(window).unbind('resize.modal');
        };

        // Generate the HTML and add it to the document
        $overlay = $('<div id="overlay"></div>');
        $modal = $('<div id="modal"></div>');
        $content = $('<div id="content"></div>');
        $close = $('');
        //$close = $('<a id="close" href="#">close</a>');

        $modal.hide();
        $overlay.hide();
        $modal.append($content, $close);

        $(document).ready(function(){
            $('body').append($overlay, $modal);
        });

        $close.click(function(e){
            e.preventDefault();
            method.close();
        });

        return method;
    }());


$(document).ready(function(){

    modal.open({content: "<div style='font-family:verdana; font-size:12px;'><b>COURSE EVALUATION</b><br /><br />Please answer the below questions to access your certificate.<br /><br /><?php

    for($i=0; $i<count($q); $i++) {
        echo "<form id='eval'><b>" . $q[$i] . "</b><br /><input type='radio' name='a" . $i . "' value='5' /> strongly agree <input type='radio' name='a" . $i . "' value='4' /> agree <input type='radio' name='a" . $i . "' value='3' /> n/a <input type='radio' name='a" . $i . "' value='2' /> disagree <input type='radio' name='a" . $i . "' value='1' /> strongly disagree<br /><br />";
    }

    echo "<b>How useful was the content of this CE program for your practice or other professional development?</b><br /><input type='radio' name='a" . ($i) . "' value='5' /> Extremely useful <input type='radio' name='a" . ($i) . "' value='4' /> A good deal useful  <input type='radio' name='a" . ($i) . "' value='3' /> Somewhat useful <input type='radio' name='a" . ($i) . "' value='2' /> A little useful <input type='radio' name='a" . ($i) . "' value='1' /> Not useful<br /><br />";

    echo "<b>How much did you learn as a result of this CE program?</b><br />A great deal <input type='radio' name='a13' value='5' />  <input type='radio' name='a" . ($i+1) . "' value='4' />  <input type='radio' name='a" . ($i+1) . "' value='3' />  <input type='radio' name='a" . ($i+1) . "' value='2' />  <input type='radio' name='a" . ($i+1) . "' value='1' /> Very little<br /><br />";

    echo "<b>Do you feel the course covered all the learning objectives?</b><br /><input type='radio' name='a" . ($i+2) . "' value='5' /> strongly agree <input type='radio' name='a" . ($i+2) . "' value='4' /> agree  <input type='radio' name='a" . ($i+2) . "' value='3' /> disagree <input type='radio' name='a" . ($i+2) . "' value='2' /> strongly disagree <input type='radio' name='a" . ($i+2) . "' value='1' /> n/a<br /><br />";

    echo "<div style='border:1px solid #000000; box-sizing:border-box; padding:10px;' id='obj_box'><b><u>The Learning Objectives in the Course Description were met in this training:</u></b><br /><br />";

    $file = $_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $cert['TRAINING_ID'] . "/objectives.html";
    if(file_exists($file)) {
        $i = $i+3;
        loopObj($file, $i);
    }

    echo "</div>";

    echo "<br /><b>What did you like most about the course?</b><br /><textarea name='positive' style='width:350px; height:100px;'></textarea><br />300 char limit<br /><br /><b>What specific things did you like least about the course?</b><br /><textarea name='negative' style='width:350px; height:100px;'></textarea><br />300 char limit<br /><br /><b>If the course was repeated, what should be left out or changed?</b><br /><textarea name='changeT' style='width:350px; height:100px;'></textarea><br />300 char limit<br /><br /><a class='btn_lrg' href='javascript:submitEval($modal);' id='submit'>SUBMIT</a><input type='hidden' name='tid' value='" . $cert['TRAINING_ID'] . "' /></form>";
    ?></div>"});
});

<?php endif; ?>

function submitEval(m) {
	var formSerialized = $("#eval").serialize();
	//console.log(test);

	dataStr = formSerialized + "&todo=eval";
	$.ajax({
	  type: "POST",
	  url: "/process/forms",
	  data: dataStr,
	  dataType: "json",
	  success: function(data) {
		  if(data.success == "true") {
			$('#overlay').hide();
			$('#modal').hide();
		  }
	  }
	});
}
</script>
</head>

<body>

<div style="width:740px; margin: 0 auto; padding:20px;">
	<div style="float:right;"><a href="/user" style="float:left;"><img src="/images/btn_back.png" width="82" height="34" alt="Back" border="0" style="margin-bottom:10px;" /></a> <a href="javascript:window.print();" style="float:left;"><img src="/images/btn_print.png" width="82" height="34" alt="Print" border="0" /></a></div>
</div>

<?php include_once($_SERVER['DOCUMENT_ROOT'] . "/includes/cert_upper.php"); ?>
    	This is to certify that <?php echo $first . " " . stripslashes($last) ?> has completed, in its entirety, the<br />following Continuing Education Activity sponsored by CEUnits.com.
        <br /><br />
        <span style="color:#2e3083; font-size:24px; font-weight:700; font-family:Times New Roman, Times, serif;"><?php echo $first . " " . stripslashes($last) ?></span>
        <hr style="width:660px; color:#accddc;" />

        <div style="padding:0 30px;">
            <div style="wwidth:100%; box-sizing:border-box;">

                <div style="clear:both; height:5px; overflow:hidden;"></div><?php

                if($user['STATE'] == "NY") {
                    $credit_name = "Contact Hours";
                } else {
                    $credit_name = "CE Credit Hours";
                }

                if($profession_ids_key[$profession] != '') {
                    ?><div class="t">PROFESSION</div>
                    <div style="float:left; width:20px;">&nbsp;</div>
                    <div class="c"><?php echo ucfirst($profession_ids_key[$profession]) ?></div>

                    <div style="clear:both; height:5px; overflow:hidden;"></div><?php
                }

                ?><div class="t">TRAINING/COURSE TITLE</div>
                <div style="float:left; width:20px;">&nbsp;</div>
                <div class="c"><?php echo $cert['TRAINING_TITLE'] ?></div>

                <div style="clear:both; height:5px; overflow:hidden;"></div>

                <div class="t">TRAINING TYPE</div>
                <div style="float:left; width:20px;">&nbsp;</div>
                <div class="c"><?php
                    if($cert['TRAINING_ID'] == '234') {
                        echo '9 Hours - Recorded asynchronous non-interactive distance learning<br />1 Hour - Synchronous interactive distance learning<br />8 Hours - Reading-based asynchronous non-interactive distance learning';
                    } else {
                        echo $type == 'online' ? 'Online Course/Self Study' : 'Live Course';
                    }
                    ?></div>

                <div style="clear:both; height:5px; overflow:hidden;"></div>

                <div class="t"><?php echo strtoupper($credit_name) ?></div>
                <div style="float:left; width:20px;">&nbsp;</div>
                <div class="c"><?php echo $cert['CREDITS'] ?> <?php if($profession == "3"): ?>NBCC <?php endif; ?><?php echo $credit_name ?></div>

                <div style="clear:both; height:5px; overflow:hidden;"></div>

                <div class="t">Instructor/Author</div>
                <div style="float:left; width:20px;">&nbsp;</div>
                <div class="c"><?php echo $cert['AUTHOR'] ?></div>

                <div style="clear:both; height:5px; overflow:hidden;"></div>

                <div class="t">COMPLETION DATE</div>
                <div style="float:left; width:20px;">&nbsp;</div>
                <div class="c"><?php echo $cert['DATE_COMPLETED'] ?></div>

                <div style="clear:both; height:5px; overflow:hidden;"></div>

                <div class="t">LICENSE #</div>
                <div style="float:left; width:20px;">&nbsp;</div>
                <div class="c"><?php echo $lic_num ?></div>

                <div style="clear:both; height:5px; overflow:hidden;"></div>

            </div>
		</div>

        <?php include_once($_SERVER['DOCUMENT_ROOT'] . "/includes/cert_lower.php"); ?>

</body>
</html>
