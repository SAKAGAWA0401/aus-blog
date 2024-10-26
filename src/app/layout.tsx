import '@/app/globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Profile from '@/components/Profile';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '純ジャパアラサー、オーストラリアワーホリ留学する',
  description: '30歳間近ギリギリでのワーキングホリデー、未婚カップルが海外で共同生活をする上でのノウハウや生活に役立ち情報を発信するブログです。',
  openGraph: {
    title: '純ジャパアラサー、オーストラリアワーホリ留学する',
    description: '30歳間近ギリギリでのワーキングホリデー、未婚カップルが海外で共同生活をする上でのノウハウや生活に役立ち情報を発信するブログです。',
    url: 'https://aus-blog.vercel.app/',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'オーストラリアでのワーキングホリデー',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your_twitter_handle',
    title: '純ジャパアラサー、オーストラリアワーホリ留学する',
    description: '30歳間近ギリギリでのワーキングホリデー、未婚カップルが海外で共同生活をする上でのノウハウや生活に役立ち情報を発信するブログです。',
    image: '/images/twitter-card.jpg',
  },
};

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="ja">
      <head>
        <meta name="keywords" content="オーストラリア留学, ワーキングホリデー, 未婚カップル, 共同生活, FX, お金, 家探し, 仕事" />
        <meta name="author" content="Your Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://aus-blog.vercel.app/" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="純ジャパアラサー、オーストラリアワーホリ留学する" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://yourdomain.com"
              },
              "headline": "純ジャパアラサー、オーストラリアワーホリ留学する",
              "description": "30歳間近ギリギリでのワーキングホリデー、未婚カップルが海外で共同生活をする上でのノウハウや生活に役立ち情報を発信するブログです。",
              "author": {
                "@type": "Person",
                "name": "Your Name"
              },
              "datePublished": "2023-01-01",
              "image": "/images/og-image.jpg"
            }
          `}
        </script>
      </head>
      <body className={inter.className}>
        <header className="bg-indigo-600 text-white">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:underline">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:underline">
                  管理画面
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="lg:flex lg:space-x-8">
            {/* メインコンテンツ（記事部分） */}
            <main className="lg:w-2/3">
              {children}
            </main>
            <Profile />
          </div>
        </div>

        <footer className="bg-gray-100 mt-8">
          <div className="container mx-auto px-4 py-4 text-center text-gray-600">
            © 2024 sloperiver.com. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}