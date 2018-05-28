
/* global APP */

(function() {
    'use strict';

var data = APP.data.addData("ion-edit", "Editor Tools");

APP.data.addItem(data,
"visual-studio-code.ico",
"https://code.visualstudio.com/",
"Visual Studio Code",
"Rich IDE"
);
APP.model.add(data);

APP.data.addItem(data,
"visual-studio-code.ico",
"https://marketplace.visualstudio.com/",
"Visual Studio Code Marketplace",
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
"sublime.ico",
"https://www.sublimetext.com/",
"Sublime Text Editor",
"A sophisticated text editor for code, markup and prose"
);
APP.model.add(data);

APP.data.addItem(data,
"brackets.png",
"http://brackets.io/",
"Brackets Text Editor",
"Excellent HTML editor"
);
APP.model.add(data);

})();
