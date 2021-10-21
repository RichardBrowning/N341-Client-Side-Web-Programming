/**************************************
 TITLE: ahoyJQueryChallenge.js
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: print messages at the page
 ORIGINALLY CREATED ON: 19 October 2021 
 LAST MODIFIED ON: 20 October 2021 
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 19 October 2021 - Duplicated from base version (LL)
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
            $('p').append('<br>Ahoy jQuery World!');
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
            $('p').html('<br>Ahoy jQuery World!');
         }
        /******************
        NAME: changeFont
        PURPOSE:	
            change font
        PARAMETERS:
            none
        RETURN VALUE:
            void, but changes attribute
        *******************/
        function changeFont() {
            //var elImg = document.getElementsByTagName('img')[0];
            //console.log($('img'));//debug line
            if (!$('p').attr('id')){
                $('p').attr('id','newFont');
                $('img').attr('src', './css/extra.png')
            } else {
                $('p').removeAttr('id');
                $('img').attr('src', './css/ordinary.png')
            }
        }
        var btnAppend = document.querySelector('#append');
        var btnHtml = document.querySelector('#html');
        var btnChangeFont = document.querySelector('#font');
        //console.log(btnAppend);//debug line
        btnAppend.addEventListener('click', append, 'false');
        btnHtml.addEventListener('click', html, 'false');
        btnChangeFont.addEventListener('click', changeFont, 'false');
}); // end of $(document).ready()

