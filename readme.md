# Gemini Chat Title Renamer

A lightweight Chrome Extension that automatically updates the browser tab title to match the current chat title on [Google Gemini](https://gemini.google.com/).

## 🎯 What it does
By default, Google Gemini tabs often just say "Gemini" or don't update immediately when switching conversations. This extension:
* Extracts the text from the chat header (`.conversation-title.gds-title-m`).
* Sets the browser tab name to that text.
* Dynamically updates as you switch between chats without needing to reload the page.

## 📂 Project Structure
* `manifest.json` - Configuration file required by Chrome.
* `content.js` - The script that monitors the page for title changes.
* `README.md` - This documentation file.

## 🚀 How to Install

1.  **Download/Create the files:**
    Ensure `manifest.json` and `content.js` are in a single folder on your computer (e.g., named `gemini-tab-renamer`).

2.  **Open Chrome Extensions:**
    Type `chrome://extensions` in your address bar and press Enter.

3.  **Enable Developer Mode:**
    Toggle the switch labeled **Developer mode** in the top right corner of the page.

4.  **Load the Extension:**
    * Click the **Load unpacked** button (top left).
    * Select the folder containing your files.

5.  **Test it:**
    Open (or refresh) a Google Gemini tab. The tab title should now reflect the specific conversation name.

## 🛠️ How it works
Since Gemini is a Single Page Application (SPA), the page doesn't fully reload when you click a new chat. This extension uses a `MutationObserver` to watch for DOM changes in the body. When it detects that the `.conversation-title` element has changed, it instantly updates `document.title`.

## 📝 License
Feel free to modify and use this script however you like!
