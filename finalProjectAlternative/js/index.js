/**************************************
 TITLE: formPrototype.js			
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: manipulate user sign up form form
 CREATE DATE: 19 November 2021
 LAST MODIFIED ON: 19 November 2021
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 19 November 2021 - Modifying output message 
	to make the JS script output my own output message (LL)
**************************************/

// A $( document ).ready() block.
$(document).ready(function(){
    //setup jq ui
    $("#accordion > div").accordion({ header: "h3", collapsible: true });

    var LoginInfo = checkCookie();
    console.log(LoginInfo);
    /** init login buttons */
    toggleLog(LoginInfo["loggedIn"]);

    printUserInfo(LoginInfo["uuid"]);

    function printUserInfo(uuid) {
        fetch('../data/users.json')
            .then(function(response){
                response.json().then(function(data){
                //for all the stored users
                for (i = 0; i < data.users.length; i++){
                    //in current user
                    var user = data.users[i];
                    //if there is one with matching UUID
                    if (uuid == user.uuid) {
                        appendUsername(".navigationBar ul li:nth-child(1)", "        "+user.userName);
                    }
                }
            })
        })
    }
    
    function appendUsername(jqTarget, username) {
        var elListItem = document.createElement("li");
        var elUsername = document.createElement("em");
        var txtName = document.createTextNode(username);
        elUsername.appendChild(txtName);
        elListItem.appendChild(elUsername);
        $(jqTarget).append(elUsername);
    }
    
    function checkCookie(){
        //var to store login data
        var LoginInfo={};
        //split array
        var arrayCookie = document.cookie.split(";");
        console.log(arrayCookie);
        //check if empty
        if (!arrayCookie[0]){
            //set it false logged in
            document.cookie="loggedIn=false";
            LoginInfo["loggedIn"] = "false";
            console.log(LoginInfo);
            return LoginInfo;
        }
        //loop through the cookie array
        for(var i = 0; i < arrayCookie.length; i++) {
            var cookiePair = arrayCookie[i].split("=");
            console.log(cookiePair);
            LoginInfo[cookiePair[0].toString().trim()] = cookiePair[1];
            //if(cookiePair[0] == "loggedIn" || cookiePair[1] == "false"){}
        }
        return LoginInfo;
    }
    
    function logOut(){
        document.cookie="loggedIn=false";
    }
    function logIn() {
        console.log("oops log in");
        window.location.href = "../login.html";
    }

    function toggleLog(loggedIn) {
        console.log(loggedIn);
        if (loggedIn == "true") {
            console.log("loggedIn is true");
            $('.logInButton').css('display','none');
            $('.logOutButton').css('display','block');
        } else if(loggedIn == "false") {
            console.log("loggedIn is false");
            $('.logInButton').css('display','block');
            $('.logOutButton').css('display','none');
        }
    }
    /**
     * Button Sections
     */
    $('.logOutButton').on("click", function (event) {logOut();toggleLog("false"); $('header ul em:last-child').remove();});
    $('.logInButton').on("click", function (event) {logIn();});
}); // end of $(document).ready()
