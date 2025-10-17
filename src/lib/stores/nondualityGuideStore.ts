import { writable } from 'svelte/store';

// Define item types
interface GuideItem {
  id: string;
  path: string;
  type: 'section-intro' | 'article';
  section: 1 | 2 | 3 | 4;
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

    // Placeholder for future sections
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
  ],
  currentItem: null,
  translations: {
    en: {
      sections: {
        1: 'Section 1: The Map',
        2: 'Section 2: The Pointer',
        3: 'Section 3: The Living',
        4: 'Section 4: The Meta'
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
        4: 'Sektion 4: Meta'
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
  getAllNavigableItems,
  getItemByPath,
  setCurrentItem,
  getAdjacentItems
};
