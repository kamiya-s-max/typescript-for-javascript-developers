export {};

enum Months {
  january = 1,
  feburaly,
  march,
  april,
  may,
  june,
  july,
  august,
  september,
  october,
  november,
  december
}

console.log(Months.april);

enum Colors {
  RED = '##FF0000',
  WHITE = '##FFFFFF',
  GREEN = '##008000',
  BULUE = '##0000FF',
  BLACK = '##000000',
  // YELLOW = '##FFFF00'
}

let green = Colors.GREEN;
console.log({green});

Colors.YELLOW;

enum Colors {
  YELLOW = '##FFFF00'
}