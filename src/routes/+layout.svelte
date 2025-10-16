<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import { theme } from '$lib/stores/themeStore';
  import { browser } from '$app/environment';
  
  // Just subscribe - the store handles everything
  $: currentTheme = $theme;
  
  // Debug logging
  $: if (browser) {
    console.log('Layout: current theme is', currentTheme);
    console.log('Layout: html classes are', document.documentElement.className);
  }
</script>

<div class="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
  <Header />
  <main>
    <slot />
  </main>
</div>
