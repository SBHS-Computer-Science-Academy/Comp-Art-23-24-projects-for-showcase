
let PlayButton;

let advance = false;
let pageNumber = 0;
let rectangles = [];
let mx = 0;
let my = 0;
let ma = 0;
let gx = 0;
let gy = 0;
let ga = 0;
timer = 0 
function preload() {
  spice = loadFont('BungeeSpice-Regular.ttf');
}
function setup() {
  createCanvas(980, 980);
  angleMode(DEGREES);
  ghost1 = new Ghost(875, 875);
  pacman = new Pacman(105, 105);
  PlayButton = new Button(450, 400, 200, 70, 'Play', color(0, 0, 0));
  Skins = new Button(450, 290, 200, 70, 'Play', color(0, 0, 0));
  // forward(550,600,100,50);

  //rectangles.push(new Rectangle(0, 0, 100, 100))
}

function draw() {

  background(0);


  pacman.movePacman(mx, my, ma, 0.7);
  pacman.drawPacman();
  ghost1.moveGhost(gx, gy, 0.7)
  ghost1.drawGhost();
  
  //drawMap1();
  //print(ghost1.backOfGhost());

  
  if(collideCircleCircle(pacman.x, pacman.y, 56, ghost1.x, ghost1.y, 56)){
    pageNumber = 0;
    noLoop();
    pacman.setX(105);
    pacman.setY(105);
    ghost1.setX(875);
    ghost1.setY(875);
    loop();
  }
  //collision()
  //forward(550, 600, 100, 50);


  if (advance) {
    pageNumber = pageNumber + 1;
    advance = false;
  }
  if (pageNumber == 0) {
    startScreen();

     // Drawing the forward button after startscreen
  } else if (pageNumber == 1) {
    drawMap1();
  } else if (pageNumber == 2) {
    drawMap2();
  } else if (pageNumber == 3) {
    drawMap3();
  }
  if (PlayButton.clicked()) {
    drawMap1();
    pageNumber = 1 ;
    // advance = false;

  }
}








class Pacman {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.size = 1;
  }
  drawPacman() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    scale(this.size);
    fill('yellow')
    arc(0, 0, 80, 80, 25, 330, PIE);
    fill('black')
    ellipse(12, -22, 8, 8);
    pop();
  }
  
  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }

  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }

  movePacman(dx = 1, dy = 0, rotate = 0, size = 1) {
    this.x = this.x + dx;
    this.y = this.y + dy;
    if (this.checkForCollision()) {
      this.x = this.x - dx;
      this.y = this.y - dy;
    }
    this.angle = rotate;
    this.sizeOfPacman(size);
  }

  shadePacman(opac) {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(0, opac)
    arc(0, 0, 80, 80, 25, 330, PIE);

    ellipse(12, -22, 8, 8);
    pop();
  }
  frontOfPacman() {
    return this.x + 28;
  }

  backOfPacman() {
    return this.x - 28;
  }

  topOfPacman() {
    return this.y - 28;
  }
  bottomOfPacman() {
    return this.y + 28;
  }

  checkForCollision() {
    // Iterate over the obstacles
    for (let i = 0; i < rectangles.length; i++) {
      let rectangle = rectangles[i];

      // Check collision with Pacman
      if (this.touching(rectangle)) {
        // Handle collision action here (you can modify Pacman's properties or perform other actions)
        //print(true)
        return true;
      }

    }
    return false;
    }
  
  touching(rectangle) {
    if (this.backOfPacman() < rectangle.x + rectangle.rectWidth &&
       this.frontOfPacman() > rectangle.x &&
      this.topOfPacman() < rectangle.y + rectangle.rectHeight &&
      this.bottomOfPacman() > rectangle.y) {
      return true;
    }
    return false;
  }
  touchingGhost(bog,frontOfGhost,topOfGhost,bottomOfGhost) {
   
    //print(bog)
    if (this.backOfPacman() < bog &&
      this.frontOfPacman() > frontOfGhost &&
      this.topOfPacman() < topOfGhost &&
      this.bottomOfPacman() > bottomOfGhost) {
      return true;
    }
    return false;
  }
  sizeOfPacman(size = 1) {
    this.size = size;
  }
}
function keyPressed() {
  //print(key, keyCode);
  if (keyCode === UP_ARROW) {
    mx = 0;
    my = -5;
    ma = -90;
  } else if (keyCode === DOWN_ARROW) {
    mx = 0;
    my = 5;
    ma = 90;

  } else if (keyCode === LEFT_ARROW) {
    mx = -5;
    my = 0;
    ma = 180;
  } else if (keyCode === RIGHT_ARROW) {
    mx = 5;
    my = 0;
    ma = 0;
  }
  if (key === 'w') {
    gx = 0;
    gy = -5;
    ga = -90;
  } else if (key === 's') {
    gx = 0;
    gy = 5;
    ga = 90;

  } else if (key === 'a') {
    gx = -5;
    gy = 0;
    ga = 180;
  } else if (key === 'd') {
    gx = 5;
    gy = 0;
    ga = 0;
  }

}

class Ghost {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.size = 1;
  }
  drawGhost() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    scale(this.size);
    noStroke();
    fill('pink');
    arc(0, 0, 80, 80, 180, 0);
    rect(-40, 0, 80, 30);
    arc(-27, 30, 25, 25, 0, 180);
    arc(0, 30, 25, 25, 0, 180);
    arc(27, 30, 25, 25, 0, 180);
    fill('white');
    ellipse(-20, -15, 30, 30);
    ellipse(20, -15, 30, 30);
    fill('black');
    ellipse(-25, -15, 10, 10);
    ellipse(15, -15, 10, 10);
    pop();
  }
  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }

  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }

  moveGhost(gx = 1, gy = 0, size = 1) {
    this.x = this.x + gx;
    this.y = this.y + gy;
    if (this.checkForCollision()) {
      this.x = this.x - gx;
      this.y = this.y - gy;
    }
    this.sizeOfGhost(size);
  }

  shadeGhost(opac) {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(0, opac)
    noStroke();

    arc(0, 0, 80, 80, 180, 0);
    rect(-40, 0, 80, 30);
    arc(-27, 30, 25, 25, 0, 180);
    arc(0, 30, 25, 25, 0, 180);
    arc(27, 30, 25, 25, 0, 180);
    fill('white');
    ellipse(-20, -15, 30, 30);
    ellipse(20, -15, 30, 30);
    fill('black');
    ellipse(-25, -15, 10, 10);
    ellipse(15, -15, 10, 10);

    pop();
  }
  frontOfGhost() {
    return this.x + 28;
  }

  backOfGhost() {
    //print(this.x - 28);
    return this.x - 28;
  }

  topOfGhost() {
    return this.y - 28;
  }
  bottomOfGhost() {
    return this.y + 28;
  }

  checkForCollision() {
    // Iterate over the obstacles
    for (let i = 0; i < rectangles.length; i++) {
      let rectangle = rectangles[i];

      // Check collision with ghost
      if (this.touching(rectangle)) {
        // Handle collision action here (you can modify Pacman's properties or perform other actions)
        //print(true)
        return true;
      }

    }
    return false;
  }


  touching(rectangle) {
    if (this.backOfGhost() < rectangle.x + rectangle.rectWidth &&
      this.frontOfGhost() > rectangle.x &&
      this.topOfGhost() < rectangle.y + rectangle.rectHeight &&
      this.bottomOfGhost() > rectangle.y) {
      return true;
    }
    return false;
  }

  sizeOfGhost(size = 1) {
    this.size = size;
  }
}
class Rectangle {
  constructor(x, y, rectWidth, rectHeight) {
    this.x = x;
    this.y = y;
    this.rectWidth = rectWidth;
    this.rectHeight = rectHeight;
  }
}


//source https://stackoverflow.com/questions/8916620/disable-arrow-key-scrolling-in-users-browser
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);