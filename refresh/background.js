// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function(){
    chrome.browserAction.onClicked.addListener(function (tab) {
        chrome.windows.getAll({populate:true}, function (windows) {
            windows.forEach(function(w) {
                w.tabs.forEach(function(tab) {
                    chrome.tabs.reload(tab.id)
                })
            });
        })
    });
})();
