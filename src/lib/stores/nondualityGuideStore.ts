import { writable } from 'svelte/store';

// Define item types
interface GuideItem {
  id: string;
  path: string;
  type: 'section-intro' | 'article';
  section: 1 | 2 | 3 | 4 | 5;
  number?: number; // For articles within sections
  title: Record<string, string>;
  description?: Record<string, string>;
}

// Define translations
interface Translations {
  sections: {
    1: string;
    2: string;
    3: string;
    4: string;
  };
  article: string;
  previous: string;
  next: string;
  tableOfContents: string;
  loading: string;
  comingSoon: string;
  backToGuides: string;
}

// Define the store state
interface NondualityGuideStore {
  items: GuideItem[];
  currentItem: GuideItem | null;
  translations: Record<string, Translations>;
}

// Create initial state
const initialState: NondualityGuideStore = {
  items: [
    // Section 1: The Map
    {
      id: 'section1-intro',
      path: 'section-1-the-map',
      type: 'section-intro',
      section: 1,
      title: {
        en: 'Section 1: The Map',
        sv: 'Sektion 1: Kartan'
      },
      description: {
        en: 'Intellectual foundations for understanding non-duality',
        sv: 'Intellektuella grunder för att förstå icke-dualitet'
      }
    },
    {
      id: 'article1-1',
      path: 'what-is-nonduality',
      type: 'article',
      section: 1,
      number: 1,
      title: {
        en: 'What Is Non-Duality?',
        sv: 'Vad är icke-dualitet?'
      },
      description: {
        en: 'A Stage Yellow exploration of non-dual awareness',
        sv: 'En Stage Yellow-utforskning av icke-dual medvetenhet'
      }
    },
    {
      id: 'article1-2',
      path: 'what-nonduality-is-not',
      type: 'article',
      section: 1,
      number: 2,
      title: {
        en: 'What Non-Duality Is NOT',
        sv: 'Vad icke-dualitet INTE är'
      },
      description: {
        en: 'Common misconceptions and traps to avoid',
        sv: 'Vanliga missuppfattningar och fällor att undvika'
      }
    },
    {
      id: 'article1-3',
      path: 'three-faces-of-being',
      type: 'article',
      section: 1,
      number: 3,
      title: {
        en: 'The Three Faces of Being',
        sv: 'Varats tre ansikten'
      },
      description: {
        en: 'What most non-duality teachings miss',
        sv: 'Vad de flesta icke-dualitetsundervisningar missar'
      }
    },
    {
      id: 'article1-4',
      path: 'logic-of-non-separation',
      type: 'article',
      section: 1,
      number: 4,
      title: {
        en: 'The Logic of Non-Separation',
        sv: 'Logiken bakom icke-separation'
      },
      description: {
        en: 'Intellectual frameworks for understanding unity',
        sv: 'Intellektuella ramverk för att förstå enhet'
      }
    },
    {
      id: 'article1-5',
      path: 'nonduality-across-traditions',
      type: 'article',
      section: 1,
      number: 5,
      title: {
        en: 'Non-Duality Across Traditions',
        sv: 'Icke-dualitet över traditioner'
      },
      description: {
        en: 'Advaita, Zen, Dzogchen, Christian mysticism, and more',
        sv: 'Advaita, Zen, Dzogchen, kristen mystik och mer'
      }
    },
    {
      id: 'article1-6',
      path: 'nonduality-and-spiral-dynamics',
      type: 'article',
      section: 1,
      number: 6,
      title: {
        en: 'Non-Duality and Spiral Dynamics',
        sv: 'Icke-dualitet och Spiral Dynamics'
      },
      description: {
        en: 'The context that contains all development',
        sv: 'Kontexten som innehåller all utveckling'
      }
    },
    {
      id: 'article1-7',
      path: 'common-traps-and-misconceptions',
      type: 'article',
      section: 1,
      number: 7,
      title: {
        en: 'Common Traps and Misconceptions',
        sv: 'Vanliga fällor och missuppfattningar'
      },
      description: {
        en: 'Spiritual bypassing, dissociation, and developmental stagnation',
        sv: 'Andligt förbigående, dissociation och utvecklingsstagnation'
      }
    },

    // Section 2: The Pointer
    {
      id: 'section2-intro',
      path: 'section-2-the-pointer',
      type: 'section-intro',
      section: 2,
      title: {
        en: 'Section 2: The Pointer',
        sv: 'Sektion 2: Pekaren'
      },
      description: {
        en: 'Direct recognition through inquiry and practice',
        sv: 'Direkt igenkänning genom undersökning och praktik'
      }
    },
    {
      id: 'article2-1',
      path: 'who-is-looking',
      type: 'article',
      section: 2,
      number: 1,
      title: {
        en: 'Who Is Looking?',
        sv: 'Vem tittar?'
      },
      description: {
        en: 'The fundamental inquiry into the nature of self',
        sv: 'Den grundläggande undersökningen av självets natur'
      }
    },
    {
      id: 'article2-2',
      path: 'space-between-thoughts',
      type: 'article',
      section: 2,
      number: 2,
      title: {
        en: 'The Space Between Thoughts',
        sv: 'Utrymmet mellan tankar'
      },
      description: {
        en: 'Noticing the gap and recognizing spacious awareness',
        sv: 'Märka luckan och känna igen rymlig medvetenhet'
      }
    },
    {
      id: 'article2-3',
      path: 'right-now-whats-happening',
      type: 'article',
      section: 2,
      number: 3,
      title: {
        en: 'Right Now, What\'s Actually Happening?',
        sv: 'Just nu, vad händer egentligen?'
      },
      description: {
        en: 'Distinguishing direct experience from story',
        sv: 'Skilja direkt erfarenhet från berättelse'
      }
    },
    {
      id: 'article2-4',
      path: 'the-boundary-question',
      type: 'article',
      section: 2,
      number: 4,
      title: {
        en: 'The Boundary Question',
        sv: 'Gränsfrågan'
      },
      description: {
        en: 'Where exactly are you? Finding the edge between inside and outside',
        sv: 'Var är du exakt? Hitta gränsen mellan inuti och utanför'
      }
    },
    {
      id: 'article2-5',
      path: 'questions-that-dissolve',
      type: 'article',
      section: 2,
      number: 5,
      title: {
        en: 'Questions That Dissolve the Questioner',
        sv: 'Frågor som upplöser frågaren'
      },
      description: {
        en: 'Working with koans and paradoxical inquiries',
        sv: 'Arbeta med koaner och paradoxala undersökningar'
      }
    },
    {
      id: 'article2-6',
      path: 'noticing-the-noticer',
      type: 'article',
      section: 2,
      number: 6,
      title: {
        en: 'Noticing the Noticer',
        sv: 'Märka märkaren'
      },
      description: {
        en: 'Turning attention back on itself to recognize awareness',
        sv: 'Vända uppmärksamheten tillbaka på sig själv för att känna igen medvetenhet'
      }
    },
    {
      id: 'article2-7',
      path: 'working-with-glimpses',
      type: 'article',
      section: 2,
      number: 7,
      title: {
        en: 'Working with Glimpses',
        sv: 'Arbeta med glimtar'
      },
      description: {
        en: 'Integration practices after moments of recognition',
        sv: 'Integrationspraktiker efter ögonblick av igenkänning'
      }
    },

    // Section 3: The Living
    {
      id: 'section3-intro',
      path: 'section-3-the-living',
      type: 'section-intro',
      section: 3,
      title: {
        en: 'Section 3: The Living',
        sv: 'Sektion 3: Levandet'
      },
      description: {
        en: 'Integration in daily life',
        sv: 'Integration i vardagen'
      }
    },
    {
      id: 'article3-1',
      path: 'nonduality-in-relationships',
      type: 'article',
      section: 3,
      number: 1,
      title: {
        en: 'Non-Duality in Relationships',
        sv: 'Icke-dualitet i relationer'
      },
      description: {
        en: 'When "the other" isn\'t ultimately other',
        sv: 'När "den andra" inte i grunden är en annan'
      }
    },
    {
      id: 'article3-2',
      path: 'nonduality-and-emotions',
      type: 'article',
      section: 3,
      number: 2,
      title: {
        en: 'Non-Duality and Emotions',
        sv: 'Icke-dualitet och känslor'
      },
      description: {
        en: 'Feeling fully without identifying',
        sv: 'Känna fullt ut utan att identifiera sig'
      }
    },
    {
      id: 'article3-3',
      path: 'nonduality-at-work',
      type: 'article',
      section: 3,
      number: 3,
      title: {
        en: 'Non-Duality at Work',
        sv: 'Icke-dualitet på arbetet'
      },
      description: {
        en: 'Being present in professional life',
        sv: 'Vara närvarande i yrkeslivet'
      }
    },
    {
      id: 'article3-4',
      path: 'nonduality-and-suffering',
      type: 'article',
      section: 3,
      number: 4,
      title: {
        en: 'Non-Duality and Suffering',
        sv: 'Icke-dualitet och lidande'
      },
      description: {
        en: 'Pain vs suffering: what changes with recognition',
        sv: 'Smärta vs lidande: vad förändras med igenkänning'
      }
    },
    {
      id: 'article3-5',
      path: 'nonduality-and-action',
      type: 'article',
      section: 3,
      number: 5,
      title: {
        en: 'Non-Duality and Action',
        sv: 'Icke-dualitet och handling'
      },
      description: {
        en: 'Wu wei: action from non-action',
        sv: 'Wu wei: handling från icke-handling'
      }
    },
    {
      id: 'article3-6',
      path: 'nonduality-different-stages',
      type: 'article',
      section: 3,
      number: 6,
      title: {
        en: 'Non-Duality at Different Stages',
        sv: 'Icke-dualitet på olika stadier'
      },
      description: {
        en: 'How recognition expresses at each developmental stage',
        sv: 'Hur igenkänning uttrycker sig på varje utvecklingsstadium'
      }
    },
    {
      id: 'article3-7',
      path: 'daily-life-as-practice',
      type: 'article',
      section: 3,
      number: 7,
      title: {
        en: 'Daily Life as Practice',
        sv: 'Vardagen som praktik'
      },
      description: {
        en: 'Chopping wood, carrying water',
        sv: 'Hugga ved, bära vatten'
      }
    },

    // Section 4: The Meta
    {
      id: 'section4-intro',
      path: 'section-4-the-meta',
      type: 'section-intro',
      section: 4,
      title: {
        en: 'Section 4: The Meta',
        sv: 'Sektion 4: Meta'
      },
      description: {
        en: 'Reflecting on the journey',
        sv: 'Reflektion över resan'
      }
    },
    {
      id: 'article4-1',
      path: 'paradox-of-this-website',
      type: 'article',
      section: 4,
      number: 1,
      title: {
        en: 'The Paradox of This Website',
        sv: 'Paradoxen med denna webbplats'
      },
      description: {
        en: 'Using concepts to point beyond concepts',
        sv: 'Använda koncept för att peka bortom koncept'
      }
    },
    {
      id: 'article4-2',
      path: 'maps-and-territory',
      type: 'article',
      section: 4,
      number: 2,
      title: {
        en: 'Maps and Territory',
        sv: 'Kartor och territorium'
      },
      description: {
        en: 'The value and danger of frameworks',
        sv: 'Värdet och faran med ramverk'
      }
    },
    {
      id: 'article4-3',
      path: 'development-awakening-deeper',
      type: 'article',
      section: 4,
      number: 3,
      title: {
        en: 'Development and Awakening: A Deeper Look',
        sv: 'Utveckling och uppvaknande: En djupare titt'
      },
      description: {
        en: 'Revisiting the relationship between dimensions',
        sv: 'Återbesöka relationen mellan dimensioner'
      }
    },
    {
      id: 'article4-4',
      path: 'when-language-fails',
      type: 'article',
      section: 4,
      number: 4,
      title: {
        en: 'When Language Fails',
        sv: 'När språket misslyckas'
      },
      description: {
        en: 'The limits of words and concepts',
        sv: 'Ordens och konceptens begränsningar'
      }
    },
    {
      id: 'article4-5',
      path: 'personal-journey-humility',
      type: 'article',
      section: 4,
      number: 5,
      title: {
        en: 'Personal Journey and Humility',
        sv: 'Personlig resa och ödmjukhet'
      },
      description: {
        en: 'The creator\'s own position and ongoing learning',
        sv: 'Skaparens egen position och pågående lärande'
      }
    },
    {
      id: 'article4-6',
      path: 'community-and-dialogue',
      type: 'article',
      section: 4,
      number: 6,
      title: {
        en: 'Community and Dialogue',
        sv: 'Gemenskap och dialog'
      },
      description: {
        en: 'Learning together rather than alone',
        sv: 'Lära tillsammans snarare än ensam'
      }
    },
    {
      id: 'article4-7',
      path: 'what-remains-mysterious',
      type: 'article',
      section: 4,
      number: 7,
      title: {
        en: 'What Remains Mysterious',
        sv: 'Vad som förblir mystiskt'
      },
      description: {
        en: 'Questions without answers, closing without closure',
        sv: 'Frågor utan svar, avslutning utan slutsats'
      }
    },

    // Section 5: The Ground
    {
      id: 'section5-intro',
      path: 'section-5-the-ground',
      type: 'section-intro',
      section: 5,
      title: {
        en: 'Section 5: The Ground',
        sv: 'Sektion 5: Grunden'
      },
      description: {
        en: 'Exploring the non-dual nature of reality\'s most fundamental constructs',
        sv: 'Utforska den icke-duala naturen hos verklighetens mest grundläggande konstruktioner'
      }
    },
    {
      id: 'article5-1',
      path: 'time-eternal-now',
      type: 'article',
      section: 5,
      number: 1,
      title: {
        en: 'Time: The Eternal Now',
        sv: 'Tid: Det eviga nuet'
      },
      description: {
        en: 'Past and future as concepts appearing in the timeless present',
        sv: 'Dåtid och framtid som koncept som uppträder i den tidlösa nutiden'
      }
    },
    {
      id: 'article5-2',
      path: 'space-boundless-here',
      type: 'article',
      section: 5,
      number: 2,
      title: {
        en: 'Space: The Boundless Here',
        sv: 'Rum: Det gränslösa här'
      },
      description: {
        en: 'Where exactly are the boundaries of "here" and "there"?',
        sv: 'Var exakt är gränserna mellan "här" och "där"?'
      }
    },
    {
      id: 'article5-3',
      path: 'self-other-primary-illusion',
      type: 'article',
      section: 5,
      number: 3,
      title: {
        en: 'The Self-Other Divide: The Primary Illusion',
        sv: 'Uppdelningen mellan själv och andra: Den primära illusionen'
      },
      description: {
        en: 'Subject and object as two sides of one experiencing',
        sv: 'Subjekt och objekt som två sidor av ett upplevande'
      }
    },
    {
      id: 'article5-4',
      path: 'being-and-nothingness',
      type: 'article',
      section: 5,
      number: 4,
      title: {
        en: 'Being and Nothingness: The Two Sides of Isness',
        sv: 'Varande och intighet: De två sidorna av varandet'
      },
      description: {
        en: 'Existence and non-existence arising together',
        sv: 'Existens och icke-existens uppstår tillsammans'
      }
    },
    {
      id: 'article5-5',
      path: 'cause-and-effect-unbroken-wholeness',
      type: 'article',
      section: 5,
      number: 5,
      title: {
        en: 'Cause and Effect: The Unbroken Wholeness',
        sv: 'Orsak och verkan: Den obrytbara helheten'
      },
      description: {
        en: 'Linear causality as abstraction from unified field',
        sv: 'Linjär kausalitet som abstraktion från enhetligt fält'
      }
    },
    {
      id: 'article5-6',
      path: 'end-of-seeking',
      type: 'article',
      section: 5,
      number: 6,
      title: {
        en: 'The End of Seeking: When the Problem-Solution Loop Collapses',
        sv: 'Slutet på sökandet: När problem-lösning-loopen kollapsar'
      },
      description: {
        en: 'The seeker is what\'s being sought',
        sv: 'Sökaren är det som söks'
      }
    },
    {
      id: 'article5-7',
      path: 'living-without-why',
      type: 'article',
      section: 5,
      number: 7,
      title: {
        en: 'Living Without a Why: Meaning and Meaninglessness',
        sv: 'Leva utan ett varför: Mening och meningslöshet'
      },
      description: {
        en: 'Reality prior to the need for meaning',
        sv: 'Verklighet före behovet av mening'
      }
    },

    // Placeholder for future sections

  ],
  currentItem: null,
  translations: {
    en: {
      sections: {
        1: 'Section 1: The Map',
        2: 'Section 2: The Pointer',
        3: 'Section 3: The Living',
        4: 'Section 4: The Meta',
        5: 'Section 5: The Ground'
      },
      article: 'Article',
      previous: 'Previous',
      next: 'Next',
      tableOfContents: 'Table of Contents',
      loading: 'Loading...',
      comingSoon: 'This content is coming soon! We\'re actively developing materials for each section.',
      backToGuides: 'Back to Guides'
    },
    sv: {
      sections: {
        1: 'Sektion 1: Kartan',
        2: 'Sektion 2: Pekaren',
        3: 'Sektion 3: Levandet',
        4: 'Sektion 4: Meta',
        5: 'Sektion 5: Grunden'
      },
      article: 'Artikel',
      previous: 'Föregående',
      next: 'Nästa',
      tableOfContents: 'Innehållsförteckning',
      loading: 'Laddar...',
      comingSoon: 'Detta innehåll kommer snart! Vi utvecklar aktivt material för varje sektion.',
      backToGuides: 'Tillbaka till Guider'
    }
  }
};

// Create the store
const nondualityGuideStore = writable<NondualityGuideStore>(initialState);

// Helper to get the current store state
function get(): NondualityGuideStore {
  let storeValue: NondualityGuideStore = initialState;
  nondualityGuideStore.subscribe(value => {
    storeValue = value;
  })();
  return storeValue;
}

// Helper functions
function getSectionItems(section: number) {
  const store = get();
  return store.items.filter(item => item.section === section);
}

function getSection1Items() {
  return getSectionItems(1);
}

function getSection2Items() {
  return getSectionItems(2);
}

function getSection3Items() {
  return getSectionItems(3);
}

function getSection4Items() {
  return getSectionItems(4);
}

function getSection5Items() {
  return getSectionItems(5);
}


function getAllNavigableItems() {
  const store = get();
  return store.items.filter(item => item.type === 'section-intro' || item.type === 'article');
}

function getItemByPath(path: string) {
  const store = get();
  return store.items.find(item => item.path === path) || null;
}

function setCurrentItem(path: string) {
  nondualityGuideStore.update(store => {
    store.currentItem = store.items.find(item => item.path === path) || null;
    return store;
  });
}

function getAdjacentItems(path: string) {
  const store = get();
  const mainItems = getAllNavigableItems();
  const currentIndex = mainItems.findIndex(item => item.path === path);
  
  const previous = currentIndex > 0 ? mainItems[currentIndex - 1] : null;
  const next = currentIndex < mainItems.length - 1 ? mainItems[currentIndex + 1] : null;
  
  return { previous, next };
}

export {
  nondualityGuideStore,
  getSection1Items,
  getSection2Items,
  getSection3Items,
  getSection4Items,
  getSection5Items,
  getAllNavigableItems,
  getItemByPath,
  setCurrentItem,
  getAdjacentItems
};
