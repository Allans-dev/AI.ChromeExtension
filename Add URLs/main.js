import indico from 'indico.io';

indicoFunction(url) {

  const indico.apiKey = "f021a8f6bb80c6fcda683d9db16ade3d";

  let display = document.getElementById('container');

  indico
    .sentiment(url)
    .then(function(res){
        display.innerHTML = res;
        console.log(res);
      })
      .catch(function(err){
        console.log('err: ', err);
      })
  }

function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  const queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    const tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    const url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    }

    callback(url);

  };

getCurrentTabUrl(indicoFunction(url));
