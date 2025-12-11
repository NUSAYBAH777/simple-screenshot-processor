# 📸Processed Screenshot Utility

## simple-screenshot-processor
A simple Node.js utility that captures a desktop screenshot, applies basic image processing (grayscale + flip), compresses the output into a ZIP file, and saves everything directly to your Desktop.

---

## 🚀 Features

- Captures your current desktop screen  
- Converts the screenshot to **grayscale**  
- **Flips** the image vertically  
- Compresses the processed image into a **ZIP archive**  
- Automatically saves output to your **Desktop**  

---
## 🛠️ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/simple-screenshot-processor.git
cd simple-screenshot-processor
```
## ▶️ Usage

Run the script using Node.js:

```bash
node index.js
```
---
## 📦 Output Example

- **Image:** `processed_screenshot.jpg`
- **Archive:** `processed_screenshot.zip`

Both are generated automatically every time the script runs.

---

## ⚙️ How It Works

Inside `index.js`:

1. Capture the desktop screenshot  
2. Process the screenshot using **sharp**  
   - Convert to **grayscale**  
   - **Flip vertically**  
   - Save as JPEG (quality: 60)  
3. Create a ZIP file using **adm-zip**  
4. Save both the JPEG and ZIP file to the user’s Desktop  

---
## 🧰 Requirements

- Node.js v14 or higher  
- Supported operating systems:
  - Windows  
  - macOS  
  - Linux  
