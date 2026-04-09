import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const mbot = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/mbot' }),
  schema: z.object({}).passthrough().optional(),
});

export const collections = { mbot };
