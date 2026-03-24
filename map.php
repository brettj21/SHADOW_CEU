<?php

$loadData = true;

include_once($_SERVER['DOCUMENT_ROOT'] . "/includes/global.php");

?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>CEUnits Accreditations</title>
    
    <meta http-equiv="cleartype" content="on">
    <meta name="HandheldFriendly" content="True">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

<?php include("includes/js.html"); ?>
<script language="javascript">AC_FL_RunContent = 0;</script>
<script src="/js/AC_RunActiveContent.js" language="javascript"></script>
<link rel="stylesheet" type="text/css" href="/css/main.css"></style>


</head>

<body>

<div id="container">

<?php include("includes/header.php"); ?>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/includes/nav_subpage.php"); ?>


    <div id="clear5Bottom"></div>

    <script language="javascript">
	if (AC_FL_RunContent == 0) {
		alert("This page requires AC_RunActiveContent.js.");
	} else {
		AC_FL_RunContent(
			'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0',
			'width', '985',
			'height', '591',
			'src', '/swf/map2',
			'quality', 'high',
			'pluginspage', 'http://www.macromedia.com/go/getflashplayer',
			'align', 'middle',
			'play', 'true',
			'loop', 'true',
			'scale', 'showall',
			'wmode', 'transparent',
			'devicefont', 'false',
			'id', 'map',
			'bgcolor', '#ffffff',
			'name', 'map2',
			'menu', 'true',
			'allowFullScreen', 'false',
			'allowScriptAccess','sameDomain',
			'movie', '/swf/map2',
			'salign', ''
			); //end AC code
	}
</script>


	<?php include("includes/footer_sub.php") ?>

</div>

<?php include("includes/footer.php") ?>

</body>
</html>
