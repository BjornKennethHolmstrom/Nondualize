<!-- src/routes/guides/[slug]/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
  import { language } from '$lib/stores/languageStore';
  import { 
    nondualityGuideStore, 
    setCurrentItem,
    getAdjacentItems,
    getSection1Items,
    getSection2Items,
    getSection3Items,
    getSection4Items,
    getItemByPath
  } from '$lib/stores/nondualityGuideStore';
  import { afterNavigate } from '$app/navigation';
  import { browser } from '$app/environment';

  afterNavigate(({ to, from }) => {
    if (to?.params.slug !== from?.params.slug) {
      setCurrentItem(to.params.slug);
      loadContent(to.params.slug);
    }
  });

  $: currentLanguage = $language;

  // Content loading states
  let ContentComponent: any = null;
  let isLoading = true;
  let isAvailable = true;
  let errorMessage = '';
  
  // Get navigation items
  const section1Items = getSection1Items();
  const section2Items = getSection2Items();
  const section3Items = getSection3Items();
  const section4Items = getSection4Items();

  // Get slug from page params
  $: slug = $page.params.slug;
  
  // Access translations
  $: t = $nondualityGuideStore.translations[currentLanguage];
  
  // Set current item when slug changes
  $: {
    if (slug) {
      setCurrentItem(slug);
      loadContent(slug);
    }
  }
  
  // Current item and navigation tracking
  $: currentItem = $nondualityGuideStore.currentItem;
  $: adjacentItems = currentItem ? getAdjacentItems(currentItem.path) : { previous: null, next: null };
  
  // Form item title
  $: itemTitle = currentItem ? formItemTitle(currentItem) : '';
  
  function formItemTitle(item: any) {
    if (!item) return '';
    
    if (item.type === 'article') {
      return `${t.article} ${item.number}: ${item.title[currentLanguage]}`;
    } else if (item.type === 'section-intro') {
      return item.title[currentLanguage];
    }
    
    return item.title[currentLanguage];
  }

  async function loadContent(itemSlug: string) {
    isLoading = true;
    ContentComponent = null;
    
    try {
      const item = getItemByPath(itemSlug);
      if (!item) {
        console.warn(`Item not found for slug: ${itemSlug}`);
        isAvailable = false;
        isLoading = false;
        return;
      }

      // Try to import the mdsvex component directly
      // Try language-specific first, then English fallback
      const pathsToTry = currentLanguage === 'sv' 
        ? [
            `../../../content/guides/nonduality/sv/${itemSlug}.md`,
            `../../../content/guides/nonduality/en/${itemSlug}.md`
          ]
        : [`../../../content/guides/nonduality/en/${itemSlug}.md`];

      let contentLoaded = false;
      
      for (const importPath of pathsToTry) {
        try {
          const module = await import(/* @vite-ignore */ importPath);
          ContentComponent = module.default;
          contentLoaded = true;
          isAvailable = true;
          console.log(`Successfully loaded content from: ${importPath}`);
          break;
        } catch (error: any) {
          console.warn(`Failed to load from ${importPath}: ${error.message}`);
        }
      }

      if (!contentLoaded) {
        isAvailable = false;
      }
    } catch (error: any) {
      console.error(`Error loading content: ${error.message}`);
      errorMessage = error.message;
      isAvailable = false;
    } finally {
      isLoading = false;
    }
  }
</script>

<svelte:head>
  <title>{itemTitle} | Nondualize</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-12">
  {#if isLoading}
    <div class="flex justify-center items-center py-20">
      <p class="text-slate-500 dark:text-slate-400">{t.loading}</p>
    </div>
  {:else}
    <div in:fade>
      <!-- Page layout with sidebar for larger screens -->
      <div class="lg:flex gap-8">
        <!-- Sidebar navigation -->
        <div class="hidden lg:block w-64 flex-shrink-0">
          <div class="sticky top-24">
            <a 
              href="{base}/guides" 
              class="font-semibold text-lg mb-4 inline-flex items-center hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
            >
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              {t.backToGuides}
            </a>
            
            <!-- Section 1 -->
            <div class="mt-6">
              <h4 class="text-sm uppercase text-slate-500 dark:text-slate-400 font-medium mb-2">
                {t.sections[1]}
              </h4>
              <ul class="space-y-2 border-l border-slate-200 dark:border-slate-700 pl-4">
                {#each section1Items as item}
                  <li>
                    <a 
                      href="{base}/guides/{item.path}"
                      class="block py-1 text-sm hover:text-slate-900 dark:hover:text-slate-100 transition-colors {item.path === slug ? 'font-semibold text-slate-900 dark:text-slate-100 border-l-2 border-slate-900 dark:border-slate-100 -ml-[17px] pl-[15px]' : 'text-slate-600 dark:text-slate-400'}"
                    >
                      {#if item.type === 'article'}
                        {item.number}. {item.title[currentLanguage]}
                      {:else}
                        {item.title[currentLanguage]}
                      {/if}
                    </a>
                  </li>
                {/each}
              </ul>
            </div>
            
            <!-- Section 2 -->
            <div class="mt-6">
              <h4 class="text-sm uppercase text-slate-500 dark:text-slate-400 font-medium mb-2">
                {t.sections[2]}
              </h4>
              <ul class="space-y-2 border-l border-slate-200 dark:border-slate-700 pl-4">
                {#each section2Items as item}
                  <li>
                    <span class="block py-1 text-sm text-slate-400 dark:text-slate-600 cursor-not-allowed">
                      {item.title[currentLanguage]}
                    </span>
                  </li>
                {/each}
              </ul>
            </div>
            
            <!-- Section 3 -->
            <div class="mt-6">
              <h4 class="text-sm uppercase text-slate-500 dark:text-slate-400 font-medium mb-2">
                {t.sections[3]}
              </h4>
              <ul class="space-y-2 border-l border-slate-200 dark:border-slate-700 pl-4">
                {#each section3Items as item}
                  <li>
                    <span class="block py-1 text-sm text-slate-400 dark:text-slate-600 cursor-not-allowed">
                      {item.title[currentLanguage]}
                    </span>
                  </li>
                {/each}
              </ul>
            </div>
            
            <!-- Section 4 -->
            <div class="mt-6">
              <h4 class="text-sm uppercase text-slate-500 dark:text-slate-400 font-medium mb-2">
                {t.sections[4]}
              </h4>
              <ul class="space-y-2 border-l border-slate-200 dark:border-slate-700 pl-4">
                {#each section4Items as item}
                  <li>
                    <span class="block py-1 text-sm text-slate-400 dark:text-slate-600 cursor-not-allowed">
                      {item.title[currentLanguage]}
                    </span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Main content area -->
        <div class="flex-1 max-w-4xl">
          <!-- Content breadcrumb only -->
          <div class="mb-10">
            {#if currentItem?.type === 'article'}
              <div class="text-sm text-slate-600 dark:text-slate-400 mb-6">
                {t.sections[currentItem.section]} · {t.article} {currentItem.number}
              </div>
            {:else if currentItem?.type === 'section-intro'}
              <div class="text-sm text-slate-600 dark:text-slate-400 mb-6">
                {t.sections[currentItem.section]}
              </div>
            {/if}
          </div>
          
          <!-- Content -->
          {#if isAvailable && ContentComponent}
            <div class="prose-custom">
              <svelte:component this={ContentComponent} />
            </div>
          {:else}
            <div class="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg text-center">
              <p class="text-lg text-slate-600 dark:text-slate-400 mb-4">{t.comingSoon}</p>
            </div>
          {/if}
          
          <!-- Previous/Next navigation -->
          <div class="flex justify-between mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
            {#if adjacentItems.previous}
              <a 
                href="{base}/guides/{adjacentItems.previous.path}" 
                class="flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                <span>
                  <span class="block text-xs text-slate-500 dark:text-slate-500">{t.previous}</span>
                  <span class="text-sm">{adjacentItems.previous.title[currentLanguage]}</span>
                </span>
              </a>
            {:else}
              <div></div>
            {/if}
            
            {#if adjacentItems.next}
              <a 
                href="{base}/guides/{adjacentItems.next.path}" 
                class="flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                <span class="text-right">
                  <span class="block text-xs text-slate-500 dark:text-slate-500">{t.next}</span>
                  <span class="text-sm">{adjacentItems.next.title[currentLanguage]}</span>
                </span>
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            {:else}
              <div></div>
            {/if}
          </div>
          
          <!-- Back to guides -->
          <div class="text-center mt-10">
            <a 
              href="{base}/guides" 
              class="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {t.backToGuides}
            </a>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

