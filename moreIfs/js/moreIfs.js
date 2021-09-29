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

        moveVector: {
            intLatitudeChange: intDestinationLatitude - intCurrentLatitude, 
            intLongitudeChange: intDestinationLongitude - intCurrentLongitude,
        },

        promptCoordinate : function() {
            var arrayPrompt = ["What's your current latitude","What's your current longitude","What's your destination latitude","What's your destination longitude"];
            var arrayVar = [this.intCurrentLatitude, this.intCurrentLongitude, this.intDestinationLatitude, this.intDestinationLongitude];
            for (let i = 0; i < array.length; i++) {
                arrayVar[i] = prompt(arrayPrompt[i]);
            }
        },
        
        strPathIfElse : function(){
            if (this.moveVector.intLatitudeChange > 0) {
                if (this.moveVector.intLongitudeChange > 0) {
                    
                } else if(this.moveVector.intLatitudeChange < 0) {
                    
                } else {

                }
            } else if(this.moveVector.intLatitudeChange < 0){
                if (this.moveVector.intLongitudeChange > 0) {
                    
                } else if(this.moveVector.intLatitudeChange < 0) {
                    
                } else {
                    
                }
            } else {
                if (this.moveVector.intLongitudeChange > 0) {
                    
                } else if(this.moveVector.intLatitudeChange < 0) {
                    
                } else {
                    //not moving
                }
            }
        },
        strPathSwitch : function () {
            switch (true) {
                case ():
                    
                    break;
                case ():
                    
                    break;
                case ():
                    
                    break;         
                case ():
                    
                    break;  
                case ():
                    
                    break;
                case ():
                            
                    break;
                case ():
                            
                    break;         
                case ():
                            
                    break;  
                case ():

                    break;                                 
                default:
                    break;
            }
        }
    }
}); // end of $(document).ready()

