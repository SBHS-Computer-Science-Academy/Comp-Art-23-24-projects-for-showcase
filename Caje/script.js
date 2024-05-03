let Level = 0;
let Score = 0;

function setup() {
  createCanvas(800,800);
  background(255);
  let x = width / 2;
  let y = -200;
  let x1 = width/2;
  let y1 = 700;
  
  EGG1 = new egg(x, y, 0.2);
  BSK1 = new basket(x1, y1, 0.5); 
}

function draw() {
  background(255);
 
  
  if (Level == 0) {
    drawlevel1();
  }
  if (Level == 1) {
    drawlevel2();
  }
  if (Level == 2) {
    drawlevel3();
  }
  if (Level == 3) {
    drawlevel4();
  }
  if (Level == 4) {
    drawlevel5();
  }
  if (Level == 5) {
    drawlevel6();
  }
  if (Level == 6) {
    drawlevel7();
  }
  if (Level == 7) {
    drawlevel8();
  }
  if (Level == 8) {
    drawlevel9();
  }
  if (Level == 9) {
    drawlevel10();
  }
}