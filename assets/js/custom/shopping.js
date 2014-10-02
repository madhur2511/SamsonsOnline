function addtoschoolcart()
{
	var school_name = document.getElementById("school").value;
	var gender = document.getElementById("gender").value;
	var size = document.getElementById("size").value;
	var checkboxUniform = document.getElementsByName("uniform");
	var uniform = "";
	for (var i=0, n=checkboxUniform.length;i<n-1;i++) 
	{
  		if (checkboxUniform[i].checked) 
  		{
			uniform += ","+checkboxUniform[i].value;
 		}
	}
	if (uniform) uniform = uniform.substring(1);

	if (school_name.length<1)
	{
		alert ("Enter School Name");
	}
	else if (gender.length<1)
	{
		alert ("Enter Gender Of Child");
	}
	else if (size.length<1)
	{
		alert ("Enter Size of Uniform required");
	}
	else if (uniform.length<1)
	{
		alert ("Enter the uniform type");
	}
	else
	{
		//add to shopping cart
	}
}
function addtostudentcart()
{
	var color = document.getElementById("color").value;
	var gender = document.getElementById("gender2").value;
	var size = document.getElementById("size2").value;
	var checkboxUniform = document.getElementsByName("uniform2");
	var uniform = "";
	for (var i=0, n=checkboxUniform.length;i<n-1;i++) 
	{
  		if (checkboxUniform[i].checked) 
  		{
			uniform += ","+checkboxUniform[i].value;
 		}
	}
	if (uniform) uniform = uniform.substring(1);

	if (color.length<1)
	{
		alert ("Enter Color");
	}
	else if (gender.length<1)
	{
		alert ("Enter Gender Of Child");
	}
	else if (size.length<1)
	{
		alert ("Enter Size of Uniform required");
	}
	else if (uniform.length<1)
	{
		alert ("Enter the uniform type");
	}
	else
	{
		//add to shopping cart
	}
}