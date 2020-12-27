export {};

class MynumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `${this._secretNumber}`;
  }
}

let card = new MynumberCard('ハムさん', 12345678);
// card.owner = 'はむ'
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 11111111
console.log(card.debugPrint());
console.log(card.secretNumber)
