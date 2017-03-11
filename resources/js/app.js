
/* global APP */

$(function() {
    'use strict';

    var $DOM = {
        main : $('main'),
        groups : $('#js--groups'),
        main_nav : $('.js--main-nav'),
        search_btn : $('.js--search-btn'),
        search_title : $('.js--search-title'),
        search_field : $('.js--search-field')
    };

/* ----------------------------------- */
/* Custom events */
/* ----------------------------------- */

    $DOM.main.on('init', function() {
        console.log("$main.on('init')");
        APP.views.renderGroups(APP.model.getStorage(), $DOM.groups);
        APP.views.renderNavItems(APP.model.getStorage(), $DOM.main_nav);
    });

/* ----------------------------------- */
/* Search event */
/* ----------------------------------- */

    $DOM.search_btn.on('click', function() {
        var query = $DOM.search_field.val().trim().toLowerCase();
//        console.log('query '+query);
        APP.model.createSearchData(query);
        APP.views.renderGroups(APP.model.getSearch(), $DOM.groups);
        APP.views.renderNavItems(APP.model.getSearch(), $DOM.main_nav);

        $DOM.search_title .text("Select");      // reset dropdown name.
    });

/*
* User presses Enter while in the search text box
*/
    $DOM.search_field.keypress(function(event) {
//        console.log(event);
        if (event.keyCode === 13 || event.which === 13) {
            $DOM.search_btn.click();
        }
    });

/*
* Scroll on click nav-item to the correct section
*/
    $DOM.main_nav.on('click', '.js--scroll', function() {
        var id = parseInt($(this).attr('data-item-id'));
//        console.log("id "+id);
        $('html, body').animate({scrollTop: $('.js--group-'+id).offset().top}, 1000);
    });

/*
* Scroll on click nav-item to the correct section
*/
    $DOM.main.on('click', '.js--up-arrow', function() {
        $('html, body').animate({scrollTop: $('.js--scroll-top').offset().top}, 1000);
    });

/* ----------------------------------- */
/* Entry point                         */
/* ----------------------------------- */

    $DOM.main.trigger('init');

});
