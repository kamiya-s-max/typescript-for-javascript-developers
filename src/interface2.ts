export {};

class wiseman {

}

class monk {

}

class taro extends monk {}

interface kenja {
  magic(): void;
}

interface fighter {
  atack(): void;
}


class Jiro implements kenja, fighter {
  magic(): void {
    console.log('fire');
  }
  atack(): void {
    console.log('atack');
  }
}

const jiro = new Jiro();
jiro.magic();
jiro.atack();