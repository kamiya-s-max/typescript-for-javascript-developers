export {};

const kansu = (): number => 43;

let number_any: any = kansu();
let number_unknown: unknown = kansu();

let sum_any = number_any + 10;
console.log(typeof number_unknown);
if (typeof number_unknown === 'number') {
  let sum_unknown = number_unknown + 10;
}
// let sum_unknown = number_unknown + 10;
