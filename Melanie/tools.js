//created by Johnston - Free to use in educational projects

function mousePageNavigator(page) {
  if (forward.clicked() && page < 5) {
    page += 1;
  } else if (back.clicked() && page > 0) {
    page -= 1
  }
  return page
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
  return page;
}

function keyPageNavigator(page) {
  if (key == 'ArrowRight' && page < 5) {
    page += 1;
  }
  if (key == 'ArrowLeft' && page > 0) {
    page -= 1;
  }
  return page;
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

