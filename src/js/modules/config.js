define(function() {
  chrome.storage.sync.setDefaults = function(defaults) {
    this.defaults = defaults;
  };

  return chrome.storage.sync;
});