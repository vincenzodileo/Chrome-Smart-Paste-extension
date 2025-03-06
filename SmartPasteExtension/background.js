chrome.commands.onCommand.addListener((command) => {
    if (command === "smart-copy") {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: "smart-copy",
                title: tabs[0].title,
                url: tabs[0].url
            });
        });
    }
});
