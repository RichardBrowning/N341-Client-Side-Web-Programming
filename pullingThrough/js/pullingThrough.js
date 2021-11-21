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
	$("#accordion > div").accordion({ header: "h3", collapsible: true });
	$("#tabs").tabs();
	//$( "select" ).selectmenu();
	
	var arrayPostfix = ["Jr.", "Sr.", "III"]
	$("#postfix").autocomplete({source: arrayPostfix});
	$("#birthDate").datepicker();
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
			//no set css property
			$("#newPassword").css("border-color", "");
    		$("#verifyPassword").css("border-color", "");
			return true;
		}else{
			//document.getElementById("newPassword").style.borderColor = "#ff0000";
			$("#newPassword").css("border-color", "#ff0000");
    		$("#verifyPassword").css("border-color", "#ff0000");
			//set css property
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
		dictUserInfo["realNameVisible"] = $('form input[name="realNameVisable"][checked]').val();
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
		
		var arrayProfessions = [];
		$('form input[name="profession"]:checked').each(function (index) {
			arrayProfessions.push($(this).val());
		});
		dictUserInfo["profession"] = arrayProfessions.join(", ");

		dictUserInfo["careerYears"] = $("#careerYears").val();
		dictUserInfo["bio"] = $("#bio").val();

		console.log(dictUserInfo);//debug line
		return dictUserInfo;
	}
	/******************
    NAME: printInfo
    PURPOSE:	
        insert content using textContent
    PARAMETERS:
        The target div id name, The First part of the sentence, The Integer of the important number, and the Unit of the number
    RETURN VALUE:
        void, but a output to the desired div in the HTML doc
    *******************/
	function printInfo(dictUserInfo) {
		$('#userNameOut').text(dictUserInfo["userName"]);
		$('#firstNameOut').text(dictUserInfo["firstName"]);
		$('#lastNameOut').text(dictUserInfo["lastName"]);
		$('#postfixOut').text(dictUserInfo["postfix"]);
		$('#realNameVisableOut').text(dictUserInfo["realNameVisible"]);
		$('#pronounceOut').text(dictUserInfo["pronounce"]);
		$('#birthDateOut').text(dictUserInfo["birthDate"]);
		$('#emailOut').text(dictUserInfo["email"]);
		$('#phoneOut').text(dictUserInfo["phone"]);

		$('#countryOut').text(dictUserInfo["country"]);

		$('#address1Out').text(dictUserInfo["address1"]);
		$('#address2Out').text(dictUserInfo["address2"]);
		$('#cityOut').text(dictUserInfo["city"]);
		$('#stateOut').text(dictUserInfo["state"]);
		$('#zipcodeOut').text(dictUserInfo["zipcode"]);

		$('#professionOut').text(dictUserInfo["profession"]);
		$('#careerYearsOut').text(dictUserInfo["careerYears"]);
		$('#bioOut').text(dictUserInfo["bio"]);
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
	$("#submit").on("click", {}, submit);
}); // end of $(document).ready()
