import json

log_path = r"C:\Users\amitm\.gemini\antigravity\brain\1b61464f-32d4-4e33-8abb-2f005e3328b8\.system_generated\logs\transcript.jsonl"
out_path = r"c:\Users\amitm\Desktop\New Agent\Pravah\scratch\full_prompt_1842.md"

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('step_index') == 1842:
                content = data.get('content', '')
                with open(out_path, 'w', encoding='utf-8') as out:
                    out.write(content)
                print("Prompt written to scratch/full_prompt_1842.md")
                break
        except Exception as e:
            pass
