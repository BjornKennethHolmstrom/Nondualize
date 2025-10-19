<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';

  $: currentLanguage = $language;

  let formStatus: 'idle' | 'submitting' | 'success' | 'error' = 'idle';
  let formMessage = '';

  const translations = {
    en: {
      title: "Get in Touch",
      subtitle: "Questions, reflections, or feedback? We'd love to hear from you.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your.email@example.com",
        message: "Message",
        messagePlaceholder: "Share your thoughts, questions, or reflections...",
        submit: "Send Message",
        submitting: "Sending...",
        successTitle: "Message Sent!",
        successMessage: "Thank you for reaching out. We'll get back to you soon.",
        errorTitle: "Something went wrong",
        errorMessage: "Please try again or email us directly at contact@nondualize.org"
      },
      info: {
        title: "Other Ways to Connect",
        description: "You can also reach us at:",
        email: "contact@nondualize.org",
        spiralize: "For questions about Spiral Dynamics, visit",
        spiralizeLink: "Spiralize.org"
      }
    },
    sv: {
      title: "Kontakta Oss",
      subtitle: "Frågor, reflektioner eller feedback? Vi vill gärna höra från dig.",
      form: {
        name: "Namn",
        namePlaceholder: "Ditt namn",
        email: "E-post",
        emailPlaceholder: "din.epost@exempel.se",
        message: "Meddelande",
        messagePlaceholder: "Dela dina tankar, frågor eller reflektioner...",
        submit: "Skicka Meddelande",
        submitting: "Skickar...",
        successTitle: "Meddelande Skickat!",
        successMessage: "Tack för att du hörde av dig. Vi återkommer snart.",
        errorTitle: "Något gick fel",
        errorMessage: "Försök igen eller mejla oss direkt på contact@nondualize.org"
      },
      info: {
        title: "Andra Sätt att Nå Oss",
        description: "Du kan också nå oss på:",
        email: "contact@nondualize.org",
        spiralize: "För frågor om Spiral Dynamics, besök",
        spiralizeLink: "Spiralize.org"
      }
    }
  };

  $: t = translations[currentLanguage];

  async function handleSubmit(event: Event) {
    const form = event.target as HTMLFormElement;
    formStatus = 'submitting';

    try {
      const response = await fetch('https://formspree.io/f/xnngwrbj', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        formStatus = 'success';
        form.reset();
      } else {
        formStatus = 'error';
      }
    } catch (error) {
      formStatus = 'error';
    }
  }

  $: title = currentLanguage === 'en'
    ? 'Contact | Nondualize'
    : 'Kontakt | Nondualize';
    
  $: description = currentLanguage === 'en'
    ? 'Get in touch with questions, reflections, or feedback about non-dual awareness.'
    : 'Kontakta oss med frågor, reflektioner eller feedback om icke-dual medvetenhet.';

  $: seoTitle = currentLanguage === 'en'
    ? 'Contact Nondualize'
    : 'Kontakta Nondualize';
    
  $: seoDescription = currentLanguage === 'en'
    ? 'Get in touch with questions, reflections, or feedback about non-dual awareness and consciousness exploration.'
    : 'Kontakta oss med frågor, reflektioner eller feedback om icke-dual medvetenhet och medvetandeutforskning.';
</script>

<SEO 
  title={seoTitle}
  description={seoDescription}
  type="website"
/>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description}>
</svelte:head>

<div class="min-h-screen" in:fade>
  <div class="max-w-4xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-light mb-4 text-slate-800 dark:text-slate-100">
        {t.title}
      </h1>
      <p class="text-xl text-slate-600 dark:text-slate-400 font-light">
        {t.subtitle}
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div>
        {#if formStatus === 'success'}
          <div class="p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg">
            <h3 class="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
              {t.form.successTitle}
            </h3>
            <p class="text-green-700 dark:text-green-300">
              {t.form.successMessage}
            </p>
            <button
              on:click={() => formStatus = 'idle'}
              class="mt-4 text-green-700 dark:text-green-300 underline hover:no-underline"
            >
              {currentLanguage === 'en' ? 'Send another message' : 'Skicka ett till meddelande'}
            </button>
          </div>
        {:else if formStatus === 'error'}
          <div class="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg">
            <h3 class="text-xl font-semibold text-red-800 dark:text-red-200 mb-2">
              {t.form.errorTitle}
            </h3>
            <p class="text-red-700 dark:text-red-300">
              {t.form.errorMessage}
            </p>
            <button
              on:click={() => formStatus = 'idle'}
              class="mt-4 text-red-700 dark:text-red-300 underline hover:no-underline"
            >
              {currentLanguage === 'en' ? 'Try again' : 'Försök igen'}
            </button>
          </div>
        {:else}
          <form on:submit|preventDefault={handleSubmit} class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={t.form.namePlaceholder}
                class="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder={t.form.emailPlaceholder}
                class="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                placeholder={t.form.messagePlaceholder}
                class="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              class="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === 'submitting' ? t.form.submitting : t.form.submit}
            </button>
          </form>
        {/if}
      </div>

      <!-- Additional Info -->
      <div class="space-y-8">
        <div class="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <h3 class="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
            {t.info.title}
          </h3>
          <p class="text-slate-700 dark:text-slate-300 mb-3">
            {t.info.description}
          </p>
          <a 
            href="mailto:contact@nondualize.org"
            class="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {t.info.email}
          </a>
        </div>

        <div class="p-6 bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg">
          <p class="text-slate-700 dark:text-slate-300 mb-3">
            {t.info.spiralize}
            <a
              href="https://spiralize.org"
              target="_blank"
              rel="noopener"
              class="text-purple-600 dark:text-purple-400 hover:underline font-medium"
            >
              {t.info.spiralizeLink}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
