

function collision() {

// Iterate over the obstacles
for (let i = 0; i < rectangles.length; i++) {
  let rectangle = rectangles[i];

  // Draw the obstacle rectangle
  fill(255, 0, 0);
  rect(rectangle.x, rectangle.y, rectangle.rectWidth, rectangle.rectHeight);
}
}

// class Rectangle {
//   constructor(x, y, rectWidth, rectHeight) {
//     this.x = x;
//     this.y = y;
//     this.rectWidth = rectWidth;
//     this.rectHeight = rectHeight;
//   }
// }