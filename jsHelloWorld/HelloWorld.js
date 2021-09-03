/**************************************
 TITLE: HelloWorld.js							<----- Updated the file name
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: print message at the page load
 ORIGINALLY CREATED ON: 31 August 2021
 LAST MODIFIED ON: 03 September 2021
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 31 August 2021 - Adding comment according to Requirement
	and edit the function so that it alerts "Hello World!" (LL)
 03 September 2021 - Small changes according to directory re-structure (LL)
***************************************/

// The $ is the jQuery object
// "document" is the document object
// ready is a method of the jQuery object
// function creates an anonymous function to contain the code that should run
// In English, when the DOM has finished loading, execute the code in the function.
// See pages 312-313 of the text for details.

/******************
NAME: fucntion
PURPOSE:	
	Print message upon page load
PARAMETERS:
	No input
RETURN VALUE:
	Printed message
*******************/

// A $( document ).ready() block.
$(document).ready(function(){
	// Pop up a window that says "Hello World!"
	alert("Hello World");
}); // end of $(document).ready()