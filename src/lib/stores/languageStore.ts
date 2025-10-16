import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import { translations, type Language, type Translations } from '$lib/i18n/translations';

function createLanguageStore() {
  const stored = browser ? localStorage.getItem('language') : null;
  const initial: Language = (stored as Language) || 'en';
  
  const { subscribe, set, update } = writable<Language>(initial);

  return {
    subscribe,
    set: (lang: Language) => {
      if (browser) {
        localStorage.setItem('language', lang);
      }
      set(lang);
    },
    toggle: () => {
      update(lang => {
        const newLang = lang === 'en' ? 'sv' : 'en';
        if (browser) {
          localStorage.setItem('language', newLang);
        }
        return newLang;
      });
    }
  };
}

export const language = createLanguageStore();

// Derived store for translations
export const t = derived(language, $language => translations[$language]);
