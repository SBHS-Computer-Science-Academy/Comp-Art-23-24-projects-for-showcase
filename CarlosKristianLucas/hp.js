// class HockeyPusher {
//   constructor(x, y, m, a, b, c, d) {
//     this.x = x;
//     this.y = y;
//     this.m= m // determines if you're using awsd or arrow keys; use 0 to use arrow keys/ use 1 to use awsd 
//     this.a = a
//     this.b = b;
//     this.c= c;
//     this.d= d;
//   }

//   drawHockeyPusher() {
//     push();
//     translate(this.x, this.y);
//     strokeWeight(4);
//  stroke(252, 18, 18);
//  fill(5, 5, 5, 0);
//  ellipse(100, 100, 75, 75);
//     pop();
//   }

//   setX(x) {
//     this.x = x;
//   }

//   setY(y) {
//     this.y = y;
//   }

//   getX() {
//     return this.x;
//   }

//   getY() {
//     return this.y;
//   }



//   animateHockeyPusher() {
//     this.drawHockeyPusher(this.x, this.y, this.m, this.a, this.b, this.c, this.d);;

//     if (keyIsDown(39) && this.m ==0 ) this.x += 10;//right
//     if (keyIsDown(37) && this.m ==0 ) this.x -= 10;//left
//     if (keyIsDown(40) && this.m ==0 ) this.y += 10;//up
//     if (keyIsDown(38) && this.m ==0 ) this.y -= 10;//down

//     if (keyIsDown(39) && this.m ==0 && this.a == this.x ) this.x -= 10;//right wall
//     if (keyIsDown(37) && this.m ==0 && this.b == this.x ) this.x += 10;// left wall
//     if (keyIsDown(40) && this.m ==0 && this.c == this.y ) this.y -= 10;//bottom wall
//     if (keyIsDown(38) && this.m ==0 && this.d == this.y ) this.y += 10;//top wall
   
    
//     if (keyIsDown(68) && this.m ==1 && this.a == this.x) this.x -= 10;

//     if (keyIsDown(68) && this.m == 1) this.x += 10;//right
//     if (keyIsDown(65) && this.m == 1) this.x -= 10;//left
//     if (keyIsDown(83) && this.m == 1) this.y += 10;//up
//     if (keyIsDown(87) && this.m == 1) this.y -= 10;//down


//   }

// }


class G {
  constructor(x, y, a, b, c, d) {
    this.x = x;
    this.y = y;
    
    this.a = a;//parameters where it tests the hockey puck 
    this.b = b;
    this.c= c;
    this.d= d;
  }

  drawG() {
    push();
    translate(this.x, this.y);
    strokeWeight(4);
 stroke(195, 5, 237);
 fill(5,5,5, 0)
    rect(0,0, 100, 150);
    
    pop();
  }

  setX(x) {
    this.x = x;0
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

   goalTest(){
    this.drawG(hPuck.x, hPuck.y, this.a, this.b, this.c, this.d);
     
     if (hPuck.x < this.a && hPuck.x > this.b && hPuck.y < this.c && hPuck.y > this.d ){
       goal = true
     } else {
       goal = false
     }
  }

}