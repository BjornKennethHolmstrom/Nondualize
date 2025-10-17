<!-- src/routes/guides/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { language } from '$lib/stores/languageStore';
  import { base } from '$app/paths';

  $: currentLanguage = $language;

  const translations = {
    en: {
      title: "Explore Non-Duality",
      subtitle: "A progressive journey from understanding to recognition",
      intro: "These guides offer multiple pathways into non-dual awareness. You can start anywhere—follow your curiosity, intellectual interest, or direct yearning for recognition.",
      comingSoon: "Coming Soon",
      sections: [
        {
          id: "the-map",
          title: "Section 1: The Map",
          subtitle: "Intellectual Foundations",
          description: "Clear, systematic frameworks for understanding non-duality. What is it? What isn't it? How does it relate to philosophy, science, and developmental models? This section satisfies the mind's need for coherent understanding.",
          topics: [
            "Non-duality 101: Core concepts and distinctions",
            "The logic of non-separation",
            "Non-duality across traditions (Advaita, Zen, Dzogchen)",
            "Non-duality and Spiral Dynamics",
            "Common misconceptions and traps"
          ],
          color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
          icon: "🗺️"
        },
        {
          id: "the-pointer",
          title: "Section 2: The Pointer",
          subtitle: "Direct Recognition",
          description: "Beyond concepts and understanding—invitations to look directly. Simple inquiries, contemplative practices, and pointers that short-circuit the intellect and reveal what's already here.",
          topics: [
            "Guided self-inquiry practices",
            "Questions that dissolve the questioner",
            "Recognizing awareness itself",
            "Poetry and art as pointing",
            "Working with glimpses and recognition"
          ],
          color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
          icon: "👁️"
        },
        {
          id: "the-living",
          title: "Section 3: The Living",
          subtitle: "Integration in Daily Life",
          description: "How does non-dual recognition express in relationships, work, suffering, and joy? Integration without bypassing—bringing recognition into the texture of actual living.",
          topics: [
            "Non-duality in relationships",
            "Working from non-separation",
            "Non-duality and suffering",
            "Social engagement without separate self",
            "Non-dual awareness at different developmental stages"
          ],
          color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
          icon: "🌱"
        },
        {
          id: "the-meta",
          title: "Section 4: The Meta",
          subtitle: "Reflecting on the Journey",
          description: "The paradox of teaching non-duality, the relationship between maps and territory, and honest exploration of where understanding meets mystery.",
          topics: [
            "The paradox of this website",
            "When to use concepts, when to let them go",
            "Development and awakening",
            "Personal reflections and journey",
            "Community wisdom and shared inquiry"
          ],
          color: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
          icon: "🔄"
        }
      ]
    },
    sv: {
      title: "Utforska Icke-dualitet",
      subtitle: "En progressiv resa från förståelse till igenkänning",
      intro: "Dessa guider erbjuder flera vägar in i icke-dual medvetenhet. Du kan börja var som helst—följ din nyfikenhet, intellektuella intresse eller direkta längtan efter igenkänning.",
      comingSoon: "Kommer Snart",
      sections: [
        {
          id: "the-map",
          title: "Sektion 1: Kartan",
          subtitle: "Intellektuella Grunder",
          description: "Tydliga, systematiska ramverk för att förstå icke-dualitet. Vad är det? Vad är det inte? Hur relaterar det till filosofi, vetenskap och utvecklingsmodeller? Denna sektion tillfredsställer sinnets behov av sammanhängande förståelse.",
          topics: [
            "Icke-dualitet 101: Kärnkoncept och distinktioner",
            "Logiken bakom icke-separation",
            "Icke-dualitet över traditioner (Advaita, Zen, Dzogchen)",
            "Icke-dualitet och Spiral Dynamics",
            "Vanliga missuppfattningar och fällor"
          ],
          color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
          icon: "🗺️"
        },
        {
          id: "the-pointer",
          title: "Sektion 2: Pekaren",
          subtitle: "Direkt Igenkänning",
          description: "Bortom koncept och förståelse—inbjudningar att se direkt. Enkla undersökningar, kontemplativa praktiker och pekare som kortsluter intellektet och avslöjar det som redan är här.",
          topics: [
            "Guidade självutforskande praktiker",
            "Frågor som upplöser frågaren",
            "Känna igen medvetenheten själv",
            "Poesi och konst som pekare",
            "Arbeta med glimtar och igenkänning"
          ],
          color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
          icon: "👁️"
        },
        {
          id: "the-living",
          title: "Sektion 3: Levandet",
          subtitle: "Integration i Vardagen",
          description: "Hur uttrycker sig icke-dual igenkänning i relationer, arbete, lidande och glädje? Integration utan förbigående—bringa igenkänning in i verkligt levandes textur.",
          topics: [
            "Icke-dualitet i relationer",
            "Arbeta från icke-separation",
            "Icke-dualitet och lidande",
            "Socialt engagemang utan separat själv",
            "Icke-dual medvetenhet på olika utvecklingsstadier"
          ],
          color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
          icon: "🌱"
        },
        {
          id: "the-meta",
          title: "Sektion 4: Meta",
          subtitle: "Reflektion över Resan",
          description: "Paradoxen i att undervisa om icke-dualitet, relationen mellan kartor och territorium, och ärlig utforskning av där förståelse möter mysterium.",
          topics: [
            "Paradoxen med denna webbplats",
            "När man ska använda koncept, när man ska släppa dem",
            "Utveckling och uppvaknande",
            "Personliga reflektioner och resa",
            "Gemenskapens visdom och delad undersökning"
          ],
          color: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
          icon: "🔄"
        }
      ]
    }
  };

  $: pageTranslations = translations[currentLanguage];

  $: title = currentLanguage === 'en'
    ? 'Guides | Nondualize'
    : 'Guider | Nondualize';
    
  $: description = currentLanguage === 'en'
    ? 'Explore non-dual awareness through intellectual frameworks, direct pointers, and practical integration.'
    : 'Utforska icke-dual medvetenhet genom intellektuella ramverk, direkta pekare och praktisk integration.';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description}>
</svelte:head>

<div class="min-h-screen" in:fade>
  <div class="max-w-6xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-light mb-4 text-slate-800 dark:text-slate-100">
        {pageTranslations.title}
      </h1>
      <p class="text-xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto">
        {pageTranslations.subtitle}
      </p>
    </div>

    <!-- Intro -->
    <div class="max-w-3xl mx-auto mb-16">
      <p class="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
        {pageTranslations.intro}
      </p>
    </div>

    <!-- Sections Grid -->
    <div class="grid md:grid-cols-2 gap-8">
      {#each pageTranslations.sections as section}
        <div class="border-2 {section.color} rounded-xl p-8 hover:shadow-lg transition-shadow">
          <div class="flex items-start mb-4">
            <span class="text-4xl mr-4">{section.icon}</span>
            <div>
              <h2 class="text-2xl font-semibold mb-1 text-slate-800 dark:text-slate-100">
                {section.title}
              </h2>
              <p class="text-slate-600 dark:text-slate-400 italic">
                {section.subtitle}
              </p>
            </div>
          </div>

          <p class="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            {section.description}
          </p>

          <div class="mb-6">
            <h3 class="text-sm font-semibold uppercase text-slate-500 dark:text-slate-400 mb-3">
              {currentLanguage === 'en' ? 'Topics Include:' : 'Ämnen Inkluderar:'}
            </h3>
            <ul class="space-y-2">
              {#each section.topics as topic}
                <li class="flex items-start text-sm text-slate-600 dark:text-slate-400">
                  <span class="mr-2">•</span>
                  {topic}
                </li>
              {/each}
            </ul>
          </div>

          <div class="pt-4 border-t border-slate-200 dark:border-slate-700">
            {#if section.id === 'the-map'}
              <a 
                href="{base}/guides/section-1-the-map"
                class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-md text-sm transition-colors"
              >
                {currentLanguage === 'en' ? 'Start Reading →' : 'Börja Läsa →'}
              </a>
            {:else if section.id === 'the-pointer'}
              <a 
                href="{base}/guides/section-2-the-pointer"
                class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-md text-sm transition-colors"
              >
                {currentLanguage === 'en' ? 'Start Reading →' : 'Börja Läsa →'}
              </a>
            {:else}
              <span class="inline-block px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md text-sm">
                {pageTranslations.comingSoon}
              </span>
            {/if}
          </div>
        </div>
      {/each}
    </div>

    <!-- Footer note -->
    <div class="mt-16 text-center">
      <p class="text-slate-500 dark:text-slate-400 italic">
        {currentLanguage === 'en' 
          ? 'Content is being developed progressively. Check back soon for the last sections.' 
          : 'Innehåll utvecklas progressivt. Kom tillbaka snart för de sista sektionerna.'}
      </p>
    </div>
  </div>
</div>
