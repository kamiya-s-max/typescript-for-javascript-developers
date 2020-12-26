export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromits: Batter1 = {
  // throwingSpeed: 154,
  battingAverage:0.34
};

type TwoWayPlayer = Pitcher1 & Batter1;

const OotaniShouhei: TwoWayPlayer = {
  throwingSpeed: 154,
  battingAverage:0.34
}