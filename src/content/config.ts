import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		lastmod: z.coerce.date().optional(),
		author: z.string().optional(),
		description: z.string().optional(),
		tags: z.array(z.string()).optional(),
		image: z.string().optional(),
	}),
});

const news = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		lastmod: z.coerce.date().optional(),
		author: z.string().optional(),
		description: z.string().optional(),
		tags: z.array(z.string()).optional(),
		image: z.string().optional(),
	}),
});

export const collections = { blog, news };
