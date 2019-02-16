
/* global APP */

APP.loader = (function() {
	'use strict';

	for (var i = 0; i < APP.db.length; i++) {
		var group = APP.db[i];
		// console.log('group ', group);

		var data = APP.data.addData(group.icon, group.title, group.link);

		var items = group.items;
		for (var j=0; j < items.length; j++) {
			var item = items[j];

			APP.data.addItem(
				data,
				item.image,
				item.url,
				item.header,
				item.text
			);
			APP.model.add(data);
		}
	}
})();
