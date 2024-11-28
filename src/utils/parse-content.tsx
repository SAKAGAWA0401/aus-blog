'use client';

export interface ParsedContent {
  type: 'text' | 'embed';
  content: string;
}

// HTMLを解析して埋め込みとテキストを分ける関数
export function parseContent(html: string): ParsedContent[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const parsed: ParsedContent[] = [];

  doc.body.childNodes.forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as HTMLElement;

      // iframely埋め込みを判定
      if (element.classList.contains('iframely-embed')) {
        parsed.push({ type: 'embed', content: element.outerHTML });
      } else {
        parsed.push({ type: 'text', content: element.outerHTML });
      }
    } else if (node.nodeType === Node.TEXT_NODE) {
      parsed.push({ type: 'text', content: node.textContent || '' });
    }
  });

  return parsed;
}
