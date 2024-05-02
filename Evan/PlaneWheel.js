class PlaneWheel {
  constructor(x, y, s, angle) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.angle = angle;
    angleMode(DEGREES);
  }

  draw() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    scale(this.s);
    stroke(50);
    fill(100);
    rect(0, 0, 20, 150);
    stroke(150);
    fill(225);
    circle(10, 150, 60);
    pop();
  }

  planeWheelUp(){
    if(this.angle > -90) {
      this.turn(-5);
    }
  }
  
  turn(a){
    this.angle +=a;
    print(this.angle)
  }

  setX(x) {
    this.x = x;
  }
  setY(y) {
    this.y = y;
  }
  setS(s) {
    this.s = s;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getS() {
    return this.s;
  }

  movePlaneWheel(dx = 0, dy = 0) {
    this.x = this.x + dx;
    this.y = this.y + dy;
  } 
}