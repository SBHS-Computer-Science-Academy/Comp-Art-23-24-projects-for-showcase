//created by Johnston - Free to use in educational projects

function mousePageNavigator() {


  if (forward.clicked() && page < 5) {
    page += 1;
    airplane.x = 0;
  } else if (back.clicked() && page > 0) {
    page -= 1
    airplane.x = 0;
  }
}

function pageNavigation(page) {
  if (page <= 0) {
    drawP0();
  }
  else if (page == 1) {
    drawP1();
  }
  else if (page == 2) {
    drawP2();
  }
  else if (page == 3) {
    drawP3();
  }
  else if (page == 4) {
    drawP4();
  }
  else if (page >= 5) {
    drawP5();
  }
  if (page > 0) {
    back.draw();
  }
  if (page < 5) {
    forward.draw();
  }
}

function keyPageNavigator() {
  if (key == 'ArrowRight' && page < 5) {
    page += 1;
  }
  if (key == 'ArrowLeft' && page > 0) {
    page -= 1;
  }
}

function gradientVertical(x, y, w, h, clrStart, clrEnd, steps = 10) {
  for (let i = 0; i < steps; i++) {
    fill(lerpColor(clrStart, clrEnd, i / steps));
    rect(x + (i * w / steps), y, w / steps, h)
  }
}

function gradientHorizontal(x, y, w, h, clrStart, clrEnd, steps = 10) {
  noStroke();
  for (let i = 0; i < steps; i++) {
    fill(lerpColor(clrStart, clrEnd, i / steps));
    rect(x, y + (i * h / steps), w, h / steps)
  }
}

function gradientEllipse(x, y, w, h, clrStart, clrEnd, steps = 10) {
  for (let i = 0; i < steps; i++) {
    fill(lerpColor(clrStart, clrEnd, i / steps));
    ellipse(x, y, w - (i * w / steps), h - (i * w / steps))
  }
}

function gradientRect(x, y, w, h, clrStart, clrEnd, steps = 10) {
  for (let i = 0; i < steps; i++) {
    fill(lerpColor(clrStart, clrEnd, i / steps));
    rect((x + (i * w / steps)) / 2, (y + (i * h / steps)) / 2, w - (i * w / steps), h - (i * h / steps))
  }
}

function isoVertTri(x, y, w = 100, h = 100) {
  triangle(x, y, x + w, y, x + w / 2, y + h);

}

function isoHorizTri(x, y, w = 100, h = 100) {
  triangle(x, y, x, y + h, x + w, y + h / 2);
}

function rightTriangle(x, y, w = 100, h = 100) {
  triangle(x, y, x + w, y, x, y + h);
}

function equilateral(x, y, s, orient = 'up') {
  if (orient == 'up') {
    //add code here for up triangle
    triangle(x, y, x + s, y, x + s / 2, y - s * sqrt(3) / 2);
  } else if (orient == 'down') {
    //add code here for down triangle
    triangle(x, y, x + s, y, x + s / 2, y + s * sqrt(3) / 2);
  } else if (orient == 'right') {
    //add code here for down triangle
    triangle(x, y, x, y + s, x + s * sqrt(3) / 2, y + s / 2);
  } else {
    //add code here for down triangle
    triangle(x, y, x, y + s, x - s * sqrt(3) / 2, y + s / 2);
  }
}

function drawVanishingLines(vanishingX, vanishingY, r = 15, clr = color(255, 0, 0), s = 1) {
  push();
  angleMode(DEGREES);
  translate(vanishingX, vanishingY);
  stroke(clr);
  strokeWeight(s)
  for (let a = 0; a < 360; a = a + r) {
    line(0, -3 * width, 0, 0 + 3 * width);
    rotate(r);
  }
  pop();
}

function getColor(startColor, endColor, val, startVal, endVal) {
  if (typeof startColor === "string") startColor = color(startColor);
  if (typeof endColor === "string") endColor = color(endColor);

  let scaledValue = map(val, startVal, endVal, 0, 1);
  let thisColor = lerpColor(startColor, endColor, scaledValue);
  return thisColor;
}

function rectGradient(x, y, w, h, topColor, bottomColor, direction = "horizontal") {
  push();
  strokeWeight(1);
  if (direction == "horizontal") {
    for (let thisY = int(y); thisY <= y + h; thisY += 0.5) {
      let thisColor = getColor(topColor, bottomColor, thisY, y, y + h);
      stroke(thisColor);
      line(x, thisY, x + w, thisY);
    }
  } else {
    for (let thisX = int(x); thisX <= x + w; thisX += 0.5) {
      let thisColor = getColor(topColor, bottomColor, thisX, x, x + w);
      stroke(thisColor);
      line(thisX, y, thisX, y + h);
    }
  }
  pop();
}

function circleGradient(x, y, d, outerColor, innerColor, innerD = 0) {
  push();
  noStroke();
  for (let thisD = int(d); thisD > innerD; thisD -= 0.5) {
    let thisColor = getColor(outerColor, innerColor, thisD, d, innerD);
    fill(thisColor);
    circle(x, y, thisD);
  }
  pop();
}

function circleGradientLinear(x, y, diameter, leftColor, rightColor, direction = "horizontal") {
  push();
  strokeWeight(1);
  let radius = diameter / 2;
  for (let thisR = -radius; thisR <= radius; thisR += 0.5) {
    let thisColor = getColor(leftColor, rightColor, thisR, -radius, radius);
    stroke(thisColor);
    if (direction == "horizontal") {
      let thisWidth = sqrt(radius ** 2 - thisR ** 2);
      line(x - thisWidth, y + thisR, x + thisWidth, y + thisR);
    }
    else {
      let thisHeight = sqrt(radius ** 2 - thisR ** 2);
      line(x + thisR, y - thisHeight, x + thisR, y + thisHeight);
    }
  }
  pop();
}

function vertexGradient(x, y, centerX, centerY, startColor, endColor, center = "point") {

  push();
  noStroke();
  for (let thisScale = 1; thisScale > 0; thisScale -= 0.01) {
    push();
    let thisColor = getColor(startColor, endColor, thisScale, 1, 0);
    fill(thisColor);

    translate(centerX, centerY);
    if (center == "point") scale(thisScale);
    else if (center == "horizontal") scale(1, thisScale);
    else scale(thisScale, 1);
    translate(-1 * centerX, -1 * centerY);

    beginShape();
    for (let i = 0; i < x.length; i++) {
      vertex(x[i], y[i]);
    }
    endShape();
    pop();
  }
  pop();
}

function curveVertexGradient(x, y, centerX, centerY, startColor, endColor, center = "point") {

  push();
  noStroke();

  for (let thisScale = 1; thisScale > 0; thisScale -= 0.01) {
    push();
    let thisColor = getColor(startColor, endColor, thisScale, 1, 0);
    fill(thisColor);

    translate(centerX, centerY);
    if (center == "point") scale(thisScale);
    else if (center == "horizontal") scale(1, thisScale);
    else scale(thisScale, 1);
    translate(-1 * centerX, -1 * centerY);
    beginShape();
    for (let i = 0; i < x.length; i++) {
      curveVertex(x[i], y[i]);
    }
    endShape();
    pop();
  }
  pop();
}