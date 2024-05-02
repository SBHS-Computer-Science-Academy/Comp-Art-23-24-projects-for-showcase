class PawnGuy {
  constructor(x, y, s, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.s = s;
 }

  draw() {
    push();
    translate(this.x, this.y);
    scale(this.s);
    translate(-50,-160);
    stroke(153, 117, 0);
    strokeWeight(10);
    fill("yellow");
    circle(100,100,120);
    stroke(0, 0, 127);
    fill(this.color);
    rect(50,160,100,150,40,40,5,5);
    pop();
  }

  setX(x){
    this.x = x;
  }
  setY(y){
    this.y = y;
  }
  setS(s){
    this.s = s;
  }
  setColor(color){
    this.color = color;
  }
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
  getS(){
    return this.s;
  }
  getColor(){
    return this.color;
  }

  movePawnGuy (dx=0,dy=0){
    this.x = this.x+dx;
    this.y = this.y+dy;
  }
}