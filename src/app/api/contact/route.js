import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Log the data (in a real app, you'd save to a database like MongoDB/Prisma)
    console.log('New Lead Capture:', body);

    // Simulate a database delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Lead captured successfully. Our team will contact you shortly.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
