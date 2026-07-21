from pathlib import Path

# ===============================
# Import BioGuard Templates
# ===============================

from templates.header import header
from templates.reporter import reporter
from templates.farm import farm
from templates.animal import animal
from templates.clinical import clinical
from templates.epidemiology import epidemiology
from templates.review import review
from templates.footer import footer
from styles.fmd_css import css
from scripts.fmd_js import js
# ===============================
# BioGuard Builder
# ===============================

print("=" * 50)
print(" Project BioGuard Builder")
print(" Version: v0.2.0")
print("=" * 50)

# Create pages directory if missing
pages_dir = Path("../pages")
pages_dir.mkdir(exist_ok=True)

css_dir = Path("../css")
css_dir.mkdir(exist_ok=True)

js_dir = Path("../js")
js_dir.mkdir(exist_ok=True)
# Assemble the complete HTML document
html = (
    header
    + reporter
    + farm
    + animal
    + clinical
    + epidemiology
    + review
    + footer
)

# Output file
output_file = pages_dir / "fmd-report.html"

# Write HTML
output_file.write_text(html, encoding="utf-8")
# Output CSS file
css_file = css_dir / "fmd-report.css"

# Write CSS
css_file.write_text(css, encoding="utf-8")
# Output JS file
js_file = js_dir / "fmd-report.js"

# Write JS
js_file.write_text(js, encoding="utf-8")

print()

print("✅ HTML generated.")
print(f"📄 {output_file.resolve()}")

print()

print("✅ CSS generated.")
print(f"🎨 {css_file.resolve()}")

print()

print("✅ JavaScript generated.")
print(f"⚙️ {js_file.resolve()}")

print()

print("Build completed successfully.")
