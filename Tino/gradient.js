


function getColor(startColor, endColor, val, startVal, endVal) {
  if (typeof startColor === "string") startColor = color(startColor);
  if (typeof endColor === "string") endColor = color(endColor);

  let scaledValue = map(val, startVal, endVal, 0, 1);
  let thisColor = lerpColor(startColor, endColor, scaledValue);
  return thisColor;
}

function rectGradient(x, y, w, h, startColor, endColor, direction = "horizontal", numSteps = 100) {
  push();
  noStroke();
  if (direction.toLowerCase().includes("h")) {
    numSteps = min(numSteps, h * 2);
    for (let i = 0; i < numSteps; i += 1) {
      let stepSize = h / numSteps;
      let thisY = y + i * stepSize;
      let thisColor = getColor(startColor, endColor, thisY, y, y + h);
      fill(thisColor);
      rect(x, thisY, w, stepSize);
    }
  } else if (direction.toLowerCase().includes("v")) {
    numSteps = min(numSteps, w * 2);
    for (let i = 0; i < numSteps; i += 1) {
      let stepSize = w / numSteps;
      let thisX = x + i * stepSize;
      let thisColor = getColor(startColor, endColor, thisX, x, x + w);
      fill(thisColor);
      rect(thisX, y, stepSize, h);
    }
  } else {
    numSteps = min(numSteps, min(w, h) * 2);

    for (let i = 0; i < numSteps; i += 1) {
      let xStepSize = w / 2 / numSteps;
      let yStepSize = h / 2 / numSteps;
      let thisX = x + i * xStepSize;
      let thisY = y + i * yStepSize;
      let thisW = w - i * xStepSize * 2;
      let thisH = h - i * yStepSize * 2;
      let thisColor = getColor(startColor, endColor, i, 0, numSteps);
      fill(thisColor);
      rect(thisX, thisY, thisW, thisH);
    }

  }
  pop();
}

function circleGradient(x, y, diameter, outerColor, innerColor, innerDiameter = 0, numSteps = 100) {
  push();
  noStroke();
  numSteps = min(numSteps, (diameter - innerDiameter) * 2);
  let stepSize = (diameter - innerDiameter) / numSteps;
  for (let i = 0; i < numSteps; i += 1) {
    let thisD = diameter - i * stepSize;
    let thisColor = getColor(outerColor, innerColor, thisD, diameter, innerDiameter);
    fill(thisColor);
    circle(x, y, thisD);
  }
  pop();
}

function circleGradientLinear(x, y, diameter, startColor, endColor, direction = "horizontal") {
  push();
  strokeWeight(1);
  let radius = diameter / 2;
  for (let thisR = -radius; thisR <= radius; thisR += 0.5) {
    let thisColor = getColor(startColor, endColor, thisR, -radius, radius);
    stroke(thisColor);
    if (direction.toLowerCase().includes("horizontal")) {
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