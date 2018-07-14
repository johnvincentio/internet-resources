/* global APP */

(function() {
	'use strict';

	var data = APP.data.addData('ion-social-nodejs', 'Node Package Manager', 'npm');

	APP.data.addItem(data, 'npmjs.png', 'https://www.npmjs.com/', 'NPM', 'Node Package Manager');
	APP.model.add(data);

	APP.data.addItem(
		data,
		'npmjs.png',
		'https://www.npmjs.com/package/jQuery',
		'jQuery NPM',
		'jQuery packaged for NpdeJS'
	);
	APP.model.add(data);
})();
