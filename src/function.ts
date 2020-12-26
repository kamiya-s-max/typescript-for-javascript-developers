export {};

function bmi(height: numeber, weight: number): number {
  return weight / (height * height)
}

console.log(bmi(1.78, 86))