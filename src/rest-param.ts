export {};

const reducer = (accumrator: number, currentValue: number) => {
  console.log({accumrator, currentValue})
  return accumrator + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  // console.log(values);
  return values.reduce(reducer);
};

sum(1, 2, 3, 4, 5);

[1, 2, 3, 4].reduce(reducer);