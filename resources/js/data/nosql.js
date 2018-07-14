/* global APP */

(function() {
	'use strict';

	var data = APP.data.addData('ion-cube', 'NoSQL');

	APP.data.addItem(data, 'mongodb.ico', 'https://www.mongodb.com/', 'MongoDB', 'MongoDB');
	APP.model.add(data);

	APP.data.addItem(data, 'mongoChef.png', 'https://studio3t.com/', 'Studio #3T for MongoDB', 'MongoDB GUI');
	APP.model.add(data);

	APP.data.addItem(
		data,
		'github.png',
		'http://mongoosejs.com/',
		'Mongoose',
		'Elegant mongodb object modeling for node.js'
	);
	APP.model.add(data);

	APP.data.addItem(data, 'mLab-logo-dark.svg', 'https://www.mlab.com', 'mLab', 'MongoDB in the Cloud');
	APP.model.add(data);
})();
