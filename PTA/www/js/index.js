var selectedType = 'ceh'; // will default to ceh
var questionList = [];
var app = 
{
    
    // Application Constructor
    initialize: function() 
    {
        this.bindEvents();
    },
   

    // Bind any events that are required on startup with listeners. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() // add event listeners here so that they can be ready to run whenever it is time
    {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() // when device is ready, do stuff here
    {
        app.receivedEvent('deviceready');
        console.log('hey the device was actually ready this time');
        createDb();
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


function displayRecord(tx, results) // loads result set into the questionlist. used by question handler
{   
    questionList = []; // clear question list upon new query
    console.log('This many questions in the table: '+ results.rows.length);  
    for(i=0;i<results.rows.length;++i)
        {
            questionList[i]=
            {
                prompt: results.rows.item(i).inquisition,
                answer1: results.rows.item(i).a1,
                answer2: results.rows.item(i).a2,
                answer3: results.rows.item(i).a3,
                answer4: results.rows.item(i).a4,
                correctAnswer: results.rows.item(i).correct,
                explanation: results.rows.item(i).Explanation
            };
            
            console.log(questionList[i].explanation);
        }    
    questionList = shuffle(questionList);
    console.log(questionList[0].explanation);
 
};

function createDb()
{
    "use strict";
    databaseHandler.createDatabase(filehandler.loadtheTestBank);
 
};

function shuffle(array) //Fisher-Yates shuffle algorithm
{
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function addQuestion(qType, qNumber) // adds a question to the listing based on seeded number 
{
    "use strict";
};

document.getElementById('sq').onclick = function()
{
    console.log("button was clicked so now");
    questionTableHandler.selectQuestions(displayRecord, selectedType);
};