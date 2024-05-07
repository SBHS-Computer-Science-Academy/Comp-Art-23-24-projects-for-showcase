let page = 0;

function preload() {
  newYork = loadImage("new york.jpeg");
  germany = loadImage("germany 2.jpeg");
  rome = loadImage("rome.jpeg");
  kingdom = loadImage("kingdom.jpeg");
  china = loadImage("china.jpeg");
  santabarbara = loadImage("santabarbara.jpeg");

}


function setup() {
  let myCanvas = createCanvas(1000, 800);
  myCanvas.parent("myCanvas");
  dT = new DrawingTool();
  forward = new Button(930, 730, 50, 50, "-->", "red");
  back = new Button(30, 730, 50, 50, "<--", "red");
  airplane = new Airplane(104, 85);

  createConsole()
  frameRate(30);




}
function draw() {
  background("green");
  pageNavigation(page)
  drawMouseLines();
  forward.draw();
  back.draw();
}


function mouseReleased() {
  
  mousePageNavigator()
  printToConsole(page)
}
function keyReleased() {
  //dT.keyCommands();

}
class Airplane {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  drawAirplane() {
    push()
    translate(this.x, this.y);
    translate(-104, -85);
    fill("white")

    strokeWeight(4);
    beginShape();
    vertex(205, 109);
    vertex(173, 84);
    vertex(57, 83);
    vertex(35, 68);
    vertex(27, 47);
    vertex(9, 47);
    vertex(26, 82);
    vertex(7, 82);
    vertex(7, 94);
    vertex(51, 104);
    vertex(204, 111);
    endShape();
    beginShape();
    vertex(140, 103);
    vertex(115, 102);
    vertex(115, 106);
    vertex(140, 107);
    vertex(141, 104);
    endShape();
    beginShape();
    vertex(142, 102);
    vertex(107, 89);
    vertex(105, 105);
    endShape();
    beginShape();
    vertex(7, 94);
    vertex(33, 94);
    vertex(17, 84);
    vertex(8, 74);
    vertex(2, 86);
    vertex(8, 95);
    endShape();
    beginShape();
    vertex(185, 96);
    vertex(163, 96);
    vertex(151, 86);
    endShape();
    pop()
  }
  moveAirplane() {
    this.x += 3

  }
}
