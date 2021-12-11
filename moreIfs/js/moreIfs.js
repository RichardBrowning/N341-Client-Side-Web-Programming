/**************************************
 TITLE: iffyProgramming.js
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: prompt user for input, do conversion, and print messages on the page
 CREATE DATE: 28 September 2021
 LAST MODIFIED ON: 29 September 2021
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 28 September 2021 - Adding functions according to Requirement
	to make page functional. (LL)
 28 September 2021 - Adding functions
    to complete prompts and verversions. (LL)
 29 September 2021 - Adding comment
    to describe each function and some key statements. (LL)
 29 September 2021 - Small changes according to HTML change. (LL)
 29 September 2021 - Typo in variable name
    fixed. (LL)
***************************************/


// A $( document ).ready() block.
$(document).ready(function(){
    //prompter
    let Prompter = {
        //current latitude
        intCurrentLatitude : 0,
        //current longitude
        intCurrentLongitude : 0,
        //dest latitude
        intDestinationLatitude : 0, 
        //dest longitude
        intDestinationLongitude : 0,
        //path
        strPath : "",

        moveVector: {
            intLatitudeChange: 0,
            intLongitudeChange: 0,
        },
        /******************
        NAME: promptCoordinate
        PURPOSE:	
            prompt user for coordinates
        PARAMETERS:
            none
        RETURN VALUE:
            none, but set the properties
        *******************/
        promptCoordinate : function() {
            var arrayPrompt = ["What's your current latitude?", "What's your current longitude?", "What's your destination latitude?", "What's your destination longitude?"];
            this.intCurrentLatitude = parseInt(prompt(arrayPrompt[0]));
            this.intCurrentLongitude = parseInt(prompt(arrayPrompt[1]));
            this.intDestinationLatitude = parseInt(prompt(arrayPrompt[2]));
            this.intDestinationLongitude = parseInt(prompt(arrayPrompt[3]));
            //console.log(this.intCurrentLatitude);//debug line
        },
        /******************
        NAME: strPathIfElse
        PURPOSE:	
            if else version of judging when direction to move
        PARAMETERS:
            none
        RETURN VALUE:
            none but set a string to describe direction
        *******************/
        strPathIfElse : function(){
            if (this.moveVector.intLatitudeChange >= 0) {
                if (this.moveVector.intLongitudeChange >= 0) {
                    this.strPath = "Head North East";
                } else if(this.moveVector.intLongitudeChange <= 0) {
                    this.strPath = "Head North West";
                } else {
                    this.strPath="Land Ho!"
                }
            } else if(this.moveVector.intLatitudeChange <= 0){
                if (this.moveVector.intLongitudeChange >= 0) {
                    this.strPath = "Head South East";
                } else if(this.moveVector.intLongitudeChange <= 0) {
                    this.strPath = "Head South West";
                } else {
                    this.strPath="Land Ho!";
                }
            } else {
                this.strPath="Land Ho!";
            }
        },
        /******************
        NAME: strPathSwitch
        PURPOSE:	
            Switch case version of judging when direction to move
        PARAMETERS:
            none
        RETURN VALUE:
            none but set a string to describe direction
        *******************/
        strPathSwitch : function () {
            switch (true) {
                case (this.moveVector.intLatitudeChange >= 0 && this.moveVector.intLongitudeChange >= 0):
                    this.strPath = "Head North East";
                    break;
                case (this.moveVector.intLatitudeChange >= 0 && this.moveVector.intLongitudeChange <= 0):
                    this.strPath = "Head North West";
                    break;     
                case (this.moveVector.intLatitudeChange <= 0 && this.moveVector.intLongitudeChange >= 0):
                    this.strPath = "Head South East";
                    break;
                case (this.moveVector.intLatitudeChange <= 0 && this.moveVector.intLongitudeChange <= 0):
                    this.strPath = "Head South West";
                    break;                        
                default:
                    this.strPath="Land Ho!";
                    break;
            }
        },
        /******************
        NAME: parseTextTextContent
        PURPOSE:	
            print to certain element of the HTML page
        PARAMETERS:
            target Id
        RETURN VALUE:
            print content to target Id 
        *******************/
        strPrint : function(strElement){
            var strElOutput = document.getElementById(strElement);
            strElOutput.textContent = this.strPath;

        }
    }
    //prompt user for input
    Prompter.promptCoordinate();
    //content to print to the page (echo user's input)
    Prompter.strPath = "Current Latitude: " + Prompter.intCurrentLatitude + "   Current Longitude: "+ Prompter.intCurrentLongitude + "    Destination Latitude: " + Prompter.intDestinationLatitude + "    Destination Longitude: " + Prompter.intDestinationLongitude;
    //calculate displacement vector
    Prompter.moveVector.intLatitudeChange = Prompter.intDestinationLatitude - Prompter.intCurrentLatitude;
    Prompter.moveVector.intLongitudeChange = Prompter.intDestinationLongitude - Prompter.intCurrentLongitude;
    //print to echo
    Prompter.strPrint("echo")
    //console.log(Prompter.strPath);//debug line
    
    //calcuate the direction with if else
    Prompter.strPathIfElse();
    //print to ifElse
    Prompter.strPrint("ifElse");
    //calculate the direction with switch 
    Prompter.strPathSwitch();
    //print to caseSwitch
    Prompter.strPrint("caseSwitch")
    
}); // end of $(document).ready()

