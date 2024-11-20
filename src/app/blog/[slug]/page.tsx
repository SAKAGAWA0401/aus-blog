import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
// import { mockPosts } from '@/lib/mockData'
// import { getBlogs, getBlogBySlug } from '@/lib/microcms'
import { getBlogPostBySlug } from '@/lib/actions/blog-actions'

  
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;  // 非同期でparamsを解決
    const post = await getBlogPostBySlug(slug)

    if (!post) {
        return {
        title: 'Post Not Found',
        }
    }

    return {
        title: `${post?.title || 'Untitled'} | My Perth Study Blog`,
        description: `Read about ${post.title} on My Perth Study Blog`,
        openGraph: {
        title: post.title,
        description: `Read about ${post.title} on My Perth Study Blog`,
        type: 'article',
        publishedTime: post.publishedAt,
        },
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;  // 非同期でparamsを解決
    const blog = await getBlogPostBySlug(slug)

    if (!blog) {
        notFound();
    }

    return (
        <article className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <Image
                src={blog.eyecatch.url}
                alt={blog.title}
                width={blog.eyecatch.width}
                height={blog.eyecatch.height}
                className="w-full h-64 object-cover mb-6 rounded-lg"
            />
            <time dateTime={blog.publishedAt} className="text-sm text-gray-500 mb-4 block">
                {new Date(blog.publishedAt).toLocaleDateString()}
            </time>
            <div
                className="prose prose-sm lg:prose-base max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />
        </article>
    )
}