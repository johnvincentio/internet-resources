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
			var myImage = image ? './resources/images/logos/' + image : './resources/images/default-logo.svg';
			var isSvg = myImage.toLowerCase().endsWith('.svg');
			data.items.push({
				image: myImage,
				svg: isSvg,
				url: url,
				header: header,
				text: text
			});
		}
	};
})();
