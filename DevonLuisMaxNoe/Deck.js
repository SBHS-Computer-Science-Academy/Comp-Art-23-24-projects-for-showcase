let ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
let values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]

class Deck {
  constructor() {
    this.deck = []
    for (let i = 0; i < ranks.length; i += 1) {
      let card = new Card(500, 600, "D", ranks[i], values[i])
      this.deck.push(card)
      card = new Card(500, 600, "H", ranks[i], values[i])
      this.deck.push(card)
      card = new Card(500, 600, "S", ranks[i], values[i])
      this.deck.push(card)
      card = new Card(500, 600, "C", ranks[i], values[i])
      this.deck.push(card)
    }
  }
  drawCard() {
    let index = int(random(this.deck.length))

    //print(index)
    let card = this.deck.splice(index, 1)[0]
   // print(card)
    return card
  }
}
