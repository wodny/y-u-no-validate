/*
 * Copyright 2012  Marcin Szewczyk <Marcin.Szewczyk@wodny.org>
 *
 * This file is part of Y U no validate.
 * 
 * Y U no validate is free software: you can redistribute it
 * and/or modify it under the terms of the GNU General Public
 * License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later
 * version.
 * 
 * Y U no validate is distributed in the hope that it will be
 * useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
 * PURPOSE.  See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public
 * License along with Y U no validate.  If not, see
 * <http://www.gnu.org/licenses/>.
 *
 */

function YUNoValidateObserver() {
  this.register();
}

YUNoValidateObserver.prototype = {
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

yunovalidate_observer = new YUNoValidateObserver();
