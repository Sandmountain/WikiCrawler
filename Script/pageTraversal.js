//**************************************///
/* This file contains the functions for 
/* checking wether input is valid
/* Also traversing througe 'Scenes'
//**************************************///

var shortSummary;
//Sätter upp första sidan

document.getElementById('Tutorial').style.display = 'block';
document.getElementById('Setup').style.display = 'none'
document.getElementById('Ending').style.display = 'none';
document.getElementById('shortSummary').style.display = 'none';
document.getElementById('felMeddelande').style.display = 'none';
document.getElementById('RandArt').style.display='none';
//document.getElementById('Game').style.display = 'none';
//Game will inherit these values
var startArticle;
var goalArticle;
var textInDiv = document.getElementById("shortSummary").innerHTML;
var tempText = document.getElementById("serachedArticle").innerHTML;
var validated = 0;
var RandOrSelect = 0;


function validate() {

    //Checks wether both articles have been validated or not
    var valid = 0;
    validated = 0;
    startArticle = document.getElementById("textStart").value;
    goalArticle = document.getElementById("textGoal").value;

    if (startArticle.toUpperCase() == goalArticle.toUpperCase() || !startArticle || !goalArticle || valid == 2) {
        if (!startArticle && !goalArticle) {
            $('.line4').css({
                backgroundColor: '#f24848'
            });
            $('.line3').css({
                backgroundColor: '#f24848'
            });
            document.getElementById('felMeddelande').innerHTML = "<p id='felText'>No input</p>"
            $("#felMeddelande").fadeIn("fast");
            $('.centerButtons').shake(2, 5, 10);
            $('.centerMe3').css({
                color: '#f24848'
            });
            
        } else if (!startArticle) {
            $('.line4').css({
                backgroundColor: '#f24848'
            });
            document.getElementById('felMeddelande').innerHTML = "<p id='felText'>No starting article</p>"
            $("#felMeddelande").fadeIn("fast");
            $('.centerMe3').css({
                color: '#f24848'
            });
            $('.centerButtons').shake(2, 5, 10);

        } else if (!goalArticle) {
            $('.line3').css({
                backgroundColor: '#f24848'
            });
            document.getElementById('felMeddelande').innerHTML = "<p id='felText'>No goal article</p>"
            $("#felMeddelande").fadeIn("fast");
            $('.centerMe3').css({
                color: '#f24848'
            });
            $('.centerButtons').shake(2, 5, 10);
        } else {
            $('.line4').css({
                backgroundColor: '#f24848'
            });
            $('.line3').css({
                backgroundColor: '#f24848'
            });
            document.getElementById('felMeddelande').innerHTML = "<p id='felText'>Same input twice</p>"
            $("#felMeddelande").fadeIn("fast");
            $('.centerMe3').css({
                color: '#f24848'
            });
            $('.centerButtons').shake(2, 5, 10);
        }
    } else {
        
        var startUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + startArticle;
        var goalUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + goalArticle;
        
        $.ajax({
            url: startUrl,
            dataType: "jsonp",
            success: function(data, status, xhr) {
                if (data[1][0] == null) {
                    $('.line4').css({
                        backgroundColor: '#f24848'
                    });
                    document.getElementById('felMeddelande').innerHTML = "<p id='felText'>Not an article</p>"
                    $("#felMeddelande").fadeIn("fast");
                    $('.centerMe3').css({
                        color: '#f24848'
                    });
                    $('.centerButtons').shake(2, 5, 10);
                    valid += 0;
                    validated += 1;

                } else {
                    valid += 1;

                    $('.line4').css({
                        backgroundColor: 'green'
                    });
                }
                //Nested Serach so it always happens after
                $.ajax({
                    url: goalUrl,
                    dataType: "jsonp",
                    success: function(data, status, xhr) {
                        if (data[1][0] == null) {
                            valid += 0;
                            validated += 2;
                            
                            $('.line3').css({backgroundColor: '#f24848'});
                            document.getElementById('felMeddelande').innerHTML = "<p id='felText'>Not an article</p>"
                            $("#felMeddelande").fadeIn("fast");
                            $('.centerMe3').css({color: '#f24848'});
                            $('.centerButtons').shake(2, 5, 10);
                        } else {
                            valid += 1;
                            
                            $('.line3').css({backgroundColor: 'green'});
                            
                            //Checkar hur artiklarna relaterar till input
                            if (data[1][0] != goalArticle && data[2][0] != '' && !data[2][0].includes('may refer to:')) {
                                shortSummary = data[2][0];
                                document.getElementById("shortSummary").innerHTML = textInDiv + "<i><span id='menuTextlittle' style='color: #f24848;'>(Autocorrected input)</span><p id='menuTextlittle'> " + shortSummary + "</p></i>"

                            } else if (data[2][0] != '' && !data[2][0].includes('may refer to:')) {
                                shortSummary = data[2][0];
                                document.getElementById("shortSummary").innerHTML = textInDiv + "<i><p id='menuTextlittle'>" + shortSummary + "</p></i>"

                            } else if (data[2][0].includes('may refer to:')) {
                                shortSummary = data[2][1];
                                document.getElementById("shortSummary").innerHTML = textInDiv + "<i><p id='menuTextlittle'> Could refer to: " + shortSummary + "</p></i>"
                            }  else {
                                shortSummary = data[2][1];
                                document.getElementById("shortSummary").innerHTML = textInDiv + "<i><p id='menuTextlittle'> " + shortSummary + "</p></i>"
                            }


                            if (valid == 2) {
                                $("#centerButtons2").fadeIn("fast");
                                $('.centerButtons').fadeOut();
                                document.getElementById("shortSummary").style.display = 'block';
                                document.getElementById("titleForGoal").innerHTML = data[1][0];
                                goalArticle = data[1][0];
                                shortSummaryForUi = "<i><p id='menuTextlittle'> " + shortSummary + "</p></i>"
                            }
                        }
                    },error: function (data, status, xhr) {
                        swal({
                          type: 'error',
                          title: 'Oops... Something went wrong!',
                          text: 'Have you checked your internet connection?',
                        })
                    }
                });
            },error: function (data, status, xhr) {
                swal({
                  type: 'error',
                  title: 'Oops... Something went wrong!',
                  text: 'Have you checked your internet connection?',
                })
            }
        });
    }
}


function resetAll(){
     swal({
      title: 'Do you really want to quit?',
      text: "All progress will be lost",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'New Game',
    }).then((result) => {
        if (result.value) {
           location.reload();
  }
})
    
}


function GoGame() {
    //Sätter UI
   
    if(counter == -1)
        document.getElementById("antal").innerHTML = 0 + text;
    else
        document.getElementById("antal").innerHTML = counter + text;
    
    document.getElementById("currentArticle").innerHTML = thisTitle + " <span class='thisTitle'>" + startArticle.toUpperCase() + "</span>"              //fas fa-info-circle
    document.getElementById("serachedArticle").innerHTML = tempText + " <span class='serachedItem'>" + goalArticle.toUpperCase() + "</span> <i class='fas fa-info-circle'></i>" ;
    
    
    
    $("#Game").fadeIn("fast");
    document.getElementById("artikel").style.display = 'block';
    document.getElementById('Setup').style.display = 'none';
    
    document.getElementById('showWhenResult').style.display = 'none'
    document.getElementById('SelecArt').style.display = 'none'
    $('#RandArt').fadeIn('slow');
    
    //Resettar tidigare genererade ord från Random
    document.getElementById('textStartRand').value = "";
    $('.line5').css({backgroundColor: '#bdc3c7'});
    document.getElementById('textGoalRand').value = "";
    $('.line6').css({backgroundColor: "#bdc3c7"});     
    
    
    document.getElementById("tooltiptext").innerHTML = "<span class='serachedItem'>" + goalArticle.toUpperCase() +"</span>" + "<div id='line1'></div>" + shortSummaryForUi;
   
    startTerm = startArticle;
    goWiki();

}

function GoSetup() {
    //setTimeout(function() {
        
        clearVariables();
        clearContent();
        
        //Fulfix för att tabben ska ligga rätt (reset)
        if(RandOrSelect == 0){
            document.getElementById('SelecArt').style.display = 'block'
            document.getElementById('RandArt').style.display = 'none'
        }else{
            document.getElementById('RandArt').style.display = 'block'
            document.getElementById('SelecArt').style.display = 'none'
        }
        
        //$('.countTextFinal').switchClass('countTextFinal', 'countText');

        document.getElementById('shortSummary').style.display = 'none';
        $('#Setup').fadeIn("slow");
        document.getElementById('Tutorial').style.display = 'none';
        //Vid new game
        document.getElementById('Game').style.display = 'none';
        document.getElementById("Ending").style.display ='none';
        $('.centerButtons').fadeIn(1);

}




//fadeInFadeOut for menu (osnyggt)
$(document).ready(function() {
    $("#c1").click(function() {
        $("#Tutorial").fadeOut("slow", function() {
            $("#Setup").fadeIn("slow");
            
        })
    });
});


//Det fältet som behövs redigeras, sätts bakgrunden tillbaka när det markeras. 
$('input').on("focus", function() {
    $('.centerButtons').fadeIn();
    $('.centerMe3').css({color: '#cccccc'})
    $("#felMeddelande").fadeOut('fast');
    document.getElementById('shortSummary').style.display = 'none';
    document.getElementById('centerButtons2').style.display = 'none';
    document.getElementById('felMeddelande').innerHTML = '';

    if (validated == 1) {
        $('.line4').css({
            backgroundColor: '#bdc3c7'
        });
    } else if (validated == 2) {
        $('.line3').css({
            backgroundColor: '#bdc3c7'
        });
    } else {
        $('.line3').css({
            backgroundColor: '#bdc3c7'
        });
        $('.line4').css({
            backgroundColor: '#bdc3c7'
        });

    }

});

function PausGame(){
    stopTimer();
    swal({
        title: 'Game Paused!',
        text: "Press Start to continue",
        type: 'info',
        confirmButtonText: 'Start',
        backdrop: `
        rgba(0,0,0,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        center left
        no-repeat
        `
    }).then((result) => {
        if (result.value) {
            timer();
        }else{
            timer(); 
        }
        
    }) 
}


function SwitchRandom(){
    //Resetting if changed when switching
  
   RandOrSelect = 1;
   document.getElementById('showWhenResult').style.display = 'none'
   document.getElementById('SelecArt').style.display = 'none'
   $('#RandArt').fadeIn('slow');
    
    //Resettar tidigare genererade ord
    document.getElementById('textStartRand').value = "";
    $('.line5').css({backgroundColor: '#bdc3c7'});
    document.getElementById('textGoalRand').value = "";
    $('.line6').css({backgroundColor: "#bdc3c7"});
 
}
function SwitchSelect(){
   //Resetting if changed when switching
   RandOrSelect = 0;
   document.getElementById('RandArt').style.display = 'none'
   $('#SelecArt').fadeIn('slow');
}


function newGameConfirm(){
    swal({
      title: 'Do you really want to quit?',
      text: "All progress will be lost",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'New Game',
    }).then((result) => {
        if (result.value) {
            $("#artikel").fadeOut("fast");
            document.getElementById("artikel").innerHTML = '';
            GoSetup();
  }
})
}

function clearVariables(){
    //Gör en resetFunktion Sen Detta ser åt helvete ut.
    numberOfCheat = 0;
    nummberOfBack = 0;
    numberOfReset = 0;
    backOperator = [''];
    WordFound = [];
    timeStamps = [];
    BackUsed = [];
    ResetUsed = [];
    clearTimer(); 
    finalPoint = 0;
    refreshBool = 0;
    counter = -1; 
}
function clearContent(){
    //resetting from previous
    $(".counterText").css({color:'#5bb5cd' });
    $('.countText').text = '';
    $(".countTextFinal").switchClass( "countTextFinal", "countText");  
    $('.countText').css({display: 'block'});
    $('#TimeAndClicks').css({paddingTop: '0px'});
    $(".floatCracked").css({display: 'none'});
    $(".visitedContainer").html("");
    document.getElementById("textStart").value = '';
    document.getElementById("textGoal").value = '';
    document.getElementById("serachedArticle").innerHTML = 'SEARCHING FOR ARTICLE WITH TITLE';
    document.getElementById("TimeAndClicks").innerHTML = '&nbsp';
    
    $('#centerButtons2').hide(1);

    $('.line3').css({
        backgroundColor: '#bdc3c7'
    });
    $('.line4').css({
        backgroundColor: '#bdc3c7'
    });
    
}

jQuery.fn.shake = function(shakes, distance, duration) {
    if (shakes > 0) {
        this.each(function() {
            var $el = $(this);
            var left = $el.css('left');
            $el.animate({
                left: "-=" + distance
            }, duration, function() {
                $el.animate({
                    left: "+=" + distance * 2
                }, duration, function() {
                    $el.animate({
                        left: left
                    }, duration, function() {
                        $el.shake(shakes - 1, distance, duration);
                    });
                });
            });
        });
    }
    return this;
};
