import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getAllNavigableItems } from '$lib/stores/nondualityGuideStore';

// Define all possible slug values for prerendering
export const entries = () => {
  const allItems = getAllNavigableItems();
  return allItems.map(item => ({
    slug: item.path
  }));
};

export const load: PageLoad = ({ params }) => {
  const { slug } = params;

  if (!slug) {
    throw error(404, 'Page not found');
  }

  return {
    slug
  };
};

// Ensure static prerendering
export const prerender = true;
