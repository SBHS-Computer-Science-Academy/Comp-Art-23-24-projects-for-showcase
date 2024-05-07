let birdY = 250; birdSpeed = 0; gravity = 0.5;
let jumpSpeed = -10;
let isPlaying = false
let pipeX = -0;

function setup() {
  let myCanvas = createCanvas(2000, 800);
  myCanvas.parent("myCanvas");

  createConsole("lines");

  textAlign(CENTER, CENTER);
  angleMode(DEGREES);

  frameRate(60); // fixes a bug in p5.js that increases the framerate the first time you click the mouse
}

function draw() {
  background("skyblue");

  fill("white");
  textSize(80)
  if (isPlaying == false) text("Welcome to Minion Jump!", 500, 400);

  drawMouseLines("black");

  //noStroke()
  if (isPlaying) {
    birdY += birdSpeed;
    birdSpeed += gravity;
    if (birdY > height || birdY < 0) {
      gameOver()
    }
  }

  strokeWeight(3);
  push()
  translate(0, birdY - 250);
  fill("yellow")
  circle(150, 250, 55)//body

  line(142, 280, 142, 303)//left leg
  line(158, 280, 158, 303)//right leg


  strokeWeight(3)
  fill("white")
  circle(168, 240, 20)

  fill("black")
  circle(168, 240, 5)


  fill("white")
  ellipse(135, 255, 40, 14)//wing 
  pop()
  if (isPlaying) {
    pipeX -= 5;
    if (pipeX < -2000) pipeX = 2000; //imdumb

  }
  translate(pipeX, 0)
  strokeWeight(30)
  line(305, 0, 305, 331);//firsttop
  square(295, 320, 20)

  strokeWeight(30)
  line(305, 800, 305, 600);//firstbot
  square(295, 600, 20)

  strokeWeight(30)
  line(536, 0, 536, 236)//secondtop
  square(526, 230, 20)

  strokeWeight(30)
  line(536, 460, 536, 800)//secondbot
  square(526, 460, 20)

  strokeWeight(30)
  line(800, 0, 800, 395)//thirdtop
  square(790, 390, 20)

  strokeWeight(30)
  line(800, 800, 800, 600)//thirdbot
  square(790, 600, 20)

  strokeWeight(30)
  line(1045, 0, 1045, 200)//fourthtop
  square(1035, 205, 20)

  strokeWeight(30)
  line(1045, 800, 1045, 400)//fourthbot
  square(1035, 400, 20)

  strokeWeight(30)
  line(1280, 0, 1280, 360)//fifthtop
  square(1271, 360, 20)

  strokeWeight(30)
  line(1280, 800, 1280, 560)//fifthbot
  square(1270,550, 20)

  strokeWeight(30)
  line(1600, 0, 1600, 200)//sixtop
  square(1590, 205, 20)

  strokeWeight(30)
  line(1600, 800, 1600, 400)//sixbot
  square(1590, 400, 20    )
  
  strokeWeight(30)
  line(1920, 0, 1920, 545)//seventhtop
  square(1910, 525, 20)

  strokeWeight(30)
  line(1920, 670, 1920, 800)//sevenththbot
  square(1910, 670, 20)

  

  if (isPlaying) {
    let pixel = get(150, birdY + 30)
    if (pixel[0] == 0 && pixel[1] == 0 && pixel[2] == 0) {
      gameOver()
    }
    pixel = get(150, birdY - 30)
    if (pixel[0] == 0 && pixel[1] == 0 && pixel[2] == 0) {
      gameOver()
    }
    pixel = get(150 + 30, birdY)
    if (pixel[0] == 0 && pixel[1] == 0 && pixel[2] == 0) {
      gameOver()
    }
  }
}

function gameOver() {
  pipeX = 400;
  birdY = 250;
  birdSpeed = 0;
  isPlaying = false
}
function keyPressed() {
  if (keyCode == 32) {
    birdSpeed = jumpSpeed;
  }
}

function mouseReleased() {
  isPlaying = true
}

// disable window scroll, courtesy of https://stackoverflow.com/questions/8916620/disable-arrow-key-scrolling-in-users-browser
window.addEventListener("keydown", function(e) {
  if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
    e.preventDefault();
  }
}, false);