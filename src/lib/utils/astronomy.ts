export interface MoonPhase {
  name: string;          // "Waxing Crescent"
  name_hi: string;       // "बढ़ता चाँद"
  emoji: string;         // "🌙"
  illumination: number;  // 0-100 (percentage)
}

export function getMoonPhase(date: Date = new Date()): MoonPhase {
  // Known new moon reference: January 6, 2000 at 18:14 UTC
  const knownNewMoon = new Date('2000-01-06T18:14:00Z');
  const synodicMonth = 29.53058867; // days
  
  const diffMs = date.getTime() - knownNewMoon.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  const cyclePosition = ((diffDays % synodicMonth) + synodicMonth) % synodicMonth;
  
  // Illumination approximation
  const illumination = Math.round(
    50 * (1 - Math.cos((2 * Math.PI * cyclePosition) / synodicMonth))
  );
  
  // Phase names (8 phases)
  let name: string, name_hi: string, emoji: string;
  
  if (cyclePosition < 1.85) {
    name = 'New Moon'; name_hi = 'अमावस्या'; emoji = '🌑';
  } else if (cyclePosition < 7.38) {
    name = 'Waxing Crescent'; name_hi = 'बढ़ता चाँद'; emoji = '🌒';
  } else if (cyclePosition < 9.22) {
    name = 'First Quarter'; name_hi = 'शुक्ल अष्टमी'; emoji = '🌓';
  } else if (cyclePosition < 14.77) {
    name = 'Waxing Gibbous'; name_hi = 'पूर्णिमा की ओर'; emoji = '🌔';
  } else if (cyclePosition < 16.61) {
    name = 'Full Moon'; name_hi = 'पूर्णिमा'; emoji = '🌕';
  } else if (cyclePosition < 22.15) {
    name = 'Waning Gibbous'; name_hi = 'घटता चाँद'; emoji = '🌖';
  } else if (cyclePosition < 23.99) {
    name = 'Last Quarter'; name_hi = 'कृष्ण अष्टमी'; emoji = '🌗';
  } else {
    name = 'Waning Crescent'; name_hi = 'क्षणीय चंद्र'; emoji = '🌘';
  }
  
  return { name, name_hi, emoji, illumination };
}

export interface IndianSeason {
  name: string;           // "Grishma"
  name_hi: string;        // "ग्रीष्म"
  description: string;    // "Summer & Intensity"
  description_hi: string; // "गर्मी और तीव्रता"
  months: string;         // "May - June"
}

export function getIndianSeason(date: Date = new Date()): IndianSeason {
  const month = date.getMonth() + 1; // 1-12
  
  // Six Indian seasons (Ritu) based on traditional calendar:
  // Vasanta (Spring):  March - April       (months 3-4)
  // Grishma (Summer):  May - June           (months 5-6)
  // Varsha  (Monsoon): July - August        (months 7-8)
  // Sharad  (Autumn):  September - October  (months 9-10)
  // Hemanta (PreWinter): November - December (months 11-12)
  // Shishira (Winter): January - February   (months 1-2)
  
  if (month === 3 || month === 4) {
    return { name: 'Vasanta', name_hi: 'वसंत', description: 'Spring & Renewal', 
             description_hi: 'बसंत और नवीनता', months: 'Mar - Apr' };
  } else if (month === 5 || month === 6) {
    return { name: 'Grishma', name_hi: 'ग्रीष्म', description: 'Summer & Intensity', 
             description_hi: 'गर्मी और तीव्रता', months: 'May - Jun' };
  } else if (month === 7 || month === 8) {
    return { name: 'Varsha', name_hi: 'वर्षा', description: 'Monsoon & Abundance', 
             description_hi: 'वर्षा और प्रचुरता', months: 'Jul - Aug' };
  } else if (month === 9 || month === 10) {
    return { name: 'Sharad', name_hi: 'शरद', description: 'Autumn & Clarity', 
             description_hi: 'शरद और स्पष्टता', months: 'Sep - Oct' };
  } else if (month === 11 || month === 12) {
    return { name: 'Hemanta', name_hi: 'हेमंत', description: 'Pre-Winter & Harvest', 
             description_hi: 'हेमंत और फसल', months: 'Nov - Dec' };
  } else {
    return { name: 'Shishira', name_hi: 'शिशिर', description: 'Winter & Stillness', 
             description_hi: 'शीत और स्थिरता', months: 'Jan - Feb' };
  }
}
