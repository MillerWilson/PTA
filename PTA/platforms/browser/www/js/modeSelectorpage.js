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
                                                        '<input type="text" placeholder="1 - 25" readonly id="picker-device">'+
                                                    '</div>'+
                                               ' </div>'+
                                            '</div>'+
                                        '</li>'+
                                    '</ul>'+
                                '</div>'+                              
                        
                                '<div>'+

                                    '<a href="testPAge.html" class="button button-round active">Go </a>'+

                                '</div>'+


                            '</div>'+



                        '</div>'+
                    '</div>'+
        '</div></div>';    