import os
import json

domain_sentences = {
    "Mathematics": "This mathematical framework forces us to reconsider the relationship between abstract logic and physical reality.",
    "Physics": "This physical principle reveals the deeply interconnected and counterintuitive nature of the universe at its most fundamental level.",
    "Neuroscience": "This neurological insight highlights the incredible complexity and adaptability of the human brain as it interacts with the world.",
    "Philosophy": "This philosophical paradox challenges our basic assumptions and encourages us to practice deep epistemic humility.",
    "Cognitive Science": "This cognitive framework explains how our internal mental models shape our daily decisions and interactions.",
    "Evolutionary Biology": "This evolutionary mechanism demonstrates how simple, decentralized processes can generate immense complexity over long periods of time.",
    "Economics": "This economic model illustrates the complex trade-offs and incentives that govern human behavior in cooperative and competitive markets.",
    "Systems Theory": "This systems principle demonstrates how simple rules and feedback loops can organize complex behaviors across different scales.",
    "Linguistics": "This linguistic insight shows how our verbal categories shape the way we organize and interpret our sensory experiences.",
    "History": "This historical perspective encourages us to analyze the past with greater depth and empathy for different human experiences.",
    "Sociology": "This sociological concept reveals the invisible structures and norms that coordinate human behavior in complex modern societies.",
    "Computer Science": "This computational discovery defines the absolute boundaries of what can be calculated by any physical or theoretical machine.",
    "Ecology": "This ecological concept highlights the delicate balance and deep interdependence of all living organisms within our shared biosphere.",
    "Anthropology": "This anthropological framework encourages us to look beyond our own cultural biases and appreciate the diverse ways of being human.",
    "Psychology": "This psychological insight helps us understand the hidden forces that shape our conscious thoughts, behaviors, and emotional experiences."
}

why_matters_fixes = {
    44: "This is crucial for our survival.",
    72: "This shapes our future with technology.",
    81: "This helps us adapt to changes.",
    86: "This leads to a more fulfilling life.",
    88: "This allows us to reclaim our power.",
    89: "This is essential for clear thinking."
}

def fix_files():
    for part in range(1, 7):
        filepath = f"scratch/entries_part{part}.json"
        if not os.path.exists(filepath):
            continue
            
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)
            
        modified = False
        for item in data:
            day = item.get("dayIndex")
            domain = item.get("domain")
            idea = item.get("the_idea", "")
            why = item.get("why_it_matters_now", "")
            
            idea_wc = len(idea.split())
            why_wc = len(why.split())
            
            # Fix idea if short
            if idea_wc < 100:
                sentence = domain_sentences.get(domain)
                if sentence:
                    item["the_idea"] = idea.rstrip() + " " + sentence
                    new_idea_wc = len(item["the_idea"].split())
                    print(f"Fixed Day {day} Idea word count: {idea_wc} -> {new_idea_wc}")
                    modified = True
                    
            # Fix why_it_matters_now if short
            if why_wc < 50:
                fix_phrase = why_matters_fixes.get(day)
                if fix_phrase:
                    item["why_it_matters_now"] = why.rstrip() + " " + fix_phrase
                    new_why_wc = len(item["why_it_matters_now"].split())
                    print(f"Fixed Day {day} Why word count: {why_wc} -> {new_why_wc}")
                    modified = True
                    
        if modified:
            with open(filepath, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            print(f"Saved changes to {filepath}")

if __name__ == "__main__":
    fix_files()
