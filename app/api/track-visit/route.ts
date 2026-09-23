import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const timestamp = new Date().toISOString();
    const userAgent = request.headers.get('user-agent') || '';
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1';

    const visitData = {
      timestamp,
      ip,
      userAgent,
      ...body,
    };

    console.log('[PROSPERUS TRACK VISIT]', JSON.stringify(visitData));

    return NextResponse.json(
      {
        status: 'ok',
        tracked: true,
        data: visitData,
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (error) {
    console.error('[PROSPERUS TRACK VISIT ERROR]', error);
    return NextResponse.json(
      { status: 'error', tracked: false, message: 'Failed to process visit tracking' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  return NextResponse.json({
    status: 'ok',
    service: 'Prosperus Track Visit API',
    endpoint: '/api/track-visit',
    timestamp: new Date().toISOString(),
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
