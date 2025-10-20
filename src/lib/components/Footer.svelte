<!-- src/lib/components/Footer.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
  import { language } from '$lib/stores/languageStore';
  
  $: currentLanguage = $language;
  
  const labels = {
    en: {
      about: 'About',
      license: 'CC BY-SA 4.0'
    },
    sv: {
      about: 'Om',
      license: 'CC BY-SA 4.0'
    }
  };
  
  $: t = labels[currentLanguage] || labels.en;
</script>

<footer class="border-t border-slate-200 dark:border-slate-800 mt-20 py-8">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <p class="text-sm text-slate-500 dark:text-slate-400">
      <a 
        href="{base}/about" 
        class="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
      >
        {t.about}
      </a>
      <span class="mx-3">•</span>
      <a 
        href="https://spiralize.org" 
        class="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Spiralize
      </a>
      <span class="mx-3">•</span>
      <a 
        href="https://communize.org" 
        class="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Communize
      </a>
      <span class="mx-3">•</span>
      <a 
        href="https://globalgovernanceframeworks.org" 
        class="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        GGF
      </a>
      <span class="mx-3">•</span>
      <span class="text-slate-400 dark:text-slate-500">{t.license}</span>
    </p>
  </div>
</footer>
