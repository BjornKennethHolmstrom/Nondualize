<!-- src/lib/components/SEO.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  
  // Props
  export let title: string;
  export let description: string;
  export let keywords: string = '';
  export let image: string = '/logo.svg';
  export let type: 'website' | 'article' = 'website';
  export let author: string = 'Björn Kenneth Holmström';
  export let publishedTime: string = '';
  export let modifiedTime: string = '';
  export let section: string = '';
  
  // Compute full URL
  $: url = typeof window !== 'undefined' ? window.location.href : '';
  
  // Compute full image URL
  $: fullImageUrl = image.startsWith('http') 
    ? image 
    : `https://nondualize.org${image}`;
  
  // Site defaults
  const siteName = 'Nondualize';
  const twitterHandle = '@nondualize'; // Update if you have one
  
  // Construct full title
  $: fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{fullTitle}</title>
  <meta name="title" content={fullTitle} />
  <meta name="description" content={description} />
  {#if keywords}
    <meta name="keywords" content={keywords} />
  {/if}
  <meta name="author" content={author} />
  
  <!-- Canonical URL -->
  <link rel="canonical" href={url} />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={fullImageUrl} />
  <meta property="og:site_name" content={siteName} />
  
  {#if type === 'article'}
    <meta property="article:author" content={author} />
    {#if publishedTime}
      <meta property="article:published_time" content={publishedTime} />
    {/if}
    {#if modifiedTime}
      <meta property="article:modified_time" content={modifiedTime} />
    {/if}
    {#if section}
      <meta property="article:section" content={section} />
    {/if}
    {#if keywords}
      {#each keywords.split(',').map(k => k.trim()) as keyword}
        <meta property="article:tag" content={keyword} />
      {/each}
    {/if}
  {/if}
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={url} />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={fullImageUrl} />
  {#if twitterHandle}
    <meta name="twitter:creator" content={twitterHandle} />
    <meta name="twitter:site" content={twitterHandle} />
  {/if}
  
  <!-- Additional SEO -->
  <meta name="robots" content="index, follow" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />
</svelte:head>
