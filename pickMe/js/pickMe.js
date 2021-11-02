/**************************************
 TITLE: pickMe.js
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: print messages at the page
 ORIGINALLY CREATED ON: 29 October 2021 
 LAST MODIFIED ON: 30 October 2021 
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 29 October 2021 - Adding the functions. (LL)
 30 October 2021 - Writing the main fucntion. (LL)
 30 October 2021 - Adding comment
    to describe each function and some key statements (LL)
***************************************/

// A $( document ).ready() block.
$(document).ready(
    function(){
        //jQuery selection by tag name that shows visible results
        function tagHtml(){
            var elTag = $('p');
            console.log(elTag);//debug line
            elTag.html('All Rise');
        }
        //jQuery selection by class name that shows visible results
        function class2ChangeProp(){
            var elClass = $("." + "class2");
            console.log(elClass);//debug line
            elClass.css("font-size", "20px");
            elClass.css("color", "red");
        }
        //jQuery selection by id name that shows visible results
        function idText1ChangeProp(){
            var elId = $("#" + "text1");
            console.log(elId);//debug line
            elId.css("font-size", "30px");
            elId.css("color", "lightblue");
        }
        //jQuery multiple instructions to selected jQuery in 1 line
        function multipleInstruction() {
            var elId = $('button');
            console.log(elId);//debug line
            elId.css({
                "align-items": "center",
                "background-color": "#FCFCFD",
                "border-radius": "4px",
                "height": "48px",
                "color": "#36395A",
                "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                "justify-content": "center",
                "overflow": "hidden",
                "padding-left": "16px",
                "padding-right": "16px",
                "transition": "box-shadow .15s,transform .15s",
                "user-select": "none",
                "white-space": "nowrap",
                "cursor": "pointer",
                "font-size": "18px",
                "box-shadow": "rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset",
                "box-sizing": "border-box",
            })
        }
        //jQuery filtered selection by tag name that shows visible results
        function tagFilteredChangeProp(){
            var elTag = $("p"+":"+"odd");
            console.log(elTag);//debug line
            elTag.css("font-style", "italic");
        }
        //jQuery filtered selection by class name that shows visible results
        function classFilteredChangeProp(){
            var elClass = $("." + "class1" + ":" + "last");
            console.log(elClass);//debug line
            elClass.css("letter-spacing", "0.2em");
        }
        //jQuery filtered selection by id name that shows visible results
        function idFilteredChangeProp(){
            var elId = $("#text6" + ":visible");
            console.log(elId);//debug line
            elId.css("font-family", "fantasy, cursive, serif");
        }
        
        $('#tag').click(tagHtml);
        $('#class').click(class2ChangeProp);
        $('#id').click(idText1ChangeProp);
        $('#multiInstruction').click(multipleInstruction);
        $('#tagF').click(tagFilteredChangeProp);
        $('#classF').click(classFilteredChangeProp);
        $('#idF').click(idFilteredChangeProp);
}); // end of $(document).ready()
