// scripts/backfill-vani-history.ts
// Automated Backfill & Verification Suite for 30-Day Vaani History

import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { getAdminDb } from '../src/lib/firebase/admin';
import { getLast30DaysKeys, getTodayDateKey, ensureVaaniHistory, getOrCreateTodayAssignment } from '../src/lib/vani/engine';
import { VANI_SECTIONS, VaniSection } from '../src/lib/vani/types';

async function runBackfill() {
  console.log('====================================================');
  console.log('        VAANI 30-DAY HISTORY BACKFILL & VERIFY       ');
  console.log('====================================================\n');

  const db = getAdminDb();
  const dates = getLast30DaysKeys();
  const todayKey = getTodayDateKey();

  console.log(`History Window: ${dates[0]} → ${dates[dates.length - 1]} (${dates.length} days total)`);
  console.log(`Today's Date: ${todayKey}\n`);

  // 1. Collect all users
  const usersSnap = await db.collection('users').limit(50).get();
  const userIds: string[] = [];
  usersSnap.forEach(d => userIds.push(d.id));

  // Also include the test/guest UID
  const guestUid = 'xS4pdezHkXY9EJE4G3SV';
  if (!userIds.includes(guestUid)) {
    userIds.push(guestUid);
  }

  console.log(`Found ${userIds.length} user account(s) to process.\n`);

  for (const uid of userIds) {
    console.log(`>>> Processing User: ${uid}`);
    const result = await ensureVaaniHistory(uid);
    console.log(`    Dates Checked: ${result.datesChecked}`);
    console.log(`    Existing Assignments: ${result.existingAssignments}`);
    console.log(`    Created Assignments: ${result.createdAssignments}`);
    console.log(`    Missing Dates: ${result.missingDatesCount}\n`);
  }

  // 2. Perform Complete Verification on Primary User
  console.log('====================================================');
  console.log('      VERIFYING EACH DATE IN 30-DAY WINDOW          ');
  console.log('====================================================\n');

  const verifyUid = guestUid;
  let totalDatesVerified = 0;
  let failedDates = 0;

  for (const date of dates) {
    const isToday = date === todayKey;
    const sectionStatus: Record<string, number> = {};
    let dateComplete = true;

    for (const section of VANI_SECTIONS) {
      const res = await getOrCreateTodayAssignment(verifyUid, section, date);
      const count = res.items.length;
      sectionStatus[section] = count;

      if (count === 0 || res.noRecord) {
        dateComplete = false;
      }
    }

    if (dateComplete) {
      totalDatesVerified++;
      console.log(`  ${date} ✓ complete (${Object.entries(sectionStatus).map(([s, c]) => `${s}:${c}`).join(' ')})`);
    } else {
      failedDates++;
      console.log(`  ${date} ❌ INCOMPLETE (${Object.entries(sectionStatus).map(([s, c]) => `${s}:${c}`).join(' ')})`);
    }
  }

  console.log('\n====================================================');
  console.log(`Final Verification Result: ${totalDatesVerified}/${dates.length} dates complete`);
  console.log(`Failed Dates: ${failedDates}`);
  console.log('====================================================\n');

  if (failedDates === 0) {
    console.log('✅ SUCCESS: 100% OF DATES IN 30-DAY WINDOW ARE FULLY POPULATED & ACCESSIBLE.\n');
  } else {
    console.error('❌ ERROR: Gaps found in 30-day window!\n');
    process.exit(1);
  }
}

runBackfill().catch((err) => {
  console.error('Fatal backfill error:', err);
  process.exit(1);
});
