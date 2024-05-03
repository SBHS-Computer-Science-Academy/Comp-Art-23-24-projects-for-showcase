class Hand{
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.hand=[];
    this.spacingX=110
     this.total=0
    this.aces=0
    this.addCard();
    this.addCard();
   
  }
  addCard(){
  let card=deck.drawCard()
    card.x=this.x
    card.y=this.y
    if (card.rank == "A"){
      this.aces +=1
    }
    this.addTotal(card)
    this.hand.push(card)
    this.x+=this.spacingX
  }
  addTotal(card){
    this.total+=card.value
  //print(this.total)
    if(this.total>21&&this.aces>0){
      this.aces -=1
      this.total -=10
    }
    if(this.total>21 ){
     gameState="bust"

    }
  }
  
  show(){
    for (let card of this.hand) {
      // print(card)
      card.show()

    }
  }
}