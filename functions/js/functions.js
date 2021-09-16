/**************************************
 TITLE: functions.js
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
            /******************
    NAME: giveOrder
    PURPOSE:	
        insert content using textContent
    PARAMETERS:
        The target div id name, The First part of the sentence, The Integer of the important number, and the Unit of the number
    RETURN VALUE:
        void, but a output to the desired div in the HTML doc
    *******************/
function giveOrder (strDiv, strSentence, intNumber, strUnit){
    var arrayOrderParts = [strSentence, intNumber, strUnit];
    var strOrder = arrayOrderParts.join(' ');
    try {
        //get target for adding content
        var elOutput = document.getElementById(strDiv); 
        //write content
        elOutput.textContent = strOrder;
    } catch (e) {
        console.log(e);
    }
}
	//defining content 
    let arrayTargetDiv = [
        "firstOrder",
        "secondOrder",
        "thirdOrder",
        "forthOrder",
        "fifthOrder"
    ]
    let arrayFirstString = [
        "The quartermaster steers the ship in route to intercept the enemy, passing within a mere",
        "Gunner, Form crossfire on the enemy ship starboard, direction",
        "Chief Engineer, set cruise speed at",
        "CIC, lock on the ship with radar at",
        "XO, watch out for the possible enemy reinforcement"
    ]
    let arrayNumber = [
        5,
        170,
        25,
        10,
        34
    ]
    let arraySecondString = [
        "feet!",
        ", relative orientation!",
        "Knots!",
        "GigaHertz!",
        "miles away and approaching!"
    ]
    //add content to div using textContent
    for (let i = 0; i < 5; i++) {
        giveOrder(arrayTargetDiv[i], arrayFirstString[i], arrayNumber[i].toString(), arraySecondString[i]);
    }
}); // end of $(document).ready()

