
/* global APP */

(function() {
    'use strict';

var data = APP.data.addData("ion-ios-bookmarks-outline", "Cloud");

APP.data.addItem(data,
"aws.ico",
"https://aws.amazon.com/",
"Amazon Web Services",
"AWS Cloud Computing"
);
APP.model.add(data);


APP.data.addItem(data,
"heroku.ico",
"https://www.heroku.com/",
"Heroku",
"Heroku is a PaaS that enables developers to build, run, and operate applications entirely in the cloud"
);
APP.model.add(data);

APP.data.addItem(data,
"digitalocean.png",
"https://www.digitalocean.com/",
"Digital Ocean",
"Deploy to the Cloud"
);
APP.model.add(data);

})();
