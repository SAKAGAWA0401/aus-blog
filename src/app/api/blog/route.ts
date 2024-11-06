import { NextResponse } from 'next/server';
import { client } from '@/lib/microcms-client';
import { BlogResponse } from '@/types/blog';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const queries = Object.fromEntries(searchParams);

  try {
    const blogs: BlogResponse = await client.get({ endpoint: 'blog-contents', queries });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

/***
 * api通信時は以下の処理を実施していた
 * */ 

// import { BlogResponse, Blog } from '@/types/blog';

// export async function getBlogs(queries?: object): Promise<BlogResponse> {
//   return await client.get({ endpoint: 'blog-contents', queries });
// }

// export async function getBlogBySlug(slug: string): Promise<Blog> {
//   return await client.get({ endpoint: 'blog-contents', contentId: slug });
// }