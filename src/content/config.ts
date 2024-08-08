import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		lastmod: z.coerce.date().optional(),
		tags: z.array(z.string()).optional(),
		image: z.string().optional(),
	}),
});

export const collections = { blog };
