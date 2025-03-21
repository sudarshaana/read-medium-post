// Create context menu item when extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "removePaywall",
    title: "Remove Paywall",
    contexts: ["link"]
  });
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "removePaywall") {
    // Get the clicked link URL
    const url = info.linkUrl;
    // Open Link
    const freediumUrl = `https://freedium.cfd/${url}`;
    // Open the URL in a new tab
    chrome.tabs.create({ url: freediumUrl });
  }
});