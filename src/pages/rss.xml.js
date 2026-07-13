import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  const ordenados = posts.sort((a, b) => b.data.data.valueOf() - a.data.data.valueOf());

  return rss({
    title: 'Crônicas de Maresia',
    description: 'Capítulos ilustrados de uma campanha solo de D&D.',
    site: new URL(import.meta.env.BASE_URL, context.site),
    items: ordenados.map((post) => ({
      title: post.data.titulo,
      description: post.data.resumo,
      pubDate: post.data.data,
      link: `${import.meta.env.BASE_URL}capitulos/${post.slug}/`,
      categories: post.data.tags,
    })),
  });
}
