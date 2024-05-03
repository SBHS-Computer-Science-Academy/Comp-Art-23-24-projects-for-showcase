//created by Johnston - Free to use in educational projects
class Star {
  constructor(x, y, s) {
    this.s = s;
    this.x = x;
    this.y = y;
    angleMode(DEGREES);
  }

  draw() {
    noStroke();
    for (let i = 0; i < 360; i += 72) {
      push();
      translate(this.x, this.y);
      rotate(180);
      rotate(i);
      let red = random(245, 255);
      let green = random(245, 255);
      let blue = random(245, 255);
      let opacity = random(50, 200);
      fill(red, green, blue, opacity);
      triangle(
        random(-this.s / 3),
        0,
        random(this.s / 3),
        0,
        0,
        random(this.s)
      );
      pop();
    }
  }
}

class StarFilledSky {
  constructor(x, y, w, h, n, s = 4) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.n = n;
    this.s = s;
    this.stars = [];
    this.setStarLocations();
  }

  setStarLocations() {
    for (let i = 0; i < this.n; i += 1) {
      this.stars.push(
        new Star(
          random(this.x, this.x + this.w),
          random(this.y, this.y + this.h),
          this.s
        )
      );
      //startX.push(random(x, x + w));
      //starty.push(random(y, y + h));
    }
  }

  drawStars() {
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].draw();
    }
  }
}

//(x,y) give the upper left corner of the region that you want stars drawn in
//w gives the width of the rectangle that you wantto draw stars in
//h gives the height of the rectangle that you wantto draw stars in
//n gives the number of stars you want to put in the givin region
//function setStarLocations(n = 25, x = 0, y = 0, w = width, h = height / 3) {
//   for (let i = 0; i < n; i = i + 1) {
//     //random(takes an lower bound and an upper bound as parameters)
//     startX.push(random(x, x + w));
//     starty.push(random(y, y + h));
//   }
// }

// function drawStars() {
//   for (let i = 0; i < starX.length; i++) {
//     star(starX[i], starY[i]);
//   }
// }

// function star(x, y, s = 5) {
//   nostroke();
//   let red = random(245, 255);
//   let green = random(245, 255);
//   let blue = random(245, 255);
//   let opacity = random(100, 200);
//   fill(red, green, blue, opacity);
//   ellipse(x, y, random(1.5 * s, 3 * s), s);
//   ellipse(x, y, s, random(1.5 * s, 3 * s));
// }
