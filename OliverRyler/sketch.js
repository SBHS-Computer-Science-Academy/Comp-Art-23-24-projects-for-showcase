let tw = 0;
function preload() {
  img = loadImage('map.jpg');
  stateimg = loadImage('1.jpeg');
  bmximg = loadImage('2.jpeg');
  sunimg = loadImage('3.jpeg');
  warfimg = loadImage('4.jpeg');
  skatimg = loadImage('5.jpeg');
  eastimg = loadImage('6.jpeg');
}
function setup() {
  createCanvas(1500, 1142);
  background(255);
  mmap = new GasMap()
  state = new Button(557, 642, 28, 25, 'State');
  paseo = new Button(519, 619, 25, 25, 'paseo');
  pier = new Button(657, 724, 25, 25, 'pier');
  eilings = new Button(364, 696, 25, 25, 'eilings');
  bmxPark = new Button(317, 706, 27, 25, 'BMX');
  harbor = new Button(597, 745, 35, 25, 'harbor');
  shoreline = new Button(474, 826, 25, 25, 'shoreline');
  bonnet = new Button(492, 672, 39, 25, 'bonnet');
  mesaPark = new Button(414, 794, 25, 25, 'mesaPark');
  milpas = new Button(574, 615, 25, 25, 'milpas');
  douglas = new Button(340, 780, 25, 25, 'douglas');
  kidsWorld = new Button(529, 554, 25, 25, 'kidsWorld');
  mission = new Button(471, 510, 25, 25, 'mission');
  cc = new Button(550, 763, 25, 25, 'cc');
  skatepark = new Button(643, 692, 53, 25, 'skatepark');
  earlwarren = new Button(333, 569, 25, 25, 'earlwarren');
  oakpark = new Button(423, 582, 25, 25, 'oakpark');
  sandspit = new Button(666, 759, 45, 25, 'sandspit');
  leadbetter = new Button(548, 802, 25, 25, 'leadbetter');
  eastbeach = new Button(710, 690, 54, 25, 'eastbeach');
  sunflower = new Button(708, 613, 54, 25, 'sunflower');
  
  // westbeach = new Button(623, 717, 25, 25, 'westbeach');
  sbhs = new Button(553, 587, 25, 25, 'sbhs');
  sbjh = new Button(599, 570, 25, 25, 'sbjh');
  historymusuem = new Button(457, 483, 25, 25, 'historymusuem');
  botanicgarden = new Button(505, 360, 25, 25, 'botanicgarden');
  image(img, -500, 0);
  mmap.drawneighboorhoods()
  state.draw();
  paseo.draw();
  pier.draw();
  eilings.draw();
  bmxPark.draw();
  harbor.draw();
  shoreline.draw();
  bonnet.draw();
  mesaPark.draw();
  douglas.draw();
  kidsWorld.draw();
  mission.draw();
  cc.draw();
  skatepark.draw();
  earlwarren.draw();
  oakpark.draw();
  sandspit.draw();
  leadbetter.draw();
  eastbeach.draw();
  sunflower.draw();
  // westbeach.draw();
  sbhs.draw();
  sbjh.draw();
  historymusuem.draw();
  botanicgarden.draw();
}


function mousePressed() {
  pointLocator();
  if (state.clicked()) {//State Street Downtown
    if (tw == 0) {
      print('1')
      image(img, -500, 0);
      mmap.drawneighboorhoods()
      state.draw();
      tw = 1
      mmap.drawmenu('State/Downtown Area', 'Population: 31,439', 576, 633, stateimg);
    } else {
      print('0')
      setup()
      tw = 0
    }
  }
  if (bmxPark.clicked()) {//Earl Warren BMX Park
    if (tw == 0) {
      print('1')
      image(img, -500, 0);
      mmap.drawneighboorhoods()
      bmxPark.draw();
      tw = 1
      mmap.drawmenu('BMX Park', 'POI(currently closed)', 160, 670, bmximg);
    } else {
      print('0')
      setup()
      tw = 0
    }
  }
  if (sunflower.clicked()) {//Sunflower EastSide Neighborhood Park
    if (tw == 0) {
      print('1')
      image(img, -500, 0);
      mmap.drawneighboorhoods()
      sunflower.draw();
      tw = 1
      mmap.drawmenu('SunFlower', 'POI:Eastside Park', 630, 520, sunimg);
    } else {
      print('0')
      setup()
      tw = 0
    }
  }
  if (pier.clicked()) {//pier/SternsWarf
    if (tw == 0) {
      print('1')
      image(img, -500, 0);
      mmap.drawneighboorhoods()
      pier.draw();
      tw = 1
      mmap.drawmenu('SternsWarf', 'Peir,Aquarium,Stores', 640,820, warfimg);
    } else {
      print('0')
      setup()
      tw = 0
    }
  }
  if (skatepark.clicked()) {//skatepark
    if (tw == 0) {
      print('1')
      image(img, -500, 0);
      mmap.drawneighboorhoods()
      skatepark.draw();
      tw = 1
      mmap.drawmenu('SkatersPoint', 'SB SkatePark', 560, 600, skatimg);
    } else {
      print('0')
      setup()
      tw = 0
    }
  }
  if (eastbeach.clicked()) {//eastbeach
    if (tw == 0) {
      print('1')
      image(img, -500, 0);
      mmap.drawneighboorhoods()
      eastbeach.draw();
      tw = 1
      mmap.drawmenu('EastBeach', 'Popular Beach', 630, 785, eastimg);
    } else {
      print('0')
      setup()
      tw = 0
    }
  }
}
function mouseRelease() {

}

function pointLocator() {//xLocation, yLocation
  // stroke(255,0,0);
  // fill(255,0,0);
  print('vertex(' + mouseX + ',' + mouseY + ');');
  // text('x = ' +mouseX+ 'y = ' +mouseY, xLocation,yLocation);
}

function draw() {

}
function polyPoint(_vertices, _px, _py) {

  let collision = false;

  let next = 0;

  for (let current = 0; current < vertices.length; current++) {

    next = current + 1;

    if (next == vertices.length) {
      next = 0;
    }

    let vc = _vertices[current];
    let vn = _vertices[next];

    // compare position, flip 'collision' variable
    // back and forth
    if (((vc.y >= py && vn.y < py) || (vc.y < py && vn.y >= py)) &&
      (px < (vn.x - vc.x) * (py - vc.y) / (vn.y - vc.y) + vc.x)) {
      collision = !collision;
    }

    print(collision);

  }

  return collision;

}
class GasMap {
  constructor() {
    this.pois = [];
    this.districts = {
      "neighborhoods": [
        { "area": "EastSide", "Population": "19,282" },
        { "area": "WestSide", "Population": "6,460" },
        { "area": "Mesa", "Population": "4,087" }
      ]
    }
  }

  drawmenu(info, infot, x, y, ima = stateimg) {
    fill(255, 255, 255);
    rect(x + 80, y, 120, 150);
    fill(0, 0, 0);
    text(info, x + 80, y - 55);
    text(infot, x + 80, y - 45);
    ima.resize(100, 100)
    image(ima, x + 30, y - 30);
  }


  drawneighboorhoods() {
    let downtown = [];

    noFill();
    strokeWeight(1);
    fill(255, 0, 0, 127);
    //eastside
    beginShape();
    vertex(758, 620)
    vertex(710, 578)
    vertex(672, 540)
    vertex(594, 548)
    vertex(555, 594)
    vertex(620, 654)
    vertex(626, 646)
    vertex(695, 637)
    vertex(758, 620)
    endShape();
    //uppereastside
    beginShape();
    vertex(555, 595)//    x = 555 y = 595
    vertex(477, 526)// x = 477 y = 526*
    vertex(484, 521)
    vertex(483, 503)
    vertex(552, 521)
    vertex(601, 519)
    vertex(670, 541)
    vertex(594, 549)
    vertex(556, 595)
    endShape();
    //riviara
    beginShape();
    vertex(671, 542);
    vertex(603, 521);
    vertex(553, 522);
    vertex(482, 504);
    vertex(481, 495);
    vertex(505, 448);
    vertex(570, 467);
    vertex(590, 458);
    vertex(616, 471);
    vertex(619, 460);
    vertex(637, 459);
    vertex(638, 465);
    vertex(651, 466);
    vertex(678, 448);
    vertex(709, 461);
    vertex(706, 489);
    vertex(701, 525);
    vertex(703, 538);
    vertex(706, 544);
    vertex(702, 554);
    vertex(699, 557);
    vertex(699, 567);
    vertex(671, 542);
    endShape();
    //downtown
    downtown[0] = createVector(619, 655);
    downtown[1] = createVector(581, 694);
    downtown[2] = createVector(479, 606);
    downtown[3] = createVector(518, 564);
    downtown[4] = createVector(620, 656);
    downtown[5] = createVector(619, 655);
    beginShape()
    for (let i = 0; i < downtown.length; i++) {
      vertex(downtown[i], downtown[i + 1]);
    }
    endShape();
    //oakpark
    beginShape()
    vertex(513, 638);
    vertex(497, 653);
    vertex(437, 602);
    vertex(401, 594);
    vertex(442, 546);
    vertex(453, 554);
    vertex(477, 529);
    vertex(518, 564);
    vertex(479, 608);
    vertex(489, 617);
    vertex(513, 638);
    endShape();
    //downtownwest
    beginShape()
    vertex(514, 639);
    vertex(499, 654);
    vertex(562, 706);
    vertex(580, 695);
    vertex(514, 639);
    endShape();
    //mission
    beginShape()
    vertex(407, 535);
    vertex(442, 500);
    vertex(407, 450);
    vertex(415, 339);
    vertex(474, 337);
    vertex(475, 313);
    vertex(522, 315);
    vertex(523, 341);
    vertex(536, 340);
    vertex(535, 392);
    vertex(550, 394);
    vertex(550, 418);
    vertex(536, 421);
    vertex(533, 455);
    vertex(507, 449);
    vertex(481, 495);
    vertex(483, 507);
    vertex(484, 522);
    vertex(478, 528);
    vertex(454, 554);
    vertex(444, 548);
    vertex(429, 561);
    endShape();
    //westside
    beginShape();
    vertex(562, 707);
    vertex(572, 715);
    vertex(563, 737);
    vertex(550, 742);
    vertex(546, 744);
    vertex(493, 687);
    vertex(469, 708);
    vertex(454, 695);
    vertex(398, 649);
    vertex(380, 632);
    vertex(394, 612);
    vertex(400, 596);
    vertex(434, 602);
    vertex(562, 707);
    endShape();
  }

}





















class Button {
  //created by Johnston - Free to use in educational projects
  constructor(x, y, w, h, label = ' ', clr = color(240, 240, 240, 255)) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.label = label;
    this.clr = clr;
    textAlign(CENTER);
    rectMode(CENTER);
  }

  draw() {
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h, this.h / 10);
    fill(0);
    text(this.label, this.x, this.y + this.h / 12);
    // fill('darkRed');
    // circle(this.x, this.y, this.h/2);
  }

  top() {
    return this.y - this.h / 2;
  }

  bottom() {
    return this.y + this.h / 2;
  }

  left() {
    return this.x - this.w / 2;
  }

  right() {
    return this.x + this.w / 2;
  }

  hasMouseAbove() {
    let testRightSide = (mouseX < this.right());
    let testLeftSide = (mouseX > this.left());
    let testBottomSide = (mouseY < this.bottom());
    let testTopSide = (mouseY > this.top());

    if (testRightSide && testLeftSide && testTopSide && testBottomSide) {
      return true;
    }
    return false;
  }

  clicked() {
    return this.hasMouseAbove() && mouseIsPressed;
  }

}