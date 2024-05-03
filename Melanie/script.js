
let page = 0;
let numPages = 3;
let myFont;



function preload() {
  sigmar = loadFont('SigmarOne-Regular.ttf')
 
}

function setup() {

  let myCanvas = createCanvas(1000, 800);
  myCanvas.parent("myCanvas");
  frameRate(1);
  background(114, 200, 237);

  createConsole("lines");

  textFont('sigmar');
  textSize(36);
  textAlign(CENTER, CENTER);  // the x and y for the text command are the center of the text box
noStroke();

}

function draw() {

  if (page == 0) drawPage0();
  if (page == 1) drawPage1();
  if (page == 2) drawPage2();
  if (page == 3) drawPage3();
  
  rectGradient(0, 0, width, 800, "deepskyblue", 'dodgerblue'  )
  
  road();
  sidewalk3();
  entrancetogarage();
  othersidewalk();
  baseofbus();
  door();
  seconddoor();
  windows();
  windows2();
  roof();
  sidesofroof();
  wheel();
  wheel2();
  centerofwheel();
  centerofwheel2();
  centerofwheel3();
  centerofwheel4();
  buslights();
  buslights2();
  platenumber();
  sidewalk();
  sidesofsidewalk();
  sidewalk2();
  head();
  hair();
  eye();
  
  displayPage(page);
  
 // drawMouseLines("black");
}


function isTouched(x, y, w, h, testX, testY) {
  if (testX > x && testX < x + w && testY > y && testY < y + h) {

    return true;
  } else {
    return false;
  }
}


function forward(x, y, w, h) {
  fill(252, 237, 121)
  rect(20,715,150,40);
  fill('gold')
  textSize(25);
  text('forward', 20+ 150 / 2, 715+ 40 / 2);
  if (isTouched(20, 715, 150, 40, mouseX, mouseY) && page < 3) {
    page += 1;

  }
}

function back(x, y, w, h) {
  fill(252, 237, 121)
  rect(724, 715, 150, 40);
  fill('gold');
  textSize(25)
  text('backward', 724 + 150 / 2, 715 + 40 / 2);
  if (isTouched(724, 715, 150, 40, mouseX, mouseY) && page > 0) {
    page -= 1;
  }
}

function displayPage(n) {
  if (n == 0) {
    drawPage0();
  } else if (n == 1) {
    drawPage1();
  } else if (n == 2) {
    drawPage2();
  } else if (n == 3) {
    drawPage3();
  } 
  
  if (n < 3) {
    forward(100, 100, 100, 50);
  }
  if (n > 0) {
    back(400, 100, 100, 50);
  }
}