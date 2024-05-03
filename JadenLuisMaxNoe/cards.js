//Suit Diamond, club, heart, spade
//rank Ace, 2-10, jack ,king, queen

function makeDeck() {
  for (let i = 0; i < ranks.length; i += 1) {
    card = new Card(500, 600, "D", ranks[i], values[i])
    deck.push(card);
    
    card = new Card(500, 600, "H", ranks[i], values[i])
    deck.push(card);

    card = new Card(500, 600, "S", ranks[i], values[i])
    deck.push(card);

    card = new Card(500, 600, "C", ranks[i], values[i])
    deck.push(card);
  }
}
class Card {
  constructor(x, y, suit, rank, value) {
    this.x = x;
    this.y = y;
    this.suit = suit;
    this.rank = rank;
    this.value = value;
    //if(rank == 2 let value =2)
  }


  show() {
    push()
    translate(this.x, this.y)
    translate(-100, -125);
    stroke(5);
    fill('white');
    rect(50, 50, 100, 150, 20);
    noStroke();

    if (this.suit == "D") {
      fill('red')
      this.diamond();
    }
    else if (this.suit == "H") {
      this.heart();
    }
    else if (this.suit == "C") {
      this.clover();
    }
    else if (this.suit == "S") {
      this.spade();
    }


    textFont(cardo);
    textSize(20);
    text(this.rank, 60, 70);
    text(this.rank, 127, 190);
    pop()
  }
  diamond() {
    fill("red");
    beginShape();
    vertex(60, 125);
    vertex(100, 75);
    vertex(140, 125);
    vertex(100, 175);
    endShape(CLOSE);

  }
  heart() {
    fill("red");
    beginShape();
    vertex(100, 167);
    vertex(83, 141);
    vertex(70, 120);
    vertex(65, 105);
    vertex(65, 95);
    vertex(69, 87);
    vertex(80, 82);
    vertex(91, 81);
    vertex(98, 85);
    vertex(102, 98);
    vertex(104, 92);
    vertex(105, 86);
    vertex(107, 82);
    vertex(113, 80);
    vertex(118, 80);
    vertex(124, 81);
    vertex(131, 83);
    vertex(136, 89);
    vertex(136, 100);
    vertex(132, 114);
    vertex(122, 138);
    vertex(100, 168);
    endShape();
  }
  clover() {

    fill(0);
    beginShape();
    circle(80, 130, 40)
    circle(120, 130, 40)
    circle(100, 110, 40)
    beginShape();
    curveVertex(91, 133); // control point
    curveVertex(91, 133);
    curveVertex(91, 158);
    curveVertex(80, 164);
    curveVertex(116, 165);
    curveVertex(104, 160);
    curveVertex(103, 146);
    curveVertex(104, 126);
    curveVertex(104, 126);
    curveVertex(97, 118);
    curveVertex(89, 123);
    curveVertex(91, 145);
    curveVertex(91, 145); // control point
    endShape();
  }
  spade() {
    fill(0)
    beginShape();
    circle(80, 140, 30);
    circle(120, 140, 30);
    beginShape();
    curveVertex(115, 154); // control point
    curveVertex(115, 154);
    curveVertex(103, 143);
    curveVertex(100, 141);
    curveVertex(97, 143);
    curveVertex(86, 151);
    curveVertex(67, 137);
    curveVertex(79, 114);
    curveVertex(100, 91);
    curveVertex(125, 118);
    curveVertex(134, 139);
    curveVertex(123, 150);
    curveVertex(123, 150); // control point
    endShape();
    beginShape();
    curveVertex(104, 144); // control point
    curveVertex(104, 144);
    curveVertex(108, 165);
    curveVertex(124, 170);
    curveVertex(81, 171);
    curveVertex(95, 166);
    curveVertex(96, 152);
    curveVertex(93, 140);
    curveVertex(93, 130);
    curveVertex(119, 131);
    curveVertex(105, 144);
    curveVertex(105, 144); // control point
    endShape();
  }
}

