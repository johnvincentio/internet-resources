
/* global APP */

(function() {
    'use strict';

var data = APP.data.addData("ion-edit", "Editor Tools");

APP.data.addItem(data,
"visual-studio.ico",
"https://www.visualstudio.com/",
"Visual Studio Code",
"Rich IDE"
);
APP.model.add(data);

APP.data.addItem(data,
"visual-studio.ico",
"https://marketplace.visualstudio.com/",
"Visual Studio Marketplace",
"Extensions for Visual Studio Code"
);
APP.model.add(data);

APP.data.addItem(data,
"eslint.png",
"http://eslint.org/",
"ESLint",
"The pluggable linting utility for JavaScript and JSX"
);
APP.model.add(data);

APP.data.addItem(data,
"brackets.png",
"http://brackets.io/",
"Brackets Text Editor",
"Not just an HTML5 resource, but for writing code in general. The best free code editor in the world!"
);
APP.model.add(data);

})();
