//*****************************************///
/* This file contains the random string arrays
/* And functions for doing the random searches
//*****************************************///


var People = ['Pablo Picasso','Vincent van Gogh','Marilyn Monroe ','Abraham Lincoln ','Mother Teresa','John F. Kennedy ','Martin Luther King ','Nelson Mandela ','Queen Elizabeth II ','Winston Churchill',
              'Donald Trump','Bill Gates ','Muhammad Ali ','Mahatma Gandhi','Margaret Thatcher ','Christopher Columbus ','Charles Darwin ','Elvis Presley ','Paul McCartney ','Queen Victoria ',
              'Pope Francis ','Jawaharlal Nehru ','Leonardo da Vinci','Vincent Van Gogh ','Franklin D. Roosevelt ','Pope John Paul II ','Thomas Edison','Rosa Parks ','Oprah Winfrey',
              'Indira Gandhi','Benazir Bhutto','George Orwell','Desmond Tutu ','Dalai Lama','Walt Disney','Neil Armstrong','Barack Obama','Malcolm X',
              'J. K. Rowling','Richard Branson','Pelé','Angelina Jolie','Jesse Owens','Ernest Hemingway','John Lennon','Henry Ford','Haile Selassie','Joseph Stalin','Michael Jordon','George Bush Jnr','Vladimir Lenin','Ingrid Bergman','Leo Tolstoy','Oscar Wilde','Coco Chanel','Charles de Gaulle','Amelia Earhart','Louis Pasteur','Mikhail Gorbachev','Plato ','Adolf Hitler','Sting',
              'Mary Magdalene','Alfred Hitchcock','Michael Jackson','Madonna','Cleopatra','Grace Kelly','Steve Jobs','Ronald Reagan','Lionel Messi','Babe Ruth','Bob Geldof','Roger Federer','Sigmund Freud',
              'Mao Zedong','David Beckham','Tiger Woods','Usain Bolt','Carl Lewis','Prince Charles','C.S. Lewis','Billie Holiday','J.R.R. Tolkien','Anne Frank','Marie Antoinette','Cristiano Ronaldo','Marie Curie',
              'Stephen Hawking','Tim Berners Lee','Shakira','Tom Cruise','Al Gore','Sacha Baron Cohen','George Clooney','Paul Krugman','Jimmy Wales','Brad Pitt','Kylie Minogue','Malala Yousafzai','Stephen King',
              'Justin Bieber','Carl XVI Gustaf','Johann Sebastian Bach','Ludwig van Beethoven','Wolfgang Amadeus Mozart','Elvis Presley','Elon Musk','Albert Einstein','Michael Faraday','Galileo Galilei',
              'Isaac Newton','Julius Caesar', 'Napoleon', 'Karl Marx', 'Diego Maradona', 'Vladimir Putin']; //LÄGG TILL FLER?




var Things = ['Wheel  ','Aeroplane  ','Light bulb ','Internet','PC ','Telephone','Penicillin','Smartphone ','Toilet ','Combustion engine','Washing machine ','Central heating ','Fridge ',
              'Pain killers ','Steam engine ','Freezer ','Camera ','Cars ','Spectacles ','Toilet paper ','Train','Google ','Microwave ','Email ','Hot water ','Shoes ','Compass ','Ibuprofen ','Toothbrush ',
              'Laptop ','Knife','Scissors ','Paper ','Space travel ','Kettle ','Calculator ','Bed ','Remote control ','Roof ',
			  'Air conditioning ','Wi-Fi ','Cats-eyes ','Matches ','Bicycle ','Tea bags ','Umbrella ','Taps ','Helmet','Watch','eBay ','DVD player ','Ladder ','Sunscreen ','Lawnmower ',
              'Make-up ','Chair ','Sunglasses ','Football ','Bread ','Sofa ','Razor blades ','Screwdriver','Motorways','Head phones ','Towels ','Push-up bra ','Binoculars ','Mascara ','Hair dryer ','Facebook',
              'Escalator','Hair dye','Wellington boots','Spell check','Calendars','Cheese','Post-it notes','Gloves','Satellite','Pedestrian crossing','Curtains','Bottle opener','Food blender','Brush']


var Technology = ['Algebra','Adjacent','Algorithm','Acceleration','Altitude','Arctan','Asymptote','Binomial','Calculus','Cardinality','Circle','Coefficient','Complex Numbers',
                  'Compute','Concave','Conjugate','Convex','Coordinates','Cosine','Cross Product','Cylinder','Denominator','Derivative','Diameter','Difference','Dilation','Dimensions',
                  'Ellipse','Equation','Exponent','Factorial','Fibonacci Sequence', 'Geometry','Gravity','Infinite','Interval','Inverse','Limit','Logarithm',
				  'Matrix','Minute','Moment','Modular Arithmetic','Multiplication','Odd Number','Polar Axis','Polynomial','Pascals Triangle','Prime Number',
                  'Quadratic Equation','Radian','Reflection','Residual','Scalar Product','Sphere','Speed','Series','Symmetric','Sum','Square','Trigonometry','Union','Pythagorean Theorem',
                  'Abutment','Activation','Amplitude','Analysis','Angle','Assembly','Automation','Axis','Axle','Balance','Battery','Bearing','Blueprint','Building',
                  'Calculation','Cantilever','Cell','Circumference','Combustion','Communication','Component','Compress','Concept','Constriction','Construction','Consultation','Control','Conversion','Conveyance',
                  'Conveyor belt','Cooling','Coupling','Crank','Current','Curves','Degree','Depth','Design','Device','Diagram','Diesel','Dimension','Direction',                 'Distill','Distribution','Elastic','Electrical','Electronics','Element','Energy','Engine','Excavation','Expert','Fabrication','Flexible','Flow','Fluid','Fluorescent','Force','Frame','Friction','Fuel',     'Fulcrum','Gear','Generate','Generator','Gimbals','Grade','Grading','Hardware','Heat','Hoist','Horizontal','Hydraulic','Illumination','Information','Injection','Installation','Instrument','Intersection',
                  'Joint','Lever','Lift','Liquid','Load','Machine','Management','Manufacturing','Mark','Measurement','Mechanize','Modular','Mold','Motion','Motor','Negative','Nuclear','Object','Operation','Oscilloscope',   'Physics','Pivot','Plumb','Pneumatic','Power','Precision','Process','Production','Project','Propulsion','Pulley','Radiate','Ream','Refine','Refrigeration','Regulation','Repair','Retrofit','Revolution',
                  'Rotation','Savvy','Scheme','Schooling','Scientific','Sequence','Shape', 'Slide','Solar','Stability','Strength','Structure','Studying','Superstructure','Suspension',
                  'Technology','Tools','Transform','Transmission','Transmit','Turbine','Vacuum','Valve','Vertical','Vibration','Weight','Weld','Withstand','Worker']




var Nature	= ['Abundant',' Animism',' Aquatic',' Arctic',' Array',' Autumn',' Awareness',' Barren',' Beauty',' Bees',' Biodegradable',' Boulder',' Bountiful',' Brilliant',' Brook',' Buoyancy',' Butte',' Butterfly',
               'Buzz',' Celestial',' Cliff',' Climate',' Clouds',' Coastal',' Color',' Combustible',' Commercial',' Commune',' Conifer',' Conservation',' Conspicuous',' Contiguous',' Cordillera',' Cosmography',' Crater',
               'Crucial',' Current',' Deft',' Demise',' Deplorable',' Desert','Destructive',' Disposable',' Dynamic',' Earthquake',' Earthy',' Eclipse',' Ecological',' Efficient',' Electrifying',' Endangered',' Endemic',
               ' Enigmatic',' Environment',' Erosion',' Escarpment',' Esker',' Evergreen',' Exclusive',' Fall',' Fallow',' Farming',' Fertile',' Fibrous',' Fierce',' Flood',' Fog',' Foliage',' Forest',' Glacier',
               ' Gorgeous',' Grassland',' Gravity',' Growth',' Gust',' Habitat',' Hail',' Healthy',' Hibernate',' Horizon',' Hurricane',' Hygienic','Iceberg',' Imitation',' Indigenous',' Innate',' Intense',' Intimate',
               ' Juniper',' Keen',' Land',' Land form',' Leaves',' Logging',' Magical',' Magnificence',' Magnificent',' Marine',' Massif',' Meteor',' Migratory',' Mimesis',' Moon',' Mountains',' Mushroom',' Nascent',
               ' Native',' Natural',' Nature',' Neglected',' Nurture',' Organism',' Original',' Pantheism',' Parasitic',' Passionate',' Peaceful',' Peaks',' Pinnacle',' Planet',' Pollutant',' Popular',
               ' Prairie','Predator',' Preservation',' Pristine',' Productive',' Protection',' Quiet',' Radioactive',' Range',' Renewable',' Representation',' Reproductive',' Reserve',' Resilient',' Resources',
               ' Restorative',' Ridge',' River',' Rock',' Rotting',' Safe',' Sanctuary',' Sane',' Scenic',' Season',' Sediment',' Serene',' Serenity',' Shelter',' Shore',' Smells',' Snow',' Solar',' Soluble',' Sounds',
               ' Spatial',' Splendid',' Spring',' Staunch',' Stream',' Stunning',' Taint',' Tarn','Temperate',' Terrain',' Toxic',' Tropical',' Tsunami',' Typical',' Ultimate',' Undeveloped',' Unique',' Uplifting',
               ' Uproot',' Value',' Variety',' Versatile',' Visible',' Vista',' Volcano',' Vulnerable',' Warmth',' Weather',' Wildlife',' Winter',' Worldwide']



var Adjectives = ['Admiration',' Adorable',' Affectionate',' Afraid',' Aggravate',' Aggressive',' Agitated',' Alarm',' Alive',' Angry',' Annoyed',' Anticipate',' Anxiety',' Appreciated',' Arrogance',' Ashamed',
                  ' Authoritative',' Aversion',' Awe',' Awful',' Belligerent',' Bitter',' Blue',' Blunt',' Bold',' Bored',' Brilliant',' Bullying',' Callous',' Cautious',' Cheerful',' Clever',' Combative',' Comical',
                  ' Compassionate',' Contemptuous',' Content',' Contrary',' Cool',' Cordial',
			      ' Covetous',' Cross',' Cruelty',' Curious',' Dainty',' Defeated',' Defiant',' Dejected',' Delighted',' Despair',' Devoted',' Disagreeable',' Disciplined',' Discontent',' Disgust',' Distaste',
                  ' Doubtful',' Dread',' Dutiful',' Dynamic',' Elated',' Enraged',' Envy',' Evil',' Excited',' Exhausted',' Exhilaration',' Exuberance','  Fearful',' Fearless',' Feisty',' Fierce',' Flattered',' Folksy',
                  ' Forgiving',' Forlorn',' Frustrated',' Furious',' Fury',
				  ' Gay',' Generous',' Gentle',' Glee',' Grateful',' Greedy',' Happy',' Harsh',' Hatred',' Haughty',' Heroic',' Honest',' Honored',' Hope',' Horror',' Hostile',' Hunch',' Ignored',' Imaginative',
                  ' Impartial',' Impatient',' Inconsiderate',' Indifferent',' Innocent',' Inquisitive',' Insensitivity',' Insightful',' Inspired',' Intolerance',' Intuitive',' Ire',' Irritate',' Isolated',' Jealous',
                  ' Joy',' Kind',' Kindred',' Lazy',' Lively',
				  ' Lonely',' Love',' Lucky',' Mad',' Malice',' Mean',' Meek',' Melancholy',' Mollified',' Nasty',' Natural',' Naughty',' Nervous',' Obnoxious',' Obstinate',' Outraged',' Outstanding',' Overjoyed',' Pain',
                  ' Panic',' Patient',' Perky',' Perturb',' Pity',' Powerful',' Pride',' Querulous',' Rage',' Rapturous',' Relaxed',' Reliable',' Relief',' Reluctant',' Repentant',' Repulsive',' Resent',' Resigned',
                  ' Resistant',' Restrained',' Reverent',
				  ' Revulsion',' Ridiculed',' Rough',' Rude',' Sad',' Satisfy',' Scornful',' Severe',' Shame',' Sick',' Silly',' Sixth sense',' Skill',' Sorrow',' Spite',' Stubborn',' Sure',' Surprise',' Sweet',
                  ' Tame',' Tempted',' Tender',' Tense',' Terse',' Tired',' Trepidation',' Uncertain',' Unhappy',' Valiant',' Victorious',' Vindictive',' Violent',' Vocal',' Wary',' Weary',
                  ' Weird',' Wicked',' Wise',' Woeful',' Worrier',' Worthy',' Wrath']



var AllStrings = [People, Things, Technology, Nature, Adjectives];
var AllCategories = ['People', 'Things', 'Technology', 'Nature', 'Adjectives', 'Random']
document.getElementById('felMeddelande2').style.display = 'none';

var startArtWord;
var goalArtWord;
var i = 0;
var goalTitle;
var shortSummaryForUi;


var gotCategory = false;
var chosenCategory;

//Fullösningar
var failFix;
var except;

var randSummary;
//Sätter UI
//var textInDiv = document.getElementById("shortSummary").innerHTML;
document.getElementById('showWhenResult').style.display = 'none';

function getRandomWordFromClass(classID) {
    //classID tal mellan 5
    //Får rätt kategori
    var ChosenClass = AllStrings[classID];
    var numElements = ChosenClass.length - 1;

    //The array position of the random article
    var randomArticle;
    randomArticle = getRandomInt(numElements)

    failFix = ChosenClass[randomArticle];
    return ChosenArticle = ChosenClass[randomArticle];
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));

}

function chosenArticle() {
    return getRandomWordFromClass(i);
}

function allRandom() {
    var randomID = getRandomInt(4);
    except = randomID;
    return getRandomWordFromClass(randomID);
}

//Extra Function to make sure that the articles are not from the same category
function allButRandom() {

    if (chosenCategory == 'Random') {
        var randomID = getRandomInt(5);
        if (randomID == except)
            allButRandom();
        else
            return getRandomWordFromClass(randomID);
    } else {
        var randID = getRandomInt(5);
        if (randID == i)
            allButRandom();
        else
            return getRandomWordFromClass(randID);
    }
}


//Randomfunktionen som kallas varje gång Randomizeknappen trycks
function Randomize() {
    chosenCategory = AllCategories[i];

    if (gotCategory == false) {
        document.getElementById('felMeddelande2').style.display = 'block';
        document.getElementById('felMeddelande2').innerHTML = "<p id='felText'>Select Category</p>"
        $('.centerMe5').css({color: '#f24848'});
        $('.centerButtons3').shake(2, 5, 10);
        return;
    } else if (chosenCategory == 'Random') {

        goalArtWord = allRandom();
        startArtWord = allButRandom();

        //Don't look at this, please.
        if (!startArtWord)
            startArtWord = failFix;

        //Om artiklarna blir lika
        if (startArtWord == goalArtWord) {
            Randomize();
        }
    } else if (gotCategory == true) {

        goalArtWord = chosenArticle();
        startArtWord = allButRandom();

        if (!startArtWord) {
            startArtWord = failFix;
        }

    }

    if (startArtWord.startsWith(' ')) {
        startArtWord = startArtWord.substring(1);
    }
    if (goalArtWord.startsWith(' ')) {
        goalArtWord = goalArtWord.substring(1);
    }
    var goalUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + goalArtWord;

    $.ajax({
        url: goalUrl,
        dataType: "json",
        success: function(data, status, xhr) {

            console.log(data);
            goalTitle = data.title;
            description = data.extract_html;

            //Checkar hur artiklarna relaterar till input
            if (goalTitle != goalArtWord && description != '' && !description.includes('may refer to:')) {
                randSummary = description;
                document.getElementById("randSummary").innerHTML = "<i><span id='menuTextlittle' style='color: #f24848;'>(Autocorrected input)</span><p id='menuTextlittle'> " + randSummary + "</p></i>"

            } else if (description != '' && !description.includes('may refer to:')) {
                randSummary = description;
                document.getElementById("randSummary").innerHTML = "<i><p id='menuTextlittle'>" + randSummary + "</p></i>"

            } else if (description.includes('may refer to:') || description.includes('can refer to:')) {
                randSummary = description;
                document.getElementById("randSummary").innerHTML = "<i><p id='menuTextlittle'> Could refer to: " + randSummary + "</p></i>"
            } else if (description != '') {
                randSummary = description;
                document.getElementById("randSummary").innerHTML = "<i><p id='menuTextlittle'> " + randSummary + "</p></i>"
            } else {
                document.getElementById("randSummary").innerHTML = "<i><p id='menuTextlittle'> No further information </p></i>"
            }



            if (gotCategory == true) {
                $("#centerButtons4").fadeIn("fast");
                document.getElementById("showWhenResult").style.display = 'block';
                document.getElementById("thisOne").innerHTML = " " + goalTitle;

                //Sending values to game
                startArticle = startArtWord;
                goalArticle = goalTitle;
                shortSummaryForUi = document.getElementById("randSummary").innerHTML;
            }
        }
    });

    document.getElementById('textStartRand').value = startArtWord;
    $('.line5').css({
        backgroundColor: 'green'
    });

    document.getElementById('textGoalRand').value = goalArtWord;
    $('.line6').css({
        backgroundColor: 'green'
    });


}

//Hanterar Dropdown Menyn i randomfliken
$(".custom-select").each(function() {
    var classes = $(this).attr("class"),
        id = $(this).attr("id"),
        name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);

});
$(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
}, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function(event) {
    $('html').one('click', function() {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");

    //Om menyn öppnas resettas värdena
    document.getElementById('felMeddelande2').style.display = 'none';
    document.getElementById('textStartRand').value = "";
    $('.line5').css({
        backgroundColor: '#bdc3c7'
    });
    $('.centerMe5').css({color: '#cccccc'});
    document.getElementById('textGoalRand').value = "";
    $('.line6').css({
        backgroundColor: '#bdc3c7'
    });
    $("#showWhenResult").fadeOut("slow");
    event.stopPropagation();
});
$(".custom-option").on("click", function() {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());

    FindSelection();
    //Random Article from dropdown selection  

});

//Hittar värdet från dropdownmenyn mot arrayerna
function FindSelection() {
    i = 0;
    var input = document.getElementById("sources").value;
    while (i < 6) {

        if (input === AllCategories[i]) {
            gotCategory = true;
            break;
        }
        i++;
    }
}




















/* https://delim.co/# */