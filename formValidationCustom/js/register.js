/**************************************
 TITLE: register.js			
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: manipulate user sign up form form
 ORIGINALLY CREATED ON: 01 December 2021
 LAST MODIFIED ON: 04 December 2021
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 03 December 2021 - Modifying output message 
	to make the JS script output my own output message (LL)
 03 December 2021 - Modified for checkbox radio (LL)
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

	

	/*other validator*/
	//first: email validator
	//then: phone validator
	//additionally: alphabetical city and state/region
	//also userName do not take spaces
	//finally: <html> are prevented
	$.validator.addMethod("customEmail", function(value, element){
		//source of grammar: Tutorial's Point 
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{1,5})+$/;
		return this.optional(element) || regex.test(value);
	}, "Please enter a valid email address (eg. xxx@xxx.xxx).")
	$.validator.addMethod("lettersonly", function(value, element) {
		var regex = /^[a-zA-Z]+$/i;
		return this.optional(element) || regex.test(value);
	}, "Letters only, please.")
	$.validator.addMethod("digitssonly", function(value, element) {
		var regex = /^[0-9]+$/i;
		return this.optional(element) || regex.test(value);
	}, "Digits only, please.")
	$.validator.addMethod("noHTML", function(value, element) {
		var regex = /\<+[a-zA-Z0-9\=\"\s]+\>+.+\<\/+[a-zA-Z0-9]+\>/gi;
		return !regex.test(value);
	}, "Sorry, no XSS-suspective info allows.")
	$.validator.addMethod("noSpace", function(value, element) { 
		return value.indexOf(" ") < 0 && value != ""; 
	}, "No space please and don't leave it empty"); 
	
	$('#register').validate({
		rules:{
			userName:{
				required: true,
				maxlength: 16,
				noSpace: true,
			},
			firstName:{
				required: true,
				noSpace: true,
			},
			lastName:{
				required: true,
				noSpace: true,
			},
			postfix:{
				required: true,
			},
			realNameVisible:{
				required: true,
			},
			pronounce:{
				required: true,
			},
			birthDate:{
				required: true,
				date: true,
			},
			email:{
				required: true,
				customEmail: true,
			},
			phone:{
				required: true,
				digits: true,
				phoneUS: true,
			},
			newPassword:{
				minlength: 6,
				required: true,
			},
			verifyPassword:{
				required: true,
				equalTo: "#newPassword",
			},
			country:{
				required: true,
			},
			address1:{
				required: true,
			},
			address2:{
				required: true,
			},
			city:{
				required: true,
				lettersonly: true,
			},
			state:{
				required: true,
				lettersonly: true,
			},
			zipcode:{
				required: true,
				digits: true,
			},
			profession:{
				required: true,
			},
			careerYears:{
				required: true,
				digits:true,
				max: 60,
			},
			bio:{
				required: true,
			},
		},
		messages:{
			userName:{
				required: "Please specify a username",
				maxlength: "Please make username no longer than 16 characters",
				noSpace: "Please do not contain space",
			},
			firstName:{
				required: "Please enter your First Name",
				noSpace: "No space allowed here",
			},
			lastName:{
				required: "Please enter your Last Name",
				noSpace: "No space allowed here",
			},
			postfix:{
				required: "Please specify. If none, enter none.",
			},
			realNameVisable:{
				required: "Do you want people to view your real name?",
			},
			pronounce:{
				required: "How would you like people to refer to you in 3rd person?",
			},
			birthDate:{
				required: "Please enter your birthday",
				date: "The date is invalid.",
			},
			email:{
				required: "Please give us your email, we send no ADs, promise.",
				customEmail: "Please enter a valid E-mail address. If yours is not standard, contact us",
			},
			phone:{
				required: "Please input your phone number.",
				digits: "Phone number contains letter? contact us if so.",
				phoneUS: "Sorry we only support US phone number at this stage.",
			},
			newPassword:{
				required:"Please input a password",
				minlength:"Please be no shorter than 6."
			},
			verifyPassword:{
				required: "Please confirm your password.",
				equalTo: "Does not match previous password, please check."
			},
			country:{
				required: "Please specify your country",
			},
			address1:{
				required: "Please enter address",
			},
			address2:{
				required: "Please enter address",
			},
			city:{
				required: "Please enter your city name",
				lettersonly: "No numbers allowed in city name",
			},
			state:{
				required: "Please enter your state/province name",
				lettersonly: "No numbers allowed in state/province name",
			},
			zipcode:{
				required: "Please enter your shipping address.",
				digits: "No letters allowed in zip code.",
			},
			profession:{
				required: "Please do enter a profession, or hobby in art.",
			},
			careerYears:{
				required: "Please enter your career years here.",
				digits:"Clearly, number of years accepts no letters, symbols, or nagative years!",
				max: "Please Input valid career years."
			},
			bio:{
				required: "At least tell people something about yourself, please?",
			},
		}
	});
	
	//Init jQ UI
	$( document ).tooltip();
	$("#accordion > div").accordion({ heightStyle: "content", header: "h3", collapsible: true});
	$("#tabs").tabs();
	$("input[type='radio']").checkboxradio({
		icon: false
	  });
	$("form p input[type='checkbox']").checkboxradio({
		icon: false
	  });

	var arrayPostfix = ["Jr.", "Sr.", "III", "none"];
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
		  if ( ui.value > 60 ) {
			$( this ).spinner( "value", 60 );
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
		toggleSubmit
    PURPOSE:	
        toggle submit button according to confirmation status
    PARAMETERS:
        none
    RETURN VALUE:
        void, but changed attr of elements
    *******************/
	function toggleSubmit(){
		if($("#agree").is(':checked') && $("#verificationIndicator").css('display') === "block"){
			$("#submit").removeAttr("disabled");
		}else{
			$("#submit").attr("disabled", true);
		}
	}
	$( "#agree" ).change(toggleSubmit)
	/******************
    NAME: 
		verifyPassword
    PURPOSE:	
        if passwords is not same or empty, prompt the user
    PARAMETERS:
        none
    RETURN VALUE:
        void, but changed attr of elements
    *******************/
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
        none
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

		dictUserInfo["password"] = $("#newPassword").val()
		
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

	//if other checkbox is checked, make the field required
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
        target in jquery form and key-value pair object to record user info
    RETURN VALUE:
        void, but a output to the desired div in the HTML doc
    *******************/
	function printInfo(target, dictUserInfo) {
		target.html("<h2>Confirm your information:</h2>"+"<br>"+
				"<table>" +
				"<tr><td>Username: </td><td>" + dictUserInfo["userName"]+"</td>"+
				"<tr><td>First Name: </td><td>" +dictUserInfo["firstName"]+"</td>"+
				"<tr><td>last Name: </td><td>"+dictUserInfo["lastName"]+"</td>"+
				"<tr><td>postfix: </td><td>"+dictUserInfo["postfix"]+"</td>"+
				"<tr><td>real Name Visible: </td><td>"+dictUserInfo["realNameVisible"]+"</td>"+
				"<tr><td>pronounce: </td><td>"+dictUserInfo["pronounce"]+"</td>"+
				"<tr><td>birth Date: </td><td>"+dictUserInfo["birthDate"]+"</td>"+
				"<tr><td>email: </td><td>"+dictUserInfo["email"]+"</td>"+
				"<tr><td>phone: </td><td>"+dictUserInfo["phone"]+"</td>"+
				
				"<tr><td>password: </td><td>"+dictUserInfo["password"]+"</td>"+

				"<tr><td>country: </td><td>"+dictUserInfo["country"]+"</td>"+
				"<tr><td>address 1: </td><td>"+dictUserInfo["address1"]+"</td>"+
				"<tr><td>address 2: </td><td>"+dictUserInfo["address2"]+"</td>"+
				"<tr><td>city: </td><td>"+dictUserInfo["city"]+"</td>"+
				"<tr><td>state: </td><td>"+dictUserInfo["state"]+"</td>"+
				"<tr><td>zip code: </td><td>"+dictUserInfo["zipcode"]+"</td>"+
				
				"<tr><td>profession: </td><td>"+dictUserInfo["profession"]+"</td>"+
				"<tr><td>career Years: </td><td>"+dictUserInfo["careerYears"]+"</td>"+
				"<tr><td>Bios: </td><td>"+dictUserInfo["bio"]+"</td>"+
				"</table>"
				)
	}
	/******************
    NAME: submit
    PURPOSE:	
        define actions to be performed upon upload
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
