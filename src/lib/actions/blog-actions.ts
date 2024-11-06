'use server'

import { client } from '@/lib/microcms-client'
import { BlogResponse, BlogPost } from '@/types/blog'

export async function getBlogPosts(page: number = 1, perPage: number = 10): Promise<{ posts: BlogPost[], total: number }> {
  const offset = (page - 1) * perPage

  const response: BlogResponse = await client.get({
    endpoint: 'blog-contents',
    queries: { offset, limit: perPage },
  })

  return {
    posts: response.contents,
    total: response.totalCount,
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post: BlogPost = await client.get({
      endpoint: 'blog-contents',
      contentId: slug,
    })
    return post
  } catch (error) {
    console.error(`Failed to fetch blog post with slug ${slug}:`, error)
    return null
  }
}