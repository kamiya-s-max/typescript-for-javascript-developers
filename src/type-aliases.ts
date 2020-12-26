export {};

type mojiretsu = string;
const foo: mojiretsu = 'hello';


const exapmle1 = {
  name: 'Ham',
  age: 43
}

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Ham',
  age: 43
};

type profile2 = typeof exapmle1
