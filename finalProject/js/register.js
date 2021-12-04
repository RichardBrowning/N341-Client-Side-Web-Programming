/**************************************
 TITLE: formPrototype.js			
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: manipulate user sign up form form
 ORIGINALLY CREATED ON: 19 November 2021
 LAST MODIFIED ON: 19 November 2021
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 19 November 2021 - Modifying output message 
	to make the JS script output my own output message (LL)
**************************************/

// A $( document ).ready() block.
$(document).ready(function(){
	//set defualt jQ validation
	$.validator.setDefaults({
		//handler
		submitHandler: function(){
			submit();
		},
		//insert vlaidation error message
		errorPlacement: function(error, element){
			error.insertAfter(element);
		}
	})

	$('form').validate();
	
	//Init jQ UI
	$( document ).tooltip();
	$("#accordion > div").accordion({ header: "h3", collapsible: true });
	$("#tabs").tabs();
	
	var arrayPostfix = ["Jr.", "Sr.", "III"]
	$("#postfix").autocomplete({source: arrayPostfix});
	//disabled because of conflict with HTML picker. I do need date format to do calculation
	//$("#birthDate").datepicker();
	/******************
    NAME: Anonymous function
    PURPOSE:	
        set spinner limit
    PARAMETERS:
        event, ui
    RETURN VALUE:
        void
    *******************/
	$("#careerYears").spinner({
		spin: function( event, ui ) {
		  if ( ui.value > 50 ) {
			$( this ).spinner( "value", 50 );
			return false;
		  } else if ( ui.value < 0 ) {
			$( this ).spinner( "value", 0 );
			return false;
		  }
		}
	  });
	/******************
    NAME: Anonymous function
    PURPOSE:	
        watch out for slider position
    PARAMETERS:
        event, ui
    RETURN VALUE:
        void, but change css accordingly
    *******************/
	$("#slider").slider({
		range: "min",
		value: 0,
		min: 0,
		max: 1000,

		slide: function( event, ui ) {
			//$( "#verificationIndicator" ).html( ui.value ); //debug line
		  	if(ui.value > 990){
				//verification complete
				$("#verificationIndicator").css("display", "block");
				toggleSubmit();
		  	}else{
				$("#verificationIndicator").css("display", "none");
				toggleSubmit();
		  }
		}
	  });
	

	/******************
    NAME: 
    PURPOSE:	
        insert content using textContent
    PARAMETERS:
        The target div id name, The First part of the sentence, The Integer of the important number, and the Unit of the number
    RETURN VALUE:
        void, but a output to the desired div in the HTML doc
    *******************/
	function toggleSubmit(){
		if($("#agree").is(':checked') && $("#verificationIndicator").css('display') === "block"){
			$("#submit").removeAttr("disabled");
		}else{
			$("#submit").attr("disabled", true);
		}
	}
	$( "#agree" ).change(toggleSubmit)

	function verifyPassword() {
		var newPassword = $('#newPassword').val();
		var verifyPassword = $('#verifyPassword').val();
		if (newPassword && verifyPassword) {
			if(newPassword === verifyPassword){
				//no set css property
				$("#newPassword").css("border-color", "#dddddd");
				$("#verifyPassword").css("border-color", "#dddddd");
				return true;
			}else{
				//document.getElementById("newPassword").style.borderColor = "#ff0000";
				$("#newPassword").css("border-color", "#rgb(240, 128, 135)");
				$("#verifyPassword").css("border-color", "#rgb(240, 128, 135)");
				//set css property
				return false;
			}
		}else{
			return false;
		}

	}
	/******************
    NAME: parseInfo
    PURPOSE:	
        insert content using textContent
    PARAMETERS:
        The target div id name, The First part of the sentence, The Integer of the important number, and the Unit of the number
    RETURN VALUE:
        void, but a output to the desired div in the HTML doc
    *******************/
	function parseInfo() {
			/**create dict for info 
		 * dict means key/value pairs
		 * also include an array recording the key names (cancelled)
		*/
		var dictUserInfo ={
			//current design is to left it initially empty
		}
		/**parse data from form 
		 * append to dict
		*/
		dictUserInfo["userName"] = $('#userName').val();
		dictUserInfo["firstName"] = $('#firstName').val();
		dictUserInfo["lastName"] = $('#lastName').val();
		dictUserInfo["postfix"] = $('#postfix').val();
		dictUserInfo["realNameVisible"] = $('form input[name="realNameVisable"]:checked').val();
		dictUserInfo["pronounce"] = $("#pronounce").val();
		dictUserInfo["birthDate"] = $("#birthDate").val();
		dictUserInfo["email"] = $("#email").val();
		dictUserInfo["phone"] = $("#phone").val()

		dictUserInfo["country"] = $("#country").val()

		dictUserInfo["address1"] = $("#address1").val();
		dictUserInfo["address2"] = $("#address2").val();
		dictUserInfo["city"] = $("#city").val();
		dictUserInfo["state"] = $("#state").val();
		dictUserInfo["zipcode"] = $("#zipcode").val()
		//reviced
		var arrayProfessions = [];
		$('form input[name="profession"]:checked').each(function (index) {
			if (this.id == "other") {
				//get input from input 
				arrayProfessions.push($("#otherText").val().trim());
				return;
			}
			arrayProfessions.push($(this).val());
		});
		dictUserInfo["profession"] = arrayProfessions.join(", ");

		dictUserInfo["careerYears"] = $("#careerYears").val();
		dictUserInfo["bio"] = $("#bio").val();

		console.log(dictUserInfo);//debug line
		return dictUserInfo;
	}

	$("#other").change(function(e) {
		if (this.checked){
			//console.log(this);
			$("#otherText").attr('required','required');
		}	
	});
	/******************
    NAME: printInfo
    PURPOSE:	
        insert content using alert for user to confirm
    PARAMETERS:
        The target div id name, The First part of the sentence, The Integer of the important number, and the Unit of the number
    RETURN VALUE:
        void, but a output to the desired div in the HTML doc
    *******************/
	function printInfo(target, dictUserInfo) {
		target.html("<h2>Confirm your information:</h2>"+"<br>"+
				"<table>" +
				"<tr><td>Username: </td><td>" + dictUserInfo["userName"]+"</td>"+
				"<tr><td>First: Name: </td><td>" +dictUserInfo["firstName"]+"</td>"+
				"<tr><td>lastName: </td><td>"+dictUserInfo["lastName"]+"</td>"+
				"<tr><td>postfix: </td><td>"+dictUserInfo["postfix"]+"</td>"+
				"<tr><td>realNameVisible: </td><td>"+dictUserInfo["realNameVisible"]+"</td>"+
				"<tr><td>pronounce: </td><td>"+dictUserInfo["pronounce"]+"</td>"+
				"<tr><td>birthDate: </td><td>"+dictUserInfo["birthDate"]+"</td>"+
				"<tr><td>email: </td><td>"+dictUserInfo["email"]+"</td>"+
				"<tr><td>phone: </td><td>"+dictUserInfo["phone"]+"</td>"+
				"<tr><td>country: </td><td>"+dictUserInfo["country"]+"</td>"+
				"<tr><td>address1: </td><td>"+dictUserInfo["address1"]+"</td>"+
				"<tr><td>address2: </td><td>"+dictUserInfo["address2"]+"</td>"+
				"<tr><td>city: </td><td>"+dictUserInfo["city"]+"</td>"+
				"<tr><td>state: </td><td>"+dictUserInfo["state"]+"</td>"+
				"<tr><td>zipcode: </td><td>"+dictUserInfo["zipcode"]+"</td>"+
				"<tr><td>profession: </td><td>"+dictUserInfo["profession"]+"</td>"+
				"<tr><td>careerYears: </td><td>"+dictUserInfo["careerYears"]+"</td>"+
				"<tr><td>Bios: </td><td>"+dictUserInfo["bio"]+"</td>"+
				"</table>"
				)
	}
	/******************
    NAME: submit
    PURPOSE:	
        insert content using textContent
    PARAMETERS:
        The target div id name, The First part of the sentence, The Integer of the important number, and the Unit of the number
    RETURN VALUE:
        void, but a output to the desired div in the HTML doc
    *******************/
	function submit(){
		//check if password match
		if (!verifyPassword()) {
			//if no, indicate and return
			alert('Please recheck if passwords matches');
			return false;
		}
		//take infomation, store into var
		var dictUserInfo = parseInfo();
		//print info
		var $output = $("#output");
		printInfo($output, dictUserInfo);
	}
}); // end of $(document).ready()
