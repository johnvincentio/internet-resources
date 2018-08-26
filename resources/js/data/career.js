/* global APP */

(function() {
	'use strict';

	var data = APP.data.addData('ion-briefcase', 'Career', 'career');

	APP.data.addItem(
		data,
		'resume-beacon.png',
		'https://www.resumebeacon.com/',
		'Resume Beacon',
		'Create a professional resume'
	);
	APP.model.add(data);


})();
