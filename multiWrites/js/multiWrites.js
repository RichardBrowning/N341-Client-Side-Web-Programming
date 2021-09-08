


// A $( document ).ready() block.
$(document).ready(
    function(){
	// Pop up a window that says "Hello World!"
	alert("Hello World");
}

); // end of $(document).ready()

function parseTextTextContent(){
    // parsing content from the page
    var strMessage = "";
    var elOutput = document.getElementById("textContentInput"); 
    strMessage = elOutput.textContent; 
};

function insertTextTextContent(){
    //writing content to the page
    var strMessage = "Text we are writing to the page.";
    var elOutput = document.getElementById("textContentInput"); 
    elOutput.textContent = strMessage;
}

function insertTextInnerHtml(){
    var strMessage = "Text we are <strong>writing</strong> to the page."; 
    var elOutput = document.getElementById("myFavElementId"); 
    elOutput.innerHTML = strMessage;
}

function insertTextDocWrite(){
    document.write()
}