import { z, defineCollection } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    longDescription: z.string(),
    heroImage: z.string(),
    price: z.string(),
    features: z.array(z.string()),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
    relatedServices: z.array(z.object({ name: z.string(), slug: z.string() })),
    keywords: z.string().optional(),
  }),
});

const zonesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    type: z.enum(['barrio', 'municipio']),
    description: z.string(),
    longDescription: z.string(),
    heroImage: z.string().optional(),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
    keywords: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    image: z.string(),
    description: z.string(),
    keywords: z.string().optional(),
  }),
});

export const collections = { services: servicesCollection, zones: zonesCollection, blog: blogCollection };
