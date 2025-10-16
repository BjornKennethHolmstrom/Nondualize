export type Language = 'en' | 'sv';

export interface Translations {
  nav: {
    home: string;
    guides: string;
    about: string;
    contact: string;
  };
  home: {
    title: string;
    subtitle: string;
    intro: string;
    description: string;
    comingSoon: string;
  };
  guides: {
    theMap: string;
    thePointer: string;
    theLiving: string;
    theMeta: string;
  };
  common: {
    readMore: string;
    previous: string;
    next: string;
    tableOfContents: string;
    loading: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      guides: 'Guides',
      about: 'About',
      contact: 'Contact'
    },
    home: {
      title: 'Nondualize',
      subtitle: 'Exploring Non-Dual Awareness',
      intro: 'A space for exploring non-duality—the recognition that the apparent separation between self and other, observer and observed, is not ultimately real.',
      description: 'This site offers both intellectual frameworks and direct pointers, honoring the mind\'s need to understand while inviting recognition of what lies beyond concepts.',
      comingSoon: 'Coming soon: Guides, explorations, and invitations to look for yourself.'
    },
    guides: {
      theMap: 'The Map: Intellectual Foundations',
      thePointer: 'The Pointer: Direct Recognition',
      theLiving: 'The Living: Integration in Daily Life',
      theMeta: 'The Meta: Reflecting on the Journey'
    },
    common: {
      readMore: 'Read more',
      previous: 'Previous',
      next: 'Next',
      tableOfContents: 'Table of Contents',
      loading: 'Loading...'
    }
  },
  sv: {
    nav: {
      home: 'Hem',
      guides: 'Guider',
      about: 'Om',
      contact: 'Kontakt'
    },
    home: {
      title: 'Nondualize',
      subtitle: 'Utforska icke-dual medvetenhet',
      intro: 'Ett utrymme för att utforska icke-dualitet—insikten att den uppenbara separationen mellan själv och andra, observatör och observerat, inte är ultimat verklig.',
      description: 'Denna webbplats erbjuder både intellektuella ramverk och direkta pekare, hedrar sinnet behov av att förstå samtidigt som den bjuder in till igenkänning av det som ligger bortom koncept.',
      comingSoon: 'Kommer snart: Guider, utforskningar och inbjudningar att själv undersöka.'
    },
    guides: {
      theMap: 'Kartan: Intellektuella grunder',
      thePointer: 'Pekaren: Direkt igenkänning',
      theLiving: 'Levandet: Integration i vardagen',
      theMeta: 'Meta: Reflektion över resan'
    },
    common: {
      readMore: 'Läs mer',
      previous: 'Föregående',
      next: 'Nästa',
      tableOfContents: 'Innehållsförteckning',
      loading: 'Laddar...'
    }
  }
};
