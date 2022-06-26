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
    aya: string;
    ayaNumber: number;
    page: number;
    index: number;
    sura: number;
    juz: number;
    hizb: number;
    translation: Translation;
  }
  export interface Translation {
    bosnianKorkut: string;
    bosnianMehanovic: string;
    englishSaheeh: string;
    englishHilaliKhan: string;
    germanBubenheim: string;
    turkishRowwadTranslationCentar: string;
    frenchMontada: string;
    spanishMontadaEu: string;
  }
  
  