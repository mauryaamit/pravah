import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase/admin';
import { getDayIndex } from '@/lib/utils/date';

export async function GET(req: NextRequest, { params }: { params: { room: string } }) {
  try {
    const { room } = params;
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type');
    const lang = searchParams.get('lang') || 'en';

    if (!adminDb) {
      // Gracefully handle local fallback or uninitialized SDK
      console.warn('Firebase Admin not initialized in API content route.');
      return NextResponse.json({ error: 'Firebase Admin not initialized' }, { status: 500 });
    }

    const dayIndex = getDayIndex();
    const itemsColRef = adminDb.collection('content').doc(room).collection('items');
    
    let entry: any = null;

    if (type) {
      // Find matching type and lang and dateIndex
      const snap = await itemsColRef
        .where('type', '==', type)
        .where('lang', '==', lang)
        .where('date_index', '==', dayIndex)
        .limit(1)
        .get();

      if (!snap.empty) {
        entry = { id: snap.docs[0].id, ...snap.docs[0].data() };
      } else {
        // Fallback: any entry for this room/type/lang ordered by date_index
        const fallbackSnap = await itemsColRef
          .where('type', '==', type)
          .where('lang', '==', lang)
          .orderBy('date_index', 'asc')
          .get();

        if (!fallbackSnap.empty) {
          const list = fallbackSnap.docs.map(d => ({ id: d.id, ...d.data() }));
          entry = list[dayIndex % list.length];
        }
      }
    } else {
      const snap = await itemsColRef
        .where('date_index', '==', dayIndex)
        .limit(1)
        .get();

      if (!snap.empty) {
        entry = { id: snap.docs[0].id, ...snap.docs[0].data() };
      }
    }

    if (!entry) {
      return NextResponse.json({ error: 'No content found' }, { status: 404 });
    }

    return NextResponse.json(entry);
  } catch (err: any) {
    console.error('Content GET error:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
