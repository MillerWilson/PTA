var modePage =   '<div class="navbar"><div class="navbar-inner"><div class="left">'+
                       '<!--<a href="#" class="back link">-->'+
                        '<i class="icon icon-back"></i>'+
                        '<p><a href="index.html"> Back</a></p>'+
                    '</div>'+// here is okay
                    '<!-- We need cool sliding animation on title element, so we have additional "sliding" class -->'+
                    '<div class="center sliding">'+
                        '<h3 id =headline>Mode Selector</h3>'+
                    '</div>'+
                    '<div class="right"></div>'+
                '</div>'+
            '</div>'+// here is okay
    
    '<div class = "page" data-page="popPage">'+'<div class="page-content">'+
         
                '<!-- Page, "data-page" contains page name -->'+
                    '<!-- Scrollable page content -->'+
                    '<div class="page-content">'+
                        '<div class="content-block">'+
                            '<h3><i>Please select a testing mode.</i></h3>'+
                            '<p>"<b>Test Mode</b>" features 25 questions. At the end of the test, your score will be revealed along with the '+'questions and the corrected answers.</p>'+
                            '<p>'+
                                'In "<b>Study Mode</b>", after you select the amount of questions that you wish to receive, you may start. The '+'moment after you pick an answer, if correct, appear in green; if incorrect, it will appear in red.'+
                            '</p>'+

                            '<div>'+

                                '<div>'+
                                    '<a href="#" class="button">Test Mode</a>'+

                                '</div>'+
                                '<div>'+
                                    '<p><a href="#" class="button">Quiz/Study Mode</a></p>'+
                                '</div>'+


                                '<div class="content-block-title">Choose amount of questions</div>'+
                                '<div class="list-block">'+
                                    '<ul>'+
                                        '<li>'+
                                            '<div class="item-content">'+
                                                '<div class="item-inner">'+
                                                    '<div class="item-input">'+
                                                        '<input type="text" placeholder="10" readonly id="picker-device">'+
                                                    '</div>'+
                                               ' </div>'+
                                            '</div>'+
                                        '</li>'+
                                    '</ul>'+
                                '</div>'+                              
                        
                                '<div>'+

                                '</div>'+


                            '</div>'+



                        '</div>'+
                    '</div>'+
        '</div></div>';    





var testPage = '<!-- Status bar overlay for full screen mode (PhoneGap) -->'+
    '<div class="statusbar-overlay"></div>'+

    '<!-- Panels overlay-->'+
    '<div class="panel-overlay"></div>'+
    '<!-- Left panel with reveal effect-->'+
    '<div class="panel panel-right panel-reveal">'+
        '<div class="content-block">'+
            '<p>Settings</p>'+
            '<p>about</p>'+

        '</div>'+
    '</div>'+

    '<!-- Views -->'+
    '<div class="views">'+
        '<!-- Your main view, should have "view-main" class -->'+
        '<div class="view view-main">'+
            '<!-- Top Navbar-->'+
            '<div class="page toolbar-fixed">'+
                '<div class="navbar">'+
                    '<div class="navbar-inner">'+
                        '<div class="left"></div>'+
                        '<!-- We need cool sliding animation on title element, so we have additional "sliding" class -->'+
                        '<div class="center sliding">MillerWilson PTA</div>'+
                        '<div class="right">'+

                            '<a href="#" class="link icon-only open-panel"><i class="icon icon-bars"></i></a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<!-- Pages container, because we use fixed-through navbar and toolbar, it has additional appropriate classes-->'+
                '<div class="pages navbar-through toolbar-through">'+
                    '<!-- Page, "data-page" contains page name -->'+
                    '<div data-page="testPage" class="page">'+
                        '<!-- Scrollable page content -->'+
                        '<div class="page-content">'+
                            '<div class="content-block">'+

                                '<!--This block contains the form for the Q'+'s & A'+'s-->'+
                                '<p><b>Which of the following is NOT a type of motherboard expansion slot?</b> </p><br>'+
'<div class="content-block-inner">'+
                                '<form>'+
                                    '<input type="radio" name="choice" value="A"> ISA<br><br>'+
                                    '<input type="radio" name="choice" value="B"> PCI<br><br>'+
                                    '<input type="radio" name="choice" value="C"> AGP<br><br>'+
                                    '<input type="radio" name="choice" value="D"> ATX'+
                                '</form><br>'+
                                '</div>'+
                           


                            '<div class="page-content">'+
                                '<button class="button">Submit Answer</button>'+

                            '</div>'+
 '</div>'+
                        '</div>'+
                        '<!-- Bottom Toolbar-->'+
                        '<div class="toolbar toolbar-bottom">'+
                            '<div class="toolbar-inner">'+
                                '<a href="#" class="button">Previous</a>'+

                                '<a href="#" class="button">Next</a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';















































