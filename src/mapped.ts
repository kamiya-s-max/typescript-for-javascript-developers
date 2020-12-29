export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;

type Optional<T> = {
  [P in keyof T]?: T[P] | null;
};
type OptionalType = Optional<Profile>