/**************************************
* TITLE: strings.js
* AUTHOR: Luxi Liao (LL)
* PURPOSE: PUltilizing string methods and properties to generate and display content to the HTML page
* CREATE DATE: 04 October 2021
* LAST MODIFIED ON: 05 October 2021
* LAST MODIFIED BY: Luxi Liao (LL)
* PURPOSE: base code for the Arrays and Loopiness assignment, 
*	you are encouraged to use the following code to start 
*	your arrays and loopiness assignment
* MODIFICATION HISTORY
    05 October 2021 - Adding essential functions, design algorithms (LL)
    06 October 2021 - implement algorithms and debugging (LL)
**************************************/

/* the document ready wrapper */
$(document).ready(function(){
    /*****	
    NAME: promptWord		
	Purpose: prompt user for their input, and validate it (empty is not accepted)
	Parameters: none, prompt to get input		
	Return: the word input
	*****/
	function promptWord(){
        //declare name var
        var strName = prompt("Please input the name of the queen's significant other." );
        do{
            //if not valid, alert
            if (strName.length < 1) {
                alert("Please input a valid name");
            }
            //while the input is not valid (empty)
        } while(strName.length < 1)
        //return the word
        return strName;
    }
    /******************
    NAME: generateShipNames
    PURPOSE:  
        Generate ship names according to the name input
    PARAMETERS:
        mame input
    RETURN VALUE:
        array of Generated names
    *******************/
   function generateShipNames(originalName){
        //declare array
        var arrayShipNames = [];
        //charAt() 
        var strName0 = "Big " + originalName.charAt(0);
        var strName1 = "Mr. " + originalName.trim().charAt(originalName.length-1)
        //indexOf()
        var strName2 = "Good'O "+ originalName.indexOf('a');
        var strName3 = "Lucky "+ originalName.indexOf('o');
        //substring()
        var strName4 = originalName.substring(0, 3);
        var strName5 = originalName.substring(0, 6);
        //trim()
        var strName6 = "General " + originalName.trim();
        //replace()
        var strName7 = "King " + originalName.trim().replace('p', 'b');
        var strName8 = "Prince " + originalName.trim().replace('t', 'd');
        //toUpperCase()
        var strName9 = originalName.trim().toUpperCase();
        //toLowerCase()
        var strName10 = originalName.trim().toLowerCase();
        //Normal 
        var strName11 = "Sir " + originalName.trim();
       //each of the names is generated, push into array
        for (let i = 0; i <= 11; i++) {
            eval("arrayShipNames.push(strName" + i + ")");
        }
        console.log(arrayShipNames);//debugline
       //return
       return arrayShipNames;
   }
    /******************
    NAME: insertTextTextContent
    PURPOSE:  
        Print message using textContent
    PARAMETERS:
        target number in ID, desired content
    RETURN VALUE:
        void
    *******************/
    function insertTextTextContent(intNumber, strName){
        console.log("the content: " + strName + " . Outputing to: " + "name"+intNumber.toString());//debug line
        //get target for adding content
        var elOutput = document.getElementById("name"+intNumber.toString()); 
        //write content
        elOutput.textContent = strName;
    }
	//Your code here
    //prompt name
    /* NAME USED FOR TESTING: Elizabeth DiCaprio         */
    var strOriginalName = promptWord();
    //generate names with core fucntion
    var arrayShipNames = generateShipNames(strOriginalName);
    console.log(arrayShipNames);//debug line
    //for names in the array, 
    for (let index = 0; index <= arrayShipNames.length; index++) {
        //print to according areas of the page
        insertTextTextContent(index, arrayShipNames[index]);
    }
});