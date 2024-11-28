'use client';

import { useEffect } from 'react';

interface IframelyEmbedProps {
  content: string;
}

export default function IframelyEmbed({ content }: IframelyEmbedProps) {
  useEffect(() => {
    // スクリプトのロード確認
    const script = document.createElement('script');
    script.src = 'https://cdn.iframe.ly/embed.js';
    script.async = true;

    script.onload = () => {
    if (window.iframely) {
      window.iframely.load();
    } else {
        console.error('Iframely script loaded but window.iframely is not defined.');
      }
    };

    script.onerror = () => {
      console.error('Failed to load Iframely script.');
    };

    document.head.appendChild(script);

    // クリーンアップ処理
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
