function setup() {
  let myCanvas = createCanvas(1000, 800);
  myCanvas.parent("myCanvas");

  createConsole("lines");

  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
}

function draw() {
  clear();
  background("white");
  text("Create a cityscape using for loops and variables.", 500, 400)
  
  drawMouseLines("black");
  rectGradient(0, 0, 1000, 800, color(14,37,66), color(1,3,5), "horizontal", 100)
  fill(50)
  rect(60,200,120,600)
  fill(40)
  rect(285,300,71,500)
  fill(100)
  rect(444,403,99,486)
  fill(100)
  rect(148,400,109,400)
  fill(100)
  rect(148,499,109,500)
  
  fill(100)
  rect(30,400,200,400)
  fill(100)
  rect(300,400,109,466)
  fill(100)
  rect(444,403,99,486)
  fill(100)
  rect(148,400,109,400)
  fill(100)
  rect(148,499,109,590)
  fill(100)
  rect(139,366,99,434)
  fill(130)
  fill(255);

  for(let i=150;i<220;i=i+20){
    for(let j=400;j<800;j=j+20){
      rect(i,j,15,15)
    }
  }
  
  for(let i=310;i<380;i=i+20){
    for(let j=410;j<800;j=j+20){
      rect(i,j,15,15)
    }
  }

  for(let i=455;i<535;i=i+20){
    for(let j=410;j<800;j=j+20){
      rect(i,j,15,15)
    }
  }
}



