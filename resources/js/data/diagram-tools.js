/* global APP */

(function() {
	'use strict';

	var data = APP.data.addData('ion-settings', 'Diagram Tools', 'diagram-tools');

	APP.data.addItem(
		data,
		'balsamiq.ico',
		'https://balsamiq.com/',
		'Balsamiq Mockups',
		'Excellent tool for drawing wireframes and mockups.'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'creately.png',
		'https://creately.com/',
		'Creately',
		'Excellent tool for drawing numerous diagram types, so many templates and an active community'
	);
	APP.model.add(data);
})();
