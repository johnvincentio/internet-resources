/* global APP */

APP.data = (function() {
	'use strict';

	return {
		addData: function(icon, title, link) {
			return {
				icon: icon,
				title: title,
				link: link,
				items: []
			};
		},
		addItem: function(data, image, url, header, text) {
			data.items.push({
				image: './resources/images/logos/' + image,
				url: url,
				header: header,
				text: text
			});
		}
	};
})();
