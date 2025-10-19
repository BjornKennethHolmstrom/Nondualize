<!-- src/lib/components/ArticleStructuredData.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  
  // Props
  export let title: string;
  export let description: string;
  export let author: string = 'Björn Kenneth Holmström';
  export let publishedDate: string = '2024-01-01'; // Default, update as needed
  export let modifiedDate: string = new Date().toISOString();
  export let section: string = '';
  export let articleNumber: number | null = null;
  export let keywords: string[] = [];
  export let image: string = '/logo.svg';
  
  // Compute full URL
  $: url = typeof window !== 'undefined' ? window.location.href : '';
  
  // Compute full image URL
  $: fullImageUrl = image.startsWith('http') 
    ? image 
    : `https://nondualize.org${image}`;
  
  // Create Article structured data
  $: articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": fullImageUrl,
    "datePublished": publishedDate,
    "dateModified": modifiedDate,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://bjornkennethholmstrom.wordpress.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nondualize",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nondualize.org/logo.svg"
      },
      "url": "https://nondualize.org"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    ...(section && {
      "articleSection": section
    }),
    ...(keywords.length > 0 && {
      "keywords": keywords.join(', ')
    }),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Nondualize",
      "url": "https://nondualize.org"
    }
  };
  
  // Create BreadcrumbList structured data
  $: breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nondualize.org"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Guides",
        "item": "https://nondualize.org/guides"
      },
      ...(section ? [{
        "@type": "ListItem",
        "position": 3,
        "name": section,
        "item": url.split('/').slice(0, -1).join('/')
      }] : []),
      {
        "@type": "ListItem",
        "position": section ? 4 : 3,
        "name": title,
        "item": url
      }
    ]
  };
  
  // Create EducationalOccupationalCredential for educational content
  $: educationalData = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": title,
    "description": description,
    "educationalUse": "self-study",
    "learningResourceType": "article",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "author": {
      "@type": "Person",
      "name": author
    },
    "about": {
      "@type": "Thing",
      "name": "Non-duality",
      "description": "The recognition that apparent separation between self and other is not ultimately real"
    }
  };
  
  // Combine all structured data
  $: structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      articleData,
      breadcrumbData,
      educationalData
    ]
  };
  
  // Convert to JSON string
  $: jsonLd = JSON.stringify(structuredData, null, 2);
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>
