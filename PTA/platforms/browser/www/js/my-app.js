// Initialize app
var myApp = new Framework7();
<<<<<<< HEAD
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
=======

//const alasql = require('alasql');
$(document).on("ready", function()
{
	databaseHandler.createDatabase();
	questionTableHandler.addQuestionToTable("asdfa", "dd", "dd", "dd","dd","a1","I said so");
});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;



>>>>>>> parent of d0eeee0... updated plugin stuff
// Add view
var mainView = myApp.addView('.view-main', 
{
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

document.getElementById('sq').onclick = createdb;
    
    
    
$(document).on("ready", function() // seems to only run on web browser, not on devices
{
});


//function (){
  //  document.getElementById('prompt').textContent = "Asdfasfd";}


// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() 
{
<<<<<<< HEAD
    
});// end on device ready
=======
   
    console.log("Device is still ready");
}				)
>>>>>>> parent of d0eeee0... updated plugin stuff


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
    document.getElementById('prompt').textContent = "Asdfasfd";
    var test = results.rows.length;
    console.log(test);
    for (i=0; i<test; test++)
        {
          document.getElementById('prompt').textContent = "Asdfasfd";
            console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");   
        }
    
}

function createdb()
{
    "use strict";
    try
    {
        databaseHandler.createDatabase();
        questionTableHandler.addQuestionToTable('asdfa', 'dd', 'dd', 'dd','dd','a2','I said so','ceh');
        questionTableHandler.selectQuestions(displayRecord);
    }
    catch (err)
        {
            console.log("something bad happened");
        }
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