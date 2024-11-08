'use server'

import { client } from '@/lib/microcms-client'
import { BlogResponse, BlogPost } from '@/types/blog'

export async function getBlogPosts(page: number = 1, perPage: number = 10): Promise<{ posts: BlogPost[], total: number }> {
  const offset = (page - 1) * perPage

  const response: BlogResponse = await client.get({
    endpoint: 'blog-contents',
    queries: { offset, limit: perPage, filters: 'type[equals]article' },
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

// top記事を取得する関数
export async function getTopContent(): Promise<BlogPost | null> {
  try {
    const topContent: BlogPost = await client.get({
      endpoint: 'blog-contents',
      queries: { filters: 'type[equals]top-content', limit: 1 },
    })
    return topContent
  } catch (error) {
    console.error(`Failed to fetch top-content:`, error)
    return null
  }    
}

// プライバシーポリシーを取得する関数
export async function getPrivacyPolicy(): Promise<BlogPost | null> {
  try {
    const response: BlogResponse = await client.get({
      endpoint: 'blog-contents',
      queries: { filters: 'type[equals]privacy', limit: 1 },
    })

    return response.contents[0] || null
  } catch (error) {
    console.error('Failed to fetch privacy policy:', error)
    return null
  }
}
