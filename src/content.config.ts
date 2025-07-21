import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: () => z.object({
		date: z.string(),
		title: z.string(),
		//description: z.string(),
		image: z.string().optional(),
	}),
});

export const collections = { blog };
