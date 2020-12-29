export {};

function add(a: number, b: number) {
  return a + b;
}

type ReturnTypeAdd = ReturnType<typeof add>;