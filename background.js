console.log("background running!");

// Listen for URL change and send content script trigger 
// to tab if URL matches 'livechatinc.com'
chrome.tabs.onUpdated.addListener(
  (tabId, changeInfo, tab) => {
    let liveChat = /livechatinc.com\//i

    console.log("changeInfo", changeInfo);
    console.log("tabId", tabId);
    console.log("tab", tab);

    if (liveChat.test(changeInfo.url)) {
      console.log('URL Change!');
      // Send message to current tab
      chrome.tabs.query(
        { active: true, currentWindow: true }, (tabs) => {
          console.log('sending message from background');
          chrome.tabs.sendMessage(
            tabs[0].id, 
            { message: 'urlChange' }
          );
      });
    };
});
