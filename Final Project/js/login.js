/**************************************
 TITLE: formPrototype.js			
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: manipulate user sign up form form
 ORIGINALLY CREATED ON: 19 November 2021
 LAST MODIFIED ON: 19 November 2021
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 19 November 2021 - Modifying output message 
	to make the JS script output my own output message (LL)
**************************************/

// A $( document ).ready() block.
$(document).ready(function(){
    import jsonUsers from 'data/users.json'
	/******************
    NAME: resetForm
    PURPOSE:	
        reset the form
    PARAMETERS:
        none, but have target passed in 
    RETURN VALUE:
        void, but reseet form
    *******************/
   function resetForm() {
		DataTransfer.form.reset();	
   }
	$("#reset").on("click", {form: $("#infoForm")}, resetForm);
	/******************
    NAME: 
    PURPOSE:	
        insert content using textContent
    PARAMETERS:
        The target div id name, The First part of the sentence, The Integer of the important number, and the Unit of the number
    RETURN VALUE:
        void, but a output to the desired div in the HTML doc
    *******************/
	function toggleLogin(){

	}
	/******************
    NAME: parseInfo
    PURPOSE:	
        parse info
    PARAMETERS:
        The target div id name, The First part of the sentence, The Integer of the important number, and the Unit of the number
    RETURN VALUE:
        void, but a output to the desired div in the HTML doc
    *******************/
	function parseInfo() {
			/**create dict for info 
		 * dict means key/value pairs
		 * also include an array recording the key names (cancelled)
		*/
		var dictUserInfo ={
			//current design is to left it initially empty
		}
		/**parse data from form 
		 * append to dict
         * spaces are trimmed
		*/
		dictUserInfo["account"] = $('input[name="account"]').val().trim();
        dictUserInfo["password"] = $('input[name="password"]').val().trim();
		console.log(dictUserInfo);//debug line
		return dictUserInfo;
	}
	/******************
    NAME: printInfo
    PURPOSE:	
        insert content using alert for user to confirm
    PARAMETERS:
        The target div id name, The First part of the sentence, The Integer of the important number, and the Unit of the number
    RETURN VALUE:
        void, but a output to the desired div in the HTML doc
    *******************/
	function validateInfo(dictUserInfo) {
        //load json file
        var jsonUsers = require('');
        //for 
            //if match, print, breakout


		alert("Account: " + dictUserInfo["account"]+"\n"+
				"Password: " +dictUserInfo["password"]
				)
        
	}
	/******************
    NAME: submit
    PURPOSE:	
        insert content using textContent
    PARAMETERS:
        The target div id name, The First part of the sentence, The Integer of the important number, and the Unit of the number
    RETURN VALUE:
        void, but a output to the desired div in the HTML doc
    *******************/
	function submit(){
		//take infomation, store into var
		var dictUserInfo = parseInfo();
		//print info
		printInfo(dictUserInfo);
	}
    //event 'login'
	$("#loginButton").on("click", {}, submit);
}); // end of $(document).ready()
