let page = 2;
let numPages = 3;
let myFont; 

function draw() {
 background(22);
   if (page == 0) drawPage0();
   if (page == 1) drawPage1();
   if (page == 2) drawPage2();
   if (page == 3) drawPage3();

  drawMouseLines("black");
}

function keyReleased() {

  if (key == "ArrowRight" && page < numPages) page += 1
  if (key == "ArrowLeft" && page > 1) page -= 1
 }

function setup() {
  let myCanvas = createCanvas(1000, 800,);
  myCanvas.parent("myCanvas");
  
  createConsole();

  textAlign(CENTER, CENTER);

  frameRate(60); // prevent a p5.js bug that changes the framerate when you click
}