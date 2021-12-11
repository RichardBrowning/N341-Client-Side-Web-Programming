/**************************************
 TITLE: randomness.js
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: print messages at the page and conduct the guessing game
 CREATE DATE: 19 September 2021 
 LAST MODIFIED ON: 21 September 2021 
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 19 September 2021 - Adding the object according to Requirement. 
    including its main properties and mothods (LL)
 20 September 2021 - Revising the methods. (LL)
 20 September 2021 - Adding comment to design the script
    to describe each property and method, and some key statements (LL)
 21 September 2021 - Writing the main function part of the script
    Alternatively write the content to the Console for more convenient debugging (LL)
 21 Septmeber 2021 - Change writing destination to the Web page using textContent (LL)
    Fitting data to divs 
 21 September 2021 - Optimize the script for faster execution (LL)
***************************************/

// A $( document ).ready() block.
$(document).ready(
    function(){
        function Pirate(rank, guess, div) {
            //Properties
            this.rank = rank;
            this.guess = guess,
            this.div = div;

            /******************
            NAME: speak
            PURPOSE:
                insert content using textContent
            PARAMETERS:
                The target div id name, the complete as content to print to the div
            RETURN VALUE:
                void, but a output to the desired div in the HTML doc
            *******************/
            this.speak = function(sentense){
                try {
                    
                    //get target for adding content
                    var elOutput = document.getElementById(this.div); 
                    //write content
                    elOutput.textContent = sentense;
                } catch (e) {
                    // cannot find location
                    console.log(e);
                }
                /*
                console.log(sentense);//debug line
                console.log("THIS IS GOING TO "+this.div);//debug line
                */
            },
            /******************
            NAME: intGenerateNumber
            PURPOSE:
	    	Generate guess a number from 1 to 10
            PARAMETERS:
	    	no external parameters
            RETURN VALUE:
	    	void, but assign the value to guess property
            *******************/
 
            this.intGenerateNumber = function(){
                this.guess = Math.floor(Math.random()*10 + 1);
            },
            /******************
            NAME: strGuess
            PURPOSE:
	    	Generate sentense of the guess
            PARAMETERS:
	    	properties, no external parameters
            RETURN VALUE:
	    	String that represent the guessing sentense 
            *******************/
            this.strGuess = function(){
                this.intGenerateNumber();
                //console.log(this.guess);//debug line
                var sentense = this.rank + " " + " guesses " + this.guess + "\. Argh!";
                return sentense;
            },
            /******************
            NAME: strAnnounce
            PURPOSE: 
                CAPTAIN EXECUTIVE: announce the result
            PARAMETERS:
	    	hit, for judging if someone guessed correct, and rank, for indicating who guessed correctly
            RETURN VALUE:
	    	String that represent the announcement sentense
            *******************/
            this.strAnnounce = function(hit, rank){
                var sentense;
                if (hit) {
                    sentense = "Direct hit, "+ rank + "! The correct answer is " + this.guess + "! You get this bottle of Grog!"
                } else {
                    sentense = "The correct answer is " + this.guess + ". Looks like Lady Luck ain't with you today gentlemen! I am a good man though, I know how to share!"
                }
                return sentense;
            }
        };
    //create captain
    var captain = new Pirate("Captain", undefined, undefined);
    //captain generate random number
    captain.intGenerateNumber();
    //console.log(captain.guess);//debug line
    //captain announce
    let description = "Gentlemen, Good job in the last battle! I have a bottle of Grog, and a number in 1 to 10. Anyone who can guess the number will be rewarded the wine!";
    captain.div = "description";
    captain.speak(description);
    //for crew 1 to 10
    var arrayCrews = [];//array storing crews
    var ranks = ["Midshipman", 
                "Lieutenant",
                "Lieutenant-commander",
                "Sub-lieutenant",
                "Helmsman",
                "Chief Engineer",
                "On-deck Sailor",
                "Off-deck Sailor", 
                "First Officer",
                "Logistics Chief"]//array fir ranks
    for (let i = 0; i < 10; i++) {
        //create crew put to array of CREWS
        eval("arrayCrews[" + i + "] = new Pirate(ranks[" + i + "], undefined, \"guess" + (i+1) + "\");")
    }
    //console.log(arrayCrews);//debug line
    //correct guess info
    var hit = {
        result: false,
        winnerRank: undefined
    }
    /*for crew in crew array, this is the original version
    for (let i = 0; i < arrayCrews.length; i++) {
        if (!hit.result) {
            //crew generate random number
            arrayCrews[i].intGenerateNumber();
            console.log( arrayCrews[i].guess);//debug line
            //crew generate guessing sentence
            var sentense =  arrayCrews[i].strGuess();
            //crew speak
            arrayCrews[i].speak(sentense);
            if ( arrayCrews[i].guess == captain.guess){
                hit.result = true;
                hit.winnerRank =  arrayCrews[i].rank;
                break;
            }
        }
    }
*/
	    //for crews in crew array, this is using the method of array object
    arrayCrews.some(crew=> {
        if (!hit.result) {
            //crew generate random number
            crew.intGenerateNumber();
            //console.log(crew.guess);//debug line
            //crew generate guessing sentence
            sentense = crew.strGuess();
            //crew speak
            crew.speak(sentense);
            if (crew.guess == captain.guess){
                hit.result = true;
                hit.winnerRank = crew.rank;
                return true;
            }
        }
    });

    //CHECK IF the guessing number is the same as the answer of the captain
        //Captain generate answer and the winner
        var announcement = captain.strAnnounce(hit.result, hit.winnerRank)
        //Captain speak
        captain.div = "announce";
        captain.speak(announcement);
}); // end of $(document).ready()

