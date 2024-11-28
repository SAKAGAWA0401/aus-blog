'use client';

import { useEffect } from 'react';
import IframelyEmbed from '@/components/IframelyEmbed';
import { parseContent, ParsedContent } from '@/utils/parse-content';

interface BlogPostClientProps {
  content: string;
}

export default function BlogPostClient({ content }: BlogPostClientProps) {
  const parsedContent: ParsedContent[] = parseContent(content); // クライアントサイドでパース処理

  useEffect(() => {
    // Iframelyスクリプトを初期化
    if (window.iframely) {
      window.iframely.load();
    }
  }, []);

  return (
    <div className="prose prose-sm lg:prose-base max-w-none">
      {parsedContent.map((item, index) =>
        item.type === 'embed' ? (
          <IframelyEmbed key={index} content={item.content} />
        ) : (
          <div key={index} dangerouslySetInnerHTML={{ __html: item.content }} />
        )
      )}
    </div>
  );
}
