export interface Sura {
    index: number;
    numberOfAyas: number;
    startAyaIndex: number;
    name: SuraName;
    aboutSura: AboutSura;
    type: string;
    orderInPublishing: number;
    numberOfWords: number;
    numberOfLetters: number;
    startJuz: number;
    endJuz: number;
    startPage: number;
    endPage: number;
    totalPages: number;
  }
  export interface SuraName {
    arabic: string;
    english: string;
    englishTranscription: string;
    bosnian: string;
    bosnianTranscription: string;
  }
  export interface AboutSura {
    bosnian: string;
  }

  export interface Ayah {
    index: number;
    sura: number;
    ayaNumber: number;
    aya: string;
    juz: number;
    hizb: number;
    page: number;
    translation: string;
  }
  