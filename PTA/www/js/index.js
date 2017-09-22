var selectedType = 'ceh'; // will default to ceh
var questionList = [];

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

document.getElementById('a+h').onclick = function()
{
    console.log("button was clicked so now");
    selectedType= 'A+H';
    mainView.router.loadContent(modePage); // changes the page to the mode page
    loadpageitems();

    questionTableHandler.selectQuestions(displayRecord, selectedType);
};
document.getElementById('a+s').onclick = function()
{
    console.log("button was clicked so now");
    selectedType= 'A+S';
    mainView.router.loadContent(modePage); // changes the page to the mode page
    loadpageitems();

    questionTableHandler.selectQuestions(displayRecord, selectedType);
};
document.getElementById('n+').onclick = function()
{
    console.log("button was clicked so now");
    selectedType= 'N+';
    mainView.router.loadContent(modePage); // changes the page to the mode page
    loadpageitems();

    questionTableHandler.selectQuestions(displayRecord, selectedType);
};
document.getElementById('s+').onclick = function()
{
    console.log("button was clicked so now");
    selectedType= 'S+';
    mainView.router.loadContent(modePage); // changes the page to the mode page
    loadpageitems();
};

function loadpageitems()
{
    var pickerDevice = myApp.picker(
        {
            input: '#picker-device', 
            closeByOutsideClick: true,
            cols: 
            [{
                textAlign: 'center',
                values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
            }]
        });
    
    switch(selectedType) // switch to select the title
    {
    case 'S+':
         document.getElementById('headline').innerHTML ='Security+';
        break;
    case 'N+':
         document.getElementById('headline').innerHTML ='Network+';
        break;
    case 'A+H':   
        document.getElementById('headline').innerHTML ='A+ Hardware';
    default:
         document.getElementById('headline').innerHTML ='A+ Software';
    }
    document.getElementById('quiz').onclick = function()
    {
        mainView.router.loadContent(testPage); // changes the page to the quiz app Page
    };
};
