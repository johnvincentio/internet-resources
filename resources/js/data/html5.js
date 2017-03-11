
/* global APP */

(function() {
    'use strict';

// https://cdnjs.com/
// https://www.npmjs.com/package/jQuery

var data = APP.data.addData("ion-social-html5-outline", "HTML5 Resources");

APP.data.addItem(data,
"brackets.png",
"http://brackets.io/",
"Brackets Text Editor",
"Not just an HTML5 resource, but for writing code in general. The best free code editor in the world!"
);
APP.model.add(data);

APP.data.addItem(data,
"mdn.png",
"https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
"HTML5 Reference by MDN",
"You don't need to know every HTML5 element. I just use this excellent reference all the time."
);
APP.model.add(data);

APP.data.addItem(data,
"css-tricks-3.png",
"https://css-tricks.com/snippets/html/glyphs/",
"HTML Entity Reference by CSS-Tricks",
"Super useful reference, gives you HTML entitiy name, numeric code, hex code and ISO code."
);
APP.model.add(data);

})();
