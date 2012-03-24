function ZulerniaObserver() {
  this.register();
}

ZulerniaObserver.prototype = {
  observe: function(subject, topic, data) {
    var inPrivateBrowsing = inPrivateBrowsingMode();
    var pe = document.getElementById("permanent");
    if(!inPrivateBrowsing) {
      pe.checked = false;
    }
  },
  register: function() {
    var observerService = Components.classes["@mozilla.org/observer-service;1"]
                          .getService(Components.interfaces.nsIObserverService);
    observerService.addObserver(this, "cert-exception-ui-ready", false);
  },
  unregister: function() {
    var observerService = Components.classes["@mozilla.org/observer-service;1"]
                            .getService(Components.interfaces.nsIObserverService);
    observerService.removeObserver(this, "cert-exception-ui-ready");
  }
}

zulernia_observer = new ZulerniaObserver();
