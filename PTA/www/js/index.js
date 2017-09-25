var selectedType = 'ceh'; // will default to ceh
var questionList = [];
var answerBank = [];
var currentQuestion =0;
var pickerNumber;
var quizMode =true;
var choiceA;
var choiceB;
var choiceD;
loadTestChoicePage();
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
        quizMode = true;
        loadtestPage(pickerDevice.value);   
    };
};
function loadtestPage(pick)
{
    if(typeof pick == 'undefined') // check if they bothered to used the picker
    {
        pickerNumber = 10;
    }
    else
    {
        pickerNumber = pick[0];
    }
    questionTableHandler.selectQuestions(displayRecord, selectedType);
    mainView.router.loadContent(testPage); // changes the page to the quiz app Page  
    currentQuestion =0;
    quizChanges();
   
    choiceA = document.getElementById('A');
    choiceB = document.getElementById('B');
    choiceC = document.getElementById('C');
    choiceD = document.getElementById('D');
    
  
    document.getElementById('previous').onclick = function()
    {
        previousQuestion();
    };
    document.getElementById('next').onclick = function()
    {
        nextQuestion();
    };
    choiceA.onclick = highlight;
    choiceB.onclick = highlight;
    choiceC.onclick = highlight;
    choiceD.onclick = highlight;
    

};
function nextQuestion() // moves to next question
{
    assignAnswer();
    if(currentQuestion<questionList.length-1)
    {
        currentQuestion++;
        loadQuestion();        
    }
   
};
function previousQuestion() // moves to next question
{
    assignAnswer();
    if(currentQuestion-1>=0)
    {
        currentQuestion--;
        loadQuestion();        
    }
   
};
function assignAnswer()
{
            if(choiceA.checked)
            { 
                answerBank[currentQuestion] = choiceA.value;
            }
            else
            { 
                if(choiceB.checked)
                {
                    answerBank[currentQuestion] = choiceB.value; 
                }
                else 
                {
                    if(choiceC.checked)
                    {
                        answerBank[currentQuestion] = choiceC.value; 
                    }
                    else 
                    {
                        if(choiceD.checked)
                        {
                            answerBank[currentQuestion] = choiceD.value; 
                        }
                    }
                }
            }
};
function loadQuestion()
{
   
    document.getElementById('A_text').innerHTML = questionList[currentQuestion].answer1;
    document.getElementById('B_text').innerHTML = questionList[currentQuestion].answer2;
    document.getElementById('C_text').innerHTML = questionList[currentQuestion].answer3;
    document.getElementById('D_text').innerHTML = questionList[currentQuestion].answer4;
    document.getElementById('prompt').innerHTML = questionList[currentQuestion].prompt;
    choiceA.value = questionList[currentQuestion].answer1;
    choiceB.value = questionList[currentQuestion].answer2;
    choiceC.value = questionList[currentQuestion].answer3;
    choiceD.value = questionList[currentQuestion].answer4;
    if(typeof answerBank[currentQuestion] == 'undefined')
    {
        document.getElementById('A').checked = false;
        document.getElementById('B').checked = false;
        document.getElementById('C').checked = false;
        document.getElementById('D').checked = false;
    }
    else
    {        
        switch(answerBank[currentQuestion])
        {
            case document.getElementById('A').value:
                document.getElementById('A').checked = true;             
                break;
            case document.getElementById('B').value:
                document.getElementById('B').checked = true; 
            break;
            case document.getElementById('C').value:
                document.getElementById('C').checked = true;   
            break;
            case document.getElementById('D').value:
                document.getElementById('D').checked = true; 
            break;
            default:
        }
    }
};
function quizChanges()
{
     if(quizMode)
    {
        document.getElementById('submit').innerHTML = 'Explanation';// change the submit button if it's a quiz
        document.getElementById('submit').onclick = function()
        {
            myApp.alert(questionList[currentQuestion].explanation, 'Explanation');
        };
    }
   
    
};
function loadTestChoicePage()
{
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
};
function highlight()
{
      if(choiceA.checked && choiceA.value == questionList[currentQuestion].correctAnswer)
            { 
               console.log('this one was right');
            }
            else
            { 
                if(choiceB.checked && choiceB.value == questionList[currentQuestion].correctAnswer)
                {
                    console.log('this one was right');
                }
                else 
                {
                    if(choiceC.checked && choiceC.value == questionList[currentQuestion].correctAnswer)
                    {
                       console.log('this one was right');
                    }
                    else 
                    {
                        if(choiceD.checked && choiceD.value == questionList[currentQuestion].correctAnswer)
                        {
                            console.log('this one was right');
                        }
                    }
                }
            }  
};
function checkAllAnswers()
{
    var score = 0;
    var right = 0;
    for(i=0;i<questionList.length;++i)
        {
            if(answerBank[i] == questionList[i].correctAnswer)
            {
                right++;
            }
        }
    score = right/questionList.length;
    return score;
};