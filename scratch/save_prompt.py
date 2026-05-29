with open("scratch/all_user_inputs.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

# Extract from line 909 (0-indexed 908) to the end of that step or some number of lines.
# Let's find where the step ends or write a good chunk of lines.
prompt_lines = lines[908:2500]

with open("scratch/remaining_rooms_prompt.md", "w", encoding="utf-8") as out:
    out.writelines(prompt_lines)

print("Prompt extracted to scratch/remaining_rooms_prompt.md")
