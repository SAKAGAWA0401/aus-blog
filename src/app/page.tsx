import Link from 'next/link'
import Image from 'next/image'
// import { mockPosts } from '@/lib/mockData' mockPosts→blogs,post→blogに変換
import{ getBlogs } from '@/lib/microcms'

export default async function Home() {
  const { contents: blogs } = await getBlogs({ fields: ['id', 'title', 'eyecatch'] });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ブログ記事一覧</h1>
      <div className="space-y-6">  {/* 縦に並べるために、記事間にスペースを追加 */}
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.id}`} key={blog.id} className="block">
            <article className="flex items-center border rounded-lg overflow-hidden shadow-lg hover:bg-gray-100 transition">
              
              {/* 画像部分：四角形の画像 */}
              <Image
                src={blog.eyecatch.url}
                alt={blog.title}
                width={blog.eyecatch.width}
                height={blog.eyecatch.height}
                className="w-full h-48 object-cover"
              />
              
              {/* タイトル部分 */}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <time dateTime={blog.publishedAt} className="text-sm text-gray-500">
                  {new Date(blog.publishedAt).toLocaleDateString()}
                </time>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}