// Initialize app
var myApp = new Framework7();
 

docuent.getElementById('sq').onclick()=createdb;
    
    




$(document).on("ready", function() // seems to only run on web browser, not on devices
{
	createdb();
});

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() 
{

});// end on device ready


var question = 
    {
    	prompt: "",
        answer1:"",
        answer2: "",
        answer3:"",
        correctAnswer: "",
        explanation: ""
    };
            console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");   


function displayRecord(results)
{
    var test = results.rows.length;
    console.log(test);
    for (i=0; i<test; test++)
        {
            document.getElementById('prompt').innerHTML ="asfasdf";
            console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");   
        }
    
}

function createdb()
{
    "use strict";
    databaseHandler.createDatabase();
    questionTableHandler.addQuestionToTable('asdfa', 'dd', 'dd', 'dd','dd','a2','I said so','ceh');
    questionTableHandler.selectQuestions(displayRecord);
}

function seedNumber() // seeds number
{
    "use strict";
    var seededNum = 4; //seeds number to return
    return seededNum;
}

function addQuestion(qType, qNumber) // adds a question to the listing based on seeded number 
{
    "use strict";
}