function startScreen() {
   background(0);
      fill(255);
    textFont(spice);
    angleMode(DEGREES);
      textSize(65);
  fill('orange');
      text("PAC VS GHOST", width/2, height/4);
    PlayButton.draw();
}

function mousePressed() {
  if (PlayButton.clicked()) {
    console.log("Button1 is pressed");
    // Add your logic for button click action here
  }
}

