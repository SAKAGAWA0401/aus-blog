import Image from 'next/image'
import { notFound } from 'next/navigation'
import { mockPosts } from '@/lib/mockData'

// ページのパラメータ型
type Props = {
    params: { slug: string };
  };
  
  // 静的パスを生成する
  export async function generateStaticParams() {
    return mockPosts.map((post) => ({
      slug: post.slug,
    }));
  }
  
  // ブログ記事を同期的に取得するコンポーネント
  export default function BlogPost({ params }: Props) {
    // params.slugをそのまま参照
    const slug = params.slug;
  
    // slugが存在し、該当する記事があるかをチェック
    const post = mockPosts.find((p) => p.slug === slug);
  
    // 記事が見つからない場合は404ページを表示
    if (!post) {
      notFound();  // Next.jsの404ページ処理
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