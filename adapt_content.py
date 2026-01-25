#!/usr/bin/env python3
"""
Script para adaptar el contenido de cerrajeros Leganés a Villaviciosa del Odón
"""
import os
import re
from pathlib import Path

# Definir los reemplazos
REPLACEMENTS = [
    # Ciudad y ubicaciones
    ("Leganés", "Villaviciosa del Odón"),
    ("Leganes", "Villaviciosa del Odón"),
    ("leganés", "villaviciosa del odón"),
    ("leganes", "villaviciosa del odón"),
    
    # Marca
    ("Aguado", "Villaviciosa 24h"),
    ("aguado", "villaviciosa24h"),
    ("AGUADO", "VILLAVICIOSA24H"),
    
    # Dirección antigua
    ("Av. de Fuenlabrada, 37, local 34 (Galería Sanabria), 28912 Leganés", "Avenida Príncipe de Asturias, 94, 28670 Villaviciosa del Odón"),
    ("C/ SANTILLANA DEL MAR, 14, 28660, BOADILLA DEL MONTE", "Avenida Príncipe de Asturias, 94, 28670 Villaviciosa del Odón"),
    
    # Email
    ("aguado@cerrajerosleganes.madrid", "info@cerrajeros.info"),
    
    # Teléfonos
    ("624 940 941", "915 27 00 49"),
    ("+34 624 940 941", "+34 915 27 00 49"),
    
    # Dominios y URLs
    ("cerrajerosdeleganes.madrid", "cerrajerosvillaviciosa.es"),
    ("cerrajeriaaguado.com", "cerrajerosvillaviciosa.es"),
    
    # Logos e imágenes
    ("logo-aguado", "logo-villaviciosa"),
    ("hero-moderno-aguado", "hero-moderno-villaviciosa"),
    ("cerrajero-aguado", "cerrajero-villaviciosa"),
    
    # NIF
    ("B86047636", "B12345678"),
    
    # Razón social
    ("CERRAJERIA AGUADO, S.L.", "CERRAJEROS VILLAVICIOSA 24H, S.L."),
    
    # Zona de servicio
    ("Zona Sur de Madrid", "Zona Oeste de Madrid"),
    
    # Referencias específicas a barrios de Leganés (se eliminarán después)
    ("Zarzaquemada", "Centro"),
    ("San Nicasio", "El Bosque"),
    ("El Carrascal", "Campodón"),
    ("La Fortuna", "Castillo"),
    ("Arroyo Culebro", "Río Guadarrama"),
    ("Valdepelayo", "La Vega"),
    ("Vereda Estudiantes", "Monreal"),
    ("Vereda de los Estudiantes", "Monreal"),
    ("Los Santos", "Sacedón"),
    ("Leganés Norte", "Casa de Roque"),
    ("Solagua", "Dehesa del Sotillo"),
    ("Poza del Agua", "El Bosque"),
]

def should_process_file(filepath):
    """Determina si un archivo debe ser procesado"""
    # Extensiones a procesar
    valid_extensions = {'.ts', '.tsx', '.js', '.jsx', '.md', '.html', '.txt', '.json', '.webmanifest'}
    
    # Directorios a ignorar
    ignore_dirs = {'node_modules', '.git', 'dist', 'build', '.vite'}
    
    path = Path(filepath)
    
    # Verificar extensión
    if path.suffix not in valid_extensions:
        return False
    
    # Verificar que no esté en directorios ignorados
    for ignore_dir in ignore_dirs:
        if ignore_dir in path.parts:
            return False
    
    return True

def replace_in_file(filepath):
    """Reemplaza el contenido en un archivo"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Aplicar todos los reemplazos
        for old, new in REPLACEMENTS:
            content = content.replace(old, new)
        
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
    """Función principal"""
    base_dir = Path('/home/ubuntu/cerrajeros-villaviciosa')
    files_processed = 0
    files_modified = 0
    
    print("🔄 Iniciando adaptación de contenido...")
    print(f"📁 Directorio base: {base_dir}")
    print()
    
    # Recorrer todos los archivos
    for root, dirs, files in os.walk(base_dir):
        # Filtrar directorios ignorados
        dirs[:] = [d for d in dirs if d not in {'node_modules', '.git', 'dist', 'build', '.vite'}]
        
        for file in files:
            filepath = Path(root) / file
            
            if should_process_file(filepath):
                files_processed += 1
                if replace_in_file(filepath):
                    files_modified += 1
                    print(f"✅ Modificado: {filepath.relative_to(base_dir)}")
    
    print()
    print("=" * 60)
    print(f"✨ Proceso completado!")
    print(f"📊 Archivos procesados: {files_processed}")
    print(f"📝 Archivos modificados: {files_modified}")
    print("=" * 60)

if __name__ == "__main__":
    main()
