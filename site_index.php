<?php

$loadData = true;
$loadTrainings = true;

include_once($_SERVER['DOCUMENT_ROOT'] . "/includes/global.php");

$trainings = $dbTrainingData->getGenericTrainings();
$trainings = orderTrainings($trainings);
	
?><!DOCTYPE html>
<html>
<head>
<link rel="shortcut icon" href="/favicon.ico">
<link rel="stylesheet" type="text/css" href="/css/main.css"></style>
<link rel="stylesheet" type="text/css" href="/css/font.css"></style>
<title>Site Index | CE Units</title>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="robots" content="noindex, follow" />
<meta name="description" content="Discover all CE Units Courses. You only pay when you pass or it's free. Cheap CE Units for social workers, psychologists, addiciton specialists, therapists and more." />

</head>

<body marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">


<a href="<?php echo SECURE_PATH ?>/">CE Units</a><br>
<a href="<?php echo SECURE_PATH ?>/login/">Login</a><br>
<a href="<?php echo SECURE_PATH ?>/login/recover/">Forgot Password</a><br>
<a href="<?php echo SECURE_PATH ?>/register/">Register</a><br>
<a href="<?php echo SECURE_PATH ?>/contact/">Contact <?php echo BUS_NAME ?></a><br>
<a href="<?php echo SECURE_PATH ?>/policies/">Policies</a><br>
<a href="<?php echo SECURE_PATH ?>/faq/">FAQ / HELP</a><br>
<a href="<?php echo SECURE_PATH ?>/map"><?php echo BUS_NAME ?> Accreditations</a><br>
<a href="<?php echo SECURE_PATH ?>/register/">Register</a><br>
<a href="<?php echo SECURE_PATH ?>/update_license/">License Update</a><br>
<a href="<?php echo FACEBOOK ?>"><?php echo BUS_NAME ?> on Facebook</a><br>
<a href="<?php echo TWITTER ?>"><?php echo BUS_NAME ?> on Twitter</a><br><?php

foreach($professions as $key => $val) {
	
	$pro_trainings = $dbTrainingData->getTrainingsByProfession($profession_ids[$key]);
//print_r($pro_trainings);
//die;
	echo '<a href="' . SECURE_PATH . '/' . $key . '/">' . $val . '</a><br />';
	
		
	for($i=0; $i<sizeof($trainings); $i++) {
		if($pro_trainings[$i]['TRAINING_ID'] != "")
		{

//			echo "\n\t\t" . "<url>" . "\n\t\t\t" . "<loc>" .  SECURE_PATH . '/' . $key . '/' . $pro_trainings[$i]['TRAINING_ID'] . '/' .  getStrForUrl($pro_trainings[$i]['TITLE']) .  "</loc>" . "\n\t\t" . "</url>";

			echo '&nbsp;&nbsp;&nbsp;&nbsp;<a href="' . SECURE_PATH . '/' . $key . '/' . $pro_trainings[$i]['TRAINING_ID'] . '/';
			echo getStrForUrl($pro_trainings[$i]['TITLE']);
			echo '">' . $val . " Training - " . $pro_trainings[$i]['TITLE'] . '</a><br />';
			//echo '&nbsp;&nbsp;&nbsp;&nbsp;<a href="' . SECURE_PATH . '/' . $key . '/' . $pro_trainings[$i]['TRAINING_ID'] . '/test/">' . $val . " Post Test - " . $pro_trainings[$i]['TITLE'] . '</a><br />';

		}
	}

}

?></body>
</html>