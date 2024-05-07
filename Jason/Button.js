class Button {
  //created by Johnston - Free to use in educational projects
  constructor(x, y, w, h, label = ' ', clr = color(240, 240, 240, 255)) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.label = label;
    this.clr = clr;
    textAlign(CENTER);
    rectMode(CENTER);
  }

  draw() {
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h, this.h / 10);
    fill(0);
    text(this.label, this.x, this.y + this.h / 12);
  }

  top() {
    return this.y - this.h / 2;
  }

  bottom() {
    return this.y + this.h / 2;
  }

  left() {
    return this.x - this.w / 2;
  }

  right() {
    return this.x + this.w / 2;
  }

  hasMouseAbove() {
    let testRightSide = (mouseX < this.right());
    let testLeftSide = (mouseX > this.left());
    let testBottomSide = (mouseY < this.bottom());
    let testTopSide = (mouseY > this.top());

    if (testRightSide && testLeftSide && testTopSide && testBottomSide) {
      return true;
    }
    return false;
  }

  clicked() {

    return this.hasMouseAbove();
  }

}