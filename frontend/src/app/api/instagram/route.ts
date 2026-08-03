import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    console.error('[Instagram API] Missing INSTAGRAM_ACCESS_TOKEN environment variable. Please check Vercel settings.');
    return NextResponse.json({ 
      error: 'Missing Instagram Access Token', 
      details: 'The INSTAGRAM_ACCESS_TOKEN environment variable is not defined.' 
    }, { status: 500 });
  }

  try {
    console.log('[Instagram API] Attempting to fetch from Instagram API...');
    
    // 1. Fetch the user's media list
    const mediaRes = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption&access_token=${token}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour to prevent hitting rate limits
    );

    if (!mediaRes.ok) {
      const errorData = await mediaRes.json();
      console.error('[Instagram API] Fetch failed with status:', mediaRes.status);
      console.error('[Instagram API] Error Details:', JSON.stringify(errorData, null, 2));
      return NextResponse.json({ 
        error: 'Failed to fetch from Instagram API',
        status: mediaRes.status,
        details: errorData 
      }, { status: 500 });
    }

    const data = await mediaRes.json();
    console.log(`[Instagram API] Successfully fetched data. Total items: ${data.data?.length || 0}`);

    // 2. Filter out only the VIDEO (Reels) media types
    const reels = data.data?.filter((item: any) => item.media_type === 'VIDEO') || [];
    console.log(`[Instagram API] Filtered video reels. Found: ${reels.length}`);

    if (reels.length === 0) {
      console.error('[Instagram API] No video reels found in the returned media.');
      return NextResponse.json({ 
        error: 'No video reels found', 
        details: 'The API returned media, but none had media_type === "VIDEO"' 
      }, { status: 404 });
    }

    // 3. Return up to 10 recent reels
    return NextResponse.json(reels.slice(0, 10), { status: 200 });

  } catch (error: any) {
    console.error('[Instagram API] Internal Catch Error:', error.message || error);
    return NextResponse.json({ 
      error: 'Internal Server Error',
      details: error.message || String(error)
    }, { status: 500 });
  }
}
