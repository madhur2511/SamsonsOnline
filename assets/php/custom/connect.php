<?php
	$mysql_server = '127.0.0.1';
	$mysql_login = 'root';
	$mysql_password = '';
	$mysql_database = 'uniforms';
	$conn = mysql_connect($mysql_server, $mysql_login, $mysql_password) or die(mysql_error());
	mysql_select_db($mysql_database, $conn);
	
?>