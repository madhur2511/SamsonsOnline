<?php 
	if ($_REQUEST["mode"])
	{
		$mode = $_REQUEST["mode"];
	}
	if( $_REQUEST["number"] )
	{
  		$number = $_REQUEST['number'];
	}
	if( $_REQUEST["number"] )
	{
  		$password = md5($_REQUEST['password']);
	}
	
	require_once('connect.php');
	if ($mode == "signup")
	{
		mysql_query("INSERT INTO `login`(`phone`, `password`) VALUES ('$number','$password')");
		//   MK  --->   Should'nt we return a "successful login" string from here as well, as in "login_signup.js" we are checking for this string itself. I feel we can do with a 0 or 1 instead of strings for pass or fail
	}
	if ($mode == "login")
	{
		$queryPassword = mysql_result(mysql_query("SELECT `password` FROM `login` WHERE `phone` = '$number'"),0);
		if (strcmp ( $password , $queryPassword ) == 0)
		{
			echo ("successful login");
			//now redirect to new page
			//header('Location: ../html/address.html'); 
		}
		else
		{
			echo ("invalid login");
		}
	}
	require_once('disconnect.php');
?>