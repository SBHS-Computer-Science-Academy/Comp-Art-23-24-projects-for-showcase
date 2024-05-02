function setup(){
  background(181, 114, 206)
}

function drawP0(){
  fill ("white");
  //head
  ellipse (400, 230, 140, 100);
  //clownNose
  ellipse (400, 240, 30, 30);
  fill ("black");
  //eyes
  ellipse (365, 225, 10, 10);
  ellipse (435, 225, 10, 10);
  //cheeks
  ellipse (350, 215, 16, 16);
  ellipse (450, 215, 16, 16);
  //hat
  ellipse (450, 303, 6, 6);
  fill ("white");
  triangle (435, 330, 465, 330, 450, 305);
  
  forward(400, 240, 30);
}