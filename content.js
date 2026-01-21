const TITLE_SELECTOR = '.conversation-title.gds-title-m';

function syncTitle() {
  // Find the element containing the chat title
  const titleElement = document.querySelector(TITLE_SELECTOR);

  // If the element exists and has text, update the document title
  if (titleElement && titleElement.textContent) {
    const chatTitle = titleElement.textContent.trim();
    
    // Only update if it's different to prevent unnecessary loops
    if (document.title !== chatTitle) {
      document.title = chatTitle;
    }
  }
}

// Run immediately in case the page is already loaded
syncTitle();

// Create an observer to watch for changes in the page (SPA navigation/loading)
const observer = new MutationObserver(() => {
  syncTitle();
});

// Start observing the document body for changes
observer.observe(document.body, {
  childList: true,
  subtree: true
});
