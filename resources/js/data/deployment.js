/* global APP */

(function() {
	'use strict';

	var data = APP.data.addData('ion-funnel', 'Deployment', 'deployment');

	APP.data.addItem(
		data,
		'webpack.ico',
		'https://webpack.js.org',
		'Webpack bundle scripts',
		'Webpack bundle scripts, styles etc'
	);
	APP.model.add(data);

	APP.data.addItem(data, 'webpack.ico', 'https://webpack.js.org/guides/', 'Webpack Guides', 'List of Webpack Guides');
	APP.model.add(data);

	APP.data.addItem(
		data,
		'webpack.ico',
		'https://webpack.js.org/loaders/',
		'Webpack loaders',
		'List of Webpack loaders'
	);
	APP.model.add(data);

	APP.data.addItem(data, 'travis-ci.png', 'https://travis-ci.org/', 'Travis CI', 'Test and Deploy with Confidence');
	APP.model.add(data);

	APP.data.addItem(
		data,
		'pm2.ico',
		'http://pm2.keymetrics.io/',
		'PM2',
		'Advanced, production process manager for Node.js'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'github.png',
		'https://chrisbateman.github.io/webpack-visualizer/',
		'Webpack Visualizer',
		'Graphs for Webpack Bundles'
	);
	APP.model.add(data);

})();
