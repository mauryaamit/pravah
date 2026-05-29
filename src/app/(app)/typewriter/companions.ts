import { ESSAYS_POOL } from '../lekh/data';
import { TetwArticle } from './utils';

export interface TypewriterCompanion {
  introduction: string;
  why_this_piece: string;
  context: string;
  main_ideas: string;
  intellectual_lineage: string;
  related_thinkers: string[];
  related_books: string[];
  related_concepts: string[];
  why_influential: string;
}

// Pre-authored companions for the non-Lekh fallback articles
export const FIXED_COMPANIONS: Record<string, TypewriterCompanion> = {
  "Self-Reliance": {
    introduction: "Ralph Waldo Emerson's 1841 essay is the defining document of American Transcendentalism, presenting a fierce, poetic argument for individual autonomy, nonconformity, and trust in one's own inner voice against the crushing pressure of social institutions.",
    why_this_piece: `Emerson's essay is an essential study of the relationship between individual consciousness and social expectation. It challenges the reader to examine their own conformity and to find the courage to stand alone in their convictions. In the context of Pravah, which cultivates inner reflection, Emerson provides the philosophical foundation for trust in one's own experience. His writing is not merely academic; it is a direct call to intellectual and spiritual independence, urging us to resist the passive acceptance of hand-me-down dogmas and to live from our own internal center.`,
    context: `Published in 1841 in his First Series of Essays, 'Self-Reliance' emerged during a period of rapid industrialization and social change in Jacksonian America. The country was experiencing a shift toward mass culture, technological growth, and institutional consolidation. In response, Emerson and his Transcendentalist circle in Concord, Massachusetts—including Henry David Thoreau and Margaret Fuller—argued that the human soul possessed an innate capacity for direct connection with the divine (the 'Over-Soul') without the mediation of churches or social frameworks. The essay distilled years of Emerson's journal entries and public lectures into a manifesto for the sacredness of individual intuition.`,
    main_ideas: `The central thesis of the essay is that 'envy is ignorance; imitation is suicide; that [each person] must take himself for better for worse as his portion.' Emerson argues that society is in a conspiracy against the manhood of every one of its members, demanding conformity rather than self-expression. He asserts that the only right is what is after my constitution, the only wrong what is against it. Emerson breaks the argument into key pillars: first, the rejection of consistency for consistency's sake ('A foolish consistency is the hobgoblin of little minds'); second, the reliance on spontaneous intuition over learned tradition; and third, the necessity of maintaining independence of mind in the midst of the crowd. He criticizes philanthropy that is done out of guilt rather than genuine love, and argues that true self-reliance must be practiced in our daily relationships, our work, and our spiritual lives. Critics of Emerson often point to the potential selfishness of his extreme individualism, arguing that it ignores social responsibility and mutual aid. However, Emerson's defenders argue that a self-reliant individual is the only one capable of forming genuine, uncoerced communities, as true charity requires a strong, independent self to give from. The essay leaves unresolved the tension between absolute self-assertion and the collaborative demands of a democratic society, a question that continues to occupy political philosophy.`,
    intellectual_lineage: `Transcendentalism was heavily influenced by German Idealism (Kant's critique of pure reason), English Romanticism (Coleridge and Wordsworth), and Eastern philosophical texts (such as the Upanishads and the Bhagavad Gita), which Emerson read avidly. It stands in direct opposition to British Empiricism (Locke) and Unitarian rationalism, advocating instead for the primary authority of direct, intuitive experience.`,
    related_thinkers: ["Henry David Thoreau", "Friedrich Nietzsche", "Immanuel Kant", "Walt Whitman"],
    related_books: ["Walden — Henry David Thoreau", "Essays: First Series — Ralph Waldo Emerson", "Thus Spoke Zarathustra — Friedrich Nietzsche"],
    related_concepts: ["Transcendentalism", "Nonconformity", "Individualism", "Intuition"],
    why_influential: `It profoundly shaped the American literary and philosophical character, directly influencing Walt Whitman's poetry, Thoreau's political resistance, and later European thinkers like Friedrich Nietzsche, who carried Emerson's essays with him throughout his life. It remains a classic text on individual liberty.`
  },
  "Thinking About Thinking": {
    introduction: "An exploration of cognitive biases, heuristics, and the hidden architectural limits of human rationality, showing how our evolutionary history frequently leads us to make systematic errors in judgment.",
    why_this_piece: `This piece provides a critical bridge between psychology, economics, and daily decision-making. By exposing the systematic errors built into human cognition, it teaches the reader to cultivate intellectual humility and to slow down their thinking. In a world characterized by information overload and rapid choices, understanding our biases is a key survival skill. The piece helps us move from reactive, emotion-driven judgments to reflective, rational decisions, which aligns directly with the mental disciplines cultivated in Pravah.`,
    context: `The study of cognitive biases and heuristics was pioneered in the 1970s by cognitive psychologists Daniel Kahneman and Amos Tversky. Their research challenged the prevailing economic assumption of 'Homo economicus'—the idea that humans are rational actors who consistently make optimal decisions. Instead, they demonstrated that the human brain relies on mental shortcuts (heuristics) that, while efficient for survival on the ancestral savanna, produce predictable errors in the modern world. This work eventually led to Kahneman winning the Nobel Prize in Economics in 2002 and laid the foundation for the field of behavioral economics.`,
    main_ideas: `The core argument is that human thinking is split into two systems: System 1 (fast, automatic, emotional, and subconscious) and System 2 (slow, effortful, logical, and calculating). Most cognitive biases occur when System 1 makes snap judgments in situations that actually require the slow deliberation of System 2. The piece walks through several key biases: first, the availability heuristic (judging the likelihood of events based on how easily examples come to mind); second, confirmation bias (the tendency to search for, interpret, and recall information in a way that confirms one's preexisting beliefs); and third, the sunk cost fallacy (continuing an endeavor because of previously invested resources, regardless of current utility). The strength of the cognitive biases framework lies in its empirical replicability and its practical utility in improving decision-making in medicine, finance, and policy. However, critics like Gerd Gigerenzer argue that Kahneman and Tversky overemphasize human irrationality, asserting that heuristics are actually 'fast and frugal' tools that are highly adaptive in real-world environments characterized by uncertainty rather than calculable risk. The debate remains unresolved: are our cognitive shortcuts defects of our evolutionary past, or are they elegant solutions to the constraints of real-world information and time limits?`,
    intellectual_lineage: `Belongs to the traditions of cognitive psychology, evolutionary psychology, and behavioral economics, tracing its lineage from Herbert Simon's concept of 'bounded rationality' to contemporary researchers like Richard Thaler and Keith Stanovich.`,
    related_thinkers: ["Daniel Kahneman", "Amos Tversky", "Herbert Simon", "Richard Thaler", "Gerd Gigerenzer"],
    related_books: ["Thinking, Fast and Slow — Daniel Kahneman", "Nudge — Richard Thaler", "Predictably Irrational — Dan Ariely"],
    related_concepts: ["Heuristics", "Cognitive Biases", "Bounded Rationality", "Behavioral Economics"],
    why_influential: `It revolutionized the fields of economics, finance, marketing, and public policy, leading to the creation of 'nudge units' in governments worldwide and changing how we design choices to help people make better decisions for their health and wealth.`
  }
};

export function getCompanion(article: TetwArticle): TypewriterCompanion {
  // 1. Try to find the article in the pre-authored list in companions.ts
  if (FIXED_COMPANIONS[article.title]) {
    return FIXED_COMPANIONS[article.title];
  }
  
  // 2. Try to find the article in the Lekh ESSAYS_POOL or ARTICLES_POOL (dynamic reuse)
  const lekhPiece = ESSAYS_POOL.find(p => p.title.toLowerCase() === article.title.toLowerCase());
  if (lekhPiece) {
    return {
      introduction: lekhPiece.introduction,
      why_this_piece: lekhPiece.companion.why_this_piece,
      context: lekhPiece.companion.context,
      main_ideas: lekhPiece.companion.main_ideas,
      intellectual_lineage: lekhPiece.companion.intellectual_lineage,
      related_thinkers: lekhPiece.companion.related_thinkers,
      related_books: lekhPiece.companion.related_books,
      related_concepts: lekhPiece.companion.related_concepts,
      why_influential: lekhPiece.companion.why_influential,
    };
  }

  // 3. Fallback to generating a structural companion from metadata
  return generateMetadataCompanion(article);
}

export function generateMetadataCompanion(article: TetwArticle): TypewriterCompanion {
  const authorName = article.author || 'a curated essayist';
  return {
    introduction: `A piece from ${article.publication}${article.author ? ` by ${article.author}` : ''}, curated by The Electric Typewriter as one of the finest examples of ${article.category.toLowerCase()} writing available online.`,
    why_this_piece: `The Electric Typewriter — widely considered the internet's finest curated collection of longform essays and articles — has selected this piece as essential reading in the ${article.category} category. The Electric Typewriter's curation standard is among the most rigorous in online publishing, accepting only work that its editors consider genuinely important, beautifully written, or intellectually transformative. This curation ensures that every reader who engages with the piece receives a substantive, high-quality perspective on the theme.`,
    context: `${article.publication} is one of the world's leading publications in this genre. ${article.author ? `${article.author} is a significant voice in ${article.category} writing, known for exploring deep ideas with clarity.` : 'The contributors to this publication are highly regarded for their research and literary craft.'} This piece was selected by The Electric Typewriter as representative of the best that longform writing in this category has to offer, reflecting the cultural and intellectual concerns of our contemporary world.`,
    main_ideas: `This piece has been identified by The Electric Typewriter as essential reading. To fully appreciate its argument and significance, read the original article using the link below. The Electric Typewriter's selection criteria prioritize writing that: changes how you think about something you thought you understood, introduces you to a perspective or domain of knowledge you haven't encountered, demonstrates exceptional craft in the service of genuine ideas, and rewards careful, unhurried reading. By engaging with the full text, you participate in the active unpacking of its core thesis, examining its structure and arguments.`,
    intellectual_lineage: `${article.publication} belongs to a tradition of serious longform journalism and essay writing that traces its lineage through the great magazines and reviews of the 20th century — from The Atlantic's founding in 1857 through the New Journalism of the 1960s to contemporary digital longform publishing. This tradition honors the essay as a vehicle for deep thought and cultural dialogue.`,
    related_thinkers: article.author ? [article.author] : [],
    related_books: [],
    related_concepts: [article.category, 'Longform Journalism', 'The Electric Typewriter'],
    why_influential: `Selected by The Electric Typewriter — which receives no advertising and has no algorithm — purely on the basis of quality. That selection is itself a mark of significance in the online writing ecosystem, denoting a piece that has contributed meaningfully to its field.`
  };
}
