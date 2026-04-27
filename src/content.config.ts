import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const mbot = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/mbot' }),
  schema: z.object({}).passthrough().optional(),
});

const team = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/team' }),
  schema: ({ image }) => z.object({
    name: z.string(),
    role: z.string(),
    expertise: z.array(z.string()),
    bio: z.string(),
    photo: image(),
    sortOrder: z.number(),
    linkedinUrl: z.string().url().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { mbot, team, blog };
