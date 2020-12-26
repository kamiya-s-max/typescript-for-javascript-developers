export {};

class Person {
  public name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality
  }

  profile(): string {
    return `name: ${this.name} age: ${this.age}`;
  }
}

class Andloid extends Person {

  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name} age: ${this.age} natinal: ${this.nationality}`;
  }
}

let taro = new Person('taro', 10, 'japan');
console.log(taro.name);
console.log(taro.profile());
// console.log(taro.age)