import Image from 'next/image'
import { notFound } from 'next/navigation'
// import { mockPosts } from '@/lib/mockData'
import { getBlogs, getBlogBySlug } from '@/lib/microcms';
import { Metadata } from 'next'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const blog = await getBlogBySlug(params.slug)
    return { 
      title: blog.title,
      description: blog.content.substring(0, 100) // 最初の100文字を説明として使用
    }
  }

export async function generateStaticParams() {
const blogs = await getBlogs({ fields: ['id'] })
return blogs.contents.map((blog) => ({
    slug: blog.id,
}))
}

export const revalidate = 3600; // 1時間ごとに再検証

export default async function BlogPost({ params }: Props) {
    const blog = await getBlogBySlug(params.slug);

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
            className="prose lg:prose-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        </article>
    )
}