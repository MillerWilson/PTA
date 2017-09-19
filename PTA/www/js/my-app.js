// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;


// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});
// framework7
var newPageContent = '<div class = "page" data-page = "my-page">'+'<div class = "page-content">' + '<p>new page</p>'
'</div>'+
    '</div>';
mainView.router.load({content: newPageContent,animatePages: false})
var db = {};
main.View.router.loadContent($'mypageplaceholder').html());
$$(document).on('page:init',function(e)){
                var page = e.detail.page;
                if (page.name === 'voucher'){
    var count = page.query.count;
    var listHTML = '<ul>';
    for (var i = 0 i < count; i++){
        slitHtml += '<li>' = i = '<li>';
    }
    listHTML += '</ul>';
    $$(page.container).find('.page-content').append(listHtml);
}
if (page.name === 'services'){
    myApp.alert('services place holder');
}
                }
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
   
    console.log("Device is still ready");
     var db = sqlitePlugin.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(populateDB, errorCB, successCB);
    console.log("sql has happened");

});
 

//alert("ASFA");

// Populate the database 
function populateDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS DEMO');
    tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
    tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
    tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
}

// Transaction error callback
function errorCB(err) {
    alert("Error processing SQL: " + err);
}

// Transaction success callback
function successCB() {
    alert("success!");
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