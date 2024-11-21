// ISRの再生成間隔を設定
export const revalidate = 600; // 10分ごとに再生成

import Link from 'next/link'
import Image from 'next/image'
// import { mockPosts } from '@/lib/mockData' mockPosts→blogs,post→blogに変換
// import{ getBlogs } from '@/lib/microcms-client' API routeからserver actionsに変更
import { getTopContent, getBlogPosts } from '@/lib/actions/blog-actions'

export default async function Home() {
  const topContent = await getTopContent()
  const { posts } = await getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">はじめに</h1>
        {topContent && (
          <Link href={`/blog/${topContent.id}`} key={topContent.id} className="block">
            <article className="flex items-center border rounded-lg overflow-hidden shadow-lg hover:bg-gray-100 transition">
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <Image
                  src={topContent.eyecatch.url}
                  alt={topContent.title}
                  width={topContent.eyecatch.width}
                  height={topContent.eyecatch.height}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4 flex-1">
                <h2 className="text-xl font-semibold md:text-xl mb-2">{topContent.title}</h2>
                <time dateTime={topContent.publishedAt} className="text-sm text-gray-500">
                  {new Date(topContent.publishedAt).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })} 
                </time>
              </div>
            </article>
          </Link>
        )}
      <h1 className="text-3xl font-bold mt-8 mb-6">ブログ記事一覧</h1>
      <div className="space-y-6">  {/* 縦に並べるために、記事間にスペースを追加 */}
        {posts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id} className="block">
            <article className="flex items-center border rounded-lg overflow-hidden shadow-lg hover:bg-gray-100 transition">
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                {/* 画像部分：四角形の画像 */}
                <Image
                  src={post.eyecatch.url}
                  alt={post.title}
                  width={post.eyecatch.width}
                  height={post.eyecatch.height}
                  className="w-full h-48 object-cover"
                />
              </div>
              {/* タイトル部分 */}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <time dateTime={post.publishedAt} className="text-sm text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </time>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}