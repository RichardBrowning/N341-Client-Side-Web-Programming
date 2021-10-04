/**************************************
* TITLE: Arrays and Loopiness
* AUTHOR: Christian Dodds
* PURPOSE: Prompt letter form user, converto to ascii and to binary and then print to HTML page
* CREATE DATE: 9/29/2014
* LAST MODIFIED ON: 10/04/2021
* LAST MODIFIED BY: Luxi Liao (LL)
* PURPOSE: base code for the Arrays and Loopiness assignment, 
*	you are encouraged to use the following code to start 
*	your arrays and loopiness assignment
* MODIFICATION HISTORY
    October 03 - Adding essential functions and ultilities
**************************************/

/*TODO */
$(document).ready(function(){
	/*****	
    NAME: isLetter		
	PURPOSE: check if a letter (single one )(Expanding the PROTOTYPE of the String object)
	PARAMETER: A SINGLE letter	
	RETURN: the letter input
	*****/
    String.prototype.isLetter = function(){
        try {
            //if it is letter, return true
            return this.length === 1 && this.toUpperCase() != this.toLowerCase();
        } catch (e) {
            console.log(e);
        }
    }
    /*****	
    NAME: promptLetter		
	Purpose: prompt user for their input, and validate it. (not accepted: digit, symbol, > / < length of 1)	Loop until valid input detected
	Parameters: none prompt to get input		
	Return: the letter input
	*****/
	function promptLetter(){
        //declare Letter var
        var strLetter = "X";
        //IMPORTANT: the fucntion need to run at least once for teh user to input a letter (a sample answer is ultilized here)
        do{
            //Letter case are not converted  (case-sensative ascii code) 
            strLetter = prompt("Please input a SINGLE letter.", strLetter);
            //if not, alert
            if (!strLetter.isLetter()) {
                alert("Please input a SINGLE Letter")
            }
            //while the input is not valid (not a single letter)
        } while(!strLetter.isLetter())
        //return the letter
        return strLetter;
    }
	/*****	
    NAME: parseAscii		
	Purpose: convert individual characters to int inteh ascii table		
	Parameters: single character / letter		
	Return: integer representing an ascii value
	*****/
	function parseAscii(chrCharacter)
	{
		intAscii = chrCharacter.charCodeAt(0);
		return intAscii;
	}
	
	/*****			
	NAME: parseBin
    Purpose: get binary of the ascii code
	Parameters: single integer representing an ascii value	
	Return: binary, base 2 representation of the number passed to this function
	*****/
	function parseBin(intAscii)
	{
		strBin = parseInt(intAscii, 10).toString(2);
		if(strBin.length < 8)
		{
			var intPlaceHolders = 8 - strBin.length;
			for(var i = 0; i < intPlaceHolders; i++)
			{
				strBin = "0" + strBin;
			}
			
		}
		return strBin;
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
    function insertTextTextContent(number, digit){
        //name variable for storage of content
        var strMessage = (digit == '1')? 'true':'false';
        console.log("the content: "+strMessage+" . Outputing to: " + "digit"+number.toString());
        //get target for adding content
        var elOutput = document.getElementById("digit"+number.toString()); 
        //write content
        elOutput.textContent = strMessage;
    }
    alert("Hoist the secret message ye scurvy dawgs!");
	//Your code here

    //ask and velidarte the user's input
    var strLetter = promptLetter();
    //converto to ascii and the to binary
    var strBinary = parseBin(parseAscii(strLetter));
    console.log(strBinary);
    console.log(typeof(strBinary));
    //binary string to array
    arrayBinary = strBinary.split('');
    console.log(arrayBinary);
    //print to desired areas of the page
    for (let index = 0; index < arrayBinary.length; index++) {
        insertTextTextContent(index, arrayBinary[index]);
    }
    /*
    Mothod is abandoned
    arrayBinary.every(bit => insertTextTextContent(i++, toString(bit)));
    */
});