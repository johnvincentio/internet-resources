
/* global APP */

(function() {
  'use strict';

var data = APP.data.addData("ion-ios-world", "React Resources");

APP.data.addItem(data,
"react.ico",
"https://reactjs.org/",
"React",
"A Javascript library for building user interfaces."
);
APP.model.add(data);

APP.data.addItem(data,
  "babel.ico",
  "https://babeljs.io/",
  "Babel is a JavaScript compiler",
  "Use next generation JavaScript, today."
  );
  APP.model.add(data);

APP.data.addItem(data,
  "react-training.png",
  "https://reacttraining.com/react-router/web/guides/philosophy",
  "React Training",
  "React Training / React Router"
  );
  APP.model.add(data);

})();
