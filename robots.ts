export async function GET() {
    const isStaging = process.env.NEXT_PUBLIC_ENV === 'staging';
  
    const content = isStaging
      ? 'User-agent: *\nDisallow: /'
      : 'User-agent: *\nAllow: /';
  
    return new Response(content, {
      headers: { 'Content-Type': 'text/plain' },
    });
  }
  