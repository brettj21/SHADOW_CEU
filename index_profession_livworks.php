<?php

//echo $_GET['profession']; 

$loadData = true;
$loadTrainings = true;
$loadStatus = true;

include_once($_SERVER['DOCUMENT_ROOT'] . "/includes/global.php");

$disp_type = $_GET['by'];

$trainings = $dbTrainingData->getTrainingsByProfession('7');

//print_r($trainings);
?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<title><?php echo strtoupper($profession) ?> Continuing Education Units - <?php echo SITE_DISPLAY ?></title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="shortcut icon" href="<?php echo SECURE_PATH ?>/favicon.ico" />
<meta name="description" content="Take continuing education units for <?php echo $profession ?>. Only pay when you pass or it's free. Learn about CE for <?php echo $profession ?> from CEUnits.com" />

    <meta http-equiv="cleartype" content="on">
    <meta name="HandheldFriendly" content="True">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

<link rel="stylesheet" type="text/css" href="/css/main.css" />
<link rel="stylesheet" type="text/css" href="/css/main_lw_addition.css" />
<link rel="stylesheet" type="text/css" href="/css/body.css" />
<link rel="stylesheet" type="text/css" href="/css/header.css" />

<script language="javascript"> numberTrainings = <?php echo sizeof($trainings) ?>; </script>
<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/js.html"); ?>
<script type="text/javascript" src="/js/states.js"></script>

<!-- THIS IS FOR THE LOCATION / STATE FUNCTION RETURNING VISITORS STATE -->
<script type="text/javascript" src="https://www.google.com/jsapi?key=ABCDEFG"></script>
<link rel="stylesheet" type="text/css" href="/css/scrollable-vertical.css"></style>

<style>

#left { float:left; width:310px;  }
#right { float:left; width:616px;  }

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
        
        	
            <div id="marquee_line_1" style="padding-top:30px; padding-left:10px;">Available Courses</div>
    		<div id="marquee_line_2" style="padding-bottom:0px; padding-left:10px;"><img src="/images/lw_horizontal_logo.jpg" width="284" height="40" alt="" border="0" align="" style="margin-bottom:30px; margin-top:10px;" /></div>
        
			<div id="clear10Bottom"></div>
            <div class="sortNav_nav">
                <div class="title">GROUP BY</div>
                <div class="links">
                    <a href="/<?php echo $profession ?>/" class="sortNav<?php echo $top_on ?>">COURSE CATEGORIES</a>
                    <a href="/<?php echo $profession ?>/credits/" class="sortNav<?php echo $cred_on ?>">CE CREDIT HOURS</a>
                    <a href="/<?php echo $profession ?>/all/" class="sortNav<?php echo $all_on ?>">ALL COURSES</a>
                    <a href="/livingworks/ce/" class="sortNav_on<?php echo $all_on ?>">LIVINGWORKS</a>
                </div>
                <div class="links2">
                    <a href="/<?php echo $profession ?>/" class="sortNav<?php echo $top_on ?>">COURSE CATEGORIES</a><br />
                    <a href="/<?php echo $profession ?>/credits/" class="sortNav<?php echo $cred_on ?>">CE CREDIT HOURS</a><br />
                    <a href="/<?php echo $profession ?>/all/" class="sortNav<?php echo $all_on ?>">ALL COURSES</a><br />
                    <a href="/livingworks/ce/" class="sortNav_on<?php echo $all_on ?>">LIVINGWORKS</a>
                </div>
            </div>
            
            <div id="clear10Bottom"></div>
            
            <?php getListContent('all', $trainings, $profession, $utype); ?>
        
                    
        </div>
    </div>

    </main>
</div><?php

include($_SERVER['DOCUMENT_ROOT'] . "/includes/mobile_pop_nav.php");
include("includes/footer.php");
include($_SERVER['DOCUMENT_ROOT'] . "/includes/js_lower.html");

?>

<script>
$(function() {
	// initialize scrollable with mousewheel support
	$(".scrollable").scrollable({ vertical: true, mousewheel: true });
});
</script>

</body>
</html><?php

function getListContent($group_id, $trainings, $profession, $utype) {

			for($i=0; $i<sizeof($trainings); $i++) {
					if($trainings[$i]['EXPIRED'] != 1) { // EXPIRED VALUE FROM DB - DON'T DISPLAY COURSE

                        $disp_title = stripslashes($trainings[$i]['TITLE_ALT']);
                        switch ($trainings[$i]['TRAINING_ID']) {
                            case 215:
                                $disp_title = "LivingWorks ASIST v.11";
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

					?><div id="item" style="<?php if($group_id != 'all' ): ?>background-color:#f5f5f5;<?php endif; ?>">
						<div class="floatLeft t-name">
                            <div class="floatLeft"> <a href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/"><?php echo $disp_title ?></a>
                            <div id="clear5Bottom"></div>
                            <span style="font-size:12px;">&nbsp;&nbsp;&nbsp;&nbsp;Course: <a href="javascript:trainingPageToggleDiv('description', 'description<?php echo $i ?>_<?php echo $group_id ?>');" style="font-weight:500; color:#41B7DD;">description</a> / <a href="javascript:trainingPageToggleDiv('objectives', 'objectives<?php echo $i ?>_<?php echo $group_id ?>');" style="font-weight:500; color:#41B7DD;">objectives</a></span></div>
                            <div id="clear10Bottom"></div>
                        </div>


                        <div class="floatLeft credits" onClick='location.href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/";' style="cursor:pointer"><?php echo $trainings[$i]['CREDIT'] == '' ?  $trainings[$i]['CREDITS'] : $trainings[$i]['CREDIT']; ?> Credits</div>
                        <div class="floatRight cost" onClick='location.href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/";' style="cursor:pointer"><?php

							if($trainings[$i]['COST'] == "0") {
                                echo '<span style="color:red;">FREE</span>';
                            } else {
                                if (!ALL_COURSE_DISCOUNT) {
                                    echo "$" . $trainings[$i]['COST'];
                                } else {
                                    echo "<div><del style='float:right;'>$" . $trainings[$i]['COST'] . "&nbsp;</del></div><div id=\"clear5Bottom\"></div><div>";
                                    $new_cost = $trainings[$i]['COST'] - ($trainings[$i]['COST'] * ALL_COURSE_DISCOUNT_VALUE);

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
                        }

                        ?><a href="/<?php
							if($utype == "livingworks") {
								echo "livingworks";
							} else {
                                echo $profession;
                            }

						?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/test/" class="submit_btn" style="color:#fff; font-size:12px; margin-top:5px;">POST TEST</a><a href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/" class="" style="color:#fff; font-size:12px; margin-right:6px; margin-top:5px;"></a>
                        <div id="clear10Bottom"></div>
                    </div>


                    <div id="description<?php echo $i ?>_<?php echo $group_id ?>" class="training_page_description">
                        <div style="float:right; width:100px;">
                        	<a href="javascript:straightTogle('description<?php echo $i ?>_<?php echo $group_id ?>');" class="stdLink">CLOSE [X]</a>
                        </div><?php
							if($trainings[$i]['DESCRIPTION'] == '' && file_exists($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/description.html")) {
                                include($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/description.html");
                            } elseif($trainings[$i]['DESCRIPTION'] != '') {
                                echo $trainings[$i]['DESCRIPTION'];
                            } else {
                                echo "No Course Description";
                            }
						?>
					</div>
                    <div id="objectives<?php echo $i ?>_<?php echo $group_id ?>" class="training_page_description">
                        <div style="float:right; width:100px;">
                        	<a href="javascript:straightTogle('objectives<?php echo $i ?>_<?php echo $group_id ?>');" class="stdLink">CLOSE [X]</a>
                        </div><?php
							if($trainings[$i]['OBJECTIVES'] == '' && file_exists($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/objectives.html")) {
                                include($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/objectives.html");
                            } elseif($trainings[$i]['OBJECTIVES'] != '') {
                                echo $trainings[$i]['OBJECTIVES'];
                            } else {
                                echo "No Course Objectives";
                            }
						?>
					</div><?php

					}

				}

			}

?>
