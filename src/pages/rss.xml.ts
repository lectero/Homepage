import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'Lectero — Nyheter',
    description: 'Releaser, produktuppdateringar och tankar från Lectero-teamet.',
    site: context.site ?? 'https://lectero.se',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: '<language>sv-se</language>',
  });
}
