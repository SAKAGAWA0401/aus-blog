import { createClient } from 'microcms-js-sdk';
import { BlogResponse, Blog } from '@/types/blog';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export async function getBlogs(queries?: object): Promise<BlogResponse> {
  return await client.get({ endpoint: 'blog-contents', queries });
}

export async function getBlogBySlug(slug: string): Promise<Blog> {
  return await client.get({ endpoint: 'blog-contents', contentId: slug });
}