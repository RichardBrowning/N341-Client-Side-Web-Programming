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
    var LoginInfo = checkCookie();
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
                        appendUsername(".navigationBar ul li:nth-child(5)", user.userName);
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
        //loop through the cookie array
        for(var i = 0; i < arrayCookie.length; i++) {
            var cookiePair = arrayCookie[i].split("=");
            //if entire cookie empty
            if (!cookiePair[0]){
                //set it false logged in
                document.cookie="loggedIn=false";
                return false;
            }//if loggedIn=true
            else {
                LoginInfo[cookiePair[0]] = cookiePair[1];
            }
        }
        console.log(LoginInfo["loggedIn"]);
        return LoginInfo;
    }
    
    function logout(){
        document.cookie="loggedIn=false";
    }
    function login() {
        window.location="../login.html";
    }

    function toggleLog(loggedIn) {
        if (loggedIn == "true") {
            console.log("loggedIn == true");
            $('#logInButton').hide();
            $('#logOutButton').show();
        } else {
            console.log("loggedIn == false");
            $('#logInButton').show();
            $('#logOutButton').hide();
        }
    }


    /**
     * Button Sections
     */
    $('.logOutButton').on("click", {}, logout());


}); // end of $(document).ready()
