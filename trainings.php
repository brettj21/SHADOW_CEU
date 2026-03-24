<?php

header("location: /");

$loadData = true;
$loadTrainings = true;

include_once($_SERVER['DOCUMENT_ROOT'] . "/includes/global.php");

if(isset($dbPro))
	$pro_id = $profession_ids[$dbPro];
else
	$pro_id = $profession_ids[$_COOKIE['pro']];

if($pro_id == "")
	header("location: /");
	
	$trainings = $dbTrainingData->getTrainingsByProfession($pro_id);
	$trainings = orderTrainings($trainings);
//}

?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<title>Trainings - <?php echo BUS_NAME ?></title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="shortcut icon" href="<?php echo SECURE_PATH ?>/favicon.ico" />
<meta name="description" content="Check out the full list of all of our courses." />

<script language="javascript"> numberTrainings = <?php echo sizeof($trainings) ?>; </script>
<?php include("includes/js.html"); ?>
<link rel="stylesheet" type="text/css" href="/css/main.css" />

    <link rel="stylesheet" type="text/css" href="/css/body.css" />
    <link rel="stylesheet" type="text/css" href="/css/header.css" />


</head>

<body>

<div id="container">

    <main id="panel">
<?php include("includes/header.php"); ?>
    
<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/nav_subpage.php"); ?>  
        
    
    <div id="clear5Bottom"></div>
    
    <div id="training_info">
    	<div id="title_box">
        	<br />
	    	<span class="title">TRAININGS</span>
        </div>
		<div id="clear25Bottom"></div>
		<div id="training_list"><?php
    
			if(sizeof($trainings))
			{
				for($i=0; $i<sizeof($trainings); $i++)
				{
					?><div id="clear20Bottom"></div>
        			<div id="item"> 
                        
                        <div id="title">
                            <?php echo $trainings[$i]['TITLE_ALT'] ?><br />
                            <span>By: <?php echo getAuthorIfMultiple($trainings[$i]['AUTHOR'], $trainings[$i]['AUTHOR_LICENSE']) ?></span> 
                        </div>
                        
                        <div id="links">
                            <a href="javascript:trainingPageToggleDiv('description', 'description<?php echo $i ?>');" class="help_link">Course Description</a>
                            <br /><br />
                            <a href="javascript:trainingPageToggleDiv('objectives', 'objectives<?php echo $i ?>');" class="help_link">Course Objectives</a>
                        </div>
                        
                        <div id="cost">
                            <?php echo $trainings[$i]['CREDIT'] ?> Credits <br /><span style="color:#333333;"><?php
								if($trainings[$i]['COST'] != "0") {
									?> $<?php echo $trainings[$i]['COST'];
								} else {
									?><span class="error_msg" style="color:red;">FREE</span><?php
								}
								
								?></span>
                            <div id="clear5Bottom"></div>
<!--                        <span style="color:#5E78B3; font-weight:500; font-size:12px;">27 questions</span> -->
                            <div id="clear20Bottom"></div>
                        </div>
                        
                        <div id="buttons">
                            <a href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/" class="plain_button" style="margin-left:20px;">READ TRAINING</a>
                            <div id="clear15Bottom"></div><?php
							
							if($logged_in)
							{
                            	?><a href="/<?php echo $profession ?>/<?php echo $trainings[$i]['TRAINING_ID'] ?>/test/" class="plain_button" style="margin-left:20px;">POST TEST</a><?php
							}
							
                        ?></div>
                        
                        <div id="clearBottom"></div>
                    </div>
                    
					<div id="description<?php echo $i ?>" class="training_page_description">
                    	<div style="float:left; width:800px;"><?php 
							if(file_exists($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/description.html"))
								include($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/description.html"); 
							else
								echo "No Coruse Description";
						?></div>
                        <div style="float:left; width:100px;">
                        	<a href="javascript:straightTogle('description<?php echo $i ?>');" class="stdLink">CLOSE [X]</a>
                        </div>
                        <div id="clearBottom"></div>
                    </div>
                    
					<div id="objectives<?php echo $i ?>" class="training_page_description">
                    	<div style="float:left; width:800px;"><?php 
							if(file_exists($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/objectives.html"))
								include($_SERVER['DOCUMENT_ROOT'] . "/trainings/" . $trainings[$i]['TRAINING_ID'] . "/objectives.html");
							else
								echo "No Course Objectives";
							?></div>
                        <div style="float:left; width:100px;">
                        	<a href="javascript:straightTogle('objectives<?php echo $i ?>');" class="stdLink">CLOSE [X]</a>
                        </div>
                        <div id="clearBottom"></div>
                    </div>
					<?
				}
			}

		?></div>

	</div>
    </main>
</div><?php

include($_SERVER['DOCUMENT_ROOT'] . "/includes/mobile_pop_nav.php");
include("includes/footer.php");
include($_SERVER['DOCUMENT_ROOT'] . "/includes/js_lower.html");

?>

</body>
</html>