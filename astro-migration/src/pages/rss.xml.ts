import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_URL, APP_BUSINESS_NAME } from '../data/business';

export async function GET(context: any) {
  const posts = await getCollection('blog');
  return rss({
    title: `Blog | ${APP_BUSINESS_NAME}`,
    description: 'Consejos de seguridad, prevención de robos y novedades en cerrajería para Villaviciosa del Odón.',
    site: SITE_URL,
    items: posts
      .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
      .map(post => ({
        title: post.data.title,
        pubDate: new Date(post.data.date),
        description: post.data.description,
        link: `/blog/${post.slug}/`,
      })),
    customData: '<language>es-ES</language>',
  });
}
