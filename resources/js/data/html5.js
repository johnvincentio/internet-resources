/* global APP */

(function() {
	'use strict';

	var data = APP.data.addData('ion-social-html5-outline', 'HTML5 Resources');

	APP.data.addItem(
		data,
		'mdn.png',
		'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
		'HTML5 Reference by MDN',
		"You don't need to know every HTML5 element. I just use this excellent reference all the time."
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'css-tricks-3.png',
		'https://css-tricks.com/snippets/html/glyphs/',
		'HTML Entity Reference by CSS-Tricks',
		'Super useful reference, gives you HTML entitiy name, numeric code, hex code and ISO code.'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'github.png',
		'https://vitalets.github.io/x-editable/',
		'X-editable',
		'In-place editing with Twitter Bootstrap, jQuery UI or pure jQuery.'
	);
	APP.model.add(data);
})();
