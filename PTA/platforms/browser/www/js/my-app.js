// Initialize app
var myApp = new Framework7();



$(document).on("ready", function()
{
	databaseHandler.createDatabase();
    questionTableHandler.addQuestionToTable('asdfa', 'dd', 'dd', 'dd','dd','a2','I said so','ceh');
    questionTableHandler.selectQuestions(displayRecord);
	
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
   
    
    console.log("Device is still ready");
}				)


var question = 
    {
    	prompt: "",
        answer1:"",
        answer2: "",
        answer3:"",
        correctAnswer: "",
        explanation: ""
    };


function displayRecord(results)
{
    var test = results.rows.length;
    console.log(test);
}

function createdb()
{
    "use strict";
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