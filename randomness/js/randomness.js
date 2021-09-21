/**************************************
 TITLE: randomness.js
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: print messages at the page
 ORIGINALLY CREATED ON: 14 September 2021 
 LAST MODIFIED ON: 15 September 2021 
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 14 September 2021 - Adding the functions according to Requirement. (LL)
 15 September 2021 - Writing the main fucntion. (LL)
 15 September 2021 - Adding comment
    to describe each function and some key statements (LL)
 08 September 2021 - Small changes according to renaming. (LL)
***************************************/

// A $( document ).ready() block.
$(document).ready(
    function(){
        var Pirate = {
            //Properties
            name: this.name,
            rank: this.rank,
            guess: this.guess,

            /******************
            NAME: giveOrder
            PURPOSE:	
                insert content using textContent
            PARAMETERS:
                The target div id name, the complete as content to print to the div
            RETURN VALUE:
                void, but a output to the desired div in the HTML doc
            *******************/
            speak : function(strDiv, sentense){
                try {
                    //get target for adding content
                    var elOutput = document.getElementById(strDiv); 
                    //write content
                    elOutput.textContent = sentense;
                } catch (e) {
                    console.log(e);
                }
            },
            strGuess : function(){
                this.guess = Math.floor(Math.random()*10);
                var sentense = this.rank + " " + this.name + " guesses " + this.guess + "Argh!";
                return this.guess;
            },
            strAnnounce : function(hit, name, rank){
                if (hit == true) {
                    var sentense = "Direct hit, "+ rank + name + "! The correct answer is " + this.guess + "!"
                } else {
                    var sentense = "The correct answer is " + this.guess + ". Looks like Lady Luck ain't with you today gentlemen! I am a good man though, I know how to share!"
                }
            }
        };
    //create captain
    //captain speak
    //add content to div using textContent
    //captain generate random number
    
    
}); // end of $(document).ready()

