<?php

//echo $_GET['profession'];


$loadData = true;
$loadTrainings = true;
$loadStatus = true;

include_once($_SERVER['DOCUMENT_ROOT'] . "/includes/global.php");

if(isset($_GET['profession']) && $professions[$_GET['profession']] || isset($profession))
{
	$pro_id = $profession_ids[$_GET['profession']];
	if($pro_id == "")
		$pro_id = $profession_ids[$profession];
	$trainings = $dbTrainingData->getTrainingsByProfession($pro_id);
	$proper_profession_cookie_set = true;
}

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<title><?php echo strtoupper($profession) ?> - <?php echo BUS_NAME ?> - <?php echo SITE_DISPLAY ?></title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="shortcut icon" href="<?php echo SECURE_PATH ?>/favicon.ico" />
<meta name="description" content="<?php echo BUS_NAME ?> the number one CEU provider for <?php echo $profession ?> for Continuing Education." />

<link rel="stylesheet" type="text/css" href="/css/main.css"></style>

<script language="javascript"> numberTrainings = <?php echo sizeof($trainings) ?>; </script>
<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/js.html"); ?>
<script type="text/javascript" src="/js/states.js"></script>
<script src="https://cdn.jquerytools.org/1.2.5/full/jquery.tools.min.js"></script>

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
if (google.loader.ClientLocation){
	userState = google.loader.ClientLocation.address.region.toUpperCase();
}
</script>

<div id="container">

<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/header.php"); ?>   
    
    <div id="clear10Bottom"></div>
    
    <div style="display:block;">
    
    	<div id="left">
            <?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/left_column_logged_out.php"); ?> 
        </div>
        
        <div style="float:left; margin: 4px;"></div>
        
		<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/unlimited_long.php"); ?>
        
        <div id="right">
        	
            
            <div id="marquee_line_1" style="padding-top:30px; padding-left:10px;">Available Courses</div>
    		<div id="marquee_line_2" style="padding-bottom:0px; padding-left:10px;"><?php echo $professions[$profession] ?></div>
        
        	<div id="clear10Bottom"></div>
            
            <hr style="color:#1c4280;" /><?php
            
				for($i=0; $i<sizeof($trainings); $i++)
				{
					if($trainings[$i]['EXPIRED'] != 1) { // EXPIRED VALUE FROM DB - DON'T DISPLAY COURSE
						
					?><div id="item">
						<div class="floatLeft" style="width:446px;">
                        	<div class="floatLeft" style="padding-right:10px; cursor:pointer" onClick='location.href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/";'>&nbsp;&nbsp;&nbsp;<a href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/"> &gt; </a></div>
                            <div class="floatLeft" style="width:400px;"> <a href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/"><?php echo stripslashes($trainings[$i]['TITLE_ALT']) ?></a>
                            <div id="clear5Bottom"></div>
                            <span style="font-size:12px;">&nbsp;&nbsp;&nbsp;&nbsp;Course: <a href="javascript:trainingPageToggleDiv('description', 'description<?php echo $i ?>');" style="font-weight:500; color:#41B7DD;">description</a> / <a href="javascript:trainingPageToggleDiv('objectives', 'objectives<?php echo $i ?>');" style="font-weight:500; color:#41B7DD;">objectives</a></span></div>
                            <div id="clear10Bottom"></div>
                        </div>
                        <div class="floatLeft credits" onClick='location.href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/";' style="cursor:pointer"><?php echo $trainings[$i]['CREDIT'] ?> Credits</div>
                        <div class="floatRight cost" onClick='location.href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/";' style="cursor:pointer"><?php
                        
							if($trainings[$i]['COST'] == "0")
								echo '<span style="color:red;">FREE</span>';
							else
								if(!ALL_COURSE_DISCOUNT):
									echo "$" . $trainings[$i]['COST'];
								else:
									echo "<div><del style='float:right;'>$" . $trainings[$i]['COST'] . "</del></div><div id=\"clear5Bottom\"></div><div>";
									$new_cost = ($trainings[$i]['COST'] * .5);
									
									if(strrpos(strrev($new_cost), ".") == 1)
										echo "<span style='color:red;'>$" . $new_cost .= "0</span>";
									if(!strpos($new_cost, "."))
										echo "<span style='color:red;'>$" . $new_cost .= ".00</span>";
									
									echo "</div>";
								endif;
					
						?>&nbsp;&nbsp;&nbsp;</div><br />
                        
                        <?php if(ALL_COURSE_DISCOUNT): ?><div id="clear5Bottom"></div><? endif; ?>
                        
                        <a href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/test/" class="submit_btn" style="color:#fff; font-size:12px; margin-top:5px;">POST TEST</a><a href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/" class="login_btn" style="color:#fff; font-size:12px; margin-right:6px; margin-top:5px;">TRAINING</a>
                        <div id="clear10Bottom"></div>
                    </div>
					
                    <div id="description<?php echo $i ?>" class="training_page_description">
                        <div style="float:right; width:100px;">
                        	<a href="javascript:straightTogle('description<?php echo $i ?>');" class="stdLink">CLOSE [X]</a>
                        </div><?php 
							if(file_exists($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/description.html"))
								include($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/description.html"); 
							else
								echo "No Course Description";
						?>                    	
					</div>
                    <div id="objectives<?php echo $i ?>" class="training_page_description">
                        <div style="float:right; width:100px;">
                        	<a href="javascript:straightTogle('objectives<?php echo $i ?>');" class="stdLink">CLOSE [X]</a>
                        </div><?php 
							if(file_exists($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/objectives.html"))
								include($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/objectives.html"); 
							else
								echo "No Course Objectives";
						?>                    	
					</div><?
					
					}
					
				}
			
			?>
            
            
        
        </div>
    </div>
    
</div>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/footer.php") ?>

<script>
// execute your scripts when DOM is ready. this is a good habit
$(function() {		
		
	// initialize scrollable with mousewheel support
	$(".scrollable").scrollable({ vertical: true, mousewheel: true });	
	
});
</script>

</body>
</html>
