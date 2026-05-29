import json

log_path = r"C:\Users\amitm\.gemini\antigravity\brain\1b61464f-32d4-4e33-8abb-2f005e3328b8\.system_generated\logs\transcript.jsonl"
out_path = r"c:\Users\amitm\Desktop\New Agent\Pravah\scratch\all_user_inputs.txt"

with open(log_path, 'r', encoding='utf-8') as f, open(out_path, 'w', encoding='utf-8') as out:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'USER_INPUT':
                out.write(f"=== STEP {data.get('step_index')} ===\n")
                out.write(data.get('content', ''))
                out.write("\n\n")
        except Exception as e:
            pass
print("Done writing user inputs.")
