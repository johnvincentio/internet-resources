
/* global APP */

(function() {
    'use strict';

var data = APP.data.addData("ion-ios-loop", "Deployment");


APP.data.addItem(data,
"webpack.ico",
"https://webpack.js.org",
"Webpack bundle scripts",
"Webpack bundle scripts, styles etc"
);
APP.model.add(data);

APP.data.addItem(data,
"webpack.ico",
"https://webpack.github.io/docs/tutorials/getting-started/",
"Webpack tutorial",
"Webpack simple walkthrough"
);
APP.model.add(data);

APP.data.addItem(data,
"travis-ci.png",
"https://travis-ci.org/",
"Travis CI",
"Test and Deploy with Confidence"
);
APP.model.add(data);

APP.data.addItem(data,
"github.png",
"http://rogerdudler.github.io/git-guide/",
"Git Guide",
"Simple Git Guide"
);
APP.model.add(data);

APP.data.addItem(data,
"pm2.ico",
"http://pm2.keymetrics.io/",
"PM2",
"Advanced, production process manager for Node.js"
);
APP.model.add(data);

})();