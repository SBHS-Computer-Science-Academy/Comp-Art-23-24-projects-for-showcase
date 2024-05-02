
var names = [
    "Aidan, Ethan, and Jonathan",
    "Ben and Thatcher",
    "Elicia and Fabricio",
    "Jack and Stella",
    "Aaron",
    "Dash",
    "Emma",
    "Evan",
    "Evelyn",
    "Finnley",
    "Gavin",
    "Ider",
    "Jack",
    "Jay",
    "JC",
    "Julian",
    "Kody",
    "Lucy",
    "Melanie",
    "Michael",
    "Noah",
    "Ryler",
    "Tino",
    "Vania"
];
var files = [
    "AidanEthanAndJonathan",
    "BenAndThatcher",
    "EliciaAndFabricio",
    "JackAndStella"
];

var gridWidth = 4;
var gridHtml = "";
var idx = 0;

makeGrid();

function generateCard(names, imageName, altText, url)
{
    return '<div class="card text-center"> <div class="card-body"> <h5 class="card-title">'
    + names
    + '</h5> <p class="card-text"> <a href="'
    + url
    + '"> <img src="images/'
    + imageName
    + '" alt="'
    + altText
    + '" class="screenshots"> </a> </p> </div> </div>';
}

function makeCard() {
    if (idx >= names.length) return;
    var name = names[idx];
    var file = name;
    if (idx < files.length) file = files[idx];
    var card = generateCard(name, file + ".png", "platformer game", file + "/index.html");
    gridHtml += card; //not elegant, but it works
    
    idx++;
}


function makeGrid() {
    
    for (var i = 0; i < names.length; i++) {
        if (i % gridWidth == 0) {
            gridHtml += '<div class="row">';
        }
        gridHtml += '<div class="col-md-3 p-3">';
        makeCard();
        gridHtml += '</div>';
        if (i % gridWidth == (gridWidth - 1)) {
            gridHtml += '</div>';
        }
    }
    
    if (names.length % gridWidth != 0) {
        gridHtml += '</div>';
    }
    
    document.getElementById("grid").innerHTML += gridHtml;
    
}
