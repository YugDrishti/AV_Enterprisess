import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json({ error: 'Missing Instagram Access Token' }, { status: 500 });
  }

  try {
    // 1. Fetch the user's media list
    const mediaRes = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption&access_token=${token}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour to prevent hitting rate limits
    );

    if (!mediaRes.ok) {
      const errorData = await mediaRes.json();
      console.error('Instagram API Error:', errorData);
      return NextResponse.json({ error: 'Failed to fetch from Instagram API' }, { status: 500 });
    }

    const data = await mediaRes.json();

    // 2. Filter out only the VIDEO (Reels) media types
    const reels = data.data.filter((item: any) => item.media_type === 'VIDEO');

    if (reels.length === 0) {
      return NextResponse.json({ error: 'No video reels found' }, { status: 404 });
    }

    // 3. Return up to 10 recent reels
    return NextResponse.json(reels.slice(0, 10), { status: 200 });

  } catch (error) {
    console.error('Internal API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
