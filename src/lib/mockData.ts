export const mockPosts = [
    {
      id: '1',
      title: 'Next.js 13の新機能について',
      slug: 'nextjs-13-new-features',
      content: `
        <p>Next.js 13では、多くの新機能が導入されました。その中でも特に注目すべきは以下の点です：</p>
        <ul>
          <li>App Router: 新しいファイルベースのルーティングシステム</li>
          <li>React Server Components: サーバーサイドでレンダリングされるコンポーネント</li>
          <li>Streaming: コンテンツを段階的にレンダリングする機能</li>
          <li>Turbopack: 高速な新しいバンドラー（ベータ版）</li>
        </ul>
        <p>これらの機能により、Next.jsを使用したウェブアプリケーションの開発がさらに効率的になります。</p>
      `,
      thumbnail: '/placeholder.svg?height=400&width=600',
      createdAt: new Date('2023-05-01T12:00:00Z'),
    },
    {
      id: '2',
      title: 'Reactのパフォーマンス最適化テクニック',
      slug: 'react-performance-optimization',
      content: `
        <p>Reactアプリケーションのパフォーマンスを最適化するためのいくつかのテクニックを紹介します：</p>
        <ol>
          <li>メモ化: React.memo, useMemo, useCallbackを適切に使用する</li>
          <li>仮想化: 大量のリストをレンダリングする際に仮想化ライブラリを使用する</li>
          <li>コード分割: React.lazyとSuspenseを使用して必要なコードのみをロードする</li>
          <li>状態管理の最適化: 不必要な再レンダリングを避けるために状態の設計を見直す</li>
        </ol>
        <p>これらのテクニックを適切に適用することで、Reactアプリケーションの応答性と効率性を大幅に向上させることができます。</p>
      `,
      thumbnail: '/placeholder.svg?height=400&width=600',
      createdAt: new Date('2023-05-15T14:30:00Z'),
    },
  ];