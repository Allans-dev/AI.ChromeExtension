chrome.browserAction.onClicked.addListener(function (tab) {
  console.log(tab.url);
});

console.log('loaded...');
