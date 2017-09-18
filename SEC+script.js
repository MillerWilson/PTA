var quiztitle= "Security + Practice Test";
var quiz= [
{"question": "1. A software or hardware that checks information coming from the Internet and depending on the applied configuration settings either blocks it or allows it to pass through is called:",
"choices":[
" Antivirus",
"Firewall",
"Antispyware",
"Malware"],
"correct":"Firewall",
"explanation" :  "A software or hardware that checks information coming from the Internet or a network and depending on settings either blocks it or allows it to pass through is known as a firewall.",
},
{
"question": "2. Which of the following acronyms refers to a firewall controlling access to a web server?",
"choices":["WEP",
"WAP",
"WAP",
"WAF"],
"correct": "WAF",
"explanation" :"Web Application Firewallis a firewall that monitors, filters or blocks data packets as they travel to and from a Web application.",
},
{
"question": "3. 802.1x is an IEEE standard defining",
"choices":["Token ring networks",
"Port-based network access control",
" VLAN tagging",
"Wireless networking"],
"correct": "Port-based network access control",
 "explanation":"802.1x is an Institute Electrical and Electronics Engineers (IEEE) standard for port-based network access control. 802.1X provides mechanisms to authenticate devices connecting to a Local Area Network (LAN), or Wireless Local Area Network (WLAN). Due to a similar name, 802.1X is sometimes confused with 802.11x (a general term used in reference to a family of wireless networking standards).",

},
{
"question": "4. What is the mitigation action organization take to Defend against risk?",
"choices":["Due diligence",
"Off boarding",
"Due Care",
"Due Process"],
"correct": "Due Care",
"explanation":"Due Care is the mitigation action that an organization takes to defend against the risk that have been uncovered during due diligence. Due care is what happen after an attack has been identified. The organization must assess the severity of the attack, contain the attack, stop it from harming performance, and then find the root cause.",
},
{
"question": "5. What encryption should you use for commutation with a Wi-FI router?",
"choices":["WEP",
"DES",
"WPA2",
"WPA"],
"correct": "WPA2",
"explanation":" WPA2 is the strongest encryption method available on Wi-Fi router.WEP has been hacked and it should never be used on secure wireless connection",
},
{
"question": "6. Which of the following acronyms refers to a network or host based monitoring system designed to automatically alert administrators of known or suspected unauthorized activity?",
"choices":["EFS",
"TPM",
"AES",
"IDS"],
"correct": "IDS",
"explanation":" Intrusion Detection Systems (IDSs) rely on passive response which might include recording an event in logs or sending a notification alert. An IDS doesn't take any active steps in order to prevent an intrusion.",

},
{
"question": "7. A type of Intrusion Detection System (IDS) that relies on the previously established baseline of normal network activity in order to detect intrusions is known as a signature-based IDS.?",
"choices":["True",
"False"],
"correct": "False",
"explanation":"Anomaly-based intrusion detection systems will monitor network traffic and compare it against an established baseline",
},
{
"question": "8. What is another name given to the window security log events?",
"choices":["System Event",
"Audit Trail",
"System Trails",
"Application Trail"],
"correct": "Audit Trail",
"explanation":"An audit trail is another name given to log files stored in the Event Viewer. These logs help the administrator identify malicious acces attempts.",
},
{
"question": "9. Which of the following actions can be taken by passive IDS?",
"choices":["Logging",
"Firewall Reconfiguration",
"Closing down connection",
"Teminating Process"],
"correct": "Logging",
"explanation":"Intrusion Detection Systems (IDSs) rely on passive response which might include recording an event in logs or sending a notification alert. An IDS doesn't take any active steps in order to prevent an intrusion.",
},
{
"question": "10. What is the biggest threat to an organization security ?",
"choices":["Piggyback",
"Brute force",
"Insider",
"Social engineeing"],
"correct": "Insider",
"explanation":"Insder threat are biggest threat to an organization. They involve disgruntled employees that steal data or employees that fall for threats such as phishing attacks.", 

},


];


var currentquestion = 0,
     score = 0,
     submt = true,
     picked;
	 
	 $(document).ready(function(){
       $("#submitbutton").hide();
	    function htmlEncode(value) {
         return $(document.createElement('div')).text(value).html();
     }
	   
	   function addChoices(choices) {
         if (typeof choices !== "undefined" && $.type(choices) == "array") {
             $('#choice-block').empty();
             for (var i = 0; i < choices.length; i++) {
                 $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
             }
         }
     }
	 function nextQuestion() {
         submt = true;
         $('#explanation').empty();
         $('#question').text(quiz[currentquestion]['question']);
         $('#pager').text('Question ' + Number(currentquestion + 1) + ' of ' + quiz.length);
         if (quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != "") {
             if ($('#question-image').length == 0) {
                 $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
             } else {
                 $('#question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
             }
         } else {
             $('#question-image').remove();
         }
         addChoices(quiz[currentquestion]['choices']);
         setupButtons();


     }
	 function processQuestion(choice) {
         currentquestion++;
         $("#submitbutton").hide();
   
             if (currentquestion == quiz.length) {
                 endQuiz();
             } else {
               
                 nextQuestion();
             }
			 
        
     }
	     function setupButtons() {
         $('.choice').on('mouseover', function () {
             $(this).css({
                 'background-color': '#e1e1e1'
             });
         });
         $('.choice').on('mouseout', function () {
             $(this).css({
                 'background-color': '#fff'
             });
         })
         $('.choice').on('click', function () {
             
             choice = $(this).attr('data-index');
             $('.choice').removeAttr('style').off('mouseout mouseover');
             $(this).css({
                 'border-color': '#222',
                 'font-weight': 700,
                 'background-color': '#c1c1c1'
             });
             if (quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']) {
             $('.choice').eq(choice).css({
                 'background-color': '#50D943'
             });
             $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
             score++;
			 $(".choice").off('click');
			 
         } else {
             $('.choice').eq(choice).css({
                 'background-color': '#D92623'
             });
             $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
			 $(".choice").off('click');
         }
                $("#submitbutton").show();
             if (submt) {
                 
                 submt = false;
                 $('#submitbutton').css({
                     'color': '#000'

                 });
                 $("#submitbutton").click(function(){
                   
                      
                     $(this).off('click');
                     processQuestion(choice);
                 });
             }
         })
     }
	 function endQuiz() {
         $('#explanation').empty();
         $('#question').empty();
         $('#choice-block').empty();
         $('#submitbutton').remove();
         $('#question').text("You got " + score + " out of " + quiz.length + " correct.");
         $(document.createElement('h2')).css({
             'text-align': 'center',
             'font-size': '4em'
         }).text(Math.round(score / quiz.length * 100) + '%').insertAfter('#question');
     }


     function init() {
         //add title
         if (typeof quiztitle !== "undefined" && $.type(quiztitle) === "string") {
             $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
         } else {
             $(document.createElement('h1')).text("Quiz").appendTo('#frame');
         }

         //add pager and questions
         if (typeof quiz !== "undefined" && $.type(quiz) === "array") {
             //add pager
             $(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Question 1 of ' + quiz.length).appendTo('#frame');
             //add first question
             $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');
             //add image if present
             if (quiz[0].hasOwnProperty('image') && quiz[0]['image'] != "") {
                 $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
             }
             $(document.createElement('p')).addClass('explanation').attr('id', 'explanation').html('&nbsp;').appendTo('#frame');

             //questions holder
             $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');

             //add choices
             addChoices(quiz[0]['choices']);

             //add submit button
             $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Next question').css({
                 'font-weight': 700,
                 'color': '#222',
                 'padding': '30px 0',
              }).appendTo('#frame');


           $("#submitbutton").hide();
             setupButtons();
         }
     }

     init();
 });