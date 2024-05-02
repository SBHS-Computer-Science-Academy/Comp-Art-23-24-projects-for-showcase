function drawP5(){
  background('lightblue');
  LetterT();
  LetterH();
  LetterE();
  SecondE();
  LetterN();
  LetterD();
}

function LetterT() {
  fill('black');
  beginShape();
  vertex(37,49);
  vertex(110,49);
  vertex(111,71);
  vertex(90,71);
  vertex(95,122);
  vertex(75,121);
  vertex(70,67);
  vertex(42,66);
  vertex(36,49);
  endShape();
}

function LetterH() {
  fill('black');
  beginShape();
  vertex(134,125);
  vertex(156,123);
  vertex(154,97);
  vertex(170,97);
  vertex(172,124);
  vertex(197,123);
  vertex(197,51);
  vertex(176,51);
  vertex(171,79);
  vertex(153,80);
  vertex(149,52);
  vertex(129,52);
  endShape();
}

function LetterE() {
  fill('black');
  beginShape();
  vertex(257,49);
  vertex(213,50);
  vertex(217,124);
  vertex(277,125);
  vertex(272,103);
  vertex(239,102);
  vertex(236,91);
  vertex(266,89);
  vertex(267,71);
  vertex(239,72);
  vertex(245,59);
  vertex(263,59);
  vertex(267,50);
  vertex(257,49);
  endShape();
}

function SecondE() {
  fill('cyan');
  beginShape();
  vertex(110,144);
  vertex(64,148);
  vertex(65,237);
  vertex(132,239);
  vertex(130,210);
  vertex(89,210);
  vertex(89,196);
  vertex(123,194);
  vertex(121,176);
  vertex(90,180);
  vertex(90,166);
  vertex(116,164);
  vertex(118,144);
  vertex(108,144);
  endShape();
}

function LetterN() {
  fill('cyan');
  beginShape();
  vertex(145,240);
  vertex(140,145);
  vertex(162,145);
  vertex(197,198);
  vertex(193,144);
  vertex(215,146);
  vertex(222,240);
  vertex(196,239);
  vertex(156,177);
  vertex(163,237);
  vertex(143,240);
  endShape();
}

function LetterD() {
  fill('cyan');
  beginShape();
  vertex(242,239);
  vertex(236,147);
  vertex(280,147);
  vertex(308,181);
  vertex(308,204);
  vertex(308,229);
  vertex(292,240);
  vertex(241,239);
  vertex(256,215);
  vertex(253,161);
  vertex(277,161);
  vertex(295,180);
  vertex(295,216);
  vertex(255,215);
  endShape();
}