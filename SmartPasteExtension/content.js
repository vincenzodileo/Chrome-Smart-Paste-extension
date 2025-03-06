chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "smart-copy") {
        const htmlContent = `
<html>
<body>
<!--StartFragment--><a href="${request.url}">${request.title}</a><!--EndFragment-->
</body>
</html>`.trim();

        const listener = (e) => {
            e.clipboardData.setData('text/html', htmlContent);
            e.clipboardData.setData('text/plain', request.url);
            e.preventDefault();
            document.removeEventListener('copy', listener, true);
        };

        document.addEventListener('copy', listener, true);
        document.execCommand('copy');
        document.removeEventListener('copy', listener, true);
        chrome.runtime.sendMessage({ action: "copy-successful" });
    }
});
