
var names = [
    "Aaron",
    "Aidan, Ethan, and Jonathan",
    "Alex",
    "Ben and Thatcher",
    "Caje",
    "Carlos, Kristian, and Lucas",
    "Dash",
    "Elicia and Fabricio",
    "Emma",
    "Evan",
    "Evelyn",
    "Finnley",
    "Gavin and Jordan",
    "Ider",
    "Jack and Jackson",
    "Jack and Stella",
    "Jaden, Luis, Max, and Noe",
    "Jason",
    "Jay",
    "JC",
    "Julian",
    "Kody",
    "Liam, Milo, and Simon",
    "Lucy",
    "Melanie",
    "Michael",
    "Noah",
    "Oliver and Ryler",
    "Tino",
    "Vania"
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
    + '" target="_blank" rel="noopener noreferrer"> <img src="images/'
    + imageName
    + '" alt="'
    + altText
    + '" class="screenshots"> </a> </p> </div> </div>';
}

function makeCard() {
    if (idx >= names.length) return;
    var name = names[idx];
    var file = name.replaceAll(" ","").replaceAll(",","").replace("and","");
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
