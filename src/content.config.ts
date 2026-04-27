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
    role_en: z.string().optional(),
    expertise: z.array(z.string()),
    bio: z.string(),
    bio_en: z.string().optional(),
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

const mbotScreenshots = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/mbot-screenshots' }),
  schema: ({ image }) =>
    z.object({
      image: image(),
      altSv: z.string(),
      altEn: z.string(),
      captionSv: z.string().optional(),
      captionEn: z.string().optional(),
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

const mbotScreencast = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/mbot-screencast' }),
  schema: ({ image }) =>
    z.object({
      titleSv: z.string(),
      titleEn: z.string(),
      mp4: z.string(),
      webm: z.string().optional(),
      poster: image(),
      width: z.number(),
      height: z.number(),
      durationSeconds: z.number().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { mbot, team, blog, mbotScreenshots, mbotScreencast };
