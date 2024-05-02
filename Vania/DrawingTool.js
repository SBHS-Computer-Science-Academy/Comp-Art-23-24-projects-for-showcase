//created by Johnston - Free to use in educational projects

class DrawingTool {
  constructor() {
    this.points = [];
    this.curveV = false;
  }

  addPoint() {
    this.points.push(mouseX);
    this.points.push(mouseY);
  }

  keyCommands() {
    if (key == "p") {
      this.displayPoints();
    } else if (key == "Backspace") {
      this.points.pop();
      this.points.pop();
    } else if (key == "c") {
      this.curveV = true;
    } else {
      this.curveV = false;
    }
  }

  drawMouseLines() {
    stroke(0);
    fill(200, 100);
    // text("Click and you will draw an irregular shape.", 10, 20);
    // text("Press 'c' to get a curve and 'v' for straight lines.", 10, 40);
    // text("Press 'p' to show the function that draws the shape.", 10, 60);
    // text("Click the </> in the upper right to see or get this code for your project.",10,80);
    if (this.points.length >= 4) {
      beginShape();
      for (let i = 0; i < this.points.length; i += 2) {
        if (this.curveV) {
          curveVertex(this.points[i], this.points[i + 1]);
        } else {
          vertex(this.points[i], this.points[i + 1]);
        }
      }
      endShape();
    }
  }

  displayPoints() {
    let fctnLine = [];
    fctnLine.push(createElement("p", "function RenameMeNow!() {"));

    fctnLine.push(createElement("p", "fill('black');"));
    fctnLine.push(createElement("p", "beginShape();"));

    if (this.points.length >= 4) {
      for (let i = 2; i < this.points.length; i += 2) {
        if (this.curveV) {
          //console.log("  curveVertex(" + this.points[i] + "," + this.points[i + 1] + ");");

          fctnLine.push(
            createElement(
              "p",
              "curveVertex(" + this.points[i] + "," + this.points[i + 1] + ");"
            )
          );
        } else {
          //console.log("  vertex(" + this.points[i] + "," + this.points[i + 1] + ");")

          fctnLine.push(
            createElement(
              "p",
              "vertex(" + this.points[i] + "," + this.points[i + 1] + ");"
            )
          );
        }
      }
      fctnLine.push(createElement("p", "endShape();"));
      fctnLine.push(createElement("p", "}"));
    }

    console.log("function RenameMeNow() {");
    console.log("  beginShape();");
    if (this.points.length >= 4) {
      for (let i = 0; i < this.points.length; i += 2) {
        if (this.curveV) {
          console.log("  curveVertex(" + this.points[i] + "," + this.points[i + 1] + ");");
        } else {
          console.log("  vertex(" + this.points[i] + "," + this.points[i + 1] + ");");
        }
      }
      console.log("  endShape();");
      console.log("}");
    }
  }
}
