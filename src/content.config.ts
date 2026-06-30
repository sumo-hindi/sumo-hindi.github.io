import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    level: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
  }),
});

export const collections = { lessons };