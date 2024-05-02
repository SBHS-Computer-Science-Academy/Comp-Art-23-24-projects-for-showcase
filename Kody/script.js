
let page = 0;

function setup() {
  createCanvas(400, 400);
  dt=new DrawingTool();

}

function draw() {
  pageNavigation(page);
  dt.drawMouseLines();
}

function mousePressed() {
  dt.addPoint(mouseX, mouseY);
}

function keyReleased() {
  print (key)
  if (key == 'ArrowRight') {
    page++;
  } else if (key == 'ArrowLeft') {
    page--;
  }
  dt.keyCommands();
}
