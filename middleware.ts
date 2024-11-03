import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const isStaging = process.env.NEXT_PUBLIC_ENV === 'staging';

export function middleware(request: NextRequest) {
  if (!isStaging) {
    return NextResponse.next();
  }

  const auth = {
    username: process.env.BASIC_AUTH_USERNAME || 'your_username',
    password: process.env.BASIC_AUTH_PASSWORD || 'your_password'
  };

  const authorization = request.headers.get('authorization') || '';
  const [username, password] = Buffer.from(
    authorization.split(' ')[1] || '',
    'base64'
  ).toString().split(':');

  if (username !== auth.username || password !== auth.password) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="401"' }
    });
  }

  return NextResponse.next();
}

export const config = {
   matcher: ['/((?!api|_next/static|favicon.ico).*)'],
};
