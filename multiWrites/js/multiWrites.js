/**************************************
 TITLE: multiWrites.js
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: print message at the page
 ORIGINALLY CREATED ON: 31 August 2021
 LAST MODIFIED ON: 03 September 2021
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 31 August 2021 - Adding comment according to Requirement
	and edit the function so that it alerts "Hello World!" (LL)
 03 September 2021 - Small changes according to directory re-structure (LL)
***************************************/


// A $( document ).ready() block.
$(document).ready(
    function(){
	//add content to div using textContent
    var target = "textContentInput";
    var message = "This part is inserted using textContent"
    insertTextTextContent(target, content)
    target = "innerHtmlInput";
    message = "This part is inserted using innerHTML"
    insertTextInnerHtml(target, content)
    target = "docWriteInput";
    message = "This part is inserted using document.write()"
    insertTextDocWrite(target, content)
},

function parseTextTextContent(target){
    // parsing content from the page
    var strMessage = "";
    var elOutput = document.getElementById(target); 
    strMessage = elOutput.textContent; 
},

function insertTextTextContent(target, content){
    //writing content to the page
    var strMessage = content;
    var elOutput = document.getElementById(target); 
    elOutput.textContent = strMessage;
},

function insertTextInnerHtml(target, content){
    var strMessage = content; 
    var elOutput = document.getElementById(target); 
    elOutput.innerHTML = strMessage;
},

function insertTextDocWrite(content){
    document.write(content)
}

); // end of $(document).ready()

