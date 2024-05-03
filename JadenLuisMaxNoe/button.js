class Button {
  //created by Johnston - Free to use in educational projects
  constructor(x,y,w,h,label=' ',clr = color){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.label = label;
    this.clr = clr;

  }

  draw(){
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h,this.h/10);
    fill(0);
  }

  top(){
    return this.y;
  }

  bottom(){
    return this.y+this.h;
  }

  left(){
    return this.x;
  }

  right(){
    return this.x+this.w;
  }

  hasMouseAbove(){
    let testRightSide = (mouseX<this.right());
    let testLeftSide = (mouseX>this.left());
    let testBottomSide = (mouseY<this.bottom());
    let testTopSide = (mouseY>this.top());

    if(testRightSide && testLeftSide && testTopSide && testBottomSide){
      return true;
    }
    return false;
  }

  clicked(){
    return this.hasMouseAbove() && mouseIsPressed;
  }

}