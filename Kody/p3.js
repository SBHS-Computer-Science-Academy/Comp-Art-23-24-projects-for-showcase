function drawP3(){
  background(130, 188, 255);
  airplaneRoad();
  yellowPaint1();
  yellowPaint2();
  yellowPaint3();
  yellowPaint4();
  AirplaneBody();
  AirplaneWing1();
}

function airplaneRoad() {
fill(71, 71, 71);
beginShape();
vertex(0,305);
vertex(399,304);
vertex(399,399);
vertex(0,399);
vertex(1,307);
endShape();
}

function yellowPaint1() {
fill('yellow');
beginShape();
vertex(17,335);
vertex(16,367);
vertex(80,370);
vertex(80,336);
vertex(18,336);
endShape();
}

function yellowPaint2() {
fill('yellow');
beginShape();
vertex(141,369);
vertex(197,369);
vertex(198,338);
vertex(141,337);
vertex(142,371);
endShape();
}

function yellowPaint3() {
fill('yellow');
beginShape();
vertex(263,344);
vertex(268,373);
vertex(316,372);
vertex(315,347);
vertex(263,344);
endShape();
}

function yellowPaint4() {
fill('yellow');
beginShape();
vertex(399,351);
vertex(398,350);
vertex(350,352);
vertex(353,376);
vertex(399,376);
vertex(400,351);
endShape();
}

function AirplaneBody() {
fill('white');
beginShape();
vertex(97,233);
vertex(101,218);
vertex(125,201);
vertex(137,200);
vertex(158,200);
vertex(171,200);
vertex(193,202);
vertex(210,205);
vertex(224,205);
vertex(262,161);
vertex(283,159);
vertex(263,208);
vertex(257,216);
vertex(243,227);
vertex(231,230);
vertex(215,231);
vertex(191,232);
vertex(173,232);
vertex(147,234);
vertex(129,234);
vertex(115,234);
vertex(96,235);
endShape();
}

function AirplaneWing1() {
fill('white');
beginShape();
vertex(174,219);
vertex(201,222);
vertex(217,254);
vertex(196,255);
vertex(175,221);
endShape();
}