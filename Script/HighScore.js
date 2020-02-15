var MAXpoints = 10000;
var cheatMultiplier = 10000;
var backMultiplier = 200;
var ResetMultiplier = 300;
var timeMultiplier = 1;
var pagesMultiplier;
var finalPoint;
var roundedvalue;
var countDownToValue;
var timeFinal;

//TODO: Balansera kanske highscore? Kör några gånger för att känna
//Ev. thumbnail på titlarna i uppvisningen

function calculateHighScore(){
    //SaftyReset
    finalPoint = 0;
    roundedvalue = 0;
    countDownToValue = 0;
    pagesMultiplier = counter;
    
    //Getting the final time
    timeFinal = getFinalTime();
    timeFinal = convert(timeFinal);

    timeMultiplier = timeFinal/60;
    
                                                //Cheat                         //Back                         //reset                      //time                      //pages
    finalPoint= MAXpoints - Math.abs((numberOfCheat*cheatMultiplier)+(nummberOfBack*backMultiplier)+(numberOfReset*ResetMultiplier)+(timeFinal*timeMultiplier)+Math.abs(counter*counter*Math.log(counter)));
    finalPoint = Math.round(finalPoint);

    
    if(counter > 24){
        //Do nothing
    }else if(counter > 16){
        //splitta i 3
    }else if(counter > 8){
        //splitta i 2
    }else{
        //bara counter
    }
    
    
    if(finalPoint < 0)
    {
        finalPoint = 0;        
    }
    
swal({
      title: 'CONGRATULATIONS! <i class="fa fa-thumbs-up"></i> ',
      type: 'success',
      html:
        '<b>YOU HAVE REACHED <span style="color:#5bb5cd">' + goalArticle.toUpperCase() + '</span>!</b>',
      showCloseButton: true,
      confirmButtonText:
        'SEE HIGHSCORE!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
    }).then((result) => {
        if (result.value) {
            $("#Game").fadeOut("fast");
            $("#Ending").fadeIn("slow");
            $(".arrowContainer").hide();
            document.getElementById("artikel").innerHTML = '';
            
            roundValueForCountDown();
            }
    })
  
}




//Converts minutes to seconds;
function convert(input) {
    var parts = input.split(':'),
        minutes = +parts[0],
        seconds = +parts[1];
    return (minutes * 60 + seconds);
}


function roundValueForCountDown() {
  //Avrundar till närmsta hundratal    
  roundedvalue = Math.round(finalPoint / 100) * 100;
  
    if(roundedvalue + 200 > MAXpoints)
    {
        roundedvalue = MAXpoints;
    }else{
        roundedvalue = roundedvalue + 200;
    }
    
  countDownToValue = roundedvalue;
  CountDown();
}

function CountDown(){
    
    countDownToValue--;
    
    $(".countText").text(countDownToValue + " points");
    
    //Slutar CountDown
    if(countDownToValue == finalPoint){
            
            if(finalPoint < 3000){
                document.getElementById("TimeAndClicks").innerHTML = 'Finished in <span style="color:rgba(232, 58, 58, 0.78)">' + getFinalTime() + '</span> minutes and with <span style="color:rgba(232, 58, 58, 0.78)">' + counter + '</span> articles visited';
                $('#TimeAndClicks').css({'padding-top': '100px'});
            }else{
                document.getElementById("TimeAndClicks").innerHTML = 'Finished in <span style="color:#3aa2d0">' + getFinalTime() + '</span> minutes and with <span style="color:#3aa2d0">' + counter + '</span> articles visited';
            }
   
            animateRealtime();
            return;
    }       
    //Väldigt vacker easeIn
    if ((countDownToValue - finalPoint) < 5) {
      setTimeout(CountDown, 400);
    } else if ((countDownToValue - finalPoint) < 10) {
      setTimeout(CountDown, 150);
    } else if ((countDownToValue - finalPoint) < 25) {
      setTimeout(CountDown, 120);
    } else if ((countDownToValue - finalPoint) < 50) {
      setTimeout(CountDown, 60);
    } else {
      setTimeout(CountDown, 20);
    } 
}   


function animateRealtime(){
  
   
  //Börjar med grå text tills texten börjar närma sig    
      
    if(finalPoint > 9000){
        $(".countText").switchClass( "countText", "countTextFinal", 1000, "easeInOutQuad" );
        $(".countText").css({filter: 'saturate(100%)'});
    }else if(finalPoint > 8000){
        $(".countText").switchClass("countText", "countTextFinal", 500);
        $(".countText").css({filter: 'saturate(80%)'});
    }else if(finalPoint > 7000){
        $(".countText").switchClass( "countText", "countTextFinal", 1000, "easeInOutQuad" );
        $(".countText").css({filter: 'saturate(60%)'});
    }else if(finalPoint > 6000){ 
        $(".countText").switchClass( "countText", "countTextFinal", 1000, "easeInOutQuad" );
        $(".countText").css({filter: 'saturate(40%)'});
    }else if(finalPoint > 5000){
        $(".countText").switchClass( "countText", "countTextFinal", 1000, "easeInOutQuad" );
        $(".countText").css({filter: 'saturate(20%)'});
    }else if(finalPoint > 3000){
        $(".countText").switchClass( "countText", "countTextFinal", 1000, "easeInOutQuad" );
        $(".countText").css({filter: 'saturate(10%)'}); 
    }else{
        $(".countText").fadeOut("fast");
        var htmlString = "<div class='slashed'><div class='top' title='"+finalPoint+ ' points' + "'></div> <div class='bot' title='" + finalPoint + " points" + "'></div></div>";
        $(".floatCracked").css({display: 'block'});
        $(".floatCracked").html(htmlString);
    } 

}

function showPath()
{
    //Visar bara pilarna om de behövs
    if(counter > 13)
        $(".arrowContainer").fadeIn(400);
    
    //Detta tar bort scrollbaren så att man kan scrolla i horizontalled
    var styleTag = $('<style>::-webkit-scrollbar {width: 0px; height: 0px;}</style>' + '<style>::-webkit-scrollbar-button{width: 0px;height: 0px;}');
    $('html > head').append(styleTag); 
    
    $('.visitedContainer').empty();

    for(var u = 0; u <= counter; u++){
        //Sista diven blir = "Goal"
        if(u == counter)
            $('.visitedContainer').append('<div class="articleVisited"><p id="menuTitleTextFinnish" style="font-size: 15px"> GOAL!</p><div id="line1"></div></div>');      
        else
        {
            var appendTextHtml = '<div class="articleVisited"><p id="menuTitleTextFinnish" title="'+ backOperator[u].replace(/_/g, ' ') +'" style="font-size: 15px">'+ backOperator[u].replace(/_/g, ' ') +'</p><div id="line1"></div><div class="centerTheSpan"><span class="centerContentFinish"><p id="menuText" style="font-size: 10px; padding:2px"> Time spent: <span id="time">'+ (convert(timeStamps[u+1])-convert(timeStamps[u])) + ' seconds</span></p>';
            
            //Lägger till text om arrayen är != 0
            if(WordFound[u] != 0 && u != counter-1 && typeof WordFound[u] != 'undefined')
            {
                appendTextHtml = appendTextHtml + '<p id="menuText" style="font-size: 10px; padding:2px">Word missed: <span id="time">'+ WordFound[u] +'</span> times</p>';
            }
            if(BackUsed[u] != 0)
            {
                appendTextHtml = appendTextHtml + '<p id="menuText" style="font-size: 10px; padding:2px"> Back Was Used </p>';
            }
            if(ResetUsed[u] != 0)
            {
                appendTextHtml = appendTextHtml + '<p id="menuText" style="font-size: 10px; padding:2px"> Reset Was Used </p>';
            }
            if(numberOfCheat != 0)
            {
                appendTextHtml = appendTextHtml + '<p id="menuText" style="font-size: 10px; padding:2px; color: red"> Cheater! </p>';
            }
            //Avslutar alltid med pilen och slutar diven
            appendTextHtml = appendTextHtml + '</span></div><span id="positionArrowRight"><i class="fas fa-arrow-right" style="font-size: 25px"></i></span></div>';
            $('.visitedContainer').append(appendTextHtml);
        }
        
        $('.articleVisited').each(function(i) {
            $(this).hide().delay(i * 500).fadeIn(400);
        });            
    }
}



$('#right-button').click(function() {
    event.preventDefault();
    
    if($('.visitedContainer').scrollTop() + $('.visitedContainer').innerHeight() >= $('.visitedContainer')[0].scrollHeight)
    {
        
    }else{
        
        $('.visitedContainer').animate({
            scrollTop: "+=300px"
        }, "fast");
       
    }
});

$('#left-button').click(function() {
    event.preventDefault();
    
    if($('.visitedContainer').scrollTop() == 0)
    {
        
    }else{
        $('.visitedContainer').animate({
            scrollTop: "-=300px"
        }, "fast");
   
    }
    
});

