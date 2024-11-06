import { NextResponse } from 'next/server';
import { submitContactForm } from '@/lib/actions/contact-actions';

export async function POST(request: Request) {
  const formData = await request.formData();
  
  try {
    const result = await submitContactForm(formData);
    return NextResponse.json(result);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to submit form';
    return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
  }
}
