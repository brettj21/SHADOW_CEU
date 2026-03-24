<?php

// profession 	4 types		(nurse, psych, sw, insurance)
// states		4 types		(fl, ca, oh)


$loadData = true;

$cert_id = $_GET['cid'] != "" ? $_GET['cid'] : "";

include_once($_SERVER['DOCUMENT_ROOT'] . "/includes/global.php");

if(!$isUser)
	header("location: /");

if($cert_id != "" && isset($_COOKIE['ceu']))
	$cert = TRAININGS::getCertById($cert_id, $_COOKIE['ceu']);

// THIS IS FOR TESTING ONLY AND CAN BE REMOVED ONCE DONE
$profession = $_GET['p'] != "" ? $_GET['p'] : $profession;
$state = $_GET['s'] != "" ? $_GET['s'] : $state;

$state = $cert['STATE'] != '' ? $cert['STATE'] : $state;

if($profession_ids[$profession] == "1") // NURSING
	$provider_num = CA_RN;
	
if($profession_ids[$profession] == "2" || $profession_ids[$profession] == "3" || $profession_ids[$profession] == "6") // SOCIAL WORKERS
{
	if($state == "CA")
		$provider_num = "<br />CA BBS " . BBS . "<br />CAADAC " . CAADAC . "<br />CAADE " . CAADE;
	if($state == "OH")
		$provider_num = "<br />OHIO " . OH_LIC;
		
	$provider_num .= "<br />NASW " . NASW . "<br />ASWB " . ASWB . "<br />NBCC " . NBCC . "<br />NAADAC " . NAADAC . "<br />" . APA;
}

if($profession_ids[$profession] == "4") // PSYCH
	$provider_num = "<br />" . APA . "<br />888-702-9680";

if($profession_ids[$profession] == "5") // INSURANCE
	$provider_num = CA_INSURANCE;


?><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Certificate - <?php echo BUS_NAME ?></title>
</head>

<body>

<div style="width:440px; margin: 0 auto; padding:20px;">
	<div style="float:right;"><a href="javascript:history.back(-1);" style="float:left;"><img src="/images/btn_back.png" width="82" height="34" alt="Back" border="0" style="margin-bottom:10px;" /></a> <a href="javascript:window.print();" style="float:left;"><img src="/images/btn_print.png" width="82" height="34" alt="Print" border="0" /></a></div>
</div>

<div style="clear:both; height:0px; overflow:hidden;"></div>

<div style="width:440px; margin: 0 auto; border:1px solid #999999; padding:20px;">
	<div style="border:1px solid #999999; padding:15px; text-align:center; font-size:12px; color:#000; font-family:Arial, Helvetica, sans-serif;">
    	<div style="margin:0 auto; width:203px;">
        	<img src="/images/logo_main_v2.png" width="203" height="35" border="0" alt="<?php echo FULL_DISPLAY_NAME ?>" style="margin-bottom:10px;" />
        </div>
        <span style="color:#999999;">4501 South Santa Fe Avenue | Los Angeles, CA 90058</span>
        <br /><br />
        <img src="/images/hdr_cert.gif" width="356" height="48" border="0" alt="<?php echo FULL_DISPLAY_NAME ?>" style="margin-bottom:10px;" />
        <br /><br />
    	This is to certify that <?php echo $first . " " . stripslashes($last) ?> has completed, in its entirety, the<br />following Continuing Education Activity sponsored by CEUnits.
        <br /><br />
        <span style="color:#2e3083; font-size:24px; font-weight:700; font-family:Times New Roman, Times, serif;"><?php echo $first . " " . stripslashes($last) ?></span>
        <hr style="width:360px; color:#accddc;" />
        
        <div style="padding-left:30px;">
            <div style="width:300px;">
            
                <div style="clear:both; height:5px; overflow:hidden;"></div>
            
                <div style="width:140px; display:block; float:left; text-align:right; color:#666666;">TRAINING</div>
                <div style="float:left; width:20px;">&nbsp;</div>
                <div style="width:140px; display:block; float:left; text-align:left;"><?php echo stripslashes($cert['TRAINING_TITLE']) ?></div>
                
                <div style="clear:both; height:5px; overflow:hidden;"></div>
            
            <?php if($state == "NY"): ?>
                <div style="width:140px; display:block; float:left; text-align:right; color:#666666;">TRAINING TYPE</div>
                <div style="float:left; width:20px;">&nbsp;</div>
                <div style="width:140px; display:block; float:left; text-align:left;">Online Course</div>
                
                <div style="clear:both; height:5px; overflow:hidden;"></div>
            <?php endif; ?>
                
                <div style="width:140px; display:block; float:left; text-align:right; color:#666666;">CREDITS</div>
                <div style="float:left; width:20px;">&nbsp;</div>
                <div style="width:140px; display:block; float:left; text-align:left;"><?php echo $cert['CREDITS'] ?> Credits/Hours</div>
    
                <div style="clear:both; height:5px; overflow:hidden;"></div>
                
                <div style="width:140px; display:block; float:left; text-align:right; color:#666666;">COMPLETION DATE</div>
                <div style="float:left; width:20px;">&nbsp;</div>
                <div style="width:140px; display:block; float:left; text-align:left;"><?php echo $cert['DATE_COMPLETED'] ?></div>
                
                <div style="clear:both; height:5px; overflow:hidden;"></div>
                
                <div style="width:140px; display:block; float:left; text-align:right; color:#666666;">LICENSE #</div>
                <div style="float:left; width:20px;">&nbsp;</div>
                <div style="width:140px; display:block; float:left; text-align:left;"><?php echo $lic_num ?></div>
                
                <div style="clear:both; height:5px; overflow:hidden;"></div>
				
				<?php if($profession == "insurance"): ?>
                
                    <div style="width:140px; display:block; float:left; text-align:right; color:#666666;">SSN #</div>
                    <div style="float:left; width:20px;">&nbsp;</div>
                    <div style="width:140px; display:block; float:left; text-align:left;"><?php echo substr($ssn, 0, 3) .  "-" .substr($ssn, 3, 2) . "-" . substr($ssn, 5, 4) ?></div>
                    
                    <div style="clear:both; height:5px; overflow:hidden;"></div>
                <?php endif; ?>
                
            </div>
		</div>
        <br />
        <div style="font-size:12px; color:#666666; text-align:left;">
        
        
        <?php if($profession_ids[$profession] == "1"): ?>
        	Registered Nurses: This document must be retained for a period of four years after course conclusion.<br />
        <?php endif; ?>
        
        <?php if($profession_ids[$profession] == "5"): ?>
            <br />Submitting a false or fraudulent certificate of completion to the Insurance Commissioner may subject any license application to denial, and any issued license to suspension or revocation.
            <br /><br />
            The Department of Insurance requires the CE students to retain this certificate for five (5) years.
            <br /><br />
			<?php if($state == "CA"): ?>
	            <?php echo BUS_NAME ?> will report your course completion to the California Board of Insurance within the next 14 days.<br />
            <?php endif; ?>    
        <?php endif; ?>
        
        <?php if($profession_ids[$profession] == "4"): ?>
	        CEUnits is approved by the American Psychological Association to sponsor continuing education for psychologists. CEUnits maintains responsibility for this program and its content.
        <?php endif; ?>
        
        
        
        <?php if($state == "CA" && ($profession_ids[$profession] != "1" && $profession_ids[$profession] != "4" && $profession_ids[$profession] != "5")): ?>
        	<br />This training meets the qualifications for <b><?php echo $cert['CREDITS'] ?></b> credit(s) continuing education for <b><?php echo $professions[$profession] ?></b> as required by the <b>California Board of Behavioral Sciences</b>.<br />
        <?php endif; ?>
        
        <?php if($state == "MI"): ?>
        	<br />This is a Home Study course<br />
        <?php endif; ?>
        
        <?php if($state == "NY"): ?>
        	<br />CEUnitsAtHome, LLC (dba CEUnits) is recognized by the New York State Education Department's State Board for Social Work as an approved provider of continuing education for licensed social workers <?php echo NY_LIC ?><br />
        <?php endif; ?>
        
        
        </div>
        
        <div style="clear:both; height:15px; overflow:hidden;"></div>
        
        <div style="width:385px; background-color:#e6e7e9; padding:10px;">
        
        <?php if($state == "TX"): ?>
        	<br />Texas SW - <?php echo TX_SW ?><br />
            Texas LPC - <?php echo TX_LPC ?><br />
        <?php endif; ?>
        
        	CEU Provider Number <?php echo $provider_num ?>
        </div>
        
        <div style="clear:both; height:15px; overflow:hidden;"></div>
        
        <div style="margin-left:0px; float:left; text-align:left;">
	        <?php if($profession_ids[$profession] != "5"): ?>
            	<IMG SRC="/images/signature_rw.gif" ALT="" BORDER="0" WIDTH="144" HEIGHT="31"><br>
				RACHEL WERNER<br />
                #37494
            <?php else: ?>
	        	<IMG SRC="/images/signature_sw.gif" ALT="" BORDER="0" WIDTH="164" HEIGHT="84"><br>
            	SUSAN WRIGHT<br />
                CLU, ChFC, RHU, REBC, CSA, CLTC, CCFC, CSS
            <?php endif; ?>
        </div>
        <div style="clear:both; height:5px; overflow:hidden;"></div>
        
    </div>
</div>


</body>
</html>
