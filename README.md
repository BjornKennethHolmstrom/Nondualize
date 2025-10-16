# Nondualize

**Nondualize** is a free, open-source educational resource for exploring non-dual awareness—the recognition that the apparent separation between self and other, observer and observed, is not ultimately real. Through intellectual frameworks, direct pointers, and practical integration guidance, Nondualize bridges developmental understanding with non-dual recognition.

## Features

- **Comprehensive Guide Content**
  - Section 1: The Map - Intellectual foundations for understanding non-duality
  - Section 2: The Pointer - Direct inquiries and practices for recognition
  - Section 3: The Living - Integration in relationships, work, and daily life
  - Section 4: The Meta - Reflections on the journey and teaching paradoxes

- **Unique Integration**
  - Bridges non-duality with Spiral Dynamics developmental framework
  - Shows how recognition expresses differently at each developmental stage
  - Prevents both spiritual bypassing and endless striving
  - Honors both absolute and relative dimensions

- **Multiple Perspectives**
  - Explores non-duality across traditions (Advaita, Zen, Dzogchen, Christian mysticism, Taoism, Sufism, and more)
  - Includes contemporary secular approaches
  - The Three Faces of Being framework (Nothing, Everything, Someone)
  - Clear guidance on common traps and misconceptions

- **Bilingual Support**
  - English and Swedish translations
  - Automatic fallback to English for untranslated content

- **Privacy-Focused**
  - No tracking, cookies, or registration required
  - No paywalls or monetization
  - Completely free and open-source

- **Dark Mode**
  - Seamless light/dark theme switching
  - Preserves user preference across sessions

- **Sister Site to Spiralize.org**
  - Complementary resource exploring developmental psychology
  - Visual connection through related logos

## Philosophy

Nondualize embodies the principles it teaches:
- **Completely free** - No paywalls, registration, or tracking
- **Open source** - Transparent and accessible to all
- **Developmentally aware** - Respects both awakening and growing up
- **Integration-focused** - Avoids spiritual bypassing and elitism
- **Humble and honest** - Acknowledges limitations and ongoing learning

## Technology Stack

- **Frontend Framework**: [SvelteKit](https://kit.svelte.dev/) with TypeScript
- **Content**: MDsveX for markdown-based articles
- **Styling**: Tailwind CSS v4 with dark mode support
- **Deployment**: Static site generation for GitHub Pages

## Getting Started

### Prerequisites

- **Node.js** (LTS version recommended)
- **npm** (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BjornKennethHolmstrom/Nondualize.git
   cd nondualize
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`

### Build for Production

To build the app for production:
```bash
npm run build
```

The static site will be generated in the `build` directory.

## Project Structure

```
nondualize/
├── src/
│   ├── content/
│   │   └── guides/
│   │       └── nonduality/
│   │           ├── en/          # English articles
│   │           └── sv/          # Swedish translations
│   ├── lib/
│   │   ├── components/         # Reusable components
│   │   ├── stores/             # Svelte stores
│   │   └── i18n/               # Translation utilities
│   ├── routes/                 # SvelteKit pages
│   └── app.css                 # Global styles
├── static/                     # Static assets
└── svelte.config.js           # SvelteKit configuration
```

## Content Organization

### Section 1: The Map (Complete ✅)
- What Is Non-Duality?
- What Non-Duality Is NOT
- The Three Faces of Being
- The Logic of Non-Separation
- Non-Duality Across Traditions
- Non-Duality and Spiral Dynamics
- Common Traps and Misconceptions

### Sections 2-4 (In Development)
See `docs/content-mapping.md` for complete article structure and development roadmap.

## Contributing

Contributions are welcome! Here's how you can help:

- Suggest improvements to existing articles
- Help translate content into Swedish or other languages
- Report issues or typos
- Contribute additional practices or resources
- Share feedback on clarity and accessibility
- Submit pull requests with enhancements

### Content Guidelines

- Maintain intellectual rigor while remaining accessible
- Balance conceptual understanding with direct pointing
- Avoid spiritual jargon and elitism
- Respect both developmental and non-dual dimensions
- Include practical applications and examples
- Acknowledge limitations and unknowns

## Deployment

The project is deployed on GitHub Pages. To deploy your own instance:

1. Fork the repository
2. Update `svelte.config.js` with your repository name if needed
3. Enable GitHub Pages in your repository settings
4. Push to the main branch to trigger deployment

The site will be available at your GitHub Pages URL.

## Relationship to Spiralize.org

Nondualize is a companion site to [Spiralize.org](https://spiralize.org):
- **Spiralize** explores developmental psychology and Spiral Dynamics
- **Nondualize** explores non-dual awareness and consciousness
- Together they offer a complete perspective: the evolution of worldviews (Spiral Dynamics) and the awareness that witnesses all worldviews (non-duality)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by wisdom traditions worldwide and contemporary teachers
- Built with guidance from developmental frameworks including Spiral Dynamics
- Special thanks to the open-source community
- Created by Björn Kenneth Holmström as a service to seekers and explorers

## About the Author

Nondualize is created by Björn Kenneth Holmström, who writes about consciousness, philosophy, and the integration of developmental and non-dual perspectives. Visit his [personal website](https://bjornkennethholmstrom.wordpress.com/) for more writings and projects.

## Contact

For questions, suggestions, or collaboration:
- Visit [Spiralize.org/contact](https://spiralize.org/contact)
- Open an issue on GitHub
- Contribute directly through pull requests

---

*"The recognition is available now, regardless of where you are developmentally. And development continues, regardless of recognition. Both matter. Both are your birthright."*

Thank you for exploring non-dual awareness with Nondualize!

