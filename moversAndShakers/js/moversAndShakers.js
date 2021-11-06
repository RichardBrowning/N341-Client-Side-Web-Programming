/*******************************
 TITLE: moversAndShakers.html		
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: Displaying a Page for jQuery to modify content
 ORIGINALLY CREATED ON: 30 October 2021 
 LAST MODIFIED ON: 30 October 2021 
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 30 October 2021 - Adding basic content 
 	Give the page a basic look (LL)
*******************************/

$(document).ready(function(){
    //global variable: element of animation
    var elActor = $('#actor');
        /******************
        NAME: showActor
        PURPOSE:	
            
        PARAMETERS:
            none
        RETURN VALUE:
            none, but show animation
        *******************/
        function showActor() {
			elActor.show(1500);
		}
        /******************
        NAME: hideActor
        PURPOSE:	
            
        PARAMETERS:
            none
        RETURN VALUE:
            none, but show animation
        *******************/
		function hideActor() {
			elActor.hide(1500);
		}
        /******************
        NAME: strPathSwitch
        PURPOSE:	
            Switch case version of judging when direction to move
        PARAMETERS:
            none
        RETURN VALUE:
            none but set a string to describe direction
        *******************/
        
        /******************
        NAME: parseTextTextContent
        PURPOSE:	
            print to certain element of the HTML page
        PARAMETERS:
            target Id
        RETURN VALUE:
            print content to target Id 
        *******************/
		
	//Register events for Buttons
	$('button#show').click(showActor);
	$('button#hide').click(hideActor);
    
}); // end of $(document).ready()