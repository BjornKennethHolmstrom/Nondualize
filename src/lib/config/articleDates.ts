// src/lib/config/articleDates.ts
// Configuration file for article publication dates

export const articlePublishDates: Record<string, string> = {
  // Section 1: The Map
  'section-1-the-map': '2024-10-18',
  'what-is-nonduality': '2024-10-18',
  'what-nonduality-is-not': '2024-10-18',
  'three-faces-of-being': '2024-10-18',
  'logic-of-non-separation': '2024-10-18',
  'nonduality-across-traditions': '2024-10-18',
  'nonduality-and-spiral-dynamics': '2024-10-18',
  'common-traps-and-misconceptions': '2024-10-18',
  
  // Section 2: The Pointer
  'section-2-the-pointer': '2024-10-18',
  'who-is-looking': '2024-10-18',
  'noticing-the-noticer': '2024-10-18',
  'the-boundary-question': '2024-10-18',
  'right-now-whats-happening': '2024-10-18',
  'space-between-thoughts': '2024-10-18',
  'questions-that-dissolve': '2024-10-18',
  'working-with-glimpses': '2024-10-18',
  
  // Section 3: The Living
  'section-3-the-living': '2024-10-18',
  'nonduality-in-relationships': '2024-10-18',
  'nonduality-at-work': '2024-10-18',
  'nonduality-and-action': '2024-10-18',
  'nonduality-and-emotions': '2024-10-18',
  'nonduality-and-suffering': '2024-10-18',
  'nonduality-different-stages': '2024-10-18',
  'daily-life-as-practice': '2024-10-18',
  
  // Section 4: The Meta
  'section-4-the-meta': '2024-10-18',
  'paradox-of-this-website': '2024-10-18',
  'maps-and-territory': '2024-10-18',
  'when-language-fails': '2024-10-18',
  'development-awakening-deeper': '2024-10-18',
  'personal-journey-humility': '2024-10-18',
  'community-and-dialogue': '2024-10-18',
  'what-remains-mysterious': '2024-10-18',
};

export function getArticlePublishDate(slug: string): string {
  return articlePublishDates[slug] || new Date().toISOString().split('T')[0];
}
