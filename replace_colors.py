#!/usr/bin/env python3
"""
Script para reemplazar colores naranjas por colores premium (azul marino y dorado)
"""

import os
import re

# Mapeo de colores
COLOR_REPLACEMENTS = {
    # Naranja principal -> Azul marino
    '#FF6B35': '#0A2540',
    'FF6B35': '0A2540',
    
    # Naranja secundario -> Dorado
    '#FF9F1C': '#D4AF37',
    'FF9F1C': 'D4AF37',
    
    # Clases de Tailwind orange -> gold/blue
    'orange-500': 'amber-500',
    'orange-900': 'slate-900',
    'bg-orange-50': 'bg-slate-50',
    'text-orange-600': 'text-amber-600',
    'shadow-orange-500/20': 'shadow-slate-900/20',
    'shadow-orange-500/10': 'shadow-slate-900/10',
    'shadow-orange-900/20': 'shadow-slate-900/30',
}

def replace_colors_in_file(filepath):
    """Reemplaza colores en un archivo"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Aplicar reemplazos
        for old_color, new_color in COLOR_REPLACEMENTS.items():
            content = content.replace(old_color, new_color)
        
        # Solo escribir si hubo cambios
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error procesando {filepath}: {e}")
        return False

def main():
    """Procesa todos los archivos del cliente"""
    client_dir = '/home/ubuntu/cerrajeros-villaviciosa/client/src'
    
    files_modified = 0
    files_processed = 0
    
    # Extensiones a procesar
    extensions = ('.tsx', '.ts', '.jsx', '.js', '.css')
    
    for root, dirs, files in os.walk(client_dir):
        for file in files:
            if file.endswith(extensions):
                filepath = os.path.join(root, file)
                files_processed += 1
                
                if replace_colors_in_file(filepath):
                    files_modified += 1
                    print(f"✓ Modificado: {filepath}")
    
    print(f"\n{'='*60}")
    print(f"Archivos procesados: {files_processed}")
    print(f"Archivos modificados: {files_modified}")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
