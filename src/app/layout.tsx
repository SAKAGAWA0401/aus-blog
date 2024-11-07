import '@/app/globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Profile from '@/components/Profile';
import Script from 'next/script';
import { ToastProvider } from "@/components/ui/toast"; // shadcnのToastProviderをインポート
import { Toaster } from "@/components/ui/toaster"; // トーストの表示用コンポーネント

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '純ジャパアラサー、オーストラリアワーホリ留学する',
  description: '30歳間近ギリギリでのワーキングホリデー、未婚カップルが海外で共同生活をする上でのノウハウや生活に役立ち情報を発信するブログです。',
  openGraph: {
    title: '純ジャパアラサー、オーストラリアワーホリ留学する',
    description: '30歳間近ギリギリでのワーキングホリデー、未婚カップルが海外で共同生活をする上でのノウハウや生活に役立ち情報を発信するブログです。',
    url: 'https://aus-blog.sloperiver.com/',
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

interface LayoutProps {
  children: React.ReactNode
  showProfile?: boolean
}

export default function RootLayout({ children, showProfile = true }: LayoutProps) {
  return (
    <html lang="ja">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KTKJSSFS');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        <meta name="keywords" content="オーストラリア留学, ワーキングホリデー, 未婚カップル, 共同生活, FX, お金, 家探し, 仕事" />
        <meta name="author" content="Your Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://aus-blog.sloperiver.com/" />
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KTKJSSFS"
            height="0" 
            width="0" 
            className="hiddenIframe"
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <header className="bg-indigo-600 text-white">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/contact" className="text-white hover:underline">Contact</Link></li>
              <li><Link href="/privacy" className="text-white hover:underline">Privacy</Link></li>
            </ul>
          </nav>
        </header>
        <ToastProvider>
          <Toaster />
          <div className="container mx-auto px-4 py-8">
            <div className="lg:flex lg:space-x-8">
              {/* メインコンテンツ（記事部分） */}
              <main className="lg:w-2/3">
                {children}
              </main>
              {showProfile && <Profile />}
            </div>
          </div>
        </ToastProvider>

        <footer className="bg-gray-100 mt-8">
          <div className="container mx-auto px-4 py-4 text-center text-gray-600">
            © 2024 sloperiver.com. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}