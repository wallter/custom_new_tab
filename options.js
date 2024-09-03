document.getElementById('save').addEventListener('click', () => {
    const homepage = document.getElementById('homepage').value;
    if (homepage) {
        chrome.storage.sync.set({ homepage }, () => {
            alert(`Homepage set to ${homepage}`);
        });
    }
});

// Load the stored homepage
chrome.storage.sync.get("homepage", ({ homepage }) => {
    if (homepage) {
        document.getElementById('homepage').value = homepage;
    }
});