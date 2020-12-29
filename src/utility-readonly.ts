export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'ham',
  age: 43
};

me.age ++;

type PersonalDatatype = Readonly<Profile>;

const friend: PersonalDatatype = {
  name: 'hm',
  age: 44
};

friend.age ++;
