<?php
//echo $_GET['profession'];

$loadData = true;
$loadTrainings = true;
$loadStatus = true;

include_once($_SERVER['DOCUMENT_ROOT'] . "/includes/global.php");
$disp_type = $_GET['by'];

if($profession == "insurance")
	$disp_type = "all";

if(isset($_GET['profession']) && isset($professions[$_GET['profession']]) || isset($profession)) {
	$pro_id = $profession_ids[$_GET['profession']];

	if($pro_id == "")
		$pro_id = $profession_ids[$profession];

	if($disp_type == "top" || !isset($_GET['by'])) {
        $trainings = $dbTrainingData->getTrainingsByTopics($pro_id);
        $new_trainings = $dbTrainingData->getNewTrainings($pro_id);
        $top_on = "_on";
        $topics = true;
    }
	if($disp_type == "credits") {
        $trainings = $dbTrainingData->getTrainingsByCredits($pro_id);
        $cred_hdr = " Credit Courses";
        if ($profession == "mft-lcsw") {
            $cred_hdr = " CE Credit Hour Courses";
        }
        $cred_on = "_on";
        $credits = true;
    }
	if($disp_type == "all") {
        $trainings = $dbTrainingData->getTrainingsByProfession($pro_id);
        $all_on = "_on";
        $all = true;
    }
	$proper_profession_cookie_set = true;

} else
	$trainings = array();

if($profession == "insurance"):
	$all_on = "_on";
	$topics = false;
	$top_on = '';
	$credits = false;
	$cred_on = '';
	$all = true;
endif;

$only_NY_array = array();
if($professions[$profession] == 'Social Worker') {
	$desc_copy = "Social workers seek to improve the quality of their clients' lives.  In order to best meet the needs of your clients and stay current with the continuing education credit requirements for Social Workers, CEUnits.com is the best place to turn.  Whether you need courses on aging, child abuse, psychological disorders, dealing with various diseases or more, CE credit hours are easy to take, meet state requirements and are affordable.  Plus, you only pay when you pass!";
    $meta_title = "Social Workers Continuing Education Units CEU | CE Units";
    $meta_desc_copy = "Social Worker continuing education learning opportunties.CE credit hours are easy to take, meet state requirements and are affordable.";
} elseif($professions[$profession] == 'Psychologist') {
    $desc_copy = "Join the thousands of psychologists nationwide who rely on us to meet their psychologist CEUs. Our courses are simple to use and offer a wide array of courses related to Psychology.  Some course titles include Mindfulness in Psychotherapy, Treatment of Depression in Aging Adults, Forgiveness and many more.  Plus, you only pay when you pass in order to receive your printable certificate. Psychologists have 3 chances to pass a test for a given course.";
    $meta_title = "Psychologist Continuing Education Units | CE Units";
    $meta_desc_copy = "Take continuing education units for psychologist. Our online CE courses qualify for ASWB, NBCC Credit, NAADAC. CEUnits is approved by the American Psychological Association to sponsor continuing education for psychologists.";
    if ($state != "NY") {
        // THESE ARE EXPIRED FOR PSYCHOLOGISTS NOT IN NY - THEY WERE NOT EXPIRED IN THE DATABASE BECAUSE OF THAT
        $only_NY_array = array('170', '179', '182', '183', '185', '187', '188', '190', '199', '204', '207', '226');
    }
} elseif($professions[$profession] == 'Professional Counselor - MFT - NBCC') {
	$desc_copy = "MFTs focus on relationships within a marriage or family unit and typically treat clients as a unit. LCSWs are trained to provide therapy to individual patients in clinical settings. Both of these noble professions require CE credit hours to keep current and maintain their licensure. CEUnits.com is the best place to satisfy your CE credit hours. We offer a broad array of courses, included Spousal/Partner Abuse, Custody Divorce, Cyberbullying, Ethics and so many more. Our CE credit hours are easy to take and you only pay when you pass.<br /><br />CEUnits.com has been approved by NBCC as an Approved Continuing Education Provider, ACEP No. " . NBCC . ". Programs that do not qualify for NBCC credit are clearly identified. CEUnits.com is solely responsible for all aspects of the programs.";
    $meta_title = "MFT LCSW Continuing Education CEU - Pass the Test or Free | CE Units";
    $meta_desc_copy = "We offer a broad array of courses, included Spousal/Partner Abuse, Custody Divorce, Cyberbullying, Ethics and so many more. Get your CE credit hours to keep current and maintain your licensure.";
} elseif($professions[$profession] == 'Addiction Professional - NAADAC') {
    $desc_copy = "These courses do not qualify for NBCC CE credit hours.<br />Please see the category \"<a href=\"/mft-lcsw/\">Professional Counselors – MFTs- NBCC</a>\" for courses that qualify for NBCC CE credit hours.<br /><br />As an addiction professional specialize in prevention, intervention, treatment and recovery, you need to stay current with continuing education credits to maintain their addiction counseling certification.  Our addiction counselor CE credit hours are designed to broaden your knowledge in an ever-changing field.  CEUnits.com meets state requirements, is easy to navigate and is affordable.  You only pay when you pass the course!";
    $meta_title = "Addiction Counselor Continuing Education Units CEU  Best Value from only $5 | CE Units";
    $meta_desc_copy = "Continuing education units for counselor addiction. Cheap CE Units for social workers, psychologists, addiciton specialists, therapists and more. Get your CE credit hours to keep current and maintain your licensure.";
}

//print_r($trainings); die;
//print_r($new_trainings);
//die;

// THIS IS FOR META DESC - NEED TO ASK DAVID IF DESCRIPTION CHANGE IS GOOD
//foreach($trainings as $k=>$v):
	//echo $k . ' - ' . $v . "<br>";
//endforeach;

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<title><?php echo $meta_title ?></title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="shortcut icon" href="<?php echo SECURE_PATH ?>/favicon.ico" />
<meta name="description" content="<?php echo $meta_desc_copy ?>" />

    <meta http-equiv="cleartype" content="on">
    <meta name="HandheldFriendly" content="True">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

<link rel="stylesheet" type="text/css" href="/css/main.css" />
<link rel="stylesheet" type="text/css" href="/css/body.css" />
<link rel="stylesheet" type="text/css" href="/css/header.css" />

<script language="javascript"> numberTrainings = <?php echo sizeof($trainings) ?>; </script>
<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/js.html"); ?>
<script type="text/javascript" src="/js/states.js"></script>

<!-- THIS IS FOR THE LOCATION / STATE FUNCTION RETURNING VISITORS STATE -->
<script type="text/javascript" src="https://www.google.com/jsapi?key=ABCDEFG"></script>
<link rel="stylesheet" type="text/css" href="/css/scrollable-vertical.css">

<style>

#line_seperator {  height:4px; background-color:#12155a; display:block; margin-bottom:10px; }

#subhdr { color:#726b95; font-size:16px; }

a.light_blue { color:#726b95; font-size:12px; }

</style>

</head>

<body>
<script>

function copyToggle(tog) {

		$("#expand_copy_" + tog).toggle();
		$("#expand_copy_c_" + tog).toggle();

}

if (google.loader.ClientLocation){
	userState = google.loader.ClientLocation.address.region.toUpperCase();
}
</script>

<div id="container" class="standard-page">
    <main id="panel">

<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/header.php"); ?>

    <div id="clear10Bottom"></div>

    <div style="display:block;">


    	<div class="left">
            <?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/left_column_logged_out.php"); ?>
        </div>

        <div style="float:left; margin: 4px;"></div>

       	<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/unlimited_long.php"); ?>

        <div class="right">
            
            <?php if(TREATMENT_INNOVATIONS_ACTIVE) { ?>
            <div style="width:98%; display:block; border:1px solid #1a437b; border-radius:5px; background-color:#f5f5f5; padding:5px; margin-top:20px;">
                <div id="marquee_line_1" style="padding-top:5px; padding-left:10px;">LIVE WEBINAR OFFERING</div>
                <div style="padding-left:10px; color:#1e2e7c; font-size:16px;">
                    <br />
                    Treatment Innovations <br /> <b>Seeking Safety</b>
                    <br /><br />
                    <b>6 CE Credits</b> - click links below for more info
                    <br><br>
                    <div>
                        <?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/seeking_safety.html"); ?>
                        <br /><br />
                    </div>
                    <!--div id="mobile_id_login_btn" style="float:none !important;">
                        <a href="" class="submit_btn" style="font-size:13px; margin-top:2px; float:none !important;">More Info</a>
                    </div-->
                </div>
            </div>
            <?php } ?>

            <div id="marquee_line_1" style="padding-top:40px; padding-left:10px;">Available Courses</div>
    		<div id="marquee_line_2" style="padding-bottom:0px; padding-left:10px;"><?php echo $professions[$profession] ?></div>
        	<div style="padding:10px;"><?php echo $desc_copy; ?></div>
			<div id="clear10Bottom"></div>

            <div class="sortNav_nav">
				<div class="title">GROUP BY</div>
                <div class="links">
                    <a href="/<?php echo $profession ?>/" class="sortNav<?php echo $top_on ?>">COURSE CATEGORIES</a>
                    <a href="/<?php echo $profession ?>/credits/" class="sortNav<?php echo $cred_on ?>">CE CREDIT HOURS</a>
                    <a href="/<?php echo $profession ?>/all/" class="sortNav<?php echo $all_on ?>">ALL COURSES</a><?php

                    if($utype == "livingworks"):
                        echo '<a href="/livingworks/ce/" class="sortNav' . $all_on . '">LIVINGWORKS</a>';
                    endif;

                    ?></div>
                <div class="links2">
                    <a href="/<?php echo $profession ?>/" class="sortNav<?php echo $top_on ?>">COURSE CATEGORIES</a><br />
                    <a href="/<?php echo $profession ?>/credits/" class="sortNav<?php echo $cred_on ?>">CE CREDIT HOURS</a><br />
                    <a href="/<?php echo $profession ?>/all/" class="sortNav<?php echo $all_on ?>">ALL COURSES</a><?php

                    if($utype == "livingworks"):
                        echo '<br /><a href="/livingworks/ce/" class="sortNav' . $all_on . '">LIVINGWORKS</a>';
                    endif;

                    ?></div>
            </div>

            <div id="clear10Bottom"></div>

            <?php

        if($topics) {

//THIS IS FOR LISTING NEW TRAININGS
//CHECK THE getListContent FUNCTION

			if(!empty($new_trainings)) {
			    ?><div id="item" style="cursor:pointer;" onClick="straightTogle('group_id_x'); copyToggle('x');">
						<div class="floatLeft">
							<div class="floatLeft" style="padding-right:10px; cursor:pointer">&nbsp;&nbsp;&nbsp; &gt; </div>
							<div class="floatLeft h-name">
								NEW COURSES</a>
								<div style="padding-top:5px;"></div>
								<span style="font-size:12px; color:#999999;"><?php echo count($new_trainings) ?> Courses</span>
							</div>
						</div>
						<div id="expand_copy_x" style="float:right; padding-right:20px; color:#999999; font-size:12px;">+ click here</div>
						<div id="expand_copy_c_x" style="float:right; padding-right:20px; color:#999999; font-size:12px; display:none;">x close</div>
                        <div id="clear5Bottom"></div>
                </div>
                <div style="width:100%; display:none;" id="group_id_x"><?php getListContent('x', $new_trainings, $profession, $only_NY_array); ?></div><?php
            }

				foreach($trainings as $key=>$val) {

					?><div id="item" style="cursor:pointer;" onClick="straightTogle('group_id_<?php echo str_replace(".", "", $val[0]['GROUPING_ID']) ?>'); copyToggle('<?php echo str_replace(".", "", $val[0]['GROUPING_ID']) ?>');">
						<div class="floatLeft">
							<div class="floatLeft" style="padding-right:10px; cursor:pointer">&nbsp;&nbsp;&nbsp; &gt; </div>
							<div class="floatLeft h-name">
								<?php echo $key . $cred_hdr; ?></a>
								<div style="padding-top:5px;"></div>
								<span style="font-size:12px; color:#999999;"><?php echo sizeof($val) ?> Courses</span>
							</div>
						</div>
						<div id="expand_copy_<?php echo str_replace(".", "", $val[0]['GROUPING_ID'].'') ?>" style="float:right; padding-right:20px; color:#999999; font-size:12px;">+ click here</div>
						<div id="expand_copy_c_<?php echo str_replace(".", "", $val[0]['GROUPING_ID']) ?>" style="float:right; padding-right:20px; color:#999999; font-size:12px; display:none;">x close</div>
                        <div id="clear5Bottom"></div>
					</div>
					<div style="width:100%; display:none;" id="group_id_<?php echo str_replace(".", "", $val[0]['GROUPING_ID']) ?>"><?php
                        getListContent(str_replace(".", "", $val[0]['GROUPING_ID']), $val, $profession, $only_NY_array);
                    ?></div><?php
                }
        }

			if($credits) {
				foreach($trainings as $key=>$val) {

					?><div id="item" style="cursor:pointer;" onClick="straightTogle('group_id_<?php echo str_replace(".", "", $key) ?>'); copyToggle('<?php echo str_replace(".", "", $key) ?>');">
						<div class="floatLeft">
							<div class="floatLeft" style="padding-right:10px; cursor:pointer">&nbsp;&nbsp;&nbsp; &gt; </div>
							<div class="floatLeft h-name"><?php

								$goKey = str_replace(".", "", $key);
								if(strpos($key, ".00")):
									$key = str_replace(".00", "", $key);
								endif;

								echo $key . $cred_hdr; ?></a>

                                <div style="padding-top:5px;"></div>
								<span style="font-size:12px; color:#999999;"><?php echo sizeof($val) ?> Courses</span>
							</div>
						</div>
						<div id="expand_copy_<?php echo str_replace(".", "", $key) ?>" style="float:right; padding-right:20px; color:#999999; font-size:12px;">+ click here</div>
						<div id="expand_copy_c_<?php echo str_replace(".", "", $key) ?>" style="float:right; padding-right:20px; color:#999999; font-size:12px; display:none;">x close</div>
                        <div id="clear5Bottom"></div>
					</div>
					<div style="width:100%; display:none;" id="group_id_<?php echo $goKey ?>"><?php getListContent($goKey, $val, $profession, $only_NY_array); ?></div>
					<?php

				}
            }

			if($all) {
                getListContent('all', $trainings, $profession, $only_NY_array);
            }

			?>

        </div>
    </div>
    </main>
</div><?php

include($_SERVER['DOCUMENT_ROOT'] . "/includes/mobile_pop_nav.php");
include("includes/footer.php");
include($_SERVER['DOCUMENT_ROOT'] . "/includes/js_lower.html");

?>

<script>
// execute your scripts when DOM is ready. this is a good habit
$(function() {

	// initialize scrollable with mousewheel support
	$(".scrollable").scrollable({ vertical: true, mousewheel: true });

});
</script>
<style>

</style>
</body>
</html><?php

function getListContent($group_id, $trainings, $profession, $only_NY_array) {

    for($i=0; $i<sizeof($trainings); $i++) {

        $course_cost = $trainings[$i]['COST'];
        $is_free = false;
        if($course_cost == '0') {
            $course_cost = '<span style="color:red;">FREE</span>';
            $is_free = true;
        } else {
            $course_cost = (float)$course_cost;
        }


        // EXPIRED VALUE FROM DB - DON'T DISPLAY COURSE
        if($trainings[$i]['EXPIRED'] != 1 && !in_array($trainings[$i]['TRAINING_ID'], $only_NY_array)) {

            ?><div id="item" style="<?php if($group_id != 'all' ) { ?>background-color:#f5f5f5;<?php } ?>">
                <div class="floatLeft t-name">
                    <div class="floatLeft"><?php

                        $disp_title = stripslashes($trainings[$i]['TITLE_ALT']);
                        switch ($trainings[$i]['TRAINING_ID']) {
                            case 215:
                                $disp_title = "LivingWorks ASIST v.1.1";
                                break;
                            case 253:
                                $disp_title = "LivingWorks ASIST v.1.2";
                                break;
                            case 217:
                                $disp_title = "SafeTALK v.2.2";
                                break;
                            case 254:
                                $disp_title = "SafeTALK v.3";
                                break;
                        }

                        ?><a href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/<?php echo getStrForUrl($trainings[$i]['TITLE_ALT']); ?>/"><?php echo $disp_title ?></a>

                    <div id="clear5Bottom"></div>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp; Course: <a href="javascript:trainingPageToggleDiv('description', 'description<?php echo $i ?>_<?php echo $group_id ?>');" style="font-weight:500; color:#41B7DD;">description</a> / <a href="javascript:trainingPageToggleDiv('objectives', 'objectives<?php echo $i ?>_<?php echo $group_id ?>');" style="font-weight:500; color:#41B7DD;">objectives</a></span></div>
                    <div id="clear10Bottom"></div>
                </div>


                <div class="floatLeft credits" onClick='location.href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/";' style="cursor:pointer"><?php echo $trainings[$i]['CREDIT'] == '' ?  ($trainings[$i]['CREDITS']+0) : ($trainings[$i]['CREDIT']+0);

                if($profession == 'mft-lcsw' && !strpos("x".$trainings[$i]['TITLE_ALT'], "LivingWorks")) {
                    ?> NBCC<?php
                }
                ?> CE credit hours
                </div>
                <div class="floatRight cost" onClick='location.href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/";' style="cursor:pointer"><?php

                    if($is_free) {
                        echo $course_cost;
                    } else {
                        if (!ALL_COURSE_DISCOUNT) {
                            echo "$" . $course_cost;
                        } else {
                            echo "<div><del style='float:right;'>$" . $course_cost . "&nbsp;</del></div><div id=\"clear5Bottom\"></div><div>";
                            $new_cost = $course_cost - round(($course_cost * ALL_COURSE_DISCOUNT_VALUE), 2);

                            if (strrpos(strrev($new_cost), ".") == 1) {
                                echo "<span style='color:red;'>$" . $new_cost .= "0</span>&nbsp;";
                            } elseif (!strpos($new_cost, ".")) {
                                echo "<span style='color:red;'>$" . $new_cost .= ".00</span>&nbsp;";
                            } elseif (strrpos(strrev($new_cost), ".") == 2) {
                                echo "<span style='color:red;'>$" . $new_cost .= "</span>&nbsp;";
                            }
                            echo "</div>";
                        }
                    }
                ?></div><br /><?php

                 if(ALL_COURSE_DISCOUNT) {
                    ?><div id="clear5Bottom"></div><?php
                 } ?>

                <!--<a href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/test/" class="submit_btn" style="color:#fff; font-size:12px; margin-top:5px;">POST TEST</a>--><a href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/<?php echo getStrForUrl($trainings[$i]['TITLE_ALT']); ?>/" class="login_btn" style="color:#fff; font-size:12px; margin-right:6px; margin-top:5px;">MORE INFO</a>
                <div id="clear10Bottom"></div>
            </div>

            <div id="description<?php echo $i ?>_<?php echo $group_id ?>" class="training_page_description">
                <div style="float:right; width:100px;">
                    <a href="javascript:straightTogle('description<?php echo $i ?>_<?php echo $group_id ?>');" class="stdLink">CLOSE [X]</a>
                </div>
                <br /><br />
                This <?php

                    $cr = $trainings[$i]['CREDIT'];
                    if(strpos($cr, ".00")) {
                        $cr = str_replace(".00", "", $cr);
                    }
                    echo $cr;

                    if($profession == 'mft-lcsw') {
                        echo ' CE credit hour course';
                    } else {
                        echo ' credit course';
                    }

                 ?> is designed for social workers, psychologists, counselors, therapists, nurses and other health care professionals, and is at the intermediate instructional level.
                 <br /><br /><?php
                
                    $sm_tid = array('219', '221', '222', '223', '224');
                    $sm2_tid = array('215', '216');
                    if(in_array($trainings[$i]['TRAINING_ID'],$sm_tid)) {
                        echo 'Dr. Miller and the ICCE receive compensation through the sales of this manual. There is no outside commercial support related to this CE program and no known conflict of interest.';
                    } elseif(in_array($training_id,$sm2_tid)) {
                        echo 'Workshop presenter is compensated through participant training fees. There is no outside commercial support related to this CE program and no known conflict of interest.';
                    } else {
                        ?>There is no known conflict of interest or commercial support related to this CE program.<?php
                    }

                    ?><br /><br /><?php

                    if(file_exists($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/description.html")) {
                        echo "For further description please click on the course training.";
                        //include($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/description.html");
                    } else {
                        echo "No Course Description";
                    }

                ?>
            </div>
            <div id="objectives<?php echo $i ?>_<?php echo $group_id ?>" class="training_page_description">
                <div style="float:right; width:100px;">
                    <a href="javascript:straightTogle('objectives<?php echo $i ?>_<?php echo $group_id ?>');" class="stdLink">CLOSE [X]</a>
                </div><?php
                    if(file_exists($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/objectives.html")) {
                        include($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/objectives.html");
                    } else {
                        echo "No Course Objectives";
                    }
                ?>
            </div><?php

        }

    }

}

?>
<script>
$('#right ul').append('<LI>Apply knowledge from this course to practice and/or other professional contexts.');
</script>