class Plane {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }

  draw() {
    push();
    translate(this.x, this.y);
    //translate(-540, -115);
    scale(this.s);
    strokeWeight(5);
    stroke("gray");
    fill("white");
    rightTriangle(450,100-20,-50,-50);
    rightTriangle(650,135,50,-50);
    stroke(0, 57, 107);
    fill(47, 135, 212);
    rightTriangle(670,135,-90,-120);
    stroke("gray");
    fill("white")
    rect(380, 65, 300, 70, 35,15,5,35);
    stroke(77, 172, 201);
    fill(119, 221, 252);
    for(x = 430; x < 600; x = x += 25){
        rect(x+10,80,15,30,7)
    }
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
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
  getS(){
    return this.s;
  }

  movePlane(dx=0,dy=0){
    this.x = this.x+dx;
    this.y = this.y+dy;
  }
}