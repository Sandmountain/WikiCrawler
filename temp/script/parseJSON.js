/* use strict */
//**************************************///
/* This file contains the functions for 
/* for getting values from the API
/* and getting input from the Screen.
//**************************************///

//allokerar globalt för att den ska ändras i funktionen
var startTerm = '';
var searchTerm = startTerm;
var newSearch = '';
var refreshBool = 0;
var counter = -1;

var numberOfReset = 0;
var numberOfCheat = 0;
var nummberOfBack = 0;
var numberOfCheat = 0;
//URLS
let url; 
let imageUrl;
let textUrl;

//Other
var title;
var content = [];
var imageContent = [''];
var textContent = [''];
var badInternet = false;
var summary;
let titlesInSearch = [''];
var goal = '';


//Highscore Data
var backOperator = [''];
var WordFound = [];
var timeStamps = [];
var BackUsed = [];
var ResetUsed = [];
var goBack;


var backCheck = false;

$('#lastVisited').css( 'cursor', 'pointer' );

var imageData = []; 

var text = document.getElementById("antal").innerHTML;
var thisTitle = document.getElementById("currentArticle").innerHTML;


//Här blandar vi hejvilt med javascript/jquery för att slippa php <3
function goWiki(){
    searchTerm = startTerm;
    goal = goalArticle;
    
        if(refreshBool == 0){ 
            url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchTerm; 
            timer(); 
        }
        else{
            searchTerm = newSearch;
            url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchTerm; 
        }
      
        
        if(counter == -1)
            document.getElementById("antal").innerHTML = 1 + text;
        else
            document.getElementById("antal").innerHTML = counter+2 + text;
    
    
        if(counter == 18)
        {
            //console.log("lol noob");
            $(".counterText").css({color:'red' });
        }
    $.when(  
        $.ajax({
            url: url,
            dataType: "jsonp",
            success: function(data, status, xhr) {
                    
                    //Hittar titlen
                    if(data[1][0]){
                        
                        title = data[1][0];
                        
                        //Uppdaterar counter för antalet länkar tryckt
                        counter = increment(counter); 
                        //Hämtar datan för vid ny artikel
                        timeStamps[counter] = getFinalTime();
                        
                        //Om sökta artikeln är hittad
                        if(title.toUpperCase() == goal.toUpperCase()){

                            stopTimer();
                            
                            calculateHighScore(); 
                        }
                        else
                        { 
                            title = title.replace(/\s+/g, '_');

                            //Löser datan
                            summary = data[2];
                                        
                            if(counter > 0)
                            {
                                document.getElementById("lastArticle").textContent = backOperator[counter-1];
                                $('#lastVisited').css( 'cursor', 'pointer' );
                            }
                              
                            //resettar titles
                            titlesInSearch = [];
                            
                            //För att få ut ID:t (Aida would be sad)
                            for(var i = 0; i < summary.length; i++)
                            {
                                titlesInSearch.push(data[1][i]);
                            } 
                        }
                        
                        var tempTitle = title.replace(/_/g, ' ');
                        backOperator[counter] = tempTitle;
                        
                        //Sätter titeln på artikeln
                        document.getElementById("currentArticle").innerHTML = thisTitle + " <span class='thisTitle'>"  + tempTitle.toUpperCase();  + "</span>"
                        
                        
                       
                    }
                    else{
                       swal({
                          type: 'error',
                          title: 'Oops...',
                          text: 'Your selection is not an Wikipedia Article!',
                        })
                    }
                },error: function (data, status, xhr) {
                    swal({
                      type: 'error',
                      title: 'Oops... Something went wrong!',
                      text: 'Have you checked your internet connection?',
                    })
                }
        })
    ).then( function() { 
        getMoreText();      
    });
}

function getMoreText()
{

    for(let j = 0; j < titlesInSearch.length; j++){
            textContent[j] = [''];
                         //https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles= //Plain text
                        //https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=               //HTMLTAGGAR
            textUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles= ' + titlesInSearch[j];
            
            $.ajax({
                url: textUrl,
                dataType: "jsonp",
                success: function(data, status, xhr) {
                    var page = data.query.pages;
                    var pageId = Object.keys(page)[0];
                    if(page[pageId].title == titlesInSearch[j] && page[pageId].extract != ''){
                        
                        textContent[j] = page[pageId].extract;
                    }
                    else{
                       textContent[j] = "There were no extra information from this article"; 
                    }
                
                    
                    imageContent[j] = [''];
                    
                    //WIP får mer bilder, men funkar inte
                    if(badInternet == true){
                        imageUrl = 'https://en.wikipedia.org/w/api.php?action=query&list=allimages&ailimit=2&format=json&aiprefix=' + titlesInSearch[j];
                        
                        $.ajax({
                            url: imageUrl,
                            dataType: "jsonp",
                            success: function(data, status, xhr) {
                                //ARray med alla bilder
                                var page = data.query.allimages;
                                
                                //var pageId = Object.keys(page)[0];
                                
                                //checking wether there is an image or not
                                if(page[0]['url']){
                                    imageContent[j] = page[0]['url'];    
                                }else{
                                    imageContent[j] = "./Images/NotFound.png"
                                }
                                
                                updateGUI();
                                
                            },error: function (data, status, xhr) {
                                swal({
                                  type: 'error',
                                  title: 'Oops... Something went wrong!',
                                  text: 'Have you checked your internet connection?',
                                })
                            }
                            
                        })
                    }
                    //Loading Large Images
                    else{
                        imageUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=' + titlesInSearch[j];
                        $.ajax({
                            url: imageUrl,
                            dataType: "jsonp",
                            success: function(data, status, xhr) {
                                var page = data.query.pages;
                                var pageId = Object.keys(page)[0];
                                
                                //checking wether there is an image or not
                                if(page[pageId].original){
                                    imageContent[j] = page[pageId].original['source'];    
                                }
                                else{
                                    //Om du vill ha tillbaka "inga BIlder"
                                    //imageContent[j] = "./Images/NotFound.png"
                                }
                                 
                                updateGUI();
                                
                            },error: function (data, status, xhr) {
                                swal({
                                  type: 'error',
                                  title: 'Oops... Something went wrong!',
                                  text: 'Have you checked your internet connection?',
                                })
                            }
                        })
                    }
                },error: function (data, status, xhr) {
                    swal({
                      type: 'error',
                      title: 'Oops... Something went wrong!',
                      text: 'Have you checked your internet connection?',
                    })
                }
        })   
    }
    ResetUsed[counter] = 0;
    BackUsed[counter] = 0;
    if((goBack+2-counter) == 0 && backCheck == false)
    {
        $('#lastVisited').fadeIn("slow");        
    }
  
}

function updateGUI()
{
        //resetting previous articlss
        document.getElementById("artikel").innerHTML = '';
        //getting the result
        for(let b = 0; b < titlesInSearch.length; b++)
        {   
            if(summary[b].includes("may refer to:")){
                //do nothing
            }else  
                document.getElementById("artikel").innerHTML += "<div id='items'>" + "<div class='searchImage'><img class='rightImage' src=" + imageContent[b] + "></img></div>" + "<p id='titleText'>" + titlesInSearch[b].toUpperCase() + "</p> <div id='line1'></div>" + "<p id='aText'>" + textContent[b] + "</p></div><br>";  
        }
        calculateMisses(); 
    
}


function calculateMisses(){

    var serachGoal = goal.toUpperCase();
    var countHolder = [];
    var str;
    
    //Timeout för att DOM:en ska hänga med
    setTimeout(function(){ 
        for(var b = 0; b < titlesInSearch.length; b++){
        str = textContent[b].toUpperCase(); 
        
            for(countHolder[b] = -1, index = 0; index != -1; countHolder[b]++, index = str.indexOf(serachGoal, index + 1));
        } 
        
        WordFound[counter] = countHolder.reduce(function(acc, val) { return acc + val; });
     }, 150);
    //console.clear(); 
    
}

//GoBack;
$('#lastVisited').click(function(){
    BackUsed[counter] = 1;
    nummberOfBack++;
    console.log(nummberOfBack);
    refreshBool = 0;

    goBack = counter;    
    if(goBack > 0){
        if(backCheck == false){
            startTerm = backOperator[goBack-1];
            $('#lastVisited').fadeOut("fast");   
            goWiki();
        }else{
            backCheck = false;    
            startTerm = backOperator[goBack-1];
            goWiki();
        }    
    }
});


//ANTI-CHEAT disable ctrl+f
window.addEventListener("keydown",function (e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) { 
        numberOfCheat++;
        //e.preventDefault();
    }
})


function increment(i)
{
    i++;
    return i;
}

function resetGame()
{
    //Resetting variables
    numberOfReset++;
    ResetUsed[counter] = 1;
    startTerm = backOperator[0];
    newSearch;
    refreshBool = 0;
    
    //start at first word
    goWiki();
}

//Funktion för att hitta ord
$("#artikel").click(function() {
            // Gets clicked on word (or selected text if text is selected)
            newSearch = '';
            if (window.getSelection && (sel = window.getSelection()).modify) {
                // Webkit, Gecko
                var s = window.getSelection();
                if (s.isCollapsed) {
                    s.modify('move', 'forward', 'character');
                    s.modify('move', 'backward', 'word');
                    s.modify('extend', 'forward', 'word');
                    newSearch = s.toString();
                    s.modify('move', 'forward', 'character'); //clear selection
                }
                else {
                    newSearch = s.toString();
                }
            } else if ((sel = document.selection) && sel.type != "Control") {
                // IE 4+
                var textRange = sel.createRange();
                if (!textRange.text) {
                    textRange.expand("word");
                }
                // Remove trailing spaces
                while (/\s$/.test(textRange.text)) {
                    textRange.moveEnd("character", -1);
                }

                newSearch = textRange.text;
                

            }
                //Om Inputten är bara en bokstav.
                if(newSearch.length < 2 ){
                    swal({
                      type: 'error',
                      title: 'Oops...',
                      text: 'Too few characters selected!',
                    })
                   
                }else if(newSearch.length > 30){
                    swal({
                      type: 'error',
                      title: 'Oops...',
                      text: 'Too many characters selected!',
                    })
                } 
                else{
                newSearch = newSearch.replace(/,/g, '');
                newSearch = newSearch.replace(/\./g, '');
                newSearch = newSearch.replace(/_/g, '');    
                $('html, body').animate({ scrollTop: 0 }, 'fast');
                refreshBool = 1;
                
                goWiki();   
                }
               
});


