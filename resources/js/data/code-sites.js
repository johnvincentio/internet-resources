
/* global APP */

(function() {
    'use strict';

var data = APP.data.addData("ion-ios-bookmarks-outline", "Online Coding Sites");

APP.data.addItem(data,
"codepen.ico",
"http://codepen.io/",
"Codepen",
"Lots of Pens to search and review"
);
APP.model.add(data);

APP.data.addItem(data,
"jsbin.png",
"http://jsbin.com",
"jsbin",
"Keep your bins here..."
);
APP.model.add(data);

APP.data.addItem(data,
"gomix.ico",
"https://gomix.com",
"Gomix",
"Gomix is a Cloud based Node environment"
);
APP.model.add(data);

})();
