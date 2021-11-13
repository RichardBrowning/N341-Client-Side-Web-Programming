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
            showAndFade
        PURPOSE:
            function to run to output fade and delete
        PARAMETERS:
            The target element and the text
        RETURN VALUE:
            void, but play animation 
        *******************/
        function showAndFade(strText, divTargetId){
            divTargetId.css({
                            'display': 'unset'
                        });
            //put content, delay, fadeout in a chain
            divTargetId.html(strText).delay(150).fadeOut(300);
            //delete, not needed, will be overwritten anyway
        }
        /******************
        NAME: 
            showScroll
        PURPOSE:
            function to run when scrolled
        PARAMETERS:
            The target div id name
        RETURN VALUE:
            void, but play animation 
        *******************/
        function showScroll() {
            var elScrollIndicate = $("#scroll span");
            //put to the section
            showAndFade("The page has been scrolled", elScrollIndicate);
        }

        /******************
        NAME: 
            showInput
        PURPOSE:
            function to run when keypressed in input field
        PARAMETERS:
            The target div id name
        RETURN VALUE:
            void, but play animation 
        *******************/
       function showInput() {
           //change color of the filed
           $("input").css("background-color","#D6D6FF");
           //show and fade out
           elStatusShow = $('#keyStatus');
           showAndFade("A key has been pressed", elStatusShow)
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
        function pageResize(){
            //get current windows size
            var intWindowHeight = $(window).outerHeight();
            var intWindowWidth = $(window).outerWidth();
            var intBlockHeight = Math.round($("#box-container").height());
            var intBlockWidth = Math.round($("#box-container").width());
            //write window height 
            $("#windowHeight").html(intWindowHeight);
            //write window width
            $("#windowWidth").html(intWindowWidth);
            //write box-container height
            $("b.height").html(intBlockHeight);
            //write box-container width
            $("b.width").html(intBlockWidth);
        }

        /*initialize outputs*/
        /******************
        NAME: 
            IFFY
        PURPOSE:
            fucntion to run to inistailly print 
        PARAMETERS:
            none
        RETURN VALUE:
            void
        *******************/
        (function(){
            
            pageResize();
        }());
        /*event listeners*/

        //windows and document 
        //resize event
        $(window).resize(pageResize);
        //TODO scroll event
        $(document).scroll(showScroll);

        //TODO keyboard fucntions
        $("input").keydown(function(){
            $("input").css("background-color","#FFFFCC");
        });   
        $("input").keyup(showInput);

        //TODO mouse fucntions
        $("button").mousedown(function () { 
            $("button").html("Holding On");
        });
        $("button").mouseup(function () { 
            $("button").html("Released hold");
        });
        $("button").mouseover(function () { 
            $("button").html("Hovering Over");
        });
    }

)
