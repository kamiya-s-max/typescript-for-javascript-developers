export {};


namespace japanese {
  export namespace tokyo {
    export class Person {
      constructor(public name: string) {
      }
    }
  }
  export namespace osaka {
    export class Person {
      constructor(public name: string) {
      }
    }
  }
}

namespace english {
  export class Person {
    constructor(public firstname: string, public lastname: string) {
    }
  }
}

const me = new japanese.tokyo.Person('ham');
console.log(me.name);

const you = new english.Person('jhon', 'michel');
console.log({you});