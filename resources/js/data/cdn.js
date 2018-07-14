/* global APP */

(function() {
	'use strict';

	var data = APP.data.addData('ion-ios-cloud', 'Content Delivery Network CDNs');
	APP.data.addItem(data, 'cdnjs.ico', 'https://cdnjs.com/', 'CDN', 'Search from thousands of libraries');
	APP.model.add(data);

	APP.data.addItem(
		data,
		'google-cloud.ico',
		'https://cloud.google.com/cdn/',
		'Google Cloud CDN',
		"Low-latency, low-cost content delivery using Google's global network."
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'cloudfare.ico',
		'https://www.cloudflare.com/cdn/',
		'Cloudfare CDN',
		'Fast, Global Content Delivery Network.'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'jsDelivr.ico',
		'http://www.jsdelivr.com/',
		'jsDelivr CDN',
		'A free super-fast CDN for developers and webmasters'
	);
	APP.model.add(data);

	APP.data.addItem(data, 'keycdn.ico', 'https://www.keycdn.com/', 'Keycdn CDN', 'A Simple, Fast & Reliable CDN.');
	APP.model.add(data);
})();
