// src/lib/vani/health-check.ts
// Comprehensive Vaani Health Check & Unicode Verification Suite

import { CORPUS_MAP, RegistryItem } from './corpus-registry';
import { VANI_SECTIONS, VaniSection } from './types';

export interface HealthCheckReport {
  timestamp: string;
  status: 'HEALTHY' | 'WARNING' | 'ERROR';
  encoding: {
    passed: boolean;
    errors: string[];
    sampleTests: { text: string; passed: boolean; matched: string }[];
  };
  corpus: {
    passed: boolean;
    sectionCounts: Record<string, number>;
    duplicates: string[];
    missingFields: string[];
    warnings: string[];
  };
}

const REQUIRED_UNICODE_SAMPLES = [
  'दोहा',
  'कबीर',
  'रहीम',
  'श्रीमद्भगवद्गीता',
  'कर्मण्येवाधिकारस्ते',
  'राम',
  'महाभारत',
  'उपनिषद्',
  'वेद',
  'पुराण',
  'भारतीय भाषा',
  'हिंदी व्याकरण',
];

const IAST_SAMPLE = 'karmaṇy evādhikāras te';

const MOJIBAKE_REGEX = /à¤|à¥|à¦|à§|â€|â€“|â€”|â€™|â€œ|â€\s|âš|Ã[¡-¿]|Â[¡-¿]|À[¡-¿]|\uFFFD/;

export function runVaaniHealthCheck(): HealthCheckReport {
  const errors: string[] = [];
  const warnings: string[] = [];
  const duplicates: string[] = [];
  const missingFields: string[] = [];

  // 1. Encoding Tests
  const sampleTests: { text: string; passed: boolean; matched: string }[] = [];

  for (const sample of REQUIRED_UNICODE_SAMPLES) {
    const isCorrupted = MOJIBAKE_REGEX.test(sample);
    sampleTests.push({
      text: sample,
      passed: !isCorrupted,
      matched: sample,
    });
    if (isCorrupted) {
      errors.push(`Encoding check failed for sample: "${sample}"`);
    }
  }

  // Check IAST sample
  const isIastCorrupted = MOJIBAKE_REGEX.test(IAST_SAMPLE);
  sampleTests.push({
    text: IAST_SAMPLE,
    passed: !isIastCorrupted,
    matched: IAST_SAMPLE,
  });

  // 2. Corpus Integrity & Duplicate Detection
  const sectionCounts: Record<string, number> = {};
  const seenIds = new Set<string>();

  for (const section of VANI_SECTIONS) {
    const items: RegistryItem[] = CORPUS_MAP[section] || [];
    const total = items.length;
    sectionCounts[section] = total;

    if (total === 0) {
      errors.push(`Section "${section}" has empty corpus!`);
      continue;
    }

    const seenSeqInSec = new Set<number>();

    items.forEach((item: RegistryItem, idx: number) => {
      // Check duplicate IDs
      if (seenIds.has(item.id)) {
        duplicates.push(`Duplicate global ID: "${item.id}" across corpus`);
      }
      seenIds.add(item.id);

      // Check sequence numbers
      if (seenSeqInSec.has(item.globalSequenceNumber)) {
        duplicates.push(`Duplicate sequence number ${item.globalSequenceNumber} in section "${section}"`);
      }
      seenSeqInSec.add(item.globalSequenceNumber);

      // Check Mojibake in content strings
      const jsonStr = JSON.stringify(item.content);
      if (MOJIBAKE_REGEX.test(jsonStr)) {
        errors.push(`Mojibake detected in ${section} item "${item.id}"`);
      }

      // Check essential fields
      if (!item.id) missingFields.push(`Item at index ${idx} in ${section} is missing id`);
      if (!item.source) warnings.push(`Item ${item.id} in ${section} has no source specified`);
    });
  }

  return {
    timestamp: new Date().toISOString(),
    status: errors.length > 0 ? 'ERROR' : warnings.length > 0 ? 'WARNING' : 'HEALTHY',
    encoding: {
      passed: errors.length === 0,
      errors,
      sampleTests,
    },
    corpus: {
      passed: duplicates.length === 0 && missingFields.length === 0,
      sectionCounts,
      duplicates,
      missingFields,
      warnings,
    },
  };
}
