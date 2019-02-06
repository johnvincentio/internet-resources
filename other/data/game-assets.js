/* global APP */

(function() {
	'use strict';

	var data = APP.data.addData('ion-ios-game-controller-b', 'Game Assets', 'game-assets');

	APP.data.addItem(data, 'itch-io.ico', 'https://itch.io/game-assets', 'Game Assets', 'Huge Collection of Game Assets');
	APP.model.add(data);

	APP.data.addItem(
		data,
		'github.png',
		'http://www.superflashbros.net/as3sfxr/',
		'Sounds',
		'Create your own customized sounds'
	);
	APP.model.add(data);

})();




