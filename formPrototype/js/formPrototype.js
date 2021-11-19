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
	
	var arrayPostfix = ["Jr.", "Sr.", "III"]
	$("#postfix").autocomplete({source: arrayPostfix});
	$("#birthday").datetimepicker();

	$(document).tooltip();
}); // end of $(document).ready()
