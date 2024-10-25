import Link from 'next/link'
import Image from 'next/image'
import { mockPosts } from '@/lib/mockData'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ブログ記事一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id} className="block">
            <article className="border rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <time dateTime={post.createdAt.toISOString()} className="text-sm text-gray-500">
                  {post.createdAt.toLocaleDateString()}
                </time>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}