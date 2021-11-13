/**************************************
* TITLE: triggered.js
* AUTHOR: Luxi Liao (LL)
* PURPOSE: Demostrate jQuery event listener
* CREATE DATE: 10 November 2021
* LAST MODIFIED ON: 10 November 2021
* LAST MODIFIED BY: Luxi Liao (LL)
* MODIFICATION HISTORY
    10 November 2021 - Adding essential functions, design algorithms (LL)
    11 November 2021 - implement Event Listeners and debugging (LL)
**************************************/

$(document).ready(
    function() {
        /******************
        NAME: 
            showInput
        PURPOSE:
            fucntion to run when page size changes
        PARAMETERS:
            The target div id name
        RETURN VALUE:
            void, but play animation 
        *******************/
        showInput = function() {
            //get area for showing

            //put content

            //breathing effect, fade out
        }

        /******************
        NAME: 
            showClick
        PURPOSE:
            fucntion to run when page size changes
        PARAMETERS:
            The target div id name
        RETURN VALUE:
            void, but play animation 
        *******************/
        showClick = function() {
            //get area for showing

            //fade in

            //breathing effect, fade in
        }

        /******************
        NAME: 
            pageResize
        PURPOSE:
            fucntion to run when page size changes
        PARAMETERS:
            The target div id name
        RETURN VALUE:
            void, but play animation 
        *******************/
        pageResize = function(){
            //get current windows size
            var windowHeight = $(window).height();
            var windowWidth = $(window).width();
            var blockHeight = $('#block').height();
            var blockWidth = $('#block').width();
            //print windows size
            //
        }
        /******************
        NAME: 
            pageResize
        PURPOSE:
            fucntion to run when page size changes
        PARAMETERS:
            The target div id name
        RETURN VALUE:
            void, but play animation 
        *******************/

        
        /*event listeners*/

        //windows and document 
        $(document).scroll();

        $(window).resize();

        //mouse fucntions
        $().keyup();

        //keyboard fucntions
        $().click();
    }

)
