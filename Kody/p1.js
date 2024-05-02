function drawP1(){
  background(86, 168, 219);
  Airportfloor();
  floorDecorations();
  gateLine1();
  gateLine2();
  gateLine3();
  gateLine4();
  gateLine5();
  gateLine6();
  gateLine7();
}

function Airportfloor() {
fill(161, 192, 201);
beginShape();
vertex(402,314);
vertex(400,400);
vertex(1,400);
vertex(0,314);
endShape();
}

function floorDecorations() {
fill(66, 112, 255);
beginShape();
vertex(63,342);
vertex(108,366);
vertex(157,345);
vertex(176,371);
vertex(228,343);
vertex(256,373);
vertex(299,344);
vertex(350,367);
vertex(404,338);
vertex(399,375);
vertex(343,343);
vertex(297,373);
vertex(250,341);
vertex(214,369);
vertex(177,338);
vertex(142,372);
vertex(101,334);
vertex(49,367);
vertex(3,338);
endShape();
}

function gateLine1() {
fill(188, 224, 227);
beginShape();
vertex(0,315);
vertex(399,314);
vertex(400,293);
vertex(0,291);
vertex(1,316);
endShape();
}

function gateLine2() {
fill(188, 224, 227);
beginShape();
vertex(1,218);
vertex(400,215);
vertex(399,194);
vertex(0,192);
vertex(1,219);
endShape();
}

function gateLine3() {
fill(188, 224, 227);
beginShape();
vertex(0,105);
vertex(400,95);
vertex(399,70);
vertex(0,74);
vertex(1,106);
endShape();
}

function gateLine4() {
fill(188, 224, 227);
beginShape();
vertex(52,292);
vertex(62,1);
vertex(89,1);
vertex(96,291);
vertex(52,290);
endShape();
}

function gateLine5() {
fill(188, 224, 227);
beginShape();
vertex(157,292);
vertex(166,1);
vertex(193,0);
vertex(195,292);
vertex(157,291);
endShape();
}

function gateLine6() {
fill(188, 224, 227);
beginShape();
vertex(262,293);
vertex(268,1);
vertex(297,1);
vertex(295,292);
vertex(263,292);
endShape();
}

function gateLine7() {
fill(188, 224, 227);
beginShape();
vertex(379,293);
vertex(380,1);
vertex(401,0);
vertex(400,293);
vertex(380,294);
endShape();
}