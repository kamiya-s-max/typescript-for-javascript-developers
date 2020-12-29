export {};

const debugProfile = (name: string, age: number) => {
  console.log({name, age});
};

debugProfile('ham', 43);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['groria', 76];

debugProfile(...profile)