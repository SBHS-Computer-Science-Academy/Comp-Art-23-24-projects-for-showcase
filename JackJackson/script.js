let obst = [];
let obst2 = [];
let obstAmm1 = 2; //rocks
let obstAmm2 = 1; //islands
let character;
let score = 0000;
var hit = false;
let passed = false;

function setup() {
  createCanvas(600, 770);
  angleMode(DEGREES);
  backgroundSea(color(0, 126, 217));
  // rock = new Obstacle(200,200);
  for (let i = 0; i < obstAmm1; i += 1) {
    obst[i] = new Obstacle(50 * i + 5, random(-300, 300));
  }

  for (let i = 0; i < obstAmm2; i += 1) {
    obst2[i] = new Obstacle(50 * i + 5, random(-300, 300));
  }
  ship1 = new Character(300, 720, 0, 1);
}

function backgroundSea(clr) {
  push();
  noStroke();
  fill(clr);
  rect(0, 0, width, height);
  // fill(255, 60);
  // rect(0,0,width,70);
  for (let q = 0; q < height; q += 14) {
    let shr = random(90, 93);
    fill(0, shr)
    rect(0, q, width, 14)
  }
  pop();
}

function draw() {
  backgroundSea(color(0, 126, 217));
  // rock.drawObstacle1();
  // rock.obstacleMoveDown(2);
  for (let i = 0; i < obst.length; i += 1) {
    obst[i].drawObstacle1();
    obst[i].obstacleMoveDown1(4);
  }
  for (let i = 0; i < obst2.length; i += 1) {
    obst2[i].drawObstacle2();
    obst2[i].obstacleMoveDown2(4);
  }
  ship1.drawCharacter();
  ship1.characterLeft(5.6); //speed
  ship1.characterRight(5.6);

  points();
}

class Obstacle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dy = 0;
    this.randomX1 = random(20, 28);
    this.randomY1 = random(11, 34);
    this.randomX2 = random(20, 28);
    this.randomY2 = random(11, 34);
    this.randomCol = color(random(80, 120), random(80, 120), random(80, 120));
    this.randomShade1 = random(8, 18);
    this.randomShade2 = random(4, 12);
    this.randomShade3 = random(3, 14);
    this.randomTreeSpot = random(-30, 30);
  }

  drawObstacle1() {
    this.randomTriOne(this.x, this.y);
    this.randomTriTwo(this.x, this.y);
    fill(this.randomCol);
    noStroke();
    triangle(this.x - 20, this.y, this.x + 20, this.y, this.x, this.y - 50);
    fill(0, 60);
    triangle(this.x - 20, this.y, this.x + this.randomShade1, this.y, this.x, this.y - 50);
    //hitbox
    // fill(0, 255, 0, 80);
    // rect(this.x - 20, this.y, 40, -50);
  }

  drawObstacle2() {
    fill(252, 247, 88);
    this.drawTree(this.x + this.randomTreeSpot, this.y);
    arc(this.x, this.y, 90, 20, 180, 0, CHORD);
    fill(0, 60);
    arc(this.x - 4, this.y, 82, 20, 180, 0, CHORD);
    //hitbox
    // fill(120, 158, 165, 80);
    // rect(this.x - 45, this.y, 90, -30);
  }

  drawTree(x, y) {
    push();
    noFill();
    strokeWeight(4);
    stroke('brown');
    curve(x, y, x + 10, y - 7, x + 20, y - 40, x - 30, y - 44);
    rotate(0);
    noStroke();
    fill('green');
    arc(x + 20, y - 40, 40, 15, 180, 0, CHORD);
    fill(0, 60);
    arc(x + 16, y - 40, 32, 15, 180, 0, CHORD);
    pop();
  }

  obstacleMoveDown1(dy) {
    this.dy = dy;
    // if (keyCode == DOWN_ARROW) {
    this.y += this.dy;
    // }
    if (this.y > 820) {
      this.y = random(-200, -20);
      this.x = random(-20, 620)
      score += 50;
      passed = true;
    }
    let hit = collideRectCircle(this.x - 20, this.y, 40, -50, ship1.x, ship1.y - 15, 100);
    if (hit) {
      noLoop();
    }
  }

  obstacleMoveDown2(dy) {
    this.dy = dy;
    // if (keyCode == DOWN_ARROW) {
    this.y += this.dy;
    // }
    if (this.y > 820) {
      this.y = random(-200, -20);
      this.x = random(-20, 620)
      score += 100;
      passed = true;
    }
    let hit = collideRectCircle(this.x - 45, this.y, 90, -30, ship1.x, ship1.y - 15, 100);
    if (hit) {
      noLoop();
    }
  }

  randomTriOne(x, y) {
    fill(this.randomCol);
    noStroke();
    triangle(x - 20, y, x, y, x - this.randomX1, y - this.randomY1);
    fill(0, 60);
    triangle(x - 20, y, x - this.randomShade2, y, x - this.randomX1, y - this.randomY1);
  }

  randomTriTwo(x, y) {
    fill(this.randomCol);
    noStroke();
    triangle(x + 20, y, x, y, x + this.randomX2, y - this.randomY2);
    fill(0, 60);
    triangle(x + this.randomShade3, y, x, y, x + this.randomX2, y - this.randomY2);
  }

}

class Character {
  constructor(x, y, rott, scl) {
    this.x = x;
    this.y = y;
    this.qx = 0;
    this.rott = rott;
    this.scl = scl;
  }

  drawCharacter() {
    push();

    //sailboat
    stroke(89, 65, 35, 255);
    strokeWeight(1.5);
    fill(135, 99, 53, 255);
    arc(this.x, this.y, 95, 68, 0, 180, CHORD);
    fill(82, 62, 38, 255);
    rect(this.x - 4, this.y - 70, 7, 70);
    fill(247, 243, 200, 230);
    strokeWeight(1);
    stroke(247, 243, 200, 255);
    triangle(this.x + 3.5, this.y - 15, this.x + 95 / 2, this.y - 15, this.x + 3.5, this.y - 70);
    triangle(this.x - 3.5, this.y - 15, this.x - 25, this.y - 15, this.x - 3.5, this.y - 68);
    fill(181, 36, 4, 255);
    noStroke();
    triangle(this.x - 3, this.y - 70, this.x - 23.5, this.y - 67, this.x - 3, this.y - 61); //red sail
    fill(28, 28, 26, 255);
    textSize(14);
    text('Unsinkable II', this.x - 41, this.y + 17);

    //hitbox
    // fill(255, 0, 0, 80);
    // noStroke();
    // circle(this.x, this.y - 15, 100);

    pop();
  }

  characterLeft(qx) {
    this.qx = qx;
    if (keyIsDown(37) || keyIsDown(65)) {
      this.x -= this.qx;
      this.characterBack();
    } else {
      this.qx = -1;
    }
  }

  characterRight(qx) {
    this.qx = qx;
    if (keyIsDown(39) || keyIsDown(68)) {
      this.x += this.qx;
      this.characterBack();
    } else {
      this.qx = 1; //speed
    }
  }

  characterBack() {
    if (this.x > 310 * 2) {
      this.x = -20;
    } else if (this.x < -10 * 2) {
      this.x = 620;
    }
  }
  //class character end bracket
}

function points() {
  textSize(20);
  fill('white');
  stroke('white');
  text("Points: " + score, 8, 20);
  if((score % 1500 == 0 || score % 1550 == 0) && passed){
    // obstAmm1 = 6;
    obst.push(new Obstacle(50 * 2 + 5, random(-300, 300)));
    // obst.push(new Obstacle(50 * 5 + 5, random(-300, 300)));
    // obstAmm2 = 4;
    obst2.push(new Obstacle(50 * 1 + 5, random(-300, 300)));
    // obst2.push(new Obstacle(50 * 3 + 5, random(-300, 300)));
    passed = false;
  }
}