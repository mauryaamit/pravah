import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase/admin';

export async function GET(req: NextRequest, { params }: { params: { room: string } }) {
  try {
    const { room } = params;
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type');
    const lang = searchParams.get('lang');

    if (!adminDb) {
      return NextResponse.json({ error: 'Firebase Admin not initialized' }, { status: 500 });
    }

    let queryRef: any = adminDb.collection('content').doc(room).collection('items');

    if (type) {
      queryRef = queryRef.where('type', '==', type);
    }
    if (lang) {
      queryRef = queryRef.where('lang', '==', lang);
    }

    const snap = await queryRef.orderBy('date_index', 'asc').get();
    const results = snap.docs.map((d: any) => ({ id: d.id, ...d.data() }));

    return NextResponse.json(results);
  } catch (err: any) {
    console.error('Content ALL error:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
