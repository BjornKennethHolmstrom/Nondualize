import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function createThemeStore() {
  // Get initial theme
  let initial: Theme = 'light';
  
  if (browser) {
    const stored = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    initial = stored || (prefersDark ? 'dark' : 'light');
    console.log('Initial theme:', initial);
  }
  
  const { subscribe, set, update } = writable<Theme>(initial);

  // Apply theme to document
  const applyTheme = (theme: Theme) => {
    if (!browser) return;
    
    console.log('Applying theme:', theme);
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      console.log('Dark class added, classes:', document.documentElement.className);
    } else {
      document.documentElement.classList.remove('dark');
      console.log('Dark class removed, classes:', document.documentElement.className);
    }
    localStorage.setItem('theme', theme);
  };

  // Apply initial theme
  if (browser) {
    applyTheme(initial);
  }

  return {
    subscribe,
    set: (theme: Theme) => {
      console.log('Theme set called:', theme);
      applyTheme(theme);
      set(theme);
    },
    toggle: () => {
      console.log('Theme toggle called');
      update(current => {
        console.log('Current theme:', current);
        const newTheme = current === 'light' ? 'dark' : 'light';
        console.log('New theme:', newTheme);
        applyTheme(newTheme);
        return newTheme;
      });
    }
  };
}

export const theme = createThemeStore();
