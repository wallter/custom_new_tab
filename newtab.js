const defaultHomepage = "https://chat.openai.com/chat";

chrome.storage.sync.get("homepage", ({ homepage }) => {
  const redirectTo = homepage || defaultHomepage;
  window.location.href = redirectTo;
});
