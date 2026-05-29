# -*- coding: utf-8 -*-
import os
import json

# Helper to escape double quotes
def escape(s):
    if not s:
        return ""
    return s.replace('"', '\\"').replace('\n', '\\n')

print("Writing generate_anand_bharati.py script...")

# Create scratch directory if it doesn't exist
os.makedirs("scratch", exist_ok=True)
