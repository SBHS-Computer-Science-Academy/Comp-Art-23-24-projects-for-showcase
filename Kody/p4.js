function drawP4(){
  background(102, 227, 255);
  sideWalk();
  bushes();
  house();
  Window();
  Glass1();
  Glass2();
  Glass3();
  Glass4();
  Door();
  backHouse();
}

function sideWalk() {
  fill(227, 227, 227);
  beginShape();
  vertex(344,473);
  vertex(0,296);
  vertex(398,346);
  vertex(398,399);
  vertex(0,398);
  vertex(0,296);
  endShape();
}

function bushes() {
  fill(37, 217, 94);
  beginShape();
  vertex(0,263);
  vertex(70,263);
  vertex(133,216);
  vertex(202,278);
  vertex(267,214);
  vertex(348,288);
  vertex(399,217);
  vertex(398,346);
  vertex(1,295);
  vertex(0,210);
  endShape();
}

function house() {
  fill(189, 254, 255);
  beginShape();
  vertex(159,239);
  vertex(157,0);
  vertex(0,0);
  vertex(0,262);
  vertex(70,261);
  vertex(131,215);
  vertex(156,235);
  vertex(158,238);
  endShape();
  }

function Window() {
  fill(222, 222, 222);
  beginShape();
  vertex(104,15);
  vertex(80,15);
  vertex(59,27);
  vertex(58,43);
  vertex(57,72);
  vertex(60,87);
  vertex(80,98);
  vertex(95,101);
  vertex(137,106);
  vertex(147,99);
  vertex(149,73);
  vertex(149,47);
  vertex(144,31);
  vertex(128,22);
  vertex(103,15);
  endShape();
}

function Glass1() {
  fill('cyan');
  beginShape();
  vertex(93,23);
  vertex(90,55);
  vertex(65,48);
  vertex(93,24);
  endShape();
}

function Glass2() {
  fill('cyan');
  beginShape();
  vertex(112,27);
  vertex(116,55);
  vertex(140,61);
  vertex(112,27);
  endShape();
}

function Glass3() {
  fill('cyan');
  beginShape();
  vertex(90,67);
  vertex(88,93);
  vertex(62,64);
  vertex(90,67);
  endShape();
}

function Glass4() {
  beginShape();
  vertex(113,69);
  vertex(113,93);
  vertex(140,74);
  vertex(112,68);
  endShape();
}

function Door() {
  fill(156, 156, 156);
  beginShape();
  vertex(86,246);
  vertex(82,144);
  vertex(1,142);
  vertex(1,261);
  vertex(68,261);
  vertex(85,246);
  vertex(83,207);
  vertex(73,207);
  vertex(67,196);
  vertex(63,195);
  vertex(50,207);
  vertex(56,213);
  vertex(64,213);
  vertex(71,206);
  endShape();
}

function backHouse() {
  fill(189, 254, 255);
  beginShape();
  vertex(158,48);
  vertex(263,88);
  vertex(275,219);
  vertex(266,213);
  vertex(200,275);
  vertex(157,237);
  vertex(157,47);
  endShape();
}