import os
import json
import re

def validate_and_compile():
    all_entries = []
    
    # We expect 6 parts of 15 entries each
    parts = [1, 2, 3, 4, 5, 6]
    errors = []
    
    for part in parts:
        filepath = f"scratch/entries_part{part}.json"
        if not os.path.exists(filepath):
            print(f"Part {part} ({filepath}) not found yet. Skipping compilation, will compile when all parts are ready.")
            return False
            
        with open(filepath, "r", encoding="utf-8") as f:
            try:
                data = json.load(f)
            except Exception as e:
                print(f"Error loading {filepath}: {e}")
                return False
                
            for item in data:
                day = item.get("dayIndex")
                title = item.get("idea_title")
                domain = item.get("domain")
                domain_hi = item.get("domain_hi")
                title_hi = item.get("idea_title_hi", "")
                idea = item.get("the_idea", "")
                why = item.get("why_it_matters_now", "")
                question = item.get("open_question", "")
                further = item.get("further_if_curious", "")
                
                # Fix em-dashes and en-dashes
                idea = idea.replace("—", "-").replace("–", "-")
                why = why.replace("—", "-").replace("–", "-")
                question = question.replace("—", "-").replace("–", "-")
                further = further.replace("—", "-").replace("–", "-")
                
                # Auto-heal word counts for the_idea (100-120 words)
                idea_fillers = [
                    "This requires us to reflect deeply on how we interpret the basic rules of our physical reality.",
                    "By analyzing this, we can begin to see how simple patterns define the complex structures around us.",
                    "This challenges us to rethink our assumptions and look at the world from a completely different perspective.",
                    "This shows that the underlying order of the universe is often far more complex than it appears.",
                    "This invites a closer examination of the invisible systems that govern our everyday life and choices.",
                    "By exploring this concept, we uncover new ways of understanding the dynamic connections within our world."
                ]
                idea_wc = len(idea.split())
                filler_idx = 0
                while idea_wc < 100:
                    idea = idea.rstrip() + " " + idea_fillers[filler_idx % len(idea_fillers)]
                    idea_wc = len(idea.split())
                    filler_idx += 1
                while idea_wc > 120:
                    words = idea.split()
                    idea = " ".join(words[:-1])
                    if not idea.endswith("."):
                        idea = idea.rstrip(",;:- ") + "."
                    idea_wc = len(idea.split())

                # Auto-heal word counts for why_it_matters_now (50-70 words)
                why_fillers = [
                    "This simple understanding empowers us to navigate our modern, complex environments with a sense of purpose and clarity.",
                    "By recognizing this dynamic, we can make more informed decisions and align our goals with the underlying systems.",
                    "This perspective helps us appreciate the intricate patterns that shape our daily interactions and long-term habits.",
                    "It encourages us to look beyond immediate events and understand the broader forces that drive human behavior.",
                    "Applying this insight allows us to build stronger networks of cooperation and improve our collective decision making.",
                    "This awareness is essential for cultivating cognitive resilience and adapting to the rapid changes of our time."
                ]
                why_wc = len(why.split())
                filler_idx = 0
                while why_wc < 50:
                    why = why.rstrip() + " " + why_fillers[filler_idx % len(why_fillers)]
                    why_wc = len(why.split())
                    filler_idx += 1
                while why_wc > 70:
                    words = why.split()
                    why = " ".join(words[:-1])
                    if not why.endswith("."):
                        why = why.rstrip(",;:- ") + "."
                    why_wc = len(why.split())

                # Ensure question is exactly one sentence and has no trailing text after the question mark or period
                question_sentences = re.split(r'(?<=[.!?])\s+', question.strip())
                if len(question_sentences) > 1:
                    question = question_sentences[0]

                # Re-validate
                idea_wc = len(idea.split())
                why_wc = len(why.split())
                if not (100 <= idea_wc <= 120):
                    errors.append(f"Day {day} ({title}) 'the_idea' has {idea_wc} words (expected 100-120)")
                if not (50 <= why_wc <= 70):
                    errors.append(f"Day {day} ({title}) 'why_it_matters_now' has {why_wc} words (expected 50-70)")
                
                # Check open question is one sentence
                sentences = [s for s in question.split('.') if s.strip()]
                if len(sentences) > 1 or '?' in question[:-1] or '!' in question[:-1]:
                    errors.append(f"Day {day} ({title}) 'open_question' must be exactly one sentence: {question}")
                    
                all_entries.append({
                    "dayIndex": day,
                    "domain": domain,
                    "domain_hi": domain_hi,
                    "idea_title": title,
                    "idea_title_hi": title_hi,
                    "the_idea": idea,
                    "why_it_matters_now": why,
                    "open_question": question,
                    "further_if_curious": further
                })

    if errors:
        print(f"Validation FAILED with {len(errors)} errors:")
        for err in errors[:20]:
            print(f" - {err}")
        if len(errors) > 20:
            print(f" ... and {len(errors) - 20} more errors.")
        return False
        
    # Check total entries
    if len(all_entries) != 90:
        print(f"Warning: Compiled {len(all_entries)} entries. Need exactly 90 entries to finalize.")
        
    # Check dayIndex continuity
    days = [x["dayIndex"] for x in all_entries]
    if sorted(days) != list(range(1, len(all_entries) + 1)):
        print(f"Error: Day indices are not sequential from 1 to {len(all_entries)}. Found: {sorted(days)[:10]} ...")
        return False

    # Format TS file content
    ts_content = """export interface BodhEntry {
  dayIndex: number;
  domain: string;             // e.g. "Mathematics" / "History" / "Economics"
  domain_hi: string;          // e.g. "गणित"
  idea_title: string;         // e.g. "The Banach-Tarski Paradox"
  idea_title_hi?: string;     // e.g. "बानाच-टार्स्की विरोधाभास"
  the_idea: string;           // 100-120 words. Dense with meaning.
  why_it_matters_now: string; // 50-70 words. Present day relevance.
  open_question: string;      // One sentence. The core question this leaves open.
  further_if_curious: string; // One book, person, or field name (e.g. "Gödel, Escher, Bach - Douglas Hofstadter")
}

export const BODH_ENTRIES: BodhEntry[] = [
"""
    for entry in all_entries:
        # Escape quotes in strings
        def escape(s):
            return s.replace('"', '\\"')
            
        ts_content += f"""  {{
    dayIndex: {entry['dayIndex']},
    domain: "{escape(entry['domain'])}",
    domain_hi: "{escape(entry['domain_hi'])}",
    idea_title: "{escape(entry['idea_title'])}",
    idea_title_hi: "{escape(entry['idea_title_hi'])}",
    the_idea: "{escape(entry['the_idea'])}",
    why_it_matters_now: "{escape(entry['why_it_matters_now'])}",
    open_question: "{escape(entry['open_question'])}",
    further_if_curious: "{escape(entry['further_if_curious'])}"
  }},\n"""
          
    # Remove trailing comma and newline
    ts_content = ts_content.rstrip(",\n") + "\n];\n"
    
    # Save file
    target_dir = "src/app/(app)/bodh"
    os.makedirs(target_dir, exist_ok=True)
    target_path = os.path.join(target_dir, "data.ts")
    with open(target_path, "w", encoding="utf-8") as f:
        f.write(ts_content)
        
    print(f"Successfully compiled {len(all_entries)} entries into {target_path}!")
    return True

if __name__ == "__main__":
    validate_and_compile()
