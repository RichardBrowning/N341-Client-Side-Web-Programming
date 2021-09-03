/**************************************
 TITLE: externalAlert.js			
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: to display a message
 ORIGINALLY CREATED ON: 21 August 2021
 LAST MODIFIED ON: 21 August 2021
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 21 August 2021 - Modifying output message 
	to make the JS script output my own output message (LL)
**************************************/

/******************
NAME: fucntion
PURPOSE:	
	Print message upon page load
PARAMETERS:
	None
RETURN VALUE:
	Printed message
*******************/

// A $( document ).ready() block.
$(document).ready(function(){
	// Pop up a window that says "This is my first ...!"
	alert("This is my first functional javascript test!");	
}); // end of $(document).ready()