document.getElementById('readButton').addEventListener('click', async () => {
  // Get the current active tab
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (tab?.url) {
    // Create the Freedium URL
    const freediumUrl = `https://freedium.cfd/${tab.url}`;

    // Open the URL in a new tab
    chrome.tabs.create({ url: freediumUrl });
  }
});