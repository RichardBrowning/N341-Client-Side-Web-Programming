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
    /*PRECHECK*/
    checkLogCk();

    function checkLogCk(){
        //split array
        var arrayCookie = document.cookie.split(";");
        //loop through the cookie array
        for(var i = 0; i < arrayCookie.length; i++) {
            var cookiePair = arrayCookie[i].split("=");
            //if entire cookie empty
            if (!cookiePair[0]){
                //set it false logged in
                document.cookie="loggedIn=false";
                return false;
            }//if loggedIn=true
            else if(cookiePair[0].trim() == "loggedIn" && cookiePair[1].trim() == "true"){
                alert("You are already logged in! Redirecting ...")
                window.location.href = "../index.html";
                return true;
            }
        }
        return false;
    }

	/******************
    NAME: parseInfos
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
		//console.log(dictUserInfo);//debug line
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
        //store current log in info
        var strAccount = dictUserInfo['account'];
        var strPassword = dictUserInfo['password'];
        //load json file
        /*IMPORTANT do not just return from inner function, from outter too , IT IS ASYNC*/
        fetch('../data/users.json')
            .then(function(response){
                response.json().then(function(data){
                console.log(data.users.length); 
                //traverse for if username is valid
                for (i = 0; i < data.users.length; i++){
                    //in current user
                    var user = data.users[i];
                    //if there is one with matching password and account id or email, that is the one
                    if (strAccount == user.userName||strAccount == user.email){
                        //console.log(user.userName + user.email);
                        if (strPassword == user.password) {
                            toggleErrorMessage("#accountMessage", false);
                            toggleErrorMessage("#passwordMessage", false);
                            /*we then push it to the cookies*/
                            (function(){
                                var now = new Date();
                                var time = now.getTime();
                                var expireTime = time + 1000*60*60;//this is 1 hour
                                now.setTime(expireTime);
                                var domainName = window.location.hostname;
                                document.cookie = "path=/"; 
                                document.cookie = "domain=." + domainName;
                                document.cookie = "uuid="+user.uuid+"";
                                //document.cookie = "expires="+now.toUTCString();
                                document.cookie = "loggedIn=true";
                                document.cookie = "secure";//may not work
                            }())
                            //alert(user.userName + " is logged in!!!");//debug line
                            /*if not put on page yet, out it on*/
                            if(!$('form div:first-child img').length){
                                //get avatar url, get username
                                urlAvatar = user.avatar;
                                //DOM MANIPULATION new div
                                var divWelcome = document.createElement('div');
                                //image beginning
                                var imgAvatar = document.createElement('img');
                                //welcome!
                                var txtWelcome = document.createTextNode('Welcome! '+user.userName);
                                //append in img and text
                                divWelcome.appendChild(imgAvatar);
                                divWelcome.appendChild(txtWelcome);
                                //prepend to login
                                $('#login').prepend(divWelcome);
                                //immed hide
                                $("#login div:first-child").hide();
                                //attr url of image
                                $('#login img').addClass('avatar').attr("src", urlAvatar);
                                //fade toggle
                                $("#login div:first-child").fadeToggle(1000)
                            }
                            /*toggle log in page view acccording to the log status*/
                            return true;
                        }else{
                            //if account yes, but password no
                            //alert("account yes, but password no")//db line
                            toggleErrorMessage("#accountMessage", false);
                            toggleErrorMessage("#passwordMessage", true);
                            return false;
                        }
                    }
                }
                //everything after here are "if account&password no"
                //alert("account and password no")//db line
                toggleErrorMessage("#accountMessage", true);
                toggleErrorMessage("#passwordMessage", false);
                return false;
            })  })
        }
        //debug line
		//alert("Account: " + dictUserInfo["account"]+"\n"+"Password: " +dictUserInfo["password"])

    function toggleErrorMessage(strJqSelector ,valid) {
        //if valid
        if (valid){
            //turn the line visible
            $(strJqSelector).removeClass("hidden");
        }else{
            //not valid, trun it visible
            $(strJqSelector).addClass("hidden");
        }
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
	function submit(e){
		//take infomation, store into var
		var dictUserInfo = parseInfo();
        //to read cookie
        validateInfo(dictUserInfo);

        //if cookie says not logged in
        if (!checkLogCk()){
            console.log('skip prevented')
            e.preventDefault();
        };
        
    }
    //event 'login'
	$("#loginButton").on("click", function( event ){
        submit(event);
    });
}); // end of $(document).ready()
