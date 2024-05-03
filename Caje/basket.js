class basket {
   constructor(x1, y1, s1 = 1){
     this.x = x1;
     this.y = y1;
     this.size = s1;
     this.insideR = 117
     this.insideG = 87
     this.insideB = 39
   }

  drawBasket(){  
    push();
    translate(this.x,this.y);
    scale(this.size);
    strokeWeight(2);
    fill(168, 125, 61);
    arc(0, 0, 200, 200, 0, 3.14);
    noFill();
    strokeWeight(8);
    stroke(168, 125, 61);
    arc(0, 0, 195, 230, 3.14, 0);
    strokeWeight(2);
    fill(this.insideR, this.insideG, this.insideB);
    ellipse(0, 0, 200,50);
    pop();
  }

  setX(x1) {
    this.x = x1;
  }
  setY(y1) {
    this.y = y1;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }

  moveBasket(dx = 0, dy = 0) {
    this.dx = dx
    this.dy = dy 
 
    if (keyIsDown(37)) {
      this.dx = -7
    }
    if (keyIsDown(39)) {
      this.dx = 7
    }
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }
  
}
  