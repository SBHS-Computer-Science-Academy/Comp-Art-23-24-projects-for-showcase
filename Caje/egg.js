

class egg {
  constructor(x, y, s = 1) {
  this.x = x;
  this.y = y;
  this.size = s;
  this.angle = 0;
  }

drawEgg(){
  push();
  translate(this.x, this.y);
  scale(this.size);
  rotate(this.angle);
  angleMode(RADIANS);
  stroke(0);
  strokeWeight(1);
  fill(247, 242, 198);
  ellipse(0, 0, 200, 280);
  pop();
}
  
  setX(x) {
    this.x = x;
  }
  setY(y) {
    this.y = y;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }

  moveEgg(dx1 = 0, dy1 = 0, rotate = 0) {
    this.x = this.x + dx1;
    this.y = this.y + dy1;
    this.angle = this.angle + rotate;
    this.checkForCatch()
    if (this.y > 850) {
      this.setY(-200);
    }
  }


  checkForCatch(){
    let pixel = get(this.x, this.y);

    if(pixel[0] == BSK1.insideR && pixel[1] == BSK1.insideG && pixel[2] == BSK1.insideB){
      this.x = random(0, width);
      this.y = -200;
      Score = Score + 150;
    }
  }






}