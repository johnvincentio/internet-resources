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


	APP.data.addItem(
		data,
		'linkedin.ico',
		'https://www.linkedin.com/',
		'LinkedIn',
		'Social Networking for the Business Community'
	);
	APP.model.add(data);

})();
