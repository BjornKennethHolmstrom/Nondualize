<script lang="ts">
  import { fade } from 'svelte/transition';
  import { language } from '$lib/stores/languageStore';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';

  $: currentLanguage = $language;

  const translations = {
    en: {
      title: "About Nondualize",
      subtitle: "A companion site to Spiralize.org",
      paragraphs: [
        "Nondualize is a free, open resource for exploring non-dual awareness—the recognition that the apparent separation between self and other, observer and observed, is not ultimately real.",
        "This site offers both intellectual frameworks for understanding non-duality and direct pointers for recognizing it. We honor the mind's need to comprehend while inviting direct experience of what lies beyond concepts.",
        "Nondualize complements Spiralize.org by bridging developmental understanding with non-dual recognition. Where Spiral Dynamics maps the evolution of worldviews, non-duality points to what witnesses all worldviews."
      ],
      philosophy: {
        title: "Our Philosophy",
        points: [
          "Completely free to use—no paywalls, no registration, no tracking",
          "Open source and transparent",
          "Respecting both intellectual and experiential paths",
          "Avoiding spiritual elitism and bypassing",
          "Integration, not transcendence"
        ]
      },
      companion: {
        title: "Companion Resources",
        spiralize: {
          text: "Explore developmental psychology and Spiral Dynamics at our sister site:",
          link: "Visit Spiralize.org"
        }
      },
      author: {
        title: "About the Author",
        text: "Nondualize is created by Björn Kenneth Holmström, who writes about consciousness, philosophy, and the integration of developmental and non-dual perspectives.",
        link: "Visit personal website"
      }
    },
    sv: {
      title: "Om Nondualize",
      subtitle: "En kompletterande webbplats till Spiralize.org",
      paragraphs: [
        "Nondualize är en gratis, öppen resurs för att utforska icke-dual medvetenhet—insikten att den uppenbara separationen mellan själv och andra, observatör och observerat, inte är ultimat verklig.",
        "Denna webbplats erbjuder både intellektuella ramverk för att förstå icke-dualitet och direkta pekare för att känna igen den. Vi hedrar sinnets behov av att förstå samtidigt som vi bjuder in till direkt erfarenhet av det som ligger bortom koncept.",
        "Nondualize kompletterar Spiralize.org genom att överbrygga utvecklingsförståelse med icke-dual igenkänning. Där Spiral Dynamics kartlägger utvecklingen av världsbilder, pekar icke-dualitet mot det som bevittnar alla världsbilder."
      ],
      philosophy: {
        title: "Vår Filosofi",
        points: [
          "Helt gratis att använda—inga betalväggar, ingen registrering, ingen spårning",
          "Öppen källkod och transparent",
          "Respektera både intellektuella och erfarenhetsmässiga vägar",
          "Undvika andlig elitism och förbigående",
          "Integration, inte transcendens"
        ]
      },
      companion: {
        title: "Kompletterande Resurser",
        spiralize: {
          text: "Utforska utvecklingspsykologi och Spiral Dynamics på vår systerwebbplats:",
          link: "Besök Spiralize.org"
        }
      },
      author: {
        title: "Om Författaren",
        text: "Nondualize skapas av Björn Kenneth Holmström, som skriver om medvetande, filosofi och integrationen av utvecklingsmässiga och icke-duala perspektiv.",
        link: "Besök personlig webbplats"
      }
    }
  };

  $: pageTranslations = translations[currentLanguage];

  $: title = currentLanguage === 'en'
    ? 'About Nondualize | Exploring Non-Dual Awareness'
    : 'Om Nondualize | Utforska Icke-dual Medvetenhet';
    
  $: description = currentLanguage === 'en'
    ? 'Learn about Nondualize, a free resource bridging intellectual understanding and direct recognition of non-dual awareness.'
    : 'Lär dig om Nondualize, en gratis resurs som överbryggar intellektuell förståelse och direkt igenkänning av icke-dual medvetenhet.';

  $: seoTitle = currentLanguage === 'en'
    ? 'About Nondualize'
    : 'Om Nondualize';
    
  $: seoDescription = currentLanguage === 'en'
    ? 'Learn about Nondualize, a free resource bridging intellectual understanding and direct recognition of non-dual awareness. Sister site to Spiralize.org.'
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

      <!-- Companion Resources -->
      <div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <h2 class="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
          {pageTranslations.companion.title}
        </h2>
        <p class="text-slate-700 dark:text-slate-300 mb-4">
          {pageTranslations.companion.spiralize.text}
        </p>
        <a
          href="https://spiralize.org"
          target="_blank"
          rel="noopener"
          class="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
        >
          {pageTranslations.companion.spiralize.link}
        </a>
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
          href="https://bjornkennethholmstrom.wordpress.com/"
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
