function complete () {
    //check if none of fields are blank
    var url = document.URL;
    var url_parameter = url.split('?')[1]; // have to put a check for url parameter to be phone number only
    var full_name = document.getElementById("full-name").value;
    var parent_name = document.getElementById("parent-name").value;
    var address_line1 = document.getElementById("address-line1").value;
    var address_line2 = document.getElementById("address-line2").value;
    var city = document.getElementById("city").value;
    var pincode = document.getElementById("pincode").value;
    var classnum = document.getElementById("class").value;
    var school = document.getElementById("school").value;
    if (full_name.length < 1 || parent_name.length < 1 || address_line1.length < 1 || address_line2.length < 1 || city.length < 1 || school.length < 1 )
    {
        alert ("One or more fields left blank");
        window.location = "address.html";
    }

    else
    {
        var address = address_line1 + address_line2;
        var  formData = url_parameter + "&full_name=" + full_name + "&parent_name=" + parent_name + "&address=" + address + "&city=" + city + 
                        "&pincode=" + pincode +"&classnum=" + classnum + "&school=" + school;
        $.ajax({
            url : "../assets/php/address.php",
            type: "POST",
            data : formData,
            success: function(data, textStatus, jqXHR)
            {
                //data - response from server
                alert (data);

            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                alert (jqXHR +" "+ textStatus +" "+ errorThrown);
            }
        });
    }
}

$(document).ready(function(){
    // check if pincode contains only numbers
    $("#pincode").focusout(function(){
        var pincode = document.getElementById("pincode").value;
        var isnum = /^\d+$/.test(pincode);
        if (isnum == false || pincode.length != 6)
        {
            alert ("Enter valid pincode");
            window.location = "address.html";
        }
    });
    $("#class").focusout(function(){
        var classnum = document.getElementById("class").value;
        var isnum = /^\d+$/.test(classnum);
        if (isnum == false || parseInt(classnum) < 0 || parseInt(classnum) > 15)
        {
            alert ("Enter valid class");
            window.location = "address.html";
        }
    });
});