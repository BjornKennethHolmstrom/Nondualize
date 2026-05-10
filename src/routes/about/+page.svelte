<script lang="ts">
  import { fade } from 'svelte/transition';
  import { language } from '$lib/stores/languageStore';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';

  $: currentLanguage = $language;

  const translations = {
    en: {
      title: "About Nondualize",
      subtitle: "Exploring the unified nature of reality",
      paragraphs: [
        "Nondualize is a free, open resource for exploring non-dual awareness—the recognition that the apparent separation between self and other, observer and observed, is not ultimately real.",
        "This site offers both intellectual frameworks for understanding non-duality and direct pointers for recognizing it. We honor the mind's need to comprehend while inviting direct experience of what lies beyond concepts.",
        "Through essays, practices, and cross-traditional perspectives, Nondualize bridges developmental understanding with non-dual recognition—respecting both the path of growing up and the possibility of waking up."
      ],
      philosophy: {
        title: "Our philosophy",
        points: [
          "Completely free to use—no paywalls, no registration, no tracking",
          "Open source and transparent",
          "Respecting both intellectual and experiential paths",
          "Avoiding spiritual elitism and bypassing",
          "Integration, not transcendence"
        ]
      },
      relatedSites: {
        title: "Related projects",
        subtitle: "Nondualize is part of an interconnected ecosystem exploring human consciousness and collective flourishing:",
        sites: [
          {
            name: "Nondualize",
            tagline: "Being",
            description: "Exploring non-dual awareness—the recognition of the unified nature of reality and awakening to wholeness.",
            url: "https://nondualize.org",
            logo: "/logo.svg",
            current: true
          },
          {
            name: "Spiralize",
            tagline: "Becoming",
            description: "Mapping developmental stages of consciousness and values evolution through Spiral Dynamics.",
            url: "https://spiralize.org",
            logo: "/logo-spiralize.svg"
          },
          {
            name: "Communize",
            tagline: "Belonging",
            description: "Building community and creating commons at every scale—from inner integration to planetary stewardship.",
            url: "https://communize.org",
            logo: "/logo-communize.svg"
          },
          {
            name: "Global Governance Frameworks",
            tagline: "Systemizing",
            description: "Designing governance frameworks for planetary coordination and collective action on global challenges.",
            url: "https://globalgovernanceframeworks.org",
            logo: "/logo-ggf.svg"
          }
        ],
        integration: "Together, these projects explore the full spectrum of human development: from awakening to understanding to embodying in community to coordinating at scale."
      },
      author: {
        title: "About the author",
        text: "Nondualize is created by Björn Kenneth Holmström, who writes about consciousness, philosophy, and the integration of developmental and non-dual perspectives. He also applies systems thinking to governance design.",
        link: "Visit personal website"
      }
    },
    sv: {
      title: "Om Nondualize",
      subtitle: "Att utforska verklighetens enhetliga natur",
      paragraphs: [
        "Nondualize är en gratis, öppen resurs för att utforska icke-dual medvetenhet—insikten att den uppenbara separationen mellan själv och andra, observatör och observerat, inte är ultimat verklig.",
        "Denna webbplats erbjuder både intellektuella ramverk för att förstå icke-dualitet och direkta pekare för att känna igen den. Vi hedrar sinnets behov av att förstå samtidigt som vi bjuder in till direkt erfarenhet av det som ligger bortom koncept.",
        "Genom essäer, praktiker och perspektiv från olika traditioner överbryggar Nondualize utvecklingsförståelse med icke-dual igenkänning—och respekterar både vägen att växa upp och möjligheten att vakna upp."
      ],
      philosophy: {
        title: "Vår filosofi",
        points: [
          "Helt gratis att använda—inga betalväggar, ingen registrering, ingen spårning",
          "Öppen källkod och transparent",
          "Respektera både intellektuella och erfarenhetsmässiga vägar",
          "Undvika andlig elitism och förbigående",
          "Integration, inte transcendens"
        ]
      },
      relatedSites: {
        title: "Relaterade projekt",
        subtitle: "Nondualize är en del av ett sammanlänkat ekosystem som utforskar mänskligt medvetande och kollektivt välmående:",
        sites: [
          {
            name: "Nondualize",
            tagline: "Varande",
            description: "Utforska icke-dual medvetenhet—erkännandet av verklighetens enhetliga natur och uppvaknande till helhet.",
            url: "https://nondualize.org",
            logo: "/logo.svg",
            current: true
          },
          {
            name: "Spiralize",
            tagline: "Blivande",
            description: "Kartlägga utvecklingsstadier av medvetande och värdesutveckling genom Spiral Dynamics.",
            url: "https://spiralize.org",
            logo: "/logo-spiralize.svg"
          },
          {
            name: "Communize",
            tagline: "Tillhörighet",
            description: "Bygga gemenskap och skapa allmänningar på varje nivå—från inre integration till planetärt förvaltarskap.",
            url: "https://communize.org",
            logo: "/logo-communize.svg"
          },
          {
            name: "Global Governance Frameworks",
            tagline: "Systematisering",
            description: "Designa styrningsramverk för planetär samordning och kollektiv handling på globala utmaningar.",
            url: "https://globalgovernanceframeworks.org",
            logo: "/logo-ggf.svg"
          }
        ],
        integration: "Tillsammans utforskar dessa projekt hela spektrumet av mänsklig utveckling: från uppvaknande till förståelse till förkroppsligande i gemenskap till samordning i stor skala."
      },
      author: {
        title: "Om författaren",
        text: "Nondualize skapas av Björn Kenneth Holmström, som skriver om medvetande, filosofi och integrationen av utvecklingsmässiga och icke-duala perspektiv. Han tillämpar även systemtänkande inom styrningsdesign.",
        link: "Besök personlig webbplats"
      }
    }
  };

  $: pageTranslations = translations[currentLanguage];

  $: title = currentLanguage === 'en'
    ? 'About Nondualize | Exploring Non-Dual Awareness'
    : 'Om Nondualize | Utforska icke-dual medvetenhet';
    
  $: description = currentLanguage === 'en'
    ? 'Learn about Nondualize, a free resource bridging intellectual understanding and direct recognition of non-dual awareness.'
    : 'Lär dig om Nondualize, en gratis resurs som överbryggar intellektuell förståelse och direkt igenkänning av icke-dual medvetenhet.';

  $: seoTitle = currentLanguage === 'en'
    ? 'About Nondualize'
    : 'Om Nondualize';
    
  $: seoDescription = currentLanguage === 'en'
    ? 'Learn about Nondualize, a free resource bridging intellectual understanding and direct recognition of non-dual awareness. Part of an ecosystem with Spiralize, Communize, and Global Governance Frameworks.'
    : 'Lär dig om Nondualize, en gratis resurs som överbryggar intellektuell förståelse och direkt igenkänning av icke-dual medvetenhet.';
</script>

<SEO 
  title={seoTitle}
  description={seoDescription}
  keywords="about nondualize, non-duality education, consciousness resources, Björn Kenneth Holmström"
  type="website"
/>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description}>
</svelte:head>

<div class="min-h-screen" in:fade>
  <div class="max-w-4xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-light mb-4 text-slate-800 dark:text-slate-100">
        {pageTranslations.title}
      </h1>
      <p class="text-xl text-slate-600 dark:text-slate-400 font-light">
        {pageTranslations.subtitle}
      </p>
    </div>

    <!-- Content -->
    <div class="prose-custom">
      {#each pageTranslations.paragraphs as paragraph}
        <p class="text-lg leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
          {paragraph}
        </p>
      {/each}

      <!-- Philosophy Section -->
      <div class="mt-12 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
        <h2 class="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
          {pageTranslations.philosophy.title}
        </h2>
        <ul class="space-y-2">
          {#each pageTranslations.philosophy.points as point}
            <li class="flex items-start text-slate-700 dark:text-slate-300">
              <span class="text-slate-500 dark:text-slate-400 mr-2">•</span>
              {point}
            </li>
          {/each}
        </ul>
      </div>

      <!-- Related Sites Section -->
      <div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <h2 class="text-2xl font-semibold mb-3 text-slate-800 dark:text-slate-100">
          {pageTranslations.relatedSites.title}
        </h2>
        <p class="text-slate-600 dark:text-slate-400 mb-6">
          {pageTranslations.relatedSites.subtitle}
        </p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          {#each pageTranslations.relatedSites.sites as site}
            <div class="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border-2 {site.current ? 'border-slate-400 dark:border-slate-500' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'} transition-all">
              <div class="flex items-start gap-4 mb-3">
                <img src={site.logo} alt="{site.name} logo" class="w-12 h-12 flex-shrink-0" />
                <div class="flex-1">
                  <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">{site.name}</h3>
                  <p class="text-sm font-medium text-slate-600 dark:text-slate-400">{site.tagline}</p>
                </div>
              </div>
              <p class="text-sm text-slate-700 dark:text-slate-300 mb-3">
                {site.description}
              </p>
              {#if site.current}
                <span class="inline-block text-sm text-slate-700 dark:text-slate-300 font-medium">
                  You are here
                </span>
              {:else}
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-medium"
                >
                  Visit site →
                </a>
              {/if}
            </div>
          {/each}
        </div>
        
        <p class="text-sm text-slate-600 dark:text-slate-400 italic">
          {pageTranslations.relatedSites.integration}
        </p>
      </div>

      <!-- Author Section -->
      <div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <h2 class="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
          {pageTranslations.author.title}
        </h2>
        <p class="text-slate-700 dark:text-slate-300 mb-4">
          {pageTranslations.author.text}
        </p>
        <a
          href="https://bjornkennethholmstrom.org/"
          target="_blank"
          rel="noopener"
          class="inline-block px-6 py-3 bg-slate-600 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-lg transition-colors"
        >
          {pageTranslations.author.link}
        </a>
      </div>
    </div>
  </div>
</div>
