/* global APP */

APP.views = (function() {
	'use strict';

	return {
		renderNavItems: function(data, element) {
			var template = '';
			var that = this;
			Object.keys(data).forEach(function(key, idx) {
				template += that.renderNavItem(idx, data[key]);
			});
			// template += '</ul>';
			element.html(template);
		},
		renderNavItem: function(idx, data) {
			return '<li><a data-item-id="{{1}}" class="js--scroll" href="#">{{2}}</a></li>'
				.replace('{{1}}', idx)
				.replace('{{2}}', data.title);
		},
		renderGroups: function(data, element) {
			var template = '';
			var that = this;
			// console.log(Object.keys(data));
			Object.keys(data).forEach(function(key, idx) {
				template += that.renderGroup(idx, data[key]);
			});
			element.html(template);
		},
		renderGroup: function(idx, data) {
			var template = '\
				<section class="group js--group-{{1}}">\
					<div>\
						<header>\
						<a name="{{4}}"></a>\
							<i class="group_heading-icon {{2}}"></i>\
							<h2 class="group_heading">\
								{{3}}\
							</h2>\
					</header>'
				.replace('{{1}}', idx)
				.replace('{{2}}', data.icon)
				.replace('{{3}}', data.title)
				.replace('{{4}}', data.link);
			template += this.renderItems(data.items);
			template += '</div></section>';
			return template;
		},
		renderItems: function(items) {
			var template = '';
			var that = this;
			items.forEach(function(item, idx) {
				if (idx === 0) {
					template += '<article><div class="row clearfix">';
				} else if (idx % 3 === 0) {
					template += '</div></article><article><div class="row clearfix">';
				}
				template += that.renderItem(item);
			});
			template += '</div></article>';
			template += '<div class="js--up-arrow up-arrow"><i class="up-arrow-icon ion-ios-arrow-up"></i></div>';

			return template;
		},
		renderItem: function(item) {
			var template = item.svg ? 
				'<div class="col-4 resource">\
					<object class="resource_logo_svg" height="40px" data="{{1}}" type="image/svg+xml"></object>\
					<h3 class="resource_heading"><a target="_blank" class="resource_link" href="{{2}}">{{3}}</a></h3>\
					<p class="resource_text">{{4}}</p>\
				</div>'
				:
				'<div class="col-4 resource">\
					<img class="resource_logo" src="{{1}}">\
					<h3 class="resource_heading"><a target="_blank" class="resource_link" href="{{2}}">{{3}}</a></h3>\
					<p class="resource_text">{{4}}</p>\
				</div>'

			return template
				.replace('{{1}}', item.image)
				.replace('{{2}}', item.url)
				.replace('{{3}}', item.header)
				.replace('{{4}}', item.text);
		}
	};
})();
