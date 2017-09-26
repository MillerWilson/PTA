// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () 
{
    console.log("Device is now ready!");
    document.addEventListener("backbutton", backbutton, true);
    createDb();
    
});

myApp.onPageAfterAnimation("quizPage", function()
{
    loadQuestion();
    for(i=0; i<questionList.length;i++)
        {
            var aTag = document.createElement('a');
            var paragraph = document.createElement('p');
            aTag.setAttribute('href',"#");
            aTag.innerHTML = "Question "+(i+1);
            paragraph.appendChild(aTag);
            paragraph.onclick = function(){console.log('sddddd');};
            
            document.getElementById('panel').appendChild(paragraph);
            
        }
    
    
    
    
}); 



