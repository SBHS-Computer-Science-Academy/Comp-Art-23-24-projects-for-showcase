
let PlayButton;

let advance = false;
let pageNumber = 0;

function preload() {
  spice = loadFont('BungeeSpice-Regular.ttf');
}
function setup() {
  createCanvas(900, 800);
  Pacman1 = new Pacman(450, 380);
  PlayButton = new Button(450, 300, 200, 70, 'Play', color(0, 0, 0));
  Skins = new Button(450, 300, 200, 70, 'Play', color(0, 0, 0));
  // forward(550,600,100,50);
}

function draw() {
  background(0);
  // forward(550, 600, 100, 50);
  if (advance) {
    pageNumber = pageNumber + 1;
    advance = false;
  }
  if (pageNumber == 0) {
    drawStartScreen();
    PlayButton.draw();
    // Drawing the forward button after startscreen
  } else if (pageNumber == 1) {
    drawMap1();
  } else if (pageNumber == 2) {
    drawMap2();
  } else if (pageNumber == 3) {
    drawMap3();
  }
  if (PlayButton.clicked()) {
    console.log("Button is pressed");
  }
  PlayButton.draw();
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
  drawPacman1(x, y) {
    push();
    translate(x, y);
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
    return this.x + 40;
  }

  backOfPacman() {
    return this.x - 40;
  }

  topOfPacman() {
    return this.y - 40;
  }
  bottomOfPacman() {
    return this.y + 40;
  }

  touching(x, y) {
    if (x > this.backOfPacman() &&
      x < this.frontOfPacman() &&
      y > this.topOfPacman() &&
      y < this.bottomOfPacman()) {
      return true;
    }
    return false;
  }
  sizeOfPacman(size = 1) {
    this.size = size;
  }
}
//https://openprocessing.org/sketch/1584210/

