import re
import sys
import os

def validate_file(filepath):
    if not os.path.exists(filepath):
        print(f"Error: File {filepath} does not exist.")
        return False

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Find all entries using regex
    # We look for objects inside the BODH_ENTRIES array
    # A regex to match { dayIndex: ..., domain: ... }
    entry_pattern = re.compile(r"\{\s*dayIndex:\s*(\d+),\s*domain:\s*\"([^\"]*)\",\s*domain_hi:\s*\"([^\"]*)\",\s*idea_title:\s*\"([^\"]*)\",\s*idea_title_hi:\s*\"([^\"]*)\",\s*the_idea:\s*\"([^\"]*)\",\s*why_it_matters_now:\s*\"([^\"]*)\",\s*open_question:\s*\"([^\"]*)\",\s*further_if_curious:\s*\"([^\"]*)\"\s*\}", re.DOTALL)
    
    entries = entry_pattern.findall(content)
    
    print(f"Found {len(entries)} entries in the file.")
    
    errors = []
    
    # Check for em-dashes anywhere in the content
    # em-dashes are \u2014 (—) or \u2013 (–)
    for idx, char in enumerate(content):
        if char in ["—", "–"]:
            # find line number
            line_no = content[:idx].count("\n") + 1
            errors.append(f"Found em-dash '{char}' at line {line_no}")

    if not entries:
        # Try a more flexible regex in case of formatting variations
        entry_pattern_flex = re.compile(r"\{\s*dayIndex:\s*(\d+).*?\}", re.DOTALL)
        flex_matches = entry_pattern_flex.findall(content)
        print(f"Flexible regex found {len(flex_matches)} entries.")
        if len(flex_matches) != len(entries):
            print("Warning: Strict regex did not match all entries. There might be formatting issues (e.g., quotes, trailing commas, or missing fields).")
            # Let's do a field-by-field extraction for each flexible match
            entries_flex = []
            for match_str in re.findall(r"\{[^{}]*dayIndex:\s*\d+.*?\}", content, re.DOTALL):
                try:
                    d_idx = int(re.search(r"dayIndex:\s*(\d+)", match_str).group(1))
                    domain = re.search(r"domain:\s*\"([^\"]*)\"", match_str).group(1)
                    domain_hi = re.search(r"domain_hi:\s*\"([^\"]*)\"", match_str).group(1)
                    idea_title = re.search(r"idea_title:\s*\"([^\"]*)\"", match_str).group(1)
                    idea_title_hi = re.search(r"idea_title_hi:\s*\"([^\"]*)\"", match_str).group(1)
                    the_idea = re.search(r"the_idea:\s*\"([^\"]*)\"", match_str).group(1)
                    why_matters = re.search(r"why_it_matters_now:\s*\"([^\"]*)\"", match_str).group(1)
                    open_q = re.search(r"open_question:\s*\"([^\"]*)\"", match_str).group(1)
                    further = re.search(r"further_if_curious:\s*\"([^\"]*)\"", match_str).group(1)
                    entries_flex.append((d_idx, domain, domain_hi, idea_title, idea_title_hi, the_idea, why_matters, open_q, further))
                except Exception as e:
                    errors.append(f"Failed to parse entry: {match_str[:100]}... Error: {e}")
            entries = entries_flex

    expected_count = 90
    # If we are checking intermediate states, we might have fewer
    print(f"Parsing check: Parsed {len(entries)} entries successfully.")

    for entry in entries:
        day_idx, domain, domain_hi, idea_title, idea_title_hi, the_idea, why_it_matters_now, open_question, further = entry
        
        # Word counts
        idea_words = the_idea.split()
        why_words = why_it_matters_now.split()
        
        idea_word_count = len(idea_words)
        why_word_count = len(why_words)
        
        if idea_word_count < 100 or idea_word_count > 120:
            errors.append(f"Day {day_idx} ({idea_title}): 'the_idea' has {idea_word_count} words (expected 100-120).")
            
        if why_word_count < 50 or why_word_count > 70:
            errors.append(f"Day {day_idx} ({idea_title}): 'why_it_matters_now' has {why_word_count} words (expected 50-70).")
            
        # Check open_question sentences
        # A simple check: should end with ? or . and be one sentence. Let's look for multiple sentence ending marks.
        sentences = [s for s in re.split(r'[.!?]', open_question) if s.strip()]
        if len(sentences) > 1:
            errors.append(f"Day {day_idx} ({idea_title}): 'open_question' has multiple sentences: {sentences}")
        elif len(sentences) == 0:
            errors.append(f"Day {day_idx} ({idea_title}): 'open_question' is empty or missing ending punctuation.")
            
        # Check for em-dashes in strings
        for field_name, field_val in [("domain", domain), ("domain_hi", domain_hi), ("idea_title", idea_title), 
                                      ("idea_title_hi", idea_title_hi), ("the_idea", the_idea), 
                                      ("why_it_matters_now", why_it_matters_now), ("open_question", open_question), 
                                      ("further_if_curious", further)]:
            if "—" in field_val or "–" in field_val:
                errors.append(f"Day {day_idx} ({idea_title}): em-dash found in field '{field_name}'.")

    if errors:
        print("\nValidation Failed with errors:")
        for err in errors[:20]:
            print(f" - {err}")
        if len(errors) > 20:
            print(f" ... and {len(errors) - 20} more errors.")
        return False
    else:
        print("\nAll parsed entries are VALID!")
        return True

if __name__ == "__main__":
    path = "src/app/(app)/bodh/data.ts"
    if len(sys.argv) > 1:
        path = sys.argv[1]
    validate_file(path)
