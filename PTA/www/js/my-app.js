// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;


// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});
var db = {};

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
var slider = document.getElementById ("myrange");
var output = document.getElementById ("d")
slider.oninput = function(){
    output.innerHTML = this.value;
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