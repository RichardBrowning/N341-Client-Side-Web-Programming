/**************************************
 TITLE: multiWrites.js
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: print messages at the page
 ORIGINALLY CREATED ON: 08 September 2021
 LAST MODIFIED ON: 08 September 2021
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 08 September 2021 - Re-creating method to display all three insertions simultaneously (LL)
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
        document.write(content);
    }
    //add content to div using document.write()
    var target = "docWriteInput";
    var message = " <link rel=\"stylesheet\" type=\"text/css\" href=\"css/multiWrites.css\"> \
                <div class=\"container\"> \
                    <!--div start--> \
                    <div class=\"message\"> \
                    <div id=\"docWriteInput\">This part is inserted using document.write()</div> \
                    </div> \
                    <!--div end--> \
                    <!--div start--> \
                    <div id=\"textContentInput\" class=\"message\"></div> \
                    <!--div end--> \
                    <!--div start--> \
                    <div id=\"innerHtmlInput\" class=\"message\"></div> \
                    <!--div end--> \
                </div>"
    $.fn.insertTextDocWrite(message)
	//add content to div using textContent
    target = "textContentInput";
    message = "This part is inserted using textContent"
    $.fn.insertTextTextContent(target, message)
    //add content to div using innerHTML, with changed content
    target = "innerHtmlInput";
    message = "<h3>This part is inserted using innerHTML</h3>"
    $.fn.insertTextInnerHtml(target, message)
    
}); // end of $(document).ready()

