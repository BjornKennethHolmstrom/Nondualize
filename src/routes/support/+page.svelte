<!-- src/routes/support/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { language } from '$lib/stores/languageStore';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';

  $: currentLanguage = $language;

  const translations = {
    en: {
      title: "Support Nondualize",
      subtitle: "Help maintain this space of presence",
      
      currentPhase: {
        title: "🌊 Current Phase: Digital Sanctuary",
        content: "Nondualize exists as a gentle reminder of what we already are—a mirror of presence, clean and available to all who feel the call. The site's basic needs are minimal, allowing the focus to remain on the essential pointing."
      },
      
      supportWays: {
        title: "Ways to Support This Presence",
        spiritual: {
          title: "💝 Spiritual Support",
          items: [
            "Share Nondualize with others who might resonate",
            "Participate in the pointing by sharing insights",
            "Offer feedback to help clarify the teachings",
            "Help maintain the gentle, non-grasping tone"
          ]
        },
        knowledge: {
          title: "📚 Knowledge Sharing", 
          items: [
            "Suggest improvements to pointers and explanations",
            "Share your recognition experiences (when appropriate)",
            "Help translate content into other languages",
            "Contribute perspectives from different traditions"
          ]
        },
        community: {
          title: "🌐 Community Nurturing",
          items: [
            "Help test the site's clarity and accessibility",
            "Share how these resources have supported your journey",
            "Participate in creating a welcoming digital space",
            "Help bridge developmental and non-dual understanding"
          ]
        }
      },

      futureVision: {
        title: "Future Possibilities",
        content: "In the world of form, resources help maintain the pointing. If support becomes possible in the future, it would flow toward:",
        principles: [
          "Keeping the digital gates open and welcoming",
          "Creating more content that points beyond content",
          "Honoring the silence between the words",
          "Supporting the simple being-ness this points to",
          "Translation efforts for global accessibility"
        ]
      },

      paradox: {
        title: "The Beautiful Paradox",
        content: "No transaction occurs in reality—yet in the relative world, your engagement helps preserve this mirror of presence. Your being here is already the perfect support.",
        signature: "In gratitude"
      }
    },
    sv: {
      title: "Stöd Nondualize", 
      subtitle: "Hjälp till att bevara detta utrymme för närvaro",
      
      currentPhase: {
        title: "🌊 Nuvarande Fas: Digitalt Sanktuarium",
        content: "Nondualize finns som en mild påminnelse om vad vi redan är—en spegel av närvaro, ren och tillgänglig för alla som känner kallningen. Webbplatsens grundläggande behov är minimala, vilket låter fokus förbli på den essentiella pekaren."
      },
      
      supportWays: {
        title: "Sätt att Stödja Denna Närvaro",
        spiritual: {
          title: "💝 Andligt Stöd",
          items: [
            "Dela Nondualize med andra som kan resonera",
            "Delta i pekandet genom att dela insikter", 
            "Ge feedback för att hjälpa till att förtydliga lärandet",
            "Hjälp till att bevara den milda, icke-gripande tonen"
          ]
        },
        knowledge: {
          title: "📚 Kunskapsdelning",
          items: [
            "Föreslå förbättringar av pekare och förklaringar",
            "Dela dina igenkännandeerfarenheter (när lämpligt)",
            "Hjälp till att översätta innehåll till andra språk",
            "Bidra med perspektiv från olika traditioner"
          ]
        },
        community: {
          title: "🌐 Gemenskapsvård",
          items: [
            "Hjälp till att testa webbplatsens tydlighet och tillgänglighet",
            "Dela hur dessa resurser har stöttat din resa",
            "Delta i att skapa ett inbjudande digitalt utrymme", 
            "Hjälp till att överbrygga utvecklingsmässig och icke-dual förståelse"
          ]
        }
      },

      futureVision: {
        title: "Framtida Möjligheter",
        content: "I formvärlden hjälper resurser till att bevara pekandet. Om stöd blir möjligt i framtiden skulle det flöda mot:",
        principles: [
          "Hålla de digitala grindarna öppna och inbjudande",
          "Skapa mer innehåll som pekar bortom innehåll",
          "Hedra tystnaden mellan orden",
          "Stödja det enkla varandet som detta pekar på",
          "Översättningsinsatser för global tillgänglighet"
        ]
      },

      paradox: {
        title: "Den Vackra Paradoxen", 
        content: "Ingen transaktion sker i verkligheten—ändå i den relativa världen hjälper ditt engagemang till att bevara denna spegel av närvaro. Ditt vara här är redan det perfekta stödet.",
        signature: "Med tacksamhet"
      }
    }
  };

  $: pageTranslations = translations[currentLanguage];

  $: seoTitle = currentLanguage === 'en'
    ? 'Support Nondualize - Maintain Space for Presence'
    : 'Stöd Nondualize - Bevara utrymme för närvaro';
    
  $: seoDescription = currentLanguage === 'en'
    ? 'Learn how to support Nondualize through spiritual engagement, knowledge sharing, and community nurturing. Help maintain this digital sanctuary for non-dual awareness.'
    : 'Lär dig hur du kan stödja Nondualize genom andligt engagemang, kunskapsdelning och gemenskapsvård. Hjälp till att bevara detta digitala sanktuarium för icke-dual medvetenhet.';
</script>

<SEO 
  title={seoTitle}
  description={seoDescription}
  keywords="support nondualize, non-duality resources, spiritual support, consciousness education"
  type="website"
/>

<svelte:head>
  <title>{seoTitle}</title>
  <meta name="description" content={seoDescription}>
</svelte:head>

<div class="min-h-screen" in:fade>
  <div class="max-w-4xl mx-auto px-4 py-16">
    
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-light mb-4 text-primary-900 dark:text-primary-100">
        {pageTranslations.title}
      </h1>
      <p class="text-xl text-primary-600 dark:text-primary-400 font-light">
        {pageTranslations.subtitle}
      </p>
    </div>

    <!-- Current Phase -->
    <div class="bg-primary-50 dark:bg-primary-900 rounded-lg p-8 mb-12 border-l-4 border-primary-400">
      <h2 class="text-2xl font-semibold text-primary-900 dark:text-primary-100 mb-4">
        {pageTranslations.currentPhase.title}
      </h2>
      <p class="text-primary-700 dark:text-primary-300 leading-relaxed text-lg">
        {pageTranslations.currentPhase.content}
      </p>
    </div>

    <!-- Support Ways -->
    <div class="bg-white dark:bg-primary-800 rounded-lg shadow-sm p-8 mb-12">
      <h2 class="text-2xl font-semibold text-primary-900 dark:text-primary-100 mb-8 text-center">
        {pageTranslations.supportWays.title}
      </h2>
      
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Spiritual Support -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-primary-800 dark:text-primary-200">
            {pageTranslations.supportWays.spiritual.title}
          </h3>
          <ul class="space-y-3">
            {#each pageTranslations.supportWays.spiritual.items as item}
              <li class="flex items-start text-primary-700 dark:text-primary-300">
                <span class="text-primary-500 dark:text-primary-400 mr-2 mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Knowledge Support -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-primary-800 dark:text-primary-200">
            {pageTranslations.supportWays.knowledge.title}
          </h3>
          <ul class="space-y-3">
            {#each pageTranslations.supportWays.knowledge.items as item}
              <li class="flex items-start text-primary-700 dark:text-primary-300">
                <span class="text-primary-500 dark:text-primary-400 mr-2 mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <!-- Community Support -->
      <div class="mt-8 pt-6 border-t border-primary-200 dark:border-primary-700">
        <h3 class="text-lg font-semibold text-primary-800 dark:text-primary-200 mb-4">
          {pageTranslations.supportWays.community.title}
        </h3>
        <ul class="grid md:grid-cols-2 gap-4">
          {#each pageTranslations.supportWays.community.items as item}
            <li class="flex items-start text-primary-700 dark:text-primary-300">
              <span class="text-primary-500 dark:text-primary-400 mr-2 mt-1 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Future Vision -->
    <div class="bg-primary-800 dark:bg-primary-900 rounded-lg text-primary-50 p-8 mb-12">
      <h2 class="text-2xl font-semibold mb-6">
        {pageTranslations.futureVision.title}
      </h2>
      <p class="text-primary-200 mb-6 leading-relaxed text-lg">
        {pageTranslations.futureVision.content}
      </p>
      <ul class="space-y-3">
        {#each pageTranslations.futureVision.principles as principle}
          <li class="flex items-start text-primary-100">
            <span class="text-primary-300 mr-2 mt-1 flex-shrink-0">•</span>
            <span>{principle}</span>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Paradox Section -->
    <div class="text-center bg-primary-50 dark:bg-primary-800 rounded-lg p-8">
      <h2 class="text-2xl font-semibold text-primary-900 dark:text-primary-100 mb-4">
        {pageTranslations.paradox.title}
      </h2>
      <p class="text-primary-700 dark:text-primary-300 text-lg mb-6 max-w-2xl mx-auto leading-relaxed italic">
        {pageTranslations.paradox.content}
      </p>
      <p class="text-primary-600 dark:text-primary-400 font-medium">
        {pageTranslations.paradox.signature}
      </p>
    </div>

  </div>
</div>
