export {}

type Mojiretsu = string;

const foostring: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello'

const example = {
  name: 'Ham',
  age: 43
};

type Profile = {
  name: string;
  age: number;
}

const example2: Profile = {
  name: 'Ham',
  age: 43
};

type Profile2 = typeof example;