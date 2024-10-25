import Image from 'next/image'
import { notFound } from 'next/navigation'
import { mockPosts } from '@/lib/mockData'

type PageProps = {
    params: { slug: string }
  }

export async function generateStaticParams() {
  return mockPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: PageProps) {
  const post = mockPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <Image
        src={post.thumbnail}
        alt={post.title}
        width={1200}
        height={630}
        className="w-full h-64 object-cover mb-6 rounded-lg"
      />
      <time dateTime={post.createdAt.toISOString()} className="text-sm text-gray-500 mb-4 block">
        {post.createdAt.toLocaleDateString()}
      </time>
      <div
        className="prose lg:prose-xl max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}