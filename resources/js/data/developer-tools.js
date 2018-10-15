/* global APP */

(function() {
	'use strict';

	var data = APP.data.addData('ion-wrench', 'Developer Tools', 'developer-tools');

	APP.data.addItem(
		data,
		'git.ico',
		'https://git-scm.com/',
		'Git',
		'Free and open source distributed version control system'
	);
	APP.model.add(data);

	APP.data.addItem(data, 'github.png', 'https://github.com/', 'Github', 'Git repositories');
	APP.model.add(data);

	APP.data.addItem(data, 'bitbucket.ico', 'https://bitbucket.org/', 'Bitbucket', 'Git repositories');
	APP.model.add(data);

	APP.data.addItem(
		data,
		'git-tower.ico',
		'https://www.git-tower.com/blog/git-cheat-sheet/',
		'Git Cheat Sheet',
		'Git Cheat Sheet'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'sourcetree.ico',
		'https://www.sourcetreeapp.com/',
		'SourceTree',
		'A free visual Git and Hg client for Mac and Windows'
	);
	APP.model.add(data);

	APP.data.addItem(data, 'github.png', 'http://rogerdudler.github.io/git-guide/', 'Git Guide', 'Simple Git Guide');
	APP.model.add(data);

	APP.data.addItem(
		data,
		'snyk.png',
		'https://snyk.io/',
		'Snyk',
		'Continuously find & fix vulnerabilities in your dependencies'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'greenkeeper.ico',
		'https://greenkeeper.io/',
		'Greenkeeper.io',
		'Get safety & consistency with real-time monitoring and automatic updates for npm dependencies.'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'caniuse.png',
		'http://caniuse.com/',
		'Can I Use?',
		'Up-to-date browser support tables for front-end technologies on desktop and mobile browsers.'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'github.png',
		'https://browserl.ist/',
		'browserl.ist',
		'A page to display compatible browsers from a browserslist string.'
	);
	APP.model.add(data);

})();
