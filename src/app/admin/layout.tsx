import '@/app/globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '管理画面 | 純ジャパアラサー、オーストラリアワーホリ留学する'
};

export default function AdminLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="ja">
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

        <main className="container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-gray-100 mt-8">
          <div className="container mx-auto px-4 py-4 text-center text-gray-600">
            © 2024 sloperiver.com. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}