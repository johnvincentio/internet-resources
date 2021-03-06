/* global APP */

(function() {
	'use strict';

	var data = APP.data.addData('ion-hammer', 'Documentation Tools', 'documentation-tools');

	APP.data.addItem(
		data,
		'google-docs.ico',
		'https://docs.google.com/',
		'Google Docs',
		'Create and edit documents online, for free.'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'gitbook.ico',
		'https://www.gitbook.com/',
		'GitBook',
		'GitBook helps your team write, collaborate and publish content online.'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'markdown.png',
		'https://guides.github.com/features/mastering-markdown/',
		'Mastering Markdown',
		'Straightforward Markdown Guide'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'markdown.png',
		'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet',
		'Markdown Cheatsheet',
		'Markdown Cheatsheet'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'github.png',
		'http://assemble.io/docs/Cheatsheet-Markdown.html',
		'Markdown Cheatsheet',
		'Markdown Cheatsheet'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'github.png',
		'https://gist.github.com/',
		'Gists',
		'Great for code snippets and documentation'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'gisto.png',
		'http://www.gistoapp.com/',
		'Gisto Code Snippet Manager',
		'Great for gist code snippets and documentation'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'evernote.ico',
		'https://evernote.com/',
		'Evernote Notes Manager',
		'Inspiration strikes anywhere. Evernote lets you capture, nurture, and share your ideas across any device.'
	);
	APP.model.add(data);

	APP.data.addItem(data, 'lumio.ico', 'https://www.lumioapp.com/', 'Lumio', 'Highlight, organize and share ideas.');
	APP.model.add(data);
})();
