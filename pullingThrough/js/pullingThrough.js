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
			
		}
	}

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
	dictUserInfo["ifNameVisible"] = new String($('form input[name="realNameVisable"][checked]').val());
	dictUserInfo[""]
}); // end of $(document).ready()
