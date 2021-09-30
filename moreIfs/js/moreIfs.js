/**************************************
 TITLE: iffyProgramming.js
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: prompt user for input, do conversion, and print messages on the page
 ORIGINALLY CREATED ON: 28 September 2021
 LAST MODIFIED ON: 29 September 2021
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

        promptCoordinate : function() {
            var arrayPrompt = ["What's your current latitude?", "What's your current longitude?", "What's your destination latitude?", "What's your destination longitude?"];
            this.intCurrentLatitude = prompt(arrayPrompt[1])
            this.intCurrentLongitude = prompt(arrayPrompt[2])
            this.intDestinationLatitude = prompt(arrayPrompt[3])
            this.intDestinationLongitude = prompt(arrayPrompt[4])
            //console.log(this.intCurrentLatitude);//debug line
        },
        
        strPathIfElse : function(){
            if (this.moveVector.intLatitudeChange >= 0) {
                if (this.moveVector.intLongitudeChange >= 0) {
                    this.strPath = "Head North East";
                } else if(this.moveVector.intLatitudeChange <= 0) {
                    this.strPath = "Head North West";
                } else {
                    this.strPath="Land Ho!"
                }
            } else if(this.moveVector.intLatitudeChange <= 0){
                if (this.moveVector.intLongitudeChange >= 0) {
                    this.strPath = "Head South East";
                } else if(this.moveVector.intLatitudeChange <= 0) {
                    this.strPath = "Head Sorth West";
                } else {
                    this.strPath="Land Ho!";
                }
            } else {
                this.strPath="Land Ho!";
            }
        },
        strPathSwitch : function () {
            switch (true) {
                case (this.moveVector.intLongitudeChange >= 0 && this.moveVector.intLongitudeChange >= 0):
                    this.strPath = "Head North East";
                    break;
                case (this.moveVector.intLongitudeChange >= 0 && this.moveVector.intLongitudeChange <= 0):
                    this.strPath = "Head North West";
                    break;     
                case (this.moveVector.intLongitudeChange <= 0 && this.moveVector.intLongitudeChange >= 0):
                    this.strPath = "Head South East";
                    break;
                case (this.moveVector.intLongitudeChange <= 0 && this.moveVector.intLongitudeChange <= 0):
                    this.strPath = "Head South West";
                    break;                        
                default:
                    this.strPath="Land Ho!";
                    break;
            }
        },
        strPrint : function(strElement){
            var strElOutput = document.getElementById(strElement);
            strElOutput.textContent = this.strPath;

        }
    }
    Prompter.promptCoordinate();
    Prompter.strPath = "Current Latitude: " + Prompter.intCurrentLatitude + "   CurrentLongitude: "+ Prompter.intCurrentLongitude + "    DestinationLatitude: " + Prompter.intDestinationLatitude + "    DestinationLongitude: " + Prompter.intDestinationLongitude;
    Prompter.moveVector.intLatitudeChange = Prompter.intDestinationLatitude - Prompter.intCurrentLatitude;
    Prompter.moveVector.intLongitudeChange = Prompter.intDestinationLongitude - Prompter.intCurrentLongitude;
    Prompter.strPrint("echo")
    //console.log(Prompter.strPath);//debug line
    
    Prompter.strPathIfElse();
    Prompter.strPrint("ifElse");
    Prompter.strPathSwitch();
    Prompter.strPrint("caseSwitch")
    
}); // end of $(document).ready()

