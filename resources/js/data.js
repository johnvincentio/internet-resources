/* global APP */

APP.data = (function() {
	'use strict';

	return {
		addData: function(icon, text) {
			return {
				icon: icon,
				text: text,
				items: []
			};
		},
		addItem: function(data, image, h3_href, h3_text, p_text) {
			data.items.push({
				image: './resources/images/logos/' + image,
				h3_href: h3_href,
				h3_text: h3_text,
				p_text: p_text
			});
		}
	};
})();
