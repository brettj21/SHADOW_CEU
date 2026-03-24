<?php


$URL = 'http://208.16.193.94/CEBrokerWebService/CEBrokerWebService.asmx/UploadXMLStringXMLType' ;
$URL = 'http://test.ws.cebroker.com/CEBrokerWebService.asmx/UploadXMLStringXMLType';

//$encoded = urlencode(')
$encoded = 'InXML=<licensees id_parent_provider="5087" upload_key="4UF3V63P"><licensee><licensee_profession>PY</licensee_profession><licensee_number>7631</licensee_number></licensee></licensees>';
$course_test = 'InXML=<rosters id_parent_provider="5087" upload_key="4UF3V63P" test="true"><roster><id_provider>5087</id_provider><provider_course_code/><id_course>63191</id_course><id_publishing>159647</id_publishing><end_date>17/01/2012</end_date><attendees><attendee><licensee_profession>PY</licensee_profession><licensee_number>7631</licensee_number><first_name>ROALD</first_name><last_name>GARCIA</last_name><cebroker_state>FL</cebroker_state><date_completed>17/01/2012</date_completed><ce_credit_hours>3.0</ce_credit_hours></attendee></attendees></roster><roster><id_provider>5087</id_provider><provider_course_code/><id_course>223811</id_course><id_publishing>159647</id_publishing><end_date>06/01/2012</end_date><attendees><attendee><licensee_profession>PY</licensee_profession><licensee_number>7631</licensee_number><first_name>ROALD</first_name><last_name>GARCIA</last_name><cebroker_state>FL</cebroker_state><date_completed>06/01/2012</date_completed><ce_credit_hours>3.0</ce_credit_hours></attendee></attendees></roster></rosters>';

$curlHandle	=	curl_init();
//	curl_setopt($curlHandle, CURLOPT_COOKIE, $headers);
//	curl_setopt($curlHandle, CURLOPT_HTTPHEADER, array("POST /CEBrokerWebService/CEBrokerWebService.asmx/UploadXMLStringXMLType HTTP/1.1", "Content-Type: application/x-www-form-urlencoded","Host: 208.16.193.94", "Content-length: ".strlen($test))); 
	curl_setopt($curlHandle, CURLOPT_URL, $URL);
	curl_setopt($curlHandle, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($curlHandle, CURLOPT_TIMEOUT,500);
	curl_setopt($curlHandle, CURLOPT_POST, true);
	curl_setopt($curlHandle, CURLOPT_POSTFIELDS, $course_test);
	curl_setopt($curlHandle, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
$resp	= curl_exec($curlHandle);
//		$this->isValidResponse($curlHandle);
		curl_close($curlHandle);

$resp = html_entity_decode($resp);
Echo "\n";
//echo "<br>" . $resp;
$t = xmlToJson( $resp );
echo "\n";
echo "<br>";
print_r(json_decode($t));

function xmlToJson($xml) {
	$xml = preg_replace('~\s*(<([^>]*)>[^<]*</\2>|<[^>]*>)\s*~','$1',$xml); 				
	// Convert CDATA into xml nodes.
	$json = simplexml_load_string($xml,'SimpleXMLElement', LIBXML_NOCDATA);
	// Return JSON.
	$je = json_encode($json);

	return $je;
}


?>
<form method="POST" action="http://208.16.193.94/CEBrokerWebService/CEBrokerWebService.asmx/UploadXMLString" target="_blank">                      
<input type="text" name="InXML" size="50" class="frmInput">
<input type="submit" class="button" value="Invoke">
</form>


<!--
<?
//xml version="1.0"
?><licensees id_parent_provider="5087" upload_key="4UF3V63P"><licensee><licensee_profession>PY</licensee_profession><licensee_number>7631</licensee_number></licensee></licensees>
-->
<rosters id_parent_provider="5087" upload_key="4UF3V63P">
	<roster>
    	<id_provider>5087</id_provider>
        <provider_course_code/>
        <id_course>63191</id_course>
        <id_publishing>159647</id_publishing>
        <end_date>01/10/2012</end_date>
        <attendees>
        	<attendee>
            	<licensee_profession>SW</licensee_profession>
                <licensee_number>7765</licensee_number>
                <first_name>Cynthia</first_name>
                <last_name>Roberts</last_name>
				<cebroker_state>FL</cebroker_state>
                <date_completed>01/10/2012</date_completed>
                <ce_credit_hours>6.0</ce_credit_hours>
                
                
            </attendee>
        </attendees>
    </roster>
</rosters>

<rosters id_parent_provider="2" upload_key="12345" test="true">
<rosters id_parent_provider="2" upload_key="12345">
	<roster>
		<id_provider>123456789</id_provider>
		<provider_course_code/>
		<id_course>1045</id_course>
		<id_publishing>178</id_publishing>
		<end_date>12/03/2203</end_date>
		<attendees>
			<attendee>
				<licensee_profession>DN</licensee_profession>
				<licensee_number>321</licensee_number>
				<first_name>RICHARD</first_name>
				<last_name>ROE</last_name>
				<cebroker_state>FL</cebroker_state>
				<date_completed>12/03/2003</date_completed>
				<ce_credit_hours>4.0</ce_credit_hours>
			</attendee>
		</attendees>
	</roster>

	<roster>
		<id_provider>123456789</id_provider>
		<provider_course_code>0124</provider_course_code>
		<id_course/>
		<id_publishing>271</id_publishing>
		<end_date>12/11/2203</end_date>
		<attendees>
			<attendee>
				<licensee_profession>DH</licensee_profession>
				<licensee_number>225</licensee_number>
				<first_name>ALICE</first_name>
				<last_name>WAKEFIELD</last_name>
				<cebroker_state>FL</cebroker_state>
				<date_completed>12/11/2003</date_completed>
				<ce_credit_hours>15.0</ce_credit_hours>
			</attendee>
		</attendees>
	</roster>
</rosters>
