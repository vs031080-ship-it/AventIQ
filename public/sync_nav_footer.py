import os
import re

# Configuration
PUBLIC_DIR = r"C:\Users\VaibhavSharma\.gemini\antigravity\AventIQ\public"
SOURCE_FILE = os.path.join(PUBLIC_DIR, "index.html")

def get_file_content(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file_content(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def extract_section(content, start_marker, end_marker):
    """Extracts content between start_marker and end_marker (inclusive of wrapper tags if possible)."""
    # Regex for Navbar: <nav ...> ... </nav>
    # Regex for Footer: <footer ...> ... </footer>
    
    # We will use simple string finding for robustness if markers are unique
    pass

def extract_nav(content):
    pattern = r'(<!-- Navbar -->.*?<nav.*?<\/nav>)'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        return match.group(1)
    return None

def extract_footer(content):
    # Capture from <!-- Footer --> to </footer>
    pattern = r'(<!-- Footer -->.*?<footer.*?<\/footer>)'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        return match.group(1)
    return None

def main():
    print(f"Reading source: {SOURCE_FILE}")
    source_content = get_file_content(SOURCE_FILE)
    
    nav_html = extract_nav(source_content)
    footer_html = extract_footer(source_content)
    
    if not nav_html:
        print("Error: Could not extract Navbar from index.html")
        return
    if not footer_html:
        print("Error: Could not extract Footer from index.html")
        return

    print("Navbar and Footer extracted successfully.")

    # Iterate over all HTML files
    for filename in os.listdir(PUBLIC_DIR):
        if filename.endswith(".html") and filename != "index.html":
            file_path = os.path.join(PUBLIC_DIR, filename)
            print(f"Processing {filename}...")
            
            content = get_file_content(file_path)
            
            # Replace Navbar
            new_content = re.sub(r'<!-- Navbar -->.*?<nav.*?<\/nav>', nav_html, content, flags=re.DOTALL)
            
            # Replace Footer
            new_content = re.sub(r'<!-- Footer -->.*?<footer.*?<\/footer>', footer_html, new_content, flags=re.DOTALL)
            
            if new_content != content:
                write_file_content(file_path, new_content)
                print(f"  Updated {filename}")
            else:
                print(f"  No changes needed for {filename}")

if __name__ == "__main__":
    main()
