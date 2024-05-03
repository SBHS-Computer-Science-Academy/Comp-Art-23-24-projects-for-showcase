let img;
let gameState;
function setup() {
  createCanvas(1000, 800);
  background(125, 19, 19);
  hit = new Button(50, 680, 100, 80, 'hit', 'white');
  restart = new Button(20, 20, 150, 60, 'restart', 'white');
  stand = new Button(800, 680, 190, 80, 'stand', 'white');
  deck = new Deck();
  playerHand = new Hand(300, 575);
  dealerHand = new Hand(300,100);
gameState="playing"
if (playerHand.total == 21){
  gameState="player Black Jack"
}
  
if (dealerHand.total ==21){
  gameState="dealer Black Jack"
}
    if (dealerHand.total ==21&& playerHand.total==21){
      gameState="push"
    }
}
// noStroke()
// fill('white')
// rect(60,60,80,130,20)
// fill('black')
// rect(70,70,60,110,20)
// fill('white')
// rect(80,80,40,90,20)
// fill('black')
// rect(90,90,20,70,20)
// fill('white')
// rect(100,100,0,50,20)




function draw() {

  table();

  standButton();
  hitButton();
  BlackJackText();
  restartButton();
drawSquareBox();
  // pointLocator(100, 100);
  //hit.draw()
  playerHand.show();
  dealerHand.show();

  if(gameState!="playing"){
    endGame();
  }
  else{
    CardBack(310,-25)
  }
}

function CardBack(x,y){
  push()
  translate(x,y)
  fill('black')
  rect(50,50,100,150,20)
  noStroke()
  fill('white')
  rect(60,60,80,130,20)
  fill('black')
  rect(70,70,60,110,20)
  fill('white')
  rect(80,80,40,90,20)
  fill('black')
  rect(90,90,20,70,20)
  fill('white')
  rect(100,100,0,50,20)
  pop()
}

function mousePressed() {
  if (hit.clicked()&& gameState=="playing") {

    playerHand.addCard();

  }
  if (restart.clicked()) {
    setup();

  }
  if (stand.clicked()&& gameState=="playing"){
    dealerTurn();
}
}

function preload() {
  CasinoShadow = loadFont('CasinoShadow.ttf');
  img = loadImage('NewProject.jpg');
  cardo = loadFont('Cardo-Regular.ttf');
}


function dealerTurn(){
while(dealerHand.total<17){
  dealerHand.addCard()
  
}
  if (gameState=="bust"){
gameState="dealer Bust"
  }
  else if (dealerHand.total<playerHand.total){
  gameState="player Won"
  }
  else if (dealerHand.total>playerHand.total){
  gameState="dealer Won"
  }
  else {
  gameState="push"
  }
}

function table() {
  fill(82, 53, 20);//base design
  ellipse(500, 100, 1250, 1250);
  fill("darkgreen");
  ellipse(500, 100, 1200, 1200);

}

function endGame() {
textFont(CasinoShadow);
  text('total: '+dealerHand.total,100,150)
  textSize(120);
  if (gameState=="player Won"||gameState=="dealer Black Jack"||gameState=="player Black Jack"||gameState=="dealer Won"||gameState=="dealer Bust"||gameState=="player black Jack"||gameState=="dealer black Jack"){
    let colors=["red","orange","yellow"]
  index= int(frameCount/15)%colors.length
  fill(colors[index]);
  }
  textAlign(CENTER,CENTER);
  text(gameState, 500 ,235 );
  textAlign(LEFT,BASELINE);
    


  
}
function hitButton() {
  textSize(25);
  fill("darkgreen");
  rect(50, 680, 100, 80, 10);
  textFont(CasinoShadow);
  textSize(67);
  fill('black');
  text("HIT", 55, 740);
}

function standButton() {
  textSize(25);
  fill("darkgreen");
  rect(800, 680, 190, 80, 10);
  textFont(CasinoShadow);
  textSize(67);
  fill('black');
  text("Stand", 805, 740);
}
function BlackJackText() {
push()
  scale(0.5);
  image(img, 160, 390);
pop()
}

function pointLocator(xLocation, yLocation) {
  stroke(255, 0, 0);
  fill(255, 0, 0);
  //print('x = ', mouseX, ' y = ', mouseY);
  text('x = ' + mouseX + ' y = ' + mouseY, xLocation, yLocation);
}



function restartButton() {
  fill("darkgreen");
  rect(20, 20, 150, 60, 10);
  fill('black');
  textSize(35);
  text("restart", 30, 60);
}


function drawSquareBox(){
  fill('black')
  text('total: ' + playerHand.total, 100, 500)

}


