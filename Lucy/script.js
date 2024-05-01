let timerLength = 20
let timer = 1000;
let nextChange = timer;

let colorArray = ['crimson', 'lightblue']

let dotArray = []

let hasLost = false
let hasWon = false

class Dot {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.color = random(colorArray)
  }
  show() {
    fill(this.color)
    ellipse(this.x, this.y, 60, 60)
  }
  checkForChangeColor() {
    if (this.isClicked()) {
      if (this.color == 'lightblue') {
        text("You lose!", 500, 210);

        hasLost= true
        noLoop();
      }
      this.color = 'lightblue'
      score += 1
      random(dotArray).color = 'crimson'
    }
  }
  isClicked() {
    let hit = collidePointCircle(mouseX, mouseY, this.x, this.y, 60);
    return hit && mouseIsPressed;
  }
}

function setup() {
  let myCanvas = createCanvas(1000, 800);
  timeLeft = timerLength

  score = 0

  //createConsole();

  textAlign(CENTER, CENTER);

  frameRate(60); // prevent a p5.js bug that changes the framerate when you click
  makeArray()
}
function draw() {
  background('lightblue');

  //drawDot();
  drawArray();

  updateTimer();

  drawStatus();

  drawDecorDots();







  // drawMouseLines("black")
}

function makeArray() {

  dotArray = []
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      let x = i * 80 + 300
      let y = j * 80 + 300
      dotArray.push(new Dot(x, y))
    }
    //dotArray.push(new Dot(i*100,300))

  }

}

function drawArray() {
  hasWon = true
  for (let dot of dotArray) {
    dot.show();
    if (dot.color == 'crimson') {
      hasWon = false
    }

  }
}
function drawStatus() {
  if (hasWon) {
    fill('black');
    textSize(35);
    text("You win! Dare to click to play again?", 500, 220);

    text("Score "+score, 500,100);
    
    fill('lightblue');
    rect(260, 260, 500, 500);
  }
  else if (hasLost) {
    fill('black');
    textSize(30);
    text("Think you can do better?", 500, 180);
    text("Click again to retry...if you dare >:)", 500, 240);


    textSize(40);
     text("Score "+score, 500,100);
    fill('lightblue');
    rect(260, 260, 500, 500);

  }
  else {
    fill("black");
    textSize(46);
    text("Welcome to Whack-A-Dot!", 500, 90);
    textSize(30);
    text("Click as many Red Dots as you can before the timer runs out!", 500, 160);
    textSize(46);

    text("Time left--> " + timeLeft, 500, 220);
  }
}

function updateTimer() {
  if (millis()> nextChange){
    nextChange = millis() + timer;
    if (timeLeft > 0) {
      timeLeft--;
    } else {
      hasLost = true;
    }
  }
}

function mousePressed() {



  if (hasLost||hasWon) {
    hasLost = false
    hasWon = false
    setup()
    loop()
  } else {
    for (let dot of dotArray) {
      dot.checkForChangeColor();

    }
  }


}

function drawDecorDots() {
  fill('steelblue')

  ellipse(80, 80, 80, 80);
  ellipse(65, 150, 40, 40);
  ellipse(305, 765, 40, 40);
  ellipse(60, 700,120,120);
  ellipse(860,400,160,160);
  ellipse(930,530,40,40);
  ellipse(910,50,30,30);
  ellipse(100,350,70,70);

  fill('cornflowerblue')
  ellipse(800,340,50,50);
  ellipse(120,600,40,40);
  ellipse(200,100,30,30);
  ellipse(890,100,60,60);
  ellipse(830,700,80,80);
  ellipse(40,90,35,35);
  ellipse(100,750,70,70);

  fill('mediumblue')
  ellipse(100,650,30,30);
  ellipse(110,110,40,40);
  ellipse(920,120,50,50);
  ellipse(950,300,20,20);
  ellipse(920,600,20,20);
  ellipse(200,730,20,20);
  ellipse(60,300,20,20);
}
// }



