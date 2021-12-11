/**************************************
 TITLE: ahoyJQuery.js
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: print messages at the page
 CREATE DATE: 19 October 2021 
 LAST MODIFIED ON: 20 October 2021 
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 19 October 2021 - Adding the functions. (LL)
 20 October 2021 - Writing the main fucntion. (LL)
 20 October 2021 - Adding comment
    to describe each function and some key statements (LL)
***************************************/

// A $( document ).ready() block.
$(document).ready(
    function(){
        /******************
        NAME: append
        PURPOSE:	
            insert content using append
        PARAMETERS:
            none
        RETURN VALUE:
            void, but a output to the desired div in the HTML doc
        *******************/
        function append() {
            $('p').append('<br>Ahoy jQuery World!')
        }
        /******************
        NAME: html
        PURPOSE:	
            insert content using html
        PARAMETERS:
            none
        RETURN VALUE:
            void, but a output to the desired div in the HTML doc
        *******************/
        function html() { 
            $('p').html('<br>Ahoy jQuery World!')
         }
        var btnAppend = document.querySelector('#append');
        var btnHtml = document.querySelector('#html');
        //console.log(btnAppend);//debug line
        btnAppend.addEventListener('click', append, 'false');
        btnHtml.addEventListener('click', html, 'false');
}); // end of $(document).ready()

