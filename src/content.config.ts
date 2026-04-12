import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const mbot = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/mbot' }),
  schema: z.object({}).passthrough().optional(),
});

const team = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    expertise: z.array(z.string()),
    bio: z.string(),
    photo: z.string(),
    sortOrder: z.number(),
    linkedinUrl: z.string().url().optional(),
  }),
});

export const collections = { mbot, team };
