#!/usr/bin/env python3
import os
import re

COLOR_REPLACEMENTS = {
    # Azul marino muy oscuro -> Azul más claro con mejor contraste
    '#0A2540': '#1B4965',
    '0A2540': '1B4965',
    
    # Dorado oscuro -> Dorado más cálido
    '#D4AF37': '#C9A961',
    'D4AF37': 'C9A961',
    
    # Fondos oscuros -> Fondos claros
    'bg-\\[#001529\\]': 'bg-white',
    'text-\\[#001529\\]': 'text-[#1B4965]',
    
    # Gradientes oscuros -> Gradientes claros
    'from-\\[#0A2540\\]': 'from-[#1B4965]',
    'to-\\[#0A2540\\]': 'to-[#2C5F7F]',
}

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        for old, new in COLOR_REPLACEMENTS.items():
            if '\\[' in old or '\\]' in old:
                content = re.sub(old, new, content)
            else:
                content = content.replace(old, new)
        
        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error: {e}")
        return False

client_dir = '/home/ubuntu/cerrajeros-villaviciosa/client/src'
modified = 0

for root, dirs, files in os.walk(client_dir):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.jsx', '.js')):
            filepath = os.path.join(root, file)
            if replace_in_file(filepath):
                modified += 1
                print(f"✓ {filepath}")

print(f"\n{'='*60}\nArchivos modificados: {modified}\n{'='*60}")
