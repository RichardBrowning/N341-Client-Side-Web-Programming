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
	//Init jQ UI
	$("#accordion").accordion();
	$("#tabs").tabs();
	//$( "select" ).selectmenu();
	
	var arrayPostfix = ["Jr.", "Sr.", "III"]
	$("#postfix").autocomplete({source: arrayPostfix});
	$("#birthday").datepicker();
	/******************
    NAME: Anonymous function
    PURPOSE:	
        set spinner limit
    PARAMETERS:
        event, ui
    RETURN VALUE:
        void
    *******************/
	$("#years").spinner({
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
		  	if(ui.value === 1000){
				//verification complete
				$("#verificationIndicator").css("display", "block");
		  	}else{
				$("#verificationIndicator").css("display", "none");
		  }
		}
	  });

	$( document ).tooltip();
	
	/******************
    NAME: resetForm
    PURPOSE:	
        reset the form
    PARAMETERS:
        none, but have target passed in 
    RETURN VALUE:
        void, but reseet form
    *******************/
   function resetForm() {
		DataTransfer.form.reset();	
   }
	$("#reset").on("click", {form: $("#infoForm")}, resetForm);
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
		if(newPassword === verifyPassword){
			//set css property
			document.getElementById("newPassword").style.borderColor = "#ff0000";
    		document.getElementById("verifyPassword").style.borderColor = "#ff0000";
			return true;
		}else{
			//no set css property
			return false;
		}
	}
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
		dictUserInfo["userName"] = new String($('#userName').val());
		dictUserInfo["firstName"] = new String($('#firstName').val());
		dictUserInfo["lastName"] = new String($('#lastName').val());
		dictUserInfo["postfix"] = new String($('#postfix').val());
		dictUserInfo["realNameVisible"] = new String($('form input[name="realNameVisable"][checked]').val());
		dictUserInfo["pronounce"] = new String($("#pronounce").val());
		dictUserInfo["birthDate"] = new String($("#birthDate").val());
		dictUserInfo["email"] = new String($("#email").val());
		dictUserInfo["phone"] = new String($("#phone").val());

		dictUserInfo["country"] = new String($("#country").val());


		dictUserInfo["address1"] = new String($("#address1").val());
		dictUserInfo["address2"] = new String($("#address2").val());
		dictUserInfo["city"] = new String($("#city").val());
		dictUserInfo["state"] = new String(S("#state").val());
		dictUserInfo["zipcode"] = new String($("#zipcode").val());

		dictUserInfo["profession"] = new String($('form input[name="profession"][checked]').val());
		dictUserInfo["careerYears"] = new String($("#careerYears").val());
		dictUserInfo["bio"] = new String($("#bio").val());

		console.log(dictUserInfo);//debug line
		return dictUserInfo;
	}
	function printInfo(dictUserInfo) {
		$('#userNameOut').text(dictUserInfo["userName"]);
		$('#userNameOut').text(dictUserInfo["firstName"]);
		$('#userNameOut').text(dictUserInfo["lastName"]);
		$('#userNameOut').text(dictUserInfo["postfix"]);
		$('#userNameOut').text(dictUserInfo["realNameVisible"]);
		$('#userNameOut').text(dictUserInfo["pronounce"]);
		$('#userNameOut').text(dictUserInfo["birthDate"]);
		$('#userNameOut').text(dictUserInfo["email"]);
		$('#userNameOut').text(dictUserInfo["phone"]);

		$('#userNameOut').text(dictUserInfo["country"]);

		$('#userNameOut').text(dictUserInfo["address1"]);
		$('#userNameOut').text(dictUserInfo["address2"]);
		$('#userNameOut').text(dictUserInfo["city"]);
		$('#userNameOut').text(dictUserInfo["state"]);
		$('#userNameOut').text(dictUserInfo["zipcode"]);

		$('#userNameOut').text(dictUserInfo["profession"]);
		$('#userNameOut').text(dictUserInfo["careerYears"]);
		$('#bioOut').text(dictUserInfo["bio"]);
	}
	function submit(){
		//check if password match
		if (verifyPassword()) {
			//if yes
			;
		} else {
			//if no, indicate and return
			alert('Please recheck if passwords matches');
			return false;
		}
		//take infomation, store into var
		var dictUserInfo = parseInfo();
		//print info
		printInfo(dictUserInfo);
	}
	
}); // end of $(document).ready()
