var selectedType = 'ceh'; // will default to ceh
var questionList = [];
var answerBank = [];
var currentQuestion =0;
var pickerNumber;
function displayRecord(tx, results) // loads result set into the questionlist. used by question handler
{   
    questionList = []; // clear question list upon new query
    console.log('This many questions in the table: '+ results.rows.length); 
    console.log("loading questions for test");
    for(i=0;i<results.rows.length && i<pickerNumber;++i)
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
        }    
    console.log("questions have loaded");
    questionList = shuffle(questionList);
    console.log("shuffled questions");
 
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
    selectedType= 'A+H';
    mainView.router.loadContent(modePage); // changes the page to the mode page
    loadmodepage();
};
document.getElementById('a+s').onclick = function()
{
    console.log("button was clicked so now");
    selectedType= 'A+S';
    mainView.router.loadContent(modePage); // changes the page to the mode page
    loadmodepage();

};
document.getElementById('n+').onclick = function()
{
    console.log("button was clicked so now");
    selectedType= 'N+';
    mainView.router.loadContent(modePage); // changes the page to the mode page
    loadmodepage();
};
document.getElementById('s+').onclick = function()
{
    console.log("button was clicked so now");
    selectedType= 'S+';
    mainView.router.loadContent(modePage); // changes the page to the mode page
    loadmodepage();
};

function loadmodepage()
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
    document.getElementById('quiz').onclick = function() // quiz button click function
    {
        loadtestPage(pickerDevice.value);   
    };
};
function loadtestPage(pick)
{
    if(typeof pick == 'undefined')
    {
        pickerNumber = 10;
    }
    else
    {
        pickerNumber = pick[0];
    }
    console.log("thig  "+ pickerNumber);
    questionTableHandler.selectQuestions(displayRecord, selectedType);
    mainView.router.loadContent(testPage); // changes the page to the quiz app Page  
    document.getElementById('submit').onclick = function()
    {
        if(currentQuestion ===8)// check if all answered first
        {
            // submit the test with prompt first    
        }
        else
        {
            if(document.getElementById('A').checked)
            { 
                answerBank[currentQuestion] = document.getElementById('A').innerHTML; nextQuestion();
            }
            else
            { 
                if(document.getElementById('B').checked)
                {
                    answerBank[currentQuestion] = document.getElementById('B').innerHTML; nextQuestion();
                }
                else 
                {
                    if(document.getElementById('C').checked)
                    {
                        answerBank[currentQuestion] = document.getElementById('C').innerHTML; nextQuestion();
                    }
                    else 
                    {
                        if(document.getElementById('D').checked)
                        {
                            answerBank[currentQuestion] = document.getElementById('D').innerHTML; nextQuestion();
                        }
                        else
                        {
                            window.alert("You must select an answer");
                        }
                    }
                }
            }
                
        }
           
    };
    document.getElementById('previous').onclick = function()
    {
        previousQuestion();
    };
    document.getElementById('next').onclick = function()
    {
        nextQuestion();
    };

};
function nextQuestion() // moves to next question
{
    if(currentQuestion+1<=questionList.length)
    {
        currentQuestion++;
        loadQuestion();        
    }
   
};
function previousQuestion() // moves to next question
{
    if(currentQuestion-1>=0)
    {
        currentQuestion--;
        loadQuestion();        
    }
   
};
function loadQuestion()
{
    document.getElementById('D_text').innerHTML = questionList[currentQuestion].answer1;
    document.getElementById('A_text').innerHTML = questionList[currentQuestion].answer2;
    document.getElementById('B_text').innerHTML = questionList[currentQuestion].answer3;
    document.getElementById('C_text').innerHTML = questionList[currentQuestion].answer4;
    document.getElementById('prompt').innerHTML = questionList[currentQuestion].prompt;
    document.getElementById('A').value = questionList[currentQuestion].answer1;
    document.getElementById('B').value = questionList[currentQuestion].answer2;
    document.getElementById('C').value = questionList[currentQuestion].answer3;
    document.getElementById('D').value = questionList[currentQuestion].answer4;
};