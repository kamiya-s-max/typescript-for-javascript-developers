export {};

class Me {
  static firstname: string = 'shun';
  static isProgramer: boolean = true;
  static lastname: string = 'kami';

  static work() {
    return `${this.firstname} programing`
  }
}

let me = new Me()
console.log(me.isProgramer)
console.log(Me.isProgramer)
console.log(Me.work())

