/*******************************
 TITLE: moversAndShakers.js		
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: Displaying a Page for jQuery to modify content
 ORIGINALLY CREATED ON: 04 November 2021 
 LAST MODIFIED ON: 04 November 2021 
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 04 November 2021 - Adding basic content 
 	Give the page a basic look (LL)
*******************************/

$(document).ready(function(){
        /******************
        NAME: showActor
        PURPOSE:	
            
        PARAMETERS:
            none
        RETURN VALUE:
            none, but show animation
        *******************/
        function showActor(event) {
            var intSpeed = event.data.speed;
			event.data.element.show(intSpeed);
		}
        /******************
        NAME: hideActor
        PURPOSE:	
            
        PARAMETERS:
            none
        RETURN VALUE:
            none, but show animation
        *******************/
		function hideActor(event) {
            var intSpeed = event.data.speed;
			event.data.element.hide(intSpeed);
		}
        /******************
        NAME: toggleActor
        PURPOSE:	
            Switch case version of judging when direction to move
        PARAMETERS:
            none
        RETURN VALUE:
            none but set a string to describe direction
        *******************/
        function toggleActorSpeed(event) {
            var intSpeed = event.data.speed;
            event.data.element.toggle(intSpeed);
        }
        /******************
        NAME: toggleActor
        PURPOSE:	
            Switch case version of judging when direction to move
        PARAMETERS:
            none
        RETURN VALUE:
            none but set a string to describe direction
        *******************/
        function toggleActorSwitch(event) {
            var elActor = event.data.element;
            
            if (elActor.is(":visible")){
                elActor.toggle(false);
            } else {
                elActor.toggle(true);
            }
            
        }
        /******************
        NAME: slideUpActor
        PURPOSE:	
            print to certain element of the HTML page
        PARAMETERS:
            target Id
        RETURN VALUE:
            print content to target Id 
        *******************/
        function slideUpActor(event) {
            var intSpeed = event.data.speed;
            event.data.element.slideUp(intSpeed);
        }
        /******************
        NAME: slideDownActor
        PURPOSE:	
            print to certain element of the HTML page
        PARAMETERS:
            target Id
        RETURN VALUE:
            print content to target Id 
        *******************/
            function slideDownActor(event) {
                var intSpeed = event.data.speed;
                event.data.element.slideDown(intSpeed);
            }
        /******************
        NAME: fadeInActor
        PURPOSE:	
            print to certain element of the HTML page
        PARAMETERS:
            target Id
        RETURN VALUE:
            print content to target Id 
        *******************/
            function fadeInActor(event) {
                var intSpeed = event.data.speed;
                event.data.element.fadeIn(intSpeed);
            }
        /******************
        NAME: fadeOutActor
        PURPOSE:	
            print to certain element of the HTML page
        PARAMETERS:
            target Id
        RETURN VALUE:
            print content to target Id 
        *******************/
            function fadeOutActor(event) {
                var intSpeed = event.data.speed;
                event.data.element.fadeOut(intSpeed);
            }
        /******************
        NAME: fadeOutActor
        PURPOSE:	
            print to certain element of the HTML page
        PARAMETERS:
            target Id
        RETURN VALUE:
            print content to target Id 
        *******************/
            function resetActor(event) {
                var elActor = event.data.element;
                elActor.show(450).css('position','absolute');
            }

    /******************
        NAME: none, IIFE
        PURPOSE:	
            to capsulate
        PARAMETERS:
            none
        RETURN VALUE:
            none
    *******************/
	(function() {
        //global variable: element of animation
        var elActor = $('#actor');
        /*Register events for Buttons*/
        //show
        $('button#show').on('click',{element: elActor, speed: 1500},showActor);
        //hide
        $('button#hide').on('click',{element: elActor, speed: 1200},hideActor);
        //toggle
        $('button#toggleSpeed').on('click',{element: elActor, speed: 1000},toggleActorSpeed);//multiple parameters for one function call
        $('button#toggleSwitch').on('click',{element: elActor},toggleActorSwitch);

        //slide
        $('button#slideUp').on('click',{element: elActor, speed: 800},slideUpActor);
        $('button#slideDown').on('click',{element: elActor, speed: 800},slideDownActor);
        //fade
        $('button#fadeIn').on('click',{element: elActor, speed: 1000}, fadeInActor);
        $('button#fadeOut').on('click',{element: elActor, speed: 1000}, fadeOutActor);
        
        //reset
        $('button#reset').on('click',{element: elActor}, resetActor);
    }())

}); // end of $(document).ready()