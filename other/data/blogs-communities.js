/* global APP */

(function() {
	'use strict';

	var data = APP.data.addData('ion-ios-star-outline', 'Blogs & Communities', 'blogs');

	APP.data.addItem(
		data,
		'johnvincent.png',
		'https://www.johnvincent.io/blog/',
		'John Vincent',
		'Technology Articles for Full Stack JavaScript Development'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'stackoverflow.png',
		'http://stackoverflow.com/',
		'Stack Overflow',
		'The biggest programmer community. Ask and find answers to HTML, CSS and JS questions.'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'smashingmagazine.png',
		'https://www.smashingmagazine.com/',
		'Smashing Magazine',
		'A very popular web design and development blog, writing about all things coding and designing.'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'codrops.png',
		'http://tympanus.net/codrops/',
		'Codrops',
		'Another blog, writing articles and tutorials about  latest web trends, techniques and new possibilities.'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'sitepoint.jpg',
		'http://www.sitepoint.com/',
		'Sitepoint',
		'A hub for web developers to share their passion for building incredible Internet things.'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'webdesignerdepot.png',
		'http://www.webdesignerdepot.com/',
		'Web Designer Depot',
		'The very best in web design news, views, techniques, and resources.'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'frontendfront.png',
		'https://frontendfront.com/',
		'Front End Front',
		'A place where front-end developers can ask questions, share links, and show their work.'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'heydesigner.png',
		'http://heydesigner.com',
		'Hey Designer',
		'Curated articles for designers and front-end developers.'
	);
	APP.model.add(data);

	APP.data.addItem(
		data,
		'designernews.png',
		'https://www.designernews.co/',
		'Designer News',
		'A community of people in design and tech, to discuss and share interesting things in the industry.'
	);
	APP.model.add(data);
})();
