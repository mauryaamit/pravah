import os
import json

def inspect_counts():
    for part in range(1, 7):
        filepath = f"scratch/entries_part{part}.json"
        if not os.path.exists(filepath):
            continue
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)
            print(f"\n--- Part {part} ---")
            for item in data:
                day = item.get("dayIndex")
                title = item.get("idea_title")
                idea = item.get("the_idea", "")
                why = item.get("why_it_matters_now", "")
                
                idea_wc = len(idea.split())
                why_wc = len(why.split())
                
                status_idea = f"OK ({idea_wc})" if 100 <= idea_wc <= 120 else f"ERR ({idea_wc})"
                status_why = f"OK ({why_wc})" if 50 <= why_wc <= 70 else f"ERR ({why_wc})"
                
                if "ERR" in status_idea or "ERR" in status_why:
                    print(f"Day {day:02d} ({title}): Idea={status_idea}, Why={status_why}")

if __name__ == "__main__":
    inspect_counts()
