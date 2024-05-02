let pageNumber = 0
function setup() {
  createCanvas (800, 600)
  // background('pink')
  frameRate (10);
}

function draw() {
//face
 displayPage(pageNumber)
  
 

}

// class Clowny{

//   constructor(x,y,clr){
//       this.x = x
//       this.y = y
//       this.clr = clr
//   }
  
  // function draw(){
  //   push();
  //   fill ("white");
  //   ellipse (400, 230, 140, 100);
  //   ellipse (400, 240, 30, 30);
  //   fill ("black");
  //   ellipse (365, 225, 10, 10);
  //   ellipse (435, 225, 10, 10);

  //   forward(400, 240, 30); 
  // }
// }

function isTouched (x, y, d, testX, testY) {
  if (dist(x, y, testX,testY) < d/2) {
    return true;
     } else {
    return false;
     }
}

function forward(x, y, d) {


  if (isTouched(x, y, d, mouseX, mouseY) && pageNumber < 5 && mouseIsPressed) {
    pageNumber += 1;  
  }
}

function back(x, y, w, h) {


  if (isTouched(x, y, w, h, mouseX, mouseY) && pageNumber > 0 && mouseIsPressed) {
    pageNumber -= 1;
  }
}

function displayPage(n) {
  if (n == 0) {
    drawP0();
  } else if (n==1) {
    drawP1();
  } else if (n==2) {
    drawP2();
  } else if (n==3) {
    drawP3();
  } else if (n==4) {
    drawP4();
  } else if (n==5) {
    drawP5();
  }
  
  // if (n < 5) {
  //   forward();
  // }
  // if (n > 0) {
  //   back();
  // }
}

function mousePressed(){

}

function keyReleased(){

}

