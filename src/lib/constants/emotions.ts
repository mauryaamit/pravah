// src/lib/constants/emotions.ts

export const EMOTION_FAMILIES: Record<number, string[]> = {
  1: ['exhausted', 'heavy', 'lost', 'numb', 'aching', 'hollow'],      // lowest mood
  2: ['anxious', 'restless', 'flat', 'unsettled', 'distant', 'foggy'],
  3: ['neutral', 'contemplative', 'quiet', 'processing', 'in-between', 'steady'],
  4: ['content', 'relieved', 'warm', 'hopeful', 'tender', 'grateful'],
  5: ['joyful', 'energized', 'proud', 'excited', 'expansive', 'at peace'], // highest
};

// Hindi equivalents:
export const EMOTION_FAMILIES_HI: Record<number, string[]> = {
  1: ['थका हुआ', 'भारी', 'खोया हुआ', 'सुन्न', 'दर्द में', 'रिक्त'],
  2: ['चिंतित', 'बेचैन', 'सपाट', 'अस्थिर', 'दूर', 'धुंधला'],
  3: ['तटस्थ', 'विचारशील', 'शांत', 'समझने में', 'बीच में', 'स्थिर'],
  4: ['संतुष्ट', 'राहत में', 'गर्मजोशी', 'आशावादी', 'कोमल', 'कृतज्ञ'],
  5: ['आनंदित', 'ऊर्जावान', 'गर्वित', 'उत्साहित', 'विस्तृत', 'शांत'],
};
