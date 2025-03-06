chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "copy-successful") {
        const messageEl = document.getElementById("message");
        message.textContent = "Smart Copy successful!";
        setTimeout(() => {
            message.textContent = "Use Ctrl+Shift+Z to Smart Copy";
        }, 2000);
    }
});
