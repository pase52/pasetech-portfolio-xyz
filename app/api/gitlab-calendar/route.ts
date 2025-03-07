import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (!username) {
      return NextResponse.json({ error: 'Username parameter is required' }, { status: 400 });
    }

    const response = await fetch(`https://gitlab.com/users/${username}/calendar.json`);
    
    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch data from GitLab: ${response.statusText}` }, 
        { status: response.status }
      );
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching GitLab calendar data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitLab calendar data' }, 
      { status: 500 }
    );
  }
}
