function setup() {
  let myCanvas = createCanvas(800, 800);
  myCanvas.parent("myCanvas");
  
  createConsole("dots");

  noLoop();
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  
	noStroke();  // to turn stroke back on, use stroke('black')
}

function draw() {
  background("white");

  drawTopLeftEmoji();
  drawTopRightEmoji();
  drawBottomLeftEmoji();
  drawBottomRightEmoji();
}

function drawTopLeftEmoji() {
  fill("yellow");
  square(0, 0, 400); // upper left background

  // top left emoji: joy
	fill("Chocolate");
  circle(200, 200, 300); // head
	fill("black");
  circle(150, 170, 30);
	circle(264, 162, 60); //right eye
  arc(200, 266, 120, 50, 0, 180)
	
	fill("Chocolate");
 
  circle(264, 182, 70); // right eye smiley	
  fill('black');
  circle(265, 170, 30)
  stroke('black');
  strokeWeight(20);
  line(106, 152, 189, 153)

  // fill('black');
  // stroke('black');
  // strokeWeight(14);
  // triangle(196, 196, 172, 227, 220, 228) // nose
  // quad(105, 141,84, 139,122, 87, 136, 104) // left eyebrow
  // line(84, 155, 132, 90); //left eyebrow
  // noStroke(); // turn off stroke lines
}

function drawTopRightEmoji() {
  noStroke();
	fill('green');
  square(400, 0, 400); // upper right background
  //circle
  fill('yellow');
  circle(600, 200, 300);
  fill('GreenYellow');
  ellipse(600,300,100,50);
  rect(560,310,80,50);
  ellipse(600,360,100,30)
  //left eye
  stroke('black');
  strokeWeight(10);
  line(484, 121, 556, 153);
  line(556, 153, 492, 192);
  //right eye
  line(710, 119, 640, 150);
  line(640, 150, 710, 190);
  noStroke();
  
  
}

function drawBottomLeftEmoji() {	
	fill('DarkRed');
  square(0, 400, 400); // lower left background
  fill('OrangeRed');
  circle(200, 600, 300);
  //lefteye
  fill('Black');
  circle(140,550,30);
  stroke('black');
  strokeWeight(20);
  line(122, 506, 189, 551);
  noStroke();
  //righteye
  fill('black');
  circle(240,550,30);
  stroke('black');
  strokeWeight(20);
  line(191, 552, 255, 506);
  noStroke();
  //mouth
  stroke('black');
  strokeWeight(10);
  line(178, 668, 241, 633);
  line(240, 633, 273, 644);
  noStroke();
  

  
}

function drawBottomRightEmoji() {
	fill('blue');
  square(400, 400, 400); // lower right background
  fill('yellow')
  circle(600, 600, 300);
  fill('black');
  circle(600, 670, 130);
  fill('yellow');
  circle(600, 680, 130);
  fill('black');
  circle(550, 530, 30);
  circle(650, 530, 30);
  fill('DeepSkyBlue')
  circle(540, 550,10);
  triangle(536, 547,545, 550,542, 543);
  
  strokeWeight(1);
  
}
