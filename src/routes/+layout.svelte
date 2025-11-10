<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { theme } from '$lib/stores/themeStore';
  import { browser } from '$app/environment';
  
  // Just subscribe - the store handles everything
  $: currentTheme = $theme;
  
  // Debug logging and PWA setup
  onMount(async () => {
    if (browser) {
      console.log('Layout: current theme is', currentTheme);
      console.log('Layout: html classes are', document.documentElement.className);
      
      // Register service worker for PWA functionality
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('./service-worker.js');
          console.log('Service Worker registered successfully:', registration.scope);
        } catch (error) {
          console.log('Service Worker registration failed:', error);
        }
      }
    }
  });
</script>

<svelte:head>
  <title>Nondualize - Explore non-dual awareness</title>
  <meta name="description" content="Free, open-source educational resource for exploring non-dual awareness and consciousness" />
  
  <!-- PWA Meta Tags -->
  <link rel="manifest" href="./manifest.json" />
  <meta name="theme-color" content="#475569" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content="Nondualize" />
  
  <!-- Additional favicon sizes -->
  <link rel="icon" type="image/png" sizes="16x16" href="./icons/favicon-16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="./icons/favicon-32.png" />
  <link rel="apple-touch-icon" href="./icons/apple-touch-icon.png" />
  
  <!-- Microsoft Tiles -->
  <meta name="msapplication-TileColor" content="#475569" />
  <meta name="msapplication-TileImage" content="./icons/ms-tile-144.png" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Nondualize - Explore non-dual awareness" />
  <meta property="og:description" content="Free, open-source educational resource for exploring non-dual awareness and consciousness" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="Nondualize - Explore non-dual awareness" />
  <meta property="twitter:description" content="Free, open-source educational resource for exploring non-dual awareness and consciousness" />
</svelte:head>

<div class="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
