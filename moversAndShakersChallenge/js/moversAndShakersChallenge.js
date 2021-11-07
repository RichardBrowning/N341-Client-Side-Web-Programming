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
    event
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
    event
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
PARAMETERS:
    event
RETURN VALUE:
    none, but show animation
*******************/
    function toggleActorSpeed(event) {
        var intSpeed = event.data.speed;
        event.data.element.toggle(intSpeed);
}
/******************
NAME: toggleActor
PURPOSE:	            
PARAMETERS:
    event
RETURN VALUE:
    none, but show animation
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
PARAMETERS:
    event
RETURN VALUE:
    none, but show animation
*******************/
    function slideUpActor(event) {
    var intSpeed = event.data.speed;
    event.data.element.slideUp(intSpeed);
}
/******************
NAME: slideDownActor
PURPOSE:	            
PARAMETERS:
    event
RETURN VALUE:
    none, but show animation
*******************/
    function slideDownActor(event) {
        var intSpeed = event.data.speed;
        event.data.element.slideDown(intSpeed);
    }
/******************
NAME: fadeInActor
PURPOSE:	            
PARAMETERS:
    event
RETURN VALUE:
    none, but show animation
*******************/
    function fadeInActor(event) {
        var intSpeed = event.data.speed;
        event.data.element.fadeIn(intSpeed);
    }
/******************
NAME: fadeOutActor
PURPOSE:	            
PARAMETERS:
    event
RETURN VALUE:
    none, but show animation
*******************/
    function fadeOutActor(event) {
        var intSpeed = event.data.speed;
        event.data.element.fadeOut(intSpeed);
    }
/******************
NAME: fadeToActor
PURPOSE:	            
PARAMETERS:
    event
RETURN VALUE:
    none, but show animation
*******************/
    function fadeToActor(event) {
        var intSpeed = event.data.speed;
        var decOpacity = event.data.opacity;
        event.data.element.fadeTo(intSpeed, decOpacity);
    }  
/******************
NAME: fadeToggleActor
PURPOSE:	            
PARAMETERS:
    event
RETURN VALUE:
    none, but show animation
*******************/
    function fadeToggleActor(event) {
        var intSpeed = event.data.speed;
        event.data.element.fadeToggle(intSpeed);
    }
/******************
NAME: fadeDelayActor
PURPOSE:	            
PARAMETERS:
    event
RETURN VALUE:
    none, but show animation
*******************/
    function fadeDelayActor(event) {
        var intSpeed = event.data.speed;
        var intDelay = event.data.delay;
        event.data.element.delay(intDelay).fadeOut(intSpeed);
    }

/*ANIMATION*/   
/******************
NAME: topEdge
PURPOSE:	            
PARAMETERS:
    event
RETURN VALUE:
    none, but show animation
*******************/ 
function topEdge(event) {
    var intMargin = event.data.margin;
    resetActor(event);
    event.data.element.animate({top:intMargin});
}  
/******************
NAME: leftEdge
PURPOSE:	            
PARAMETERS:
    event
RETURN VALUE:
    none, but show animation
*******************/
function leftEdge(event) {
    var intMargin = event.data.margin;
    resetActor(event);
    event.data.element.animate({left:intMargin});
}  
/******************
NAME: rightEdge
PURPOSE:	            
PARAMETERS:
    event
RETURN VALUE:
    none, but show animation
*******************/
function rightEdge(event) {
    var elParent = event.data.element.parent()
    var intMargin = elParent.width() - event.data.margin - 15;
    resetActor(event);
    event.data.element.animate({left:intMargin});
}  
/******************
NAME: bottomEdge
PURPOSE:	            
PARAMETERS:
    event
RETURN VALUE:
    none, but show animation
*******************/
function bottomEdge(event) {
    var elParent = event.data.element.parent()
    var intMargin = elParent.height() - event.data.margin - 15;
    resetActor(event);
    event.data.element.animate({top:intMargin});
}  
/******************
NAME: nudgeRight
PURPOSE:	            
PARAMETERS:
    event
RETURN VALUE:
    none, but show animation
*******************/
function nudgeRight(event) {
    event.data.element.animate({left:'+=10'});
}
/******************
NAME: nudgeLeft
PURPOSE:	            
PARAMETERS:
    event
RETURN VALUE:
    none, but show animation
*******************/
function nudgeLeft(event) {
    event.data.element.animate({left:'-=10'});
}
/******************
NAME: glide
PURPOSE:	            
PARAMETERS:
    event
RETURN VALUE:
    none, but show animation
*******************/
function glide(event) {
    var elParent = event.data.element.parent()
    var intMargin = event.data.margin;
    var intMarginTop = elParent.height() - intMargin - 15;
    var intMarginLeft = elParent.width() - intMargin - 15;
    event.data.element.css({top:intMargin, left:intMargin});
    event.data.element.animate({top:intMarginTop, left:intMarginLeft}, 4000)
}
/******************
NAME: easing
PURPOSE:	            
PARAMETERS:
    event
RETURN VALUE:
    none, but show animation
*******************/
function easing(event) {
    var elParent = event.data.element.parent()
    var intMargin = event.data.margin;
    var intMarginTop = elParent.height() - intMargin - 15;
    var intMarginLeft = elParent.width() - intMargin - 15;
    event.data.element.css({top:intMargin, left:intMargin});
    event.data.element.animate({top:intMarginTop, left:intMarginLeft},4000, 'easeOutBounce')
}

/******************
NAME: resetActor
PURPOSE:	            
PARAMETERS:
    target Id
RETURN VALUE:
    print content to target Id 
*******************/
    function resetActor(event) {
        var elActor = event.data.element;
        elActor.toggle(false);
        elActor.css({'position':'absolute',
                        'top': '50%',
                        'left': '50%',
                        'margin': '-50px 0 0 -50px',
                        'opacity':1
                    }).fadeIn(1000);
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
        $('button#fadeTo').on('click',{element: elActor, speed: 600, opacity: 0.5}, fadeToActor);
        $('button#fadeToggle').on('click',{element: elActor, speed: 400}, fadeToggleActor);
        $('button#fadeDelay').on('click',{element: elActor, speed: 600, delay: 500}, fadeDelayActor);
        1
        //animation
        const MARGIN = 50;
        $('button#topEdge').on('click',{element: elActor, margin: MARGIN}, topEdge);
        $('button#leftEdge').on('click',{element: elActor, margin: MARGIN}, leftEdge);
        $('button#rightEdge').on('click',{element: elActor, margin: MARGIN}, rightEdge);
        $('button#bottomEdge').on('click',{element: elActor, margin: MARGIN}, bottomEdge);
        
        //nudge
        $('button#left').on('click',{element: elActor}, nudgeLeft);
        $('button#right').on('click',{element: elActor}, nudgeRight);

        //glide
        $('button#glide').on('click',{element: elActor, margin: MARGIN}, glide);
        //easing
        $('button#easing').on('click',{element: elActor, margin: MARGIN}, easing);
        //reset
        $('button#reset').on('click',{element: elActor}, resetActor);
    }())

}); // end of $(document).ready()