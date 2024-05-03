/*

Example gradient usage.  It is  recommended not to continually redraw gradients, as they can slow down your framerate due to a high number of computations.  Either put them in setup function or use noLoop();

function setup() {
	createCanvas(1000, 600);

	rectGradient(0, 0, width, 200, "magenta", "crimson"); // sky with sunset
  circleGradient(width / 2, 200, 150, "orangeRed", "yellow"); // sun
	circleGradientLinear(300, 200, 100, "black", "sienna", "vertical"); // left round hill
  circleGradientLinear(700, 200, 100, "sienna", "black", "vertical"); // right round hill
	rectGradient(0, 200, width, 400, "green", "black"); // foreground with shadows

	vertexGradient([15, 89, 193], [200, 50, 200], 15, 200, "sienna", "black"); // left mountain
	curveVertexGradient([815, 815, 889, 993, 993], [200, 200, 100, 200, 200], 993, 200, "sienna", "black"); // right hill
}

*/

// gets a color in between the startColor and endColor by scaling the values
function getColor(startColor, endColor, val, startVal, endVal) {
	if (typeof startColor === "string") startColor = color(startColor);
	if (typeof endColor === "string") endColor = color(endColor);

	let scaledValue = map(val, startVal, endVal, 0, 1);
	let thisColor = lerpColor(startColor, endColor, scaledValue);
	return thisColor;
}

// draws a rectangle with a horizontal gradient, going from startColor at top to endColor to bottom
// parameters:
//  x = x of upper left corner
//  y = y of upper left corner
//  w = width of rectangle
//  h = height of rectangle
//  topColor = color at top of rectangle
//  bottomColor = color at bottom of rectangle
//  direction = "horizontal" or "vertical"
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

// draws a circle with a radial gradient, going from startColor at outside to endColor on inside
// parameters:
//   x = x of circle center
//   y = y of circle center
//   d = diameter of circle
//   outerColor = outside color of circle
//   innerColor = inside color of circle
//   innerD = diameter of inside circle (default is 0 so it goes to the center)
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

// draws a circle with a horizontal gradient, going from leftColor
// parameters:
//  x = x of circle center
//  y = y of circle center
//  diameter = diameter of circle
//  leftColor = color at left of circle
//  rightColor = color at right of circle
//  direction = "horizontal" or "vertical"
function circleGradientLinear(x, y, diameter,  leftColor, rightColor, direction = "horizontal") {
	push();
	strokeWeight(1);
  let radius = diameter/2;
	for (let thisR = -radius; thisR <= radius; thisR += 0.5) {
		let thisColor = getColor(leftColor, rightColor, thisR, -radius, radius);
		stroke(thisColor);
    if (direction == "horizontal") {
          let thisWidth = sqrt(radius**2 - thisR**2);
      line(x - thisWidth, y + thisR, x + thisWidth, y + thisR);
    }
    else {
       let thisHeight = sqrt(radius**2 - thisR**2);
		 line(x + thisR, y - thisHeight, x + thisR, y + thisHeight);
    }
	}
	pop();
}

// draws a shape made of a list of vertices, going from startColor at outside to endColor at the centerX, centerY
// parameters:
//   x = array of x vertices in square brackets e.g. [1, 2, 3]
//   y = array of y vertices in square brackets e.g. [100, 200, 300]
//   centerX = x value of the center of the shape
//   centerY = y value of the center of the shape
//   startColor = outside color of shape
//   endColor = inside color of shape
//   center = "point", "horizontal", or "vertical"
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

// draws a shape made of a list of curve vertices, going from startColor at outside to endColor at the centerX, centerY
// parameters:
//   x = array of x vertices in square brackets e.g. [1, 2, 3]
//   y = array of y vertices in square brackets e.g. [100, 200, 300]
//   centerX = x value of the center of the shape
//   centerY = y value of the center of the shape
//   startColor = outside color of shape
//   endColor = inside color of shape
//   center = "point", "horizontal", or "vertical"
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