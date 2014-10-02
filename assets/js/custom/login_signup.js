function signup()
{
	humanitycheck ();
	loginfo();
}

function humanitycheck ()
{
	if (document.getElementById('humancheck-0').checked == true)
	{
		// need to notify that we had a robot entry and reload the form
		location.reload();
		exit ();
	}
	else
	{
		return ;
	}
}

function loginfo ()
{
	var mobilenumber = document.getElementById('userid').value;
	var password = document.getElementById('setpassword').value;
	if(!mobilenumber || !password){
		return;
	}
	var  formData = "mode=signup&" + "number=" + mobilenumber + "&password=" +password;
	$.ajax({
	    url : "../../php/custom/login_signup.php",
	    type: "POST",
	    data : formData,
	    success: function(data, textStatus, jqXHR)
	    {
	        //data - response from server
	        alert (data);
	        if (data == "successful login")
	        {
	        	alert ("hello");
	        	window.location = "../../../html/address.html";
	        }
	    },
	    error: function (jqXHR, textStatus, errorThrown)
	    {
	 		alert (jqXHR +" "+ textStatus +" "+ errorThrown);
	    }
	});
}

function login()
{
	var mobilenumber = document.getElementById('user').value;
	var password = document.getElementById('passwordinput').value;
	if(!mobilenumber || !password){
		return;
	}
	var  formData = "mode=login&" + "number=" + mobilenumber + "&password=" +password;
	$.ajax({
	    url : "../../php/custom/login_signup.php",
	    type: "POST",
	    data : formData,
	    success: function(data, textStatus, jqXHR)
	    {
	        //data - response from server
	        alert (data.localeCompare("successful login"));
	        if (data.localeCompare("successful login") == 0)
	        {
	        	alert ("success");
	        	var reloc_str = "address.html?phone="+mobilenumber;
	        	alert (reloc_str);
	        	window.location = reloc_str;
	        //	window.location = "../html/address.html";
	        }

	    },
	    error: function (jqXHR, textStatus, errorThrown)
	    {
	 		alert (jqXHR +" "+ textStatus +" "+ errorThrown);
	    }
	});
}