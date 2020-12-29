export {};

type Prefectures = 'Tokyo' | 'Chiba' | 'Saitama';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const Covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: {kanji_name: '東京', confirmed_cases: 1949},
  Chiba: {kanji_name: '千葉', confirmed_cases: 1949},
  Saitama: {kanji_name: '埼玉', confirmed_cases: true},
};