/* global APP */

APP.model = (function() {
	'use strict';

	var storage = {};
	var search = {};

	var searchString = function(find, target) {
		return target.toLowerCase().indexOf(find) > -1;
	};

	return {
		add: function(data) {
			storage[data.title] = data;
		},
		getStorage: function() {
			return storage;
		},
		getSearch: function() {
			return search;
		},

		createSearchData: function(query) {
			search = {};
			Object.keys(storage).forEach(function(key) {
				// console.log("key "+key);
				var group = JSON.parse(JSON.stringify(storage[key])); // make a copy

				if (query === '' || searchString(query, key)) {
					search[key] = group;
				} else {
					group.tmp = group.items;
					group.items = [];
					group.tmp.forEach(function(item) {
						if (searchString(query, item.header) || searchString(query, item.text)
							|| searchString(query, item.url)) {
							group.items.push(item);
						}
					});
					// console.log("after searching all items in the group");
					if (group.items.length > 0) {
						group.tmp = [];
						search[key] = group;
					}
				}
			});
		}
	};
})();
