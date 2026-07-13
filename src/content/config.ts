import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    sessao: z.array(z.number()),
    data: z.date(),
    resumo: z.string(),
    imagem_capa: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { posts };
