/**************************************
 TITLE: conversions.js
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: prompt user for input, do conversion, and print messages on the page
 ORIGINALLY CREATED ON: 09 September 2021
 LAST MODIFIED ON: 10 September 2021
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 09 September 2021 - Adding functions according to Requirement
	to make page functional. (LL)
 09 September 2021 - Adding functions
    to complete prompts and verversions. (LL)
 09 September 2021 - Adding comment
    to describe each function and some key statements. (LL)
 10 September 2021 - Small changes according to HTML change. (LL)
 11 September 2021 - Typo in variable name
    fixed. (LL)
***************************************/


// A $( document ).ready() block.
$(document).ready(function(){
    //conversion rate
    const price = 287;
    //target document to write the message
    const target = "message";
    /******************
    NAME: strPromptName
    PURPOSE:	
        prompt pirate's name
    PARAMETERS:
        void
    RETURN VALUE:
        prompted name or default name
    *******************/
    $.fn.strPromptName = function(){ 
        //variable for name string
        var strName;
        //variable for question string
        var strQuestion = "Howdy! What's your name, Captain?";
        //variable for _default string
        var strDefault = "Fritz Rogge";
        //use prompt(message?: string, _default?: string): string function to ask for name
        strName = prompt(strQuestion, strDefault);
        return strName;
    }
    /******************
    NAME: strPromptDoubloonNum
    PURPOSE:	
        prompt number of gold doubloons
    PARAMETERS:
        void
    RETURN VALUE:
        number of gold doubloons
    *******************/
    $.fn.strPromptDoubloonNum = function(){
        //variable for doubloon number string
        var strDoubloonNum;
        //variable for question string
        var strQuestion = "How many gold doubloons, Captain?";
        //variable for _default string
        var strDefault = "12";
        //use prompt(message?: string, _default?: string): string function to ask for name
        strDoubloonNum = prompt(strQuestion, strDefault);
        return strDoubloonNum; 
    }
    /******************
    NAME: intDoubloonToUSD
    PURPOSE:
        calculate conversion into dollars
    PARAMETERS:
        number of gold doubloons
    RETURN VALUE:
        equivilent dollars
    *******************/
    $.fn.intDoubloonToUSD = function(intDoubloonNum){
        var intUSD = intDoubloonNum*price;
        return intUSD;
    }
    //prompt name and doubloons, store with str prefix
    var strName = $.fn.strPromptName();
    var strDoubloonNum = $.fn.strPromptDoubloonNum();
    //convert into int
    var intDoubloonNum = parseInt(strDoubloonNum);
    //convert into USD
    var intUSD = $.fn.intDoubloonToUSD(intDoubloonNum);
	//add content to div using textContent
    var strMessage = "I, " + strName + ", have plundered "+ intDoubloonNum.toString() +" gold doubloons for a total profit of $"+ intUSD.toString() +". Argh!"
    var elOutput = document.getElementById(target); 
    //write content
    elOutput.textContent = strMessage;
    
}); // end of $(document).ready()

