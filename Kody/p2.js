function drawP2(){
background(220, 243, 245); 
gateFloor();
gatePole1();
gatePole2();
gatePole3();
gatePole4();
gatePole5();
gatePole6();
gatePole7();
gatePole8();
gatePole9();
gatePole10();
gatePole11();
gatePole12();
gatePole13();
chairLegs();
chairSeat();
} 

function gateFloor() {
fill(224, 224, 224);
beginShape();
vertex(1,347);
vertex(398,343);
vertex(398,399);
vertex(0,398);
vertex(1,348);
endShape();
}

function gatePole1() {
fill(161, 161, 161);
beginShape();
vertex(177,345);
vertex(1,99);
vertex(0,63);
vertex(220,343);
vertex(175,345);
endShape();
}

function gatePole2() {
fill(161, 161, 161);
beginShape();
vertex(270,342);
vertex(0,24);
vertex(2,0);
vertex(30,0);
vertex(316,340);
vertex(317,345);
vertex(269,343);
endShape();
}

function gatePole3() {
fill(161, 161, 161);
beginShape();
vertex(363,343);
vertex(80,1);
vertex(108,1);
vertex(399,311);
vertex(397,343);
vertex(364,344);
endShape();
}

function gatePole4() {
fill(161, 161, 161);
beginShape();
vertex(399,241);
vertex(153,1);
vertex(192,1);
vertex(398,189);
vertex(398,239);
endShape();
}

function gatePole5() {
fill(161, 161, 161);
beginShape();
vertex(399,126);
vertex(249,1);
vertex(294,0);
vertex(399,89);
vertex(398,125);
endShape();
}

function gatePole6() {
fill(161, 161, 161);
beginShape();
vertex(123,343);
vertex(0,165);
vertex(0,203);
vertex(80,344);
vertex(122,345);
endShape();
}

function gatePole7() {
fill(161, 161, 161);
beginShape();
vertex(44,345);
vertex(0,270);
vertex(0,300);
vertex(22,346);
endShape();
}

function gatePole8() {
fill(161, 161, 161);
beginShape();
vertex(1,271);
vertex(295,1);
vertex(323,1);
vertex(0,302);
vertex(0,272);
endShape();
}

function gatePole9() {
fill(161, 161, 161);
beginShape();
vertex(0,346);
vertex(384,1);
vertex(399,1);
vertex(398,17);
vertex(42,346);
vertex(0,346);
endShape();
}

function gatePole10() {
fill(161, 161, 161);
beginShape();
vertex(399,90);
vertex(398,63);
vertex(95,347);
vertex(120,347);
vertex(399,107);
endShape();
}

function gatePole11() {
fill(161, 161, 161);
beginShape();
vertex(399,90);
vertex(398,63);
vertex(95,347);
vertex(120,347);
vertex(399,107);
endShape();
}

function gatePole12() {
fill(161, 161, 161);
beginShape();
vertex(207,345);
vertex(399,153);
vertex(398,189);
vertex(246,345);
vertex(208,346);
endShape();
}

function gatePole13() {
fill(161, 161, 161);
beginShape();
vertex(0,205);
vertex(170,2);
vertex(137,1);
vertex(0,167);
vertex(0,205);
endShape();
}

function gatePole14() {
fill(161, 161, 161);
beginShape();
vertex(0,114);
vertex(81,1);
vertex(56,0);
vertex(0,72);
vertex(0,114);
endShape();
}

function chairLegs() {
fill(140, 140, 140);
beginShape();
vertex(223,374);
vertex(244,340);
vertex(280,367);
vertex(269,371);
vertex(249,356);
vertex(235,376);
vertex(222,375);
endShape();
}

function chairSeat() {
fill(89, 89, 89);
beginShape();
vertex(208,352);
vertex(245,340);
vertex(273,347);
vertex(277,337);
vertex(253,328);
vertex(250,299);
vertex(241,299);
vertex(240,325);
vertex(200,336);
vertex(208,353);
endShape();
}