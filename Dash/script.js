clr=["red","blue","pink","yellow","orange"]
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  fill("white")
  square(width/2-200, width/2-200, 400);
  line(width/2-200, width/2-200,0,0);
  line(width/2+200, width/2-200,width,0,width,0);
  line(width/2-200, width/2+200,0,height);
  line(width/2+200, width/2+200,width,height);
  square(width/2-60, width/2+60, 150);
  square(width/2-43, width/2-40, 100);
  fill(clr[int(random(0,4))])
  square(width/2-34, width/2-30, 77);
  line(381,262,341,301);
  line(302,265,341,301);
  text(mouseX+", "+mouseY,20,20);
}

function mousePressed(){
  fill
text(mouseX+", "+mouseY,20,20);
}

function keyReleased(){

}

