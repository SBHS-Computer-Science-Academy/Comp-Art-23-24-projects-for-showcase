let player="X"
let winner = ""
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
    if (this.letter.includes("X")) rectGradient(this.x, this.y, this.w, this.w, "black", "white", "center");
    if (this.letter.includes("O")) {
      fill("red");
      square(this.x, this.y, this.w);
      circleGradient(this.x + this.w / 2, this.y + this.w / 2, this.w, "red", "white");
      }
    fill ("black")
    textSize (this.w/2)
    text(this.letter, this.x+this.w/2, this.y+this.w/2);
  }
  checkForClick(i,j){
    let hit = collidePointRect(mouseX, mouseY,this.x,this.y,this.w,this.w);;
    if(hit && mouseIsPressed && this.letter==" ")  {
      this.letter = player;
      this.checkForWin(i,j);


      
      if(player=="X") player="O"
      else player="X"
    }
  }

  checkForRestart(){
    let hit = collidePointRect(mouseX, mouseY,this.x,this.y,this.w,this.w);;
    if(hit && mouseIsPressed)  {
      makeBoard();
      player = 'X'
      loop()
      winner=""
      
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
  createCanvas(windowWidth, windowHeight);
//  myCanvas.parent("myCanvas");

  //createConsole();

  textAlign(CENTER, CENTER);

  makeBoard();
  frameRate(60); // prevent a p5.js bug that changes the framerate when you click
}
function draw() {
  rectGradient(0, 0, width, height/2, "red", "white");
  rectGradient(0, height/2, width, height/2, "white", "black");
  

  drawBoard()

  drawMouseLines("black")
}

let board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]
];

function makeBoard(){
  gridSize = min(width, height) / 4;
    
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++) {
        let x = gridSize * i + gridSize / 2;
        let y = gridSize * j + gridSize / 2;

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

function showWinner(theWinner){
  winner = theWinner;
  let winnerX = gridSize * 5;
  let winnerY = height / 2;
  
  let winnerBox = new Box(winnerX, winnerY - gridSize, gridSize);
  winnerBox.letter = winner + " wins!";
  winnerBox.show();
  noLoop();
  resetButton = new Box(winnerX, winnerY, gridSize);
  resetButton.letter = "Play Again";
  resetButton.show();
  resetButton.checkForRestart();
}

function mousePressed() {
  if (winner != "") {
    resetButton.checkForRestart();
  }
}
