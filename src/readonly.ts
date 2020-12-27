export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let mycard = new VisaCard('はむ');

mycard.owner = 'Hem';


