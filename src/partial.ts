export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

type Partialprofile = Partial<Profile>;
type RequiredType = Required<Profile>;