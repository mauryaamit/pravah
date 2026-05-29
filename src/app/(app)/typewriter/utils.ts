export interface TetwArticle {
  title: string;
  url: string;
  publication: string;
  author: string;
  category: string;
  estimatedRead?: string;
}

export interface DailyTypewriterSelection {
  essays: TetwArticle[];
  articles: TetwArticle[];
  date: string;
  source: 'live' | 'fallback';
}

export function selectDailyPieces(
  allArticles: TetwArticle[],
  date: Date = new Date()
): DailyTypewriterSelection {
  // Shuffle deterministically based on date
  // Same date always produces same selection — consistent for 24 hours
  const dateStr = date.toISOString().split('T')[0];
  const seed = dateStr.split('-').reduce((acc, n) => acc + parseInt(n), 0);
  
  const shuffled = [...allArticles].sort((a, b) => {
    const hashA = simpleHash(a.url + seed);
    const hashB = simpleHash(b.url + seed);
    return hashA - hashB;
  });
  
  // Split into essays (more literary/personal) and articles (more journalistic)
  const essayCategories = [
    'Life & Personal Experience', 
    'Arts, Culture & Language', 
    'Psychology & Behavior',
    'Special Collections',
  ];
  
  const essays = shuffled
    .filter(a => essayCategories.includes(a.category))
    .slice(0, 10);
  
  const articles = shuffled
    .filter(a => !essayCategories.includes(a.category))
    .slice(0, 10);
  
  // If not enough in either category, fill from the other
  while (essays.length < 10 && articles.length > 0) {
    const match = articles.pop();
    if (match) essays.push(match);
    else break;
  }
  while (articles.length < 10 && essays.length > 0) {
    const match = essays.pop();
    if (match) articles.push(match);
    else break;
  }
  
  return { essays, articles, date: dateStr, source: 'live' };
}

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}
