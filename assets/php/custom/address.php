<?php
	if( $_REQUEST["phone"] )
	{
  		$phone = $_REQUEST['phone'];
	}
	if( $_REQUEST["full_name"] )
	{
  		$full_name = $_REQUEST['full_name'];
	}
	if( $_REQUEST["parent_name"] )
	{
  		$parent_name = $_REQUEST['parent_name'];
	}
	if( $_REQUEST["address"] )
	{
  		$address = $_REQUEST['address'];
	}
	if( $_REQUEST["city"] )
	{
  		$city = $_REQUEST['city'];
	}
	if( $_REQUEST["pincode"] )
	{
  		$pincode = $_REQUEST['pincode'];
	}
	if( $_REQUEST["classnum"] )
	{
  		$classnum = $_REQUEST['classnum'];
	}
	if( $_REQUEST["school"] )
	{
  		$school = $_REQUEST['school'];
	}

	//echo ("our data ".$phone." ".$full_name." ".$parent_name." ".$address." ".$city." ".$pincode." ".$classnum." ".$school);

	require_once('connect.php');
	$queryPhone = mysql_result(mysql_query("select CASE WHEN count(1) > 0 THEN 'true' ELSE 'false' END from profile where phone = '$phone'"),0);
	
	if (strcmp ( $queryPhone, "true" ) == 0)
	{
		//echo "exists";
		$queryAddresKey = mysql_result(mysql_query("select address_key from profile where phone = '$phone'"),0);
		$queryShoppingCartKey = mysql_result(mysql_query("select shopping_cart_key from profile where phone = '$phone'"),0);
		//echo "$queryAddresKey". "   ". "$queryShoppingCartKey";

		/* mysql_query("UPDATE `profile` SET `full_name`='$full_name',`parent_name`='$parent_name',
		`address_key`='$queryAddresKey',`class`='$classnum',`school_key`='$school',`shopping_cart_key`='$queryShoppingCartKey' 
		WHERE `phone`='phone'"); */
		
		mysql_query("DELETE FROM `profile` WHERE phone = '$phone'");
		mysql_query("INSERT INTO `profile`(`phone`, `full_name`, `parent_name`, `address_key`, `class`, `school_key`, `shopping_cart_key`) 
			VALUES ('$phone','$full_name','$parent_name', '$queryAddresKey', '$classnum','$school','$queryShoppingCartKey')");
	}
	else
	{
		//echo "not exists";
		$queryMaxAddresKey = mysql_result(mysql_query("select max(address_key) from profile"),0); 
		$nextMaxAddressKey = $queryMaxAddresKey + 1; // to append a new address key

		$queryMaxShoppingCartKey = mysql_result(mysql_query("select max(shopping_cart_key) from profile "),0);
		$nextMaxShoppingCartKey = $queryMaxShoppingCartKey + 1;

		mysql_query("INSERT INTO `profile`(`phone`, `full_name`, `parent_name`, `address_key`, `class`, `school_key`, `shopping_cart_key`) 
			VALUES ('$phone','$full_name','$parent_name', '$nextMaxAddressKey', '$classnum','$school','$nextMaxShoppingCartKey')");
	}
	require_once('disconnect.php');


?>