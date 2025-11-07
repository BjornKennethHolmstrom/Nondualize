<!-- src/lib/components/Header.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
  import { language, t } from '$lib/stores/languageStore';
  import { theme } from '$lib/stores/themeStore';
  
  let mobileMenuOpen = false;
  
  $: currentLanguage = $language;
  $: currentTheme = $theme;
</script>

<header class="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo and Title -->
      <a href="{base}/" class="flex items-center gap-3 text-2xl font-light text-slate-800 dark:text-slate-100 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
        <img src="{base}/logo.svg" alt="Nondualize logo" class="w-8 h-8" />
        <span>Nondualize</span>
      </a>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <a href="{base}/" class="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
          {$t.nav.home}
        </a>
        <a href="{base}/guides" class="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
          {$t.nav.guides}
        </a>
        <a href="{base}/contact" class="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
          {$t.nav.contact}
        </a>
        <a href="{base}/about" class="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
          {$t.nav.about}
        </a>
        <a href="{base}/support" class="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
          {$t.nav.support}
        </a>
        
        <!-- Language Toggle -->
        <button
          on:click={() => language.toggle()}
          class="px-3 py-1 text-sm rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          {currentLanguage === 'en' ? 'SV' : 'EN'}
        </button>
        
        <!-- Theme Toggle -->
        <button
          on:click={() => theme.toggle()}
          class="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300"
          aria-label="Toggle theme"
        >
          {#if currentTheme === 'light'}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          {:else}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          {/if}
        </button>
      </div>
      
      <!-- Mobile menu button -->
      <button
        on:click={() => mobileMenuOpen = !mobileMenuOpen}
        class="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    
    <!-- Mobile menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden py-4 border-t border-slate-200 dark:border-slate-800">
        <div class="flex flex-col gap-4">
          <a href="{base}/" class="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">
            {$t.nav.home}
          </a>
          <a href="{base}/guides" class="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">
            {$t.nav.guides}
          </a>
          <a href="{base}/about" class="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">
            {$t.nav.about}
          </a>
          <div class="flex gap-4 pt-2">
            <button
              on:click={() => language.toggle()}
              class="px-3 py-1 text-sm rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {currentLanguage === 'en' ? 'SV' : 'EN'}
            </button>
            <button
              on:click={() => theme.toggle()}
              class="p-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {currentTheme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
    {/if}
  </nav>
</header>
