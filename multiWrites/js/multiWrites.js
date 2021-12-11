/**************************************
 TITLE: multiWrites.js
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: print messages at the page
 CREATE DATE: 06 September 2021
 LAST MODIFIED ON: 08 September 2021
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 07 September 2021 - Adding functions according to Requirement
	to make page functional (LL)
 07 September 2021 - Attempts to move document.write() to a seperate JS file
    failed (LL)
 08 September 2021 - Adding comment
    to describe each function and some key statements (LL)
 08 September 2021 - Small changes according to directory re-structure (LL)
***************************************/


// A $( document ).ready() block.
$(document).ready(function(){
    /******************
    NAME: parseTextTextContent
    PURPOSE:	
        parse content using textContent
    PARAMETERS:
        target Id
    RETURN VALUE:
        target Id's content
    *******************/
    $.fn.parseTextTextContent = function(target){ 
        // parsing content from the page
        // name variable for storage of content
        var strMessage = "";
        //get content by Id
        var elOutput = document.getElementById(target); 
        strMessage = elOutput.textContent; 
        //return the variable, if empty, returns empty
        return strMessage;
    }
    /******************
    NAME: insertTextTextContent
    PURPOSE:	
        Print message using textContent
    PARAMETERS:
        target Id, desired content
    RETURN VALUE:
        void
    *******************/
    $.fn.insertTextTextContent = function(target, content){
        //writing content to the page
        //name variable for storage of content
        var strMessage = content;
        //get target for adding content
        var elOutput = document.getElementById(target); 
        //write content
        elOutput.textContent = strMessage;
    }
    /******************
    NAME: insertTextInnerHtml
    PURPOSE:	
        Print message using innerHTML
    PARAMETERS:
        target Id, desired content
    RETURN VALUE:
        void
    *******************/
    $.fn.insertTextInnerHtml = function(target, content){
        //writing content to the page
        //name variable for storage of content
        var strMessage = content; 
        //get target for adding content
        var elOutput = document.getElementById(target); 
        //write content
        elOutput.innerHTML = strMessage;
    }
    /******************
    NAME: insertTextDocWrite
    PURPOSE:	
        Print message using document.write
    PARAMETERS:
        desired content
    RETURN VALUE:
        void
    *******************/
    //This function will not have desired effect
    $.fn.insertTextDocWrite = function(content){
        //writing content to the page
        document.open;
        document.write(content);
        document.close;
    }

	//add content to div using textContent
    var target = "textContentInput";
    var message = "This part is inserted using textContent"
    $.fn.insertTextTextContent(target, message)
    //add content to div using innerHTML, with changed content
    target = "innerHtmlInput";
    message = "<h3>This part is inserted using innerHTML</h3>"
    $.fn.insertTextInnerHtml(target, message)
    /*
    this part of code is deprecated, 
    remained here for reference
    */
    //target = "docWriteInput";
    //message = "<div id=\"docWriteInput\">This part is inserted using document.write()</div>"
    //$.fn.insertTextDocWrite(message)
}); // end of $(document).ready()

