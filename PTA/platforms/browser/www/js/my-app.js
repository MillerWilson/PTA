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
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});
function myFunction() {"
    var y = document.getElementById("mypass").value;
    if(from.mypass.value == "1234")
        {window.open("/Users/Student/Documents/pta/PTA/www/home.html")}
    else {
        alert("the voucher does not match")
    }
   
}
function myFunction(){
    var x = document.getElementById("vouchers").href;

function myFunction(){
    var x = document.getElementById("test").href;
}
function myFunction(){
    var x = document.getElementById("test1").href;
}
function myFunction(){
    var x = document.getElementById("test2").href;
} 
function myFunction(){
    var x = document.getElementById("test3").href;
}
function myFunction(){
    var x = document.getElementById("test4").href;
}
function myFunction(){
    var x = document.getElementById("test5").href;
}
function myFunction(){
    var x = document.getElementById("test6").href;
}
// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})