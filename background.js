chrome.commands.onCommand.addListener(function(command) {
    if (command === "get_selected_text") {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "activateExtension" });
      });
    }
  });
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "getSelectedText") {
      chrome.tabs.executeScript(
        {
          code: "window.getSelection().toString();"
        },
        function(result) {
          sendResponse(result[0]);
        }
      );
      return true;
    }
  });
  