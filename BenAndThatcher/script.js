let isPlaying=false
let isGameOver = false
class Paintball{
constructor(){
  this.x = player.gunVector.x
    this.y = player.gunVector.y

    this.width = 5
    this.height = 5
    this.clr = "yellow"
    this.angle=player.angle
  
    this.speed = 20
  this.isOffscreen = false
  }

  show() {
    fill(this.clr)
    circle(this.x, this.y, this.width)
  }

  move() {
    this.x += this.speed * cos(this.angle)
    this.y += this.speed * sin(this.angle)
    this.isOffscreen = this.y < 0 || this.x < 0 || this.x > width || this.y > height
  }

}

class Person {
 
  constructor(x, y, clr = "red") {
   
    this.x = x
    this.y = y

    this.width = 25
    this.height = 25
    this.clr = clr
    this.jitter = 2

  }

 
  show() {
    push();
    translate(this.x, this.y);
    translate(-47, -114); 
    fill(this.clr);
    drawPerson()
    function drawPerson() {

      beginShape();
      curveVertex(47, 98); // control point
      curveVertex(47, 98);
      curveVertex(44, 97);
      curveVertex(43, 104);
      curveVertex(49, 104);
      curveVertex(46, 97);
      curveVertex(47, 122);
      curveVertex(53, 132);
      curveVertex(47, 124);
      curveVertex(37, 133);
      curveVertex(46, 123);
      curveVertex(46, 113);
      curveVertex(33, 113);
      curveVertex(55, 112);
      curveVertex(55, 112); // control point
      endShape();
    }
    pop();
  }

  // let's move the blocks
  move() {
    let jitter = this.jitter;
    this.x += random(-jitter, jitter);
    this.y += random(-jitter, jitter);
    if (this.x > player.x) this.x += random(-2 * jitter, jitter);
    else this.x += random(-jitter, 2 * jitter);
    if (this.y > player.y) this.y += random(-jitter * 2, jitter);
    else this.y += random(-jitter, 2 * jitter);

  }


  checkForCollisions() {
    let hit = collideCircleCircle(player.x, player.y, player.width, this.x, this.y, this.width, this.height);


    if (hit) {
      
      isGameOver = true;
    }

    //paintball
    if (paintball != null) {
  hit = collideCircleCircle(paintball.x, paintball.y, paintball.width, this.x, this.y, this.width, this.height);


        if (hit) {

          paintball = null
          return true;
        }
    }
    

    return false;d
  }

}

class Player {
  // this tells us how to make a new object
  constructor(x, y, clr = "red") {
    // the keyword "this" refers to each object
    this.x = x
    this.y = y
    this.width = 25
    this.height = 25
    this.clr = clr
    this.speed = 10
    this.gunVector = null
    this.angle = null
  }

  // we need to show the blocks
  show() {
    push();
    translate(this.x, this.y);
    let personX=83
    let personY=212
   translate(-personX, -personY); // our reference point on the block is at (100, 100)
    fill(this.clr);
    drawPlayer()

    let gunX=91
    let gunY=222

    this.gunVector=createVector(this.x - personX + gunX,this.y - personY + gunY)
    let mouseVector=createVector(mouseX,mouseY)
    this.angle=atan2((mouseVector.y - this.gunVector.y),mouseVector.x - this.gunVector.x)
    pop()
    push()
    translate(this.gunVector)
    rotate(this.angle)
    translate(-gunX,-gunY);
    if (!isGameOver&&personArray.length!=0) drawGun()
    function drawPlayer() {

      // fill("black");
      beginShape();
      vertex(83, 212);
      vertex(83, 233);
      vertex(95, 241);
      vertex(82, 233);
      vertex(70, 245);
      vertex(83, 234);
      vertex(84, 222);
      vertex(94, 222);
      vertex(73, 223);
      vertex(84, 221);
      vertex(84, 211);
      vertex(93, 211);
      vertex(94, 203);
      vertex(73, 203);
      vertex(72, 211);
      vertex(86, 212);
      endShape();
    }
   

      function drawGun() {
         fill("black");
        beginShape();
        vertex(92, 223);
        vertex(122, 223);
        vertex(120, 230);
        vertex(96, 228);
        vertex(94, 237);
        vertex(89, 236);
        vertex(91, 222);
        endShape();
      
    }
    pop();
  }

  // let's check for collisions
  moveKeys() {
    let KeyS = 83;
    let KeyD = 68;
    let KeyA = 65;
    let KeyW = 87;
    if (keyIsDown(KeyA)&&this.x>0) this.x -= this.speed;
    if (keyIsDown(KeyD)&&this.x<990) this.x += this.speed;
    if (keyIsDown(KeyW)&&this.y>10) this.y -= this.speed;
    if (keyIsDown(KeyS)&&this.y<770) this.y += this.speed;
  }

}

let textX = 500;
let paintball = null;

function setup() {
  let myCanvas = createCanvas(1000, 800);
  myCanvas.parent("myCanvas");

  //createConsole();

  angleMode(DEGREES);

  textAlign(CENTER, CENTER);

  frameRate(60); // prevent a p5.js bug that changes the framerate when you click


  // Step 3: make one or more new objects

  player = new Player(100, 100);


  isPlaying = false
  isGameOver = false

  personArray = [];
  for (let i = 0; i < 100; i++) {
    let newPerson = new Person(random(300, width), random(height), "blue");
    personArray.push(newPerson);
  }

}

function draw() {
  clear();
  background("DarkGrey");

  // step 4: show and move the blocks
if(isPlaying){


  if(!isGameOver) player.moveKeys();
 player.show();

  if (paintball != null) {
    paintball.move();
    paintball.show();
    if (paintball.isOffscreen){
      paintball = null
    }
  }
  
  for (let i = 0; i < personArray.length; i++) {
    let person = personArray[i];
    if (!isGameOver) person.move();
    if (person.checkForCollisions()) {
      personArray.splice(i, 1);
      i--;
    }
    person.show();
  }
if (personArray.length==0){
  text("Click to play again",width/ 2, height/ 2)
}
 
}
  else {
    textSize(100)
    text("Start",470,346)
    
  }

  if (isGameOver) {
    fill("black")
    text("Tagged!", width / 2, height / 2);
  }
  drawMouseLines("black");

}

     function mouseClicked(){
        if (isPlaying && paintball == null) {
          paintball = new Paintball();
        }
       if (isGameOver||personArray.length==0) {
         setup()
       }
      if (isPlaying==false){
        isPlaying= true
      }
      
     }