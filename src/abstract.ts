export {};

abstract class Animal {
  abstract cry(): string;
  run(): string {
    return 'run'
  }
}

class Lion extends Animal {
  cry() {
    return 'roar'
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrr'
  }
}

let lion = new Lion();
console.log(lion.run());