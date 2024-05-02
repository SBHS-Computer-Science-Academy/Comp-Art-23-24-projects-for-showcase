function drawP0(){
  background('lightblue');
  Mountains();
  Lake();
  greenBush();
  bridgeRailing();
  bridgePlatform();
  bridgePole1();
  bridgePole2();
  bridgePole3();
  bridgePole4();
  bridgePole5();
  bridgePole6();
}

function Mountains() {
fill(29, 107, 39);
beginShape();
vertex(53,50);
vertex(84,137);
vertex(122,34);
vertex(153,159);
vertex(229,47);
vertex(267,161);
vertex(292,25);
vertex(368,133);
vertex(380,84);
vertex(420,169);
vertex(422,373);
vertex(1,359);
vertex(0,168);
endShape();

}

function Lake() {
fill('Cyan');
beginShape();
vertex(283,343);
vertex(1,347);
vertex(2,406);
vertex(290,400);
endShape();

}

function greenBush() {
fill(36, 209, 47);
beginShape();
vertex(224,381);
vertex(277,382);
vertex(256,337);
vertex(296,340);
vertex(252,302);
vertex(298,300);
vertex(284,256);
vertex(334,261);
vertex(320,216);
vertex(375,229);
vertex(351,169);
vertex(413,207);
vertex(432,404);
vertex(233,399);
endShape();

}

function bridgeRailing(){
fill(191, 191, 191);
beginShape();
vertex(271,246);
vertex(402,300);
vertex(400,306);
vertex(264,260);
vertex(0,257);
vertex(0,241);
endShape();
  
}

function bridgePlatform(){
fill(165, 165, 165);
beginShape();
vertex(260,326);
vertex(407,352);
vertex(402,378);
vertex(254,361);
vertex(1,362);
vertex(1,330);
endShape();

}

function bridgePole1() {
fill(160, 160, 160);
beginShape();
vertex(53,260);
vertex(69,259);
vertex(71,328);
vertex(50,329);
endShape();

}

function bridgePole2() {
fill(160, 160, 160);
beginShape();
vertex(122,260);
vertex(141,260);
vertex(143,327);
vertex(123,328);
endShape();

}

function bridgePole3() {
fill(160, 160, 160);
beginShape();
vertex(194,261);
vertex(211,261);
vertex(212,326);
vertex(196,327);
endShape();

}

function bridgePole4() {
fill(160, 160, 160);
beginShape();
vertex(264,261);
vertex(280,266);
vertex(283,329);
vertex(261,327);
endShape();

}

function bridgePole5() {
fill(160, 160, 160);
beginShape();
vertex(318,280);
vertex(336,285);
vertex(341,340);
vertex(316,337);
endShape();

}

function bridgePole6() {
fill(160, 160, 160);
beginShape();
vertex(380,301);
vertex(399,307);
vertex(400,351);
vertex(379,347);
endShape();

}