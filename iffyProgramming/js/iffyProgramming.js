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
        //defualt prompt sentense
        strPrompt:"Sailman! We are leaving in 15 minutes, can you make it?",
        //recieved response
        strRecieved:"Maybe",
        //response sentense
        strResponse:"",

        prompt : function(){
            //variable for Valid Input condition
            var arrayValidInput = ["Yes", "yes", "No", "no"];
            //while input is not valid
            while (arrayValidInput.indexOf(this.strRecieved) == -1) {
                //prompt
                this.strRecieved = prompt(this.strPrompt, this.strRecieved);
                //insert a alert if not valid input!
                if (arrayValidInput.indexOf(this.strRecieved) == -1){
                    alert("You input "+this.strRecieved+" . Please input 'Yes/yes' or 'NO/no'! Or walk the plank! ");
                }
            /*At the end of the function, the strRecieved will be set a Valid value*/
            }
        },
        generateResponse : function(){
            if (this.strRecieved == "Yes" || this.strRecieved == "yes") {
                this.strResponse = "Great! You will earn extra doubloons!"
                console.log(this.strResponse);
            } else {
                this.strResponse = "Argh, walk the plank!"
                console.log(this.strResponse);
            }
        },
        printSpeak : function(strElement, strSentense) {
            var strElOutput = document.getElementById(strElement);
            strElOutput.textContent = strSentense;
            }
        }
        //prompt het user for input
        Prompter.prompt();
        //Interesting feature: change background accordingly
        if (Prompter.strRecieved == "Yes" || Prompter.strRecieved == "yes") {
            $('body').css('background-image', 'url(./css/background1.jpg)');
        } else {
            $('body').css('background-image', 'url(./css/background2.jpg)');
        }
        //generate sentense according to input
        var strResponse = Prompter.generateResponse();
        //print to the page
        Prompter.printSpeak("prompt", Prompter.strPrompt);
        Prompter.printSpeak("answer", Prompter.strRecieved);
        Prompter.printSpeak("response", Prompter.strResponse);
    }); // end of $(document).ready()

