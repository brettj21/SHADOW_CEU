<?php

//echo $_GET['profession'];


$loadData = true;
$loadTrainings = true;
$loadStatus = true;

include_once($_SERVER['DOCUMENT_ROOT'] . "/includes/global.php");

$disp_type = $_GET['by'];

if($profession == "insurance")
	$disp_type = "all";

if(isset($_GET['profession']) && isset($professions[$_GET['profession']]) || isset($profession))
{
	$pro_id = $profession_ids[$_GET['profession']];

	if($pro_id == "")
		$pro_id = $profession_ids[$profession];

	if($disp_type == "top" || !isset($_GET['by'])):
		$trainings = $dbTrainingData->getTrainingsByTopics($pro_id);
		$new_trainings = $dbTrainingData->getNewTrainings($pro_id);
		$top_on = "_on";
		$topics = true;
	endif;
	if($disp_type == "credits"):
		$trainings = $dbTrainingData->getTrainingsByCredits($pro_id);
		$cred_hdr = " Credit Courses";
		$cred_on = "_on";
		$credits = true;
	endif;
	if($disp_type == "all"):
		$trainings = $dbTrainingData->getTrainingsByProfession($pro_id);
		$all_on = "_on";
		$all = true;
	endif;
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

//print_r($new_trainings);
//die;

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


#sortNav_nav {
  border-bottom: 1px solid #48B4E2;
  color: #48B4E2;
  float: left;
  font-size: 12px;
  font-weight: 700;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  width: 630px;
}
a.sortNav_on {
  background-color: #48B4E2;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #FFFFFF;
  display: block;
  float: left;
  margin-left: 0;
  margin-right: 5px;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
}

a.sortNav {
  color: #48B4E2;
  display: block;
  float: left;
  margin-left: 0;
  margin-right: 5px;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
}

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
            
            <div id="sortNav_nav">
				<div style="color:#7B8B28; float:left; font-size:14px; width:150px; text-align:center">GROUP BY</div>
                
                <?php if($profession != 'insurance'): ?>
                <a href="/<?php echo $profession ?>/top/" class="sortNav<?php echo $top_on ?>">COURSE CATAGORIES</a>
				<a href="/<?php echo $profession ?>/credits/" class="sortNav<?php echo $cred_on ?>">NUMBER OF CREDITS</a>
                <?php endif; ?>
                <a href="/<?php echo $profession ?>/all/" class="sortNav<?php echo $all_on ?>">ALL COURSES</a>
            </div>
            
            <div id="clear10Bottom"></div>
            
            <?php
			
			if($topics):
			

//THIS IS FOR LISTING NEW TRAININGS
//CHECK THE getListContent FUNCTION

			if(sizeof($new_trainings)):

			?><div id="item" style="cursor:pointer;" onClick="straightTogle('group_id_x'); copyToggle('x');">
						<div class="floatLeft" style="width:446px;">
							<div class="floatLeft" style="padding-right:10px; cursor:pointer">&nbsp;&nbsp;&nbsp;<a href="/"> &gt; </a></div>
							<div class="floatLeft" style="width:400px; color:#1E2E7C; font-weight:700;">
								NEW COURSES</a>
								<div style="padding-top:5px;"></div>
								<span style="font-size:12px; color:#999999;"><?php echo sizeof($new_trainings) ?> Courses</span>
							</div>
						</div>
						<div id="expand_copy_x" style="float:right; padding-right:20px; color:#999999; font-size:12px;">+ click here</div>
						<div id="expand_copy_c_x" style="float:right; padding-right:20px; color:#999999; font-size:12px; display:none;">x close</div>
                        <div id="clear5Bottom"></div>
					</div>
					<div style="width:100%; display:none;" id="group_id_x"><?php getListContent('x', $new_trainings, $profession); ?></div><?php
			
			endif;
			
				foreach($trainings as $key=>$val):
				
					?><div id="item" style="cursor:pointer;" onClick="straightTogle('group_id_<?php echo $val[0]['GROUPING_ID'] ?>'); copyToggle('<?php echo $val[0]['GROUPING_ID'] ?>');">
						<div class="floatLeft" style="width:446px;">
							<div class="floatLeft" style="padding-right:10px; cursor:pointer">&nbsp;&nbsp;&nbsp;<a href="/"> &gt; </a></div>
							<div class="floatLeft" style="width:400px; color:#1E2E7C; font-weight:700;">
								<?php echo $key . $cred_hdr; ?></a>
								<div style="padding-top:5px;"></div>
								<span style="font-size:12px; color:#999999;"><?php echo sizeof($val) ?> Courses</span>
							</div>
						</div>
						<div id="expand_copy_<?php echo $val[0]['GROUPING_ID'] ?>" style="float:right; padding-right:20px; color:#999999; font-size:12px;">+ click here</div>
						<div id="expand_copy_c_<?php echo $val[0]['GROUPING_ID'] ?>" style="float:right; padding-right:20px; color:#999999; font-size:12px; display:none;">x close</div>
                        <div id="clear5Bottom"></div>
					</div>
					<div style="width:100%; display:none;" id="group_id_<?php echo $val[0]['GROUPING_ID'] ?>"><?php getListContent($val[0]['GROUPING_ID'], $val, $profession); ?></div>
					<?php
					
				endforeach;
			endif;
			
			if($credits):
				foreach($trainings as $key=>$val):
				
					?><div id="item" style="cursor:pointer;" onClick="straightTogle('group_id_<?php echo $key ?>'); copyToggle('<?php echo $key ?>');">
						<div class="floatLeft" style="width:446px;">
							<div class="floatLeft" style="padding-right:10px; cursor:pointer">&nbsp;&nbsp;&nbsp;<a href="/"> &gt; </a></div>
							<div class="floatLeft" style="width:400px; color:#1E2E7C; font-weight:700;">
								<?php echo $key . $cred_hdr; ?></a>
								<div style="padding-top:5px;"></div>
								<span style="font-size:12px; color:#999999;"><?php echo sizeof($val) ?> Courses</span>
							</div>
						</div>
						<div id="expand_copy_<?php echo $key ?>" style="float:right; padding-right:20px; color:#999999; font-size:12px;">+ click here</div>
						<div id="expand_copy_c_<?php echo $key ?>" style="float:right; padding-right:20px; color:#999999; font-size:12px; display:none;">x close</div>
                        <div id="clear5Bottom"></div>
					</div>
					<div style="width:100%; display:none;" id="group_id_<?php echo $key ?>"><?php getListContent($key, $val, $profession); ?></div>
					<?php
					
				endforeach;
			endif;
			
			if($all):
				 getListContent('all', $trainings, $profession); 
			endif;
			
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
</html><?php

function getListContent($group_id, $trainings, $profession) {

			for($i=0; $i<sizeof($trainings); $i++)
				{
					if($trainings[$i]['EXPIRED'] != 1) { // EXPIRED VALUE FROM DB - DON'T DISPLAY COURSE
						
					?><div id="item" style="<?php if($group_id != 'all' ): ?>background-color:#f5f5f5;<?php endif; ?>">
						<div class="floatLeft" style="width:446px;">
                        	<div style="padding-left:20px;">
	                            <div class="floatLeft" style="width:400px; font-size:12px;"> <a href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/"><?php echo stripslashes($trainings[$i]['TITLE_ALT']) ?></a>
                            	<div id="clear5Bottom"></div>
                            	<span style="font-size:12px;">&nbsp;&nbsp;&nbsp;&nbsp;Course: <a href="javascript:trainingPageToggleDiv('description', 'description<?php echo $i ?>_<?php echo $group_id ?>');" style="font-weight:500; color:#41B7DD;">description</a> / <a href="javascript:trainingPageToggleDiv('objectives', 'objectives<?php echo $i ?>_<?php echo $group_id ?>');" style="font-weight:500; color:#41B7DD;">objectives</a></span></div>
                            	<div id="clear10Bottom"></div>
                        	</div>
                        </div>
                        
                        
                        <div class="floatLeft credits" onClick='location.href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/";' style="cursor:pointer"><?php echo $trainings[$i]['CREDIT'] == '' ?  $trainings[$i]['CREDITS'] : $trainings[$i]['CREDIT']; ?> Credits</div>
                        <div class="floatRight cost" onClick='location.href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/";' style="cursor:pointer"><?php
                        
							if($trainings[$i]['COST'] == "0")
								echo '<span style="color:red;">FREE</span>';
							else
								if(!ALL_COURSE_DISCOUNT):
									echo "$" . $trainings[$i]['COST'];
								else:
									echo "<div><del style='float:right;'>$" . $trainings[$i]['COST'] . "&nbsp;</del></div><div id=\"clear5Bottom\"></div><div>";
									$new_cost = $trainings[$i]['COST'] - ($trainings[$i]['COST'] * ALL_COURSE_DISCOUNT_VALUE);
									
									if(strrpos(strrev($new_cost), ".") == 1)
										echo "<span style='color:red;'>$" . $new_cost .= "0</span>&nbsp;";
									elseif(!strpos($new_cost, "."))
										echo "<span style='color:red;'>$" . $new_cost .= ".00</span>&nbsp;";
									elseif(strrpos(strrev($new_cost), ".") == 2)
										echo "<span style='color:red;'>$" . $new_cost .= "</span>&nbsp;";
									
									echo "</div>";
								endif;
						
						?>&nbsp;&nbsp;&nbsp;</div><br />
                        
                        <?php if(ALL_COURSE_DISCOUNT): ?><div id="clear5Bottom"></div><? endif; ?>
                        
                        <a href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/test/" class="submit_btn" style="color:#fff; font-size:12px; margin-top:5px;">POST TEST</a><a href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/" class="login_btn" style="color:#fff; font-size:12px; margin-right:6px; margin-top:5px;">TRAINING</a>
                        <div id="clear10Bottom"></div>
                    </div>
                    
					
                    <div id="description<?php echo $i ?>_<?php echo $group_id ?>" class="training_page_description">
                        <div style="float:right; width:100px;">
                        	<a href="javascript:straightTogle('description<?php echo $i ?>_<?php echo $group_id ?>');" class="stdLink">CLOSE [X]</a>
                        </div><?php 
							if(file_exists($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/description.html"))
								include($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/description.html"); 
							else
								echo "No Course Description";
						?>                    	
					</div>
                    <div id="objectives<?php echo $i ?>_<?php echo $group_id ?>" class="training_page_description">
                        <div style="float:right; width:100px;">
                        	<a href="javascript:straightTogle('objectives<?php echo $i ?>_<?php echo $group_id ?>');" class="stdLink">CLOSE [X]</a>
                        </div><?php 
							if(file_exists($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/objectives.html"))
								include($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/objectives.html"); 
							else
								echo "No Course Objectives";
						?>                    	
					</div><?
					
					}
					
				}
	
			}

?>
