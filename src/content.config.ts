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

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: ({ image }) =>
    z.object({
      caseId: z.string(),
      locale: z.enum(['sv', 'en']),
      slug: z.string(),
      title: z.string(),
      summary: z.string(),
      product: z.enum(['mbot', 'greenops']),
      date: z.coerce.date(),
      draft: z.boolean().default(true),
      customer: z.object({
        displayName: z.string(),
        legalName: z.string().optional(),
        anonymous: z.boolean().default(false),
        anonymousLabel: z.string().optional(),
        logo: image().optional(),
      }),
      quote: z
        .object({
          text: z.string(),
          authorName: z.string().optional(),
          authorRole: z.string().optional(),
          authorOrg: z.string().optional(),
          anonymous: z.boolean().default(false),
        })
        .optional(),
      metrics: z
        .array(
          z.object({
            label: z.string(),
            value: z.string(),
            unit: z.string().optional(),
            context: z.string().optional(),
            kind: z.enum(['quant', 'qual']).default('quant'),
          })
        )
        .default([]),
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
        })
        .optional(),
    }),
});

export const collections = { mbot, team, blog, cases };
