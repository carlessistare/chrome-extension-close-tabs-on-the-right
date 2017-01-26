chrome.commands.onCommand.addListener(function(cmd) {
  if (cmd == "close-right-tabs") {
    chrome.windows.getCurrent(function(current_window) {
      chrome.tabs.getSelected(null, function(tab) {
        var query = {
          active: false, 
          pinned:false, 
          windowId: current_window.id
        };
        chrome.tabs.query(query, function(tabs) {
          var tabs_to_close = [];
          for (var i = 0; i < tabs.length; i++)
            if (tabs[i].index > tab.index) {
              tabs_to_close.push(tabs[i].id);
            }
          chrome.tabs.remove(tabs_to_close);
        });
      });
    });
  }
});