<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { t } from '$lib/stores/languageStore';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
  
  $: currentLanguage = globalThis.language;
  
  $: seoTitle = currentLanguage === 'en'
    ? 'Nondualize - Exploring Non-Dual Awareness'
    : 'Nondualize - Utforska Icke-dual Medvetenhet';
    
  $: seoDescription = currentLanguage === 'en'
    ? 'Free, open resource for exploring non-dual awareness through intellectual frameworks, direct pointers, and practical integration. Bridges understanding with recognition.'
    : 'Gratis, öppen resurs för att utforska icke-dual medvetenhet genom intellektuella ramverk, direkta pekare och praktisk integration.';
</script>

<SEO 
  title={seoTitle}
  description={seoDescription}
  keywords="non-duality, non-dual awareness, advaita, zen, consciousness, awakening, spiritual development"
  type="website"
/>

<svelte:head>
  <title>{$t.home.title} | {$t.home.subtitle}</title>
  <meta name="description" content={$t.home.intro}>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-20" in:fade>
  <header class="text-center mb-16">
    <!-- Logo -->
    <div class="flex justify-center mb-8">
      <img 
        src="{base}/logo.svg" 
        alt="Nondualize logo" 
        class="w-24 h-24 md:w-32 md:h-32 opacity-90"
      />
    </div>
    
    <h1 class="text-5xl font-light mb-4 text-slate-800 dark:text-slate-100">
      {$t.home.title}
    </h1>
    <p class="text-xl font-light text-slate-600 dark:text-slate-400">
      {$t.home.subtitle}
    </p>
  </header>

  <div class="prose-custom mx-auto">
    <p class="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      {$t.home.intro}
    </p>

    <p class="text-lg leading-relaxed mt-6 text-slate-700 dark:text-slate-300">
      {$t.home.description}
    </p>

    <div class="mt-12 text-center">
      <p class="text-sm text-slate-500 dark:text-slate-400 italic">
        {$t.home.sectionsComplete}
      </p>
    </div>
  </div>
</div>
