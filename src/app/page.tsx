import Link from 'next/link'
import Image from 'next/image'
import { mockPosts } from '@/lib/mockData'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ブログ記事一覧</h1>
      <div className="space-y-6">  {/* 縦に並べるために、記事間にスペースを追加 */}
        {mockPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id} className="block">
            <article className="flex items-center border rounded-lg overflow-hidden shadow-lg hover:bg-gray-100 transition">
              
              {/* 画像部分：四角形の画像 */}
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={150}  // 幅と高さを固定して四角形にする
                height={150}
                className="object-cover"
              />
              
              {/* タイトル部分 */}
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