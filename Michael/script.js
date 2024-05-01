let player="X"
let theWinner = ""
class Box{
  constructor(x, y, w){
    this.x = x;
    this.y = y;
    this.w = w;
    this.letter=" "
  }
  show(){
    fill("white");
    square(this.x,this.y, this.w);
    fill ("black")
    textSize (this.w/2)
      text(this.letter, this.x+this.w/2, this.y+this.w/2);
  }
  checkForClick(i,j){
    let hit = collidePointRect(mouseX, mouseY,this.x,this.y,this.w,this.w);;
    if(hit && mouseIsPressed && this.letter==" ")  {
      this.letter = player;
      this.checkForWin(i,j);


      
      if(player=="X")player="O"
      else player="X"
    }
  }

  checkForRestart(){
    let hit = collidePointRect(mouseX, mouseY,this.x,this.y,this.w,this.w);;
    if(hit && mouseIsPressed)  {
      makeBoard();
      player = 'X'
      loop()
      theWinner=""
      
    }
  }
  checkForWin(i,j){
    let win = true;
     for(let i = 0; i < 3; i++){
      if(this.letter != board[i][j].letter) win = false;
     }
    if (win) showWinner(this.letter);

     win = true;
     for(let j = 0; j < 3; j++){
      if(this.letter != board[i][j].letter) win = false;
     }
    if (win) showWinner(this.letter);

    if (i == j) {
      win = true;
      for(let i = 0; i < 3; i++){
        if(this.letter != board[i][i].letter) win = false;
       }
      if (win) showWinner(this.letter);

    }
     
    if (i + j == 2) {
      win = true;
      for(let i = 0; i < 3; i++){
        if(this.letter != board[i][2-i].letter) win = false;
       }
      if (win) showWinner(this.letter);

    }
  }
}

function setup() {
  let myCanvas = createCanvas(1000, 800);
  myCanvas.parent("myCanvas");

  //createConsole();

  textAlign(CENTER, CENTER);

  makeBoard();
  frameRate(60); // prevent a p5.js bug that changes the framerate when you click
}
function draw() {
  background("white");
  

 drawBoard()

  drawMouseLines("black")
}

let board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]
];

function makeBoard(){
  let gridSize = 180

  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++) {
        let x = gridSize * i;
        let y = gridSize * j;

        board[i][j] = new Box(x, y, gridSize);
      }
  }
}



  function drawBoard() {
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++) {

        let box = board[i][j];
        box.checkForClick(i,j);
        box.show();
      }
    }
  
        
}

function showWinner(winner){

  theWinner = winner
  text(winner, 500, 600);
  noLoop();
  button = new Box(600, 600, 200);
  button.letter = "Play Again";
  button.show();
  button.checkForRestart();
}

function mousePressed() {
  if (theWinner != "") {
    button = new Box(600, 600, 200);
    button.checkForRestart();
  }
}