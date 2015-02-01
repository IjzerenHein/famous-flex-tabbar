/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2015
	 */

	/*global define, moment, console*/
	/*eslint no-use-before-define:0, no-console:0*/

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	    //<webpack>
	    __webpack_require__(2);
	    __webpack_require__(15);
	    __webpack_require__(11);
	    __webpack_require__(5);
	    __webpack_require__(3);
	    __webpack_require__(7);
	    //</webpack>

	    // Fast-click
	    var FastClick = __webpack_require__(14);
	    FastClick.attach(document.body);

	    // import dependencies
	    var Engine = __webpack_require__(17);
	    var Surface = __webpack_require__(18);
	    var Transform = __webpack_require__(19);
	    var Easing = __webpack_require__(21);
	    var StateModifier = __webpack_require__(22);
	    var RenderNode = __webpack_require__(20);
	    var LayoutController = __webpack_require__(9);
	    var FlexScrollView = __webpack_require__(10);
	    var TabBar = __webpack_require__(13);

	    // create the main context
	    var mainContext = Engine.createContext();

	    // create main scrollview
	    var scrollView = new FlexScrollView({
	        mouseMove: true,
	        useContainer: true,
	        container: {},
	        layoutAll: true,
	        layoutOptions: {
	            margins: [10, 20],
	            itemSize: true
	        }
	    });
	    mainContext.add(scrollView);

	    ///////////////////////////////////////////////////////////////////
	    //
	    // Basic example
	    //
	    ///////////////////////////////////////////////////////////////////
	    var tabBar = new TabBar({
	        classes: ['white'],
	        createRenderables: {
	            background: true,
	            selectedItemOverlay: true
	        }
	    });
	    tabBar.setItems([
	        'one',
	        'two',
	        'lorum ipsum'
	    ]);
	    _addTabBar(tabBar, '<b>Equal width</b> (itemSize: undefined)');

	    ///////////////////////////////////////////////////////////////////
	    //
	    // itemSize: 80
	    //
	    ///////////////////////////////////////////////////////////////////
	    tabBar = new TabBar({
	        tabBarLayout: {
	            itemSize: 100
	        },
	        classes: ['white'],
	        createRenderables: {
	            background: true,
	            selectedItemOverlay: true
	        }
	    });
	    tabBar.setItems([
	        'one',
	        'two',
	        'lorum ipsum'
	    ]);
	    _addTabBar(tabBar, '<b>Fixed width</b> (itemSize: 80)');

	    ///////////////////////////////////////////////////////////////////
	    //
	    // itemSize: true
	    //
	    ///////////////////////////////////////////////////////////////////
	    tabBar = new TabBar({
	        tabBarLayout: {
	            itemSize: true,
	            margins: [0, 10],
	            spacing: 10
	        },
	        classes: ['black'],
	        createRenderables: {
	            background: true,
	            selectedItemOverlay: true
	        }
	    });
	    tabBar.setItems([
	        'one',
	        'two',
	        'lorum ipsum'
	    ]);
	    _addTabBar(tabBar, '<b>True-size width</b> (itemSize: true)');

	    ///////////////////////////////////////////////////////////////////
	    //
	    // itemSize: true, size: [true, undefined]
	    //
	    ///////////////////////////////////////////////////////////////////
	    tabBar = new TabBar({
	        layoutController: {
	            size: [true, undefined]
	        },
	        tabBarLayout: {
	            itemSize: true,
	            margins: [0, 10],
	            spacing: 10
	        },
	        classes: ['black'],
	        createRenderables: {
	            background: true,
	            selectedItemOverlay: true
	        }
	    });
	    tabBar.setItems([
	        'one',
	        'two',
	        'lorum ipsum'
	    ]);
	    _addTabBar(tabBar, '<b>Calculate width based on items</b> (size: [true, undefined], itemSize: true)');

	    ///////////////////////////////////////////////////////////////////
	    //
	    // slow motion
	    //
	    ///////////////////////////////////////////////////////////////////
	    tabBar = new TabBar({
	        layoutController: {
	            nodeSpring: {
	                dampingRatio: 0.8,
	                period: 1000
	            }
	        },
	        classes: ['black'],
	        createRenderables: {
	            background: true,
	            selectedItemOverlay: true
	        }
	    });
	    tabBar.setItems([
	        'one',
	        'two',
	        'lorum ipsum'
	    ]);
	    _addTabBar(tabBar, '<b>Sloooow motion</b>, nodeSpring: {dampingRatio: 0.8, period: 1000}');

	    ///////////////////////////////////////////////////////////////////
	    //
	    // bouncy
	    //
	    ///////////////////////////////////////////////////////////////////
	    tabBar = new TabBar({
	        layoutController: {
	            nodeSpring: {
	                dampingRatio: 0.4,
	                period: 400
	            }
	        },
	        classes: ['blue'],
	        createRenderables: {
	            background: true,
	            selectedItemOverlay: true
	        }
	    });
	    tabBar.setItems([
	        'one',
	        'two',
	        'lorum ipsum'
	    ]);
	    _addTabBar(tabBar, '<b>Bouncy</b>, nodeSpring: {dampingRatio: 0.4, period: 400}');

	    ///////////////////////////////////////////////////////////////////
	    //
	    // images
	    //
	    ///////////////////////////////////////////////////////////////////
	    tabBar = new TabBar({
	        classes: ['orange'],
	        createRenderables: {
	            background: true
	        }
	    });
	    tabBar.setItems([
	        '<div class="icon ion-flag"></div> ',
	        '<div class="icon ion-map"></div>',
	        '<div class="icon ion-gear-a"></div>',
	        '<div class="icon ion-star"></div>',
	        '<div class="icon ion-refresh"></div>'
	    ]);
	    _addTabBar(tabBar, '<b>Images</b> (&lt;div class="icon ion-flag"&gt;&lt;/div&gt;)');

	    ///////////////////////////////////////////////////////////////////
	    //
	    // images + text
	    //
	    ///////////////////////////////////////////////////////////////////
	    tabBar = new TabBar({
	        classes: ['images', 'small', 'orange'],
	        createRenderables: {
	            background: true
	        }
	    });
	    tabBar.setItems([
	        '<div class="icon ion-flag"></div>Flag',
	        '<div class="icon ion-map"></div>Map',
	        '<div class="icon ion-gear-a"></div>Settings',
	        '<div class="icon ion-star"></div>Favorites',
	        '<div class="icon ion-refresh"></div>Refresh'
	    ]);
	    _addTabBar(tabBar, '<b>Image + Text</b> (&lt;div class="icon ion-flag"&gt;&lt;/div&gt;Flag)', 110);

	    ///////////////////////////////////////////////////////////////////
	    //
	    // spacers
	    //
	    ///////////////////////////////////////////////////////////////////
	    tabBar = new TabBar({
	        classes: ['black'],
	        tabBarLayout: {
	            spacing: 1
	        },
	        createRenderables: {
	            background: true,
	            spacer: true,
	            selectedItemOverlay: true
	        }
	    });
	    tabBar.setItems([
	        'one',
	        'two',
	        'lorum ipsum'
	    ]);
	    _addTabBar(tabBar, '<b>Spacers</b>, renderables: {spacer: true}');

	    ///////////////////////////////////////////////////////////////////
	    //
	    // custom renderables
	    //
	    ///////////////////////////////////////////////////////////////////
	    tabBar = new TabBar({
	        classes: ['images', 'small', 'white'],
	        createRenderables: {
	            background: function() {
	                return new Surface({
	                    properties: {
	                        backgroundImage: 'url(' + __webpack_require__(8) + ')'
	                    }
	                });
	            },
	            selectedItemOverlay: function() {
	                return new Surface({
	                    properties: {
	                        backgroundColor: 'rgba(255, 255, 255, 0.3)'
	                    }
	                });
	            },
	            item: function(id, data) {
	                return new Surface({
	                    classes: ['ff-widget', 'ff-tabbar', 'images', 'item', 'small'],
	                    content: '<div><div class="icon ion-' + data.icon + '"></div>' + data.text + '</div>',
	                    properties: {
	                        color: 'white'
	                    }
	                });
	            }
	        }
	    });
	    tabBar.setItems([
	        {icon: 'flag', text: 'Flag'},
	        {icon: 'map', text: 'Map'},
	        {icon: 'gear-a', text: 'Settings'},
	        {icon: 'star', text: 'Favorites'},
	        {icon: 'refresh', text: 'Refresh'}
	    ]);
	    _addTabBar(tabBar, '<b>Custom renderables</b> (see the code)', 110);

	    ///////////////////////////////////////////////////////////////////
	    //
	    // bouncy custom renderables
	    //
	    ///////////////////////////////////////////////////////////////////
	    var bouncyCustomRenderables = [];
	    function _createBouncyCustomRenderable(id, data) {
	        var mod = new StateModifier();
	        var node = new RenderNode(mod);
	        var surface = new Surface({
	            classes: ['ff-widget', 'ff-tabbar', 'images', 'item', 'small', 'orange'],
	            content: '<div><div class="icon ion-' + data.icon + '"></div>' + data.text + '</div>'
	        });
	        if (bouncyCustomRenderables.length === 0) {
	            surface.addClass('selected');
	        }
	        // since the render-node that is added to the TabBar cannot handle events,
	        // install a handler which switches selection on the surface.
	        surface.on('click', this.setSelectedItemIndex.bind(this, bouncyCustomRenderables.length));
	        node.add(surface);
	        bouncyCustomRenderables.push({
	            mod: mod,
	            surface: surface,
	            node: node
	        });
	        return node;
	    }
	    tabBar = new TabBar({
	        classes: ['images', 'small', 'orange'],
	        createRenderables: {
	            background: true,
	            item: _createBouncyCustomRenderable
	        }
	    });
	    tabBar.setItems([
	        {icon: 'flag', text: 'Flag'},
	        {icon: 'map', text: 'Map'},
	        {icon: 'gear-a"', text: 'Settings'},
	        {icon: 'star', text: 'Favorites'},
	        {icon: 'refresh', text: 'Refresh'}
	    ]);
	    tabBar.on('tabchange', function(event) {

	        // On tab-change, toggle the selection class on the old and new surface
	        bouncyCustomRenderables[event.oldIndex].surface.removeClass('selected');
	        bouncyCustomRenderables[event.index].surface.addClass('selected');

	        // Bounce up when an item is selected
	        bouncyCustomRenderables[event.index].mod.halt();
	        bouncyCustomRenderables[event.index].mod.setTransform(Transform.translate(0, 60, 0), {duration: 0});
	        bouncyCustomRenderables[event.index].mod.setTransform(Transform.rotate(0, 0, 0), {duration: 140, curve: Easing.outBack});
	    });
	    _addTabBar(tabBar, '<b>Bouncy custom renderables</b> (also see the code)', 110);

	    //
	    // Adds a tab-bar to the scrollview
	    //
	    function _addTabBar(tabBar2, title, height) {
	        scrollView.push(new LayoutController({
	            size: [undefined, height || 100],
	            layout: {dock: [
	                ['top', 'header', 30],
	                ['bottom', 'footer', 20],
	                ['left', 'content']
	            ]},
	            alwaysLayout: true,
	            dataSource: {
	                header: new Surface({
	                    classes: ['header'],
	                    content: title
	                }),
	                footer: new Surface({
	                    classes: ['footer']
	                }),
	                content: tabBar2
	            }
	        }));
	        tabBar2.on('tabchange', function(event) {
	            console.log('tabchange: ' + event.index + ' (oldIndex: ' + event.oldIndex + ')');
	        });
	    }
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	var dispose = __webpack_require__(23)
		// The css code:
		(__webpack_require__(4));
	// Hot Module Replacement
	if(false) {
		module.hot.accept();
		module.hot.dispose(dispose);
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
		"body, div {\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Roboto\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n\n    /* prevent text selection */\n    -moz-user-select: -moz-none;\n   \t-khtml-user-select: none;\n   \t-webkit-user-select: none;\n   \t-ms-user-select: none;\n   \tuser-select: none;\n}\n\n.famous-root {\n  -background-color: #ECECEC;\n  background-color: white;\n}\n\n.header {\n  line-height: 30px;\n  font-size: 14px;\n  text-align: left;\n  color: #777777;\n  color: #AAAAAA;\n  padding-left: 10px;\n  overflow: hidden;\n}\n\n.footer {\n  -border-bottom: 1px solid #DDDDDD;\n}\n\n.ff-tabbar.item.small {\n  font-size: 12px;\n}\n.ff-tabbar.item .icon {\n  font-size: 24px;\n}\n\n\n/* tabbar white */\n.ff-tabbar.background.white {\n  background-color: #ECECEC;\n}\n.ff-tabbar.item.white {\n  color: #333333;\n}\n.ff-tabbar.selectedItemOverlay.white {\n  border-bottom: 4px solid #1185c3;\n}\n\n\n/* tabbar black */\n.ff-tabbar.background.black {\n  background-color: #101010;\n}\n.ff-tabbar.item.black {\n  color: #f7f3f7;\n}\n.ff-tabbar.selectedItemOverlay.black {\n  border-bottom: 6px solid #30b6e7;\n}\n.ff-tabbar.spacer.black:after {\n  content: \"\";\n  background-color: #333333;\n  width: 100%;\n  top: 10px;\n  bottom: 10px;\n  position: absolute;\n}\n\n/* tabbar blue */\n.ff-tabbar.background.blue {\n  background-color: #f5f5f5;\n}\n.ff-tabbar.item.blue {\n  color: #818181;\n}\n.ff-tabbar.item.blue.selected {\n  color: #1185c3; \n}\n.ff-tabbar.selectedItemOverlay.blue {\n  border-bottom: 6px solid #1185c3;\n}\n\n\n/* tabbar orange */\n.ff-tabbar.background.orange {\n  background-color: #f5f5f5;\n}\n.ff-tabbar.item.orange {\n  color: #818181;\n}\n.ff-tabbar.item.orange.selected {\n  color: #f5f5f5;\n  background-color: #E14610;\n}\n.ff-tabbar.selectedItemOverlay.orange {\n  border-bottom: none;\n}\n";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	var dispose = __webpack_require__(23)
		// The css code:
		(__webpack_require__(6));
	// Hot Module Replacement
	if(false) {
		module.hot.accept();
		module.hot.dispose(dispose);
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
		"@charset \"UTF-8\";/*!\n  Ionicons, v2.0.0\n  Created by Ben Sperry for the Ionic Framework, http://ionicons.com/\n  https://twitter.com/benjsperry  https://twitter.com/ionicframework\n  MIT License: https://github.com/driftyco/ionicons\n\n  Android-style icons originally built by Google’s\n  Material Design Icons: https://github.com/google/material-design-icons\n  used under CC BY http://creativecommons.org/licenses/by/4.0/\n  Modified icons to fit ionicon’s grid from original.\n*/@font-face{font-family:\"Ionicons\";src:url("+__webpack_require__(43)+"?v=2.0.0);src:url("+__webpack_require__(43)+"?v=2.0.0#iefix) format(\"embedded-opentype\"),url("+__webpack_require__(44)+"?v=2.0.0) format(\"truetype\"),url("+__webpack_require__(45)+"?v=2.0.0) format(\"woff\"),url("+__webpack_require__(46)+"?v=2.0.0#Ionicons) format(\"svg\");font-weight:normal;font-style:normal}.ion,.ionicons,.ion-alert:before,.ion-alert-circled:before,.ion-android-add:before,.ion-android-add-circle:before,.ion-android-alarm-clock:before,.ion-android-alert:before,.ion-android-apps:before,.ion-android-archive:before,.ion-android-arrow-back:before,.ion-android-arrow-down:before,.ion-android-arrow-dropdown:before,.ion-android-arrow-dropdown-circle:before,.ion-android-arrow-dropleft:before,.ion-android-arrow-dropleft-circle:before,.ion-android-arrow-dropright:before,.ion-android-arrow-dropright-circle:before,.ion-android-arrow-dropup:before,.ion-android-arrow-dropup-circle:before,.ion-android-arrow-forward:before,.ion-android-arrow-up:before,.ion-android-attach:before,.ion-android-bar:before,.ion-android-bicycle:before,.ion-android-boat:before,.ion-android-bookmark:before,.ion-android-bulb:before,.ion-android-bus:before,.ion-android-calendar:before,.ion-android-call:before,.ion-android-camera:before,.ion-android-cancel:before,.ion-android-car:before,.ion-android-cart:before,.ion-android-chat:before,.ion-android-checkbox:before,.ion-android-checkbox-blank:before,.ion-android-checkbox-outline:before,.ion-android-checkbox-outline-blank:before,.ion-android-checkmark-circle:before,.ion-android-clipboard:before,.ion-android-close:before,.ion-android-cloud:before,.ion-android-cloud-circle:before,.ion-android-cloud-done:before,.ion-android-cloud-outline:before,.ion-android-color-palette:before,.ion-android-compass:before,.ion-android-contact:before,.ion-android-contacts:before,.ion-android-contract:before,.ion-android-create:before,.ion-android-delete:before,.ion-android-desktop:before,.ion-android-document:before,.ion-android-done:before,.ion-android-done-all:before,.ion-android-download:before,.ion-android-drafts:before,.ion-android-exit:before,.ion-android-expand:before,.ion-android-favorite:before,.ion-android-favorite-outline:before,.ion-android-film:before,.ion-android-folder:before,.ion-android-folder-open:before,.ion-android-funnel:before,.ion-android-globe:before,.ion-android-hand:before,.ion-android-hangout:before,.ion-android-happy:before,.ion-android-home:before,.ion-android-image:before,.ion-android-laptop:before,.ion-android-list:before,.ion-android-locate:before,.ion-android-lock:before,.ion-android-mail:before,.ion-android-map:before,.ion-android-menu:before,.ion-android-microphone:before,.ion-android-microphone-off:before,.ion-android-more-horizontal:before,.ion-android-more-vertical:before,.ion-android-navigate:before,.ion-android-notifications:before,.ion-android-notifications-none:before,.ion-android-notifications-off:before,.ion-android-open:before,.ion-android-options:before,.ion-android-people:before,.ion-android-person:before,.ion-android-person-add:before,.ion-android-phone-landscape:before,.ion-android-phone-portrait:before,.ion-android-pin:before,.ion-android-plane:before,.ion-android-playstore:before,.ion-android-print:before,.ion-android-radio-button-off:before,.ion-android-radio-button-on:before,.ion-android-refresh:before,.ion-android-remove:before,.ion-android-remove-circle:before,.ion-android-restaurant:before,.ion-android-sad:before,.ion-android-search:before,.ion-android-send:before,.ion-android-settings:before,.ion-android-share:before,.ion-android-share-alt:before,.ion-android-star:before,.ion-android-star-half:before,.ion-android-star-outline:before,.ion-android-stopwatch:before,.ion-android-subway:before,.ion-android-sunny:before,.ion-android-sync:before,.ion-android-textsms:before,.ion-android-time:before,.ion-android-train:before,.ion-android-unlock:before,.ion-android-upload:before,.ion-android-volume-down:before,.ion-android-volume-mute:before,.ion-android-volume-off:before,.ion-android-volume-up:before,.ion-android-walk:before,.ion-android-warning:before,.ion-android-watch:before,.ion-android-wifi:before,.ion-aperture:before,.ion-archive:before,.ion-arrow-down-a:before,.ion-arrow-down-b:before,.ion-arrow-down-c:before,.ion-arrow-expand:before,.ion-arrow-graph-down-left:before,.ion-arrow-graph-down-right:before,.ion-arrow-graph-up-left:before,.ion-arrow-graph-up-right:before,.ion-arrow-left-a:before,.ion-arrow-left-b:before,.ion-arrow-left-c:before,.ion-arrow-move:before,.ion-arrow-resize:before,.ion-arrow-return-left:before,.ion-arrow-return-right:before,.ion-arrow-right-a:before,.ion-arrow-right-b:before,.ion-arrow-right-c:before,.ion-arrow-shrink:before,.ion-arrow-swap:before,.ion-arrow-up-a:before,.ion-arrow-up-b:before,.ion-arrow-up-c:before,.ion-asterisk:before,.ion-at:before,.ion-backspace:before,.ion-backspace-outline:before,.ion-bag:before,.ion-battery-charging:before,.ion-battery-empty:before,.ion-battery-full:before,.ion-battery-half:before,.ion-battery-low:before,.ion-beaker:before,.ion-beer:before,.ion-bluetooth:before,.ion-bonfire:before,.ion-bookmark:before,.ion-bowtie:before,.ion-briefcase:before,.ion-bug:before,.ion-calculator:before,.ion-calendar:before,.ion-camera:before,.ion-card:before,.ion-cash:before,.ion-chatbox:before,.ion-chatbox-working:before,.ion-chatboxes:before,.ion-chatbubble:before,.ion-chatbubble-working:before,.ion-chatbubbles:before,.ion-checkmark:before,.ion-checkmark-circled:before,.ion-checkmark-round:before,.ion-chevron-down:before,.ion-chevron-left:before,.ion-chevron-right:before,.ion-chevron-up:before,.ion-clipboard:before,.ion-clock:before,.ion-close:before,.ion-close-circled:before,.ion-close-round:before,.ion-closed-captioning:before,.ion-cloud:before,.ion-code:before,.ion-code-download:before,.ion-code-working:before,.ion-coffee:before,.ion-compass:before,.ion-compose:before,.ion-connection-bars:before,.ion-contrast:before,.ion-crop:before,.ion-cube:before,.ion-disc:before,.ion-document:before,.ion-document-text:before,.ion-drag:before,.ion-earth:before,.ion-easel:before,.ion-edit:before,.ion-egg:before,.ion-eject:before,.ion-email:before,.ion-email-unread:before,.ion-erlenmeyer-flask:before,.ion-erlenmeyer-flask-bubbles:before,.ion-eye:before,.ion-eye-disabled:before,.ion-female:before,.ion-filing:before,.ion-film-marker:before,.ion-fireball:before,.ion-flag:before,.ion-flame:before,.ion-flash:before,.ion-flash-off:before,.ion-folder:before,.ion-fork:before,.ion-fork-repo:before,.ion-forward:before,.ion-funnel:before,.ion-gear-a:before,.ion-gear-b:before,.ion-grid:before,.ion-hammer:before,.ion-happy:before,.ion-happy-outline:before,.ion-headphone:before,.ion-heart:before,.ion-heart-broken:before,.ion-help:before,.ion-help-buoy:before,.ion-help-circled:before,.ion-home:before,.ion-icecream:before,.ion-image:before,.ion-images:before,.ion-information:before,.ion-information-circled:before,.ion-ionic:before,.ion-ios-alarm:before,.ion-ios-alarm-outline:before,.ion-ios-albums:before,.ion-ios-albums-outline:before,.ion-ios-americanfootball:before,.ion-ios-americanfootball-outline:before,.ion-ios-analytics:before,.ion-ios-analytics-outline:before,.ion-ios-arrow-back:before,.ion-ios-arrow-down:before,.ion-ios-arrow-forward:before,.ion-ios-arrow-left:before,.ion-ios-arrow-right:before,.ion-ios-arrow-thin-down:before,.ion-ios-arrow-thin-left:before,.ion-ios-arrow-thin-right:before,.ion-ios-arrow-thin-up:before,.ion-ios-arrow-up:before,.ion-ios-at:before,.ion-ios-at-outline:before,.ion-ios-barcode:before,.ion-ios-barcode-outline:before,.ion-ios-baseball:before,.ion-ios-baseball-outline:before,.ion-ios-basketball:before,.ion-ios-basketball-outline:before,.ion-ios-bell:before,.ion-ios-bell-outline:before,.ion-ios-body:before,.ion-ios-body-outline:before,.ion-ios-bolt:before,.ion-ios-bolt-outline:before,.ion-ios-book:before,.ion-ios-book-outline:before,.ion-ios-bookmarks:before,.ion-ios-bookmarks-outline:before,.ion-ios-box:before,.ion-ios-box-outline:before,.ion-ios-briefcase:before,.ion-ios-briefcase-outline:before,.ion-ios-browsers:before,.ion-ios-browsers-outline:before,.ion-ios-calculator:before,.ion-ios-calculator-outline:before,.ion-ios-calendar:before,.ion-ios-calendar-outline:before,.ion-ios-camera:before,.ion-ios-camera-outline:before,.ion-ios-cart:before,.ion-ios-cart-outline:before,.ion-ios-chatboxes:before,.ion-ios-chatboxes-outline:before,.ion-ios-chatbubble:before,.ion-ios-chatbubble-outline:before,.ion-ios-checkmark:before,.ion-ios-checkmark-empty:before,.ion-ios-checkmark-outline:before,.ion-ios-circle-filled:before,.ion-ios-circle-outline:before,.ion-ios-clock:before,.ion-ios-clock-outline:before,.ion-ios-close:before,.ion-ios-close-empty:before,.ion-ios-close-outline:before,.ion-ios-cloud:before,.ion-ios-cloud-download:before,.ion-ios-cloud-download-outline:before,.ion-ios-cloud-outline:before,.ion-ios-cloud-upload:before,.ion-ios-cloud-upload-outline:before,.ion-ios-cloudy:before,.ion-ios-cloudy-night:before,.ion-ios-cloudy-night-outline:before,.ion-ios-cloudy-outline:before,.ion-ios-cog:before,.ion-ios-cog-outline:before,.ion-ios-color-filter:before,.ion-ios-color-filter-outline:before,.ion-ios-color-wand:before,.ion-ios-color-wand-outline:before,.ion-ios-compose:before,.ion-ios-compose-outline:before,.ion-ios-contact:before,.ion-ios-contact-outline:before,.ion-ios-copy:before,.ion-ios-copy-outline:before,.ion-ios-crop:before,.ion-ios-crop-strong:before,.ion-ios-download:before,.ion-ios-download-outline:before,.ion-ios-drag:before,.ion-ios-email:before,.ion-ios-email-outline:before,.ion-ios-eye:before,.ion-ios-eye-outline:before,.ion-ios-fastforward:before,.ion-ios-fastforward-outline:before,.ion-ios-filing:before,.ion-ios-filing-outline:before,.ion-ios-film:before,.ion-ios-film-outline:before,.ion-ios-flag:before,.ion-ios-flag-outline:before,.ion-ios-flame:before,.ion-ios-flame-outline:before,.ion-ios-flask:before,.ion-ios-flask-outline:before,.ion-ios-flower:before,.ion-ios-flower-outline:before,.ion-ios-folder:before,.ion-ios-folder-outline:before,.ion-ios-football:before,.ion-ios-football-outline:before,.ion-ios-game-controller-a:before,.ion-ios-game-controller-a-outline:before,.ion-ios-game-controller-b:before,.ion-ios-game-controller-b-outline:before,.ion-ios-gear:before,.ion-ios-gear-outline:before,.ion-ios-glasses:before,.ion-ios-glasses-outline:before,.ion-ios-grid-view:before,.ion-ios-grid-view-outline:before,.ion-ios-heart:before,.ion-ios-heart-outline:before,.ion-ios-help:before,.ion-ios-help-empty:before,.ion-ios-help-outline:before,.ion-ios-home:before,.ion-ios-home-outline:before,.ion-ios-infinite:before,.ion-ios-infinite-outline:before,.ion-ios-information:before,.ion-ios-information-empty:before,.ion-ios-information-outline:before,.ion-ios-ionic-outline:before,.ion-ios-keypad:before,.ion-ios-keypad-outline:before,.ion-ios-lightbulb:before,.ion-ios-lightbulb-outline:before,.ion-ios-list:before,.ion-ios-list-outline:before,.ion-ios-location:before,.ion-ios-location-outline:before,.ion-ios-locked:before,.ion-ios-locked-outline:before,.ion-ios-loop:before,.ion-ios-loop-strong:before,.ion-ios-medical:before,.ion-ios-medical-outline:before,.ion-ios-medkit:before,.ion-ios-medkit-outline:before,.ion-ios-mic:before,.ion-ios-mic-off:before,.ion-ios-mic-outline:before,.ion-ios-minus:before,.ion-ios-minus-empty:before,.ion-ios-minus-outline:before,.ion-ios-monitor:before,.ion-ios-monitor-outline:before,.ion-ios-moon:before,.ion-ios-moon-outline:before,.ion-ios-more:before,.ion-ios-more-outline:before,.ion-ios-musical-note:before,.ion-ios-musical-notes:before,.ion-ios-navigate:before,.ion-ios-navigate-outline:before,.ion-ios-nutrition:before,.ion-ios-nutrition-outline:before,.ion-ios-paper:before,.ion-ios-paper-outline:before,.ion-ios-paperplane:before,.ion-ios-paperplane-outline:before,.ion-ios-partlysunny:before,.ion-ios-partlysunny-outline:before,.ion-ios-pause:before,.ion-ios-pause-outline:before,.ion-ios-paw:before,.ion-ios-paw-outline:before,.ion-ios-people:before,.ion-ios-people-outline:before,.ion-ios-person:before,.ion-ios-person-outline:before,.ion-ios-personadd:before,.ion-ios-personadd-outline:before,.ion-ios-photos:before,.ion-ios-photos-outline:before,.ion-ios-pie:before,.ion-ios-pie-outline:before,.ion-ios-pint:before,.ion-ios-pint-outline:before,.ion-ios-play:before,.ion-ios-play-outline:before,.ion-ios-plus:before,.ion-ios-plus-empty:before,.ion-ios-plus-outline:before,.ion-ios-pricetag:before,.ion-ios-pricetag-outline:before,.ion-ios-pricetags:before,.ion-ios-pricetags-outline:before,.ion-ios-printer:before,.ion-ios-printer-outline:before,.ion-ios-pulse:before,.ion-ios-pulse-strong:before,.ion-ios-rainy:before,.ion-ios-rainy-outline:before,.ion-ios-recording:before,.ion-ios-recording-outline:before,.ion-ios-redo:before,.ion-ios-redo-outline:before,.ion-ios-refresh:before,.ion-ios-refresh-empty:before,.ion-ios-refresh-outline:before,.ion-ios-reload:before,.ion-ios-reverse-camera:before,.ion-ios-reverse-camera-outline:before,.ion-ios-rewind:before,.ion-ios-rewind-outline:before,.ion-ios-rose:before,.ion-ios-rose-outline:before,.ion-ios-search:before,.ion-ios-search-strong:before,.ion-ios-settings:before,.ion-ios-settings-strong:before,.ion-ios-shuffle:before,.ion-ios-shuffle-strong:before,.ion-ios-skipbackward:before,.ion-ios-skipbackward-outline:before,.ion-ios-skipforward:before,.ion-ios-skipforward-outline:before,.ion-ios-snowy:before,.ion-ios-speedometer:before,.ion-ios-speedometer-outline:before,.ion-ios-star:before,.ion-ios-star-half:before,.ion-ios-star-outline:before,.ion-ios-stopwatch:before,.ion-ios-stopwatch-outline:before,.ion-ios-sunny:before,.ion-ios-sunny-outline:before,.ion-ios-telephone:before,.ion-ios-telephone-outline:before,.ion-ios-tennisball:before,.ion-ios-tennisball-outline:before,.ion-ios-thunderstorm:before,.ion-ios-thunderstorm-outline:before,.ion-ios-time:before,.ion-ios-time-outline:before,.ion-ios-timer:before,.ion-ios-timer-outline:before,.ion-ios-toggle:before,.ion-ios-toggle-outline:before,.ion-ios-trash:before,.ion-ios-trash-outline:before,.ion-ios-undo:before,.ion-ios-undo-outline:before,.ion-ios-unlocked:before,.ion-ios-unlocked-outline:before,.ion-ios-upload:before,.ion-ios-upload-outline:before,.ion-ios-videocam:before,.ion-ios-videocam-outline:before,.ion-ios-volume-high:before,.ion-ios-volume-low:before,.ion-ios-wineglass:before,.ion-ios-wineglass-outline:before,.ion-ios-world:before,.ion-ios-world-outline:before,.ion-ipad:before,.ion-iphone:before,.ion-ipod:before,.ion-jet:before,.ion-key:before,.ion-knife:before,.ion-laptop:before,.ion-leaf:before,.ion-levels:before,.ion-lightbulb:before,.ion-link:before,.ion-load-a:before,.ion-load-b:before,.ion-load-c:before,.ion-load-d:before,.ion-location:before,.ion-lock-combination:before,.ion-locked:before,.ion-log-in:before,.ion-log-out:before,.ion-loop:before,.ion-magnet:before,.ion-male:before,.ion-man:before,.ion-map:before,.ion-medkit:before,.ion-merge:before,.ion-mic-a:before,.ion-mic-b:before,.ion-mic-c:before,.ion-minus:before,.ion-minus-circled:before,.ion-minus-round:before,.ion-model-s:before,.ion-monitor:before,.ion-more:before,.ion-mouse:before,.ion-music-note:before,.ion-navicon:before,.ion-navicon-round:before,.ion-navigate:before,.ion-network:before,.ion-no-smoking:before,.ion-nuclear:before,.ion-outlet:before,.ion-paintbrush:before,.ion-paintbucket:before,.ion-paper-airplane:before,.ion-paperclip:before,.ion-pause:before,.ion-person:before,.ion-person-add:before,.ion-person-stalker:before,.ion-pie-graph:before,.ion-pin:before,.ion-pinpoint:before,.ion-pizza:before,.ion-plane:before,.ion-planet:before,.ion-play:before,.ion-playstation:before,.ion-plus:before,.ion-plus-circled:before,.ion-plus-round:before,.ion-podium:before,.ion-pound:before,.ion-power:before,.ion-pricetag:before,.ion-pricetags:before,.ion-printer:before,.ion-pull-request:before,.ion-qr-scanner:before,.ion-quote:before,.ion-radio-waves:before,.ion-record:before,.ion-refresh:before,.ion-reply:before,.ion-reply-all:before,.ion-ribbon-a:before,.ion-ribbon-b:before,.ion-sad:before,.ion-sad-outline:before,.ion-scissors:before,.ion-search:before,.ion-settings:before,.ion-share:before,.ion-shuffle:before,.ion-skip-backward:before,.ion-skip-forward:before,.ion-social-android:before,.ion-social-android-outline:before,.ion-social-angular:before,.ion-social-angular-outline:before,.ion-social-apple:before,.ion-social-apple-outline:before,.ion-social-bitcoin:before,.ion-social-bitcoin-outline:before,.ion-social-buffer:before,.ion-social-buffer-outline:before,.ion-social-chrome:before,.ion-social-chrome-outline:before,.ion-social-codepen:before,.ion-social-codepen-outline:before,.ion-social-css3:before,.ion-social-css3-outline:before,.ion-social-designernews:before,.ion-social-designernews-outline:before,.ion-social-dribbble:before,.ion-social-dribbble-outline:before,.ion-social-dropbox:before,.ion-social-dropbox-outline:before,.ion-social-euro:before,.ion-social-euro-outline:before,.ion-social-facebook:before,.ion-social-facebook-outline:before,.ion-social-foursquare:before,.ion-social-foursquare-outline:before,.ion-social-freebsd-devil:before,.ion-social-github:before,.ion-social-github-outline:before,.ion-social-google:before,.ion-social-google-outline:before,.ion-social-googleplus:before,.ion-social-googleplus-outline:before,.ion-social-hackernews:before,.ion-social-hackernews-outline:before,.ion-social-html5:before,.ion-social-html5-outline:before,.ion-social-instagram:before,.ion-social-instagram-outline:before,.ion-social-javascript:before,.ion-social-javascript-outline:before,.ion-social-linkedin:before,.ion-social-linkedin-outline:before,.ion-social-markdown:before,.ion-social-nodejs:before,.ion-social-octocat:before,.ion-social-pinterest:before,.ion-social-pinterest-outline:before,.ion-social-python:before,.ion-social-reddit:before,.ion-social-reddit-outline:before,.ion-social-rss:before,.ion-social-rss-outline:before,.ion-social-sass:before,.ion-social-skype:before,.ion-social-skype-outline:before,.ion-social-snapchat:before,.ion-social-snapchat-outline:before,.ion-social-tumblr:before,.ion-social-tumblr-outline:before,.ion-social-tux:before,.ion-social-twitch:before,.ion-social-twitch-outline:before,.ion-social-twitter:before,.ion-social-twitter-outline:before,.ion-social-usd:before,.ion-social-usd-outline:before,.ion-social-vimeo:before,.ion-social-vimeo-outline:before,.ion-social-whatsapp:before,.ion-social-whatsapp-outline:before,.ion-social-windows:before,.ion-social-windows-outline:before,.ion-social-wordpress:before,.ion-social-wordpress-outline:before,.ion-social-yahoo:before,.ion-social-yahoo-outline:before,.ion-social-yen:before,.ion-social-yen-outline:before,.ion-social-youtube:before,.ion-social-youtube-outline:before,.ion-soup-can:before,.ion-soup-can-outline:before,.ion-speakerphone:before,.ion-speedometer:before,.ion-spoon:before,.ion-star:before,.ion-stats-bars:before,.ion-steam:before,.ion-stop:before,.ion-thermometer:before,.ion-thumbsdown:before,.ion-thumbsup:before,.ion-toggle:before,.ion-toggle-filled:before,.ion-transgender:before,.ion-trash-a:before,.ion-trash-b:before,.ion-trophy:before,.ion-tshirt:before,.ion-tshirt-outline:before,.ion-umbrella:before,.ion-university:before,.ion-unlocked:before,.ion-upload:before,.ion-usb:before,.ion-videocamera:before,.ion-volume-high:before,.ion-volume-low:before,.ion-volume-medium:before,.ion-volume-mute:before,.ion-wand:before,.ion-waterdrop:before,.ion-wifi:before,.ion-wineglass:before,.ion-woman:before,.ion-wrench:before,.ion-xbox:before{display:inline-block;font-family:\"Ionicons\";speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;text-rendering:auto;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ion-alert:before{content:\"\\f101\"}.ion-alert-circled:before{content:\"\\f100\"}.ion-android-add:before{content:\"\\f2c7\"}.ion-android-add-circle:before{content:\"\\f359\"}.ion-android-alarm-clock:before{content:\"\\f35a\"}.ion-android-alert:before{content:\"\\f35b\"}.ion-android-apps:before{content:\"\\f35c\"}.ion-android-archive:before{content:\"\\f2c9\"}.ion-android-arrow-back:before{content:\"\\f2ca\"}.ion-android-arrow-down:before{content:\"\\f35d\"}.ion-android-arrow-dropdown:before{content:\"\\f35f\"}.ion-android-arrow-dropdown-circle:before{content:\"\\f35e\"}.ion-android-arrow-dropleft:before{content:\"\\f361\"}.ion-android-arrow-dropleft-circle:before{content:\"\\f360\"}.ion-android-arrow-dropright:before{content:\"\\f363\"}.ion-android-arrow-dropright-circle:before{content:\"\\f362\"}.ion-android-arrow-dropup:before{content:\"\\f365\"}.ion-android-arrow-dropup-circle:before{content:\"\\f364\"}.ion-android-arrow-forward:before{content:\"\\f30f\"}.ion-android-arrow-up:before{content:\"\\f366\"}.ion-android-attach:before{content:\"\\f367\"}.ion-android-bar:before{content:\"\\f368\"}.ion-android-bicycle:before{content:\"\\f369\"}.ion-android-boat:before{content:\"\\f36a\"}.ion-android-bookmark:before{content:\"\\f36b\"}.ion-android-bulb:before{content:\"\\f36c\"}.ion-android-bus:before{content:\"\\f36d\"}.ion-android-calendar:before{content:\"\\f2d1\"}.ion-android-call:before{content:\"\\f2d2\"}.ion-android-camera:before{content:\"\\f2d3\"}.ion-android-cancel:before{content:\"\\f36e\"}.ion-android-car:before{content:\"\\f36f\"}.ion-android-cart:before{content:\"\\f370\"}.ion-android-chat:before{content:\"\\f2d4\"}.ion-android-checkbox:before{content:\"\\f374\"}.ion-android-checkbox-blank:before{content:\"\\f371\"}.ion-android-checkbox-outline:before{content:\"\\f373\"}.ion-android-checkbox-outline-blank:before{content:\"\\f372\"}.ion-android-checkmark-circle:before{content:\"\\f375\"}.ion-android-clipboard:before{content:\"\\f376\"}.ion-android-close:before{content:\"\\f2d7\"}.ion-android-cloud:before{content:\"\\f37a\"}.ion-android-cloud-circle:before{content:\"\\f377\"}.ion-android-cloud-done:before{content:\"\\f378\"}.ion-android-cloud-outline:before{content:\"\\f379\"}.ion-android-color-palette:before{content:\"\\f37b\"}.ion-android-compass:before{content:\"\\f37c\"}.ion-android-contact:before{content:\"\\f2d8\"}.ion-android-contacts:before{content:\"\\f2d9\"}.ion-android-contract:before{content:\"\\f37d\"}.ion-android-create:before{content:\"\\f37e\"}.ion-android-delete:before{content:\"\\f37f\"}.ion-android-desktop:before{content:\"\\f380\"}.ion-android-document:before{content:\"\\f381\"}.ion-android-done:before{content:\"\\f383\"}.ion-android-done-all:before{content:\"\\f382\"}.ion-android-download:before{content:\"\\f2dd\"}.ion-android-drafts:before{content:\"\\f384\"}.ion-android-exit:before{content:\"\\f385\"}.ion-android-expand:before{content:\"\\f386\"}.ion-android-favorite:before{content:\"\\f388\"}.ion-android-favorite-outline:before{content:\"\\f387\"}.ion-android-film:before{content:\"\\f389\"}.ion-android-folder:before{content:\"\\f2e0\"}.ion-android-folder-open:before{content:\"\\f38a\"}.ion-android-funnel:before{content:\"\\f38b\"}.ion-android-globe:before{content:\"\\f38c\"}.ion-android-hand:before{content:\"\\f2e3\"}.ion-android-hangout:before{content:\"\\f38d\"}.ion-android-happy:before{content:\"\\f38e\"}.ion-android-home:before{content:\"\\f38f\"}.ion-android-image:before{content:\"\\f2e4\"}.ion-android-laptop:before{content:\"\\f390\"}.ion-android-list:before{content:\"\\f391\"}.ion-android-locate:before{content:\"\\f2e9\"}.ion-android-lock:before{content:\"\\f392\"}.ion-android-mail:before{content:\"\\f2eb\"}.ion-android-map:before{content:\"\\f393\"}.ion-android-menu:before{content:\"\\f394\"}.ion-android-microphone:before{content:\"\\f2ec\"}.ion-android-microphone-off:before{content:\"\\f395\"}.ion-android-more-horizontal:before{content:\"\\f396\"}.ion-android-more-vertical:before{content:\"\\f397\"}.ion-android-navigate:before{content:\"\\f398\"}.ion-android-notifications:before{content:\"\\f39b\"}.ion-android-notifications-none:before{content:\"\\f399\"}.ion-android-notifications-off:before{content:\"\\f39a\"}.ion-android-open:before{content:\"\\f39c\"}.ion-android-options:before{content:\"\\f39d\"}.ion-android-people:before{content:\"\\f39e\"}.ion-android-person:before{content:\"\\f3a0\"}.ion-android-person-add:before{content:\"\\f39f\"}.ion-android-phone-landscape:before{content:\"\\f3a1\"}.ion-android-phone-portrait:before{content:\"\\f3a2\"}.ion-android-pin:before{content:\"\\f3a3\"}.ion-android-plane:before{content:\"\\f3a4\"}.ion-android-playstore:before{content:\"\\f2f0\"}.ion-android-print:before{content:\"\\f3a5\"}.ion-android-radio-button-off:before{content:\"\\f3a6\"}.ion-android-radio-button-on:before{content:\"\\f3a7\"}.ion-android-refresh:before{content:\"\\f3a8\"}.ion-android-remove:before{content:\"\\f2f4\"}.ion-android-remove-circle:before{content:\"\\f3a9\"}.ion-android-restaurant:before{content:\"\\f3aa\"}.ion-android-sad:before{content:\"\\f3ab\"}.ion-android-search:before{content:\"\\f2f5\"}.ion-android-send:before{content:\"\\f2f6\"}.ion-android-settings:before{content:\"\\f2f7\"}.ion-android-share:before{content:\"\\f2f8\"}.ion-android-share-alt:before{content:\"\\f3ac\"}.ion-android-star:before{content:\"\\f2fc\"}.ion-android-star-half:before{content:\"\\f3ad\"}.ion-android-star-outline:before{content:\"\\f3ae\"}.ion-android-stopwatch:before{content:\"\\f2fd\"}.ion-android-subway:before{content:\"\\f3af\"}.ion-android-sunny:before{content:\"\\f3b0\"}.ion-android-sync:before{content:\"\\f3b1\"}.ion-android-textsms:before{content:\"\\f3b2\"}.ion-android-time:before{content:\"\\f3b3\"}.ion-android-train:before{content:\"\\f3b4\"}.ion-android-unlock:before{content:\"\\f3b5\"}.ion-android-upload:before{content:\"\\f3b6\"}.ion-android-volume-down:before{content:\"\\f3b7\"}.ion-android-volume-mute:before{content:\"\\f3b8\"}.ion-android-volume-off:before{content:\"\\f3b9\"}.ion-android-volume-up:before{content:\"\\f3ba\"}.ion-android-walk:before{content:\"\\f3bb\"}.ion-android-warning:before{content:\"\\f3bc\"}.ion-android-watch:before{content:\"\\f3bd\"}.ion-android-wifi:before{content:\"\\f305\"}.ion-aperture:before{content:\"\\f313\"}.ion-archive:before{content:\"\\f102\"}.ion-arrow-down-a:before{content:\"\\f103\"}.ion-arrow-down-b:before{content:\"\\f104\"}.ion-arrow-down-c:before{content:\"\\f105\"}.ion-arrow-expand:before{content:\"\\f25e\"}.ion-arrow-graph-down-left:before{content:\"\\f25f\"}.ion-arrow-graph-down-right:before{content:\"\\f260\"}.ion-arrow-graph-up-left:before{content:\"\\f261\"}.ion-arrow-graph-up-right:before{content:\"\\f262\"}.ion-arrow-left-a:before{content:\"\\f106\"}.ion-arrow-left-b:before{content:\"\\f107\"}.ion-arrow-left-c:before{content:\"\\f108\"}.ion-arrow-move:before{content:\"\\f263\"}.ion-arrow-resize:before{content:\"\\f264\"}.ion-arrow-return-left:before{content:\"\\f265\"}.ion-arrow-return-right:before{content:\"\\f266\"}.ion-arrow-right-a:before{content:\"\\f109\"}.ion-arrow-right-b:before{content:\"\\f10a\"}.ion-arrow-right-c:before{content:\"\\f10b\"}.ion-arrow-shrink:before{content:\"\\f267\"}.ion-arrow-swap:before{content:\"\\f268\"}.ion-arrow-up-a:before{content:\"\\f10c\"}.ion-arrow-up-b:before{content:\"\\f10d\"}.ion-arrow-up-c:before{content:\"\\f10e\"}.ion-asterisk:before{content:\"\\f314\"}.ion-at:before{content:\"\\f10f\"}.ion-backspace:before{content:\"\\f3bf\"}.ion-backspace-outline:before{content:\"\\f3be\"}.ion-bag:before{content:\"\\f110\"}.ion-battery-charging:before{content:\"\\f111\"}.ion-battery-empty:before{content:\"\\f112\"}.ion-battery-full:before{content:\"\\f113\"}.ion-battery-half:before{content:\"\\f114\"}.ion-battery-low:before{content:\"\\f115\"}.ion-beaker:before{content:\"\\f269\"}.ion-beer:before{content:\"\\f26a\"}.ion-bluetooth:before{content:\"\\f116\"}.ion-bonfire:before{content:\"\\f315\"}.ion-bookmark:before{content:\"\\f26b\"}.ion-bowtie:before{content:\"\\f3c0\"}.ion-briefcase:before{content:\"\\f26c\"}.ion-bug:before{content:\"\\f2be\"}.ion-calculator:before{content:\"\\f26d\"}.ion-calendar:before{content:\"\\f117\"}.ion-camera:before{content:\"\\f118\"}.ion-card:before{content:\"\\f119\"}.ion-cash:before{content:\"\\f316\"}.ion-chatbox:before{content:\"\\f11b\"}.ion-chatbox-working:before{content:\"\\f11a\"}.ion-chatboxes:before{content:\"\\f11c\"}.ion-chatbubble:before{content:\"\\f11e\"}.ion-chatbubble-working:before{content:\"\\f11d\"}.ion-chatbubbles:before{content:\"\\f11f\"}.ion-checkmark:before{content:\"\\f122\"}.ion-checkmark-circled:before{content:\"\\f120\"}.ion-checkmark-round:before{content:\"\\f121\"}.ion-chevron-down:before{content:\"\\f123\"}.ion-chevron-left:before{content:\"\\f124\"}.ion-chevron-right:before{content:\"\\f125\"}.ion-chevron-up:before{content:\"\\f126\"}.ion-clipboard:before{content:\"\\f127\"}.ion-clock:before{content:\"\\f26e\"}.ion-close:before{content:\"\\f12a\"}.ion-close-circled:before{content:\"\\f128\"}.ion-close-round:before{content:\"\\f129\"}.ion-closed-captioning:before{content:\"\\f317\"}.ion-cloud:before{content:\"\\f12b\"}.ion-code:before{content:\"\\f271\"}.ion-code-download:before{content:\"\\f26f\"}.ion-code-working:before{content:\"\\f270\"}.ion-coffee:before{content:\"\\f272\"}.ion-compass:before{content:\"\\f273\"}.ion-compose:before{content:\"\\f12c\"}.ion-connection-bars:before{content:\"\\f274\"}.ion-contrast:before{content:\"\\f275\"}.ion-crop:before{content:\"\\f3c1\"}.ion-cube:before{content:\"\\f318\"}.ion-disc:before{content:\"\\f12d\"}.ion-document:before{content:\"\\f12f\"}.ion-document-text:before{content:\"\\f12e\"}.ion-drag:before{content:\"\\f130\"}.ion-earth:before{content:\"\\f276\"}.ion-easel:before{content:\"\\f3c2\"}.ion-edit:before{content:\"\\f2bf\"}.ion-egg:before{content:\"\\f277\"}.ion-eject:before{content:\"\\f131\"}.ion-email:before{content:\"\\f132\"}.ion-email-unread:before{content:\"\\f3c3\"}.ion-erlenmeyer-flask:before{content:\"\\f3c5\"}.ion-erlenmeyer-flask-bubbles:before{content:\"\\f3c4\"}.ion-eye:before{content:\"\\f133\"}.ion-eye-disabled:before{content:\"\\f306\"}.ion-female:before{content:\"\\f278\"}.ion-filing:before{content:\"\\f134\"}.ion-film-marker:before{content:\"\\f135\"}.ion-fireball:before{content:\"\\f319\"}.ion-flag:before{content:\"\\f279\"}.ion-flame:before{content:\"\\f31a\"}.ion-flash:before{content:\"\\f137\"}.ion-flash-off:before{content:\"\\f136\"}.ion-folder:before{content:\"\\f139\"}.ion-fork:before{content:\"\\f27a\"}.ion-fork-repo:before{content:\"\\f2c0\"}.ion-forward:before{content:\"\\f13a\"}.ion-funnel:before{content:\"\\f31b\"}.ion-gear-a:before{content:\"\\f13d\"}.ion-gear-b:before{content:\"\\f13e\"}.ion-grid:before{content:\"\\f13f\"}.ion-hammer:before{content:\"\\f27b\"}.ion-happy:before{content:\"\\f31c\"}.ion-happy-outline:before{content:\"\\f3c6\"}.ion-headphone:before{content:\"\\f140\"}.ion-heart:before{content:\"\\f141\"}.ion-heart-broken:before{content:\"\\f31d\"}.ion-help:before{content:\"\\f143\"}.ion-help-buoy:before{content:\"\\f27c\"}.ion-help-circled:before{content:\"\\f142\"}.ion-home:before{content:\"\\f144\"}.ion-icecream:before{content:\"\\f27d\"}.ion-image:before{content:\"\\f147\"}.ion-images:before{content:\"\\f148\"}.ion-information:before{content:\"\\f14a\"}.ion-information-circled:before{content:\"\\f149\"}.ion-ionic:before{content:\"\\f14b\"}.ion-ios-alarm:before{content:\"\\f3c8\"}.ion-ios-alarm-outline:before{content:\"\\f3c7\"}.ion-ios-albums:before{content:\"\\f3ca\"}.ion-ios-albums-outline:before{content:\"\\f3c9\"}.ion-ios-americanfootball:before{content:\"\\f3cc\"}.ion-ios-americanfootball-outline:before{content:\"\\f3cb\"}.ion-ios-analytics:before{content:\"\\f3ce\"}.ion-ios-analytics-outline:before{content:\"\\f3cd\"}.ion-ios-arrow-back:before{content:\"\\f3cf\"}.ion-ios-arrow-down:before{content:\"\\f3d0\"}.ion-ios-arrow-forward:before{content:\"\\f3d1\"}.ion-ios-arrow-left:before{content:\"\\f3d2\"}.ion-ios-arrow-right:before{content:\"\\f3d3\"}.ion-ios-arrow-thin-down:before{content:\"\\f3d4\"}.ion-ios-arrow-thin-left:before{content:\"\\f3d5\"}.ion-ios-arrow-thin-right:before{content:\"\\f3d6\"}.ion-ios-arrow-thin-up:before{content:\"\\f3d7\"}.ion-ios-arrow-up:before{content:\"\\f3d8\"}.ion-ios-at:before{content:\"\\f3da\"}.ion-ios-at-outline:before{content:\"\\f3d9\"}.ion-ios-barcode:before{content:\"\\f3dc\"}.ion-ios-barcode-outline:before{content:\"\\f3db\"}.ion-ios-baseball:before{content:\"\\f3de\"}.ion-ios-baseball-outline:before{content:\"\\f3dd\"}.ion-ios-basketball:before{content:\"\\f3e0\"}.ion-ios-basketball-outline:before{content:\"\\f3df\"}.ion-ios-bell:before{content:\"\\f3e2\"}.ion-ios-bell-outline:before{content:\"\\f3e1\"}.ion-ios-body:before{content:\"\\f3e4\"}.ion-ios-body-outline:before{content:\"\\f3e3\"}.ion-ios-bolt:before{content:\"\\f3e6\"}.ion-ios-bolt-outline:before{content:\"\\f3e5\"}.ion-ios-book:before{content:\"\\f3e8\"}.ion-ios-book-outline:before{content:\"\\f3e7\"}.ion-ios-bookmarks:before{content:\"\\f3ea\"}.ion-ios-bookmarks-outline:before{content:\"\\f3e9\"}.ion-ios-box:before{content:\"\\f3ec\"}.ion-ios-box-outline:before{content:\"\\f3eb\"}.ion-ios-briefcase:before{content:\"\\f3ee\"}.ion-ios-briefcase-outline:before{content:\"\\f3ed\"}.ion-ios-browsers:before{content:\"\\f3f0\"}.ion-ios-browsers-outline:before{content:\"\\f3ef\"}.ion-ios-calculator:before{content:\"\\f3f2\"}.ion-ios-calculator-outline:before{content:\"\\f3f1\"}.ion-ios-calendar:before{content:\"\\f3f4\"}.ion-ios-calendar-outline:before{content:\"\\f3f3\"}.ion-ios-camera:before{content:\"\\f3f6\"}.ion-ios-camera-outline:before{content:\"\\f3f5\"}.ion-ios-cart:before{content:\"\\f3f8\"}.ion-ios-cart-outline:before{content:\"\\f3f7\"}.ion-ios-chatboxes:before{content:\"\\f3fa\"}.ion-ios-chatboxes-outline:before{content:\"\\f3f9\"}.ion-ios-chatbubble:before{content:\"\\f3fc\"}.ion-ios-chatbubble-outline:before{content:\"\\f3fb\"}.ion-ios-checkmark:before{content:\"\\f3ff\"}.ion-ios-checkmark-empty:before{content:\"\\f3fd\"}.ion-ios-checkmark-outline:before{content:\"\\f3fe\"}.ion-ios-circle-filled:before{content:\"\\f400\"}.ion-ios-circle-outline:before{content:\"\\f401\"}.ion-ios-clock:before{content:\"\\f403\"}.ion-ios-clock-outline:before{content:\"\\f402\"}.ion-ios-close:before{content:\"\\f406\"}.ion-ios-close-empty:before{content:\"\\f404\"}.ion-ios-close-outline:before{content:\"\\f405\"}.ion-ios-cloud:before{content:\"\\f40c\"}.ion-ios-cloud-download:before{content:\"\\f408\"}.ion-ios-cloud-download-outline:before{content:\"\\f407\"}.ion-ios-cloud-outline:before{content:\"\\f409\"}.ion-ios-cloud-upload:before{content:\"\\f40b\"}.ion-ios-cloud-upload-outline:before{content:\"\\f40a\"}.ion-ios-cloudy:before{content:\"\\f410\"}.ion-ios-cloudy-night:before{content:\"\\f40e\"}.ion-ios-cloudy-night-outline:before{content:\"\\f40d\"}.ion-ios-cloudy-outline:before{content:\"\\f40f\"}.ion-ios-cog:before{content:\"\\f412\"}.ion-ios-cog-outline:before{content:\"\\f411\"}.ion-ios-color-filter:before{content:\"\\f414\"}.ion-ios-color-filter-outline:before{content:\"\\f413\"}.ion-ios-color-wand:before{content:\"\\f416\"}.ion-ios-color-wand-outline:before{content:\"\\f415\"}.ion-ios-compose:before{content:\"\\f418\"}.ion-ios-compose-outline:before{content:\"\\f417\"}.ion-ios-contact:before{content:\"\\f41a\"}.ion-ios-contact-outline:before{content:\"\\f419\"}.ion-ios-copy:before{content:\"\\f41c\"}.ion-ios-copy-outline:before{content:\"\\f41b\"}.ion-ios-crop:before{content:\"\\f41e\"}.ion-ios-crop-strong:before{content:\"\\f41d\"}.ion-ios-download:before{content:\"\\f420\"}.ion-ios-download-outline:before{content:\"\\f41f\"}.ion-ios-drag:before{content:\"\\f421\"}.ion-ios-email:before{content:\"\\f423\"}.ion-ios-email-outline:before{content:\"\\f422\"}.ion-ios-eye:before{content:\"\\f425\"}.ion-ios-eye-outline:before{content:\"\\f424\"}.ion-ios-fastforward:before{content:\"\\f427\"}.ion-ios-fastforward-outline:before{content:\"\\f426\"}.ion-ios-filing:before{content:\"\\f429\"}.ion-ios-filing-outline:before{content:\"\\f428\"}.ion-ios-film:before{content:\"\\f42b\"}.ion-ios-film-outline:before{content:\"\\f42a\"}.ion-ios-flag:before{content:\"\\f42d\"}.ion-ios-flag-outline:before{content:\"\\f42c\"}.ion-ios-flame:before{content:\"\\f42f\"}.ion-ios-flame-outline:before{content:\"\\f42e\"}.ion-ios-flask:before{content:\"\\f431\"}.ion-ios-flask-outline:before{content:\"\\f430\"}.ion-ios-flower:before{content:\"\\f433\"}.ion-ios-flower-outline:before{content:\"\\f432\"}.ion-ios-folder:before{content:\"\\f435\"}.ion-ios-folder-outline:before{content:\"\\f434\"}.ion-ios-football:before{content:\"\\f437\"}.ion-ios-football-outline:before{content:\"\\f436\"}.ion-ios-game-controller-a:before{content:\"\\f439\"}.ion-ios-game-controller-a-outline:before{content:\"\\f438\"}.ion-ios-game-controller-b:before{content:\"\\f43b\"}.ion-ios-game-controller-b-outline:before{content:\"\\f43a\"}.ion-ios-gear:before{content:\"\\f43d\"}.ion-ios-gear-outline:before{content:\"\\f43c\"}.ion-ios-glasses:before{content:\"\\f43f\"}.ion-ios-glasses-outline:before{content:\"\\f43e\"}.ion-ios-grid-view:before{content:\"\\f441\"}.ion-ios-grid-view-outline:before{content:\"\\f440\"}.ion-ios-heart:before{content:\"\\f443\"}.ion-ios-heart-outline:before{content:\"\\f442\"}.ion-ios-help:before{content:\"\\f446\"}.ion-ios-help-empty:before{content:\"\\f444\"}.ion-ios-help-outline:before{content:\"\\f445\"}.ion-ios-home:before{content:\"\\f448\"}.ion-ios-home-outline:before{content:\"\\f447\"}.ion-ios-infinite:before{content:\"\\f44a\"}.ion-ios-infinite-outline:before{content:\"\\f449\"}.ion-ios-information:before{content:\"\\f44d\"}.ion-ios-information-empty:before{content:\"\\f44b\"}.ion-ios-information-outline:before{content:\"\\f44c\"}.ion-ios-ionic-outline:before{content:\"\\f44e\"}.ion-ios-keypad:before{content:\"\\f450\"}.ion-ios-keypad-outline:before{content:\"\\f44f\"}.ion-ios-lightbulb:before{content:\"\\f452\"}.ion-ios-lightbulb-outline:before{content:\"\\f451\"}.ion-ios-list:before{content:\"\\f454\"}.ion-ios-list-outline:before{content:\"\\f453\"}.ion-ios-location:before{content:\"\\f456\"}.ion-ios-location-outline:before{content:\"\\f455\"}.ion-ios-locked:before{content:\"\\f458\"}.ion-ios-locked-outline:before{content:\"\\f457\"}.ion-ios-loop:before{content:\"\\f45a\"}.ion-ios-loop-strong:before{content:\"\\f459\"}.ion-ios-medical:before{content:\"\\f45c\"}.ion-ios-medical-outline:before{content:\"\\f45b\"}.ion-ios-medkit:before{content:\"\\f45e\"}.ion-ios-medkit-outline:before{content:\"\\f45d\"}.ion-ios-mic:before{content:\"\\f461\"}.ion-ios-mic-off:before{content:\"\\f45f\"}.ion-ios-mic-outline:before{content:\"\\f460\"}.ion-ios-minus:before{content:\"\\f464\"}.ion-ios-minus-empty:before{content:\"\\f462\"}.ion-ios-minus-outline:before{content:\"\\f463\"}.ion-ios-monitor:before{content:\"\\f466\"}.ion-ios-monitor-outline:before{content:\"\\f465\"}.ion-ios-moon:before{content:\"\\f468\"}.ion-ios-moon-outline:before{content:\"\\f467\"}.ion-ios-more:before{content:\"\\f46a\"}.ion-ios-more-outline:before{content:\"\\f469\"}.ion-ios-musical-note:before{content:\"\\f46b\"}.ion-ios-musical-notes:before{content:\"\\f46c\"}.ion-ios-navigate:before{content:\"\\f46e\"}.ion-ios-navigate-outline:before{content:\"\\f46d\"}.ion-ios-nutrition:before{content:\"\\f470\"}.ion-ios-nutrition-outline:before{content:\"\\f46f\"}.ion-ios-paper:before{content:\"\\f472\"}.ion-ios-paper-outline:before{content:\"\\f471\"}.ion-ios-paperplane:before{content:\"\\f474\"}.ion-ios-paperplane-outline:before{content:\"\\f473\"}.ion-ios-partlysunny:before{content:\"\\f476\"}.ion-ios-partlysunny-outline:before{content:\"\\f475\"}.ion-ios-pause:before{content:\"\\f478\"}.ion-ios-pause-outline:before{content:\"\\f477\"}.ion-ios-paw:before{content:\"\\f47a\"}.ion-ios-paw-outline:before{content:\"\\f479\"}.ion-ios-people:before{content:\"\\f47c\"}.ion-ios-people-outline:before{content:\"\\f47b\"}.ion-ios-person:before{content:\"\\f47e\"}.ion-ios-person-outline:before{content:\"\\f47d\"}.ion-ios-personadd:before{content:\"\\f480\"}.ion-ios-personadd-outline:before{content:\"\\f47f\"}.ion-ios-photos:before{content:\"\\f482\"}.ion-ios-photos-outline:before{content:\"\\f481\"}.ion-ios-pie:before{content:\"\\f484\"}.ion-ios-pie-outline:before{content:\"\\f483\"}.ion-ios-pint:before{content:\"\\f486\"}.ion-ios-pint-outline:before{content:\"\\f485\"}.ion-ios-play:before{content:\"\\f488\"}.ion-ios-play-outline:before{content:\"\\f487\"}.ion-ios-plus:before{content:\"\\f48b\"}.ion-ios-plus-empty:before{content:\"\\f489\"}.ion-ios-plus-outline:before{content:\"\\f48a\"}.ion-ios-pricetag:before{content:\"\\f48d\"}.ion-ios-pricetag-outline:before{content:\"\\f48c\"}.ion-ios-pricetags:before{content:\"\\f48f\"}.ion-ios-pricetags-outline:before{content:\"\\f48e\"}.ion-ios-printer:before{content:\"\\f491\"}.ion-ios-printer-outline:before{content:\"\\f490\"}.ion-ios-pulse:before{content:\"\\f493\"}.ion-ios-pulse-strong:before{content:\"\\f492\"}.ion-ios-rainy:before{content:\"\\f495\"}.ion-ios-rainy-outline:before{content:\"\\f494\"}.ion-ios-recording:before{content:\"\\f497\"}.ion-ios-recording-outline:before{content:\"\\f496\"}.ion-ios-redo:before{content:\"\\f499\"}.ion-ios-redo-outline:before{content:\"\\f498\"}.ion-ios-refresh:before{content:\"\\f49c\"}.ion-ios-refresh-empty:before{content:\"\\f49a\"}.ion-ios-refresh-outline:before{content:\"\\f49b\"}.ion-ios-reload:before{content:\"\\f49d\"}.ion-ios-reverse-camera:before{content:\"\\f49f\"}.ion-ios-reverse-camera-outline:before{content:\"\\f49e\"}.ion-ios-rewind:before{content:\"\\f4a1\"}.ion-ios-rewind-outline:before{content:\"\\f4a0\"}.ion-ios-rose:before{content:\"\\f4a3\"}.ion-ios-rose-outline:before{content:\"\\f4a2\"}.ion-ios-search:before{content:\"\\f4a5\"}.ion-ios-search-strong:before{content:\"\\f4a4\"}.ion-ios-settings:before{content:\"\\f4a7\"}.ion-ios-settings-strong:before{content:\"\\f4a6\"}.ion-ios-shuffle:before{content:\"\\f4a9\"}.ion-ios-shuffle-strong:before{content:\"\\f4a8\"}.ion-ios-skipbackward:before{content:\"\\f4ab\"}.ion-ios-skipbackward-outline:before{content:\"\\f4aa\"}.ion-ios-skipforward:before{content:\"\\f4ad\"}.ion-ios-skipforward-outline:before{content:\"\\f4ac\"}.ion-ios-snowy:before{content:\"\\f4ae\"}.ion-ios-speedometer:before{content:\"\\f4b0\"}.ion-ios-speedometer-outline:before{content:\"\\f4af\"}.ion-ios-star:before{content:\"\\f4b3\"}.ion-ios-star-half:before{content:\"\\f4b1\"}.ion-ios-star-outline:before{content:\"\\f4b2\"}.ion-ios-stopwatch:before{content:\"\\f4b5\"}.ion-ios-stopwatch-outline:before{content:\"\\f4b4\"}.ion-ios-sunny:before{content:\"\\f4b7\"}.ion-ios-sunny-outline:before{content:\"\\f4b6\"}.ion-ios-telephone:before{content:\"\\f4b9\"}.ion-ios-telephone-outline:before{content:\"\\f4b8\"}.ion-ios-tennisball:before{content:\"\\f4bb\"}.ion-ios-tennisball-outline:before{content:\"\\f4ba\"}.ion-ios-thunderstorm:before{content:\"\\f4bd\"}.ion-ios-thunderstorm-outline:before{content:\"\\f4bc\"}.ion-ios-time:before{content:\"\\f4bf\"}.ion-ios-time-outline:before{content:\"\\f4be\"}.ion-ios-timer:before{content:\"\\f4c1\"}.ion-ios-timer-outline:before{content:\"\\f4c0\"}.ion-ios-toggle:before{content:\"\\f4c3\"}.ion-ios-toggle-outline:before{content:\"\\f4c2\"}.ion-ios-trash:before{content:\"\\f4c5\"}.ion-ios-trash-outline:before{content:\"\\f4c4\"}.ion-ios-undo:before{content:\"\\f4c7\"}.ion-ios-undo-outline:before{content:\"\\f4c6\"}.ion-ios-unlocked:before{content:\"\\f4c9\"}.ion-ios-unlocked-outline:before{content:\"\\f4c8\"}.ion-ios-upload:before{content:\"\\f4cb\"}.ion-ios-upload-outline:before{content:\"\\f4ca\"}.ion-ios-videocam:before{content:\"\\f4cd\"}.ion-ios-videocam-outline:before{content:\"\\f4cc\"}.ion-ios-volume-high:before{content:\"\\f4ce\"}.ion-ios-volume-low:before{content:\"\\f4cf\"}.ion-ios-wineglass:before{content:\"\\f4d1\"}.ion-ios-wineglass-outline:before{content:\"\\f4d0\"}.ion-ios-world:before{content:\"\\f4d3\"}.ion-ios-world-outline:before{content:\"\\f4d2\"}.ion-ipad:before{content:\"\\f1f9\"}.ion-iphone:before{content:\"\\f1fa\"}.ion-ipod:before{content:\"\\f1fb\"}.ion-jet:before{content:\"\\f295\"}.ion-key:before{content:\"\\f296\"}.ion-knife:before{content:\"\\f297\"}.ion-laptop:before{content:\"\\f1fc\"}.ion-leaf:before{content:\"\\f1fd\"}.ion-levels:before{content:\"\\f298\"}.ion-lightbulb:before{content:\"\\f299\"}.ion-link:before{content:\"\\f1fe\"}.ion-load-a:before{content:\"\\f29a\"}.ion-load-b:before{content:\"\\f29b\"}.ion-load-c:before{content:\"\\f29c\"}.ion-load-d:before{content:\"\\f29d\"}.ion-location:before{content:\"\\f1ff\"}.ion-lock-combination:before{content:\"\\f4d4\"}.ion-locked:before{content:\"\\f200\"}.ion-log-in:before{content:\"\\f29e\"}.ion-log-out:before{content:\"\\f29f\"}.ion-loop:before{content:\"\\f201\"}.ion-magnet:before{content:\"\\f2a0\"}.ion-male:before{content:\"\\f2a1\"}.ion-man:before{content:\"\\f202\"}.ion-map:before{content:\"\\f203\"}.ion-medkit:before{content:\"\\f2a2\"}.ion-merge:before{content:\"\\f33f\"}.ion-mic-a:before{content:\"\\f204\"}.ion-mic-b:before{content:\"\\f205\"}.ion-mic-c:before{content:\"\\f206\"}.ion-minus:before{content:\"\\f209\"}.ion-minus-circled:before{content:\"\\f207\"}.ion-minus-round:before{content:\"\\f208\"}.ion-model-s:before{content:\"\\f2c1\"}.ion-monitor:before{content:\"\\f20a\"}.ion-more:before{content:\"\\f20b\"}.ion-mouse:before{content:\"\\f340\"}.ion-music-note:before{content:\"\\f20c\"}.ion-navicon:before{content:\"\\f20e\"}.ion-navicon-round:before{content:\"\\f20d\"}.ion-navigate:before{content:\"\\f2a3\"}.ion-network:before{content:\"\\f341\"}.ion-no-smoking:before{content:\"\\f2c2\"}.ion-nuclear:before{content:\"\\f2a4\"}.ion-outlet:before{content:\"\\f342\"}.ion-paintbrush:before{content:\"\\f4d5\"}.ion-paintbucket:before{content:\"\\f4d6\"}.ion-paper-airplane:before{content:\"\\f2c3\"}.ion-paperclip:before{content:\"\\f20f\"}.ion-pause:before{content:\"\\f210\"}.ion-person:before{content:\"\\f213\"}.ion-person-add:before{content:\"\\f211\"}.ion-person-stalker:before{content:\"\\f212\"}.ion-pie-graph:before{content:\"\\f2a5\"}.ion-pin:before{content:\"\\f2a6\"}.ion-pinpoint:before{content:\"\\f2a7\"}.ion-pizza:before{content:\"\\f2a8\"}.ion-plane:before{content:\"\\f214\"}.ion-planet:before{content:\"\\f343\"}.ion-play:before{content:\"\\f215\"}.ion-playstation:before{content:\"\\f30a\"}.ion-plus:before{content:\"\\f218\"}.ion-plus-circled:before{content:\"\\f216\"}.ion-plus-round:before{content:\"\\f217\"}.ion-podium:before{content:\"\\f344\"}.ion-pound:before{content:\"\\f219\"}.ion-power:before{content:\"\\f2a9\"}.ion-pricetag:before{content:\"\\f2aa\"}.ion-pricetags:before{content:\"\\f2ab\"}.ion-printer:before{content:\"\\f21a\"}.ion-pull-request:before{content:\"\\f345\"}.ion-qr-scanner:before{content:\"\\f346\"}.ion-quote:before{content:\"\\f347\"}.ion-radio-waves:before{content:\"\\f2ac\"}.ion-record:before{content:\"\\f21b\"}.ion-refresh:before{content:\"\\f21c\"}.ion-reply:before{content:\"\\f21e\"}.ion-reply-all:before{content:\"\\f21d\"}.ion-ribbon-a:before{content:\"\\f348\"}.ion-ribbon-b:before{content:\"\\f349\"}.ion-sad:before{content:\"\\f34a\"}.ion-sad-outline:before{content:\"\\f4d7\"}.ion-scissors:before{content:\"\\f34b\"}.ion-search:before{content:\"\\f21f\"}.ion-settings:before{content:\"\\f2ad\"}.ion-share:before{content:\"\\f220\"}.ion-shuffle:before{content:\"\\f221\"}.ion-skip-backward:before{content:\"\\f222\"}.ion-skip-forward:before{content:\"\\f223\"}.ion-social-android:before{content:\"\\f225\"}.ion-social-android-outline:before{content:\"\\f224\"}.ion-social-angular:before{content:\"\\f4d9\"}.ion-social-angular-outline:before{content:\"\\f4d8\"}.ion-social-apple:before{content:\"\\f227\"}.ion-social-apple-outline:before{content:\"\\f226\"}.ion-social-bitcoin:before{content:\"\\f2af\"}.ion-social-bitcoin-outline:before{content:\"\\f2ae\"}.ion-social-buffer:before{content:\"\\f229\"}.ion-social-buffer-outline:before{content:\"\\f228\"}.ion-social-chrome:before{content:\"\\f4db\"}.ion-social-chrome-outline:before{content:\"\\f4da\"}.ion-social-codepen:before{content:\"\\f4dd\"}.ion-social-codepen-outline:before{content:\"\\f4dc\"}.ion-social-css3:before{content:\"\\f4df\"}.ion-social-css3-outline:before{content:\"\\f4de\"}.ion-social-designernews:before{content:\"\\f22b\"}.ion-social-designernews-outline:before{content:\"\\f22a\"}.ion-social-dribbble:before{content:\"\\f22d\"}.ion-social-dribbble-outline:before{content:\"\\f22c\"}.ion-social-dropbox:before{content:\"\\f22f\"}.ion-social-dropbox-outline:before{content:\"\\f22e\"}.ion-social-euro:before{content:\"\\f4e1\"}.ion-social-euro-outline:before{content:\"\\f4e0\"}.ion-social-facebook:before{content:\"\\f231\"}.ion-social-facebook-outline:before{content:\"\\f230\"}.ion-social-foursquare:before{content:\"\\f34d\"}.ion-social-foursquare-outline:before{content:\"\\f34c\"}.ion-social-freebsd-devil:before{content:\"\\f2c4\"}.ion-social-github:before{content:\"\\f233\"}.ion-social-github-outline:before{content:\"\\f232\"}.ion-social-google:before{content:\"\\f34f\"}.ion-social-google-outline:before{content:\"\\f34e\"}.ion-social-googleplus:before{content:\"\\f235\"}.ion-social-googleplus-outline:before{content:\"\\f234\"}.ion-social-hackernews:before{content:\"\\f237\"}.ion-social-hackernews-outline:before{content:\"\\f236\"}.ion-social-html5:before{content:\"\\f4e3\"}.ion-social-html5-outline:before{content:\"\\f4e2\"}.ion-social-instagram:before{content:\"\\f351\"}.ion-social-instagram-outline:before{content:\"\\f350\"}.ion-social-javascript:before{content:\"\\f4e5\"}.ion-social-javascript-outline:before{content:\"\\f4e4\"}.ion-social-linkedin:before{content:\"\\f239\"}.ion-social-linkedin-outline:before{content:\"\\f238\"}.ion-social-markdown:before{content:\"\\f4e6\"}.ion-social-nodejs:before{content:\"\\f4e7\"}.ion-social-octocat:before{content:\"\\f4e8\"}.ion-social-pinterest:before{content:\"\\f2b1\"}.ion-social-pinterest-outline:before{content:\"\\f2b0\"}.ion-social-python:before{content:\"\\f4e9\"}.ion-social-reddit:before{content:\"\\f23b\"}.ion-social-reddit-outline:before{content:\"\\f23a\"}.ion-social-rss:before{content:\"\\f23d\"}.ion-social-rss-outline:before{content:\"\\f23c\"}.ion-social-sass:before{content:\"\\f4ea\"}.ion-social-skype:before{content:\"\\f23f\"}.ion-social-skype-outline:before{content:\"\\f23e\"}.ion-social-snapchat:before{content:\"\\f4ec\"}.ion-social-snapchat-outline:before{content:\"\\f4eb\"}.ion-social-tumblr:before{content:\"\\f241\"}.ion-social-tumblr-outline:before{content:\"\\f240\"}.ion-social-tux:before{content:\"\\f2c5\"}.ion-social-twitch:before{content:\"\\f4ee\"}.ion-social-twitch-outline:before{content:\"\\f4ed\"}.ion-social-twitter:before{content:\"\\f243\"}.ion-social-twitter-outline:before{content:\"\\f242\"}.ion-social-usd:before{content:\"\\f353\"}.ion-social-usd-outline:before{content:\"\\f352\"}.ion-social-vimeo:before{content:\"\\f245\"}.ion-social-vimeo-outline:before{content:\"\\f244\"}.ion-social-whatsapp:before{content:\"\\f4f0\"}.ion-social-whatsapp-outline:before{content:\"\\f4ef\"}.ion-social-windows:before{content:\"\\f247\"}.ion-social-windows-outline:before{content:\"\\f246\"}.ion-social-wordpress:before{content:\"\\f249\"}.ion-social-wordpress-outline:before{content:\"\\f248\"}.ion-social-yahoo:before{content:\"\\f24b\"}.ion-social-yahoo-outline:before{content:\"\\f24a\"}.ion-social-yen:before{content:\"\\f4f2\"}.ion-social-yen-outline:before{content:\"\\f4f1\"}.ion-social-youtube:before{content:\"\\f24d\"}.ion-social-youtube-outline:before{content:\"\\f24c\"}.ion-soup-can:before{content:\"\\f4f4\"}.ion-soup-can-outline:before{content:\"\\f4f3\"}.ion-speakerphone:before{content:\"\\f2b2\"}.ion-speedometer:before{content:\"\\f2b3\"}.ion-spoon:before{content:\"\\f2b4\"}.ion-star:before{content:\"\\f24e\"}.ion-stats-bars:before{content:\"\\f2b5\"}.ion-steam:before{content:\"\\f30b\"}.ion-stop:before{content:\"\\f24f\"}.ion-thermometer:before{content:\"\\f2b6\"}.ion-thumbsdown:before{content:\"\\f250\"}.ion-thumbsup:before{content:\"\\f251\"}.ion-toggle:before{content:\"\\f355\"}.ion-toggle-filled:before{content:\"\\f354\"}.ion-transgender:before{content:\"\\f4f5\"}.ion-trash-a:before{content:\"\\f252\"}.ion-trash-b:before{content:\"\\f253\"}.ion-trophy:before{content:\"\\f356\"}.ion-tshirt:before{content:\"\\f4f7\"}.ion-tshirt-outline:before{content:\"\\f4f6\"}.ion-umbrella:before{content:\"\\f2b7\"}.ion-university:before{content:\"\\f357\"}.ion-unlocked:before{content:\"\\f254\"}.ion-upload:before{content:\"\\f255\"}.ion-usb:before{content:\"\\f2b8\"}.ion-videocamera:before{content:\"\\f256\"}.ion-volume-high:before{content:\"\\f257\"}.ion-volume-low:before{content:\"\\f258\"}.ion-volume-medium:before{content:\"\\f259\"}.ion-volume-mute:before{content:\"\\f25a\"}.ion-wand:before{content:\"\\f358\"}.ion-waterdrop:before{content:\"\\f25b\"}.ion-wifi:before{content:\"\\f25c\"}.ion-wineglass:before{content:\"\\f2b9\"}.ion-woman:before{content:\"\\f25d\"}.ion-wrench:before{content:\"\\f2ba\"}.ion-xbox:before{content:\"\\f30c\"}\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "src/images/back.png"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define*/
	/*eslint no-use-before-define:0 */

	/**
	 * LayoutController lays out renderables according to a layout-
	 * function and a data-source.
	 *
	 * Events:
	 *
	 * |event      |description|
	 * |-----------|-----------|
	 * |layoutstart|Emitted before the layout function is executed.|
	 * |layoutend  |Emitted after the layout function has been executed.|
	 * |reflow     |Emitted after one or more renderables have been changed.|
	 *
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var Utility = __webpack_require__(27);
	    var Entity = __webpack_require__(28);
	    var ViewSequence = __webpack_require__(29);
	    var OptionsManager = __webpack_require__(30);
	    var EventHandler = __webpack_require__(31);
	    var LayoutUtility = __webpack_require__(32);
	    var LayoutNodeManager = __webpack_require__(33);
	    var LayoutNode = __webpack_require__(34);
	    var FlowLayoutNode = __webpack_require__(35);
	    var Transform = __webpack_require__(19);
	    __webpack_require__(36);

	    /**
	     * @class
	     * @param {Object} options Options.
	     * @param {Function|Object} [options.layout] Layout function or layout-literal.
	     * @param {Object} [options.layoutOptions] Options to pass in to the layout-function.
	     * @param {Array|ViewSequence|Object} [options.dataSource] Array, ViewSequence or Object with key/value pairs.
	     * @param {Utility.Direction} [options.direction] Direction to layout into (e.g. Utility.Direction.Y) (when ommited the default direction of the layout is used)
	     * @param {Bool} [options.flow] Enables flow animations when the layout changes (default: `false`).
	     * @param {Bool} [options.reflowOnResize] Smoothly reflows renderables on resize (only used when flow = true) (default: `true`).
	     * @param {Spec} [options.insertSpec] Size, transform, opacity... to use when inserting new renderables into the scene (default: `{}`).
	     * @param {Spec} [options.removeSpec] Size, transform, opacity... to use when removing renderables from the scene (default: `{}`).
	     * @param {Bool} [options.alwaysLayout] When set to true, always calls the layout function on every render-cycle (default: `false`).
	     * @param {Bool} [options.autoPipeEvents] When set to true, automatically calls .pipe on all renderables when inserted (default: `false`).
	     * @param {Object} [options.preallocateNodes] Optimisation option to improve initial scrolling/animation performance by pre-allocating nodes, e.g.: `{count: 50, spec: {size:[0, 0], transform: Transform.identity}}`.
	     * @alias module:LayoutController
	     */
	    function LayoutController(options, nodeManager) {

	        // Commit
	        this.id = Entity.register(this);
	        this._isDirty = true;
	        this._contextSizeCache = [0, 0];
	        this._commitOutput = {};

	        // Setup input event handler
	        this._eventInput = new EventHandler();
	        EventHandler.setInputHandler(this, this._eventInput);

	        // Setup event handlers
	        this._eventOutput = new EventHandler();
	        EventHandler.setOutputHandler(this, this._eventOutput);

	        // Data-source
	        //this._dataSource = undefined;
	        //this._nodesById = undefined;
	        //this._viewSequence = undefined;

	        // Layout
	        this._layout = {
	            //function: undefined,
	            //literal: undefined,
	            //capabilities: undefined,
	            options: Object.create({})
	        };
	        //this._direction = undefined;
	        this._layout.optionsManager = new OptionsManager(this._layout.options);
	        this._layout.optionsManager.on('change', function() {
	            this._isDirty = true;
	        }.bind(this));

	        // Create options
	        this.options = Object.create(LayoutController.DEFAULT_OPTIONS);
	        this._optionsManager = new OptionsManager(this.options);

	        // Create node manager that manages (Flow)LayoutNode instances
	        if (nodeManager) {
	            this._nodes = nodeManager;
	        } else if (options && options.flow) {
	            this._nodes = new LayoutNodeManager(FlowLayoutNode, _initFlowLayoutNode.bind(this));
	        }
	        else {
	            this._nodes = new LayoutNodeManager(LayoutNode);
	        }

	        // Set options
	        this.setDirection(undefined);
	        if (options) {
	            this.setOptions(options);
	        }
	    }

	    LayoutController.DEFAULT_OPTIONS = {
	        nodeSpring: {
	            dampingRatio: 0.8,
	            period: 300
	        },
	        reflowOnResize: true
	        /*insertSpec: {
	            opacity: undefined,
	            size: undefined,
	            transform: undefined,
	            origin: undefined,
	            align: undefined
	        },
	        removeSpec: {
	            opacity: undefined,
	            size: undefined,
	            transform: undefined,
	            origin: undefined,
	            align: undefined
	        }*/
	    };

	    /**
	     * Called whenever a layout-node is created/re-used. Initializes
	     * the node with the `insertSpec` if it has been defined.
	     */
	    function _initFlowLayoutNode(node, spec) {
	        if (!spec && this.options.insertSpec) {
	            node.setSpec(this.options.insertSpec);
	        }
	    }

	    /**
	     * Patches the LayoutController instance's options with the passed-in ones.
	     *
	     * @param {Options} options An object of configurable options for the LayoutController instance.
	     * @param {Function|Object} [options.layout] Layout function or layout-literal.
	     * @param {Object} [options.layoutOptions] Options to pass in to the layout-function.
	     * @param {Array|ViewSequence|Object} [options.dataSource] Array, ViewSequence or Object with key/value pairs.
	     * @param {Utility.Direction} [options.direction] Direction to layout into (e.g. Utility.Direction.Y) (when ommited the default direction of the layout is used)
	     * @param {Spec} [options.insertSpec] Size, transform, opacity... to use when inserting new renderables into the scene (default: `{}`).
	     * @param {Spec} [options.removeSpec] Size, transform, opacity... to use when removing renderables from the scene (default: `{}`).
	     * @param {Bool} [options.alwaysLayout] When set to true, always calls the layout function on every render-cycle (default: `false`).
	     * @param {Bool} [options.autoPipeEvents] When set to true, automatically calls .pipe on all renderables when inserted (default: `false`).
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.setOptions = function setOptions(options) {
	        if ((options.alignment !== undefined) && (options.alignment !== this.options.alignment)) {
	            this._isDirty = true;
	        }
	        this._optionsManager.setOptions(options);
	        if (options.dataSource) {
	            this.setDataSource(options.dataSource);
	        }
	        if (options.layout) {
	            this.setLayout(options.layout, options.layoutOptions);
	        } else if (options.layoutOptions) {
	            this.setLayoutOptions(options.layoutOptions);
	        }
	        if (options.direction !== undefined) {
	            this.setDirection(options.direction);
	        }
	        if (options.nodeSpring && this.options.flow) {
	            this._nodes.setNodeOptions({
	                spring: options.nodeSpring
	            });
	        }
	        if (options.preallocateNodes) {
	            this._nodes.preallocateNodes(options.preallocateNodes.count || 0, options.preallocateNodes.spec);
	        }
	        return this;
	    };

	    /**
	     * Helper function to enumerate all the renderables in the datasource
	     */
	    function _forEachRenderable(callback) {
	        var dataSource = this._dataSource;
	        if (dataSource instanceof Array) {
	            for (var i = 0, j = dataSource.length; i < j; i++) {
	                callback(dataSource[i]);
	            }
	        } else if (dataSource instanceof ViewSequence) {
	            var renderable;
	            while (dataSource) {
	                renderable = dataSource.get();
	                if (!renderable) {
	                    break;
	                }
	                callback(renderable);
	                dataSource = dataSource.getNext();
	            }
	        }
	        else {
	            for (var key in dataSource) {
	                callback(dataSource[key]);
	            }
	        }
	    }

	    /**
	     * Sets the collection of renderables which are layed out according to
	     * the layout-function.
	     *
	     * The data-source can be either an Array, ViewSequence or Object
	     * with key/value pairs.
	     *
	     * @param {Array|Object|ViewSequence} dataSource Array, ViewSequence or Object.
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.setDataSource = function(dataSource) {
	        this._dataSource = dataSource;
	        this._nodesById = undefined;
	        if (dataSource instanceof Array) {
	            this._viewSequence = new ViewSequence(dataSource);
	        } else if ((dataSource instanceof ViewSequence) || dataSource.getNext) {
	            this._viewSequence = dataSource;
	        } else if (dataSource instanceof Object){
	            this._nodesById = dataSource;
	        }
	        if (this.options.autoPipeEvents) {
	            if (this._dataSource.pipe) {
	                this._dataSource.pipe(this);
	                this._dataSource.pipe(this._eventOutput);
	            }
	            else {
	                _forEachRenderable.call(this, function(renderable) {
	                    if (renderable && renderable.pipe) {
	                        renderable.pipe(this);
	                        renderable.pipe(this._eventOutput);
	                    }
	                }.bind(this));
	            }
	        }
	        this._isDirty = true;
	        return this;
	    };

	    /**
	     * Get the data-source.
	     *
	     * @return {Array|ViewSequence|Object} data-source
	     */
	    LayoutController.prototype.getDataSource = function() {
	        return this._dataSource;
	    };

	    /**
	     * Set the new layout.
	     *
	     * @param {Function|Object} layout Layout function or layout-literal
	     * @param {Object} [options] Options to pass in to the layout-function
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.setLayout = function(layout, options) {

	        // Set new layout funtion
	        if (layout instanceof Function) {
	            this._layout._function = layout;
	            this._layout.capabilities = layout.Capabilities;
	            this._layout.literal = undefined;

	        // If the layout is an object, treat it as a layout-literal
	        } else if (layout instanceof Object) {
	            this._layout.literal = layout;
	            this._layout.capabilities = undefined; // todo - derive from literal somehow?
	            var helperName = Object.keys(layout)[0];
	            var Helper = LayoutUtility.getRegisteredHelper(helperName);
	            this._layout._function = Helper ? function(context, options2) {
	                var helper = new Helper(context, options2);
	                helper.parse(layout[helperName]);
	            } : undefined;
	        }
	        else {
	            this._layout._function = undefined;
	            this._layout.capabilities = undefined;
	            this._layout.literal = undefined;
	        }

	        // Update options
	        if (options) {
	            this.setLayoutOptions(options);
	        }

	        // Update direction
	        this.setDirection(this._configuredDirection);
	        this._isDirty = true;
	        return this;
	    };

	    /**
	     * Get the current layout.
	     *
	     * @return {Function|Object} Layout function or layout literal
	     */
	    LayoutController.prototype.getLayout = function() {
	        return this._layout.literal || this._layout._function;
	    };

	    /**
	     * Set the options for the current layout. Use this function after
	     * `setLayout` to update one or more options for the layout-function.
	     *
	     * @param {Object} [options] Options to pass in to the layout-function
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.setLayoutOptions = function(options) {
	        this._layout.optionsManager.setOptions(options);
	        return this;
	    };

	    /**
	     * Get the current layout options.
	     *
	     * @return {Object} Layout options
	     */
	    LayoutController.prototype.getLayoutOptions = function() {
	        return this._layout.options;
	    };

	    /**
	     * Calculates the actual in-use direction based on the given direction
	     * and supported capabilities of the layout-function.
	     */
	    function _getActualDirection(direction) {

	        // When the direction is configured in the capabilities, look it up there
	        if (this._layout.capabilities && this._layout.capabilities.direction) {

	            // Multiple directions are supported
	            if (Array.isArray(this._layout.capabilities.direction)) {
	                for (var i = 0; i < this._layout.capabilities.direction.length; i++) {
	                    if (this._layout.capabilities.direction[i] === direction) {
	                        return direction;
	                    }
	                }
	                return this._layout.capabilities.direction[0];
	            }

	            // Only one direction is supported, we must use that
	            else {
	                return this._layout.capabilities.direction;
	            }
	        }

	        // Use Y-direction as a fallback
	        return (direction === undefined) ? Utility.Direction.Y : direction;
	    }

	    /**
	     * Set the direction of the layout. When no direction is set, the default
	     * direction of the layout function is used.
	     *
	     * @param {Utility.Direction} direction Direction (e.g. Utility.Direction.X)
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.setDirection = function(direction) {
	        this._configuredDirection = direction;
	        var newDirection = _getActualDirection.call(this, direction);
	        if (newDirection !== this._direction) {
	            this._direction = newDirection;
	            this._isDirty = true;
	        }
	    };

	    /**
	     * Get the direction (e.g. Utility.Direction.Y). By default, this function
	     * returns the direction that was configured by setting `setDirection`. When
	     * the direction has not been set, `undefined` is returned.
	     *
	     * When no direction has been set, the first direction is used that is specified
	     * in the capabilities of the layout-function. To obtain the actual in-use direction,
	     * use `getDirection(true)`. This method returns the actual in-use direction and
	     * never returns undefined.
	     *
	     * @param {Boolean} [actual] Set to true to obtain the actual in-use direction
	     * @return {Utility.Direction} Direction or undefined
	     */
	    LayoutController.prototype.getDirection = function(actual) {
	        return actual ? this._direction : this._configuredDirection;
	    };

	    /**
	     * Get the spec (size, transform, etc..) for the given renderable or
	     * Id.
	     *
	     * @param {Renderable|String} node Renderabe or Id to look for
	     * @param {Bool} normalize When set to `true` normalizes the origin/align into the transform translation (default: `false`).
	     * @return {Spec} spec or undefined
	     */
	    LayoutController.prototype.getSpec = function(node, normalize) {
	        if (!node) {
	            return undefined;
	        }
	        if ((node instanceof String) || (typeof node === 'string')) {
	            if (!this._nodesById) {
	               return undefined;
	            }
	            node = this._nodesById[node];
	            if (!node) {
	                return undefined;
	            }

	            // If the result was an array, return that instead
	            if (node instanceof Array) {
	                return node;
	            }
	        }
	        if (this._specs) {
	            for (var i = 0; i < this._specs.length; i++) {
	                var spec = this._specs[i];
	                if (spec.renderNode === node) {
	                    if (normalize && spec.transform && spec.size && (spec.align || spec.origin)) {
	                        var transform = spec.transform;
	                        if (spec.align && (spec.align[0] || spec.align[1])) {
	                            transform = Transform.thenMove(transform, [spec.align[0] * this._contextSizeCache[0], spec.align[1] * this._contextSizeCache[1], 0]);
	                        }
	                        if (spec.origin && (spec.origin[0] || spec.origin[1])) {
	                            transform = Transform.moveThen([-spec.origin[0] * spec.size[0], -spec.origin[1] * spec.size[1], 0], transform);
	                        }
	                        return {
	                            opacity: spec.opacity,
	                            size: spec.size,
	                            transform: transform
	                        };
	                    }
	                    return spec;
	                }
	            }
	        }
	        return undefined;
	    };

	    /**
	     * Forces a reflow of the layout the next render cycle.
	     *
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.reflowLayout = function() {
	        this._isDirty = true;
	        return this;
	    };

	    /**
	     * Inserts a renderable into the data-source.
	     *
	     * The optional argument `insertSpec` is only used `flow` mode is enabled.
	     * When specified, the renderable is inserted using an animation starting with
	     * size, origin, opacity, transform, etc... as specified in `insertSpec'.
	     *
	     * @param {Number|String} indexOrId Index (0 = before first, -1 at end), within dataSource array or id (String)
	     * @param {Object} renderable Renderable to add to the data-source
	     * @param {Spec} [insertSpec] Size, transform, etc.. to start with when inserting
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.insert = function(indexOrId, renderable, insertSpec) {

	        // Add the renderable in case of an id (String)
	        if ((indexOrId instanceof String) || (typeof indexOrId === 'string')) {

	            // Create data-source if neccesary
	            if (this._dataSource === undefined) {
	                this._dataSource = {};
	                this._nodesById = this._dataSource;
	            }

	            // Insert renderable
	            this._nodesById[indexOrId] = renderable;
	        }

	        // Add the renderable using an index
	        else {

	            // Create data-source if neccesary
	            if (this._dataSource === undefined) {
	                this._dataSource = [];
	                this._viewSequence = new ViewSequence(this._dataSource);
	            }

	            // Insert into array
	            var dataSource = this._viewSequence || this._dataSource;
	            if (indexOrId === -1) {
	                dataSource.push(renderable);
	            }
	            else if (indexOrId === 0) {
	                if (dataSource === this._viewSequence) {
	                    dataSource.splice(0, 0, renderable);
	                    if (this._viewSequence.getIndex() === 0) {
	                        var nextViewSequence = this._viewSequence.getNext();
	                        if (nextViewSequence && nextViewSequence.get()) {
	                            this._viewSequence = nextViewSequence;
	                        }
	                    }
	                }
	                else {
	                    dataSource.splice(0, 0, renderable);
	                }
	            }
	            else {
	                dataSource.splice(indexOrId, 0, renderable);
	            }
	        }

	        // When a custom insert-spec was specified, store that in the layout-node
	        if (insertSpec) {
	            this._nodes.insertNode(this._nodes.createNode(renderable, insertSpec));
	        }

	        // Auto pipe events
	        if (this.options.autoPipeEvents && renderable && renderable.pipe) {
	            renderable.pipe(this);
	            renderable.pipe(this._eventOutput);
	        }

	        // Force a reflow
	        this._isDirty = true;

	        return this;
	    };

	    /**
	     * Adds a renderable to the end of a sequential data-source.
	     *
	     * The optional argument `insertSpec` is only used `flow` mode is enabled.
	     * When specified, the renderable is inserted using an animation starting with
	     * size, origin, opacity, transform, etc... as specified in `insertSpec'.
	     *
	     * @param {Object} renderable Renderable to add to the data-source
	     * @param {Spec} [insertSpec] Size, transform, etc.. to start with when inserting
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.push = function(renderable, insertSpec) {
	        return this.insert(-1, renderable, insertSpec);
	    };

	    /**
	     * Helper function for finding the view-sequence node at the given position.
	     */
	    function _getViewSequenceAtIndex(index) {
	        var viewSequence = this._viewSequence;
	        var i = viewSequence ? viewSequence.getIndex() : index;
	        if (index > i) {
	            while (viewSequence) {
	                viewSequence = viewSequence.getNext();
	                if (!viewSequence) {
	                    return undefined;
	                }
	                i = viewSequence.getIndex();
	                if (i === index) {
	                    return viewSequence;
	                } else if (index < i) {
	                    return undefined;
	                }
	            }
	        } else if (index < i) {
	            while (viewSequence) {
	                viewSequence = viewSequence.getPrevious();
	                if (!viewSequence) {
	                    return undefined;
	                }
	                i = viewSequence.getIndex();
	                if (i === index) {
	                    return viewSequence;
	                } else if (index > i) {
	                    return undefined;
	                }
	            }
	        }
	        return viewSequence;
	    }

	    /**
	     * Swaps two renderables at the given positions.
	     *
	     * @param {Number} index Index of the renderable to swap
	     * @param {Number} index2 Index of the renderable to swap with
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.swap = function(index, index2) {
	        if (this._viewSequence) {
	            _getViewSequenceAtIndex.call(this, index).swap(_getViewSequenceAtIndex.call(this, index2));
	            this._isDirty = true;
	        }
	        return this;
	    };

	    /**
	     * Removes a renderable from the data-source.
	     *
	     * The optional argument `removeSpec` is only used `flow` mode is enabled.
	     * When specified, the renderable is removed using an animation ending at
	     * the size, origin, opacity, transform, etc... as specified in `removeSpec'.
	     *
	     * @param {Number|String} indexOrId Index within dataSource array or id (String)
	     * @param {Spec} [removeSpec] Size, transform, etc.. to end with when removing
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.remove = function(indexOrId, removeSpec) {

	        // Remove the renderable in case of an id (String)
	        var renderNode;
	        if (this._nodesById || (indexOrId instanceof String) || (typeof indexOrId === 'string')) {

	            // Find and remove renderable from data-source
	            renderNode = this._nodesById[indexOrId];
	            if (renderNode) {
	                delete this._nodesById[indexOrId];
	            }
	        }

	        // Remove the renderable using an index
	        else {

	            // Remove from array
	            renderNode = this._dataSource.splice(indexOrId, 1)[0];
	        }

	        // When a custom remove-spec was specified, store that in the layout-node
	        if (renderNode && removeSpec) {
	            var node = this._nodes.getNodeByRenderNode(renderNode);
	            if (node) {
	                node.remove(removeSpec || this.options.removeSpec);
	            }
	        }

	        // Force a reflow
	        if (renderNode) {
	            this._isDirty = true;
	        }

	        return this;
	    };

	    /**
	     * Removes all renderables from the data-source.
	     *
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.removeAll = function() {
	        if (this._nodesById) {
	            var dirty = false;
	            for (var key in this._nodesById) {
	                delete this._nodesById[key];
	                dirty = true;
	            }
	            if (dirty) {
	                this._isDirty = true;
	            }
	        } else if (this._dataSource){
	          this.setDataSource([]);
	        }
	        return this;
	    };

	    /**
	     * Return size of contained element or `undefined` when size is not defined.
	     *
	     * @return {Array.Number} [width, height]
	     */
	    LayoutController.prototype.getSize = function() {
	        return this._size || this.options.size;
	    };

	    /**
	     * Generate a render spec from the contents of this component.
	     *
	     * @private
	     * @method render
	     * @return {Object} Render spec for this component
	     */
	    LayoutController.prototype.render = function render() {
	        return this.id;
	    };

	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     */
	    LayoutController.prototype.commit = function commit(context) {
	        var transform = context.transform;
	        var origin = context.origin;
	        var size = context.size;
	        var opacity = context.opacity;

	        // When the size or layout function has changed, reflow the layout
	        if (size[0] !== this._contextSizeCache[0] ||
	            size[1] !== this._contextSizeCache[1] ||
	            this._isDirty ||
	            this._nodes._trueSizeRequested ||
	            this.options.alwaysLayout){

	            // Emit start event
	            var eventData = {
	                target: this,
	                oldSize: this._contextSizeCache,
	                size: size,
	                dirty: this._isDirty,
	                trueSizeRequested: this._nodes._trueSizeRequested
	            };
	            this._eventOutput.emit('layoutstart', eventData);

	            // When the layout has changed, and we are not just scrolling,
	            // disable the locked state of the layout-nodes so that they
	            // can freely transition between the old and new state.
	            if (this.options.flow && (this._isDirty ||
	                (this.options.reflowOnResize &&
	                ((size[0] !== this._contextSizeCache[0]) ||
	                 (size[1] !== this._contextSizeCache[1]))))) {
	                var node = this._nodes.getStartEnumNode();
	                while (node) {
	                    node.releaseLock();
	                    node = node._next;
	                }
	            }

	            // Update state
	            this._contextSizeCache[0] = size[0];
	            this._contextSizeCache[1] = size[1];
	            this._isDirty = false;

	            // Prepare for layout
	            var scrollEnd;
	            if (this.options.size && (this.options.size[this._direction] === true)) {
	                scrollEnd = 1000000; // calculate scroll-length
	            }
	            var layoutContext = this._nodes.prepareForLayout(
	                this._viewSequence,     // first node to layout
	                this._nodesById, {      // so we can do fast id lookups
	                    size: size,
	                    direction: this._direction,
	                    scrollEnd: scrollEnd
	                }
	            );

	            // Layout objects
	            if (this._layout._function) {
	                this._layout._function(
	                    layoutContext,          // context which the layout-function can use
	                    this._layout.options    // additional layout-options
	                );
	            }
	            this._nodes.removeVirtualViewSequenceNodes();

	            // Calculate scroll-length and use that as the true-size (height)
	            if (scrollEnd) {
	                scrollEnd = 0;
	                node = this._nodes.getStartEnumNode();
	                while (node) {
	                    if (node._invalidated && node.scrollLength) {
	                        scrollEnd += node.scrollLength;
	                    }
	                    node = node._next;
	                }
	                this._size = this._size || [0, 0];
	                this._size[0] = this.options.size[0];
	                this._size[1] = this.options.size[1];
	                this._size[this._direction] = scrollEnd;
	            }

	            // Update output and optionally emit event
	            var result = this._nodes.buildSpecAndDestroyUnrenderedNodes();
	            this._commitOutput.target = result.specs;
	            this._eventOutput.emit('reflow', {
	                target: this
	            });

	            // Emit end event
	            this._eventOutput.emit('layoutend', eventData);
	        }
	        else if (this.options.flow) {

	            // Update output and optionally emit event
	            result = this._nodes.buildSpecAndDestroyUnrenderedNodes();
	            this._commitOutput.target = result.specs;
	            if (result.modified) {
	                this._eventOutput.emit('reflow', {
	                    target: this
	                });
	            }
	        }
	        this._specs = this._commitOutput.target;

	        // Render child-nodes every commit
	        var target = this._commitOutput.target;
	        for (var i = 0, j = target.length; i < j; i++) {
	            target[i].target = target[i].renderNode.render();
	        }

	        // Translate dependent on origin
	        if (origin && ((origin[0] !== 0) || (origin[1] !== 0))) {
	            transform = Transform.moveThen([-size[0]*origin[0], -size[1]*origin[1], 0], transform);
	        }
	        this._commitOutput.size = size;
	        this._commitOutput.opacity = opacity;
	        this._commitOutput.transform = transform;
	        return this._commitOutput;
	    };

	    module.exports = LayoutController;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define, console*/
	/*eslint no-use-before-define:0, no-console:0 */

	/**
	 * Flexible FlexScrollView for famo.us.
	 *
	 * Key features:
	 * -    Customizable layout (uses ListLayout by default)
	 * -    Insert/remove at any position using animations
	 * -    Support for `true` size renderables
	 * -    Pull to refresh (header & footer)
	 * -    Horizontal/vertical direction
	 * -    Top/left or bottom/right alignment
	 * -    Pagination
	 * -    Option to embed in a ContainerSurface
	 * -    FlexScrollView linking
	 *
	 * Inherited from: [ScrollController](./ScrollController.md)
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var LayoutUtility = __webpack_require__(32);
	    var ScrollController = __webpack_require__(37);
	    var ListLayout = __webpack_require__(38);

	    //
	    // Pull to refresh states
	    //
	    var PullToRefreshState = {
	        HIDDEN: 0,
	        PULLING: 1,
	        ACTIVE: 2,
	        COMPLETED: 3,
	        HIDDING: 4
	    };

	    /**
	     * @class
	     * @extends ScrollController
	     * @param {Object} options Configurable options (see ScrollController for all inherited options).
	     * @param {Renderable} [options.pullToRefreshHeader] Pull to refresh renderable that is displayed when pulling down from the top.
	     * @param {Renderable} [options.pullToRefreshFooter] Pull to refresh renderable that is displayed when pulling up from the bottom.
	     * @param {FlexScrollView} [options.leadingScrollView] Leading scrollview into which input events are piped (see Tutorial)
	     * @param {FlexScrollView} [options.trailingScrollView] Trailing scrollview into which input events are piped (see Tutorial)
	     * @alias module:FlexScrollView
	     */
	    function FlexScrollView(options) {
	        ScrollController.call(this, LayoutUtility.combineOptions(FlexScrollView.DEFAULT_OPTIONS, options));
	        this._thisScrollViewDelta = 0;
	        this._leadingScrollViewDelta = 0;
	        this._trailingScrollViewDelta = 0;
	    }
	    FlexScrollView.prototype = Object.create(ScrollController.prototype);
	    FlexScrollView.prototype.constructor = FlexScrollView;
	    FlexScrollView.PullToRefreshState = PullToRefreshState;

	    FlexScrollView.DEFAULT_OPTIONS = {
	        layout: ListLayout,         // sequential layout, uses width/height from renderable
	        direction: undefined,       // 0 = X, 1 = Y, undefined = use default from layout
	        paginated: false,           // pagination on/off
	        alignment: 0,               // 0 = top/left, 1 = bottom/right
	        flow: false,                // allow renderables to flow between layouts when not scrolling
	        mouseMove: false,           // allow mouse to hold and move the view
	        useContainer: false,        // embeds inside a ContainerSurface for clipping and capturing input events
	        visibleItemThresshold: 0.5, // by default, when an item is 50% visible, it is considered visible by `getFirstVisibleItem`
	        pullToRefreshHeader: undefined, // assign pull-to-refresh renderable here (renderable must have a size)
	        pullToRefreshFooter: undefined, // assign pull-to-refresh renderable here (renderable must have a size)
	        leadingScrollView: undefined,
	        trailingScrollView: undefined
	        // see ScrollController for all other options
	    };

	    /**
	     * Patches the FlexScrollView instance's options with the passed-in ones.
	     *
	     * @param {Object} options Configurable options (see ScrollController for all inherited options).
	     * @param {Renderable} [options.pullToRefreshHeader] Pull to refresh renderable that is displayed when pulling down from the top.
	     * @param {Renderable} [options.pullToRefreshFooter] Pull to refresh renderable that is displayed when pulling up from the bottom.
	     * @param {FlexScrollView} [options.leadingScrollView] Leading scrollview into which input events are piped (see Tutorial).
	     * @param {FlexScrollView} [options.trailingScrollView] Trailing scrollview into which input events are piped (see Tutorial).
	     * @return {FlexScrollView} this
	     */
	    FlexScrollView.prototype.setOptions = function(options) {
	        ScrollController.prototype.setOptions.call(this, options);

	        // Update pull to refresh renderables
	        if (options.pullToRefreshHeader || options.pullToRefreshFooter || this._pullToRefresh) {
	            if (options.pullToRefreshHeader) {
	                this._pullToRefresh = this._pullToRefresh || [undefined, undefined];
	                if (!this._pullToRefresh[0]) {
	                    this._pullToRefresh[0] = {
	                        state: PullToRefreshState.HIDDEN,
	                        prevState: PullToRefreshState.HIDDEN,
	                        footer: false
	                    };
	                }
	                this._pullToRefresh[0].node = options.pullToRefreshHeader;
	            }
	            else if (!this.options.pullToRefreshHeader && this._pullToRefresh) {
	                this._pullToRefresh[0] = undefined;
	            }
	            if (options.pullToRefreshFooter) {
	                this._pullToRefresh = this._pullToRefresh || [undefined, undefined];
	                if (!this._pullToRefresh[1]) {
	                    this._pullToRefresh[1] = {
	                        state: PullToRefreshState.HIDDEN,
	                        prevState: PullToRefreshState.HIDDEN,
	                        footer: true
	                    };
	                }
	                this._pullToRefresh[1].node = options.pullToRefreshFooter;
	            }
	            else if (!this.options.pullToRefreshFooter && this._pullToRefresh) {
	                this._pullToRefresh[1] = undefined;
	            }
	            if (this._pullToRefresh && !this._pullToRefresh[0] && !this._pullToRefresh[1]) {
	                this._pullToRefresh = undefined;
	            }
	        }
	        return this;
	    };

	    /**
	     * Sets the data-source (alias for setDataSource).
	     *
	     * This function is a shim provided for compatibility with the stock famo.us Scrollview.
	     *
	     * @param {Array|ViewSequence} node Either an array of renderables or a Famous viewSequence.
	     * @return {FlexScrollView} this
	     */
	    FlexScrollView.prototype.sequenceFrom = function(node) {
	        return this.setDataSource(node);
	    };

	    /**
	     * Returns the index of the first visible renderable.
	     *
	     * This function is a shim provided for compatibility with the stock famo.us Scrollview.
	     *
	     * @return {Number} The current index of the ViewSequence
	     */
	    FlexScrollView.prototype.getCurrentIndex = function getCurrentIndex() {
	        var item = this.getFirstVisibleItem();
	        return item ? item.viewSequence.getIndex() : -1;
	    };

	    /**
	     * Paginates the Scrollview to an absolute page index. This function is a shim provided
	     * for compatibility with the stock famo.us Scrollview.
	     *
	     * @param {Number} index view-sequence index to go to.
	     * @return {FlexScrollView} this
	     */
	    FlexScrollView.prototype.goToPage = function goToPage(index) {
	        var viewSequence = this._viewSequence;
	        if (!viewSequence) {
	            return this;
	        }
	        while (viewSequence.getIndex() < index) {
	            viewSequence = viewSequence.getNext();
	            if (!viewSequence) {
	                return this;
	            }
	        }
	        while (viewSequence.getIndex() > index) {
	            viewSequence = viewSequence.getPrevious();
	            if (!viewSequence) {
	                return this;
	            }
	        }
	        this.goToRenderNode(viewSequence.get());
	        return this;
	    };

	    /**
	     * Returns the offset associated with the Scrollview instance's current node
	     * (generally the node currently at the top).
	     *
	     * This function is a shim provided for compatibility with the stock famo.us Scrollview.
	     *
	     * @return {number} The position of either the specified node, or the Scrollview's current Node,
	     * in pixels translated.
	     */
	    FlexScrollView.prototype.getOffset = function() {
	        return this._scrollOffsetCache;
	    };

	    /**
	     * Returns the position associated with the Scrollview instance's current node
	     * (generally the node currently at the top).
	     *
	     * This function is a shim provided for compatibility with the stock famo.us Scrollview.
	     *
	     * @deprecated
	     * @param {number} [node] If specified, returns the position of the node at that index in the
	     * Scrollview instance's currently managed collection.
	     * @return {number} The position of either the specified node, or the Scrollview's current Node,
	     * in pixels translated.
	     */
	    FlexScrollView.prototype.getPosition = FlexScrollView.prototype.getOffset;

	    /**
	     * Helper function for setting the pull-to-refresh status.
	     */
	    function _setPullToRefreshState(pullToRefresh, state) {
	        if (pullToRefresh.state !== state) {
	            pullToRefresh.state = state;
	            if (pullToRefresh.node && pullToRefresh.node.setPullToRefreshStatus) {
	                pullToRefresh.node.setPullToRefreshStatus(state);
	            }
	        }
	    }

	    /**
	     * Helper function for getting the pull-to-refresh data.
	     */
	    function _getPullToRefresh(footer) {
	        return this._pullToRefresh ? this._pullToRefresh[footer ? 1 : 0] : undefined;
	    }

	    /**
	     * Post-layout function that adds the pull-to-refresh renderables.
	     * @private
	     */
	    FlexScrollView.prototype._postLayout = function(size, scrollOffset) {

	        // Exit immediately when pull to refresh is not configured
	        if (!this._pullToRefresh) {
	            return;
	        }

	        // Adjust scroll-offset for alignment
	        if (this.options.alignment) {
	            scrollOffset += size[this._direction];
	        }

	        // Prepare
	        var prevHeight;
	        var nextHeight;
	        var totalHeight;

	        // Show/activate pull to refresh renderables
	        for (var i = 0; i < 2 ; i++) {
	            var pullToRefresh = this._pullToRefresh[i];
	            if (pullToRefresh) {

	                // Calculate offset
	                var length = pullToRefresh.node.getSize()[this._direction];
	                var pullLength = pullToRefresh.node.getPullToRefreshSize ? pullToRefresh.node.getPullToRefreshSize()[this._direction] : length;
	                var offset;
	                if (!pullToRefresh.footer) {
	                    // header
	                    prevHeight = this._calcScrollHeight(false);
	                    prevHeight = (prevHeight === undefined) ? -1 : prevHeight;
	                    offset = (prevHeight >= 0) ? (scrollOffset - prevHeight) : prevHeight;
	                    if (this.options.alignment) {
	                        nextHeight = this._calcScrollHeight(true);
	                        nextHeight = (nextHeight === undefined) ? -1 : nextHeight;
	                        totalHeight = ((prevHeight >= 0) && (nextHeight >= 0)) ? (prevHeight + nextHeight) : -1;
	                        if ((totalHeight >= 0) && (totalHeight < size[this._direction])) {
	                            offset = Math.round((scrollOffset - size[this._direction]) + nextHeight);
	                        }
	                    }
	                }
	                else {
	                    // footer
	                    nextHeight = (nextHeight === undefined) ? nextHeight = this._calcScrollHeight(true) : nextHeight;
	                    nextHeight = (nextHeight === undefined) ? -1 : nextHeight;
	                    offset = (nextHeight >= 0) ? (scrollOffset + nextHeight) : (size[this._direction] + 1);
	                    if (!this.options.alignment) {
	                        prevHeight = (prevHeight === undefined) ? this._calcScrollHeight(false) : prevHeight;
	                        prevHeight = (prevHeight === undefined) ? -1 : prevHeight;
	                        totalHeight = ((prevHeight >= 0) && (nextHeight >= 0)) ? (prevHeight + nextHeight) : -1;
	                        if ((totalHeight >= 0) && (totalHeight < size[this._direction])) {
	                            offset = Math.round((scrollOffset - prevHeight) + size[this._direction]);
	                        }
	                    }
	                    offset = -(offset - size[this._direction]);
	                }

	                // Determine current state
	                var visiblePerc = Math.max(Math.min(offset / pullLength, 1), 0);
	                switch (pullToRefresh.state) {
	                    case PullToRefreshState.HIDDEN:
	                        if (this._scroll.scrollForceCount) {
	                            if (visiblePerc >= 1) {
	                                _setPullToRefreshState(pullToRefresh, PullToRefreshState.ACTIVE);
	                            }
	                            else if (offset >= 0.2) {
	                                _setPullToRefreshState(pullToRefresh, PullToRefreshState.PULLING);
	                            }
	                        }
	                        break;
	                    case PullToRefreshState.PULLING:
	                        if (this._scroll.scrollForceCount && (visiblePerc >= 1)) {
	                            _setPullToRefreshState(pullToRefresh, PullToRefreshState.ACTIVE);
	                        }
	                        else if (offset < 0.2) {
	                            _setPullToRefreshState(pullToRefresh, PullToRefreshState.HIDDEN);
	                        }
	                        break;
	                    case PullToRefreshState.ACTIVE:
	                        // nothing to do, wait for completed
	                        break;
	                    case PullToRefreshState.COMPLETED:
	                        if (!this._scroll.scrollForceCount) {
	                            if (offset >= 0.2) {
	                                _setPullToRefreshState(pullToRefresh, PullToRefreshState.HIDDING);
	                            }
	                            else {
	                                _setPullToRefreshState(pullToRefresh, PullToRefreshState.HIDDEN);
	                            }
	                        }
	                        break;
	                    case PullToRefreshState.HIDDING:
	                        if (offset < 0.2) {
	                            _setPullToRefreshState(pullToRefresh, PullToRefreshState.HIDDEN);
	                        }
	                        break;
	                }

	                // Show pull to refresh node
	                if (pullToRefresh.state !== PullToRefreshState.HIDDEN) {
	                    var contextNode = {
	                        renderNode: pullToRefresh.node,
	                        prev: !pullToRefresh.footer,
	                        next: pullToRefresh.footer,
	                        index: !pullToRefresh.footer ? --this._nodes._contextState.prevGetIndex : ++this._nodes._contextState.nextGetIndex
	                    };
	                    var scrollLength;
	                    if (pullToRefresh.state === PullToRefreshState.ACTIVE) {
	                        scrollLength = length;
	                    } else if (this._scroll.scrollForceCount) {
	                        scrollLength = Math.min(offset, length);
	                    }
	                    var set = {
	                        size: [size[0], size[1]],
	                        translate: [0, 0, -1e-3], // transform.behind
	                        scrollLength: scrollLength
	                    };
	                    set.size[this._direction] = Math.max(Math.min(offset, pullLength), 0);
	                    set.translate[this._direction] = pullToRefresh.footer ? (size[this._direction] - length) : 0;
	                    this._nodes._context.set(contextNode, set);
	                }
	            }
	        }
	    };

	    /**
	     * Shows the pulls-to-refresh renderable indicating that a refresh is in progress.
	     *
	     * @param {Bool} [footer] set to true to show pull-to-refresh at the footer (default: false).
	     * @return {FlexScrollView} this
	     */
	    FlexScrollView.prototype.showPullToRefresh = function(footer) {
	        var pullToRefresh = _getPullToRefresh.call(this, footer);
	        if (pullToRefresh) {
	            _setPullToRefreshState(pullToRefresh, PullToRefreshState.ACTIVE);
	            this._scroll.scrollDirty = true;
	        }
	    };

	    /**
	     * Hides the pull-to-refresh renderable in case it was visible.
	     *
	     * @param {Bool} [footer] set to true to hide the pull-to-refresh at the footer (default: false).
	     * @return {FlexScrollView} this
	     */
	    FlexScrollView.prototype.hidePullToRefresh = function(footer) {
	        var pullToRefresh = _getPullToRefresh.call(this, footer);
	        if (pullToRefresh && (pullToRefresh.state === PullToRefreshState.ACTIVE)) {
	            _setPullToRefreshState(pullToRefresh, PullToRefreshState.COMPLETED);
	            this._scroll.scrollDirty = true;
	        }
	        return this;
	    };

	    /**
	     * Get the visible state of the pull-to-refresh renderable.
	     *
	     * @param {Bool} [footer] set to true to get the state of the pull-to-refresh footer (default: false).
	     */
	    FlexScrollView.prototype.isPullToRefreshVisible = function(footer) {
	        var pullToRefresh = _getPullToRefresh.call(this, footer);
	        return pullToRefresh ? (pullToRefresh.state === PullToRefreshState.ACTIVE) : false;
	    };

	    /**
	     * Delegates any scroll force to leading/trailing scrollviews.
	     * @private
	     */
	    FlexScrollView.prototype.applyScrollForce = function(delta) {
	        var leadingScrollView = this.options.leadingScrollView;
	        var trailingScrollView = this.options.trailingScrollView;
	        if (!leadingScrollView && !trailingScrollView) {
	            return ScrollController.prototype.applyScrollForce.call(this, delta);
	        }
	        var partialDelta;
	        if (delta < 0) {
	            if (leadingScrollView) {
	                partialDelta = leadingScrollView.canScroll(delta);
	                this._leadingScrollViewDelta += partialDelta;
	                leadingScrollView.applyScrollForce(partialDelta);
	                delta -= partialDelta;
	            }
	            if (trailingScrollView) {
	                partialDelta = this.canScroll(delta);
	                ScrollController.prototype.applyScrollForce.call(this, partialDelta);
	                this._thisScrollViewDelta += partialDelta;
	                delta -= partialDelta;
	                trailingScrollView.applyScrollForce(delta);
	                this._trailingScrollViewDelta += delta;
	            }
	            else {
	                ScrollController.prototype.applyScrollForce.call(this, delta);
	                this._thisScrollViewDelta += delta;
	            }
	        }
	        else {
	            if (trailingScrollView) {
	                partialDelta = trailingScrollView.canScroll(delta);
	                trailingScrollView.applyScrollForce(partialDelta);
	                this._trailingScrollViewDelta += partialDelta;
	                delta -= partialDelta;
	            }
	            if (leadingScrollView) {
	                partialDelta = this.canScroll(delta);
	                ScrollController.prototype.applyScrollForce.call(this, partialDelta);
	                this._thisScrollViewDelta += partialDelta;
	                delta -= partialDelta;
	                leadingScrollView.applyScrollForce(delta);
	                this._leadingScrollViewDelta += delta;
	            }
	            else {
	                ScrollController.prototype.applyScrollForce.call(this, delta);
	                this._thisScrollViewDelta += delta;
	            }
	        }
	        return this;
	    };

	    /**
	     * Delegates any scroll force to leading/trailing scrollviews.
	     * @private
	     */
	    FlexScrollView.prototype.updateScrollForce = function(prevDelta, newDelta) {
	        var leadingScrollView = this.options.leadingScrollView;
	        var trailingScrollView = this.options.trailingScrollView;
	        if (!leadingScrollView && !trailingScrollView) {
	            return ScrollController.prototype.updateScrollForce.call(this, prevDelta, newDelta);
	        }
	        var partialDelta;
	        var delta = newDelta - prevDelta;
	        if (delta < 0) {
	            if (leadingScrollView) {
	                partialDelta = leadingScrollView.canScroll(delta);
	                leadingScrollView.updateScrollForce(this._leadingScrollViewDelta, this._leadingScrollViewDelta + partialDelta);
	                this._leadingScrollViewDelta += partialDelta;
	                delta -= partialDelta;
	            }
	            if (trailingScrollView && delta) {
	                partialDelta = this.canScroll(delta);
	                ScrollController.prototype.updateScrollForce.call(this, this._thisScrollViewDelta, this._thisScrollViewDelta + partialDelta);
	                this._thisScrollViewDelta += partialDelta;
	                delta -= partialDelta;
	                this._trailingScrollViewDelta += delta;
	                trailingScrollView.updateScrollForce(this._trailingScrollViewDelta, this._trailingScrollViewDelta + delta);
	            }
	            else if (delta) {
	                ScrollController.prototype.updateScrollForce.call(this, this._thisScrollViewDelta, this._thisScrollViewDelta + delta);
	                this._thisScrollViewDelta += delta;
	            }
	        }
	        else {
	            if (trailingScrollView) {
	                partialDelta = trailingScrollView.canScroll(delta);
	                trailingScrollView.updateScrollForce(this._trailingScrollViewDelta, this._trailingScrollViewDelta + partialDelta);
	                this._trailingScrollViewDelta += partialDelta;
	                delta -= partialDelta;
	            }
	            if (leadingScrollView) {
	                partialDelta = this.canScroll(delta);
	                ScrollController.prototype.updateScrollForce.call(this, this._thisScrollViewDelta, this._thisScrollViewDelta + partialDelta);
	                this._thisScrollViewDelta += partialDelta;
	                delta -= partialDelta;
	                leadingScrollView.updateScrollForce(this._leadingScrollViewDelta, this._leadingScrollViewDelta + delta);
	                this._leadingScrollViewDelta += delta;
	            }
	            else {
	                ScrollController.prototype.updateScrollForce.call(this, this._thisScrollViewDelta, this._thisScrollViewDelta + delta);
	                this._thisScrollViewDelta += delta;
	            }
	        }
	        return this;
	    };

	    /**
	     * Delegates any scroll force to leading/trailing scrollviews.
	     * @private
	     */
	    FlexScrollView.prototype.releaseScrollForce = function(delta, velocity) {
	        var leadingScrollView = this.options.leadingScrollView;
	        var trailingScrollView = this.options.trailingScrollView;
	        if (!leadingScrollView && !trailingScrollView) {
	            return ScrollController.prototype.releaseScrollForce.call(this, delta, velocity);
	        }
	        var partialDelta;
	        if (delta < 0) {
	            if (leadingScrollView) {
	                partialDelta = Math.max(this._leadingScrollViewDelta, delta);
	                this._leadingScrollViewDelta -= partialDelta;
	                delta -= partialDelta;
	                leadingScrollView.releaseScrollForce(this._leadingScrollViewDelta, delta ? 0 : velocity);
	            }
	            if (trailingScrollView) {
	                partialDelta = Math.max(this._thisScrollViewDelta, delta);
	                this._thisScrollViewDelta -= partialDelta;
	                delta -= partialDelta;
	                ScrollController.prototype.releaseScrollForce.call(this, this._thisScrollViewDelta, delta ? 0 : velocity);
	                this._trailingScrollViewDelta -= delta;
	                trailingScrollView.releaseScrollForce(this._trailingScrollViewDelta, delta ? velocity : 0);
	            }
	            else {
	                this._thisScrollViewDelta -= delta;
	                ScrollController.prototype.releaseScrollForce.call(this, this._thisScrollViewDelta, delta ? velocity : 0);
	            }
	        }
	        else {
	            if (trailingScrollView) {
	                partialDelta = Math.min(this._trailingScrollViewDelta, delta);
	                this._trailingScrollViewDelta -= partialDelta;
	                delta -= partialDelta;
	                trailingScrollView.releaseScrollForce(this._trailingScrollViewDelta, delta ? 0 : velocity);
	            }
	            if (leadingScrollView) {
	                partialDelta = Math.min(this._thisScrollViewDelta, delta);
	                this._thisScrollViewDelta -= partialDelta;
	                delta -= partialDelta;
	                ScrollController.prototype.releaseScrollForce.call(this, this._thisScrollViewDelta, delta ? 0 : velocity);
	                this._leadingScrollViewDelta -= delta;
	                leadingScrollView.releaseScrollForce(this._leadingScrollViewDelta, delta ? velocity : 0);
	            }
	            else {
	                this._thisScrollViewDelta -= delta;
	                ScrollController.prototype.updateScrollForce.call(this, this._thisScrollViewDelta, delta ? velocity : 0);
	            }
	        }
	        return this;
	    };

	    /**
	     * Overriden commit, in order to emit pull-to-refresh event after
	     * all the rendering has been done.
	     * @private
	     */
	    FlexScrollView.prototype.commit = function(context) {

	        // Call base class
	        var result = ScrollController.prototype.commit.call(this, context);

	        // Emit pull to refresh events after the whole commit call has been executed
	        // so that when the refresh event is received, the FlexScrollView is in a valid state
	        // and can be queried.
	        if (this._pullToRefresh) {
	            for (var i = 0; i < 2; i++) {
	                var pullToRefresh = this._pullToRefresh[i];
	                if (pullToRefresh) {
	                    if ((pullToRefresh.state === PullToRefreshState.ACTIVE) &&
	                        (pullToRefresh.prevState !== PullToRefreshState.ACTIVE)) {
	                        this._eventOutput.emit('refresh', {
	                            target: this,
	                            footer: pullToRefresh.footer
	                        });
	                    }
	                    pullToRefresh.prevState = pullToRefresh.state;
	                }
	            }
	        }
	        return result;
	    };

	    module.exports = FlexScrollView;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	var dispose = __webpack_require__(23)
		// The css code:
		(__webpack_require__(12));
	// Hot Module Replacement
	if(false) {
		module.hot.accept();
		module.hot.dispose(dispose);
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
		"/**\n * This Source Code is licensed under the MIT license. If a copy of the\n * MIT-license was not distributed with this file, You can obtain one at:\n * http://opensource.org/licenses/mit-license.html.\n *\n * @author: Hein Rutjes (IjzerenHein)\n * @license MIT\n * @copyright Gloey Apps, 2015\n */\n\n/* datepicker */\n.ff-datepicker.item {\n  text-align: center;\n}\n.ff-datepicker.item > div {\n  /* align content vertically */\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.ff-datepicker.top, .ff-datepicker.middle, .ff-datepicker.bottom {\n  pointer-events: none;\n}\n\n\n/* tabbar common */\n.ff-tabbar.item {\n  text-align: center;\n  white-space: nowrap;\n  color: #333333;\n}\n.ff-tabbar.item > div {\n  /* align content vertically */\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.ff-tabbar.selectedItemOverlay {\n  border-bottom: 6px solid #1185c3;\n}\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2015
	 */

	/*global define, console*/
	/*eslint no-use-before-define:0, no-console:0 */

	/**
	 * TabBar widget for famo.us.
	 *
	 * ```javascript
	 * var TabBar = require('famous-flex/widgets/TabBar');
	 *
	 * var tabBar = new TabBar({
	 *   classes: ['black'],
	 *   createRenderables: {
	 *     background: true,
	 *     selectedItemOverlay: true,
	 *     spacers: true
	 *   }
	 * });
	 * tabBar.setItems([
	 *   'one',
	 *   'two',
	 *   'three'
	 * ]);
	 * this.add(tabBar); // add to the render-tree
	 *
	 * tabBar.on('tabchange', function(event) {
	 *   console.log('new tab selected: ' + event.index);
	 * });
	 * ```
	 *
	 * The surfaces that are created, use the the css-classes `ff-widget` and `ff-tabbar`.
	 * You can add additional css-classes by using the `classes` option in the constructor.
	 *
	 * Example css styles for a black theme:
	 *
	 * ```css
	 * .ff-tabbar.background.black {
	 *   background-color: #101010;
	 * }
	 * .ff-tabbar.item.black {
	 *   color: #f7f3f7;
	 * }
	 * .ff-tabbar.selectedItemOverlay.black {
	 *   border-bottom: 6px solid #30b6e7;
	 * }
	 * .ff-tabbar.spacer.black:after {
	 *   content: "";
	 *   background-color: #333333;
	 *   width: 100%;
	 *   top: 10px;
	 *   bottom: 10px;
	 *   position: absolute;
	 * }
	 * ```
	 *
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var Surface = __webpack_require__(18);
	    var View = __webpack_require__(39);
	    var LayoutController = __webpack_require__(9);
	    var TabBarLayout = __webpack_require__(40);

	    /**
	     * @class
	     * @extends View
	     * @param {Object} options Configurable options.
	     * @param {Object} [options.tabBarLayout] Layout-options that are passed to the TabBarLayout.
	     * @param {Object} [options.layoutController] Options that are passed to the underlying layout-controller.
	     * @param {Array.String} [options.classes] Css-classes that are added to the surfaces that are created.
	     * @param {Object} [options.createRenderables] Options that specify which renderables should be created.
	     * @alias module:TabBar
	     */
	    function TabBar(options) {
	        View.apply(this, arguments);

	        // init
	        this._selectedItemIndex = -1;
	        options = options || {};
	        this.classes = options.classes ? this.classes.concat(options.classes) : this.classes;

	        // create TabBar layout
	        this.layout = new LayoutController(this.options.layoutController);
	        this.add(this.layout);
	        this.layout.pipe(this._eventOutput);

	        // create initial renderables
	        this._renderables = {
	            items: [],
	            spacers: [],
	            background: _createRenderable.call(this, 'background'),
	            selectedItemOverlay: _createRenderable.call(this, 'selectedItemOverlay')
	        };

	        this.setOptions(this.options);
	    }
	    TabBar.prototype = Object.create(View.prototype);
	    TabBar.prototype.constructor = TabBar;
	    TabBar.prototype.classes = ['ff-widget', 'ff-tabbar'];

	    TabBar.DEFAULT_OPTIONS = {
	        tabBarLayout: {
	            margins: [0, 0, 0, 0],
	            spacing: 0
	        },
	        createRenderables: {
	            item: true,
	            background: false,
	            selectedItemOverlay: false,
	            spacer: false
	        },
	        layoutController: {
	            autoPipeEvents: true,
	            layout: TabBarLayout,
	            flow: true,
	            reflowOnResize: false,
	            nodeSpring: {
	                dampingRatio: 0.8,
	                period: 300
	            }
	        }
	    };

	    /**
	     * Helper function that is called whenever a new item is selected
	     */
	    function _setSelectedItem(index) {
	        if (index !== this._selectedItemIndex) {
	            var oldIndex = this._selectedItemIndex;
	            this._selectedItemIndex = index;
	            this.layout.setLayoutOptions({
	                selectedItemIndex: index
	            });
	            if ((oldIndex >= 0) && this._renderables.items[oldIndex].removeClass){
	                this._renderables.items[oldIndex].removeClass('selected');
	            }
	            if (this._renderables.items[index].addClass) {
	                this._renderables.items[index].addClass('selected');
	            }
	            if (oldIndex >= 0) {
	                this._eventOutput.emit('tabchange', {
	                    target: this,
	                    index: index,
	                    oldIndex: oldIndex,
	                    item: this._renderables.items[index]
	                });
	            }
	        }
	    }

	    /**
	     * Creates a new renderable for the given renderable-id.
	     *
	     */
	    function _createRenderable (id, data) {
	        var option = this.options.createRenderables[id];
	        if (option instanceof Function) {
	            return option.call(this, id, data);
	        } else if (!option) {
	            return undefined;
	        }
	        if ((data !== undefined) && (data instanceof Object)) {
	            return data;
	        }
	        var surface = new Surface({
	            classes: this.classes,
	            content: data ? ('<div>' + data + '</div>') : undefined
	        });
	        surface.addClass(id);
	        if (id === 'item') {
	            if (this.options.tabBarLayout && this.options.tabBarLayout.itemSize && (this.options.tabBarLayout.itemSize === true)) {
	                surface.setSize(this.layout.getDirection() ? [undefined, true] : [true, undefined]);
	            }
	        }
	        return surface;
	    }

	    /**
	     * Patches the TabBar instance's options with the passed-in ones.
	     *
	     * @param {Object} options Configurable options.
	     * @param {Object} [options.tabBarLayout] Layout-options that are passed to the TabBarLayout.
	     * @param {Object} [options.layoutController] Options that are passed to the underlying layout-controller.
	     * @return {TabBar} this
	     */
	    TabBar.prototype.setOptions = function(options) {
	        View.prototype.setOptions.call(this, options);
	        if (!this.layout) {
	            return this;
	        }
	        if (options.tabBarLayout !== undefined) {
	            this.layout.setLayoutOptions(options.tabBarLayout);
	        }
	        if (options.layoutController) {
	            this.layout.setOptions(options.layoutController);
	        }
	        return this;
	    };

	    /**
	     * Sets the items for the tab-bar.
	     *
	     * Example 1:
	     *
	     * ```javascript
	     * var tabBar = new TabBar();
	     * tabBar.setItems([
	     *   'one',
	     *   'two',
	     *   'three'
	     * ]);
	     *```
	     *
	     * Example using Ionic icons:
	     *
	     * ```javascript
	     * var tabBar = new TabBar();
	     * tabBar.setItems([
	     *   '<div class="icon ion-flag"></div>Flag',
	     *   '<div class="icon ion-map"></div>Map',
	     *   '<div class="icon ion-gear-a"></div>Settings'
	     * ]);
	     *```
	     *
	     * CSS:
	     *
	     * ```css
	     * .ff-tabbar.item {
	     *   font-size: 12px;
	     * }
	     * .ff-tabbar.item .icon {
	     *   font-size: 24px;
	     * }
	     * ```
	     *
	     * @param {Array} items Array of tab-item renderables.
	     * @return {TabBar} this
	     */
	    TabBar.prototype.setItems = function(items) {
	        var currentIndex = this._selectedItemIndex;
	        this._selectedItemIndex = -1;
	        this._renderables.items = [];
	        this._renderables.spacers = [];
	        if (items) {
	            for (var i = 0; i < items.length; i++) {
	                var item = _createRenderable.call(this, 'item', items[i]);
	                if (item.on) {
	                    item.on('click', _setSelectedItem.bind(this, i));
	                }
	                this._renderables.items.push(item);
	                if ((i < (items.length - 1))) {
	                    var spacer = _createRenderable.call(this, 'spacer', ' ');
	                    if (spacer) {
	                        this._renderables.spacers.push(spacer);
	                    }
	                }
	            }
	        }
	        this.layout.setDataSource(this._renderables);
	        if (this._renderables.items.length) {
	            _setSelectedItem.call(this, Math.max(Math.min(currentIndex, this._renderables.items.length - 1), 0));
	        }
	        return this;
	    };

	    /**
	     * Get the tab-item renderables for the tab-bar.
	     *
	     * @return {Array} tab-item renderables
	     */
	    TabBar.prototype.getItems = function() {
	        return this._renderables.items;
	    };

	    /**
	     * Get the spec (size, transform, etc..) of the given tab-item.
	     *
	     * @param {Number} index Index of the tab-item.
	     * @return {Spec} item spec
	     */
	    TabBar.prototype.getItemSpec = function(index, normalize) {
	        return this.layout.getSpec(this._renderables.items[index], normalize);
	    };

	    /**
	     * Sets the index of the selected tab.
	     *
	     * @param {Number} index selected index.
	     * @return {TabBar} this
	     */
	    TabBar.prototype.setSelectedItemIndex = function(index) {
	        _setSelectedItem.call(this, index);
	        return this;
	    };

	    /**
	     * Get the index of the selected tab-item.
	     *
	     * @return {Number} selected index
	     */
	    TabBar.prototype.getSelectedItemIndex = function() {
	        return this._selectedItemIndex;
	    };

	    /**
	     * Get the size of the widget.
	     *
	     * @return {Array} size.
	     */
	    TabBar.prototype.getSize = function() {
	        return this.options.size || (this.layout ? this.layout.getSize() : View.prototype.getSize.call(this));
	    };

	    module.exports = TabBar;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @version 1.0.3
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} options The options to override the defaults
	 */
	function FastClick(layer, options) {
		'use strict';
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}


	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0(+?) requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		'use strict';
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		'use strict';
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		'use strict';
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {
		'use strict';

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		'use strict';
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		'use strict';
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
		'use strict';

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		'use strict';
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		'use strict';
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		'use strict';
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {
		'use strict';

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		'use strict';
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		'use strict';
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {
		'use strict';

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		'use strict';
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		'use strict';
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		'use strict';
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} options The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		'use strict';
		return new FastClick(layer, options);
	};


	if (true) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			'use strict';
			return FastClick;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	var dispose = __webpack_require__(23)
		// The css code:
		(__webpack_require__(16));
	// Hot Module Replacement
	if(false) {
		module.hot.accept();
		module.hot.dispose(dispose);
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
		"/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/.\n *\n * Owner: mark@famo.us\n * @license MPL 2.0\n * @copyright Famous Industries, Inc. 2014\n */\n\n.famous-root {\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    padding: 0px;\n    opacity: .999999; /* ios8 hotfix */\n    overflow: hidden;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n}\n\n.famous-container, .famous-group {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    bottom: 0px;\n    right: 0px;\n    overflow: visible;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    -webkit-backface-visibility: visible;\n    backface-visibility: visible;\n    pointer-events: none;\n}\n\n.famous-group {\n    width: 0px;\n    height: 0px;\n    margin: 0px;\n    padding: 0px;\n}\n\n.famous-surface {\n    position: absolute;\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent;\n    pointer-events: auto;\n}\n\n.famous-container-group {\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * The singleton object initiated upon process
	     *   startup which manages all active Context instances, runs
	     *   the render dispatch loop, and acts as a listener and dispatcher
	     *   for events.  All methods are therefore static.
	     *
	     *   On static initialization, window.requestAnimationFrame is called with
	     *     the event loop function.
	     *
	     *   Note: Any window in which Engine runs will prevent default
	     *     scrolling behavior on the 'touchmove' event.
	     *
	     * @static
	     * @class Engine
	     */
	    var Context = __webpack_require__(41);
	    var EventHandler = __webpack_require__(31);
	    var OptionsManager = __webpack_require__(30);

	    var Engine = {};

	    var contexts = [];

	    var nextTickQueue = [];

	    var currentFrame = 0;
	    var nextTickFrame = 0;

	    var deferQueue = [];

	    var lastTime = Date.now();
	    var frameTime;
	    var frameTimeLimit;
	    var loopEnabled = true;
	    var eventForwarders = {};
	    var eventHandler = new EventHandler();

	    var options = {
	        containerType: 'div',
	        containerClass: 'famous-container',
	        fpsCap: undefined,
	        runLoop: true,
	        appMode: true
	    };
	    var optionsManager = new OptionsManager(options);

	    /** @const */
	    var MAX_DEFER_FRAME_TIME = 10;

	    /**
	     * Inside requestAnimationFrame loop, step() is called, which:
	     *   calculates current FPS (throttling loop if it is over limit set in setFPSCap),
	     *   emits dataless 'prerender' event on start of loop,
	     *   calls in order any one-shot functions registered by nextTick on last loop,
	     *   calls Context.update on all Context objects registered,
	     *   and emits dataless 'postrender' event on end of loop.
	     *
	     * @static
	     * @private
	     * @method step
	     */
	    Engine.step = function step() {
	        currentFrame++;
	        nextTickFrame = currentFrame;

	        var currentTime = Date.now();

	        // skip frame if we're over our framerate cap
	        if (frameTimeLimit && currentTime - lastTime < frameTimeLimit) return;

	        var i = 0;

	        frameTime = currentTime - lastTime;
	        lastTime = currentTime;

	        eventHandler.emit('prerender');

	        // empty the queue
	        var numFunctions = nextTickQueue.length;
	        while (numFunctions--) (nextTickQueue.shift())(currentFrame);

	        // limit total execution time for deferrable functions
	        while (deferQueue.length && (Date.now() - currentTime) < MAX_DEFER_FRAME_TIME) {
	            deferQueue.shift().call(this);
	        }

	        for (i = 0; i < contexts.length; i++) contexts[i].update();

	        eventHandler.emit('postrender');
	    };

	    // engage requestAnimationFrame
	    function loop() {
	        if (options.runLoop) {
	            Engine.step();
	            window.requestAnimationFrame(loop);
	        }
	        else loopEnabled = false;
	    }
	    window.requestAnimationFrame(loop);

	    //
	    // Upon main document window resize (unless on an "input" HTML element):
	    //   scroll to the top left corner of the window,
	    //   and for each managed Context: emit the 'resize' event and update its size.
	    // @param {Object=} event document event
	    //
	    function handleResize(event) {
	        for (var i = 0; i < contexts.length; i++) {
	            contexts[i].emit('resize');
	        }
	        eventHandler.emit('resize');
	    }
	    window.addEventListener('resize', handleResize, false);
	    handleResize();

	    /**
	     * Initialize famous for app mode
	     *
	     * @static
	     * @private
	     * @method initialize
	     */
	    function initialize() {
	        // prevent scrolling via browser
	        window.addEventListener('touchmove', function(event) {
	            event.preventDefault();
	        }, true);

	        addRootClasses();
	    }
	    var initialized = false;

	    function addRootClasses() {
	        if (!document.body) {
	            Engine.nextTick(addRootClasses);
	            return;
	        }

	        document.body.classList.add('famous-root');
	        document.documentElement.classList.add('famous-root');
	    }

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    Engine.pipe = function pipe(target) {
	        if (target.subscribe instanceof Function) return target.subscribe(Engine);
	        else return eventHandler.pipe(target);
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe".
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    Engine.unpipe = function unpipe(target) {
	        if (target.unsubscribe instanceof Function) return target.unsubscribe(Engine);
	        else return eventHandler.unpipe(target);
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @static
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    Engine.on = function on(type, handler) {
	        if (!(type in eventForwarders)) {
	            eventForwarders[type] = eventHandler.emit.bind(eventHandler, type);

	            addEngineListener(type, eventForwarders[type]);
	        }
	        return eventHandler.on(type, handler);
	    };

	    function addEngineListener(type, forwarder) {
	        if (!document.body) {
	            Engine.nextTick(addEventListener.bind(this, type, forwarder));
	            return;
	        }

	        document.body.addEventListener(type, forwarder);
	    }

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    Engine.emit = function emit(type, event) {
	        return eventHandler.emit(type, event);
	    };

	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @static
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function} handler function object to remove
	     * @return {EventHandler} internal event handler object (for chaining)
	     */
	    Engine.removeListener = function removeListener(type, handler) {
	        return eventHandler.removeListener(type, handler);
	    };

	    /**
	     * Return the current calculated frames per second of the Engine.
	     *
	     * @static
	     * @method getFPS
	     *
	     * @return {Number} calculated fps
	     */
	    Engine.getFPS = function getFPS() {
	        return 1000 / frameTime;
	    };

	    /**
	     * Set the maximum fps at which the system should run. If internal render
	     *    loop is called at a greater frequency than this FPSCap, Engine will
	     *    throttle render and update until this rate is achieved.
	     *
	     * @static
	     * @method setFPSCap
	     *
	     * @param {Number} fps maximum frames per second
	     */
	    Engine.setFPSCap = function setFPSCap(fps) {
	        frameTimeLimit = Math.floor(1000 / fps);
	    };

	    /**
	     * Return engine options.
	     *
	     * @static
	     * @method getOptions
	     * @param {string} key
	     * @return {Object} engine options
	     */
	    Engine.getOptions = function getOptions(key) {
	        return optionsManager.getOptions(key);
	    };

	    /**
	     * Set engine options
	     *
	     * @static
	     * @method setOptions
	     *
	     * @param {Object} [options] overrides of default options
	     * @param {Number} [options.fpsCap]  maximum fps at which the system should run
	     * @param {boolean} [options.runLoop=true] whether the run loop should continue
	     * @param {string} [options.containerType="div"] type of container element.  Defaults to 'div'.
	     * @param {string} [options.containerClass="famous-container"] type of container element.  Defaults to 'famous-container'.
	     */
	    Engine.setOptions = function setOptions(options) {
	        return optionsManager.setOptions.apply(optionsManager, arguments);
	    };

	    /**
	     * Creates a new Context for rendering and event handling with
	     *    provided document element as top of each tree. This will be tracked by the
	     *    process-wide Engine.
	     *
	     * @static
	     * @method createContext
	     *
	     * @param {Node} el will be top of Famo.us document element tree
	     * @return {Context} new Context within el
	     */
	    Engine.createContext = function createContext(el) {
	        if (!initialized && options.appMode) Engine.nextTick(initialize);

	        var needMountContainer = false;
	        if (!el) {
	            el = document.createElement(options.containerType);
	            el.classList.add(options.containerClass);
	            needMountContainer = true;
	        }

	        var context = new Context(el);
	        Engine.registerContext(context);

	        if (needMountContainer) mount(context, el);

	        return context;
	    };

	    function mount(context, el) {
	        if (!document.body) {
	            Engine.nextTick(mount.bind(this, context, el));
	            return;
	        }

	        document.body.appendChild(el);
	        context.emit('resize');
	    }

	    /**
	     * Registers an existing context to be updated within the run loop.
	     *
	     * @static
	     * @method registerContext
	     *
	     * @param {Context} context Context to register
	     * @return {FamousContext} provided context
	     */
	    Engine.registerContext = function registerContext(context) {
	        contexts.push(context);
	        return context;
	    };

	    /**
	     * Returns a list of all contexts.
	     *
	     * @static
	     * @method getContexts
	     * @return {Array} contexts that are updated on each tick
	     */
	    Engine.getContexts = function getContexts() {
	        return contexts;
	    };

	    /**
	     * Removes a context from the run loop. Note: this does not do any
	     *     cleanup.
	     *
	     * @static
	     * @method deregisterContext
	     *
	     * @param {Context} context Context to deregister
	     */
	    Engine.deregisterContext = function deregisterContext(context) {
	        var i = contexts.indexOf(context);
	        if (i >= 0) contexts.splice(i, 1);
	    };

	    /**
	     * Queue a function to be executed on the next tick of the
	     *    Engine.
	     *
	     * @static
	     * @method nextTick
	     *
	     * @param {function(Object)} fn function accepting window object
	     */
	    Engine.nextTick = function nextTick(fn) {
	        nextTickQueue.push(fn);
	    };

	    /**
	     * Queue a function to be executed sometime soon, at a time that is
	     *    unlikely to affect frame rate.
	     *
	     * @static
	     * @method defer
	     *
	     * @param {Function} fn
	     */
	    Engine.defer = function defer(fn) {
	        deferQueue.push(fn);
	    };

	    optionsManager.on('change', function(data) {
	        if (data.id === 'fpsCap') Engine.setFPSCap(data.value);
	        else if (data.id === 'runLoop') {
	            // kick off the loop only if it was stopped
	            if (!loopEnabled && data.value) {
	                loopEnabled = true;
	                window.requestAnimationFrame(loop);
	            }
	        }
	    });

	    module.exports = Engine;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var ElementOutput = __webpack_require__(42);

	    /**
	     * A base class for viewable content and event
	     *   targets inside a Famo.us application, containing a renderable document
	     *   fragment. Like an HTML div, it can accept internal markup,
	     *   properties, classes, and handle events.
	     *
	     * @class Surface
	     * @constructor
	     *
	     * @param {Object} [options] default option overrides
	     * @param {Array.Number} [options.size] [width, height] in pixels
	     * @param {Array.string} [options.classes] CSS classes to set on target div
	     * @param {Array} [options.properties] string dictionary of CSS properties to set on target div
	     * @param {Array} [options.attributes] string dictionary of HTML attributes to set on target div
	     * @param {string} [options.content] inner (HTML) content of surface
	     */
	    function Surface(options) {
	        ElementOutput.call(this);

	        this.options = {};

	        this.properties = {};
	        this.attributes = {};
	        this.content = '';
	        this.classList = [];
	        this.size = null;

	        this._classesDirty = true;
	        this._stylesDirty = true;
	        this._attributesDirty = true;
	        this._sizeDirty = true;
	        this._contentDirty = true;
	        this._trueSizeCheck = true;

	        this._dirtyClasses = [];

	        if (options) this.setOptions(options);

	        this._currentTarget = null;
	    }
	    Surface.prototype = Object.create(ElementOutput.prototype);
	    Surface.prototype.constructor = Surface;
	    Surface.prototype.elementType = 'div';
	    Surface.prototype.elementClass = 'famous-surface';

	    /**
	     * Set HTML attributes on this Surface. Note that this will cause
	     *    dirtying and thus re-rendering, even if values do not change.
	     *
	     * @method setAttributes
	    * @param {Object} attributes property dictionary of "key" => "value"
	     */
	    Surface.prototype.setAttributes = function setAttributes(attributes) {
	        for (var n in attributes) {
	            if (n === 'style') throw new Error('Cannot set styles via "setAttributes" as it will break Famo.us.  Use "setProperties" instead.');
	            this.attributes[n] = attributes[n];
	        }
	        this._attributesDirty = true;
	    };

	    /**
	     * Get HTML attributes on this Surface.
	     *
	     * @method getAttributes
	     *
	     * @return {Object} Dictionary of this Surface's attributes.
	     */
	    Surface.prototype.getAttributes = function getAttributes() {
	        return this.attributes;
	    };

	    /**
	     * Set CSS-style properties on this Surface. Note that this will cause
	     *    dirtying and thus re-rendering, even if values do not change.
	     *
	     * @method setProperties
	     * @chainable
	     * @param {Object} properties property dictionary of "key" => "value"
	     */
	    Surface.prototype.setProperties = function setProperties(properties) {
	        for (var n in properties) {
	            this.properties[n] = properties[n];
	        }
	        this._stylesDirty = true;
	        return this;
	    };

	    /**
	     * Get CSS-style properties on this Surface.
	     *
	     * @method getProperties
	     *
	     * @return {Object} Dictionary of this Surface's properties.
	     */
	    Surface.prototype.getProperties = function getProperties() {
	        return this.properties;
	    };

	    /**
	     * Add CSS-style class to the list of classes on this Surface. Note
	     *   this will map directly to the HTML property of the actual
	     *   corresponding rendered <div>.
	     *
	     * @method addClass
	     * @chainable
	     * @param {string} className name of class to add
	     */
	    Surface.prototype.addClass = function addClass(className) {
	        if (this.classList.indexOf(className) < 0) {
	            this.classList.push(className);
	            this._classesDirty = true;
	        }
	        return this;
	    };

	    /**
	     * Remove CSS-style class from the list of classes on this Surface.
	     *   Note this will map directly to the HTML property of the actual
	     *   corresponding rendered <div>.
	     *
	     * @method removeClass
	     * @chainable
	     * @param {string} className name of class to remove
	     */
	    Surface.prototype.removeClass = function removeClass(className) {
	        var i = this.classList.indexOf(className);
	        if (i >= 0) {
	            this._dirtyClasses.push(this.classList.splice(i, 1)[0]);
	            this._classesDirty = true;
	        }
	        return this;
	    };

	    /**
	     * Toggle CSS-style class from the list of classes on this Surface.
	     *   Note this will map directly to the HTML property of the actual
	     *   corresponding rendered <div>.
	     *
	     * @method toggleClass
	     * @param {string} className name of class to toggle
	     */
	    Surface.prototype.toggleClass = function toggleClass(className) {
	        var i = this.classList.indexOf(className);
	        if (i >= 0) {
	            this.removeClass(className);
	        } else {
	            this.addClass(className);
	        }
	        return this;
	    };

	    /**
	     * Reset class list to provided dictionary.
	     * @method setClasses
	     * @chainable
	     * @param {Array.string} classList
	     */
	    Surface.prototype.setClasses = function setClasses(classList) {
	        var i = 0;
	        var removal = [];
	        for (i = 0; i < this.classList.length; i++) {
	            if (classList.indexOf(this.classList[i]) < 0) removal.push(this.classList[i]);
	        }
	        for (i = 0; i < removal.length; i++) this.removeClass(removal[i]);
	        // duplicates are already checked by addClass()
	        for (i = 0; i < classList.length; i++) this.addClass(classList[i]);
	        return this;
	    };

	    /**
	     * Get array of CSS-style classes attached to this div.
	     *
	     * @method getClasslist
	     * @return {Array.string} array of class names
	     */
	    Surface.prototype.getClassList = function getClassList() {
	        return this.classList;
	    };

	    /**
	     * Set or overwrite inner (HTML) content of this surface. Note that this
	     *    causes a re-rendering if the content has changed.
	     *
	     * @method setContent
	     * @chainable
	     * @param {string|Document Fragment} content HTML content
	     */
	    Surface.prototype.setContent = function setContent(content) {
	        if (this.content !== content) {
	            this.content = content;
	            this._contentDirty = true;
	        }
	        return this;
	    };

	    /**
	     * Return inner (HTML) content of this surface.
	     *
	     * @method getContent
	     *
	     * @return {string} inner (HTML) content
	     */
	    Surface.prototype.getContent = function getContent() {
	        return this.content;
	    };

	    /**
	     * Set options for this surface
	     *
	     * @method setOptions
	     * @chainable
	     * @param {Object} [options] overrides for default options.  See constructor.
	     */
	    Surface.prototype.setOptions = function setOptions(options) {
	        if (options.size) this.setSize(options.size);
	        if (options.classes) this.setClasses(options.classes);
	        if (options.properties) this.setProperties(options.properties);
	        if (options.attributes) this.setAttributes(options.attributes);
	        if (options.content) this.setContent(options.content);
	        return this;
	    };

	    //  Apply to document all changes from removeClass() since last setup().
	    function _cleanupClasses(target) {
	        for (var i = 0; i < this._dirtyClasses.length; i++) target.classList.remove(this._dirtyClasses[i]);
	        this._dirtyClasses = [];
	    }

	    // Apply values of all Famous-managed styles to the document element.
	    //  These will be deployed to the document on call to #setup().
	    function _applyStyles(target) {
	        for (var n in this.properties) {
	            target.style[n] = this.properties[n];
	        }
	    }

	    // Clear all Famous-managed styles from the document element.
	    // These will be deployed to the document on call to #setup().
	    function _cleanupStyles(target) {
	        for (var n in this.properties) {
	            target.style[n] = '';
	        }
	    }

	    // Apply values of all Famous-managed attributes to the document element.
	    //  These will be deployed to the document on call to #setup().
	    function _applyAttributes(target) {
	        for (var n in this.attributes) {
	            target.setAttribute(n, this.attributes[n]);
	        }
	    }

	    // Clear all Famous-managed attributes from the document element.
	    // These will be deployed to the document on call to #setup().
	    function _cleanupAttributes(target) {
	        for (var n in this.attributes) {
	            target.removeAttribute(n);
	        }
	    }

	    function _xyNotEquals(a, b) {
	        return (a && b) ? (a[0] !== b[0] || a[1] !== b[1]) : a !== b;
	    }

	    /**
	     * One-time setup for an element to be ready for commits to document.
	     *
	     * @private
	     * @method setup
	     *
	     * @param {ElementAllocator} allocator document element pool for this context
	     */
	    Surface.prototype.setup = function setup(allocator) {
	        var target = allocator.allocate(this.elementType);
	        if (this.elementClass) {
	            if (this.elementClass instanceof Array) {
	                for (var i = 0; i < this.elementClass.length; i++) {
	                    target.classList.add(this.elementClass[i]);
	                }
	            }
	            else {
	                target.classList.add(this.elementClass);
	            }
	        }
	        target.style.display = '';
	        this.attach(target);
	        this._opacity = null;
	        this._currentTarget = target;
	        this._stylesDirty = true;
	        this._classesDirty = true;
	        this._attributesDirty = true;
	        this._sizeDirty = true;
	        this._contentDirty = true;
	        this._originDirty = true;
	        this._transformDirty = true;
	    };

	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     */
	    Surface.prototype.commit = function commit(context) {
	        if (!this._currentTarget) this.setup(context.allocator);
	        var target = this._currentTarget;
	        var size = context.size;

	        if (this._classesDirty) {
	            _cleanupClasses.call(this, target);
	            var classList = this.getClassList();
	            for (var i = 0; i < classList.length; i++) target.classList.add(classList[i]);
	            this._classesDirty = false;
	            this._trueSizeCheck = true;
	        }

	        if (this._stylesDirty) {
	            _applyStyles.call(this, target);
	            this._stylesDirty = false;
	            this._trueSizeCheck = true;
	        }

	        if (this._attributesDirty) {
	            _applyAttributes.call(this, target);
	            this._attributesDirty = false;
	            this._trueSizeCheck = true;
	        }

	        if (this.size) {
	            var origSize = context.size;
	            size = [this.size[0], this.size[1]];
	            if (size[0] === undefined) size[0] = origSize[0];
	            if (size[1] === undefined) size[1] = origSize[1];
	            if (size[0] === true || size[1] === true) {
	                if (size[0] === true){
	                    if (this._trueSizeCheck || (this._size[0] === 0)) {
	                        var width = target.offsetWidth;
	                        if (this._size && this._size[0] !== width) {
	                            this._size[0] = width;
	                            this._sizeDirty = true;
	                        }
	                        size[0] = width;
	                    } else {
	                        if (this._size) size[0] = this._size[0];
	                    }
	                }
	                if (size[1] === true){
	                    if (this._trueSizeCheck || (this._size[1] === 0)) {
	                        var height = target.offsetHeight;
	                        if (this._size && this._size[1] !== height) {
	                            this._size[1] = height;
	                            this._sizeDirty = true;
	                        }
	                        size[1] = height;
	                    } else {
	                        if (this._size) size[1] = this._size[1];
	                    }
	                }
	                this._trueSizeCheck = false;
	            }
	        }

	        if (_xyNotEquals(this._size, size)) {
	            if (!this._size) this._size = [0, 0];
	            this._size[0] = size[0];
	            this._size[1] = size[1];

	            this._sizeDirty = true;
	        }

	        if (this._sizeDirty) {
	            if (this._size) {
	                target.style.width = (this.size && this.size[0] === true) ? '' : this._size[0] + 'px';
	                target.style.height = (this.size && this.size[1] === true) ?  '' : this._size[1] + 'px';
	            }

	            this._eventOutput.emit('resize');
	        }

	        if (this._contentDirty) {
	            this.deploy(target);
	            this._eventOutput.emit('deploy');
	            this._contentDirty = false;
	            this._trueSizeCheck = true;
	        }

	        ElementOutput.prototype.commit.call(this, context);
	    };

	    /**
	     *  Remove all Famous-relevant attributes from a document element.
	     *    This is called by SurfaceManager's detach().
	     *    This is in some sense the reverse of .deploy().
	     *
	     * @private
	     * @method cleanup
	     * @param {ElementAllocator} allocator
	     */
	    Surface.prototype.cleanup = function cleanup(allocator) {
	        var i = 0;
	        var target = this._currentTarget;
	        this._eventOutput.emit('recall');
	        this.recall(target);
	        target.style.display = 'none';
	        target.style.opacity = '';
	        target.style.width = '';
	        target.style.height = '';
	        _cleanupStyles.call(this, target);
	        _cleanupAttributes.call(this, target);
	        var classList = this.getClassList();
	        _cleanupClasses.call(this, target);
	        for (i = 0; i < classList.length; i++) target.classList.remove(classList[i]);
	        if (this.elementClass) {
	            if (this.elementClass instanceof Array) {
	                for (i = 0; i < this.elementClass.length; i++) {
	                    target.classList.remove(this.elementClass[i]);
	                }
	            }
	            else {
	                target.classList.remove(this.elementClass);
	            }
	        }
	        this.detach(target);
	        this._currentTarget = null;
	        allocator.deallocate(target);
	    };

	    /**
	     * Place the document element that this component manages into the document.
	     *
	     * @private
	     * @method deploy
	     * @param {Node} target document parent of this container
	     */
	    Surface.prototype.deploy = function deploy(target) {
	        var content = this.getContent();
	        if (content instanceof Node) {
	            while (target.hasChildNodes()) target.removeChild(target.firstChild);
	            target.appendChild(content);
	        }
	        else target.innerHTML = content;
	    };

	    /**
	     * Remove any contained document content associated with this surface
	     *   from the actual document.
	     *
	     * @private
	     * @method recall
	     */
	    Surface.prototype.recall = function recall(target) {
	        var df = document.createDocumentFragment();
	        while (target.hasChildNodes()) df.appendChild(target.firstChild);
	        this.setContent(df);
	    };

	    /**
	     *  Get the x and y dimensions of the surface.
	     *
	     * @method getSize
	     * @return {Array.Number} [x,y] size of surface
	     */
	    Surface.prototype.getSize = function getSize() {
	        return this._size ? this._size : this.size;
	    };

	    /**
	     * Set x and y dimensions of the surface.
	     *
	     * @method setSize
	     * @chainable
	     * @param {Array.Number} size as [width, height]
	     */
	    Surface.prototype.setSize = function setSize(size) {
	        this.size = size ? [size[0], size[1]] : null;
	        this._sizeDirty = true;
	        return this;
	    };

	    module.exports = Surface;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     *  A high-performance static matrix math library used to calculate
	     *    affine transforms on surfaces and other renderables.
	     *    Famo.us uses 4x4 matrices corresponding directly to
	     *    WebKit matrices (column-major order).
	     *
	     *    The internal "type" of a Matrix is a 16-long float array in
	     *    row-major order, with:
	     *    elements [0],[1],[2],[4],[5],[6],[8],[9],[10] forming the 3x3
	     *          transformation matrix;
	     *    elements [12], [13], [14] corresponding to the t_x, t_y, t_z
	     *           translation;
	     *    elements [3], [7], [11] set to 0;
	     *    element [15] set to 1.
	     *    All methods are static.
	     *
	     * @static
	     *
	     * @class Transform
	     */
	    var Transform = {};

	    // WARNING: these matrices correspond to WebKit matrices, which are
	    //    transposed from their math counterparts
	    Transform.precision = 1e-6;
	    Transform.identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

	    /**
	     * Multiply two or more Transform matrix types to return a Transform matrix.
	     *
	     * @method multiply4x4
	     * @static
	     * @param {Transform} a left Transform
	     * @param {Transform} b right Transform
	     * @return {Transform}
	     */
	    Transform.multiply4x4 = function multiply4x4(a, b) {
	        return [
	            a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3],
	            a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3],
	            a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3],
	            a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3],
	            a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7],
	            a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7],
	            a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7],
	            a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7],
	            a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11],
	            a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11],
	            a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11],
	            a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11],
	            a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15],
	            a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15],
	            a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15],
	            a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15]
	        ];
	    };

	    /**
	     * Fast-multiply two or more Transform matrix types to return a
	     *    Matrix, assuming bottom row on each is [0 0 0 1].
	     *
	     * @method multiply
	     * @static
	     * @param {Transform} a left Transform
	     * @param {Transform} b right Transform
	     * @return {Transform}
	     */
	    Transform.multiply = function multiply(a, b) {
	        return [
	            a[0] * b[0] + a[4] * b[1] + a[8] * b[2],
	            a[1] * b[0] + a[5] * b[1] + a[9] * b[2],
	            a[2] * b[0] + a[6] * b[1] + a[10] * b[2],
	            0,
	            a[0] * b[4] + a[4] * b[5] + a[8] * b[6],
	            a[1] * b[4] + a[5] * b[5] + a[9] * b[6],
	            a[2] * b[4] + a[6] * b[5] + a[10] * b[6],
	            0,
	            a[0] * b[8] + a[4] * b[9] + a[8] * b[10],
	            a[1] * b[8] + a[5] * b[9] + a[9] * b[10],
	            a[2] * b[8] + a[6] * b[9] + a[10] * b[10],
	            0,
	            a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12],
	            a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13],
	            a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14],
	            1
	        ];
	    };

	    /**
	     * Return a Transform translated by additional amounts in each
	     *    dimension. This is equivalent to the result of
	     *
	     *    Transform.multiply(Matrix.translate(t[0], t[1], t[2]), m).
	     *
	     * @method thenMove
	     * @static
	     * @param {Transform} m a Transform
	     * @param {Array.Number} t floats delta vector of length 2 or 3
	     * @return {Transform}
	     */
	    Transform.thenMove = function thenMove(m, t) {
	        if (!t[2]) t[2] = 0;
	        return [m[0], m[1], m[2], 0, m[4], m[5], m[6], 0, m[8], m[9], m[10], 0, m[12] + t[0], m[13] + t[1], m[14] + t[2], 1];
	    };

	    /**
	     * Return a Transform matrix which represents the result of a transform matrix
	     *    applied after a move. This is faster than the equivalent multiply.
	     *    This is equivalent to the result of:
	     *
	     *    Transform.multiply(m, Transform.translate(t[0], t[1], t[2])).
	     *
	     * @method moveThen
	     * @static
	     * @param {Array.Number} v vector representing initial movement
	     * @param {Transform} m matrix to apply afterwards
	     * @return {Transform} the resulting matrix
	     */
	    Transform.moveThen = function moveThen(v, m) {
	        if (!v[2]) v[2] = 0;
	        var t0 = v[0] * m[0] + v[1] * m[4] + v[2] * m[8];
	        var t1 = v[0] * m[1] + v[1] * m[5] + v[2] * m[9];
	        var t2 = v[0] * m[2] + v[1] * m[6] + v[2] * m[10];
	        return Transform.thenMove(m, [t0, t1, t2]);
	    };

	    /**
	     * Return a Transform which represents a translation by specified
	     *    amounts in each dimension.
	     *
	     * @method translate
	     * @static
	     * @param {Number} x x translation
	     * @param {Number} y y translation
	     * @param {Number} z z translation
	     * @return {Transform}
	     */
	    Transform.translate = function translate(x, y, z) {
	        if (z === undefined) z = 0;
	        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
	    };

	    /**
	     * Return a Transform scaled by a vector in each
	     *    dimension. This is a more performant equivalent to the result of
	     *
	     *    Transform.multiply(Transform.scale(s[0], s[1], s[2]), m).
	     *
	     * @method thenScale
	     * @static
	     * @param {Transform} m a matrix
	     * @param {Array.Number} s delta vector (array of floats &&
	     *    array.length == 3)
	     * @return {Transform}
	     */
	    Transform.thenScale = function thenScale(m, s) {
	        return [
	            s[0] * m[0], s[1] * m[1], s[2] * m[2], 0,
	            s[0] * m[4], s[1] * m[5], s[2] * m[6], 0,
	            s[0] * m[8], s[1] * m[9], s[2] * m[10], 0,
	            s[0] * m[12], s[1] * m[13], s[2] * m[14], 1
	        ];
	    };

	    /**
	     * Return a Transform which represents a scale by specified amounts
	     *    in each dimension.
	     *
	     * @method scale
	     * @static
	     * @param {Number} x x scale factor
	     * @param {Number} y y scale factor
	     * @param {Number} z z scale factor
	     * @return {Transform}
	     */
	    Transform.scale = function scale(x, y, z) {
	        if (z === undefined) z = 1;
	        if (y === undefined) y = x;
	        return [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the x axis.
	     *
	     * @method rotateX
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateX = function rotateX(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [1, 0, 0, 0, 0, cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the y axis.
	     *
	     * @method rotateY
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateY = function rotateY(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [cosTheta, 0, -sinTheta, 0, 0, 1, 0, 0, sinTheta, 0, cosTheta, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the z axis.
	     *
	     * @method rotateZ
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateZ = function rotateZ(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform which represents composed clockwise
	     *    rotations along each of the axes. Equivalent to the result of
	     *    Matrix.multiply(rotateX(phi), rotateY(theta), rotateZ(psi)).
	     *
	     * @method rotate
	     * @static
	     * @param {Number} phi radians to rotate about the positive x axis
	     * @param {Number} theta radians to rotate about the positive y axis
	     * @param {Number} psi radians to rotate about the positive z axis
	     * @return {Transform}
	     */
	    Transform.rotate = function rotate(phi, theta, psi) {
	        var cosPhi = Math.cos(phi);
	        var sinPhi = Math.sin(phi);
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        var cosPsi = Math.cos(psi);
	        var sinPsi = Math.sin(psi);
	        var result = [
	            cosTheta * cosPsi,
	            cosPhi * sinPsi + sinPhi * sinTheta * cosPsi,
	            sinPhi * sinPsi - cosPhi * sinTheta * cosPsi,
	            0,
	            -cosTheta * sinPsi,
	            cosPhi * cosPsi - sinPhi * sinTheta * sinPsi,
	            sinPhi * cosPsi + cosPhi * sinTheta * sinPsi,
	            0,
	            sinTheta,
	            -sinPhi * cosTheta,
	            cosPhi * cosTheta,
	            0,
	            0, 0, 0, 1
	        ];
	        return result;
	    };

	    /**
	     * Return a Transform which represents an axis-angle rotation
	     *
	     * @method rotateAxis
	     * @static
	     * @param {Array.Number} v unit vector representing the axis to rotate about
	     * @param {Number} theta radians to rotate clockwise about the axis
	     * @return {Transform}
	     */
	    Transform.rotateAxis = function rotateAxis(v, theta) {
	        var sinTheta = Math.sin(theta);
	        var cosTheta = Math.cos(theta);
	        var verTheta = 1 - cosTheta; // versine of theta

	        var xxV = v[0] * v[0] * verTheta;
	        var xyV = v[0] * v[1] * verTheta;
	        var xzV = v[0] * v[2] * verTheta;
	        var yyV = v[1] * v[1] * verTheta;
	        var yzV = v[1] * v[2] * verTheta;
	        var zzV = v[2] * v[2] * verTheta;
	        var xs = v[0] * sinTheta;
	        var ys = v[1] * sinTheta;
	        var zs = v[2] * sinTheta;

	        var result = [
	            xxV + cosTheta, xyV + zs, xzV - ys, 0,
	            xyV - zs, yyV + cosTheta, yzV + xs, 0,
	            xzV + ys, yzV - xs, zzV + cosTheta, 0,
	            0, 0, 0, 1
	        ];
	        return result;
	    };

	    /**
	     * Return a Transform which represents a transform matrix applied about
	     * a separate origin point.
	     *
	     * @method aboutOrigin
	     * @static
	     * @param {Array.Number} v origin point to apply matrix
	     * @param {Transform} m matrix to apply
	     * @return {Transform}
	     */
	    Transform.aboutOrigin = function aboutOrigin(v, m) {
	        var t0 = v[0] - (v[0] * m[0] + v[1] * m[4] + v[2] * m[8]);
	        var t1 = v[1] - (v[0] * m[1] + v[1] * m[5] + v[2] * m[9]);
	        var t2 = v[2] - (v[0] * m[2] + v[1] * m[6] + v[2] * m[10]);
	        return Transform.thenMove(m, [t0, t1, t2]);
	    };

	    /**
	     * Return a Transform representation of a skew transformation
	     *
	     * @method skew
	     * @static
	     * @param {Number} phi scale factor skew in the x axis
	     * @param {Number} theta scale factor skew in the y axis
	     * @param {Number} psi scale factor skew in the z axis
	     * @return {Transform}
	     */
	    Transform.skew = function skew(phi, theta, psi) {
	        return [1, Math.tan(theta), 0, 0, Math.tan(psi), 1, 0, 0, 0, Math.tan(phi), 1, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform representation of a skew in the x-direction
	     *
	     * @method skewX
	     * @static
	     * @param {Number} angle the angle between the top and left sides
	     * @return {Transform}
	     */
	    Transform.skewX = function skewX(angle) {
	        return [1, 0, 0, 0, Math.tan(angle), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform representation of a skew in the y-direction
	     *
	     * @method skewY
	     * @static
	     * @param {Number} angle the angle between the top and right sides
	     * @return {Transform}
	     */
	    Transform.skewY = function skewY(angle) {
	        return [1, Math.tan(angle), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Returns a perspective Transform matrix
	     *
	     * @method perspective
	     * @static
	     * @param {Number} focusZ z position of focal point
	     * @return {Transform}
	     */
	    Transform.perspective = function perspective(focusZ) {
	        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -1 / focusZ, 0, 0, 0, 1];
	    };

	    /**
	     * Return translation vector component of given Transform
	     *
	     * @method getTranslate
	     * @static
	     * @param {Transform} m Transform
	     * @return {Array.Number} the translation vector [t_x, t_y, t_z]
	     */
	    Transform.getTranslate = function getTranslate(m) {
	        return [m[12], m[13], m[14]];
	    };

	    /**
	     * Return inverse affine transform for given Transform.
	     *   Note: This assumes m[3] = m[7] = m[11] = 0, and m[15] = 1.
	     *   Will provide incorrect results if not invertible or preconditions not met.
	     *
	     * @method inverse
	     * @static
	     * @param {Transform} m Transform
	     * @return {Transform}
	     */
	    Transform.inverse = function inverse(m) {
	        // only need to consider 3x3 section for affine
	        var c0 = m[5] * m[10] - m[6] * m[9];
	        var c1 = m[4] * m[10] - m[6] * m[8];
	        var c2 = m[4] * m[9] - m[5] * m[8];
	        var c4 = m[1] * m[10] - m[2] * m[9];
	        var c5 = m[0] * m[10] - m[2] * m[8];
	        var c6 = m[0] * m[9] - m[1] * m[8];
	        var c8 = m[1] * m[6] - m[2] * m[5];
	        var c9 = m[0] * m[6] - m[2] * m[4];
	        var c10 = m[0] * m[5] - m[1] * m[4];
	        var detM = m[0] * c0 - m[1] * c1 + m[2] * c2;
	        var invD = 1 / detM;
	        var result = [
	            invD * c0, -invD * c4, invD * c8, 0,
	            -invD * c1, invD * c5, -invD * c9, 0,
	            invD * c2, -invD * c6, invD * c10, 0,
	            0, 0, 0, 1
	        ];
	        result[12] = -m[12] * result[0] - m[13] * result[4] - m[14] * result[8];
	        result[13] = -m[12] * result[1] - m[13] * result[5] - m[14] * result[9];
	        result[14] = -m[12] * result[2] - m[13] * result[6] - m[14] * result[10];
	        return result;
	    };

	    /**
	     * Returns the transpose of a 4x4 matrix
	     *
	     * @method transpose
	     * @static
	     * @param {Transform} m matrix
	     * @return {Transform} the resulting transposed matrix
	     */
	    Transform.transpose = function transpose(m) {
	        return [m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]];
	    };

	    function _normSquared(v) {
	        return (v.length === 2) ? v[0] * v[0] + v[1] * v[1] : v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
	    }
	    function _norm(v) {
	        return Math.sqrt(_normSquared(v));
	    }
	    function _sign(n) {
	        return (n < 0) ? -1 : 1;
	    }

	    /**
	     * Decompose Transform into separate .translate, .rotate, .scale,
	     *    and .skew components.
	     *
	     * @method interpret
	     * @static
	     * @param {Transform} M transform matrix
	     * @return {Object} matrix spec object with component matrices .translate,
	     *    .rotate, .scale, .skew
	     */
	    Transform.interpret = function interpret(M) {

	        // QR decomposition via Householder reflections
	        //FIRST ITERATION

	        //default Q1 to the identity matrix;
	        var x = [M[0], M[1], M[2]];                // first column vector
	        var sgn = _sign(x[0]);                     // sign of first component of x (for stability)
	        var xNorm = _norm(x);                      // norm of first column vector
	        var v = [x[0] + sgn * xNorm, x[1], x[2]];  // v = x + sign(x[0])|x|e1
	        var mult = 2 / _normSquared(v);            // mult = 2/v'v

	        //bail out if our Matrix is singular
	        if (mult >= Infinity) {
	            return {translate: Transform.getTranslate(M), rotate: [0, 0, 0], scale: [0, 0, 0], skew: [0, 0, 0]};
	        }

	        //evaluate Q1 = I - 2vv'/v'v
	        var Q1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

	        //diagonals
	        Q1[0]  = 1 - mult * v[0] * v[0];    // 0,0 entry
	        Q1[5]  = 1 - mult * v[1] * v[1];    // 1,1 entry
	        Q1[10] = 1 - mult * v[2] * v[2];    // 2,2 entry

	        //upper diagonal
	        Q1[1] = -mult * v[0] * v[1];        // 0,1 entry
	        Q1[2] = -mult * v[0] * v[2];        // 0,2 entry
	        Q1[6] = -mult * v[1] * v[2];        // 1,2 entry

	        //lower diagonal
	        Q1[4] = Q1[1];                      // 1,0 entry
	        Q1[8] = Q1[2];                      // 2,0 entry
	        Q1[9] = Q1[6];                      // 2,1 entry

	        //reduce first column of M
	        var MQ1 = Transform.multiply(Q1, M);

	        //SECOND ITERATION on (1,1) minor
	        var x2 = [MQ1[5], MQ1[6]];
	        var sgn2 = _sign(x2[0]);                    // sign of first component of x (for stability)
	        var x2Norm = _norm(x2);                     // norm of first column vector
	        var v2 = [x2[0] + sgn2 * x2Norm, x2[1]];    // v = x + sign(x[0])|x|e1
	        var mult2 = 2 / _normSquared(v2);           // mult = 2/v'v

	        //evaluate Q2 = I - 2vv'/v'v
	        var Q2 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

	        //diagonal
	        Q2[5]  = 1 - mult2 * v2[0] * v2[0]; // 1,1 entry
	        Q2[10] = 1 - mult2 * v2[1] * v2[1]; // 2,2 entry

	        //off diagonals
	        Q2[6] = -mult2 * v2[0] * v2[1];     // 2,1 entry
	        Q2[9] = Q2[6];                      // 1,2 entry

	        //calc QR decomposition. Q = Q1*Q2, R = Q'*M
	        var Q = Transform.multiply(Q2, Q1);      //note: really Q transpose
	        var R = Transform.multiply(Q, M);

	        //remove negative scaling
	        var remover = Transform.scale(R[0] < 0 ? -1 : 1, R[5] < 0 ? -1 : 1, R[10] < 0 ? -1 : 1);
	        R = Transform.multiply(R, remover);
	        Q = Transform.multiply(remover, Q);

	        //decompose into rotate/scale/skew matrices
	        var result = {};
	        result.translate = Transform.getTranslate(M);
	        result.rotate = [Math.atan2(-Q[6], Q[10]), Math.asin(Q[2]), Math.atan2(-Q[1], Q[0])];
	        if (!result.rotate[0]) {
	            result.rotate[0] = 0;
	            result.rotate[2] = Math.atan2(Q[4], Q[5]);
	        }
	        result.scale = [R[0], R[5], R[10]];
	        result.skew = [Math.atan2(R[9], result.scale[2]), Math.atan2(R[8], result.scale[2]), Math.atan2(R[4], result.scale[0])];

	        //double rotation workaround
	        if (Math.abs(result.rotate[0]) + Math.abs(result.rotate[2]) > 1.5 * Math.PI) {
	            result.rotate[1] = Math.PI - result.rotate[1];
	            if (result.rotate[1] > Math.PI) result.rotate[1] -= 2 * Math.PI;
	            if (result.rotate[1] < -Math.PI) result.rotate[1] += 2 * Math.PI;
	            if (result.rotate[0] < 0) result.rotate[0] += Math.PI;
	            else result.rotate[0] -= Math.PI;
	            if (result.rotate[2] < 0) result.rotate[2] += Math.PI;
	            else result.rotate[2] -= Math.PI;
	        }

	        return result;
	    };

	    /**
	     * Weighted average between two matrices by averaging their
	     *     translation, rotation, scale, skew components.
	     *     f(M1,M2,t) = (1 - t) * M1 + t * M2
	     *
	     * @method average
	     * @static
	     * @param {Transform} M1 f(M1,M2,0) = M1
	     * @param {Transform} M2 f(M1,M2,1) = M2
	     * @param {Number} t
	     * @return {Transform}
	     */
	    Transform.average = function average(M1, M2, t) {
	        t = (t === undefined) ? 0.5 : t;
	        var specM1 = Transform.interpret(M1);
	        var specM2 = Transform.interpret(M2);

	        var specAvg = {
	            translate: [0, 0, 0],
	            rotate: [0, 0, 0],
	            scale: [0, 0, 0],
	            skew: [0, 0, 0]
	        };

	        for (var i = 0; i < 3; i++) {
	            specAvg.translate[i] = (1 - t) * specM1.translate[i] + t * specM2.translate[i];
	            specAvg.rotate[i] = (1 - t) * specM1.rotate[i] + t * specM2.rotate[i];
	            specAvg.scale[i] = (1 - t) * specM1.scale[i] + t * specM2.scale[i];
	            specAvg.skew[i] = (1 - t) * specM1.skew[i] + t * specM2.skew[i];
	        }
	        return Transform.build(specAvg);
	    };

	    /**
	     * Compose .translate, .rotate, .scale, .skew components into
	     * Transform matrix
	     *
	     * @method build
	     * @static
	     * @param {matrixSpec} spec object with component matrices .translate,
	     *    .rotate, .scale, .skew
	     * @return {Transform} composed transform
	     */
	    Transform.build = function build(spec) {
	        var scaleMatrix = Transform.scale(spec.scale[0], spec.scale[1], spec.scale[2]);
	        var skewMatrix = Transform.skew(spec.skew[0], spec.skew[1], spec.skew[2]);
	        var rotateMatrix = Transform.rotate(spec.rotate[0], spec.rotate[1], spec.rotate[2]);
	        return Transform.thenMove(Transform.multiply(Transform.multiply(rotateMatrix, skewMatrix), scaleMatrix), spec.translate);
	    };

	    /**
	     * Determine if two Transforms are component-wise equal
	     *   Warning: breaks on perspective Transforms
	     *
	     * @method equals
	     * @static
	     * @param {Transform} a matrix
	     * @param {Transform} b matrix
	     * @return {boolean}
	     */
	    Transform.equals = function equals(a, b) {
	        return !Transform.notEquals(a, b);
	    };

	    /**
	     * Determine if two Transforms are component-wise unequal
	     *   Warning: breaks on perspective Transforms
	     *
	     * @method notEquals
	     * @static
	     * @param {Transform} a matrix
	     * @param {Transform} b matrix
	     * @return {boolean}
	     */
	    Transform.notEquals = function notEquals(a, b) {
	        if (a === b) return false;

	        // shortci
	        return !(a && b) ||
	            a[12] !== b[12] || a[13] !== b[13] || a[14] !== b[14] ||
	            a[0] !== b[0] || a[1] !== b[1] || a[2] !== b[2] ||
	            a[4] !== b[4] || a[5] !== b[5] || a[6] !== b[6] ||
	            a[8] !== b[8] || a[9] !== b[9] || a[10] !== b[10];
	    };

	    /**
	     * Constrain angle-trio components to range of [-pi, pi).
	     *
	     * @method normalizeRotation
	     * @static
	     * @param {Array.Number} rotation phi, theta, psi (array of floats
	     *    && array.length == 3)
	     * @return {Array.Number} new phi, theta, psi triplet
	     *    (array of floats && array.length == 3)
	     */
	    Transform.normalizeRotation = function normalizeRotation(rotation) {
	        var result = rotation.slice(0);
	        if (result[0] === Math.PI * 0.5 || result[0] === -Math.PI * 0.5) {
	            result[0] = -result[0];
	            result[1] = Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        if (result[0] > Math.PI * 0.5) {
	            result[0] = result[0] - Math.PI;
	            result[1] = Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        if (result[0] < -Math.PI * 0.5) {
	            result[0] = result[0] + Math.PI;
	            result[1] = -Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        while (result[1] < -Math.PI) result[1] += 2 * Math.PI;
	        while (result[1] >= Math.PI) result[1] -= 2 * Math.PI;
	        while (result[2] < -Math.PI) result[2] += 2 * Math.PI;
	        while (result[2] >= Math.PI) result[2] -= 2 * Math.PI;
	        return result;
	    };

	    /**
	     * (Property) Array defining a translation forward in z by 1
	     *
	     * @property {array} inFront
	     * @static
	     * @final
	     */
	    Transform.inFront = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1e-3, 1];

	    /**
	     * (Property) Array defining a translation backwards in z by 1
	     *
	     * @property {array} behind
	     * @static
	     * @final
	     */
	    Transform.behind = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1e-3, 1];

	    module.exports = Transform;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Entity = __webpack_require__(28);
	    var SpecParser = __webpack_require__(47);

	    /**
	     * A wrapper for inserting a renderable component (like a Modifer or
	     *   Surface) into the render tree.
	     *
	     * @class RenderNode
	     * @constructor
	     *
	     * @param {Object} object Target renderable component
	     */
	    function RenderNode(object) {
	        this._object = null;
	        this._child = null;
	        this._hasMultipleChildren = false;
	        this._isRenderable = false;
	        this._isModifier = false;

	        this._resultCache = {};
	        this._prevResults = {};

	        this._childResult = null;

	        if (object) this.set(object);
	    }

	    /**
	     * Append a renderable to the list of this node's children.
	     *   This produces a new RenderNode in the tree.
	     *   Note: Does not double-wrap if child is a RenderNode already.
	     *
	     * @method add
	     * @param {Object} child renderable object
	     * @return {RenderNode} new render node wrapping child
	     */
	    RenderNode.prototype.add = function add(child) {
	        var childNode = (child instanceof RenderNode) ? child : new RenderNode(child);
	        if (this._child instanceof Array) this._child.push(childNode);
	        else if (this._child) {
	            this._child = [this._child, childNode];
	            this._hasMultipleChildren = true;
	            this._childResult = []; // to be used later
	        }
	        else this._child = childNode;

	        return childNode;
	    };

	    /**
	     * Return the single wrapped object.  Returns null if this node has multiple child nodes.
	     *
	     * @method get
	     *
	     * @return {Ojbect} contained renderable object
	     */
	    RenderNode.prototype.get = function get() {
	        return this._object || (this._hasMultipleChildren ? null : (this._child ? this._child.get() : null));
	    };

	    /**
	     * Overwrite the list of children to contain the single provided object
	     *
	     * @method set
	     * @param {Object} child renderable object
	     * @return {RenderNode} this render node, or child if it is a RenderNode
	     */
	    RenderNode.prototype.set = function set(child) {
	        this._childResult = null;
	        this._hasMultipleChildren = false;
	        this._isRenderable = child.render ? true : false;
	        this._isModifier = child.modify ? true : false;
	        this._object = child;
	        this._child = null;
	        if (child instanceof RenderNode) return child;
	        else return this;
	    };

	    /**
	     * Get render size of contained object.
	     *
	     * @method getSize
	     * @return {Array.Number} size of this or size of single child.
	     */
	    RenderNode.prototype.getSize = function getSize() {
	        var result = null;
	        var target = this.get();
	        if (target && target.getSize) result = target.getSize();
	        if (!result && this._child && this._child.getSize) result = this._child.getSize();
	        return result;
	    };

	    // apply results of rendering this subtree to the document
	    function _applyCommit(spec, context, cacheStorage) {
	        var result = SpecParser.parse(spec, context);
	        var keys = Object.keys(result);
	        for (var i = 0; i < keys.length; i++) {
	            var id = keys[i];
	            var childNode = Entity.get(id);
	            var commitParams = result[id];
	            commitParams.allocator = context.allocator;
	            var commitResult = childNode.commit(commitParams);
	            if (commitResult) _applyCommit(commitResult, context, cacheStorage);
	            else cacheStorage[id] = commitParams;
	        }
	    }

	    /**
	     * Commit the content change from this node to the document.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context render context
	     */
	    RenderNode.prototype.commit = function commit(context) {
	        // free up some divs from the last loop
	        var prevKeys = Object.keys(this._prevResults);
	        for (var i = 0; i < prevKeys.length; i++) {
	            var id = prevKeys[i];
	            if (this._resultCache[id] === undefined) {
	                var object = Entity.get(id);
	                if (object.cleanup) object.cleanup(context.allocator);
	            }
	        }

	        this._prevResults = this._resultCache;
	        this._resultCache = {};
	        _applyCommit(this.render(), context, this._resultCache);
	    };

	    /**
	     * Generate a render spec from the contents of the wrapped component.
	     *
	     * @private
	     * @method render
	     *
	     * @return {Object} render specification for the component subtree
	     *    only under this node.
	     */
	    RenderNode.prototype.render = function render() {
	        if (this._isRenderable) return this._object.render();

	        var result = null;
	        if (this._hasMultipleChildren) {
	            result = this._childResult;
	            var children = this._child;
	            for (var i = 0; i < children.length; i++) {
	                result[i] = children[i].render();
	            }
	        }
	        else if (this._child) result = this._child.render();

	        return this._isModifier ? this._object.modify(result) : result;
	    };

	    module.exports = RenderNode;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * A library of curves which map an animation explicitly as a function of time.
	     *
	     * @class Easing
	     */
	    var Easing = {

	        /**
	         * @property inQuad
	         * @static
	         */
	        inQuad: function(t) {
	            return t*t;
	        },

	        /**
	         * @property outQuad
	         * @static
	         */
	        outQuad: function(t) {
	            return -(t-=1)*t+1;
	        },

	        /**
	         * @property inOutQuad
	         * @static
	         */
	        inOutQuad: function(t) {
	            if ((t/=.5) < 1) return .5*t*t;
	            return -.5*((--t)*(t-2) - 1);
	        },

	        /**
	         * @property inCubic
	         * @static
	         */
	        inCubic: function(t) {
	            return t*t*t;
	        },

	        /**
	         * @property outCubic
	         * @static
	         */
	        outCubic: function(t) {
	            return ((--t)*t*t + 1);
	        },

	        /**
	         * @property inOutCubic
	         * @static
	         */
	        inOutCubic: function(t) {
	            if ((t/=.5) < 1) return .5*t*t*t;
	            return .5*((t-=2)*t*t + 2);
	        },

	        /**
	         * @property inQuart
	         * @static
	         */
	        inQuart: function(t) {
	            return t*t*t*t;
	        },

	        /**
	         * @property outQuart
	         * @static
	         */
	        outQuart: function(t) {
	            return -((--t)*t*t*t - 1);
	        },

	        /**
	         * @property inOutQuart
	         * @static
	         */
	        inOutQuart: function(t) {
	            if ((t/=.5) < 1) return .5*t*t*t*t;
	            return -.5 * ((t-=2)*t*t*t - 2);
	        },

	        /**
	         * @property inQuint
	         * @static
	         */
	        inQuint: function(t) {
	            return t*t*t*t*t;
	        },

	        /**
	         * @property outQuint
	         * @static
	         */
	        outQuint: function(t) {
	            return ((--t)*t*t*t*t + 1);
	        },

	        /**
	         * @property inOutQuint
	         * @static
	         */
	        inOutQuint: function(t) {
	            if ((t/=.5) < 1) return .5*t*t*t*t*t;
	            return .5*((t-=2)*t*t*t*t + 2);
	        },

	        /**
	         * @property inSine
	         * @static
	         */
	        inSine: function(t) {
	            return -1.0*Math.cos(t * (Math.PI/2)) + 1.0;
	        },

	        /**
	         * @property outSine
	         * @static
	         */
	        outSine: function(t) {
	            return Math.sin(t * (Math.PI/2));
	        },

	        /**
	         * @property inOutSine
	         * @static
	         */
	        inOutSine: function(t) {
	            return -.5*(Math.cos(Math.PI*t) - 1);
	        },

	        /**
	         * @property inExpo
	         * @static
	         */
	        inExpo: function(t) {
	            return (t===0) ? 0.0 : Math.pow(2, 10 * (t - 1));
	        },

	        /**
	         * @property outExpo
	         * @static
	         */
	        outExpo: function(t) {
	            return (t===1.0) ? 1.0 : (-Math.pow(2, -10 * t) + 1);
	        },

	        /**
	         * @property inOutExpo
	         * @static
	         */
	        inOutExpo: function(t) {
	            if (t===0) return 0.0;
	            if (t===1.0) return 1.0;
	            if ((t/=.5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
	            return .5 * (-Math.pow(2, -10 * --t) + 2);
	        },

	        /**
	         * @property inCirc
	         * @static
	         */
	        inCirc: function(t) {
	            return -(Math.sqrt(1 - t*t) - 1);
	        },

	        /**
	         * @property outCirc
	         * @static
	         */
	        outCirc: function(t) {
	            return Math.sqrt(1 - (--t)*t);
	        },

	        /**
	         * @property inOutCirc
	         * @static
	         */
	        inOutCirc: function(t) {
	            if ((t/=.5) < 1) return -.5 * (Math.sqrt(1 - t*t) - 1);
	            return .5 * (Math.sqrt(1 - (t-=2)*t) + 1);
	        },

	        /**
	         * @property inElastic
	         * @static
	         */
	        inElastic: function(t) {
	            var s=1.70158;var p=0;var a=1.0;
	            if (t===0) return 0.0;  if (t===1) return 1.0;  if (!p) p=.3;
	            s = p/(2*Math.PI) * Math.asin(1.0/a);
	            return -(a*Math.pow(2,10*(t-=1)) * Math.sin((t-s)*(2*Math.PI)/ p));
	        },

	        /**
	         * @property outElastic
	         * @static
	         */
	        outElastic: function(t) {
	            var s=1.70158;var p=0;var a=1.0;
	            if (t===0) return 0.0;  if (t===1) return 1.0;  if (!p) p=.3;
	            s = p/(2*Math.PI) * Math.asin(1.0/a);
	            return a*Math.pow(2,-10*t) * Math.sin((t-s)*(2*Math.PI)/p) + 1.0;
	        },

	        /**
	         * @property inOutElastic
	         * @static
	         */
	        inOutElastic: function(t) {
	            var s=1.70158;var p=0;var a=1.0;
	            if (t===0) return 0.0;  if ((t/=.5)===2) return 1.0;  if (!p) p=(.3*1.5);
	            s = p/(2*Math.PI) * Math.asin(1.0/a);
	            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin((t-s)*(2*Math.PI)/p));
	            return a*Math.pow(2,-10*(t-=1)) * Math.sin((t-s)*(2*Math.PI)/p)*.5 + 1.0;
	        },

	        /**
	         * @property inBack
	         * @static
	         */
	        inBack: function(t, s) {
	            if (s === undefined) s = 1.70158;
	            return t*t*((s+1)*t - s);
	        },

	        /**
	         * @property outBack
	         * @static
	         */
	        outBack: function(t, s) {
	            if (s === undefined) s = 1.70158;
	            return ((--t)*t*((s+1)*t + s) + 1);
	        },

	        /**
	         * @property inOutBack
	         * @static
	         */
	        inOutBack: function(t, s) {
	            if (s === undefined) s = 1.70158;
	            if ((t/=.5) < 1) return .5*(t*t*(((s*=(1.525))+1)*t - s));
	            return .5*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2);
	        },

	        /**
	         * @property inBounce
	         * @static
	         */
	        inBounce: function(t) {
	            return 1.0 - Easing.outBounce(1.0-t);
	        },

	        /**
	         * @property outBounce
	         * @static
	         */
	        outBounce: function(t) {
	            if (t < (1/2.75)) {
	                return (7.5625*t*t);
	            } else if (t < (2/2.75)) {
	                return (7.5625*(t-=(1.5/2.75))*t + .75);
	            } else if (t < (2.5/2.75)) {
	                return (7.5625*(t-=(2.25/2.75))*t + .9375);
	            } else {
	                return (7.5625*(t-=(2.625/2.75))*t + .984375);
	            }
	        },

	        /**
	         * @property inOutBounce
	         * @static
	         */
	        inOutBounce: function(t) {
	            if (t < .5) return Easing.inBounce(t*2) * .5;
	            return Easing.outBounce(t*2-1.0) * .5 + .5;
	        }
	    };

	    module.exports = Easing;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Modifier = __webpack_require__(48);
	    var Transform = __webpack_require__(19);
	    var Transitionable = __webpack_require__(49);
	    var TransitionableTransform = __webpack_require__(50);

	    /**
	     *  A collection of visual changes to be
	     *    applied to another renderable component, strongly coupled with the state that defines
	     *    those changes. This collection includes a
	     *    transform matrix, an opacity constant, a size, an origin specifier, and an alignment specifier.
	     *    StateModifier objects can be added to any RenderNode or object
	     *    capable of displaying renderables.  The StateModifier's children and descendants
	     *    are transformed by the amounts specified in the modifier's properties.
	     *
	     * @class StateModifier
	     * @constructor
	     * @param {Object} [options] overrides of default options
	     * @param {Transform} [options.transform] affine transformation matrix
	     * @param {Number} [options.opacity]
	     * @param {Array.Number} [options.origin] origin adjustment
	     * @param {Array.Number} [options.align] align adjustment
	     * @param {Array.Number} [options.size] size to apply to descendants
	     * @param {Array.Number} [options.propportions] proportions to apply to descendants
	     */
	    function StateModifier(options) {
	        this._transformState = new TransitionableTransform(Transform.identity);
	        this._opacityState = new Transitionable(1);
	        this._originState = new Transitionable([0, 0]);
	        this._alignState = new Transitionable([0, 0]);
	        this._sizeState = new Transitionable([0, 0]);
	        this._proportionsState = new Transitionable([0, 0]);

	        this._modifier = new Modifier({
	            transform: this._transformState,
	            opacity: this._opacityState,
	            origin: null,
	            align: null,
	            size: null,
	            proportions: null
	        });

	        this._hasOrigin = false;
	        this._hasAlign = false;
	        this._hasSize = false;
	        this._hasProportions = false;

	        if (options) {
	            if (options.transform) this.setTransform(options.transform);
	            if (options.opacity !== undefined) this.setOpacity(options.opacity);
	            if (options.origin) this.setOrigin(options.origin);
	            if (options.align) this.setAlign(options.align);
	            if (options.size) this.setSize(options.size);
	            if (options.proportions) this.setProportions(options.proportions);
	        }
	    }

	    /**
	     * Set the transform matrix of this modifier, either statically or
	     *   through a provided Transitionable.
	     *
	     * @method setTransform
	     *
	     * @param {Transform} transform Transform to transition to.
	     * @param {Transitionable} transition object of type {duration: number, curve:
	     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
	     *    instantaneous.
	     * @param {Function} [callback] callback to call after transition completes
	     * @return {StateModifier} this
	     */
	    StateModifier.prototype.setTransform = function setTransform(transform, transition, callback) {
	        this._transformState.set(transform, transition, callback);
	        return this;
	    };

	    /**
	     * Set the opacity of this modifier, either statically or
	     *   through a provided Transitionable.
	     *
	     * @method setOpacity
	     *
	     * @param {Number} opacity Opacity value to transition to.
	     * @param {Transitionable} transition object of type {duration: number, curve:
	     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
	     *    instantaneous.
	     * @param {Function} callback callback to call after transition completes
	     * @return {StateModifier} this
	     */
	    StateModifier.prototype.setOpacity = function setOpacity(opacity, transition, callback) {
	        this._opacityState.set(opacity, transition, callback);
	        return this;
	    };

	    /**
	     * Set the origin of this modifier, either statically or
	     *   through a provided Transitionable.
	     *
	     * @method setOrigin
	     *
	     * @param {Array.Number} origin two element array with values between 0 and 1.
	     * @param {Transitionable} transition object of type {duration: number, curve:
	     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
	     *    instantaneous.
	     * @param {Function} callback callback to call after transition completes
	     * @return {StateModifier} this
	     */
	    StateModifier.prototype.setOrigin = function setOrigin(origin, transition, callback) {
	        if (origin === null) {
	            if (this._hasOrigin) {
	                this._modifier.originFrom(null);
	                this._hasOrigin = false;
	            }
	            return this;
	        }
	        else if (!this._hasOrigin) {
	            this._hasOrigin = true;
	            this._modifier.originFrom(this._originState);
	        }
	        this._originState.set(origin, transition, callback);
	        return this;
	    };

	    /**
	     * Set the alignment of this modifier, either statically or
	     *   through a provided Transitionable.
	     *
	     * @method setAlign
	     *
	     * @param {Array.Number} align two element array with values between 0 and 1.
	     * @param {Transitionable} transition object of type {duration: number, curve:
	     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
	     *    instantaneous.
	     * @param {Function} callback callback to call after transition completes
	     * @return {StateModifier} this
	     */
	    StateModifier.prototype.setAlign = function setOrigin(align, transition, callback) {
	        if (align === null) {
	            if (this._hasAlign) {
	                this._modifier.alignFrom(null);
	                this._hasAlign = false;
	            }
	            return this;
	        }
	        else if (!this._hasAlign) {
	            this._hasAlign = true;
	            this._modifier.alignFrom(this._alignState);
	        }
	        this._alignState.set(align, transition, callback);
	        return this;
	    };

	    /**
	     * Set the size of this modifier, either statically or
	     *   through a provided Transitionable.
	     *
	     * @method setSize
	     *
	     * @param {Array.Number} size two element array of [width, height]
	     * @param {Transitionable} transition object of type {duration: number, curve:
	     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
	     *    instantaneous.
	     * @param {Function} callback callback to call after transition completes
	     * @return {StateModifier} this
	     */
	    StateModifier.prototype.setSize = function setSize(size, transition, callback) {
	        if (size === null) {
	            if (this._hasSize) {
	                this._modifier.sizeFrom(null);
	                this._hasSize = false;
	            }
	            return this;
	        }
	        else if (!this._hasSize) {
	            this._hasSize = true;
	            this._modifier.sizeFrom(this._sizeState);
	        }
	        this._sizeState.set(size, transition, callback);
	        return this;
	    };

	    /**
	     * Set the proportions of this modifier, either statically or
	     *   through a provided Transitionable.
	     *
	     * @method setProportions
	     *
	     * @param {Array.Number} proportions two element array with values between 0 and 1.
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {StateModifier} this
	     */
	    StateModifier.prototype.setProportions = function setSize(proportions, transition, callback) {
	        if (proportions === null) {
	            if (this._hasProportions) {
	                this._modifier.proportionsFrom(null);
	                this._hasProportions = false;
	            }
	            return this;
	        }
	        else if (!this._hasProportions) {
	            this._hasProportions = true;
	            this._modifier.proportionsFrom(this._proportionsState);
	        }
	        this._proportionsState.set(proportions, transition, callback);
	        return this;
	    };

	    /**
	     * Stop the transition.
	     *
	     * @method halt
	     */
	    StateModifier.prototype.halt = function halt() {
	        this._transformState.halt();
	        this._opacityState.halt();
	        this._originState.halt();
	        this._alignState.halt();
	        this._sizeState.halt();
	        this._proportionsState.halt();
	    };

	    /**
	     * Get the current state of the transform matrix component.
	     *
	     * @method getTransform
	     * @return {Object} transform provider object
	     */
	    StateModifier.prototype.getTransform = function getTransform() {
	        return this._transformState.get();
	    };

	    /**
	     * Get the destination state of the transform component.
	     *
	     * @method getFinalTransform
	     * @return {Transform} transform matrix
	     */
	    StateModifier.prototype.getFinalTransform = function getFinalTransform() {
	        return this._transformState.getFinal();
	    };

	    /**
	     * Get the current state of the opacity component.
	     *
	     * @method getOpacity
	     * @return {Object} opacity provider object
	     */
	    StateModifier.prototype.getOpacity = function getOpacity() {
	        return this._opacityState.get();
	    };

	    /**
	     * Get the current state of the origin component.
	     *
	     * @method getOrigin
	     * @return {Object} origin provider object
	     */
	    StateModifier.prototype.getOrigin = function getOrigin() {
	        return this._hasOrigin ? this._originState.get() : null;
	    };

	    /**
	     * Get the current state of the align component.
	     *
	     * @method getAlign
	     * @return {Object} align provider object
	     */
	    StateModifier.prototype.getAlign = function getAlign() {
	        return this._hasAlign ? this._alignState.get() : null;
	    };

	    /**
	     * Get the current state of the size component.
	     *
	     * @method getSize
	     * @return {Object} size provider object
	     */
	    StateModifier.prototype.getSize = function getSize() {
	        return this._hasSize ? this._sizeState.get() : null;
	    };

	    /**
	     * Get the current state of the propportions component.
	     *
	     * @method getProportions
	     * @return {Object} size provider object
	     */
	    StateModifier.prototype.getProportions = function getProportions() {
	        return this._hasProportions ? this._proportionsState.get() : null;
	    };

	    /**
	     * Return render spec for this StateModifier, applying to the provided
	     *    target component.  This is similar to render() for Surfaces.
	     *
	     * @private
	     * @method modify
	     *
	     * @param {Object} target (already rendered) render spec to
	     *    which to apply the transform.
	     * @return {Object} render spec for this StateModifier, including the
	     *    provided target
	     */
	    StateModifier.prototype.modify = function modify(target) {
	        return this._modifier.modify(target);
	    };

	    module.exports = StateModifier;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function addStyle(cssCode) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(styleElement);
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = cssCode;
		} else {
			styleElement.appendChild(document.createTextNode(cssCode));
		}
		return function() {
			head.removeChild(styleElement);
		};
	}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 2011-06-15
	 *
	 * By Eli Grey, http://eligrey.com
	 * Public Domain.
	 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	 */

	/*global self, document, DOMException */

	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

	if (typeof document !== "undefined" && !("classList" in document.createElement("a"))) {

	(function (view) {

	"use strict";

	var
	      classListProp = "classList"
	    , protoProp = "prototype"
	    , elemCtrProto = (view.HTMLElement || view.Element)[protoProp]
	    , objCtr = Object
	    , strTrim = String[protoProp].trim || function () {
	        return this.replace(/^\s+|\s+$/g, "");
	    }
	    , arrIndexOf = Array[protoProp].indexOf || function (item) {
	        var
	              i = 0
	            , len = this.length
	        ;
	        for (; i < len; i++) {
	            if (i in this && this[i] === item) {
	                return i;
	            }
	        }
	        return -1;
	    }
	    // Vendors: please allow content code to instantiate DOMExceptions
	    , DOMEx = function (type, message) {
	        this.name = type;
	        this.code = DOMException[type];
	        this.message = message;
	    }
	    , checkTokenAndGetIndex = function (classList, token) {
	        if (token === "") {
	            throw new DOMEx(
	                  "SYNTAX_ERR"
	                , "An invalid or illegal string was specified"
	            );
	        }
	        if (/\s/.test(token)) {
	            throw new DOMEx(
	                  "INVALID_CHARACTER_ERR"
	                , "String contains an invalid character"
	            );
	        }
	        return arrIndexOf.call(classList, token);
	    }
	    , ClassList = function (elem) {
	        var
	              trimmedClasses = strTrim.call(elem.className)
	            , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
	            , i = 0
	            , len = classes.length
	        ;
	        for (; i < len; i++) {
	            this.push(classes[i]);
	        }
	        this._updateClassName = function () {
	            elem.className = this.toString();
	        };
	    }
	    , classListProto = ClassList[protoProp] = []
	    , classListGetter = function () {
	        return new ClassList(this);
	    }
	;
	// Most DOMException implementations don't allow calling DOMException's toString()
	// on non-DOMExceptions. Error's toString() is sufficient here.
	DOMEx[protoProp] = Error[protoProp];
	classListProto.item = function (i) {
	    return this[i] || null;
	};
	classListProto.contains = function (token) {
	    token += "";
	    return checkTokenAndGetIndex(this, token) !== -1;
	};
	classListProto.add = function (token) {
	    token += "";
	    if (checkTokenAndGetIndex(this, token) === -1) {
	        this.push(token);
	        this._updateClassName();
	    }
	};
	classListProto.remove = function (token) {
	    token += "";
	    var index = checkTokenAndGetIndex(this, token);
	    if (index !== -1) {
	        this.splice(index, 1);
	        this._updateClassName();
	    }
	};
	classListProto.toggle = function (token) {
	    token += "";
	    if (checkTokenAndGetIndex(this, token) === -1) {
	        this.add(token);
	    } else {
	        this.remove(token);
	    }
	};
	classListProto.toString = function () {
	    return this.join(" ");
	};

	if (objCtr.defineProperty) {
	    var classListPropDesc = {
	          get: classListGetter
	        , enumerable: true
	        , configurable: true
	    };
	    try {
	        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	    } catch (ex) { // IE 8 doesn't support enumerable:true
	        if (ex.number === -0x7FF5EC54) {
	            classListPropDesc.enumerable = false;
	            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	        }
	    }
	} else if (objCtr[protoProp].__defineGetter__) {
	    elemCtrProto.__defineGetter__(classListProp, classListGetter);
	}

	}(self));

	}


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	if (!Function.prototype.bind) {
	    Function.prototype.bind = function (oThis) {
	        if (typeof this !== "function") {
	            // closest thing possible to the ECMAScript 5 internal IsCallable function
	            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
	        }

	        var aArgs = Array.prototype.slice.call(arguments, 1),
	        fToBind = this,
	        fNOP = function () {},
	        fBound = function () {
	            return fToBind.apply(this instanceof fNOP && oThis
	                ? this
	                : oThis,
	                aArgs.concat(Array.prototype.slice.call(arguments)));
	        };

	        fNOP.prototype = this.prototype;
	        fBound.prototype = new fNOP();

	        return fBound;
	    };
	}


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// adds requestAnimationFrame functionality
	// Source: http://strd6.com/2011/05/better-window-requestanimationframe-shim/

	window.requestAnimationFrame || (window.requestAnimationFrame =
	  window.webkitRequestAnimationFrame ||
	  window.mozRequestAnimationFrame    ||
	  window.oRequestAnimationFrame      ||
	  window.msRequestAnimationFrame     ||
	  function(callback, element) {
	    return window.setTimeout(function() {
	      callback(+new Date());
	  }, 1000 / 60);
	});


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    /**
	     * This namespace holds standalone functionality.
	     *  Currently includes name mapping for transition curves,
	     *  name mapping for origin pairs, and the after() function.
	     *
	     * @class Utility
	     * @static
	     */
	    var Utility = {};

	    /**
	     * Table of direction array positions
	     *
	     * @property {object} Direction
	     * @final
	     */
	    Utility.Direction = {
	        X: 0,
	        Y: 1,
	        Z: 2
	    };

	    /**
	     * Return wrapper around callback function. Once the wrapper is called N
	     *   times, invoke the callback function. Arguments and scope preserved.
	     *
	     * @method after
	     *
	     * @param {number} count number of calls before callback function invoked
	     * @param {Function} callback wrapped callback function
	     *
	     * @return {function} wrapped callback with coundown feature
	     */
	    Utility.after = function after(count, callback) {
	        var counter = count;
	        return function() {
	            counter--;
	            if (counter === 0) callback.apply(this, arguments);
	        };
	    };

	    /**
	     * Load a URL and return its contents in a callback
	     *
	     * @method loadURL
	     *
	     * @param {string} url URL of object
	     * @param {function} callback callback to dispatch with content
	     */
	    Utility.loadURL = function loadURL(url, callback) {
	        var xhr = new XMLHttpRequest();
	        xhr.onreadystatechange = function onreadystatechange() {
	            if (this.readyState === 4) {
	                if (callback) callback(this.responseText);
	            }
	        };
	        xhr.open('GET', url);
	        xhr.send();
	    };

	    /**
	     * Create a document fragment from a string of HTML
	     *
	     * @method createDocumentFragmentFromHTML
	     *
	     * @param {string} html HTML to convert to DocumentFragment
	     *
	     * @return {DocumentFragment} DocumentFragment representing input HTML
	     */
	    Utility.createDocumentFragmentFromHTML = function createDocumentFragmentFromHTML(html) {
	        var element = document.createElement('div');
	        element.innerHTML = html;
	        var result = document.createDocumentFragment();
	        while (element.hasChildNodes()) result.appendChild(element.firstChild);
	        return result;
	    };

	    /*
	     *  Deep clone an object.
	     *  @param b {Object} Object to clone
	     *  @return a {Object} Cloned object.
	     */
	    Utility.clone = function clone(b) {
	        var a;
	        if (typeof b === 'object') {
	            a = (b instanceof Array) ? [] : {};
	            for (var key in b) {
	                if (typeof b[key] === 'object' && b[key] !== null) {
	                    if (b[key] instanceof Array) {
	                        a[key] = new Array(b[key].length);
	                        for (var i = 0; i < b[key].length; i++) {
	                            a[key][i] = Utility.clone(b[key][i]);
	                        }
	                    }
	                    else {
	                      a[key] = Utility.clone(b[key]);
	                    }
	                }
	                else {
	                    a[key] = b[key];
	                }
	            }
	        }
	        else {
	            a = b;
	        }
	        return a;
	    };

	    module.exports = Utility;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    /**
	     * A singleton that maintains a global registry of Surfaces.
	     *   Private.
	     *
	     * @private
	     * @static
	     * @class Entity
	     */

	    var entities = [];

	    /**
	     * Get entity from global index.
	     *
	     * @private
	     * @method get
	     * @param {Number} id entity registration id
	     * @return {Surface} entity in the global index
	     */
	    function get(id) {
	        return entities[id];
	    }

	    /**
	     * Overwrite entity in the global index
	     *
	     * @private
	     * @method set
	     * @param {Number} id entity registration id
	     * @param {Surface} entity to add to the global index
	     */
	    function set(id, entity) {
	        entities[id] = entity;
	    }

	    /**
	     * Add entity to global index
	     *
	     * @private
	     * @method register
	     * @param {Surface} entity to add to global index
	     * @return {Number} new id
	     */
	    function register(entity) {
	        var id = entities.length;
	        set(id, entity);
	        return id;
	    }

	    /**
	     * Remove entity from global index
	     *
	     * @private
	     * @method unregister
	     * @param {Number} id entity registration id
	     */
	    function unregister(id) {
	        set(id, null);
	    }

	    module.exports = {
	        register: register,
	        unregister: unregister,
	        get: get,
	        set: set
	    };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * Helper object used to iterate through items sequentially. Used in
	     *   views that deal with layout.  A ViewSequence object conceptually points
	     *   to a node in a linked list.
	     *
	     * @class ViewSequence
	     *
	     * @constructor
	     * @param {Object|Array} options Options object, or content array.
	     * @param {Number} [options.index] starting index.
	     * @param {Number} [options.array] Array of elements to populate the ViewSequence
	     * @param {Object} [options._] Optional backing store (internal
	     * @param {Boolean} [options.loop] Whether to wrap when accessing elements just past the end
	     *   (or beginning) of the sequence.
	     */
	    function ViewSequence(options) {
	        if (!options) options = [];
	        if (options instanceof Array) options = {array: options};

	        this._ = null;
	        this.index = options.index || 0;

	        if (options.array) this._ = new (this.constructor.Backing)(options.array);
	        else if (options._) this._ = options._;

	        if (this.index === this._.firstIndex) this._.firstNode = this;
	        if (this.index === this._.firstIndex + this._.array.length - 1) this._.lastNode = this;

	        if (options.loop !== undefined) this._.loop = options.loop;

	        if (options.trackSize !== undefined) this._.trackSize = options.trackSize;

	        this._previousNode = null;
	        this._nextNode = null;
	    }

	    // constructor for internal storage
	    ViewSequence.Backing = function Backing(array) {
	        this.array = array;
	        this.firstIndex = 0;
	        this.loop = false;
	        this.firstNode = null;
	        this.lastNode = null;
	        this.cumulativeSizes = [[0, 0]];
	        this.sizeDirty = true;
	        this.trackSize = false;
	    };

	    // Get value "i" slots away from the first index.
	    ViewSequence.Backing.prototype.getValue = function getValue(i) {
	        var _i = i - this.firstIndex;
	        if (_i < 0 || _i >= this.array.length) return null;
	        return this.array[_i];
	    };

	    // Set value "i" slots away from the first index.
	    ViewSequence.Backing.prototype.setValue = function setValue(i, value) {
	        this.array[i - this.firstIndex] = value;
	    };

	    // Get sequence size from backing up to index
	    // TODO: remove from viewSequence with proper abstraction
	    ViewSequence.Backing.prototype.getSize = function getSize(index) {
	        return this.cumulativeSizes[index];
	    };

	    // Calculates cumulative size
	    // TODO: remove from viewSequence with proper abstraction
	    ViewSequence.Backing.prototype.calculateSize = function calculateSize(index) {
	        index = index || this.array.length;
	        var size = [0, 0];
	        for (var i = 0; i < index; i++) {
	            var nodeSize = this.array[i].getSize();
	            if (!nodeSize) return undefined;
	            if (size[0] !== undefined) {
	                if (nodeSize[0] === undefined) size[0] = undefined;
	                else size[0] += nodeSize[0];
	            }
	            if (size[1] !== undefined) {
	                if (nodeSize[1] === undefined) size[1] = undefined;
	                else size[1] += nodeSize[1];
	            }
	            this.cumulativeSizes[i + 1] = size.slice();
	        }
	        this.sizeDirty = false;
	        return size;
	    };

	    // After splicing into the backing store, restore the indexes of each node correctly.
	    ViewSequence.Backing.prototype.reindex = function reindex(start, removeCount, insertCount) {
	        if (!this.array[0]) return;

	        var i = 0;
	        var index = this.firstIndex;
	        var indexShiftAmount = insertCount - removeCount;
	        var node = this.firstNode;

	        // find node to begin
	        while (index < start - 1) {
	            node = node.getNext();
	            index++;
	        }
	        // skip removed nodes
	        var spliceStartNode = node;
	        for (i = 0; i < removeCount; i++) {
	            node = node.getNext();
	            if (node) node._previousNode = spliceStartNode;
	        }
	        var spliceResumeNode = node ? node.getNext() : null;
	        // generate nodes for inserted items
	        spliceStartNode._nextNode = null;
	        node = spliceStartNode;
	        for (i = 0; i < insertCount; i++) node = node.getNext();
	        index += insertCount;
	        // resume the chain
	        if (node !== spliceResumeNode) {
	            node._nextNode = spliceResumeNode;
	            if (spliceResumeNode) spliceResumeNode._previousNode = node;
	        }
	        if (spliceResumeNode) {
	            node = spliceResumeNode;
	            index++;
	            while (node && index < this.array.length + this.firstIndex) {
	                if (node._nextNode) node.index += indexShiftAmount;
	                else node.index = index;
	                node = node.getNext();
	                index++;
	            }
	        }
	        if (this.trackSize) this.sizeDirty = true;
	    };

	    /**
	     * Return ViewSequence node previous to this node in the list, respecting looping if applied.
	     *
	     * @method getPrevious
	     * @return {ViewSequence} previous node.
	     */
	    ViewSequence.prototype.getPrevious = function getPrevious() {
	        var len = this._.array.length;
	        if (!len) {
	            this._previousNode = null;
	        }
	        else if (this.index === this._.firstIndex) {
	            if (this._.loop) {
	                this._previousNode = this._.lastNode || new (this.constructor)({_: this._, index: this._.firstIndex + len - 1});
	                this._previousNode._nextNode = this;
	            }
	            else {
	                this._previousNode = null;
	            }
	        }
	        else if (!this._previousNode) {
	            this._previousNode = new (this.constructor)({_: this._, index: this.index - 1});
	            this._previousNode._nextNode = this;
	        }
	        return this._previousNode;
	    };

	    /**
	     * Return ViewSequence node next after this node in the list, respecting looping if applied.
	     *
	     * @method getNext
	     * @return {ViewSequence} previous node.
	     */
	    ViewSequence.prototype.getNext = function getNext() {
	        var len = this._.array.length;
	        if (!len) {
	            this._nextNode = null;
	        }
	        else if (this.index === this._.firstIndex + len - 1) {
	            if (this._.loop) {
	                this._nextNode = this._.firstNode || new (this.constructor)({_: this._, index: this._.firstIndex});
	                this._nextNode._previousNode = this;
	            }
	            else {
	                this._nextNode = null;
	            }
	        }
	        else if (!this._nextNode) {
	            this._nextNode = new (this.constructor)({_: this._, index: this.index + 1});
	            this._nextNode._previousNode = this;
	        }
	        return this._nextNode;
	    };

	    /**
	     * Return index of the provided item in the backing array
	     *
	     * @method indexOf
	     * @return {Number} index or -1 if not found
	     */
	    ViewSequence.prototype.indexOf = function indexOf(item) {
	        return this._.array.indexOf(item);
	    };

	    /**
	     * Return index of this ViewSequence node.
	     *
	     * @method getIndex
	     * @return {Number} index
	     */
	    ViewSequence.prototype.getIndex = function getIndex() {
	        return this.index;
	    };

	    /**
	     * Return printable version of this ViewSequence node.
	     *
	     * @method toString
	     * @return {string} this index as a string
	     */
	    ViewSequence.prototype.toString = function toString() {
	        return '' + this.index;
	    };

	    /**
	     * Add one or more objects to the beginning of the sequence.
	     *
	     * @method unshift
	     * @param {...Object} value arguments array of objects
	     */
	    ViewSequence.prototype.unshift = function unshift(value) {
	        this._.array.unshift.apply(this._.array, arguments);
	        this._.firstIndex -= arguments.length;
	        if (this._.trackSize) this._.sizeDirty = true;
	    };

	    /**
	     * Add one or more objects to the end of the sequence.
	     *
	     * @method push
	     * @param {...Object} value arguments array of objects
	     */
	    ViewSequence.prototype.push = function push(value) {
	        this._.array.push.apply(this._.array, arguments);
	        if (this._.trackSize) this._.sizeDirty = true;
	    };

	    /**
	     * Remove objects from the sequence
	     *
	     * @method splice
	     * @param {Number} index starting index for removal
	     * @param {Number} howMany how many elements to remove
	     * @param {...Object} value arguments array of objects
	     */
	    ViewSequence.prototype.splice = function splice(index, howMany) {
	        var values = Array.prototype.slice.call(arguments, 2);
	        this._.array.splice.apply(this._.array, [index - this._.firstIndex, howMany].concat(values));
	        this._.reindex(index, howMany, values.length);
	    };

	    /**
	     * Exchange this element's sequence position with another's.
	     *
	     * @method swap
	     * @param {ViewSequence} other element to swap with.
	     */
	    ViewSequence.prototype.swap = function swap(other) {
	        var otherValue = other.get();
	        var myValue = this.get();
	        this._.setValue(this.index, otherValue);
	        this._.setValue(other.index, myValue);

	        var myPrevious = this._previousNode;
	        var myNext = this._nextNode;
	        var myIndex = this.index;
	        var otherPrevious = other._previousNode;
	        var otherNext = other._nextNode;
	        var otherIndex = other.index;

	        this.index = otherIndex;
	        this._previousNode = (otherPrevious === this) ? other : otherPrevious;
	        if (this._previousNode) this._previousNode._nextNode = this;
	        this._nextNode = (otherNext === this) ? other : otherNext;
	        if (this._nextNode) this._nextNode._previousNode = this;

	        other.index = myIndex;
	        other._previousNode = (myPrevious === other) ? this : myPrevious;
	        if (other._previousNode) other._previousNode._nextNode = other;
	        other._nextNode = (myNext === other) ? this : myNext;
	        if (other._nextNode) other._nextNode._previousNode = other;

	        if (this.index === this._.firstIndex) this._.firstNode = this;
	        else if (this.index === this._.firstIndex + this._.array.length - 1) this._.lastNode = this;
	        if (other.index === this._.firstIndex) this._.firstNode = other;
	        else if (other.index === this._.firstIndex + this._.array.length - 1) this._.lastNode = other;
	        if (this._.trackSize) this._.sizeDirty = true;
	    };

	   /**
	     * Return value of this ViewSequence node.
	     *
	     * @method get
	     * @return {Object} value of thiss
	     */
	    ViewSequence.prototype.get = function get() {
	        return this._.getValue(this.index);
	    };

	   /**
	     * Call getSize() on the contained View.
	     *
	     * @method getSize
	     * @return {Array.Number} [width, height]
	     */
	    ViewSequence.prototype.getSize = function getSize() {
	        var target = this.get();
	        return target ? target.getSize() : null;
	    };

	    /**
	     * Generate a render spec from the contents of this component.
	     * Specifically, this will render the value at the current index.
	     * @private
	     * @method render
	     * @return {number} Render spec for this component
	     */
	    ViewSequence.prototype.render = function render() {
	        if (this._.trackSize && this._.sizeDirty) this._.calculateSize();
	        var target = this.get();
	        return target ? target.render.apply(target, arguments) : null;
	    };

	    module.exports = ViewSequence;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var EventHandler = __webpack_require__(31);

	    /**
	     *  A collection of methods for setting options which can be extended
	     *  onto other classes.
	     *
	     *
	     *  **** WARNING ****
	     *  You can only pass through objects that will compile into valid JSON.
	     *
	     *  Valid options:
	     *      Strings,
	     *      Arrays,
	     *      Objects,
	     *      Numbers,
	     *      Nested Objects,
	     *      Nested Arrays.
	     *
	     *    This excludes:
	     *        Document Fragments,
	     *        Functions
	     * @class OptionsManager
	     * @constructor
	     * @param {Object} value options dictionary
	     */
	    function OptionsManager(value) {
	        this._value = value;
	        this.eventOutput = null;
	    }

	    /**
	     * Create options manager from source dictionary with arguments overriden by patch dictionary.
	     *
	     * @static
	     * @method OptionsManager.patch
	     *
	     * @param {Object} source source arguments
	     * @param {...Object} data argument additions and overwrites
	     * @return {Object} source object
	     */
	    OptionsManager.patch = function patchObject(source, data) {
	        var manager = new OptionsManager(source);
	        for (var i = 1; i < arguments.length; i++) manager.patch(arguments[i]);
	        return source;
	    };

	    function _createEventOutput() {
	        this.eventOutput = new EventHandler();
	        this.eventOutput.bindThis(this);
	        EventHandler.setOutputHandler(this, this.eventOutput);
	    }

	    /**
	     * Create OptionsManager from source with arguments overriden by patches.
	     *   Triggers 'change' event on this object's event handler if the state of
	     *   the OptionsManager changes as a result.
	     *
	     * @method patch
	     *
	     * @param {...Object} arguments list of patch objects
	     * @return {OptionsManager} this
	     */
	    OptionsManager.prototype.patch = function patch() {
	        var myState = this._value;
	        for (var i = 0; i < arguments.length; i++) {
	            var data = arguments[i];
	            for (var k in data) {
	                if ((k in myState) && (data[k] && data[k].constructor === Object) && (myState[k] && myState[k].constructor === Object)) {
	                    if (!myState.hasOwnProperty(k)) myState[k] = Object.create(myState[k]);
	                    this.key(k).patch(data[k]);
	                    if (this.eventOutput) this.eventOutput.emit('change', {id: k, value: this.key(k).value()});
	                }
	                else this.set(k, data[k]);
	            }
	        }
	        return this;
	    };

	    /**
	     * Alias for patch
	     *
	     * @method setOptions
	     *
	     */
	    OptionsManager.prototype.setOptions = OptionsManager.prototype.patch;

	    /**
	     * Return OptionsManager based on sub-object retrieved by key
	     *
	     * @method key
	     *
	     * @param {string} identifier key
	     * @return {OptionsManager} new options manager with the value
	     */
	    OptionsManager.prototype.key = function key(identifier) {
	        var result = new OptionsManager(this._value[identifier]);
	        if (!(result._value instanceof Object) || result._value instanceof Array) result._value = {};
	        return result;
	    };

	    /**
	     * Look up value by key or get the full options hash
	     * @method get
	     *
	     * @param {string} key key
	     * @return {Object} associated object or full options hash
	     */
	    OptionsManager.prototype.get = function get(key) {
	        return key ? this._value[key] : this._value;
	    };

	    /**
	     * Alias for get
	     * @method getOptions
	     */
	    OptionsManager.prototype.getOptions = OptionsManager.prototype.get;

	    /**
	     * Set key to value.  Outputs 'change' event if a value is overwritten.
	     *
	     * @method set
	     *
	     * @param {string} key key string
	     * @param {Object} value value object
	     * @return {OptionsManager} new options manager based on the value object
	     */
	    OptionsManager.prototype.set = function set(key, value) {
	        var originalValue = this.get(key);
	        this._value[key] = value;
	        if (this.eventOutput && value !== originalValue) this.eventOutput.emit('change', {id: key, value: value});
	        return this;
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'change')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    OptionsManager.prototype.on = function on() {
	        _createEventOutput.call(this);
	        return this.on.apply(this, arguments);
	    };

	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'change')
	     * @param {function} handler function object to remove
	     * @return {EventHandler} internal event handler object (for chaining)
	     */
	    OptionsManager.prototype.removeListener = function removeListener() {
	        _createEventOutput.call(this);
	        return this.removeListener.apply(this, arguments);
	    };

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    OptionsManager.prototype.pipe = function pipe() {
	        _createEventOutput.call(this);
	        return this.pipe.apply(this, arguments);
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     * Undoes work of "pipe"
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    OptionsManager.prototype.unpipe = function unpipe() {
	        _createEventOutput.call(this);
	        return this.unpipe.apply(this, arguments);
	    };

	    module.exports = OptionsManager;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var EventEmitter = __webpack_require__(60);

	    /**
	     * EventHandler forwards received events to a set of provided callback functions.
	     * It allows events to be captured, processed, and optionally piped through to other event handlers.
	     *
	     * @class EventHandler
	     * @extends EventEmitter
	     * @constructor
	     */
	    function EventHandler() {
	        EventEmitter.apply(this, arguments);

	        this.downstream = []; // downstream event handlers
	        this.downstreamFn = []; // downstream functions

	        this.upstream = []; // upstream event handlers
	        this.upstreamListeners = {}; // upstream listeners
	    }
	    EventHandler.prototype = Object.create(EventEmitter.prototype);
	    EventHandler.prototype.constructor = EventHandler;

	    /**
	     * Assign an event handler to receive an object's input events.
	     *
	     * @method setInputHandler
	     * @static
	     *
	     * @param {Object} object object to mix trigger, subscribe, and unsubscribe functions into
	     * @param {EventHandler} handler assigned event handler
	     */
	    EventHandler.setInputHandler = function setInputHandler(object, handler) {
	        object.trigger = handler.trigger.bind(handler);
	        if (handler.subscribe && handler.unsubscribe) {
	            object.subscribe = handler.subscribe.bind(handler);
	            object.unsubscribe = handler.unsubscribe.bind(handler);
	        }
	    };

	    /**
	     * Assign an event handler to receive an object's output events.
	     *
	     * @method setOutputHandler
	     * @static
	     *
	     * @param {Object} object object to mix pipe, unpipe, on, addListener, and removeListener functions into
	     * @param {EventHandler} handler assigned event handler
	     */
	    EventHandler.setOutputHandler = function setOutputHandler(object, handler) {
	        if (handler instanceof EventHandler) handler.bindThis(object);
	        object.pipe = handler.pipe.bind(handler);
	        object.unpipe = handler.unpipe.bind(handler);
	        object.on = handler.on.bind(handler);
	        object.addListener = object.on;
	        object.removeListener = handler.removeListener.bind(handler);
	    };

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.emit = function emit(type, event) {
	        EventEmitter.prototype.emit.apply(this, arguments);
	        var i = 0;
	        for (i = 0; i < this.downstream.length; i++) {
	            if (this.downstream[i].trigger) this.downstream[i].trigger(type, event);
	        }
	        for (i = 0; i < this.downstreamFn.length; i++) {
	            this.downstreamFn[i](type, event);
	        }
	        return this;
	    };

	    /**
	     * Alias for emit
	     * @method addListener
	     */
	    EventHandler.prototype.trigger = EventHandler.prototype.emit;

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    EventHandler.prototype.pipe = function pipe(target) {
	        if (target.subscribe instanceof Function) return target.subscribe(this);

	        var downstreamCtx = (target instanceof Function) ? this.downstreamFn : this.downstream;
	        var index = downstreamCtx.indexOf(target);
	        if (index < 0) downstreamCtx.push(target);

	        if (target instanceof Function) target('pipe', null);
	        else if (target.trigger) target.trigger('pipe', null);

	        return target;
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe".
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    EventHandler.prototype.unpipe = function unpipe(target) {
	        if (target.unsubscribe instanceof Function) return target.unsubscribe(this);

	        var downstreamCtx = (target instanceof Function) ? this.downstreamFn : this.downstream;
	        var index = downstreamCtx.indexOf(target);
	        if (index >= 0) {
	            downstreamCtx.splice(index, 1);
	            if (target instanceof Function) target('unpipe', null);
	            else if (target.trigger) target.trigger('unpipe', null);
	            return target;
	        }
	        else return false;
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.on = function on(type, handler) {
	        EventEmitter.prototype.on.apply(this, arguments);
	        if (!(type in this.upstreamListeners)) {
	            var upstreamListener = this.trigger.bind(this, type);
	            this.upstreamListeners[type] = upstreamListener;
	            for (var i = 0; i < this.upstream.length; i++) {
	                this.upstream[i].on(type, upstreamListener);
	            }
	        }
	        return this;
	    };

	    /**
	     * Alias for "on"
	     * @method addListener
	     */
	    EventHandler.prototype.addListener = EventHandler.prototype.on;

	    /**
	     * Listen for events from an upstream event handler.
	     *
	     * @method subscribe
	     *
	     * @param {EventEmitter} source source emitter object
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.subscribe = function subscribe(source) {
	        var index = this.upstream.indexOf(source);
	        if (index < 0) {
	            this.upstream.push(source);
	            for (var type in this.upstreamListeners) {
	                source.on(type, this.upstreamListeners[type]);
	            }
	        }
	        return this;
	    };

	    /**
	     * Stop listening to events from an upstream event handler.
	     *
	     * @method unsubscribe
	     *
	     * @param {EventEmitter} source source emitter object
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.unsubscribe = function unsubscribe(source) {
	        var index = this.upstream.indexOf(source);
	        if (index >= 0) {
	            this.upstream.splice(index, 1);
	            for (var type in this.upstreamListeners) {
	                source.removeListener(type, this.upstreamListeners[type]);
	            }
	        }
	        return this;
	    };

	    module.exports = EventHandler;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define, console*/
	/*eslint no-console:0*/

	/**
	 * Utility class for famous-flex.
	 *
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var Utility = __webpack_require__(27);

	    /**
	     * @class
	     * @alias module:LayoutUtility
	     */
	    function LayoutUtility() {
	    }
	    LayoutUtility.registeredHelpers = {};

	    var Capabilities = {
	        SEQUENCE: 1,
	        DIRECTION_X: 2,
	        DIRECTION_Y: 4,
	        SCROLLING: 8
	    };
	    LayoutUtility.Capabilities = Capabilities;

	    /**
	     *  Normalizes the margins argument.
	     *
	     *  @param {Array.Number} margins
	     */
	    LayoutUtility.normalizeMargins = function(margins) {
	        if (!margins) {
	            return [0, 0, 0, 0];
	        } else if (!Array.isArray(margins)) {
	            return [margins, margins, margins, margins];
	        } else if (margins.length === 0) {
	            return [0, 0, 0, 0];
	        } else if (margins.length === 1) {
	            return [margins[0], margins[0], margins[0], margins[0]];
	        } else if (margins.length === 2) {
	            return [margins[0], margins[1], margins[0], margins[1]];
	        }
	        else {
	            return margins;
	        }
	    };

	    /**
	     * Makes a (shallow) copy of a spec.
	     *
	     * @param {Spec} spec Spec to clone
	     * @return {Spec} cloned spec
	     */
	    LayoutUtility.cloneSpec = function(spec) {
	        var clone = {};
	        if (spec.opacity !== undefined) {
	            clone.opacity = spec.opacity;
	        }
	        if (spec.size !== undefined) {
	            clone.size = spec.size.slice(0);
	        }
	        if (spec.transform !== undefined) {
	            clone.transform = spec.transform.slice(0);
	        }
	        if (spec.origin !== undefined) {
	            clone.origin = spec.origin.slice(0);
	        }
	        if (spec.align !== undefined) {
	            clone.align = spec.align.slice(0);
	        }
	        return clone;
	    };

	    /**
	     * Compares two arrays for equality.
	     */
	    function _isEqualArray(a, b) {
	        if (a === b) {
	            return true;
	        }
	        if ((a === undefined) || (b === undefined)) {
	            return false;
	        }
	        var i = a.length;
	        if (i !== b.length){
	            return false;
	        }
	        while (i--) {
	            if (a[i] !== b[i]) {
	                return false;
	            }
	        }
	        return true;
	    }

	    /**
	     * Compares two specs for equality.
	     *
	     * @param {Spec} spec1 Spec to compare
	     * @param {Spec} spec2 Spec to compare
	     * @return {Boolean} true/false
	     */
	    LayoutUtility.isEqualSpec = function(spec1, spec2) {
	        if (spec1.opacity !== spec2.opacity) {
	            return false;
	        }
	        if (!_isEqualArray(spec1.size, spec2.size)) {
	            return false;
	        }
	        if (!_isEqualArray(spec1.transform, spec2.transform)) {
	            return false;
	        }
	        if (!_isEqualArray(spec1.origin, spec2.origin)) {
	            return false;
	        }
	        if (!_isEqualArray(spec1.align, spec2.align)) {
	            return false;
	        }
	        return true;
	    };

	    /**
	     * Helper function that returns a string containing the differences
	     * between two specs.
	     *
	     * @param {Spec} spec1 Spec to compare
	     * @param {Spec} spec2 Spec to compare
	     * @return {String} text
	     */
	    LayoutUtility.getSpecDiffText = function(spec1, spec2) {
	        var result = 'spec diff:';
	        if (spec1.opacity !== spec2.opacity) {
	            result += '\nopacity: ' + spec1.opacity + ' != ' + spec2.opacity;
	        }
	        if (!_isEqualArray(spec1.size, spec2.size)) {
	            result += '\nsize: ' + JSON.stringify(spec1.size) + ' != ' + JSON.stringify(spec2.size);
	        }
	        if (!_isEqualArray(spec1.transform, spec2.transform)) {
	            result += '\ntransform: ' + JSON.stringify(spec1.transform) + ' != ' + JSON.stringify(spec2.transform);
	        }
	        if (!_isEqualArray(spec1.origin, spec2.origin)) {
	            result += '\norigin: ' + JSON.stringify(spec1.origin) + ' != ' + JSON.stringify(spec2.origin);
	        }
	        if (!_isEqualArray(spec1.align, spec2.align)) {
	            result += '\nalign: ' + JSON.stringify(spec1.align) + ' != ' + JSON.stringify(spec2.align);
	        }
	        return result;
	    };

	    /**
	     * Helper function to call whenever a critical error has occurred.
	     *
	     * @param {String} message error-message
	     */
	    LayoutUtility.error = function(message) {
	        console.log('ERROR: ' + message);
	        throw message;
	    };

	    /**
	     * Helper function to call whenever a warning error has occurred.
	     *
	     * @param {String} message warning-message
	     */
	    LayoutUtility.warning = function(message) {
	        console.log('WARNING: ' + message);
	    };

	    /**
	     * Helper function to log 1 or more arguments. All the arguments
	     * are concatenated to produce a single string which is logged.
	     *
	     * @param {String|Array|Object} args arguments to stringify and concatenate
	     */
	    LayoutUtility.log = function(args) {
	        var message = '';
	        for (var i = 0; i < arguments.length; i++) {
	            var arg = arguments[i];
	            if ((arg instanceof Object) || (arg instanceof Array)) {
	                message += JSON.stringify(arg);
	            }
	            else {
	                message += arg;
	            }
	        }
	        console.log(message);
	    };

	    /**
	     * Combines two sets of options into a single set.
	     *
	     * @param {Object} options1 base set of options
	     * @param {Object} options2 set of options to merge into `options1`
	     * @param {Bool} [forceClone] ensures that a clone is returned rather that one of the original options objects
	     * @return {Object} Combined options
	     */
	    LayoutUtility.combineOptions = function(options1, options2, forceClone) {
	        if (options1 && !options2 && !forceClone) {
	            return options1;
	        } else if (!options1 && options2 && !forceClone) {
	            return options2;
	        }
	        var options = Utility.clone(options1 || {});
	        if (options2) {
	            for (var key in options2) {
	                options[key] = options2[key];
	            }
	        }
	        return options;
	    };

	    /**
	     * Registers a layout-helper so it can be used as a layout-literal for
	     * a layout-controller. The LayoutHelper instance must support the `parse`
	     * function, which is fed the layout-literal content.
	     *
	     * **Example:**
	     *
	     * ```javascript
	     * Layout.registerHelper('dock', LayoutDockHelper);
	     *
	     * var layoutController = new LayoutController({
	     *   layout: { dock: [,
	     *     ['top', 'header', 50],
	     *     ['bottom', 'footer', 50],
	     *     ['fill', 'content'],
	     *   ]},
	     *   dataSource: {
	     *     header: new Surface({content: 'Header'}),
	     *     footer: new Surface({content: 'Footer'}),
	     *     content: new Surface({content: 'Content'}),
	     *   }
	     * })
	     * ```
	     *
	     * @param {String} name name of the helper (e.g. 'dock')
	     * @param {Function} Helper Helper to register (e.g. LayoutDockHelper)
	     */
	    LayoutUtility.registerHelper = function(name, Helper) {
	        if (!Helper.prototype.parse) {
	            LayoutUtility.error('The layout-helper for name "' + name + '" is required to support the "parse" method');
	        }
	        if (this.registeredHelpers[name] !== undefined) {
	            LayoutUtility.warning('A layout-helper with the name "' + name + '" is already registered and will be overwritten');
	        }
	        this.registeredHelpers[name] = Helper;
	    };

	    /**
	     * Unregisters a layout-helper.
	     *
	     * @param {String} name name of the layout-helper
	     */
	    LayoutUtility.unregisterHelper = function(name) {
	        delete this.registeredHelpers[name];
	    };

	    /**
	     * Gets a registered layout-helper by its name.
	     *
	     * @param {String} name name of the layout-helper
	     * @return {Function} layout-helper or undefined
	     */
	    LayoutUtility.getRegisteredHelper = function(name) {
	        return this.registeredHelpers[name];
	    };

	    // Layout function
	    module.exports = LayoutUtility;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define*/
	/*eslint no-use-before-define:0 */

	/**
	 * LayoutNodeManager is a private class used internally by LayoutController, ScrollController
	 * and ScrollView. It manages the layout-nodes that are rendered and exposes the layout-context
	 * which is passed along to the layout-function.
	 *
	 * LayoutNodeManager keeps track of every rendered node through an ordered double-linked
	 * list. The first time the layout-function is called, the linked list is created.
	 * After that, the linked list is updated to reflect the output of the layout-function.
	 * When the layout is unchanged, then the linked-list exactly matches the order of the
	 * accessed nodes in the layout-function, and no layout-nodes need to be created or
	 * re-ordered.
	 *
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var LayoutContext = __webpack_require__(51);
	    var LayoutUtility = __webpack_require__(32);

	    var MAX_POOL_SIZE = 100;

	    /**
	     * @class
	     * @param {LayoutNode} LayoutNode Layout-nodes to create
	     * @param {Function} initLayoutNodeFn function to use when initializing new nodes
	     * @alias module:LayoutNodeManager
	     */
	    function LayoutNodeManager(LayoutNode, initLayoutNodeFn) {
	        this.LayoutNode = LayoutNode;
	        this._initLayoutNodeFn = initLayoutNodeFn;
	        this._layoutCount = 0;
	        this._context = new LayoutContext({
	            next: _contextNext.bind(this),
	            prev: _contextPrev.bind(this),
	            get: _contextGet.bind(this),
	            set: _contextSet.bind(this),
	            resolveSize: _contextResolveSize.bind(this),
	            size: [0, 0]
	            //,cycle: 0
	        });
	        this._contextState = {
	            // enumation state for the context
	            //nextSequence: undefined,
	            //prevSequence: undefined,
	            //next: undefined
	            //prev: undefined
	            //start: undefined
	        };
	        this._pool = {
	            layoutNodes: {
	                size: 0
	                //first: undefined
	            },
	            resolveSize: [0, 0]
	        };
	        //this._first = undefined; // first item in the linked list
	        //this._nodesById = undefined;
	        //this._trueSizeRequested = false;
	    }

	    /**
	     * Prepares the manager for a new layout iteration, after which it returns the
	     * context which can be used by the layout-function.
	     *
	     * @param {ViewSequence} viewSequence first node to layout
	     * @param {Object} [nodesById] dictionary to use when looking up nodes by id
	     * @return {LayoutContext} context which can be passed to the layout-function
	     */
	    LayoutNodeManager.prototype.prepareForLayout = function(viewSequence, nodesById, contextData) {

	        // Reset all nodes
	        var node = this._first;
	        while (node) {
	            node.reset();
	            node = node._next;
	        }

	        // Prepare data
	        var context = this._context;
	        this._layoutCount++;
	        this._nodesById = nodesById;
	        this._trueSizeRequested = false;
	        this._reevalTrueSize =
	            contextData.reevalTrueSize ||
	            !context.size ||
	            (context.size[0] !== contextData.size[0]) ||
	            (context.size[1] !== contextData.size[1]);

	        // Prepare context for enumation
	        var contextState = this._contextState;
	        contextState.startSequence = viewSequence;
	        contextState.nextSequence = viewSequence;
	        contextState.prevSequence = viewSequence;
	        contextState.start = undefined;
	        contextState.nextGetIndex = 0;
	        contextState.prevGetIndex = 0;
	        contextState.nextSetIndex = 0;
	        contextState.prevSetIndex = 0;
	        contextState.addCount = 0;
	        contextState.removeCount = 0;

	        // Prepare content
	        context.size[0] = contextData.size[0];
	        context.size[1] = contextData.size[1];
	        context.direction = contextData.direction;
	        context.reverse = contextData.reverse;
	        context.alignment = contextData.reverse ? 1 : 0;
	        context.scrollOffset = contextData.scrollOffset || 0;
	        context.scrollStart = contextData.scrollStart || 0;
	        context.scrollEnd = contextData.scrollEnd || context.size[context.direction];
	        //context.cycle++;
	        return context;
	    };

	    /**
	     * When the layout-function no longer lays-out the node, then it is not longer
	     * being invalidated. In this case the destination is set to the removeSpec
	     * after which the node is animated towards the remove-spec.
	     *
	     * @param {Spec} [removeSpec] spec towards which the no longer layed-out nodes are animated
	     */
	    LayoutNodeManager.prototype.removeNonInvalidatedNodes = function(removeSpec) {
	        var node = this._first;
	        while (node) {

	            // If a node existed, but it is no longer being layed out,
	            // then set it to the '_removing' state.
	            if (!node._invalidated && !node._removing) {
	                node.remove(removeSpec);
	            }

	            // Move to next node
	            node = node._next;
	        }
	    };

	    /**
	     * Cleans up any unaccessed virtual nodes that have been created by a VirtualViewSequence.
	     */
	    LayoutNodeManager.prototype.removeVirtualViewSequenceNodes = function() {
	        if (this._contextState.startSequence && this._contextState.startSequence.cleanup) {
	            this._contextState.startSequence.cleanup();
	        }
	    };

	    /**
	     * Builds the render-spec and destroy any layout-nodes that no longer
	     * return a render-spec.
	     *
	     * @return {Array.Spec} array of Specs
	     */
	    LayoutNodeManager.prototype.buildSpecAndDestroyUnrenderedNodes = function(translate) {
	        var specs = [];
	        var result = {
	            specs: specs,
	            modified: false
	        };
	        var node = this._first;
	        while (node) {
	            var modified = node._specModified;
	            var spec = node.getSpec();
	            //if (spec.removed && (!this._contextState.addCount || (this._contextState.removeCount > 5))) {
	            if (spec.removed) {

	                // Destroy node
	                var destroyNode = node;
	                node = node._next;
	                _destroyNode.call(this, destroyNode);

	                // Mark as modified
	                result.modified = true;
	            }
	            else {

	                // Update stats
	                if (modified) {
	                    if (spec.transform && translate) {
	                        spec.transform[12] += translate[0];
	                        spec.transform[13] += translate[1];
	                        spec.transform[14] += translate[2];
	                        spec.transform[12] = Math.round(spec.transform[12] * 100000) / 100000;
	                        spec.transform[13] = Math.round(spec.transform[13] * 100000) / 100000;
	                    }
	                    result.modified = true;
	                }

	                // Add node to result output
	                specs.push(spec);
	                node = node._next;
	            }
	        }
	        this._contextState.addCount = 0;
	        this._contextState.removeCount = 0;
	        return result;
	    };

	    /**
	     * Get the layout-node by its renderable.
	     *
	     * @param {Object} renderable renderable
	     * @return {LayoutNode} layout-node or undefined
	     */
	    LayoutNodeManager.prototype.getNodeByRenderNode = function(renderable) {
	        var node = this._first;
	        while (node) {
	            if (node.renderNode === renderable) {
	                return node;
	            }
	            node = node._next;
	        }
	        return undefined;
	    };

	    /**
	     * Inserts a layout-node into the linked-list.
	     *
	     * @param {LayoutNode} node layout-node to insert
	     */
	    LayoutNodeManager.prototype.insertNode = function(node) {
	        node._next = this._first;
	        if (this._first) {
	            this._first._prev = node;
	        }
	        this._first = node;
	    };

	    /**
	     * Sets the options for all nodes.
	     *
	     * @param {Object} options node options
	     */
	    LayoutNodeManager.prototype.setNodeOptions = function(options) {
	        this._nodeOptions = options;
	        var node = this._first;
	        while (node) {
	            node.setOptions(options);
	            node = node._next;
	        }
	        node = this._pool.layoutNodes.first;
	        while (node) {
	            node.setOptions(options);
	            node = node._next;
	        }
	    };

	    /**
	     * Pre-allocate layout-nodes ahead of using them.
	     *
	     * @param {Number} count number of nodes to pre-allocate with the given spec
	     * @param {Spec} [spec] render-spec (defined the node properties which to pre-allocate)
	     */
	    LayoutNodeManager.prototype.preallocateNodes = function(count, spec) {
	        var nodes = [];
	        for (var i = 0; i < count ; i++) {
	            nodes.push(this.createNode(undefined, spec));
	        }
	        for (i = 0; i < count ; i++) {
	            _destroyNode.call(this, nodes[i]);
	        }
	    };

	    /**
	     * Creates a layout-node
	     *
	     * @param {Object} renderNode render-node for whom to create a layout-node for
	     * @return {LayoutNode} layout-node
	     */
	    LayoutNodeManager.prototype.createNode = function(renderNode, spec) {
	        var node;
	        if (this._pool.layoutNodes.first) {
	            node = this._pool.layoutNodes.first;
	            this._pool.layoutNodes.first = node._next;
	            this._pool.layoutNodes.size--;
	            node.constructor.apply(node, arguments);
	        }
	        else {
	            node = new this.LayoutNode(renderNode, spec);
	            if (this._nodeOptions) {
	                node.setOptions(this._nodeOptions);
	            }
	        }
	        node._prev = undefined;
	        node._next = undefined;
	        node._viewSequence = undefined;
	        node._layoutCount = 0;
	        if (this._initLayoutNodeFn) {
	            this._initLayoutNodeFn.call(this, node, spec);
	        }
	        return node;
	    };

	    /**
	     * Destroys a layout-node
	     */
	    function _destroyNode(node) {

	        // Remove node from linked-list
	        if (node._next) {
	            node._next._prev = node._prev;
	        }
	        if (node._prev) {
	            node._prev._next = node._next;
	        }
	        else {
	            this._first = node._next;
	        }

	        // Destroy the node
	        node.destroy();

	        // Add node to pool
	        if (this._pool.layoutNodes.size < MAX_POOL_SIZE) {
	            this._pool.layoutNodes.size++;
	            node._prev = undefined;
	            node._next = this._pool.layoutNodes.first;
	            this._pool.layoutNodes.first = node;
	        }
	    }

	    /**
	     * Gets start layout-node for enumeration.
	     *
	     * @param {Bool} [next] undefined = all, true = all next, false = all previous
	     * @return {LayoutNode} layout-node or undefined
	     */
	    LayoutNodeManager.prototype.getStartEnumNode = function(next) {
	        if (next === undefined) {
	            return this._first;
	        } else if (next === true) {
	            return (this._contextState.start && this._contextState.startPrev) ? this._contextState.start._next : this._contextState.start;
	        } else if (next === false) {
	            return (this._contextState.start && !this._contextState.startPrev) ? this._contextState.start._prev : this._contextState.start;
	        }
	    };

	    /**
	     * Checks the integrity of the linked-list.
	     */
	    /*function _checkIntegrity() {
	        var node = this._first;
	        var count = 0;
	        var prevNode;
	        while (node) {
	            if (!node._prev && (node !== this._first)) {
	                throw 'No prev but not first';
	            }
	            if (node._prev !== prevNode) {
	                throw 'Bork';
	            }
	            prevNode = node;
	            node = node._next;
	            count++;
	        }
	    }

	    function _checkContextStateIntegrity() {
	        var node = this._contextState.start;
	        while (node) {
	            if (node === this._contextState.next) {
	                break;
	            }
	            if (!node._invalidated) {
	                throw 'WTF';
	            }
	            node = node._next;
	        }
	        node = this._contextState.start;
	        while (node) {
	            if (node === this._contextState.prev) {
	                break;
	            }
	            if (!node._invalidated) {
	                throw 'WTF';
	            }
	            node = node._prev;
	        }
	    }*/

	    /**
	     * Creates or gets a layout node.
	     */
	    function _contextGetCreateAndOrderNodes(renderNode, prev) {

	        // The first time this function is called, the current
	        // prev/next position is obtained.
	        var node;
	        var state = this._contextState;
	        if (!state.start) {
	            node = this._first;
	            while (node) {
	                if (node.renderNode === renderNode) {
	                    break;
	                }
	                node = node._next;
	            }
	            if (!node) {
	                node = this.createNode(renderNode);
	                node._next = this._first;
	                if (this._first) {
	                    this._first._prev = node;
	                }
	                this._first = node;
	            }
	            state.start = node;
	            state.startPrev = prev;
	            state.prev = node;
	            state.next = node;
	            return node;
	        }

	        // Check whether node already exist at the correct position
	        // in the linked-list. If so, return that node immediately
	        // and advance the prev/next pointer for the next/prev
	        // lookup operation.
	        if (prev) {
	            if (state.prev._prev && (state.prev._prev.renderNode === renderNode)) {
	                state.prev = state.prev._prev;
	                return state.prev;
	            }
	        }
	        else {
	            if (state.next._next && (state.next._next.renderNode === renderNode)) {
	                state.next = state.next._next;
	                return state.next;
	            }
	        }

	        // Lookup the node anywhere in the list..
	        node = this._first;
	        while (node) {
	            if (node.renderNode === renderNode) {
	                break;
	            }
	            node = node._next;
	        }

	        // Create new node if neccessary
	        if (!node) {
	            node = this.createNode(renderNode);
	        }

	        // Node existed, remove from linked-list
	        else {
	            if (node._next) {
	                node._next._prev = node._prev;
	            }
	            if (node._prev) {
	                node._prev._next = node._next;
	            }
	            else {
	                this._first = node._next;
	            }
	            node._next = undefined;
	            node._prev = undefined;
	        }

	        // Insert node into the linked list
	        if (prev) {
	            if (state.prev._prev) {
	                node._prev = state.prev._prev;
	                state.prev._prev._next = node;
	            }
	            else {
	                this._first = node;
	            }
	            state.prev._prev = node;
	            node._next = state.prev;
	            state.prev = node;
	        }
	        else {
	            if (state.next._next) {
	                node._next = state.next._next;
	                state.next._next._prev = node;
	            }
	            state.next._next = node;
	            node._prev = state.next;
	            state.next = node;
	        }

	        return node;
	    }

	    /**
	     * Get the next render-node
	     */
	    function _contextNext() {

	        // Get the next node from the sequence
	        if (!this._contextState.nextSequence) {
	            return undefined;
	        }
	        if (this._context.reverse) {
	            this._contextState.nextSequence = this._contextState.nextSequence.getNext();
	            if (!this._contextState.nextSequence) {
	                return undefined;
	            }
	        }
	        var renderNode = this._contextState.nextSequence.get();
	        if (!renderNode) {
	            this._contextState.nextSequence = undefined;
	            return undefined;
	        }
	        var nextSequence = this._contextState.nextSequence;
	        if (!this._context.reverse) {
	            this._contextState.nextSequence = this._contextState.nextSequence.getNext();
	        }
	        return {
	            renderNode: renderNode,
	            viewSequence: nextSequence,
	            next: true,
	            index: ++this._contextState.nextGetIndex
	        };
	    }

	    /**
	     * Get the previous render-node
	     */
	    function _contextPrev() {

	        // Get the previous node from the sequence
	        if (!this._contextState.prevSequence) {
	            return undefined;
	        }
	        if (!this._context.reverse) {
	            this._contextState.prevSequence = this._contextState.prevSequence.getPrevious();
	            if (!this._contextState.prevSequence) {
	                return undefined;
	            }
	        }
	        var renderNode = this._contextState.prevSequence.get();
	        if (!renderNode) {
	            this._contextState.prevSequence = undefined;
	            return undefined;
	        }
	        var prevSequence = this._contextState.prevSequence;
	        if (this._context.reverse) {
	            this._contextState.prevSequence = this._contextState.prevSequence.getPrevious();
	        }
	        return {
	            renderNode: renderNode,
	            viewSequence: prevSequence,
	            prev: true,
	            index: --this._contextState.prevGetIndex
	        };
	    }

	    /**
	     * Resolve id into a context-node.
	     */
	     function _contextGet(contextNodeOrId) {
	        if (this._nodesById && ((contextNodeOrId instanceof String) || (typeof contextNodeOrId === 'string'))) {
	            var renderNode = this._nodesById[contextNodeOrId];
	            if (!renderNode) {
	                return undefined;
	            }

	            // Return array
	            if (renderNode instanceof Array) {
	                var result = [];
	                for (var i = 0, j = renderNode.length; i < j; i++) {
	                    result.push({
	                        renderNode: renderNode[i],
	                        arrayElement: true
	                    });
	                }
	                return result;
	            }

	            // Create context node
	            return {
	                renderNode: renderNode,
	                byId: true
	            };
	        }
	        else {
	            return contextNodeOrId;
	        }
	    }

	    /**
	     * Set the node content
	     */
	    function _contextSet(contextNodeOrId, set) {
	        var contextNode = this._nodesById ? _contextGet.call(this, contextNodeOrId) : contextNodeOrId;
	        if (contextNode) {
	            var node = contextNode.node;
	            if (!node) {
	                if (contextNode.next) {
	                     if (contextNode.index < this._contextState.nextSetIndex) {
	                        LayoutUtility.error('Nodes must be layed out in the same order as they were requested!');
	                     }
	                     this._contextState.nextSetIndex = contextNode.index;
	                } else if (contextNode.prev) {
	                     if (contextNode.index > this._contextState.prevSetIndex) {
	                        LayoutUtility.error('Nodes must be layed out in the same order as they were requested!');
	                     }
	                     this._contextState.prevSetIndex = contextNode.index;
	                }
	                node = _contextGetCreateAndOrderNodes.call(this, contextNode.renderNode, contextNode.prev);
	                node._viewSequence = contextNode.viewSequence;
	                node._layoutCount++;
	                if (node._layoutCount === 1) {
	                    this._contextState.addCount++;
	                }
	                contextNode.node = node;
	            }
	            node.usesTrueSize = contextNode.usesTrueSize;
	            node.trueSizeRequested = contextNode.trueSizeRequested;
	            node.set(set, this._context.size);
	            contextNode.set = set;
	        }
	    }

	    /**
	     * Resolve the size of the layout-node from the renderable itsself
	     */
	    function _contextResolveSize(contextNodeOrId, parentSize) {
	        var contextNode = this._nodesById ? _contextGet.call(this, contextNodeOrId) : contextNodeOrId;
	        var resolveSize = this._pool.resolveSize;
	        if (!contextNode) {
	            resolveSize[0] = 0;
	            resolveSize[1] = 0;
	            return resolveSize;
	        }

	        // Get in use size
	        var renderNode = contextNode.renderNode;
	        var size = renderNode.getSize();
	        if (!size) {
	            return parentSize;
	        }

	        // Check if true-size is used and it must be reavaluated.
	        // This particular piece of code specifically handles true-size Surfaces in famo.us.
	        // It contains portions that ensure that the true-size of a Surface is re-evaluated
	        // and also workaround code that backs up the size of a Surface, so that when the surface
	        // is re-added to the DOM (e.g. when scrolling) it doesn't temporarily have a size of 0.
	        var configSize = renderNode.size && (renderNode._trueSizeCheck !== undefined) ? renderNode.size : undefined;
	        if (configSize && ((configSize[0] === true) || (configSize[1] === true))) {
	            contextNode.usesTrueSize = true;
	            var backupSize = renderNode._backupSize;
	            if (renderNode._trueSizeCheck) {

	                // Fix for true-size renderables. When true-size is used, the size
	                // is incorrect for one render-cycle due to the fact that Surface.commit
	                // updates the content after asking the DOM for the offsetHeight/offsetWidth.
	                // The code below backs the size up, and re-uses that when this scenario
	                // occurs.
	                if (backupSize && (configSize !== size)) {
	                    var newWidth = (configSize[0] === true) ? Math.max(backupSize[0], size[0]) : size[0];
	                    var newHeight = (configSize[1] === true) ? Math.max(backupSize[1], size[1]) : size[1];
	                    if ((newWidth !== backupSize[0]) || (newHeight !== backupSize[1])) {
	                        this._trueSizeRequested = true;
	                        contextNode.trueSizeRequested = true;
	                    }
	                    backupSize[0] = newWidth;
	                    backupSize[1] = newHeight;
	                    size = backupSize;
	                    renderNode._backupSize = undefined;
	                    backupSize = undefined;
	                }
	                else {
	                    this._trueSizeRequested = true;
	                    contextNode.trueSizeRequested = true;
	                }
	            }
	            if (this._reevalTrueSize || (backupSize && ((backupSize[0] !== size[0]) || (backupSize[1] !== size[1])))) {
	                renderNode._trueSizeCheck = true; // force request of true-size from DOM
	                renderNode._sizeDirty = true;
	                this._trueSizeRequested = true;
	            }

	            // Backup the size of the node
	            if (!backupSize) {
	                renderNode._backupSize = [0, 0];
	                backupSize = renderNode._backupSize;
	            }
	            backupSize[0] = size[0];
	            backupSize[1] = size[1];
	        }

	        // Ensure re-layout when a child layout-controller is using true-size and it
	        // has ben changed.
	        configSize = renderNode._nodes ? renderNode.options.size : undefined;
	        if (configSize && ((configSize[0] === true) || (configSize[1] === true))) {
	            if (this._reevalTrueSize || renderNode._nodes._trueSizeRequested) {
	                contextNode.usesTrueSize = true;
	                contextNode.trueSizeRequested = true;
	                this._trueSizeRequested = true;
	            }
	        }

	        // Resolve 'undefined' to parent-size and true to 0
	        if ((size[0] === undefined) || (size[0] === true) || (size[1] === undefined) || (size[1] === true)) {
	            resolveSize[0] = size[0];
	            resolveSize[1] = size[1];
	            size = resolveSize;
	            if (size[0] === undefined) {
	                size[0] = parentSize[0];
	            } else if (size[0] === true) {
	                size[0] = 0;
	                this._trueSizeRequested = true;
	                contextNode.trueSizeRequested = true;
	            }
	            if (size[1] === undefined) {
	                size[1] = parentSize[1];
	            } else if (size[1] === true) {
	                size[1] = 0;
	                this._trueSizeRequested = true;
	                contextNode.trueSizeRequested = true;
	            }
	        }
	        return size;
	    }

	    module.exports = LayoutNodeManager;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define*/
	/*eslint no-use-before-define:0 */

	/**
	 * Internal LayoutNode class used by `LayoutController`.
	 *
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var Transform = __webpack_require__(19);
	    var LayoutUtility = __webpack_require__(32);

	    /**
	     * @class
	     * @param {Object} renderNode Render-node which this layout-node represents
	     * @alias module:LayoutNode
	     */
	    function LayoutNode(renderNode, spec) {
	        this.renderNode = renderNode;
	        this._spec = spec ? LayoutUtility.cloneSpec(spec) : {};
	        this._spec.renderNode = renderNode; // also store in spec
	        this._specModified = true;
	        this._invalidated = false;
	        this._removing = false;
	        //this.scrollLength = undefined;
	        //this.trueSizeRequested = false;
	    }

	    /**
	     * Called to update the options for the node
	     */
	    LayoutNode.prototype.setOptions = function(options) {
	        // override to implement
	    };

	    /**
	     * Called when the node is destroyed
	     */
	    LayoutNode.prototype.destroy = function() {
	        this.renderNode = undefined;
	        this._spec.renderNode = undefined;
	        this._viewSequence = undefined;
	    };

	    /**
	     * Reset the end-state. This function is called on all layout-nodes prior to
	     * calling the layout-function. So that the layout-function starts with a clean slate.
	     */
	    LayoutNode.prototype.reset = function() {
	        this._invalidated = false;
	        this.trueSizeRequested = false;
	    };

	    /**
	     * Set the spec of the node
	     *
	     * @param {Object} spec
	     */
	    LayoutNode.prototype.setSpec = function(spec) {
	        this._specModified = true;
	        if (spec.align) {
	            if (!spec.align) {
	                this._spec.align = [0, 0];
	            }
	            this._spec.align[0] = spec.align[0];
	            this._spec.align[1] = spec.align[1];
	        }
	        else {
	            this._spec.align = undefined;
	        }
	        if (spec.origin) {
	            if (!spec.origin) {
	                this._spec.origin = [0, 0];
	            }
	            this._spec.origin[0] = spec.origin[0];
	            this._spec.origin[1] = spec.origin[1];
	        }
	        else {
	            this._spec.origin = undefined;
	        }
	        if (spec.size) {
	            if (!spec.size) {
	                this._spec.size = [0, 0];
	            }
	            this._spec.size[0] = spec.size[0];
	            this._spec.size[1] = spec.size[1];
	        }
	        else {
	            this._spec.size = undefined;
	        }
	        if (spec.transform) {
	            if (!spec.transform) {
	                this._spec.transform = spec.transform.slice(0);
	            }
	            else {
	                for (var i = 0; i < 16; i++) {
	                    this._spec.transform[0] = spec.transform[0];
	                }
	            }
	        }
	        else {
	            this._spec.transform = undefined;
	        }
	        this._spec.opacity = spec.opacity;
	    };

	    /**
	     * Set the content of the node
	     *
	     * @param {Object} set
	     */
	    LayoutNode.prototype.set = function(set, size) {
	        this._invalidated = true;
	        this._specModified = true;
	        this._removing = false;
	        var spec = this._spec;
	        spec.opacity = set.opacity;
	        if (set.size) {
	            if (!spec.size) {
	                spec.size = [0, 0];
	            }
	            spec.size[0] = set.size[0];
	            spec.size[1] = set.size[1];
	        }
	        else {
	            spec.size = undefined;
	        }
	        if (set.origin) {
	            if (!spec.origin) {
	                spec.origin = [0, 0];
	            }
	            spec.origin[0] = set.origin[0];
	            spec.origin[1] = set.origin[1];
	        }
	        else {
	            spec.origin = undefined;
	        }
	        if (set.align) {
	            if (!spec.align) {
	                spec.align = [0, 0];
	            }
	            spec.align[0] = set.align[0];
	            spec.align[1] = set.align[1];
	        }
	        else {
	            spec.align = undefined;
	        }

	        if (set.skew || set.rotate || set.scale) {
	            this._spec.transform = Transform.build({
	                translate: set.translate || [0, 0, 0],
	                skew: set.skew || [0, 0, 0],
	                scale: set.scale || [1, 1, 1],
	                rotate: set.rotate || [0, 0, 0]
	            });
	        }
	        else if (set.translate) {
	            this._spec.transform = Transform.translate(set.translate[0], set.translate[1], set.translate[2]);
	        }
	        else {
	            this._spec.transform = undefined;
	        }
	        this.scrollLength = set.scrollLength;
	    };

	    /**
	     * Creates the render-spec
	     */
	    LayoutNode.prototype.getSpec = function() {
	        this._specModified = false;
	        this._spec.removed = !this._invalidated;
	        return this._spec;
	    };

	    /**
	     * Marks the node for removal
	     */
	    LayoutNode.prototype.remove = function(removeSpec) {
	        this._removing = true;
	    };

	    module.exports = LayoutNode;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define*/
	/*eslint no-use-before-define:0 */

	/**
	 * Internal LayoutNode class used by `FlowLayoutController`.
	 *
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var OptionsManager = __webpack_require__(30);
	    var Transform = __webpack_require__(19);
	    var Vector = __webpack_require__(52);
	    var Particle = __webpack_require__(53);
	    var Spring = __webpack_require__(54);
	    var PhysicsEngine = __webpack_require__(55);
	    var LayoutNode = __webpack_require__(34);
	    var Transitionable = __webpack_require__(49);

	    /**
	     * @class
	     * @extends LayoutNode
	     * @param {Object} renderNode Render-node which this layout-node represents
	     * @param {Spec} spec Initial state
	     * @param {Object} physicsEngines physics-engines to use
	     * @alias module:FlowLayoutNode
	     */
	    function FlowLayoutNode(renderNode, spec) {
	        LayoutNode.apply(this, arguments);

	        if (!this.options) {
	            this.options = Object.create(this.constructor.DEFAULT_OPTIONS);
	            this._optionsManager = new OptionsManager(this.options);
	        }

	        if (!this._pe) {
	            this._pe = new PhysicsEngine();
	            this._pe.sleep();
	        }

	        if (!this._properties) {
	            this._properties = {};
	        }
	        else {
	            for (var propName in this._properties) {
	                this._properties[propName].init = false;
	            }
	        }

	        if (!this._lockTransitionable) {
	            this._lockTransitionable = new Transitionable(1);
	        }
	        else {
	            this._lockTransitionable.halt();
	            this._lockTransitionable.reset(1);
	        }

	        this._specModified = true;
	        this._initial = true;
	        if (spec) {
	            this.setSpec(spec);
	        }
	    }
	    FlowLayoutNode.prototype = Object.create(LayoutNode.prototype);
	    FlowLayoutNode.prototype.constructor = FlowLayoutNode;

	    FlowLayoutNode.DEFAULT_OPTIONS = {
	        spring: {
	            dampingRatio: 0.8,
	            period: 300
	        },
	        particleRounding: 0.001
	    };

	    /**
	     * Defaults
	     */
	    var DEFAULT = {
	        opacity: 1,
	        opacity2D: [1, 0],
	        size: [0, 0],
	        origin: [0, 0],
	        align: [0, 0],
	        scale: [1, 1, 1],
	        translate: [0, 0, 0],
	        rotate: [0, 0, 0],
	        skew: [0, 0, 0]
	    };

	    /**
	     * Verifies that the integrity of the layout-node is oke.
	     */
	    /*function _verifyIntegrity() {
	        var i;
	        for (var propName in this._properties) {
	            var prop = this._properties[propName];
	            if (prop.particle) {
	                if (isNaN(prop.particle.getEnergy())) {
	                    throw 'invalid particle energy: ' + propName;
	                }
	                var value = prop.particle.getPosition();
	                for (i = 0; i < value.length; i++) {
	                    if (isNaN(value[i])) {
	                       throw 'invalid particle value: ' + propName + '(' + i + ')';
	                    }
	                }
	                value = prop.endState.get();
	                for (i = 0; i < value.length; i++) {
	                    if (isNaN(value[i])) {
	                       throw 'invalid endState value: ' + propName + '(' + i + ')';
	                    }
	                }
	            }
	        }
	    }*/

	    /**
	     * Sets the configuration options
	     */
	    FlowLayoutNode.prototype.setOptions = function(options) {
	        this._optionsManager.setOptions(options);
	        var wasSleeping = this._pe.isSleeping();
	        for (var propName in this._properties) {
	            var prop = this._properties[propName];
	            if (prop.force) {
	                prop.force.setOptions(prop.force);
	            }
	        }
	        if (wasSleeping) {
	            this._pe.sleep();
	        }
	        return this;
	    };

	    /**
	     * Set the properties from a spec.
	     */
	    FlowLayoutNode.prototype.setSpec = function(spec) {
	        var set;
	        if (spec.transform) {
	            set = Transform.interpret(spec.transform);
	        }
	        if (!set) {
	            set = {};
	        }
	        set.opacity = spec.opacity;
	        set.size = spec.size;
	        set.align = spec.align;
	        set.origin = spec.origin;

	        var oldRemoving = this._removing;
	        var oldInvalidated = this._invalidated;
	        this.set(set);
	        this._removing = oldRemoving;
	        this._invalidated = oldInvalidated;
	    };

	    /**
	     * Reset the end-state. This function is called on all layout-nodes prior to
	     * calling the layout-function. So that the layout-function starts with a clean slate.
	     */
	    FlowLayoutNode.prototype.reset = function() {
	        if (this._invalidated) {
	            for (var propName in this._properties) {
	                this._properties[propName].invalidated = false;
	            }
	            this._invalidated = false;
	        }
	        this.trueSizeRequested = false;
	        this.usesTrueSize = false;
	    };

	    /**
	     * Markes the node for removal.
	     */
	    FlowLayoutNode.prototype.remove = function(removeSpec) {

	        // Transition to the remove-spec state
	        this._removing = true;
	        if (removeSpec) {
	            this.setSpec(removeSpec);
	        }
	        else {
	            this._pe.sleep();
	            this._specModified = false;
	        }

	        // Mark for removal
	        this._invalidated = false;
	    };

	    /**
	     * Temporarily releases the flowing-lock that is applied to the node.
	     * E.g., when changing position, resizing, the lock should be released so that
	     * the renderables can smoothly transition to their new positions.
	     */
	    FlowLayoutNode.prototype.releaseLock = function(duration) {
	        this._lockTransitionable.halt();
	        this._lockTransitionable.reset(0);
	        this._lockTransitionable.set(1, {
	            duration: duration || this.options.spring.period || 1000
	        });
	    };

	    /**
	     * Helper function for getting the property value.
	     */
	    function _getRoundedValue3D(prop, def, precision, lockValue) {
	        if (!prop || !prop.init) {
	            return def;
	        }
	        return [
	            Math.round((prop.curState.x + ((prop.endState.x - prop.curState.x) * lockValue)) / precision) * precision,
	            Math.round((prop.curState.y + ((prop.endState.y - prop.curState.y) * lockValue)) / precision) * precision,
	            Math.round((prop.curState.z + ((prop.endState.z - prop.curState.z) * lockValue)) / precision) * precision
	        ];
	    }

	    /**
	     * Creates the render-spec
	     */
	    FlowLayoutNode.prototype.getSpec = function() {

	        // When the end state was reached, return the previous spec
	        var endStateReached = this._pe.isSleeping();
	        if (!this._specModified && endStateReached) {
	            this._spec.removed = !this._invalidated;
	            return this._spec;
	        }
	        this._initial = false;
	        this._specModified = !endStateReached;
	        this._spec.removed = false;

	        // Step physics engine when not sleeping
	        if (!endStateReached) {
	            this._pe.step();
	        }

	        // Build fresh spec
	        var spec = this._spec;
	        var precision = this.options.particleRounding;
	        var lockValue = this._lockTransitionable.get();

	        // opacity
	        var prop = this._properties.opacity;
	        if (prop && prop.init) {
	            spec.opacity = Math.round(Math.max(0, Math.min(1, prop.curState.x)) / precision) * precision;
	        }
	        else {
	            spec.opacity = undefined;
	        }

	        // size
	        prop = this._properties.size;
	        if (prop && prop.init) {
	            spec.size = spec.size || [0, 0];
	            spec.size[0] = Math.round((prop.curState.x + ((prop.endState.x - prop.curState.x) * lockValue)) / 0.1) * 0.1;
	            spec.size[1] = Math.round((prop.curState.y + ((prop.endState.y - prop.curState.y) * lockValue)) / 0.1) * 0.1;
	        }
	        else {
	            spec.size = undefined;
	        }

	        // align
	        prop = this._properties.align;
	        if (prop && prop.init) {
	            spec.align = spec.align || [0, 0];
	            spec.align[0] = Math.round((prop.curState.x + ((prop.endState.x - prop.curState.x) * lockValue)) / 0.1) * 0.1;
	            spec.align[1] = Math.round((prop.curState.y + ((prop.endState.y - prop.curState.y) * lockValue)) / 0.1) * 0.1;
	        }
	        else {
	            spec.align = undefined;
	        }

	        // origin
	        prop = this._properties.origin;
	        if (prop && prop.init) {
	            spec.origin = spec.origin || [0, 0];
	            spec.origin[0] = Math.round((prop.curState.x + ((prop.endState.x - prop.curState.x) * lockValue)) / 0.1) * 0.1;
	            spec.origin[1] = Math.round((prop.curState.y + ((prop.endState.y - prop.curState.y) * lockValue)) / 0.1) * 0.1;
	        }
	        else {
	            spec.origin = undefined;
	        }

	        // translate
	        var translate = this._properties.translate;
	        var translateX;
	        var translateY;
	        var translateZ;
	        if (translate && translate.init) {
	            translateX = Math.round((translate.curState.x + ((translate.endState.x - translate.curState.x) * lockValue)) / precision) * precision;
	            translateY = Math.round((translate.curState.y + ((translate.endState.y - translate.curState.y) * lockValue)) / precision) * precision;
	            translateZ = Math.round((translate.curState.z + ((translate.endState.z - translate.curState.z) * lockValue)) / precision) * precision;
	        }
	        else {
	            translateX = 0;
	            translateY = 0;
	            translateZ = 0;
	        }

	        // scale, skew, scale
	        var scale = this._properties.scale;
	        var skew = this._properties.skew;
	        var rotate = this._properties.rotate;
	        if (scale || skew || rotate) {
	            spec.transform = Transform.build({
	                translate: [translateX, translateY, translateZ],
	                skew: _getRoundedValue3D.call(this, skew, DEFAULT.skew, this.options.particleRounding, lockValue),
	                scale: _getRoundedValue3D.call(this, scale, DEFAULT.scale, this.options.particleRounding, lockValue),
	                rotate: _getRoundedValue3D.call(this, rotate, DEFAULT.rotate, this.options.particleRounding, lockValue)
	            });
	        }
	        else if (translate) {
	            if (!spec.transform) {
	                spec.transform = Transform.translate(translateX, translateY, translateZ);
	            }
	            else {
	                spec.transform[12] = translateX;
	                spec.transform[13] = translateY;
	                spec.transform[14] = translateZ;
	            }
	        }
	        else {
	            spec.transform = undefined;
	        }
	        return this._spec;
	    };

	    /**
	     * Helper function to set the property of a node (e.g. opacity, translate, etc..)
	     */
	    function _setPropertyValue(prop, propName, endState, defaultValue, immediate, isTranslate) {

	        // Get property
	        prop = prop || this._properties[propName];

	        // Update the property
	        if (prop && prop.init) {
	            prop.invalidated = true;
	            var value = defaultValue;
	            if (endState !== undefined) {
	                value = endState;
	            }
	            else if (this._removing) {
	                value = prop.particle.getPosition();
	            }
	            //if (isTranslate && (this._lockDirection !== undefined) && (this._lockTransitionable.get() === 1)) {
	            //    immediate = true; // this is a bit dirty, it should check !_lockDirection for non changes as well before setting immediate to true
	            //}
	            // set new end state (the quick way)
	            prop.endState.x = value[0];
	            prop.endState.y = (value.length > 1) ? value[1] : 0;
	            prop.endState.z = (value.length > 2) ? value[2] : 0;
	            if (immediate) {
	                // set current state (the quick way)
	                prop.curState.x = prop.endState.x;
	                prop.curState.y = prop.endState.y;
	                prop.curState.z = prop.endState.z;
	                // reset velocity (the quick way)
	                prop.velocity.x = 0;
	                prop.velocity.y = 0;
	                prop.velocity.z = 0;
	            }
	            else if ((prop.endState.x !== prop.curState.x) ||
	                     (prop.endState.y !== prop.curState.y) ||
	                     (prop.endState.z !== prop.curState.z)) {
	                this._pe.wake();
	            }
	            return;
	        }
	        else {

	            // Create property if neccesary
	            var wasSleeping = this._pe.isSleeping();
	            if (!prop) {
	                prop = {
	                    particle: new Particle({
	                        position: (this._initial || immediate) ? endState : defaultValue
	                    }),
	                    endState: new Vector(endState)
	                };
	                prop.curState = prop.particle.position;
	                prop.velocity = prop.particle.velocity;
	                prop.force = new Spring(this.options.spring);
	                prop.force.setOptions({
	                    anchor: prop.endState
	                });
	                this._pe.addBody(prop.particle);
	                prop.forceId = this._pe.attach(prop.force, prop.particle);
	                this._properties[propName] = prop;
	            }
	            else {
	                prop.particle.setPosition((this._initial || immediate) ? endState : defaultValue);
	                prop.endState.set(endState);
	            }
	            if (!this._initial && !immediate) {
	                this._pe.wake();
	            } else if (wasSleeping) {
	                this._pe.sleep(); // nothing has changed, put back to sleep
	            }
	            prop.init = true;
	            prop.invalidated = true;
	        }
	    }

	    /**
	     * Get value if not equals.
	     */
	    function _getIfNE2D(a1, a2) {
	        return ((a1[0] === a2[0]) && (a1[1] === a2[1])) ? undefined : a1;
	    }
	    function _getIfNE3D(a1, a2) {
	        return ((a1[0] === a2[0]) && (a1[1] === a2[1]) && (a1[2] === a2[2])) ? undefined : a1;
	    }

	    /**
	     * context.set(..)
	     */
	    FlowLayoutNode.prototype.set = function(set, defaultSize) {
	        if (defaultSize) {
	            this._removing = false;
	        }
	        this._invalidated = true;
	        this.scrollLength = set.scrollLength;
	        this._specModified = true;

	        // opacity
	        var prop = this._properties.opacity;
	        var value = (set.opacity === DEFAULT.opacity) ? undefined : set.opacity;
	        if ((value !== undefined) || (prop && prop.init)) {
	            _setPropertyValue.call(this, prop, 'opacity', (value === undefined) ? undefined : [value, 0], DEFAULT.opacity2D);
	        }

	        // set align
	        prop = this._properties.align;
	        value = set.align ? _getIfNE2D(set.align, DEFAULT.align) : undefined;
	        if (value || (prop && prop.init)) {
	            _setPropertyValue.call(this, prop, 'align', value, DEFAULT.align);
	        }

	        // set orgin
	        prop = this._properties.origin;
	        value = set.origin ? _getIfNE2D(set.origin, DEFAULT.origin) : undefined;
	        if (value || (prop && prop.init)) {
	            _setPropertyValue.call(this, prop, 'origin', value, DEFAULT.origin);
	        }

	        // set size
	        prop = this._properties.size;
	        value = set.size || defaultSize;
	        if (value || (prop && prop.init)) {
	            _setPropertyValue.call(this, prop, 'size', value, defaultSize, this.usesTrueSize);
	        }

	        // set translate
	        prop = this._properties.translate;
	        value = set.translate;
	        if (value || (prop && prop.init)) {
	            _setPropertyValue.call(this, prop, 'translate', value, DEFAULT.translate, undefined, true);
	        }

	        // set scale
	        prop = this._properties.scale;
	        value = set.scale ? _getIfNE3D(set.scale, DEFAULT.scale) : undefined;
	        if (value || (prop && prop.init)) {
	            _setPropertyValue.call(this, prop, 'scale', value, DEFAULT.scale);
	        }

	        // set rotate
	        prop = this._properties.rotate;
	        value = set.rotate ? _getIfNE3D(set.rotate, DEFAULT.rotate) : undefined;
	        if (value || (prop && prop.init)) {
	            _setPropertyValue.call(this, prop, 'rotate', value, DEFAULT.rotate);
	        }

	        // set skew
	        prop = this._properties.skew;
	        value = set.skew ? _getIfNE3D(set.skew, DEFAULT.skew) : undefined;
	        if (value || (prop && prop.init)) {
	            _setPropertyValue.call(this, prop, 'skew', value, DEFAULT.skew);
	        }
	    };

	    module.exports = FlowLayoutNode;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define*/

	/**
	 * LayoutDockHelper helps positioning nodes using docking principles.
	 *
	 * **Example:**
	 *
	 * ```javascript
	 * var LayoutDockHelper = require('famous-flex/helpers/LayoutDockHelper');
	 *
	 * function HeaderFooterLayout(context, options) {
	 *   var dock = new LayoutDockHelper(context);
	 *   dock.top('header', options.headerHeight);
	 *   dock.bottom('footer', options.footerHeight);
	 *   dock.fill('content');
	 * };
	 * ```
	 *
	 * You can also use layout-literals to create layouts using docking semantics:
	 *
	 * ```javascript
	 * var layoutController = new LayoutController({
	 *   layout: {dock: [
	 *     ['top', 'header', 40],
	 *     ['bottom', 'footer', 40, 1], // z-index +1
	 *     ['fill', 'content']
	 *   ]},
	 *   dataSource: {
	 *     header: new Surface({content: 'header'}),
	 *     footer: new Surface({content: 'footer'}),
	 *     content: new Surface({content: 'content'}),
	 *   }
	 * });
	 * ```
	 *
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var LayoutUtility = __webpack_require__(32);

	    /**
	     * @class
	     * @param {LayoutContext} context layout-context
	     * @param {Object} [options] additional options
	     * @param {Object} [options.margins] margins to start out with (default: 0px)
	     * @param {Number} [options.translateZ] z-index to use when translating objects (default: 0)
	     * @alias module:LayoutDockHelper
	     */
	    function LayoutDockHelper(context, options) {
	        var size = context.size;
	        this._size = size;
	        this._context = context;
	        this._options = options;
	        this._z = (options && options.translateZ) ? options.translateZ : 0;
	        if (options && options.margins) {
	            var margins = LayoutUtility.normalizeMargins(options.margins);
	            this._left = margins[3];
	            this._top = margins[0];
	            this._right = size[0] - margins[1];
	            this._bottom = size[1] - margins[2];
	        }
	        else {
	            this._left = 0;
	            this._top = 0;
	            this._right = size[0];
	            this._bottom = size[1];
	        }
	    }

	    /**
	     * Parses the layout-rules based on a JSON data object.
	     * The object should be an array with the following syntax:
	     * `[[rule, node, value, z], [rule, node, value, z], ...]`
	     *
	     * **Example:**
	     *
	     * ```JSON
	     * [
	     *   ['top', 'header', 50],
	     *   ['bottom', 'footer', 50, 10], // z-index: 10
	     *   ['margins', [10, 5]], // marginate remaining space: 10px top/bottom, 5px left/right
	     *   ['fill', 'content']
	     * ]
	     * ```
	     *
	     * @param {Object} data JSON object
	     */
	    LayoutDockHelper.prototype.parse = function(data) {
	        for (var i = 0; i < data.length; i++) {
	            var rule = data[i];
	            var value = (rule.length >= 3) ? rule[2] : undefined;
	            if (rule[0] === 'top') {
	                this.top(rule[1], value, (rule.length >=4) ? rule[3] : undefined);
	            } else if (rule[0] === 'left') {
	                this.left(rule[1], value, (rule.length >=4) ? rule[3] : undefined);
	            } else if (rule[0] === 'right') {
	                this.right(rule[1], value, (rule.length >=4) ? rule[3] : undefined);
	            } else if (rule[0] === 'bottom') {
	                this.bottom(rule[1], value, (rule.length >=4) ? rule[3] : undefined);
	            } else if (rule[0] === 'fill') {
	                this.fill(rule[1], (rule.length >=3) ? rule[2] : undefined);
	            } else if (rule[0] === 'margins') {
	                this.margins(rule[1]);
	            }
	        }
	    };

	    /**
	     * Dock the node to the top.
	     *
	     * @param {LayoutNode|String} [node] layout-node to dock, when ommited the `height` argument argument is used for padding
	     * @param {Number} [height] height of the layout-node, when ommited the height of the node is used
	     * @param {Number} [z] z-index to use for the node
	     * @return {LayoutDockHelper} this
	     */
	    LayoutDockHelper.prototype.top = function(node, height, z) {
	        if (height instanceof Array) {
	            height = height[1];
	        }
	        if (height === undefined) {
	            var size = this._context.resolveSize(node, [this._right - this._left, this._bottom - this._top]);
	            height = size[1];
	        }
	        this._context.set(node, {
	            size: [this._right - this._left, height],
	            origin: [0, 0],
	            align: [0, 0],
	            translate: [this._left, this._top, (z === undefined) ? this._z : z]
	        });
	        this._top += height;
	        return this;
	    };

	    /**
	     * Dock the node to the left
	     *
	     * @param {LayoutNode|String} [node] layout-node to dock, when ommited the `width` argument argument is used for padding
	     * @param {Number} [width] width of the layout-node, when ommited the width of the node is used
	     * @param {Number} [z] z-index to use for the node
	     * @return {LayoutDockHelper} this
	     */
	    LayoutDockHelper.prototype.left = function(node, width, z) {
	        if (width instanceof Array) {
	            width = width[0];
	        }
	        if (width === undefined) {
	            var size = this._context.resolveSize(node, [this._right - this._left, this._bottom - this._top]);
	            width = size[0];
	        }
	        this._context.set(node, {
	            size: [width, this._bottom - this._top],
	            origin: [0, 0],
	            align: [0, 0],
	            translate: [this._left, this._top, (z === undefined) ? this._z : z]
	        });
	        this._left += width;
	        return this;
	    };

	    /**
	     * Dock the node to the bottom
	     *
	     * @param {LayoutNode|String} [node] layout-node to dock, when ommited the `height` argument argument is used for padding
	     * @param {Number} [height] height of the layout-node, when ommited the height of the node is used
	     * @param {Number} [z] z-index to use for the node
	     * @return {LayoutDockHelper} this
	     */
	    LayoutDockHelper.prototype.bottom = function(node, height, z) {
	        if (height instanceof Array) {
	            height = height[1];
	        }
	        if (height === undefined) {
	            var size = this._context.resolveSize(node, [this._right - this._left, this._bottom - this._top]);
	            height = size[1];
	        }
	        this._context.set(node, {
	            size: [this._right - this._left, height],
	            origin: [0, 1],
	            align: [0, 1],
	            translate: [this._left, -(this._size[1] - this._bottom), (z === undefined) ? this._z : z]
	        });
	        this._bottom -= height;
	        return this;
	    };

	    /**
	     * Dock the node to the right.
	     *
	     * @param {LayoutNode|String} [node] layout-node to dock, when ommited the `width` argument argument is used for padding
	     * @param {Number} [width] width of the layout-node, when ommited the width of the node is used
	     * @param {Number} [z] z-index to use for the node
	     * @return {LayoutDockHelper} this
	     */
	    LayoutDockHelper.prototype.right = function(node, width, z) {
	        if (width instanceof Array) {
	            width = width[0];
	        }
	        if (node) {
	            if (width === undefined) {
	                var size = this._context.resolveSize(node, [this._right - this._left, this._bottom - this._top]);
	                width = size[0];
	            }
	            this._context.set(node, {
	                size: [width, this._bottom - this._top],
	                origin: [1, 0],
	                align: [1, 0],
	                translate: [-(this._size[0] - this._right), this._top, (z === undefined) ? this._z : z]
	            });
	        }
	        if (width) {
	            this._right -= width;
	        }
	        return this;
	    };

	    /**
	     * Fills the node to the remaining content.
	     *
	     * @param {LayoutNode|String} node layout-node to dock
	     * @param {Number} [z] z-index to use for the node
	     * @return {LayoutDockHelper} this
	     */
	    LayoutDockHelper.prototype.fill = function(node, z) {
	        this._context.set(node, {
	            size: [this._right - this._left, this._bottom - this._top],
	            translate: [this._left, this._top, (z === undefined) ? this._z : z]
	        });
	        return this;
	    };

	    /**
	     * Applies indent margins to the remaining content.
	     *
	     * @param {Number|Array} margins margins shorthand (e.g. '5', [10, 10], [5, 10, 5, 10])
	     * @return {LayoutDockHelper} this
	     */
	    LayoutDockHelper.prototype.margins = function(margins) {
	        margins = LayoutUtility.normalizeMargins(margins);
	        this._left += margins[3];
	        this._top += margins[0];
	        this._right -= margins[1];
	        this._bottom -= margins[2];
	        return this;
	    };

	    // Register the helper
	    LayoutUtility.registerHelper('dock', LayoutDockHelper);

	    module.exports = LayoutDockHelper;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define, console*/
	/*eslint no-use-before-define:0, no-console:0 */

	/**
	 * Scrollable layout-controller.
	 *
	 * Key features:
	 * -    Customizable layout
	 * -    Insert/remove renderables into the scene using animations/spec
	 * -    Support for `true` size renderables
	 * -    Horizontal/vertical direction
	 * -    Top/left or bottom/right alignment
	 * -    Pagination
	 * -    Option to embed in a ContainerSurface
	 *
	 * Events:
	 *
	 * |event      |description|
	 * |-----------|-----------|
	 * |scrollstart|Emitted when scrolling starts.|
	 * |scroll     |Emitted as the content scrolls (once for each frame the visible offset has changed).|
	 * |pagechange |Emitted whenever the visible page changes.|
	 * |scrollend  |Emitted after scrolling stops (when the scroll particle settles).|
	 *
	 * Inherited from: [LayoutController](./LayoutController.md)
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var LayoutUtility = __webpack_require__(32);
	    var LayoutController = __webpack_require__(9);
	    var LayoutNode = __webpack_require__(34);
	    var FlowLayoutNode = __webpack_require__(35);
	    var LayoutNodeManager = __webpack_require__(33);
	    var ContainerSurface = __webpack_require__(56);
	    var Transform = __webpack_require__(19);
	    var EventHandler = __webpack_require__(31);
	    var Group = __webpack_require__(57);
	    var Vector = __webpack_require__(52);
	    var PhysicsEngine = __webpack_require__(55);
	    var Particle = __webpack_require__(53);
	    var Drag = __webpack_require__(58);
	    var Spring = __webpack_require__(54);
	    var ScrollSync = __webpack_require__(59);
	    var ViewSequence = __webpack_require__(29);

	    /**
	     * Boudary reached detection
	     */
	    var Bounds = {
	        NONE: 0,
	        PREV: 1, // top
	        NEXT: 2, // bottom
	        BOTH: 3
	    };

	    /**
	     * Source of the spring
	     */
	    var SpringSource = {
	        NONE: 'none',
	        NEXTBOUNDS: 'next-bounds', // top
	        PREVBOUNDS: 'prev-bounds', // bottom
	        MINSIZE: 'minimal-size',
	        GOTOSEQUENCE: 'goto-sequence',
	        ENSUREVISIBLE: 'ensure-visible',
	        GOTOPREVDIRECTION: 'goto-prev-direction',
	        GOTONEXTDIRECTION: 'goto-next-direction'
	    };

	    /**
	     * Pagination modes
	     */
	    var PaginationMode = {
	        PAGE: 0,
	        SCROLL: 1
	    };

	    /**
	     * @class
	     * @extends LayoutController
	     * @param {Object} options Configurable options (see LayoutController for all inherited options).
	     * @param {Bool} [options.useContainer] Embeds the view in a ContainerSurface to hide any overflow and capture input events (default: `false`).
	     * @param {String} [options.container] Options that are passed to the ContainerSurface in case `useContainer` is true.
	     * @param {Bool} [options.paginated] Enabled pagination when set to `true` (default: `false`).
	     * @param {Number} [options.paginationEnergyThresshold] Thresshold after which pagination kicks in (default: `0.01`).
	     * @param {PaginationMode} [options.paginationMode] Pagination-mode (either page-based or scroll-based) (default: `PaginationMode.PAGE`).
	     * @param {Number} [options.alignment] Alignment of the renderables (0 = top/left, 1 = bottom/right) (default: `0`).
	     * @param {Bool} [options.mouseMove] Enables scrolling by holding the mouse-button down and moving the mouse (default: `false`).
	     * @param {Bool} [options.enabled] Enables or disabled user input (default: `true`).
	     * @param {Object} [options.nodeSpring] Spring options to use when transitioning renderables between scenes
	     * @param {Object} [options.scrollParticle] Options for the scroll particle (default: `{}`)
	     * @param {Object} [options.scrollSpring] Spring-force options that are applied on the scroll particle when e.g. bounds is reached (default: `{dampingRatio: 1.0, period: 350}`)
	     * @param {Object} [options.scrollDrag] Drag-force options to apply on the scroll particle
	     * @param {Object} [options.scrollFriction] Friction-force options to apply on the scroll particle
	     * @param {Bool} [options.layoutAll] When set to true, always lays out all renderables in the datasource (default: `false`).
	     * @param {Number} [options.visibleItemThresshold] Thresshold (0..1) used for determining whether an item is considered to be the first/last visible item (default: `0.5`).
	     * @param {Bool} [options.debug] Logs debug output to the console (default: `false`).
	     * @alias module:ScrollController
	     */
	    function ScrollController(options) {
	        options = LayoutUtility.combineOptions(ScrollController.DEFAULT_OPTIONS, options);
	        var layoutManager = new LayoutNodeManager(options.flow ? FlowLayoutNode : LayoutNode, _initLayoutNode.bind(this));
	        LayoutController.call(this, options, layoutManager);

	        // Scrolling
	        this._scroll = {
	            activeTouches: [],
	            // physics-engine to use for scrolling
	            pe: new PhysicsEngine(),
	            // particle that represents the scroll-offset
	            particle: new Particle(this.options.scrollParticle),
	            // drag-force that slows the particle down after a "flick"
	            dragForce: new Drag(this.options.scrollDrag),
	            frictionForce: new Drag(this.options.scrollFriction),
	            // spring
	            springValue: undefined,
	            springForce: new Spring(this.options.scrollSpring),
	            springEndState: new Vector([0, 0, 0]),
	            // group
	            groupStart: 0,
	            groupTranslate: [0, 0, 0],
	            // delta
	            scrollDelta: 0,
	            normalizedScrollDelta: 0,
	            scrollForce: 0,
	            scrollForceCount: 0,
	            unnormalizedScrollOffset: 0,
	            // state
	            isScrolling: false
	        };

	        // Diagnostics
	        this._debug = {
	            layoutCount: 0,
	            commitCount: 0
	        };

	        // Create groupt for faster rendering
	        this.group = new Group();
	        this.group.add({render: _innerRender.bind(this)});

	        // Configure physics engine with particle and drag
	        this._scroll.pe.addBody(this._scroll.particle);
	        if (!this.options.scrollDrag.disabled) {
	            this._scroll.dragForceId = this._scroll.pe.attach(this._scroll.dragForce, this._scroll.particle);
	        }
	        if (!this.options.scrollFriction.disabled) {
	            this._scroll.frictionForceId = this._scroll.pe.attach(this._scroll.frictionForce, this._scroll.particle);
	        }
	        this._scroll.springForce.setOptions({ anchor: this._scroll.springEndState });

	        // Listen to touch events
	        this._eventInput.on('touchstart', _touchStart.bind(this));
	        this._eventInput.on('touchmove', _touchMove.bind(this));
	        this._eventInput.on('touchend', _touchEnd.bind(this));
	        this._eventInput.on('touchcancel', _touchEnd.bind(this));

	        // Listen to mouse-move events
	        this._eventInput.on('mousedown', _mouseDown.bind(this));
	        this._eventInput.on('mouseup', _mouseUp.bind(this));
	        this._eventInput.on('mousemove', _mouseMove.bind(this));

	        // Listen to mouse-wheel events
	        this._scrollSync = new ScrollSync(this.options.scrollSync);
	        this._eventInput.pipe(this._scrollSync);
	        this._scrollSync.on('update', _scrollUpdate.bind(this));

	        // Embed in container surface if neccesary
	        if (this.options.useContainer) {
	            this.container = new ContainerSurface(this.options.container);

	            // Create container surface, which has one child, which just returns
	            // the entity-id of this scrollview. This causes the Commit function
	            // of this scrollview to be called
	            this.container.add({
	                render: function() {
	                    return this.id;
	                }.bind(this)
	            });

	            // Pipe events received in container to this scrollview
	            if (!this.options.autoPipeEvents) {
	                this.subscribe(this.container);
	                EventHandler.setInputHandler(this.container, this);
	                EventHandler.setOutputHandler(this.container, this);
	            }
	        }
	    }
	    ScrollController.prototype = Object.create(LayoutController.prototype);
	    ScrollController.prototype.constructor = ScrollController;
	    ScrollController.Bounds = Bounds;
	    ScrollController.PaginationMode = PaginationMode;

	    ScrollController.DEFAULT_OPTIONS = {
	        flow: false,
	        //insertSpec: undefined,
	        //removeSpec: undefined,
	        useContainer: false,    // when true embeds inside a ContainerSurface for capturing input events & clipping
	        container: {
	            properties: {
	                overflow: 'hidden' // overflow mode when useContainer is enabled
	            }
	        },
	        visibleItemThresshold: 0.5, // by default, when an item is 50% visible, it is considered visible by `getFirstVisibleItem`
	        scrollParticle: {
	            // use defaults
	        },
	        scrollDrag: {
	            forceFunction: Drag.FORCE_FUNCTIONS.QUADRATIC,
	            strength: 0.001,
	            disabled: true
	        },
	        scrollFriction: {
	            forceFunction: Drag.FORCE_FUNCTIONS.LINEAR,
	            strength: 0.0025,
	            disabled: false
	        },
	        scrollSpring: {
	            dampingRatio: 1.0,
	            period: 350
	        },
	        scrollSync: {
	            scale: 0.2
	        },
	        paginated: false,
	        paginationMode: PaginationMode.PAGE,
	        paginationEnergyThresshold: 0.01,
	        alignment: 0,         // [0: top/left, 1: bottom/right]
	        touchMoveDirectionThresshold: undefined, // 0..1
	        touchMoveNoVelocityDuration: 100,
	        mouseMove: false,
	        enabled: true,          // set to false to disable scrolling
	        layoutAll: false,       // set to true is you want all renderables layed out/rendered
	        alwaysLayout: false,    // set to true to always call the layout function
	        extraBoundsSpace: [100, 100],
	        debug: false
	    };

	    /**
	     * Patches the ScrollController instance's options with the passed-in ones.
	     *
	     * @param {Object} options Configurable options (see LayoutController for all inherited options).
	     * @param {Bool} [options.paginated] Enabled pagination when set to `true` (default: `false`).
	     * @param {Number} [options.paginationEnergyThresshold] Thresshold after which pagination kicks in (default: `0.01`).
	     * @param {PaginationMode} [options.paginationMode] Pagination-mode (either page-based or scroll-based) (default: `PaginationMode.PAGE`).
	     * @param {Number} [options.alignment] Alignment of the renderables (0 = top/left, 1 = bottom/right) (default: `0`).
	     * @param {Bool} [options.mouseMove] Enables scrolling by holding the mouse-button down and moving the mouse (default: `false`).
	     * @param {Bool} [options.enabled] Enables or disabled user input (default: `true`).
	     * @param {Object} [options.nodeSpring] Spring options to use when transitioning renderables between scenes
	     * @param {Object} [options.scrollParticle] Options for the scroll particle (default: `{}`)
	     * @param {Object} [options.scrollSpring] Spring-force options that are applied on the scroll particle when e.g. bounds is reached (default: `{dampingRatio: 1.0, period: 500}`)
	     * @param {Object} [options.scrollDrag] Drag-force options to apply on the scroll particle
	     * @param {Object} [options.scrollFriction] Friction-force options to apply on the scroll particle
	     * @param {Number} [options.visibleItemThresshold] Thresshold (0..1) used for determining whether an item is considered to be the first/last visible item (default: `0.5`).
	     * @param {Bool} [options.layoutAll] When set to true, always lays out all renderables in the datasource (default: `false`).
	     * @param {Bool} [options.debug] Logs debug output to the console (default: `false`).
	     * @return {ScrollController} this
	     */
	    ScrollController.prototype.setOptions = function(options) {
	        LayoutController.prototype.setOptions.call(this, options);
	        if (this._scroll) {
	            if (options.scrollSpring) {
	                this._scroll.springForce.setOptions(options.scrollSpring);
	            }
	            if (options.scrollDrag) {
	                this._scroll.dragForce.setOptions(options.scrollDrag);
	            }
	        }
	        if (options.scrollSync && this._scrollSync) {
	            this._scrollSync.setOptions(options.scrollSync);
	        }
	        return this;
	    };

	    /**
	     * Called whenever a layout-node is created/re-used. Initializes
	     * the node with the `insertSpec` if it has been defined and enabled
	     * locking of the x/y translation so that the x/y position of the renderable
	     * is immediately updated when the user scrolls the view.
	     */
	    function _initLayoutNode(node, spec) {
	        if (!spec && this.options.insertSpec) {
	            node.setSpec(this.options.insertSpec);
	        }
	    }

	    /**
	     * Helper function for logging debug statements to the console.
	     */
	    /*function _log(args) {
	        if (!this.options.debug) {
	            return;
	        }
	        var message = this._debug.commitCount + ': ';
	        for (var i = 0, j = arguments.length; i < j; i++) {
	            var arg = arguments[i];
	            if ((arg instanceof Object) || (arg instanceof Array)) {
	                message += JSON.stringify(arg);
	            }
	            else {
	                message += arg;
	            }
	        }
	        console.log(message);
	    }*/

	    /**
	     * Sets the value for the spring, or set to `undefined` to disable the spring
	     */
	    function _updateSpring() {
	        var springValue = this._scroll.scrollForceCount ? undefined : this._scroll.springPosition;
	        if (this._scroll.springValue !== springValue) {
	            this._scroll.springValue = springValue;
	            if (springValue === undefined) {
	                if (this._scroll.springForceId !== undefined) {
	                    this._scroll.pe.detach(this._scroll.springForceId);
	                    this._scroll.springForceId = undefined;
	                    //_log.call(this, 'disabled spring');
	                }
	            }
	            else {
	                if (this._scroll.springForceId === undefined) {
	                    this._scroll.springForceId = this._scroll.pe.attach(this._scroll.springForce, this._scroll.particle);
	                }
	                this._scroll.springEndState.set1D(springValue);
	                this._scroll.pe.wake();
	                //_log.call(this, 'setting spring to: ', springValue, ' (', this._scroll.springSource, ')');
	            }
	        }
	    }

	    /**
	     * Called whenever the user presses the mouse button on the scrollview
	     */
	    function _mouseDown(event) {

	        // Check whether mouse-scrolling is enabled
	        if (!this.options.mouseMove) {
	            return;
	        }

	        // Reset any previous mouse-move operation that has not yet been
	        // cleared.
	        if (this._scroll.mouseMove) {
	            this.releaseScrollForce(this._scroll.mouseMove.delta);
	        }

	        // Calculate start of move operation
	        var current = [event.clientX, event.clientY];
	        var time = Date.now();
	        this._scroll.mouseMove = {
	            delta: 0,
	            start: current,
	            current: current,
	            prev: current,
	            time: time,
	            prevTime: time
	        };

	        // Apply scroll force
	        this.applyScrollForce(this._scroll.mouseMove.delta);
	    }
	    function _mouseMove(event) {

	        // Check if any mouse-move is active
	        if (!this._scroll.mouseMove || !this.options.enabled) {
	            return;
	        }

	        // When a thresshold is configured, check whether the move operation (x/y ratio)
	        // lies within the thresshold. A move of 10 pixels x and 10 pixels y is considered 45 deg,
	        // which corresponds to a thresshold of 0.5.
	        var moveDirection = Math.atan2(
	            Math.abs(event.clientY - this._scroll.mouseMove.prev[1]),
	            Math.abs(event.clientX - this._scroll.mouseMove.prev[0])) / (Math.PI / 2.0);
	        var directionDiff = Math.abs(this._direction - moveDirection);
	        if ((this.options.touchMoveDirectionThresshold === undefined) || (directionDiff <= this.options.touchMoveDirectionThresshold)){
	            this._scroll.mouseMove.prev = this._scroll.mouseMove.current;
	            this._scroll.mouseMove.current = [event.clientX, event.clientY];
	            this._scroll.mouseMove.prevTime = this._scroll.mouseMove.time;
	            this._scroll.mouseMove.direction = moveDirection;
	            this._scroll.mouseMove.time = Date.now();
	        }

	        // Update scroll-force
	        var delta = this._scroll.mouseMove.current[this._direction] - this._scroll.mouseMove.start[this._direction];
	        this.updateScrollForce(this._scroll.mouseMove.delta, delta);
	        this._scroll.mouseMove.delta = delta;
	    }
	    function _mouseUp(event) {

	        // Check if any mouse-move is active
	        if (!this._scroll.mouseMove) {
	            return;
	        }

	        // Calculate delta and velocity
	        var velocity = 0;
	        var diffTime = this._scroll.mouseMove.time - this._scroll.mouseMove.prevTime;
	        if ((diffTime > 0) && ((Date.now() - this._scroll.mouseMove.time) <= this.options.touchMoveNoVelocityDuration)) {
	            var diffOffset = this._scroll.mouseMove.current[this._direction] - this._scroll.mouseMove.prev[this._direction];
	            velocity = diffOffset / diffTime;
	        }

	        // Release scroll force
	        this.releaseScrollForce(this._scroll.mouseMove.delta, velocity);
	        this._scroll.mouseMove = undefined;
	    }

	    /**
	     * Called whenever the user starts moving the scroll-view, using
	     * touch gestures.
	     */
	    function _touchStart(event) {

	        // Create touch-end event listener
	        if (!this._touchEndEventListener) {
	            this._touchEndEventListener = function(event2) {
	                event2.target.removeEventListener('touchend', this._touchEndEventListener);
	                _touchEnd.call(this, event2);
	            }.bind(this);
	        }

	        // Remove any touches that are no longer active
	        var oldTouchesCount = this._scroll.activeTouches.length;
	        var i = 0;
	        var j;
	        var touchFound;
	        while (i < this._scroll.activeTouches.length) {
	            var activeTouch = this._scroll.activeTouches[i];
	            touchFound = false;
	            for (j = 0; j < event.touches.length; j++) {
	                var touch = event.touches[j];
	                if (touch.identifier === activeTouch.id) {
	                    touchFound = true;
	                    break;
	                }
	            }
	            if (!touchFound) {
	                //_log.cal(this, 'removing touch with id: ', activeTouch.id);
	                this._scroll.activeTouches.splice(i, 1);
	            }
	            else {
	                i++;
	            }
	        }

	        // Process touch
	        for (i = 0; i < event.touches.length; i++) {
	            var changedTouch = event.touches[i];
	            touchFound = false;
	            for (j = 0; j < this._scroll.activeTouches.length; j++) {
	                if (this._scroll.activeTouches[j].id === changedTouch.identifier) {
	                    touchFound = true;
	                    break;
	                }
	            }
	            if (!touchFound) {
	                var current = [changedTouch.clientX, changedTouch.clientY];
	                var time = Date.now();
	                this._scroll.activeTouches.push({
	                    id: changedTouch.identifier,
	                    start: current,
	                    current: current,
	                    prev: current,
	                    time: time,
	                    prevTime: time
	                });

	                // The following listener is automatically removed after touchend is received
	                // and ensures that the scrollview always received touchend.
	                changedTouch.target.addEventListener('touchend', this._touchEndEventListener);
	            }
	        }

	        // The first time a touch new touch gesture has arrived, emit event
	        if (!oldTouchesCount && this._scroll.activeTouches.length) {
	            this.applyScrollForce(0);
	            this._scroll.touchDelta = 0;
	        }
	    }

	    /**
	     * Called whenever the user is moving his/her fingers to scroll the view.
	     * Updates the moveOffset so that the scroll-offset on the view is updated.
	     */
	    function _touchMove(event) {
	        if (!this.options.enabled) {
	            return;
	        }

	        // Process the touch event
	        var primaryTouch;
	        for (var i = 0; i < event.changedTouches.length; i++) {
	            var changedTouch = event.changedTouches[i];
	            for (var j = 0; j < this._scroll.activeTouches.length; j++) {
	                var touch = this._scroll.activeTouches[j];
	                if (touch.id === changedTouch.identifier) {

	                    // When a thresshold is configured, check whether the move operation (x/y ratio)
	                    // lies within the thresshold. A move of 10 pixels x and 10 pixels y is considered 45 deg,
	                    // which corresponds to a thresshold of 0.5.
	                    var moveDirection = Math.atan2(
	                        Math.abs(changedTouch.clientY - touch.prev[1]),
	                        Math.abs(changedTouch.clientX - touch.prev[0])) / (Math.PI / 2.0);
	                    var directionDiff = Math.abs(this._direction - moveDirection);
	                    if ((this.options.touchMoveDirectionThresshold === undefined) || (directionDiff <= this.options.touchMoveDirectionThresshold)){
	                        touch.prev = touch.current;
	                        touch.current = [changedTouch.clientX, changedTouch.clientY];
	                        touch.prevTime = touch.time;
	                        touch.direction = moveDirection;
	                        touch.time = Date.now();
	                        primaryTouch = (j === 0) ? touch : undefined;
	                    }
	                }
	            }
	        }

	        // Update move offset and emit event
	        if (primaryTouch) {
	            var delta = primaryTouch.current[this._direction] - primaryTouch.start[this._direction];
	            this.updateScrollForce(this._scroll.touchDelta, delta);
	            this._scroll.touchDelta = delta;
	        }
	    }

	    /**
	     * Called whenever the user releases his fingers and the touch gesture
	     * has completed. This will set the new position and if the user used a 'flick'
	     * gesture give the scroll-offset particle a velocity and momentum into a
	     * certain direction.
	     */
	    function _touchEnd(event) {

	        // Remove touch
	        var primaryTouch = this._scroll.activeTouches.length ? this._scroll.activeTouches[0] : undefined;
	        for (var i = 0; i < event.changedTouches.length; i++) {
	            var changedTouch = event.changedTouches[i];
	            for (var j = 0; j < this._scroll.activeTouches.length; j++) {
	                var touch = this._scroll.activeTouches[j];
	                if (touch.id === changedTouch.identifier) {

	                    // Remove touch from active-touches
	                    this._scroll.activeTouches.splice(j, 1);

	                    // When a different touch now becomes the primary touch, update
	                    // its start position to match the current move offset.
	                    if ((j === 0) && this._scroll.activeTouches.length) {
	                        var newPrimaryTouch = this._scroll.activeTouches[0];
	                        newPrimaryTouch.start[0] = newPrimaryTouch.current[0] - (touch.current[0] - touch.start[0]);
	                        newPrimaryTouch.start[1] = newPrimaryTouch.current[1] - (touch.current[1] - touch.start[1]);
	                    }
	                    break;
	                }
	            }
	        }

	        // Wait for all fingers to be released from the screen before resetting the move-spring
	        if (!primaryTouch || this._scroll.activeTouches.length) {
	            return;
	        }

	        // Determine velocity and add to particle
	        var velocity = 0;
	        var diffTime = primaryTouch.time - primaryTouch.prevTime;
	        if ((diffTime > 0) && ((Date.now() - primaryTouch.time) <= this.options.touchMoveNoVelocityDuration)) {
	            var diffOffset = primaryTouch.current[this._direction] - primaryTouch.prev[this._direction];
	            velocity = diffOffset / diffTime;
	        }

	        // Release scroll force
	        var delta = this._scroll.touchDelta;
	        this.releaseScrollForce(delta, velocity);
	        this._scroll.touchDelta = 0;
	    }

	    /**
	     * Called whenever the user is scrolling the view using either a mouse
	     * scroll wheel or a track-pad.
	     */
	    function _scrollUpdate(event) {
	        if (!this.options.enabled) {
	            return;
	        }
	        var offset = Array.isArray(event.delta) ? event.delta[this._direction] : event.delta;
	        this.scroll(offset);
	    }

	    /**
	     * Updates the scroll offset particle.
	     */
	    function _setParticle(position, velocity, phase) {
	        if (position !== undefined) {
	            //var oldPosition = this._scroll.particle.getPosition1D();
	            this._scroll.particleValue = position;
	            this._scroll.particle.setPosition1D(position);
	            //_log.call(this, 'setParticle.position: ', position, ' (old: ', oldPosition, ', delta: ', position - oldPosition, ', phase: ', phase, ')');
	        }
	        if (velocity !== undefined) {
	            var oldVelocity = this._scroll.particle.getVelocity1D();
	            if (oldVelocity !== velocity) {
	                this._scroll.particle.setVelocity1D(velocity);
	                //_log.call(this, 'setParticle.velocity: ', velocity, ' (old: ', oldVelocity, ', delta: ', velocity - oldVelocity, ', phase: ', phase, ')');
	            }
	        }
	    }

	    /**
	     * Get the in-use scroll-offset.
	     */
	    function _calcScrollOffset(normalize, refreshParticle) {

	        // When moving using touch-gestures, make the offset stick to the
	        // finger. When the bounds is exceeded, decrease the scroll distance
	        // by two.
	        if (refreshParticle || (this._scroll.particleValue === undefined)) {
	            this._scroll.particleValue = this._scroll.particle.getPosition1D();
	            this._scroll.particleValue = Math.round(this._scroll.particleValue * 1000) / 1000;
	        }

	        // do stuff
	        var scrollOffset = this._scroll.particleValue;
	        if (this._scroll.scrollDelta || this._scroll.normalizedScrollDelta) {
	            scrollOffset += this._scroll.scrollDelta + this._scroll.normalizedScrollDelta;
	            if (((this._scroll.boundsReached & Bounds.PREV) && (scrollOffset > this._scroll.springPosition)) ||
	               ((this._scroll.boundsReached & Bounds.NEXT) && (scrollOffset < this._scroll.springPosition)) ||
	               (this._scroll.boundsReached === Bounds.BOTH)) {
	                scrollOffset = this._scroll.springPosition;
	            }
	            if (normalize) {
	                if (!this._scroll.scrollDelta) {
	                    this._scroll.normalizedScrollDelta = 0;
	                    _setParticle.call(this, scrollOffset, undefined, '_calcScrollOffset');
	                }
	                this._scroll.normalizedScrollDelta += this._scroll.scrollDelta;
	                this._scroll.scrollDelta = 0;
	            }
	        }

	        if (this._scroll.scrollForceCount && this._scroll.scrollForce) {
	            if (this._scroll.springPosition !== undefined) {
	                scrollOffset = (scrollOffset + this._scroll.scrollForce + this._scroll.springPosition) / 2.0;
	            }
	            else {
	                scrollOffset += this._scroll.scrollForce;
	            }
	        }

	        //_log.call(this, 'scrollOffset: ', scrollOffset, ', particle:', this._scroll.particle.getPosition1D(), ', moveToPosition: ', this._scroll.moveToPosition, ', springPosition: ', this._scroll.springPosition);
	        return scrollOffset;
	    }

	    /**
	     * Helper function that calculates the next/prev layed out height.
	     * @private
	     */
	    ScrollController.prototype._calcScrollHeight = function(next, lastNodeOnly) {
	        var calcedHeight = 0;
	        var node = this._nodes.getStartEnumNode(next);
	        while (node) {
	            if (node._invalidated) {
	                if (node.trueSizeRequested) {
	                    calcedHeight = undefined;
	                    break;
	                }
	                if (node.scrollLength !== undefined) {
	                    calcedHeight = lastNodeOnly ? node.scrollLength : (calcedHeight + node.scrollLength);
	                    if (!next && lastNodeOnly) {
	                        break;
	                    }
	                }
	            }
	            node = next ? node._next : node._prev;
	        }
	        return calcedHeight;
	    };

	    /**
	     * Calculates the scroll boundaries and sets the spring accordingly.
	     */
	    function _calcBounds(size, scrollOffset) {

	        // Local data
	        var prevHeight = this._calcScrollHeight(false);
	        var nextHeight = this._calcScrollHeight(true);
	        var enforeMinSize = this._layout.capabilities && this._layout.capabilities.sequentialScrollingOptimized;

	        // 0. Don't set any springs when either next or prev-height could
	        //    not be determined due to true-size renderables.
	        if ((prevHeight === undefined) || (nextHeight === undefined)) {
	            this._scroll.boundsReached = Bounds.NONE;
	            this._scroll.springPosition = undefined;
	            this._scroll.springSource = SpringSource.NONE;
	            return;
	        }

	        // 1. When the rendered height is smaller than the total height,
	        //    then lock to the primary bounds
	        var totalHeight;
	        if (enforeMinSize) {
	            if ((nextHeight !== undefined) && (prevHeight !== undefined)) {
	                totalHeight = prevHeight + nextHeight;
	            }
	            if ((totalHeight !== undefined) && (totalHeight <= size[this._direction])) {
	                this._scroll.boundsReached = Bounds.BOTH;
	                this._scroll.springPosition = this.options.alignment ? -nextHeight : prevHeight;
	                this._scroll.springSource = SpringSource.MINSIZE;
	                return;
	            }
	        }

	        // 2. Check whether primary boundary has been reached
	        if (this.options.alignment) {
	            if (enforeMinSize) {
	                if ((nextHeight !== undefined) && ((scrollOffset + nextHeight) <= 0)) {
	                    this._scroll.boundsReached = Bounds.NEXT;
	                    this._scroll.springPosition = -nextHeight;
	                    this._scroll.springSource = SpringSource.NEXTBOUNDS;
	                    return;
	                }
	            }
	            else {
	                var firstPrevItemHeight = this._calcScrollHeight(false, true);
	                if ((nextHeight !== undefined) && firstPrevItemHeight && ((scrollOffset + nextHeight + size[this._direction]) <= firstPrevItemHeight)) {
	                    this._scroll.boundsReached = Bounds.NEXT;
	                    this._scroll.springPosition = nextHeight - (size[this._direction] - firstPrevItemHeight);
	                    this._scroll.springSource = SpringSource.NEXTBOUNDS;
	                    return;
	                }
	            }
	        }
	        else {
	            if ((prevHeight !== undefined) && ((scrollOffset - prevHeight) >= 0)) {
	                this._scroll.boundsReached = Bounds.PREV;
	                this._scroll.springPosition = prevHeight;
	                this._scroll.springSource = SpringSource.PREVBOUNDS;
	                return;
	            }
	        }

	        // 3. Check if secondary bounds has been reached
	        if (this.options.alignment) {
	            if ((prevHeight !== undefined) && ((scrollOffset - prevHeight) >= -size[this._direction])) {
	                this._scroll.boundsReached = Bounds.PREV;
	                this._scroll.springPosition = -size[this._direction] + prevHeight;
	                this._scroll.springSource = SpringSource.PREVBOUNDS;
	                return;
	            }
	        }
	        else {
	            var nextBounds = enforeMinSize ? size[this._direction] : this._calcScrollHeight(true, true);
	            if ((nextHeight !== undefined) && ((scrollOffset + nextHeight) <= nextBounds)){
	                this._scroll.boundsReached = Bounds.NEXT;
	                this._scroll.springPosition = nextBounds - nextHeight;
	                this._scroll.springSource = SpringSource.NEXTBOUNDS;
	                return;
	            }
	        }

	        // No bounds reached
	        this._scroll.boundsReached = Bounds.NONE;
	        this._scroll.springPosition = undefined;
	        this._scroll.springSource = SpringSource.NONE;
	    }

	    /**
	     * Calculates the scrollto-offset to which the spring is set.
	     */
	    function _calcScrollToOffset(size, scrollOffset) {
	        var scrollToRenderNode = this._scroll.scrollToRenderNode || this._scroll.ensureVisibleRenderNode;
	        if (!scrollToRenderNode) {
	            return;
	        }

	        // 1. When boundary is reached, stop scrolling in that direction
	        if ((this._scroll.boundsReached === Bounds.BOTH) ||
	            (!this._scroll.scrollToDirection && (this._scroll.boundsReached === Bounds.PREV)) ||
	            (this._scroll.scrollToDirection && (this._scroll.boundsReached === Bounds.NEXT))) {
	            return;
	        }

	        // 2. Find the node to scroll to
	        var foundNode;
	        var scrollToOffset = 0;
	        var node = this._nodes.getStartEnumNode(true);
	        var count = 0;
	        while (node) {
	            count++;
	            if (!node._invalidated || (node.scrollLength === undefined)) {
	                break;
	            }
	            if (this.options.alignment) {
	                scrollToOffset -= node.scrollLength;
	            }
	            if (node.renderNode === scrollToRenderNode) {
	                foundNode = node;
	                break;
	            }
	            if (!this.options.alignment) {
	                scrollToOffset -= node.scrollLength;
	            }
	            node = node._next;
	        }
	        if (!foundNode) {
	            scrollToOffset = 0;
	            node = this._nodes.getStartEnumNode(false);
	            while (node) {
	                if (!node._invalidated || (node.scrollLength === undefined)) {
	                   break;
	                }
	                if (!this.options.alignment) {
	                    scrollToOffset += node.scrollLength;
	                }
	                if (node.renderNode === scrollToRenderNode) {
	                    foundNode = node;
	                    break;
	                }
	                if (this.options.alignment) {
	                    scrollToOffset += node.scrollLength;
	                }
	                node = node._prev;
	            }
	        }

	        // 3. Update springs
	        if (foundNode) {
	            if (this._scroll.ensureVisibleSequence) {
	                if (this.options.alignment) {
	                    if ((scrollToOffset - foundNode.scrollLength) < 0) {
	                        this._scroll.springPosition = scrollToOffset;
	                        this._scroll.springSource = SpringSource.ENSUREVISIBLE;
	                    } else if (scrollToOffset > size[this._direction]) {
	                        this._scroll.springPosition = size[this._direction] - scrollToOffset;
	                        this._scroll.springSource = SpringSource.ENSUREVISIBLE;
	                    }
	                    else {
	                        this._scroll.ensureVisibleRenderNode = undefined;
	                    }
	                }
	                else {
	                    scrollToOffset = -scrollToOffset;
	                    if (scrollToOffset < 0) {
	                        this._scroll.springPosition = scrollToOffset;
	                        this._scroll.springSource = SpringSource.ENSUREVISIBLE;
	                    } else if ((scrollToOffset + foundNode.scrollLength) > size[this._direction]) {
	                        this._scroll.springPosition = size[this._direction] - (scrollToOffset + foundNode.scrollLength);
	                        this._scroll.springSource = SpringSource.ENSUREVISIBLE;
	                    }
	                    else {
	                        this._scroll.ensureVisibleRenderNode = undefined;
	                    }
	                }
	            }
	            else { // scrollToSequence
	                this._scroll.springPosition = scrollToOffset;
	                this._scroll.springSource = SpringSource.GOTOSEQUENCE;
	            }
	            return;
	        }

	        // 4. When node not found, keep searching
	        if (this._scroll.scrollToDirection) {
	            this._scroll.springPosition = scrollOffset - size[this._direction];
	            this._scroll.springSource = SpringSource.GOTONEXTDIRECTION;

	        }
	        else {
	            this._scroll.springPosition = scrollOffset + size[this._direction];
	            this._scroll.springSource = SpringSource.GOTOPREVDIRECTION;
	        }

	        // 5. In case of a VirtualViewSequnce, make sure all the view-sequence nodes are touched, so
	        //    that they are not cleaned up.
	        if (this._viewSequence.cleanup) {
	            var viewSequence = this._viewSequence;
	            while (viewSequence.get() !== scrollToRenderNode) {
	                viewSequence = this._scroll.scrollToDirection ? viewSequence.getNext(true) : viewSequence.getPrevious(true);
	                if (!viewSequence) {
	                    break;
	                }
	            }
	        }
	    }

	    /**
	     * Snaps to a page when pagination is enabled.
	     */
	    function _snapToPage() {

	        // Check whether pagination is active
	        if (!this.options.paginated ||
	            this._scroll.scrollForceCount || //don't paginate while moving
	            (this._scroll.springPosition !== undefined)) {
	            return;
	        }

	        // When the energy is below the thresshold, paginate to the current page
	        var item;
	        switch (this.options.paginationMode) {
	            case PaginationMode.SCROLL:
	                if (!this.options.paginationEnergyThresshold || (Math.abs(this._scroll.particle.getEnergy()) <= this.options.paginationEnergyThresshold)) {
	                    item = this.options.alignment ? this.getLastVisibleItem() : this.getFirstVisibleItem();
	                    if (item && item.renderNode) {
	                        this.goToRenderNode(item.renderNode);
	                    }
	                }
	                break;
	            case PaginationMode.PAGE:
	                item = this.options.alignment ? this.getLastVisibleItem() : this.getFirstVisibleItem();
	                if (item && item.renderNode) {
	                    this.goToRenderNode(item.renderNode);
	                }
	                break;
	        }
	    }

	    /**
	     * Normalizes the view-sequence node so that the view-sequence is near to 0.
	     */
	    function _normalizePrevViewSequence(scrollOffset) {
	        var count = 0;
	        var normalizedScrollOffset = scrollOffset;
	        var normalizeNextPrev = false;
	        var node = this._nodes.getStartEnumNode(false);
	        while (node) {
	            if (!node._invalidated || !node._viewSequence) {
	                break;
	            }
	            if (normalizeNextPrev) {
	                this._viewSequence = node._viewSequence;
	                normalizedScrollOffset = scrollOffset;
	                normalizeNextPrev = false;
	            }
	            if ((node.scrollLength === undefined) || node.trueSizeRequested || (scrollOffset < 0)) {
	                break;
	            }
	            scrollOffset -= node.scrollLength;
	            count++;
	            if (node.scrollLength) {
	                if (this.options.alignment) {
	                    normalizeNextPrev = (scrollOffset >= 0);
	                }
	                else {
	                    this._viewSequence = node._viewSequence;
	                    normalizedScrollOffset = scrollOffset;
	                }
	            }
	            node = node._prev;
	        }
	        return normalizedScrollOffset;
	    }
	    function _normalizeNextViewSequence(scrollOffset) {
	        var count = 0;
	        var normalizedScrollOffset = scrollOffset;
	        var node = this._nodes.getStartEnumNode(true);
	        while (node) {
	            if (!node._invalidated || (node.scrollLength === undefined) || node.trueSizeRequested || !node._viewSequence ||
	                ((scrollOffset > 0) && (!this.options.alignment || (node.scrollLength !== 0)))) {
	                break;
	            }
	            if (this.options.alignment) {
	                scrollOffset += node.scrollLength;
	                count++;
	            }
	            if (node.scrollLength || this.options.alignment) {
	                this._viewSequence = node._viewSequence;
	                normalizedScrollOffset = scrollOffset;
	            }
	            if (!this.options.alignment) {
	                scrollOffset += node.scrollLength;
	                count++;
	            }
	            node = node._next;
	        }
	        return normalizedScrollOffset;
	    }
	    function _normalizeViewSequence(size, scrollOffset) {

	        // Check whether normalisation is disabled
	        var caps = this._layout.capabilities;
	        if (caps && caps.debug &&
	            (caps.debug.normalize !== undefined) &&
	            !caps.debug.normalize) {
	            return scrollOffset;
	        }

	        // Don't normalize when forces are at work
	        if (this._scroll.scrollForceCount) {
	            return scrollOffset;
	        }

	        // 1. Normalize in primary direction
	        var normalizedScrollOffset = scrollOffset;
	        if (this.options.alignment && (scrollOffset < 0)) {
	            normalizedScrollOffset = _normalizeNextViewSequence.call(this, scrollOffset);
	        }
	        else if (!this.options.alignment && (scrollOffset > 0)){
	            normalizedScrollOffset = _normalizePrevViewSequence.call(this, scrollOffset);
	        }

	        // 2. Normalize in secondary direction
	        if (normalizedScrollOffset === scrollOffset) {
	            if (this.options.alignment && (scrollOffset > 0)) {
	                normalizedScrollOffset = _normalizePrevViewSequence.call(this, scrollOffset);
	            }
	            else if (!this.options.alignment && (scrollOffset < 0)) {
	                normalizedScrollOffset = _normalizeNextViewSequence.call(this, scrollOffset);
	            }
	        }

	        // Adjust particle and springs
	        if (normalizedScrollOffset !== scrollOffset) {
	            var delta = normalizedScrollOffset - scrollOffset;

	            // Adjust particle
	            var particleValue = this._scroll.particle.getPosition1D();
	            //var particleValue = this._scroll.particleValue;
	            _setParticle.call(this, particleValue + delta, undefined, 'normalize');
	            //_log.call(this, 'normalized scrollOffset: ', normalizedScrollOffset, ', old: ', scrollOffset, ', particle: ', particleValue + delta);

	            // Adjust scroll spring
	            if (this._scroll.springPosition !== undefined) {
	                this._scroll.springPosition += delta;
	            }

	            // Adjust group offset
	            if (caps && caps.sequentialScrollingOptimized) {
	                this._scroll.groupStart -= delta;
	            }
	        }
	        return normalizedScrollOffset;
	    }

	    /**
	     * Get all items that are partly or completely visible.
	     *
	     * The returned result is an array of objects containing the
	     * following properties. Example:
	     * ```javascript
	     * {
	     *   viewSequence: {ViewSequence},
	     *   index: {Number},
	     *   renderNode: {renderable},
	     *   visiblePerc: {Number} 0..1
	     * }
	     * ```
	     * @return {Array} array of items
	     */
	    ScrollController.prototype.getVisibleItems = function() {
	        var size = this._contextSizeCache;
	        var scrollOffset = this.options.alignment ? (this._scroll.unnormalizedScrollOffset + size[this._direction]) : this._scroll.unnormalizedScrollOffset;
	        var result = [];
	        var node = this._nodes.getStartEnumNode(true);
	        while (node) {
	            if (!node._invalidated || (node.scrollLength === undefined) || (scrollOffset > size[this._direction])) {
	                break;
	            }
	            scrollOffset += node.scrollLength;
	            if ((scrollOffset >= 0) && node._viewSequence){
	                result.push({
	                    index: node._viewSequence.getIndex(),
	                    viewSequence: node._viewSequence,
	                    renderNode: node.renderNode,
	                    visiblePerc: node.scrollLength ? ((Math.min(scrollOffset, size[this._direction]) - Math.max(scrollOffset - node.scrollLength, 0)) / node.scrollLength) : 1,
	                    scrollOffset: scrollOffset - node.scrollLength,
	                    scrollLength: node.scrollLength,
	                    _node: node
	                });
	            }
	            node = node._next;
	        }
	        scrollOffset = this.options.alignment ? (this._scroll.unnormalizedScrollOffset + size[this._direction]) : this._scroll.unnormalizedScrollOffset;
	        node = this._nodes.getStartEnumNode(false);
	        while (node) {
	            if (!node._invalidated || (node.scrollLength === undefined) || (scrollOffset < 0)) {
	                break;
	            }
	            scrollOffset -= node.scrollLength;
	            if ((scrollOffset < size[this._direction]) && node._viewSequence) {
	                result.unshift({
	                    index: node._viewSequence.getIndex(),
	                    viewSequence: node._viewSequence,
	                    renderNode: node.renderNode,
	                    visiblePerc: node.scrollLength ? ((Math.min(scrollOffset + node.scrollLength, size[this._direction]) - Math.max(scrollOffset, 0)) / node.scrollLength) : 1,
	                    scrollOffset: scrollOffset,
	                    scrollLength: node.scrollLength,
	                    _node: node
	                });
	            }
	            node = node._prev;
	        }
	        return result;
	    };

	    /**
	     * Get the first visible item in the view.
	     *
	     * An item is considered to be the first visible item when:
	     * -    First item that is partly visible and the visibility % is higher than `options.visibleItemThresshold`
	     * -    It is the first item after the top/left bounds
	     *
	     * @return {Object} item or `undefined`
	     */
	    ScrollController.prototype.getFirstVisibleItem = function(includeNode) {
	        var size = this._contextSizeCache;
	        var scrollOffset = this.options.alignment ? (this._scroll.unnormalizedScrollOffset + size[this._direction]) : this._scroll.unnormalizedScrollOffset;
	        var node = this._nodes.getStartEnumNode(true);
	        var nodeFoundVisiblePerc;
	        var nodeFoundScrollOffset;
	        var nodeFound;
	        while (node) {
	            if (!node._invalidated || (node.scrollLength === undefined) || (scrollOffset > size[this._direction])) {
	                break;
	            }
	            scrollOffset += node.scrollLength;
	            if ((scrollOffset >= 0) && node._viewSequence) {
	                nodeFoundVisiblePerc = node.scrollLength ? ((Math.min(scrollOffset, size[this._direction]) - Math.max(scrollOffset - node.scrollLength, 0)) / node.scrollLength) : 1;
	                nodeFoundScrollOffset = scrollOffset - node.scrollLength;
	                if ((nodeFoundVisiblePerc >= this.options.visibleItemThresshold) ||
	                    (nodeFoundScrollOffset >= 0)) {
	                    nodeFound = node;
	                    break;
	                }
	            }
	            node = node._next;
	        }
	        scrollOffset = this.options.alignment ? (this._scroll.unnormalizedScrollOffset + size[this._direction]) : this._scroll.unnormalizedScrollOffset;
	        node = this._nodes.getStartEnumNode(false);
	        while (node) {
	            if (!node._invalidated || (node.scrollLength === undefined) || (scrollOffset < 0)) {
	                break;
	            }
	            scrollOffset -= node.scrollLength;
	            if ((scrollOffset < size[this._direction]) && node._viewSequence) {
	                var visiblePerc = node.scrollLength ? ((Math.min(scrollOffset + node.scrollLength, size[this._direction]) - Math.max(scrollOffset, 0)) / node.scrollLength) : 1;
	                if ((visiblePerc >= this.options.visibleItemThresshold) ||
	                    (scrollOffset >= 0)) {
	                    nodeFoundVisiblePerc = visiblePerc;
	                    nodeFoundScrollOffset = scrollOffset;
	                    nodeFound = node;
	                    break;
	                }
	            }
	            node = node._prev;
	        }
	        return nodeFound ? {
	            index: nodeFound._viewSequence.getIndex(),
	            viewSequence: nodeFound._viewSequence,
	            renderNode: nodeFound.renderNode,
	            visiblePerc: nodeFoundVisiblePerc,
	            scrollOffset: nodeFoundScrollOffset,
	            scrollLength: nodeFound.scrollLength,
	            _node: nodeFound
	        } : undefined;
	    };

	    /**
	     * Get the last visible item in the view.
	     *
	     * An item is considered to be the last visible item when:
	     * -    Last item that is partly visible and the visibility % is higher than `options.visibleItemThresshold`
	     * -    It is the last item before the bottom/right bounds
	     *
	     * @return {Object} item or `undefined`
	     */
	    ScrollController.prototype.getLastVisibleItem = function() {
	        var items = this.getVisibleItems();
	        var size = this._contextSizeCache;
	        for (var i = items.length - 1; i >= 0; i--) {
	            var item = items[i];
	            if ((item.visiblePerc >= this.options.visibleItemThresshold) ||
	                ((item.scrollOffset + item.scrollLength) <= size[this._direction])) {
	                return item;
	            }
	        }
	        return items.length ? items[items.length - 1] : undefined;
	    };

	    /**
	     * Helper function that scrolls the view towards a view-sequence node.
	     */
	    function _scrollToSequence(viewSequence, next) {
	        this._scroll.scrollToSequence = viewSequence;
	        this._scroll.scrollToRenderNode = viewSequence.get();
	        this._scroll.ensureVisibleRenderNode = undefined;
	        this._scroll.scrollToDirection = next;
	        this._scroll.scrollDirty = true;
	    }

	    /**
	     * Helper function that scrolls the view towards a view-sequence node.
	     */
	    function _ensureVisibleSequence(viewSequence, next) {
	        this._scroll.scrollToSequence = undefined;
	        this._scroll.scrollToRenderNode = undefined;
	        this._scroll.ensureVisibleRenderNode = viewSequence.get();
	        this._scroll.scrollToDirection = next;
	        this._scroll.scrollDirty = true;
	    }

	    /**
	     * Moves to the next node in the viewSequence.
	     *
	     * @param {Number} [amount] Amount of nodes to move
	     */
	    function _goToPage(amount) {

	        // Get current scroll-position. When a previous call was made to
	        // `scroll' or `scrollTo` and that node has not yet been reached, then
	        // the amount is accumalated onto that scroll target.
	        var viewSequence = this._scroll.scrollToSequence || this._viewSequence;
	        if (!this._scroll.scrollToSequence) {
	            var firstVisibleItem = this.getFirstVisibleItem();
	            if (firstVisibleItem) {
	                viewSequence = firstVisibleItem.viewSequence;
	                if (((amount < 0) && (firstVisibleItem.scrollOffset < 0)) ||
	                    ((amount > 0) && (firstVisibleItem.scrollOffset > 0))) {
	                    amount = 0;
	                }
	            }
	        }
	        if (!viewSequence) {
	            return;
	        }

	        // Find scroll target
	        for (var i = 0; i < Math.abs(amount); i++) {
	            var nextViewSequence = (amount > 0) ? viewSequence.getNext() : viewSequence.getPrevious();
	            if (nextViewSequence) {
	                viewSequence = nextViewSequence;
	            }
	            else {
	                break;
	            }
	        }
	        _scrollToSequence.call(this, viewSequence, amount >= 0);
	    }

	    /**
	     * Scroll to the first page, making it visible.
	     *
	     * NOTE: This function does not work on ViewSequences that have the `loop` property enabled.
	     *
	     * @return {ScrollController} this
	     */
	    ScrollController.prototype.goToFirstPage = function() {
	        if (!this._viewSequence) {
	            return this;
	        }
	        if (this._viewSequence._ && this._viewSequence._.loop) {
	            LayoutUtility.error('Unable to go to first item of looped ViewSequence');
	            return this;
	        }
	        var viewSequence = this._viewSequence;
	        while (viewSequence) {
	            var prev = viewSequence.getPrevious();
	            if (prev && prev.get()) {
	                viewSequence = prev;
	            }
	            else {
	                break;
	            }
	        }
	        _scrollToSequence.call(this, viewSequence, false);
	        return this;
	    };

	    /**
	     * Scroll to the previous page, making it visible.
	     *
	     * @return {ScrollController} this
	     */
	    ScrollController.prototype.goToPreviousPage = function() {
	        _goToPage.call(this, -1);
	        return this;
	    };

	    /**
	     * Scroll to the next page, making it visible.
	     *
	     * @return {ScrollController} this
	     */
	    ScrollController.prototype.goToNextPage = function() {
	        _goToPage.call(this, 1);
	        return this;
	    };

	    /**
	     * Scroll to the last page, making it visible.
	     *
	     * NOTE: This function does not work on ViewSequences that have the `loop` property enabled.
	     *
	     * @return {ScrollController} this
	     */
	    ScrollController.prototype.goToLastPage = function() {
	        if (!this._viewSequence) {
	            return this;
	        }
	        if (this._viewSequence._ && this._viewSequence._.loop) {
	            LayoutUtility.error('Unable to go to last item of looped ViewSequence');
	            return this;
	        }
	        var viewSequence = this._viewSequence;
	        while (viewSequence) {
	            var next = viewSequence.getNext();
	            if (next && next.get()) {
	                viewSequence = next;
	            }
	            else {
	                break;
	            }
	        }
	        _scrollToSequence.call(this, viewSequence, true);
	        return this;
	    };

	    /**
	     * Scroll to the given renderable in the datasource.
	     *
	     * @param {RenderNode} node renderable to scroll to.
	     * @return {ScrollController} this
	     */
	    ScrollController.prototype.goToRenderNode = function(node) {

	        // Verify arguments and state
	        if (!this._viewSequence || !node) {
	            return this;
	        }

	        // Check current node
	        if (this._viewSequence.get() === node) {
	            var next = _calcScrollOffset.call(this) >= 0;
	            _scrollToSequence.call(this, this._viewSequence, next);
	            return this;
	        }

	        // Find the sequence-node that we want to scroll to.
	        // We look at both directions at the same time.
	        // The first match that is encountered, that direction is chosen.
	        var nextSequence = this._viewSequence.getNext();
	        var prevSequence = this._viewSequence.getPrevious();
	        while ((nextSequence || prevSequence) && (nextSequence !== this._viewSequence)){
	            var nextNode = nextSequence ? nextSequence.get() : undefined;
	            if (nextNode === node) {
	                _scrollToSequence.call(this, nextSequence, true);
	                break;
	            }
	            var prevNode = prevSequence ? prevSequence.get() : undefined;
	            if (prevNode === node) {
	                _scrollToSequence.call(this, prevSequence, false);
	                break;
	            }
	            nextSequence = nextNode ? nextSequence.getNext() : undefined;
	            prevSequence = prevNode ? prevSequence.getPrevious() : undefined;
	        }
	        return this;
	    };

	    /**
	     * Ensures that a render-node is entirely visible.
	     *
	     * When the node is already visible, nothing happens. If the node is not entirely visible
	     * the view is scrolled as much as needed to make it entirely visibl.
	     *
	     * @param {Number|ViewSequence|Renderable} node index, renderNode or ViewSequence
	     * @return {ScrollController} this
	     */
	    ScrollController.prototype.ensureVisible = function(node) {

	        // Convert argument into renderNode
	        if (node instanceof ViewSequence) {
	            node = node.get();
	        } else if ((node instanceof Number) || (typeof node === 'number')) {
	            var viewSequence = this._viewSequence;
	            while (viewSequence.getIndex() < node) {
	                viewSequence = viewSequence.getNext();
	                if (!viewSequence) {
	                    return this;
	                }
	            }
	            while (viewSequence.getIndex() > node) {
	                viewSequence = viewSequence.getPrevious();
	                if (!viewSequence) {
	                    return this;
	                }
	            }
	        }

	        // Check current node
	        if (this._viewSequence.get() === node) {
	            var next = _calcScrollOffset.call(this) >= 0;
	            _ensureVisibleSequence.call(this, this._viewSequence, next);
	            return this;
	        }

	        // Find the sequence-node that we want to scroll to.
	        // We look at both directions at the same time.
	        // The first match that is encountered, that direction is chosen.
	        var nextSequence = this._viewSequence.getNext();
	        var prevSequence = this._viewSequence.getPrevious();
	        while ((nextSequence || prevSequence) && (nextSequence !== this._viewSequence)){
	            var nextNode = nextSequence ? nextSequence.get() : undefined;
	            if (nextNode === node) {
	                _ensureVisibleSequence.call(this, nextSequence, true);
	                break;
	            }
	            var prevNode = prevSequence ? prevSequence.get() : undefined;
	            if (prevNode === node) {
	                _ensureVisibleSequence.call(this, prevSequence, false);
	                break;
	            }
	            nextSequence = nextNode ? nextSequence.getNext() : undefined;
	            prevSequence = prevNode ? prevSequence.getPrevious() : undefined;
	        }

	        return this;
	    };

	    /**
	     * Scrolls the view by the specified number of pixels.
	     *
	     * @param {Number} delta Delta in pixels (< 0 = down/right, > 0 = top/left).
	     * @return {ScrollController} this
	     */
	    ScrollController.prototype.scroll = function(delta) {
	        this.halt();
	        this._scroll.scrollDelta += delta;
	        return this;
	    };

	    /**
	     * Checks whether the scrollview can scroll the given delta.
	     * When the scrollView can scroll the whole delta, then
	     * the return value is the same as the delta. If it cannot
	     * scroll the entire delta, the return value is the number of
	     * pixels that can be scrolled.
	     *
	     * @param {Number} delta Delta to test
	     * @return {Number} Number of pixels the view is allowed to scroll
	     */
	    ScrollController.prototype.canScroll = function(delta) {

	        // Calculate height in both directions
	        var scrollOffset = _calcScrollOffset.call(this);
	        var prevHeight = this._calcScrollHeight(false);
	        var nextHeight = this._calcScrollHeight(true);

	        // When the rendered height is smaller than the total height,
	        // then no scrolling whatsover is allowed.
	        var totalHeight;
	        if ((nextHeight !== undefined) && (prevHeight !== undefined)) {
	            totalHeight = prevHeight + nextHeight;
	        }
	        if ((totalHeight !== undefined) && (totalHeight <= this._contextSizeCache[this._direction])) {
	            return 0; // no scrolling at all allowed
	        }

	        // Determine the offset that we can scroll
	        if ((delta < 0) && (nextHeight !== undefined)) {
	            var nextOffset = this._contextSizeCache[this._direction] - (scrollOffset + nextHeight);
	            return Math.max(nextOffset, delta);
	        } else if ((delta > 0) && (prevHeight !== undefined)) {
	            var prevOffset = -(scrollOffset - prevHeight);
	            return Math.min(prevOffset, delta);
	        }
	        return delta;
	    };

	    /**
	     * Halts all scrolling going on. In essence this function sets
	     * the velocity to 0 and cancels any `goToXxx` operation that
	     * was applied.
	     *
	     * @return {ScrollController} this
	     */
	    ScrollController.prototype.halt = function() {
	        this._scroll.scrollToSequence = undefined;
	        this._scroll.scrollToRenderNode = undefined;
	        this._scroll.ensureVisibleRenderNode = undefined;
	        _setParticle.call(this, undefined, 0, 'halt');
	        return this;
	    };

	    /**
	     * Checks whether scrolling is in progress or not.
	     *
	     * @return {Bool} true when scrolling is active
	     */
	    ScrollController.prototype.isScrolling = function() {
	        return this._scroll.isScrolling;
	    };

	    /**
	     * Checks whether any boundaries have been reached.
	     *
	     * @return {ScrollController.Bounds} Either, Bounds.PREV, Bounds.NEXT, Bounds.BOTH or Bounds.NONE
	     */
	    ScrollController.prototype.getBoundsReached = function() {
	        return this._scroll.boundsReached;
	    };

	    /**
	     * Get the current scrolling velocity.
	     *
	     * @return {Number} Scroll velocity
	     */
	    ScrollController.prototype.getVelocity = function() {
	        return this._scroll.particle.getVelocity1D();
	    };

	    /**
	     * Set the scrolling velocity.
	     *
	     * @param {Number} velocity New scroll velocity
	     * @return {ScrollController} this
	     */
	    ScrollController.prototype.setVelocity = function(velocity) {
	        return this._scroll.particle.setVelocity1D(velocity);
	    };

	    /**
	     * Applies a permanent scroll-force (delta) until it is released.
	     * When the cumulative scroll-offset lies outside the allowed bounds
	     * a strech effect is used, and the offset beyond the bounds is
	     * substracted by halve. This function should always be accompanied
	     * by a call to `releaseScrollForce`.
	     *
	     * This method is used for instance when using touch gestures to move
	     * the scroll offset and corresponds to the `touchstart` event.
	     *
	     * @param {Number} delta Starting scroll-delta force to apply
	     * @return {ScrollController} this
	     */
	    ScrollController.prototype.applyScrollForce = function(delta) {
	        this.halt();
	        if (this._scroll.scrollForceCount === 0) {
	            this._scroll.scrollForceStartItem = this.alignment ? this.getLastVisibleItem() : this.getFirstVisibleItem();
	        }
	        this._scroll.scrollForceCount++;
	        this._scroll.scrollForce += delta;
	        return this;
	    };

	    /**
	     * Updates a existing scroll-force previously applied by calling
	     * `applyScrollForce`.
	     *
	     * This method is used for instance when using touch gestures to move
	     * the scroll offset and corresponds to the `touchmove` event.
	     *
	     * @param {Number} prevDelta Previous delta
	     * @param {Number} newDelta New delta
	     * @return {ScrollController} this
	     */
	    ScrollController.prototype.updateScrollForce = function(prevDelta, newDelta) {
	        this.halt();
	        newDelta -= prevDelta;
	        this._scroll.scrollForce += newDelta;
	        return this;
	    };

	    /**
	     * Releases a scroll-force and sets the velocity.
	     *
	     * This method is used for instance when using touch gestures to move
	     * the scroll offset and corresponds to the `touchend` event.
	     *
	     * @param {Number} delta Scroll delta to release
	     * @param {Number} [velocity] Velocity to apply after which the view keeps scrolling
	     * @return {ScrollController} this
	     */
	    ScrollController.prototype.releaseScrollForce = function(delta, velocity) {
	        this.halt();
	        if (this._scroll.scrollForceCount === 1) {
	            var scrollOffset = _calcScrollOffset.call(this);
	            _setParticle.call(this, scrollOffset, velocity, 'releaseScrollForce');
	            this._scroll.pe.wake();
	            this._scroll.scrollForce = 0;
	            this._scroll.scrollDirty = true;
	            if (this._scroll.scrollForceStartItem && this.options.paginated && (this.options.paginationMode === PaginationMode.PAGE)) {
	                var item = this.alignment ? this.getLastVisibleItem() : this.getFirstVisibleItem();
	                if (item.renderNode !== this._scroll.scrollForceStartItem.renderNode) {
	                    this.goToRenderNode(item.renderNode);
	                }
	                else if (this.options.paginationEnergyThresshold && (Math.abs(this._scroll.particle.getEnergy()) >= this.options.paginationEnergyThresshold)) {
	                    velocity = velocity || 0;
	                    if ((velocity < 0) && item._node._next && item._node._next.renderNode) {
	                        this.goToRenderNode(item._node._next.renderNode);
	                    } else if ((velocity >= 0) && item._node._prev && item._node._prev.renderNode) {
	                        this.goToRenderNode(item._node._prev.renderNode);
	                    }
	                }
	                else {
	                    this.goToRenderNode(item.renderNode);
	                }
	            }
	            this._scroll.scrollForceStartItem = undefined;
	        }
	        else {
	            this._scroll.scrollForce -= delta;
	        }
	        this._scroll.scrollForceCount--;
	        return this;
	    };

	     /**
	     * Get the spec (size, transform, etc..) for the given renderable or
	     * Id.
	     *
	     * @param {Renderable|String} node Renderabe or Id to look for.
	     * @param {Bool} normalize When set to `true` normalizes the origin/align into the transform translation (default: `false`).
	     * @return {Spec} spec or undefined
	     */
	    ScrollController.prototype.getSpec = function(node, normalize) {
	        var spec = LayoutController.prototype.getSpec.apply(this, arguments);
	        if (spec && this._layout.capabilities && this._layout.capabilities.sequentialScrollingOptimized) {
	            spec = {
	                origin: spec.origin,
	                align: spec.align,
	                opacity: spec.opacity,
	                size: spec.size,
	                renderNode: spec.renderNode,
	                transform: spec.transform
	            };
	            var translate = [0, 0, 0];
	            translate[this._direction] = this._scrollOffsetCache + this._scroll.groupStart;
	            spec.transform = Transform.thenMove(spec.transform, translate);
	        }
	        return spec;
	    };

	    /**
	     * Executes the layout and updates the state of the scrollview.
	     */
	    function _layout(size, scrollOffset, nested) {

	        // Track the number of times the layout-function was executed
	        this._debug.layoutCount++;
	        //_log.call(this, 'Layout, scrollOffset: ', scrollOffset, ', particle: ', this._scroll.particle.getPosition1D());

	        // Determine start & end
	        var scrollStart = 0 - Math.max(this.options.extraBoundsSpace[0], 1);
	        var scrollEnd = size[this._direction] + Math.max(this.options.extraBoundsSpace[1], 1);
	        if (this.options.layoutAll) {
	            scrollStart = -1000000;
	            scrollEnd = 1000000;
	        }

	        // Prepare for layout
	        var layoutContext = this._nodes.prepareForLayout(
	            this._viewSequence,     // first node to layout
	            this._nodesById, {      // so we can do fast id lookups
	                size: size,
	                direction: this._direction,
	                reverse: this.options.alignment ? true : false,
	                scrollOffset: this.options.alignment ? (scrollOffset + size[this._direction]) : scrollOffset,
	                scrollStart: scrollStart,
	                scrollEnd: scrollEnd
	            }
	        );

	        // Layout objects
	        if (this._layout._function) {
	            this._layout._function(
	                layoutContext,          // context which the layout-function can use
	                this._layout.options    // additional layout-options
	            );
	        }
	        this._scroll.unnormalizedScrollOffset = scrollOffset;

	        // Call post-layout function
	        if (this._postLayout) {
	            this._postLayout(size, scrollOffset);
	        }

	        // Mark non-invalidated nodes for removal
	        this._nodes.removeNonInvalidatedNodes(this.options.removeSpec);

	        // Check whether the bounds have been reached
	        _calcBounds.call(this, size, scrollOffset);

	        // Update scroll-to spring
	        _calcScrollToOffset.call(this, size, scrollOffset);

	        // When pagination is enabled, snap to page
	        _snapToPage.call(this);

	        // If the bounds have changed, and the scroll-offset would be different
	        // than before, then re-layout entirely using the new offset.
	        var newScrollOffset = _calcScrollOffset.call(this, true);
	        if (!nested && (newScrollOffset !== scrollOffset)) {
	            //_log.call(this, 'offset changed, re-layouting... (', scrollOffset, ' != ', newScrollOffset, ')');
	            return _layout.call(this, size, newScrollOffset, true);
	        }

	        // Normalize scroll offset so that the current viewsequence node is as close to the
	        // top as possible and the layout function will need to process the least amount
	        // of renderables.
	        scrollOffset = _normalizeViewSequence.call(this, size, scrollOffset);

	        // Update spring
	        _updateSpring.call(this);

	        // Cleanup any nodes in case of a VirtualViewSequence
	        this._nodes.removeVirtualViewSequenceNodes();

	        return scrollOffset;
	    }

	    /**
	     * Inner render function of the Group
	     */
	    function _innerRender() {
	        var specs = this._specs;
	        for (var i3 = 0, j3 = specs.length; i3 < j3; i3++) {
	            specs[i3].target = specs[i3].renderNode.render();
	        }
	        return specs;
	    }

	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     */
	    ScrollController.prototype.commit = function commit(context) {
	        var size = context.size;

	        // Update debug info
	        this._debug.commitCount++;

	        // Calculate scroll offset
	        var scrollOffset = _calcScrollOffset.call(this, true, true);
	        if (this._scrollOffsetCache === undefined) {
	            this._scrollOffsetCache = scrollOffset;
	        }

	        // When the size or layout function has changed, reflow the layout
	        var emitEndScrollingEvent = false;
	        var emitScrollEvent = false;
	        var eventData;
	        if (size[0] !== this._contextSizeCache[0] ||
	            size[1] !== this._contextSizeCache[1] ||
	            this._isDirty ||
	            this._scroll.scrollDirty ||
	            this._nodes._trueSizeRequested ||
	            this.options.alwaysLayout ||
	            this._scrollOffsetCache !== scrollOffset) {

	            // Prepare event data
	            eventData = {
	                target: this,
	                oldSize: this._contextSizeCache,
	                size: size,
	                oldScrollOffset: this._scrollOffsetCache,
	                scrollOffset: scrollOffset
	            };

	            // When scroll-offset has changed, emit scroll-start and scroll events
	            if (this._scrollOffsetCache !== scrollOffset) {
	                if (!this._scroll.isScrolling) {
	                    this._scroll.isScrolling = true;
	                    this._eventOutput.emit('scrollstart', eventData);
	                }
	                emitScrollEvent = true;
	            }

	            this._eventOutput.emit('layoutstart', eventData);

	            // When the layout has changed, and we are not just scrolling,
	            // disable the locked state of the layout-nodes so that they
	            // can freely transition between the old and new state.
	            if (this.options.flow && (this._isDirty ||
	                (this.options.reflowOnResize &&
	                ((size[0] !== this._contextSizeCache[0]) ||
	                 (size[1] !== this._contextSizeCache[1]))))) {
	                var node = this._nodes.getStartEnumNode();
	                while (node) {
	                    node.releaseLock();
	                    node = node._next;
	                }
	            }

	            // Update state
	            this._contextSizeCache[0] = size[0];
	            this._contextSizeCache[1] = size[1];
	            this._isDirty = false;
	            this._scroll.scrollDirty = false;

	            // Perform layout
	            scrollOffset = _layout.call(this, size, scrollOffset);
	            this._scrollOffsetCache = scrollOffset;

	            // Emit end event
	            eventData.scrollOffset = this._scrollOffsetCache;
	            this._eventOutput.emit('layoutend', eventData);
	        }
	        else if (this._scroll.isScrolling && !this._scroll.scrollForceCount) {
	            emitEndScrollingEvent = true;
	        }

	        // Update output and optionally emit event
	        var groupTranslate = this._scroll.groupTranslate;
	        groupTranslate[0] = 0;
	        groupTranslate[1] = 0;
	        groupTranslate[2] = 0;
	        groupTranslate[this._direction] = -this._scroll.groupStart - scrollOffset;
	        var sequentialScrollingOptimized = this._layout.capabilities ? this._layout.capabilities.sequentialScrollingOptimized : false;
	        var result = this._nodes.buildSpecAndDestroyUnrenderedNodes(sequentialScrollingOptimized ? groupTranslate : undefined);
	        this._specs = result.specs;
	        if (result.modified) {
	            this._eventOutput.emit('reflow', {
	                target: this
	            });
	        }

	        // View has been scrolled, emit event
	        if (emitScrollEvent) {
	            this._eventOutput.emit('scroll', eventData);
	        }

	        // Check whether the current page has changed
	        if (eventData) { // eventData is only used here to check whether there has been a re-layout
	            var visibleItem = this.options.alignment ? this.getLastVisibleItem() : this.getFirstVisibleItem();
	            if ((visibleItem && !this._visibleItemCache) || (!visibleItem && this._visibleItemCache) ||
	                (visibleItem && this._visibleItemCache && (visibleItem.renderNode !== this._visibleItemCache.renderNode))) {
	                this._eventOutput.emit('pagechange', {
	                    target: this,
	                    oldViewSequence: this._visibleItemCache ? this._visibleItemCache.viewSequence : undefined,
	                    viewSequence: visibleItem ? visibleItem.viewSequence : undefined,
	                    oldIndex: this._visibleItemCache ? this._visibleItemCache.index : undefined,
	                    index: visibleItem ? visibleItem.index : undefined,
	                    renderNode: visibleItem ? visibleItem.renderNode : undefined,
	                    oldRenderNode: this._visibleItemCache ? this._visibleItemCache.renderNode : undefined
	                });
	                this._visibleItemCache = visibleItem;
	            }
	        }

	        // Emit end scrolling event
	        if (emitEndScrollingEvent) {
	            this._scroll.isScrolling = false;
	            eventData = {
	                target: this,
	                oldSize: size,
	                size: size,
	                oldScrollOffset: scrollOffset,
	                scrollOffset: scrollOffset
	            };
	            this._eventOutput.emit('scrollend', eventData);
	        }

	        // When renderables are layed out sequentiall (e.g. a ListLayout or
	        // CollectionLayout), then offset the renderables onto the Group
	        // and move the group offset instead. This creates a very big performance gain
	        // as the renderables don't have to be repositioned for every change
	        // to the scrollOffset. For layouts that don't layout sequence, disable
	        // this behavior as it will be decremental to the performance.
	        var transform = context.transform;
	        if (sequentialScrollingOptimized) {
	            var windowOffset = scrollOffset + this._scroll.groupStart;
	            var translate = [0, 0, 0];
	            translate[this._direction] = windowOffset;
	            transform = Transform.thenMove(transform, translate);
	        }

	        // Return the spec
	        return {
	            transform: transform,
	            size: size,
	            opacity: context.opacity,
	            origin: context.origin,
	            target: this.group.render()
	        };
	    };

	    /**
	     * Generate a render spec from the contents of this component.
	     *
	     * @private
	     * @method render
	     * @return {number} Render spec for this component
	     */
	    ScrollController.prototype.render = function render() {
	        if (this.container) {
	            return this.container.render.apply(this.container, arguments);
	        }
	        else {
	            return this.id;
	        }
	    };

	    module.exports = ScrollController;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define*/

	/**
	 * Lays out items and optionally sticky sections from top to bottom or left to right.
	 *
	 * |options|type|description|
	 * |---|---|---|
	 * |`[itemSize]`|Number/Function|Height or width in pixels of an item (used when renderNode has no size)|
	 * |`[margins]`|Number/Array|Margins shorthand (e.g. 5, [10, 20], [2, 5, 2, 10])|
	 * |`[spacing]`|Number|Spacing between items|
	 * |`[isSectionCallback]`|Function|Callback that is called in order to check if a render-node is a section rather than a cell.|
	 *
	 * Example:
	 *
	 * ```javascript
	 * var FlexScrollView = require('famous-flex/FlexScrollView');
	 * var ListLayout = require('famous-flex/layouts/ListLayout');
	 *
	 * var scrollView = new FlexScrollView({
	 *   layout: ListLayout,
	 *   layoutOptions: {
	 *     margins: [20, 10, 20, 10],
	 *     spacing: 1,
	 *     isSectionCallback: function(renderNode) {
	 *       return renderNode.isSection;
	 *     },
	 *   },
	 *   dataSource: [
	 *     // first section
	 *     _createSection(),
	 *     _createCell(),
	 *     _createCell(),
	 *     // second section
	 *     _createSection(),
	 *     _createCell(),
	 *   ]
	 * });
	 * this.add(scrollView);
	 *
	 * function _createCell() {
	 *   return new Surface({
	 *     size: [undefined, 50],
	 *     content: 'my cell'
	 *   });
	 * }
	 *
	 * function _createSection() {
	 *   var section = new Surface({
	 *     size: [undefined, 30],
	 *     content: 'my sticky section'
	 *   });
	 *   section.isSection = true; // mark renderNode as section
	 *   return section;
	 * }
	 * ```
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var Utility = __webpack_require__(27);
	    var LayoutUtility = __webpack_require__(32);

	    // Define capabilities of this layout function
	    var capabilities = {
	        sequence: true,
	        direction: [Utility.Direction.Y, Utility.Direction.X],
	        scrolling: true,
	        trueSize: true,
	        sequentialScrollingOptimized: true
	    };

	    // Data
	    var set = {
	        size: [0, 0],
	        translate: [0, 0, 0],
	        scrollLength: undefined
	    };
	    var margin = [0, 0];

	    // Layout function
	    function ListLayout(context, options) {

	        // Local data
	        var size = context.size;
	        var direction = context.direction;
	        var alignment = context.alignment;
	        var revDirection = direction ? 0 : 1;
	        var offset;
	        var margins = LayoutUtility.normalizeMargins(options.margins);
	        var spacing = options.spacing || 0;
	        var node;
	        var nodeSize;
	        var itemSize;
	        var getItemSize;
	        var lastSectionBeforeVisibleCell;
	        var lastSectionBeforeVisibleCellOffset;
	        var lastSectionBeforeVisibleCellLength;
	        var lastSectionBeforeVisibleCellScrollLength;
	        var firstVisibleCell;
	        var lastNode;
	        var lastCellOffsetInFirstVisibleSection;
	        var isSectionCallback = options.isSectionCallback;
	        var bound;

	        //
	        // reset size & translation
	        //
	        set.size[0] = size[0];
	        set.size[1] = size[1];
	        set.size[revDirection] -= (margins[1 - revDirection] + margins[3 - revDirection]);
	        set.translate[0] = 0;
	        set.translate[1] = 0;
	        set.translate[2] = 0;
	        set.translate[revDirection] = margins[direction ? 3 : 0];

	        //
	        // Determine item-size or use true=size
	        //
	        if ((options.itemSize === true) || !options.hasOwnProperty('itemSize')) {
	            itemSize = true;
	        } else if (options.itemSize instanceof Function) {
	            getItemSize = options.itemSize;
	        }
	        else {
	            itemSize = (options.itemSize === undefined) ? size[direction] : options.itemSize;
	        }

	        //
	        // Determine leading/trailing margins
	        //
	        margin[0] = margins[direction ? 0 : 3];
	        margin[1] = -margins[direction ? 2 : 1];

	        //
	        // Process all next nodes
	        //
	        offset = context.scrollOffset + margin[alignment];
	        bound = context.scrollEnd + margin[alignment];
	        while (offset < bound) {
	            lastNode = node;
	            node = context.next();
	            if (!node) {
	                if (lastNode && !alignment) {
	                    set.scrollLength = nodeSize + margin[0] + -margin[1];
	                    context.set(lastNode, set);
	                }
	                break;
	            }

	            //
	            // Get node size
	            //
	            nodeSize = getItemSize ? getItemSize(node.renderNode) : itemSize;
	            nodeSize = (nodeSize === true) ? context.resolveSize(node, size)[direction] : nodeSize;

	            //
	            // Position node
	            //
	            set.size[direction] = nodeSize;
	            set.translate[direction] = offset + (alignment ? spacing : 0);
	            set.scrollLength = nodeSize + spacing;
	            context.set(node, set);
	            offset += set.scrollLength;

	            //
	            // Keep track of the last section before the first visible cell
	            //
	            if (isSectionCallback && isSectionCallback(node.renderNode)) {
	                set.translate[direction] = Math.max(margin[0], set.translate[direction]);
	                context.set(node, set);
	                if (!firstVisibleCell) {
	                    lastSectionBeforeVisibleCell = node;
	                    lastSectionBeforeVisibleCellOffset = offset - nodeSize;
	                    lastSectionBeforeVisibleCellLength = nodeSize;
	                    lastSectionBeforeVisibleCellScrollLength = nodeSize;
	                } else if (lastCellOffsetInFirstVisibleSection === undefined) {
	                    lastCellOffsetInFirstVisibleSection = offset - nodeSize;
	                }
	            } else if (!firstVisibleCell && (offset >= 0)) {
	                firstVisibleCell = node;
	            }
	        }

	        //
	        // Process previous nodes
	        //
	        node = undefined;
	        offset = context.scrollOffset + margin[alignment];
	        bound = context.scrollStart + margin[alignment];
	        while (offset > bound) {
	            lastNode = node;
	            node = context.prev();
	            if (!node) {
	                if (lastNode && alignment) {
	                    set.scrollLength = nodeSize + margin[0] + -margin[1];
	                    context.set(lastNode, set);
	                    if (lastSectionBeforeVisibleCell === lastNode) {
	                        lastSectionBeforeVisibleCellScrollLength = set.scrollLength;
	                    }
	                }
	                break;
	            }

	            //
	            // Get node size
	            //
	            nodeSize = getItemSize ? getItemSize(node.renderNode) : itemSize;
	            nodeSize = (nodeSize === true) ? context.resolveSize(node, size)[direction] : nodeSize;

	            //
	            // Position node
	            //
	            set.scrollLength = nodeSize + spacing;
	            offset -= set.scrollLength;
	            set.size[direction] = nodeSize;
	            set.translate[direction] = offset + (alignment ? spacing : 0);
	            context.set(node, set);

	            //
	            // Keep track of the last section before the first visible cell
	            //
	            if (isSectionCallback && isSectionCallback(node.renderNode)) {
	                set.translate[direction] = Math.max(margin[0], set.translate[direction]);
	                context.set(node, set);
	                if (!lastSectionBeforeVisibleCell) {
	                    lastSectionBeforeVisibleCell = node;
	                    lastSectionBeforeVisibleCellOffset = offset;
	                    lastSectionBeforeVisibleCellLength = nodeSize;
	                    lastSectionBeforeVisibleCellScrollLength = set.scrollLength;
	                }
	            } else if ((offset + nodeSize) >= 0) {
	                firstVisibleCell = node;
	                if (lastSectionBeforeVisibleCell) {
	                    lastCellOffsetInFirstVisibleSection = offset + nodeSize;
	                }
	                lastSectionBeforeVisibleCell = undefined;
	            }
	        }

	        //
	        // When no first section is in the scrollable range, then
	        // look back further in search for that section
	        //
	        if (isSectionCallback && !lastSectionBeforeVisibleCell) {
	            node = context.prev();
	            while (node) {
	                if (isSectionCallback(node.renderNode)) {
	                    lastSectionBeforeVisibleCell = node;
	                    nodeSize = options.itemSize || context.resolveSize(node, size)[direction];
	                    lastSectionBeforeVisibleCellOffset = offset - nodeSize;
	                    lastSectionBeforeVisibleCellLength = nodeSize;
	                    lastSectionBeforeVisibleCellScrollLength = undefined;
	                    break;
	                }
	                else {
	                    node = context.prev();
	                }
	            }
	        }

	        //
	        // Reposition "last section before first visible cell" to the top of the layout
	        //
	        if (lastSectionBeforeVisibleCell) {
	            var correctedOffset = Math.max(margin[0], lastSectionBeforeVisibleCellOffset);
	            if ((lastCellOffsetInFirstVisibleSection !== undefined) &&
	                (lastSectionBeforeVisibleCellLength > (lastCellOffsetInFirstVisibleSection - margin[0]))) {
	                correctedOffset = ((lastCellOffsetInFirstVisibleSection - lastSectionBeforeVisibleCellLength));
	            }
	            set.size[direction] = lastSectionBeforeVisibleCellLength;
	            set.translate[direction] = correctedOffset;
	            set.scrollLength = lastSectionBeforeVisibleCellScrollLength;
	            context.set(lastSectionBeforeVisibleCell, set);
	        }
	    }

	    ListLayout.Capabilities = capabilities;
	    ListLayout.Name = 'ListLayout';
	    ListLayout.Description = 'List-layout with margins, spacing and sticky headers';
	    module.exports = ListLayout;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var EventHandler = __webpack_require__(31);
	    var OptionsManager = __webpack_require__(30);
	    var RenderNode = __webpack_require__(20);
	    var Utility = __webpack_require__(27);

	    /**
	     * Useful for quickly creating elements within applications
	     *   with large event systems.  Consists of a RenderNode paired with
	     *   an input EventHandler and an output EventHandler.
	     *   Meant to be extended by the developer.
	     *
	     * @class View
	     * @uses EventHandler
	     * @uses OptionsManager
	     * @uses RenderNode
	     * @constructor
	     */
	    function View(options) {
	        this._node = new RenderNode();

	        this._eventInput = new EventHandler();
	        this._eventOutput = new EventHandler();
	        EventHandler.setInputHandler(this, this._eventInput);
	        EventHandler.setOutputHandler(this, this._eventOutput);

	        this.options = Utility.clone(this.constructor.DEFAULT_OPTIONS || View.DEFAULT_OPTIONS);
	        this._optionsManager = new OptionsManager(this.options);

	        if (options) this.setOptions(options);
	    }

	    View.DEFAULT_OPTIONS = {}; // no defaults

	    /**
	     * Look up options value by key
	     * @method getOptions
	     *
	     * @param {string} key key
	     * @return {Object} associated object
	     */
	    View.prototype.getOptions = function getOptions(key) {
	        return this._optionsManager.getOptions(key);
	    };

	    /*
	     *  Set internal options.
	     *  No defaults options are set in View.
	     *
	     *  @method setOptions
	     *  @param {Object} options
	     */
	    View.prototype.setOptions = function setOptions(options) {
	        this._optionsManager.patch(options);
	    };

	    /**
	     * Add a child renderable to the view.
	     *   Note: This is meant to be used by an inheriting class
	     *   rather than from outside the prototype chain.
	     *
	     * @method add
	     * @return {RenderNode}
	     * @protected
	     */
	    View.prototype.add = function add() {
	        return this._node.add.apply(this._node, arguments);
	    };

	    /**
	     * Alias for add
	     * @method _add
	     */
	    View.prototype._add = View.prototype.add;

	    /**
	     * Generate a render spec from the contents of this component.
	     *
	     * @private
	     * @method render
	     * @return {number} Render spec for this component
	     */
	    View.prototype.render = function render() {
	        return this._node.render();
	    };

	    /**
	     * Return size of contained element.
	     *
	     * @method getSize
	     * @return {Array.Number} [width, height]
	     */
	    View.prototype.getSize = function getSize() {
	        if (this._node && this._node.getSize) {
	            return this._node.getSize.apply(this._node, arguments) || this.options.size;
	        }
	        else return this.options.size;
	    };

	    module.exports = View;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define*/

	/**
	 * Tab-bar layout supporting both horizontal (default) and vertical orientation.
	 *
	 * |options|type|description|
	 * |---|---|---|
	 * |`[margins]`|Number/Array|Margins shorthand (e.g. 5, [10, 20], [2, 5, 2, 10])|
	 * |`[spacing]`|Number|Space in between items|
	 * |`[itemSize]`|Number/Bool|Width or height of the item (see below)|
	 *
	 * `itemSize` can have of the following values:
	 *
	 * |itemSize|description|
	 * |---|---|---|
	 * |`undefined`|When itemSize is undefined or omitted, all items are spread out equally over the full size.|
	 * |`Number`|Size of the item.|
	 * |`true`|Use the size of the renderable (calls `getSize` on the item).|
	 *
	 * Example:
	 *
	 * ```javascript
	 * var TabBarLayout = require('famous-flex/layouts/TabBarLayout');
	 *
	 * var layout = new LayoutController({
	 *   layout: TabBarLayout,
	 *   layoutOptions: {
	 *     itemSize: undefined,   // undefined = fill equally to full width
	 *     margins: [5, 1, 5, 1], // margins to utilize
	 *     spacing: 10            // space in between items
	 *   },
	 *   dataSource: {
	 *     background: new Surface({properties: {backgroundColor: 'black'}}),
	 *     items: [
	 *       new Surface({ content: 'one' }),
	 *       new Surface({ content: 'two' }),
	 *       new Surface({ content: 'three' })
	 *     ],
	 *     spacers: [ // spacers in between the items
	 *       new Surface({properties: {backgroundColor: 'gray'}}),
	 *       new Surface({properties: {backgroundColor: 'gray'}})
	 *     ],
	 *     selectedItemOverlay: {
	 *       new Surface({ properties: {borderBottom: '4px solid blue'}})
	 *     }
	 *   }
	 * });
	 * ```
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var Utility = __webpack_require__(27);
	    var LayoutUtility = __webpack_require__(32);

	    // Define capabilities of this layout function
	    var capabilities = {
	        sequence: true,
	        direction: [Utility.Direction.X, Utility.Direction.Y],
	        trueSize: true
	    };

	    // global data
	    var size;
	    var direction;
	    var revDirection;
	    var items;
	    var spacers;
	    var margins;
	    var spacing;
	    var sizeLeft;
	    var set = {
	        size: [0, 0],
	        translate: [0, 0, 0],
	        align: [0, 0],
	        origin: [0, 0]
	    };
	    var nodeSize;
	    var offset;

	    // Layout function
	    function NavBarLayout(context, options) {

	        // Prepare data
	        size = context.size;
	        direction = context.direction;
	        revDirection = direction ? 0 : 1;
	        spacing = options.spacing || 0;
	        items = context.get('items');
	        spacers = context.get('spacers');
	        margins = LayoutUtility.normalizeMargins(options.margins);
	        set.size[0] = context.size[0];
	        set.size[1] = context.size[1];
	        set.size[revDirection] -= (margins[1 - revDirection] + margins[3 - revDirection]);
	        set.translate[0] = 0;
	        set.translate[1] = 0;
	        set.translate[2] = 0.001;
	        set.translate[revDirection] = margins[direction ? 3 : 0];
	        set.align[0] = 0;
	        set.align[1] = 0;
	        set.origin[0] = 0;
	        set.origin[1] = 0;

	        // When no item-size specified, spread all items
	        // out equally over the full width/height, taking into
	        // account margins & spacing
	        offset = direction ? margins[0] : margins[3];
	        sizeLeft = size[direction] - (offset + (direction ? margins[2] : margins[1]));
	        sizeLeft -= ((items.length - 1) * spacing);
	        for (var i = 0; i < items.length; i++) {

	            // Calculate item size
	            if (options.itemSize === undefined) {
	                nodeSize = Math.round(sizeLeft / (items.length - i));
	            }
	            else {
	                nodeSize = (options.itemSize === true) ? context.resolveSize(items[i], size)[direction] : options.itemSize;
	            }

	            // Calculate length used
	            set.scrollLength = nodeSize;
	            if (i === 0) {
	                set.scrollLength += direction ? margins[0] : margins[3];
	            }
	            if (i === (items.length - 1)) {
	                set.scrollLength += direction ? margins[2] : margins[1];
	            }
	            else {
	                set.scrollLength += spacing;
	            }

	            // Position item
	            set.size[direction] = nodeSize;
	            set.translate[direction] = offset;
	            context.set(items[i], set);
	            offset += nodeSize;
	            sizeLeft -= nodeSize;

	            // Place selected item overlay
	            if (i === options.selectedItemIndex) {
	                set.scrollLength = 0;
	                set.translate[direction] += (nodeSize / 2);
	                set.translate[2] = 0.002;
	                set.origin[direction] = 0.5;
	                context.set('selectedItemOverlay', set);
	                set.origin[direction] = 0;
	                set.translate[2] = 0.001;
	            }

	            // Position spacer (optional)
	            if (i < (items.length - 1)) {
	                if (spacers && (i < spacers.length)) {
	                    set.size[direction] = spacing;
	                    set.translate[direction] = offset;
	                    context.set(spacers[i], set);
	                }
	                offset += spacing;
	            }
	            else {
	                offset += direction ? margins[2] : margins[1];
	            }
	        }

	        // Set background
	        set.scrollLength = 0;
	        set.size[direction] = size[direction];
	        set.translate[direction] = 0;
	        set.translate[2] = 0;
	        context.set('background', set);
	    }

	    NavBarLayout.Capabilities = capabilities;
	    NavBarLayout.Name = 'TabBarLayout';
	    NavBarLayout.Description = 'TabBar widget layout';
	    module.exports = NavBarLayout;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var RenderNode = __webpack_require__(20);
	    var EventHandler = __webpack_require__(31);
	    var ElementAllocator = __webpack_require__(61);
	    var Transform = __webpack_require__(19);
	    var Transitionable = __webpack_require__(49);

	    var _zeroZero = [0, 0];
	    var usePrefix = !('perspective' in document.documentElement.style);

	    function _getElementSize(element) {
	        return [element.clientWidth, element.clientHeight];
	    }

	    var _setPerspective = usePrefix ? function(element, perspective) {
	        element.style.webkitPerspective = perspective ? perspective.toFixed() + 'px' : '';
	    } : function(element, perspective) {
	        element.style.perspective = perspective ? perspective.toFixed() + 'px' : '';
	    };

	    /**
	     * The top-level container for a Famous-renderable piece of the document.
	     *   It is directly updated by the process-wide Engine object, and manages one
	     *   render tree root, which can contain other renderables.
	     *
	     * @class Context
	     * @constructor
	     * @private
	     * @param {Node} container Element in which content will be inserted
	     */
	    function Context(container) {
	        this.container = container;
	        this._allocator = new ElementAllocator(container);

	        this._node = new RenderNode();
	        this._eventOutput = new EventHandler();
	        this._size = _getElementSize(this.container);

	        this._perspectiveState = new Transitionable(0);
	        this._perspective = undefined;

	        this._nodeContext = {
	            allocator: this._allocator,
	            transform: Transform.identity,
	            opacity: 1,
	            origin: _zeroZero,
	            align: _zeroZero,
	            size: this._size
	        };

	        this._eventOutput.on('resize', function() {
	            this.setSize(_getElementSize(this.container));
	        }.bind(this));

	    }

	    // Note: Unused
	    Context.prototype.getAllocator = function getAllocator() {
	        return this._allocator;
	    };

	    /**
	     * Add renderables to this Context's render tree.
	     *
	     * @method add
	     *
	     * @param {Object} obj renderable object
	     * @return {RenderNode} RenderNode wrapping this object, if not already a RenderNode
	     */
	    Context.prototype.add = function add(obj) {
	        return this._node.add(obj);
	    };

	    /**
	     * Move this Context to another containing document element.
	     *
	     * @method migrate
	     *
	     * @param {Node} container Element to which content will be migrated
	     */
	    Context.prototype.migrate = function migrate(container) {
	        if (container === this.container) return;
	        this.container = container;
	        this._allocator.migrate(container);
	    };

	    /**
	     * Gets viewport size for Context.
	     *
	     * @method getSize
	     *
	     * @return {Array.Number} viewport size as [width, height]
	     */
	    Context.prototype.getSize = function getSize() {
	        return this._size;
	    };

	    /**
	     * Sets viewport size for Context.
	     *
	     * @method setSize
	     *
	     * @param {Array.Number} size [width, height].  If unspecified, use size of root document element.
	     */
	    Context.prototype.setSize = function setSize(size) {
	        if (!size) size = _getElementSize(this.container);
	        this._size[0] = size[0];
	        this._size[1] = size[1];
	    };

	    /**
	     * Commit this Context's content changes to the document.
	     *
	     * @private
	     * @method update
	     * @param {Object} contextParameters engine commit specification
	     */
	    Context.prototype.update = function update(contextParameters) {
	        if (contextParameters) {
	            if (contextParameters.transform) this._nodeContext.transform = contextParameters.transform;
	            if (contextParameters.opacity) this._nodeContext.opacity = contextParameters.opacity;
	            if (contextParameters.origin) this._nodeContext.origin = contextParameters.origin;
	            if (contextParameters.align) this._nodeContext.align = contextParameters.align;
	            if (contextParameters.size) this._nodeContext.size = contextParameters.size;
	        }
	        var perspective = this._perspectiveState.get();
	        if (perspective !== this._perspective) {
	            _setPerspective(this.container, perspective);
	            this._perspective = perspective;
	        }

	        this._node.commit(this._nodeContext);
	    };

	    /**
	     * Get current perspective of this context in pixels.
	     *
	     * @method getPerspective
	     * @return {Number} depth perspective in pixels
	     */
	    Context.prototype.getPerspective = function getPerspective() {
	        return this._perspectiveState.get();
	    };

	    /**
	     * Set current perspective of this context in pixels.
	     *
	     * @method setPerspective
	     * @param {Number} perspective in pixels
	     * @param {Object} [transition] Transitionable object for applying the change
	     * @param {function(Object)} callback function called on completion of transition
	     */
	    Context.prototype.setPerspective = function setPerspective(perspective, transition, callback) {
	        return this._perspectiveState.set(perspective, transition, callback);
	    };

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    Context.prototype.emit = function emit(type, event) {
	        return this._eventOutput.emit(type, event);
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    Context.prototype.on = function on(type, handler) {
	        return this._eventOutput.on(type, handler);
	    };

	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function} handler function object to remove
	     * @return {EventHandler} internal event handler object (for chaining)
	     */
	    Context.prototype.removeListener = function removeListener(type, handler) {
	        return this._eventOutput.removeListener(type, handler);
	    };

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    Context.prototype.pipe = function pipe(target) {
	        return this._eventOutput.pipe(target);
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe".
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    Context.prototype.unpipe = function unpipe(target) {
	        return this._eventOutput.unpipe(target);
	    };

	    module.exports = Context;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Entity = __webpack_require__(28);
	    var EventHandler = __webpack_require__(31);
	    var Transform = __webpack_require__(19);

	    var usePrefix = !('transform' in document.documentElement.style);
	    var devicePixelRatio = window.devicePixelRatio || 1;

	    /**
	     * A base class for viewable content and event
	     *   targets inside a Famo.us application, containing a renderable document
	     *   fragment. Like an HTML div, it can accept internal markup,
	     *   properties, classes, and handle events.
	     *
	     * @class ElementOutput
	     * @constructor
	     *
	     * @param {Node} element document parent of this container
	     */
	    function ElementOutput(element) {
	        this._matrix = null;
	        this._opacity = 1;
	        this._origin = null;
	        this._size = null;

	        this._eventOutput = new EventHandler();
	        this._eventOutput.bindThis(this);

	        /** @ignore */
	        this.eventForwarder = function eventForwarder(event) {
	            this._eventOutput.emit(event.type, event);
	        }.bind(this);

	        this.id = Entity.register(this);
	        this._element = null;
	        this._sizeDirty = false;
	        this._originDirty = false;
	        this._transformDirty = false;

	        this._invisible = false;
	        if (element) this.attach(element);
	    }

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} fn handler callback
	     * @return {EventHandler} this
	     */
	    ElementOutput.prototype.on = function on(type, fn) {
	        if (this._element) this._element.addEventListener(type, this.eventForwarder);
	        this._eventOutput.on(type, fn);
	    };

	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on"
	     *
	     * @method removeListener
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} fn handler
	     */
	    ElementOutput.prototype.removeListener = function removeListener(type, fn) {
	        this._eventOutput.removeListener(type, fn);
	    };

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} [event] event data
	     * @return {EventHandler} this
	     */
	    ElementOutput.prototype.emit = function emit(type, event) {
	        if (event && !event.origin) event.origin = this;
	        var handled = this._eventOutput.emit(type, event);
	        if (handled && event && event.stopPropagation) event.stopPropagation();
	        return handled;
	    };

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    ElementOutput.prototype.pipe = function pipe(target) {
	        return this._eventOutput.pipe(target);
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe"
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    ElementOutput.prototype.unpipe = function unpipe(target) {
	        return this._eventOutput.unpipe(target);
	    };

	    /**
	     * Return spec for this surface. Note that for a base surface, this is
	     *    simply an id.
	     *
	     * @method render
	     * @private
	     * @return {Object} render spec for this surface (spec id)
	     */
	    ElementOutput.prototype.render = function render() {
	        return this.id;
	    };

	    //  Attach Famous event handling to document events emanating from target
	    //    document element.  This occurs just after attachment to the document.
	    //    Calling this enables methods like #on and #pipe.
	    function _addEventListeners(target) {
	        for (var i in this._eventOutput.listeners) {
	            target.addEventListener(i, this.eventForwarder);
	        }
	    }

	    //  Detach Famous event handling from document events emanating from target
	    //  document element.  This occurs just before detach from the document.
	    function _removeEventListeners(target) {
	        for (var i in this._eventOutput.listeners) {
	            target.removeEventListener(i, this.eventForwarder);
	        }
	    }

	    /**
	     * Return a Matrix's webkit css representation to be used with the
	     *    CSS3 -webkit-transform style.
	     *    Example: -webkit-transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,716,243,0,1)
	     *
	     * @method _formatCSSTransform
	     * @private
	     * @param {FamousMatrix} m matrix
	     * @return {string} matrix3d CSS style representation of the transform
	     */
	    function _formatCSSTransform(m) {
	        m[12] = Math.round(m[12] * devicePixelRatio) / devicePixelRatio;
	        m[13] = Math.round(m[13] * devicePixelRatio) / devicePixelRatio;

	        var result = 'matrix3d(';
	        for (var i = 0; i < 15; i++) {
	            result += (m[i] < 0.000001 && m[i] > -0.000001) ? '0,' : m[i] + ',';
	        }
	        result += m[15] + ')';
	        return result;
	    }

	    /**
	     * Directly apply given FamousMatrix to the document element as the
	     *   appropriate webkit CSS style.
	     *
	     * @method setMatrix
	     *
	     * @static
	     * @private
	     * @param {Element} element document element
	     * @param {FamousMatrix} matrix
	     */

	    var _setMatrix;
	    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
	        _setMatrix = function(element, matrix) {
	            element.style.zIndex = (matrix[14] * 1000000) | 0;    // fix for Firefox z-buffer issues
	            element.style.transform = _formatCSSTransform(matrix);
	        };
	    }
	    else if (usePrefix) {
	        _setMatrix = function(element, matrix) {
	            element.style.webkitTransform = _formatCSSTransform(matrix);
	        };
	    }
	    else {
	        _setMatrix = function(element, matrix) {
	            element.style.transform = _formatCSSTransform(matrix);
	        };
	    }

	    // format origin as CSS percentage string
	    function _formatCSSOrigin(origin) {
	        return (100 * origin[0]) + '% ' + (100 * origin[1]) + '%';
	    }

	    // Directly apply given origin coordinates to the document element as the
	    // appropriate webkit CSS style.
	    var _setOrigin = usePrefix ? function(element, origin) {
	        element.style.webkitTransformOrigin = _formatCSSOrigin(origin);
	    } : function(element, origin) {
	        element.style.transformOrigin = _formatCSSOrigin(origin);
	    };

	    // Shrink given document element until it is effectively invisible.
	    var _setInvisible = usePrefix ? function(element) {
	        element.style.webkitTransform = 'scale3d(0.0001,0.0001,0.0001)';
	        element.style.opacity = 0;
	    } : function(element) {
	        element.style.transform = 'scale3d(0.0001,0.0001,0.0001)';
	        element.style.opacity = 0;
	    };

	    function _xyNotEquals(a, b) {
	        return (a && b) ? (a[0] !== b[0] || a[1] !== b[1]) : a !== b;
	    }

	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     */
	    ElementOutput.prototype.commit = function commit(context) {
	        var target = this._element;
	        if (!target) return;

	        var matrix = context.transform;
	        var opacity = context.opacity;
	        var origin = context.origin;
	        var size = context.size;

	        if (!matrix && this._matrix) {
	            this._matrix = null;
	            this._opacity = 0;
	            _setInvisible(target);
	            return;
	        }

	        if (_xyNotEquals(this._origin, origin)) this._originDirty = true;
	        if (Transform.notEquals(this._matrix, matrix)) this._transformDirty = true;

	        if (this._invisible) {
	            this._invisible = false;
	            this._element.style.display = '';
	        }

	        if (this._opacity !== opacity) {
	            this._opacity = opacity;
	            target.style.opacity = (opacity >= 1) ? '0.999999' : opacity;
	        }

	        if (this._transformDirty || this._originDirty || this._sizeDirty) {
	            if (this._sizeDirty) this._sizeDirty = false;

	            if (this._originDirty) {
	                if (origin) {
	                    if (!this._origin) this._origin = [0, 0];
	                    this._origin[0] = origin[0];
	                    this._origin[1] = origin[1];
	                }
	                else this._origin = null;
	                _setOrigin(target, this._origin);
	                this._originDirty = false;
	            }

	            if (!matrix) matrix = Transform.identity;
	            this._matrix = matrix;
	            var aaMatrix = this._size ? Transform.thenMove(matrix, [-this._size[0]*origin[0], -this._size[1]*origin[1], 0]) : matrix;
	            _setMatrix(target, aaMatrix);
	            this._transformDirty = false;
	        }
	    };

	    ElementOutput.prototype.cleanup = function cleanup() {
	        if (this._element) {
	            this._invisible = true;
	            this._element.style.display = 'none';
	        }
	    };

	    /**
	     * Place the document element that this component manages into the document.
	     *
	     * @private
	     * @method attach
	     * @param {Node} target document parent of this container
	     */
	    ElementOutput.prototype.attach = function attach(target) {
	        this._element = target;
	        _addEventListeners.call(this, target);
	    };

	    /**
	     * Remove any contained document content associated with this surface
	     *   from the actual document.
	     *
	     * @private
	     * @method detach
	     */
	    ElementOutput.prototype.detach = function detach() {
	        var target = this._element;
	        if (target) {
	            _removeEventListeners.call(this, target);
	            if (this._invisible) {
	                this._invisible = false;
	                this._element.style.display = '';
	            }
	        }
	        this._element = null;
	        return target;
	    };

	    module.exports = ElementOutput;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bower_components/ionicons/fonts/ionicons.eot"

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bower_components/ionicons/fonts/ionicons.ttf"

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bower_components/ionicons/fonts/ionicons.woff"

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bower_components/ionicons/fonts/ionicons.svg"

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Transform = __webpack_require__(19);

	    /**
	     *
	     * This object translates the rendering instructions ("render specs")
	     *   that renderable components generate into document update
	     *   instructions ("update specs").  Private.
	     *
	     * @private
	     * @class SpecParser
	     * @constructor
	     */
	    function SpecParser() {
	        this.result = {};
	    }
	    SpecParser._instance = new SpecParser();

	    /**
	     * Convert a render spec coming from the context's render chain to an
	     *    update spec for the update chain. This is the only major entry point
	     *    for a consumer of this class.
	     *
	     * @method parse
	     * @static
	     * @private
	     *
	     * @param {renderSpec} spec input render spec
	     * @param {Object} context context to do the parse in
	     * @return {Object} the resulting update spec (if no callback
	     *   specified, else none)
	     */
	    SpecParser.parse = function parse(spec, context) {
	        return SpecParser._instance.parse(spec, context);
	    };

	    /**
	     * Convert a renderSpec coming from the context's render chain to an update
	     *    spec for the update chain. This is the only major entrypoint for a
	     *    consumer of this class.
	     *
	     * @method parse
	     *
	     * @private
	     * @param {renderSpec} spec input render spec
	     * @param {Context} context
	     * @return {updateSpec} the resulting update spec
	     */
	    SpecParser.prototype.parse = function parse(spec, context) {
	        this.reset();
	        this._parseSpec(spec, context, Transform.identity);
	        return this.result;
	    };

	    /**
	     * Prepare SpecParser for re-use (or first use) by setting internal state
	     *  to blank.
	     *
	     * @private
	     * @method reset
	     */
	    SpecParser.prototype.reset = function reset() {
	        this.result = {};
	    };

	    // Multiply matrix M by vector v
	    function _vecInContext(v, m) {
	        return [
	            v[0] * m[0] + v[1] * m[4] + v[2] * m[8],
	            v[0] * m[1] + v[1] * m[5] + v[2] * m[9],
	            v[0] * m[2] + v[1] * m[6] + v[2] * m[10]
	        ];
	    }

	    var _zeroZero = [0, 0];

	    // From the provided renderSpec tree, recursively compose opacities,
	    //    origins, transforms, and sizes corresponding to each surface id from
	    //    the provided renderSpec tree structure. On completion, those
	    //    properties of 'this' object should be ready to use to build an
	    //    updateSpec.
	    SpecParser.prototype._parseSpec = function _parseSpec(spec, parentContext, sizeContext) {
	        var id;
	        var target;
	        var transform;
	        var opacity;
	        var origin;
	        var align;
	        var size;

	        if (typeof spec === 'number') {
	            id = spec;
	            transform = parentContext.transform;
	            align = parentContext.align || _zeroZero;
	            if (parentContext.size && align && (align[0] || align[1])) {
	                var alignAdjust = [align[0] * parentContext.size[0], align[1] * parentContext.size[1], 0];
	                transform = Transform.thenMove(transform, _vecInContext(alignAdjust, sizeContext));
	            }
	            this.result[id] = {
	                transform: transform,
	                opacity: parentContext.opacity,
	                origin: parentContext.origin || _zeroZero,
	                align: parentContext.align || _zeroZero,
	                size: parentContext.size
	            };
	        }
	        else if (!spec) { // placed here so 0 will be cached earlier
	            return;
	        }
	        else if (spec instanceof Array) {
	            for (var i = 0; i < spec.length; i++) {
	                this._parseSpec(spec[i], parentContext, sizeContext);
	            }
	        }
	        else {
	            target = spec.target;
	            transform = parentContext.transform;
	            opacity = parentContext.opacity;
	            origin = parentContext.origin;
	            align = parentContext.align;
	            size = parentContext.size;
	            var nextSizeContext = sizeContext;

	            if (spec.opacity !== undefined) opacity = parentContext.opacity * spec.opacity;
	            if (spec.transform) transform = Transform.multiply(parentContext.transform, spec.transform);
	            if (spec.origin) {
	                origin = spec.origin;
	                nextSizeContext = parentContext.transform;
	            }
	            if (spec.align) align = spec.align;

	            if (spec.size || spec.proportions) {
	                var parentSize = size;
	                size = [size[0], size[1]];

	                if (spec.size) {
	                    if (spec.size[0] !== undefined) size[0] = spec.size[0];
	                    if (spec.size[1] !== undefined) size[1] = spec.size[1];
	                }

	                if (spec.proportions) {
	                    if (spec.proportions[0] !== undefined) size[0] = size[0] * spec.proportions[0];
	                    if (spec.proportions[1] !== undefined) size[1] = size[1] * spec.proportions[1];
	                }

	                if (parentSize) {
	                    if (align && (align[0] || align[1])) transform = Transform.thenMove(transform, _vecInContext([align[0] * parentSize[0], align[1] * parentSize[1], 0], sizeContext));
	                    if (origin && (origin[0] || origin[1])) transform = Transform.moveThen([-origin[0] * size[0], -origin[1] * size[1], 0], transform);
	                }

	                nextSizeContext = parentContext.transform;
	                origin = null;
	                align = null;
	            }

	            this._parseSpec(target, {
	                transform: transform,
	                opacity: opacity,
	                origin: origin,
	                align: align,
	                size: size
	            }, nextSizeContext);
	        }
	    };

	    module.exports = SpecParser;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Transform = __webpack_require__(19);

	    /* TODO: remove these dependencies when deprecation complete */
	    var Transitionable = __webpack_require__(49);
	    var TransitionableTransform = __webpack_require__(50);

	    /**
	     *
	     *  A collection of visual changes to be
	     *    applied to another renderable component. This collection includes a
	     *    transform matrix, an opacity constant, a size, an origin specifier.
	     *    Modifier objects can be added to any RenderNode or object
	     *    capable of displaying renderables.  The Modifier's children and descendants
	     *    are transformed by the amounts specified in the Modifier's properties.
	     *
	     * @class Modifier
	     * @constructor
	     * @param {Object} [options] overrides of default options
	     * @param {Transform} [options.transform] affine transformation matrix
	     * @param {Number} [options.opacity]
	     * @param {Array.Number} [options.origin] origin adjustment
	     * @param {Array.Number} [options.size] size to apply to descendants
	     */
	    function Modifier(options) {
	        this._transformGetter = null;
	        this._opacityGetter = null;
	        this._originGetter = null;
	        this._alignGetter = null;
	        this._sizeGetter = null;
	        this._proportionGetter = null;

	        /* TODO: remove this when deprecation complete */
	        this._legacyStates = {};

	        this._output = {
	            transform: Transform.identity,
	            opacity: 1,
	            origin: null,
	            align: null,
	            size: null,
	            proportions: null,
	            target: null
	        };

	        if (options) {
	            if (options.transform) this.transformFrom(options.transform);
	            if (options.opacity !== undefined) this.opacityFrom(options.opacity);
	            if (options.origin) this.originFrom(options.origin);
	            if (options.align) this.alignFrom(options.align);
	            if (options.size) this.sizeFrom(options.size);
	            if (options.proportions) this.proportionsFrom(options.proportions);
	        }
	    }

	    /**
	     * Function, object, or static transform matrix which provides the transform.
	     *   This is evaluated on every tick of the engine.
	     *
	     * @method transformFrom
	     *
	     * @param {Object} transform transform provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.transformFrom = function transformFrom(transform) {
	        if (transform instanceof Function) this._transformGetter = transform;
	        else if (transform instanceof Object && transform.get) this._transformGetter = transform.get.bind(transform);
	        else {
	            this._transformGetter = null;
	            this._output.transform = transform;
	        }
	        return this;
	    };

	    /**
	     * Set function, object, or number to provide opacity, in range [0,1].
	     *
	     * @method opacityFrom
	     *
	     * @param {Object} opacity provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.opacityFrom = function opacityFrom(opacity) {
	        if (opacity instanceof Function) this._opacityGetter = opacity;
	        else if (opacity instanceof Object && opacity.get) this._opacityGetter = opacity.get.bind(opacity);
	        else {
	            this._opacityGetter = null;
	            this._output.opacity = opacity;
	        }
	        return this;
	    };

	    /**
	     * Set function, object, or numerical array to provide origin, as [x,y],
	     *   where x and y are in the range [0,1].
	     *
	     * @method originFrom
	     *
	     * @param {Object} origin provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.originFrom = function originFrom(origin) {
	        if (origin instanceof Function) this._originGetter = origin;
	        else if (origin instanceof Object && origin.get) this._originGetter = origin.get.bind(origin);
	        else {
	            this._originGetter = null;
	            this._output.origin = origin;
	        }
	        return this;
	    };

	    /**
	     * Set function, object, or numerical array to provide align, as [x,y],
	     *   where x and y are in the range [0,1].
	     *
	     * @method alignFrom
	     *
	     * @param {Object} align provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.alignFrom = function alignFrom(align) {
	        if (align instanceof Function) this._alignGetter = align;
	        else if (align instanceof Object && align.get) this._alignGetter = align.get.bind(align);
	        else {
	            this._alignGetter = null;
	            this._output.align = align;
	        }
	        return this;
	    };

	    /**
	     * Set function, object, or numerical array to provide size, as [width, height].
	     *
	     * @method sizeFrom
	     *
	     * @param {Object} size provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.sizeFrom = function sizeFrom(size) {
	        if (size instanceof Function) this._sizeGetter = size;
	        else if (size instanceof Object && size.get) this._sizeGetter = size.get.bind(size);
	        else {
	            this._sizeGetter = null;
	            this._output.size = size;
	        }
	        return this;
	    };

	    /**
	     * Set function, object, or numerical array to provide proportions, as [percent of width, percent of height].
	     *
	     * @method proportionsFrom
	     *
	     * @param {Object} proportions provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.proportionsFrom = function proportionsFrom(proportions) {
	        if (proportions instanceof Function) this._proportionGetter = proportions;
	        else if (proportions instanceof Object && proportions.get) this._proportionGetter = proportions.get.bind(proportions);
	        else {
	            this._proportionGetter = null;
	            this._output.proportions = proportions;
	        }
	        return this;
	    };

	     /**
	     * Deprecated: Prefer transformFrom with static Transform, or use a TransitionableTransform.
	     * @deprecated
	     * @method setTransform
	     *
	     * @param {Transform} transform Transform to transition to
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setTransform = function setTransform(transform, transition, callback) {
	        if (transition || this._legacyStates.transform) {
	            if (!this._legacyStates.transform) {
	                this._legacyStates.transform = new TransitionableTransform(this._output.transform);
	            }
	            if (!this._transformGetter) this.transformFrom(this._legacyStates.transform);

	            this._legacyStates.transform.set(transform, transition, callback);
	            return this;
	        }
	        else return this.transformFrom(transform);
	    };

	    /**
	     * Deprecated: Prefer opacityFrom with static opacity array, or use a Transitionable with that opacity.
	     * @deprecated
	     * @method setOpacity
	     *
	     * @param {Number} opacity Opacity value to transition to.
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setOpacity = function setOpacity(opacity, transition, callback) {
	        if (transition || this._legacyStates.opacity) {
	            if (!this._legacyStates.opacity) {
	                this._legacyStates.opacity = new Transitionable(this._output.opacity);
	            }
	            if (!this._opacityGetter) this.opacityFrom(this._legacyStates.opacity);

	            return this._legacyStates.opacity.set(opacity, transition, callback);
	        }
	        else return this.opacityFrom(opacity);
	    };

	    /**
	     * Deprecated: Prefer originFrom with static origin array, or use a Transitionable with that origin.
	     * @deprecated
	     * @method setOrigin
	     *
	     * @param {Array.Number} origin two element array with values between 0 and 1.
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setOrigin = function setOrigin(origin, transition, callback) {
	        /* TODO: remove this if statement when deprecation complete */
	        if (transition || this._legacyStates.origin) {

	            if (!this._legacyStates.origin) {
	                this._legacyStates.origin = new Transitionable(this._output.origin || [0, 0]);
	            }
	            if (!this._originGetter) this.originFrom(this._legacyStates.origin);

	            this._legacyStates.origin.set(origin, transition, callback);
	            return this;
	        }
	        else return this.originFrom(origin);
	    };

	    /**
	     * Deprecated: Prefer alignFrom with static align array, or use a Transitionable with that align.
	     * @deprecated
	     * @method setAlign
	     *
	     * @param {Array.Number} align two element array with values between 0 and 1.
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setAlign = function setAlign(align, transition, callback) {
	        /* TODO: remove this if statement when deprecation complete */
	        if (transition || this._legacyStates.align) {

	            if (!this._legacyStates.align) {
	                this._legacyStates.align = new Transitionable(this._output.align || [0, 0]);
	            }
	            if (!this._alignGetter) this.alignFrom(this._legacyStates.align);

	            this._legacyStates.align.set(align, transition, callback);
	            return this;
	        }
	        else return this.alignFrom(align);
	    };

	    /**
	     * Deprecated: Prefer sizeFrom with static origin array, or use a Transitionable with that size.
	     * @deprecated
	     * @method setSize
	     * @param {Array.Number} size two element array of [width, height]
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setSize = function setSize(size, transition, callback) {
	        if (size && (transition || this._legacyStates.size)) {
	            if (!this._legacyStates.size) {
	                this._legacyStates.size = new Transitionable(this._output.size || [0, 0]);
	            }
	            if (!this._sizeGetter) this.sizeFrom(this._legacyStates.size);

	            this._legacyStates.size.set(size, transition, callback);
	            return this;
	        }
	        else return this.sizeFrom(size);
	    };

	    /**
	     * Deprecated: Prefer proportionsFrom with static origin array, or use a Transitionable with those proportions.
	     * @deprecated
	     * @method setProportions
	     * @param {Array.Number} proportions two element array of [percent of width, percent of height]
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setProportions = function setProportions(proportions, transition, callback) {
	        if (proportions && (transition || this._legacyStates.proportions)) {
	            if (!this._legacyStates.proportions) {
	                this._legacyStates.proportions = new Transitionable(this._output.proportions || [0, 0]);
	            }
	            if (!this._proportionGetter) this.proportionsFrom(this._legacyStates.proportions);

	            this._legacyStates.proportions.set(proportions, transition, callback);
	            return this;
	        }
	        else return this.proportionsFrom(proportions);
	    };

	    /**
	     * Deprecated: Prefer to stop transform in your provider object.
	     * @deprecated
	     * @method halt
	     */
	    Modifier.prototype.halt = function halt() {
	        if (this._legacyStates.transform) this._legacyStates.transform.halt();
	        if (this._legacyStates.opacity) this._legacyStates.opacity.halt();
	        if (this._legacyStates.origin) this._legacyStates.origin.halt();
	        if (this._legacyStates.align) this._legacyStates.align.halt();
	        if (this._legacyStates.size) this._legacyStates.size.halt();
	        if (this._legacyStates.proportions) this._legacyStates.proportions.halt();
	        this._transformGetter = null;
	        this._opacityGetter = null;
	        this._originGetter = null;
	        this._alignGetter = null;
	        this._sizeGetter = null;
	        this._proportionGetter = null;
	    };

	    /**
	     * Deprecated: Prefer to use your provided transform or output of your transform provider.
	     * @deprecated
	     * @method getTransform
	     * @return {Object} transform provider object
	     */
	    Modifier.prototype.getTransform = function getTransform() {
	        return this._transformGetter();
	    };

	    /**
	     * Deprecated: Prefer to determine the end state of your transform from your transform provider
	     * @deprecated
	     * @method getFinalTransform
	     * @return {Transform} transform matrix
	     */
	    Modifier.prototype.getFinalTransform = function getFinalTransform() {
	        return this._legacyStates.transform ? this._legacyStates.transform.getFinal() : this._output.transform;
	    };

	    /**
	     * Deprecated: Prefer to use your provided opacity or output of your opacity provider.
	     * @deprecated
	     * @method getOpacity
	     * @return {Object} opacity provider object
	     */
	    Modifier.prototype.getOpacity = function getOpacity() {
	        return this._opacityGetter();
	    };

	    /**
	     * Deprecated: Prefer to use your provided origin or output of your origin provider.
	     * @deprecated
	     * @method getOrigin
	     * @return {Object} origin provider object
	     */
	    Modifier.prototype.getOrigin = function getOrigin() {
	        return this._originGetter();
	    };

	    /**
	     * Deprecated: Prefer to use your provided align or output of your align provider.
	     * @deprecated
	     * @method getAlign
	     * @return {Object} align provider object
	     */
	    Modifier.prototype.getAlign = function getAlign() {
	        return this._alignGetter();
	    };

	    /**
	     * Deprecated: Prefer to use your provided size or output of your size provider.
	     * @deprecated
	     * @method getSize
	     * @return {Object} size provider object
	     */
	    Modifier.prototype.getSize = function getSize() {
	        return this._sizeGetter ? this._sizeGetter() : this._output.size;
	    };

	    /**
	     * Deprecated: Prefer to use your provided proportions or output of your proportions provider.
	     * @deprecated
	     * @method getProportions
	     * @return {Object} proportions provider object
	     */
	    Modifier.prototype.getProportions = function getProportions() {
	        return this._proportionGetter ? this._proportionGetter() : this._output.proportions;
	    };

	    // call providers on tick to receive render spec elements to apply
	    function _update() {
	        if (this._transformGetter) this._output.transform = this._transformGetter();
	        if (this._opacityGetter) this._output.opacity = this._opacityGetter();
	        if (this._originGetter) this._output.origin = this._originGetter();
	        if (this._alignGetter) this._output.align = this._alignGetter();
	        if (this._sizeGetter) this._output.size = this._sizeGetter();
	        if (this._proportionGetter) this._output.proportions = this._proportionGetter();
	    }

	    /**
	     * Return render spec for this Modifier, applying to the provided
	     *    target component.  This is similar to render() for Surfaces.
	     *
	     * @private
	     * @method modify
	     *
	     * @param {Object} target (already rendered) render spec to
	     *    which to apply the transform.
	     * @return {Object} render spec for this Modifier, including the
	     *    provided target
	     */
	    Modifier.prototype.modify = function modify(target) {
	        _update.call(this);
	        this._output.target = target;
	        return this._output;
	    };

	    module.exports = Modifier;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var MultipleTransition = __webpack_require__(62);
	    var TweenTransition = __webpack_require__(63);

	    /**
	     * A state maintainer for a smooth transition between
	     *    numerically-specified states. Example numeric states include floats or
	     *    Transform objects.
	     *
	     * An initial state is set with the constructor or set(startState). A
	     *    corresponding end state and transition are set with set(endState,
	     *    transition). Subsequent calls to set(endState, transition) begin at
	     *    the last state. Calls to get(timestamp) provide the interpolated state
	     *    along the way.
	     *
	     * Note that there is no event loop here - calls to get() are the only way
	     *    to find state projected to the current (or provided) time and are
	     *    the only way to trigger callbacks. Usually this kind of object would
	     *    be part of the render() path of a visible component.
	     *
	     * @class Transitionable
	     * @constructor
	     * @param {number|Array.Number|Object.<number|string, number>} start
	     *    beginning state
	     */
	    function Transitionable(start) {
	        this.currentAction = null;
	        this.actionQueue = [];
	        this.callbackQueue = [];

	        this.state = 0;
	        this.velocity = undefined;
	        this._callback = undefined;
	        this._engineInstance = null;
	        this._currentMethod = null;

	        this.set(start);
	    }

	    var transitionMethods = {};

	    Transitionable.register = function register(methods) {
	        var success = true;
	        for (var method in methods) {
	            if (!Transitionable.registerMethod(method, methods[method]))
	                success = false;
	        }
	        return success;
	    };

	    Transitionable.registerMethod = function registerMethod(name, engineClass) {
	        if (!(name in transitionMethods)) {
	            transitionMethods[name] = engineClass;
	            return true;
	        }
	        else return false;
	    };

	    Transitionable.unregisterMethod = function unregisterMethod(name) {
	        if (name in transitionMethods) {
	            delete transitionMethods[name];
	            return true;
	        }
	        else return false;
	    };

	    function _loadNext() {
	        if (this._callback) {
	            var callback = this._callback;
	            this._callback = undefined;
	            callback();
	        }
	        if (this.actionQueue.length <= 0) {
	            this.set(this.get()); // no update required
	            return;
	        }
	        this.currentAction = this.actionQueue.shift();
	        this._callback = this.callbackQueue.shift();

	        var method = null;
	        var endValue = this.currentAction[0];
	        var transition = this.currentAction[1];
	        if (transition instanceof Object && transition.method) {
	            method = transition.method;
	            if (typeof method === 'string') method = transitionMethods[method];
	        }
	        else {
	            method = TweenTransition;
	        }

	        if (this._currentMethod !== method) {
	            if (!(endValue instanceof Object) || method.SUPPORTS_MULTIPLE === true || endValue.length <= method.SUPPORTS_MULTIPLE) {
	                this._engineInstance = new method();
	            }
	            else {
	                this._engineInstance = new MultipleTransition(method);
	            }
	            this._currentMethod = method;
	        }

	        this._engineInstance.reset(this.state, this.velocity);
	        if (this.velocity !== undefined) transition.velocity = this.velocity;
	        this._engineInstance.set(endValue, transition, _loadNext.bind(this));
	    }

	    /**
	     * Add transition to end state to the queue of pending transitions. Special
	     *    Use: calling without a transition resets the object to that state with
	     *    no pending actions
	     *
	     * @method set
	     *
	     * @param {number|FamousMatrix|Array.Number|Object.<number, number>} endState
	     *    end state to which we interpolate
	     * @param {transition=} transition object of type {duration: number, curve:
	     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
	     *    instantaneous.
	     * @param {function()=} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    Transitionable.prototype.set = function set(endState, transition, callback) {
	        if (!transition) {
	            this.reset(endState);
	            if (callback) callback();
	            return this;
	        }

	        var action = [endState, transition];
	        this.actionQueue.push(action);
	        this.callbackQueue.push(callback);
	        if (!this.currentAction) _loadNext.call(this);
	        return this;
	    };

	    /**
	     * Cancel all transitions and reset to a stable state
	     *
	     * @method reset
	     *
	     * @param {number|Array.Number|Object.<number, number>} startState
	     *    stable state to set to
	     */
	    Transitionable.prototype.reset = function reset(startState, startVelocity) {
	        this._currentMethod = null;
	        this._engineInstance = null;
	        this._callback = undefined;
	        this.state = startState;
	        this.velocity = startVelocity;
	        this.currentAction = null;
	        this.actionQueue = [];
	        this.callbackQueue = [];
	    };

	    /**
	     * Add delay action to the pending action queue queue.
	     *
	     * @method delay
	     *
	     * @param {number} duration delay time (ms)
	     * @param {function} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    Transitionable.prototype.delay = function delay(duration, callback) {
	        this.set(this.get(), {duration: duration,
	            curve: function() {
	                return 0;
	            }},
	            callback
	        );
	    };

	    /**
	     * Get interpolated state of current action at provided time. If the last
	     *    action has completed, invoke its callback.
	     *
	     * @method get
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     * @return {number|Object.<number|string, number>} beginning state
	     *    interpolated to this point in time.
	     */
	    Transitionable.prototype.get = function get(timestamp) {
	        if (this._engineInstance) {
	            if (this._engineInstance.getVelocity)
	                this.velocity = this._engineInstance.getVelocity();
	            this.state = this._engineInstance.get(timestamp);
	        }
	        return this.state;
	    };

	    /**
	     * Is there at least one action pending completion?
	     *
	     * @method isActive
	     *
	     * @return {boolean}
	     */
	    Transitionable.prototype.isActive = function isActive() {
	        return !!this.currentAction;
	    };

	    /**
	     * Halt transition at current state and erase all pending actions.
	     *
	     * @method halt
	     */
	    Transitionable.prototype.halt = function halt() {
	        return this.set(this.get());
	    };

	    module.exports = Transitionable;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Transitionable = __webpack_require__(49);
	    var Transform = __webpack_require__(19);
	    var Utility = __webpack_require__(27);

	    /**
	     * A class for transitioning the state of a Transform by transitioning
	     * its translate, scale, skew and rotate components independently.
	     *
	     * @class TransitionableTransform
	     * @constructor
	     *
	     * @param [transform=Transform.identity] {Transform} The initial transform state
	     */
	    function TransitionableTransform(transform) {
	        this._final = Transform.identity.slice();

	        this._finalTranslate = [0, 0, 0];
	        this._finalRotate = [0, 0, 0];
	        this._finalSkew = [0, 0, 0];
	        this._finalScale = [1, 1, 1];

	        this.translate = new Transitionable(this._finalTranslate);
	        this.rotate = new Transitionable(this._finalRotate);
	        this.skew = new Transitionable(this._finalSkew);
	        this.scale = new Transitionable(this._finalScale);

	        if (transform) this.set(transform);
	    }

	    function _build() {
	        return Transform.build({
	            translate: this.translate.get(),
	            rotate: this.rotate.get(),
	            skew: this.skew.get(),
	            scale: this.scale.get()
	        });
	    }

	    function _buildFinal() {
	        return Transform.build({
	            translate: this._finalTranslate,
	            rotate: this._finalRotate,
	            skew: this._finalSkew,
	            scale: this._finalScale
	        });
	    }

	    /**
	     * An optimized way of setting only the translation component of a Transform
	     *
	     * @method setTranslate
	     * @chainable
	     *
	     * @param translate {Array}     New translation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setTranslate = function setTranslate(translate, transition, callback) {
	        this._finalTranslate = translate;
	        this._final = _buildFinal.call(this);
	        this.translate.set(translate, transition, callback);
	        return this;
	    };

	    /**
	     * An optimized way of setting only the scale component of a Transform
	     *
	     * @method setScale
	     * @chainable
	     *
	     * @param scale {Array}         New scale state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setScale = function setScale(scale, transition, callback) {
	        this._finalScale = scale;
	        this._final = _buildFinal.call(this);
	        this.scale.set(scale, transition, callback);
	        return this;
	    };

	    /**
	     * An optimized way of setting only the rotational component of a Transform
	     *
	     * @method setRotate
	     * @chainable
	     *
	     * @param eulerAngles {Array}   Euler angles for new rotation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setRotate = function setRotate(eulerAngles, transition, callback) {
	        this._finalRotate = eulerAngles;
	        this._final = _buildFinal.call(this);
	        this.rotate.set(eulerAngles, transition, callback);
	        return this;
	    };

	    /**
	     * An optimized way of setting only the skew component of a Transform
	     *
	     * @method setSkew
	     * @chainable
	     *
	     * @param skewAngles {Array}    New skew state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setSkew = function setSkew(skewAngles, transition, callback) {
	        this._finalSkew = skewAngles;
	        this._final = _buildFinal.call(this);
	        this.skew.set(skewAngles, transition, callback);
	        return this;
	    };

	    /**
	     * Setter for a TransitionableTransform with optional parameters to transition
	     * between Transforms
	     *
	     * @method set
	     * @chainable
	     *
	     * @param transform {Array}     New transform state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.set = function set(transform, transition, callback) {
	        var components = Transform.interpret(transform);

	        this._finalTranslate = components.translate;
	        this._finalRotate = components.rotate;
	        this._finalSkew = components.skew;
	        this._finalScale = components.scale;
	        this._final = transform;

	        var _callback = callback ? Utility.after(4, callback) : null;
	        this.translate.set(components.translate, transition, _callback);
	        this.rotate.set(components.rotate, transition, _callback);
	        this.skew.set(components.skew, transition, _callback);
	        this.scale.set(components.scale, transition, _callback);
	        return this;
	    };

	    /**
	     * Sets the default transition to use for transitioning betwen Transform states
	     *
	     * @method setDefaultTransition
	     *
	     * @param transition {Object} Transition definition
	     */
	    TransitionableTransform.prototype.setDefaultTransition = function setDefaultTransition(transition) {
	        this.translate.setDefault(transition);
	        this.rotate.setDefault(transition);
	        this.skew.setDefault(transition);
	        this.scale.setDefault(transition);
	    };

	    /**
	     * Getter. Returns the current state of the Transform
	     *
	     * @method get
	     *
	     * @return {Transform}
	     */
	    TransitionableTransform.prototype.get = function get() {
	        if (this.isActive()) {
	            return _build.call(this);
	        }
	        else return this._final;
	    };

	    /**
	     * Get the destination state of the Transform
	     *
	     * @method getFinal
	     *
	     * @return Transform {Transform}
	     */
	    TransitionableTransform.prototype.getFinal = function getFinal() {
	        return this._final;
	    };

	    /**
	     * Determine if the TransitionalTransform is currently transitioning
	     *
	     * @method isActive
	     *
	     * @return {Boolean}
	     */
	    TransitionableTransform.prototype.isActive = function isActive() {
	        return this.translate.isActive() || this.rotate.isActive() || this.scale.isActive() || this.skew.isActive();
	    };

	    /**
	     * Halts the transition
	     *
	     * @method halt
	     */
	    TransitionableTransform.prototype.halt = function halt() {
	        this.translate.halt();
	        this.rotate.halt();
	        this.skew.halt();
	        this.scale.halt();

	        this._final = this.get();
	        this._finalTranslate = this.translate.get();
	        this._finalRotate = this.rotate.get();
	        this._finalSkew = this.skew.get();
	        this._finalScale = this.scale.get();

	        return this;
	    };

	    module.exports = TransitionableTransform;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define, console*/

	/**
	 * LayoutContext is the interface for a layout-function to access
	 * renderables in the data-source and set their size, position, tranformation, etc...
	 *
	 * The `next`, `prev` and `get` functions return an opaque object which represents
	 * the renderable that is to be layed out. To access the actual renderable, use the
	 * `.renderNode` property of this opaque object.
	 *
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * @class
	     * @alias module:LayoutContext
	     */
	    function LayoutContext(methods) {
	        for (var n in methods) {
	            this[n] = methods[n];
	        }
	    }

	    /**
	     * {Property} Size in which to layout the renderables.
	     */
	    LayoutContext.prototype.size = undefined;

	    /**
	     * {Property} Direction in which to layout the renderables (0 = X, 1 = Y).
	     */
	    LayoutContext.prototype.direction = undefined;

	    /**
	     * {Property} {Number} Scrolling offset at which to start laying out next/prev renderables.
	     */
	    LayoutContext.prototype.scrollOffset = undefined;

	    /**
	     * {Property} {Number} Top/left boundary to which to layout renderables (default: 0).
	     */
	    LayoutContext.prototype.scrollStart = undefined;

	    /**
	     * {Property} {Number} Bottom/right boundary to which to continue laying out renderables.
	     */
	    LayoutContext.prototype.scrollEnd = undefined;

	    /**
	     * Get the context-node for the next renderable in the data-source. When
	     * the end of the data-source is reached, `undefined` is returned.
	     * Use this function to enumerate the contents of a data-source that is
	     * either an Array or a ViewSequence.
	     *
	     * **Example:**
	     *
	     * ```javascript
	     * function MyLayoutFunction(context, options) {
	     *   var height = 0;
	     *   var node = context.next(); // get first next node
	     *   while (node) {
	     *     context.set(node, {
	     *       size: [context.size[0], 100],
	     *       transform: [0, height, 0]
	     *     });
	     *     height += 100;
	     *     node = context.next(); // get next node
	     *   }
	     * }
	     * ```
	     *
	     * @return {Object} context-node or undefined
	     */
	    LayoutContext.prototype.next = function() {
	        // dummy implementation, override in constructor
	    };

	    /**
	     * Get the context-node for the previous renderable in the data-source. When
	     * the start of the data-source is reached, `undefined` is returned.
	     * Use this function to enumerate the contents of a data-source that is
	     * either an Array or a ViewSequence.
	     *
	     * **Example:**
	     *
	     * ```javascript
	     * function MyLayoutFunction(context, options) {
	     *   var height = 0;
	     *   var node = context.prev(); // get first previous
	     *   while (node) {
	     *     height -= 100;
	     *     context.set(node, {
	     *       size: [context.size[0], 100],
	     *       transform: [0, height, 0]
	     *     });
	     *     node = context.next(); // get prev node
	     *   }
	     * }
	     * ```
	     *
	     * @return {Object} context-node or undefined
	     */
	    LayoutContext.prototype.prev = function() {
	        // dummy implementation, override in constructor
	    };

	    /**
	     * Get the context-node for a renderable with a specific id. This function
	     * should be used to access data-sources which are key-value collections.
	     * When a data-source is an Array or a ViewSequence, use `next()`.
	     * In many cases it is not neccesary to use `get()`, instead you can pass
	     * the id of the renderable straight to the `set` function.
	     *
	     * **Example:**
	     *
	     * ```javascript
	     * var layoutController = new LayoutController({
	     *   layout: function (context, options) {
	     *     var size = context.size;
	     *     var left = context.get('left');
	     *     context.set(left, { size: [100, size[1]] });
	     *
	     *     var right = context.get('right');
	     *     context.set(right, {
	     *       size: [100, size[1]],
	     *       translate: [size[1] - 100, 0, 0]
	     *     });
	     *
	     *     var middle = context.get('middle');
	     *     context.set(middle, {
	     *       size: [size[0] - 200, size[1]],
	     *       translate: [100, 0, 0]
	     *     });
	     *   },
	     *   dataSource: {
	     *     left: new Surface({content: 'left'}),
	     *     right: new Surface({content: 'right'}),
	     *     middle: new Surface({content: 'middle'})
	     *   }
	     * });
	     * ```
	     *
	     * **Arrays:**
	     *
	     * A value at a specific id in the datasource can also be an array. To access the
	     * context-nodes in the array use `get()` to get the array and the elements in the
	     * array:
	     *
	     * ```javascript
	     * var layoutController = new LayoutController({
	     *   layout: function (context, options) {
	     *     var size = context.size;
	     *     var left = 0;
	     *
	     *     // Position title
	     *     context.set('title', { size: [100, size[1]] });
	     *     left += 100;
	     *
	     *     // Position left-items (array)
	     *     var leftItems = context.get('leftItems');
	     *     for (var i = 0; i < leftItems.length; i++) {
	     *       var leftItem = context.get(leftItems[i]);
	     *       context.set(leftItem, {
	     *         size: [100, size[1]],
	     *         translate: [left, 0, 0]
	     *       });
	     *       left += 100;
	     *     }
	     *   },
	     *   dataSource: {
	     *     title: new Surface({content: 'title'}),
	     *     leftItems: [
	     *       new Surface({content: 'item1'}),
	     *       new Surface({content: 'item2'})
	     *     ]
	     *   }
	     * });
	     * ```
	     *
	     * @param {Object|String} node context-node or node-id
	     * @return {Object} context-node or undefined
	     */
	    LayoutContext.prototype.get = function(node) {
	        // dummy implementation, override in constructor
	    };

	    /**
	     * Set the size, origin, align, translation, scale, rotate, skew & opacity for a context-node.
	     *
	     * **Overview of all supported properties:**
	     *
	     * ```javascript
	     * function MyLayoutFunction(context, options) {
	     *   context.set('mynode', {
	     *     size: [100, 20],
	     *     origin: [0.5, 0.5],
	     *     align: [0.5, 0.5],
	     *     translate: [50, 10, 0],
	     *     scale: [1, 1, 1],
	     *     skew: [0, 0, 0],
	     *     rotate: [Math.PI, 0, 0],
	     *     opacity: 1
	     *   })
	     * }
	     * ```
	     *
	     * @param {Object|String} node context-node or node-id
	     * @param {Object} set properties: size, origin, align, translate, scale, rotate, skew & opacity
	     */
	    LayoutContext.prototype.set = function(node, set) {
	        // dummy implementation, override in constructor
	    };

	    /**
	     * Resolve the size of a context-node by accessing the `getSize` function
	     * of the renderable.
	     *
	     * **Example:**
	     *
	     * ```javascript
	     * var layoutController = new LayoutController({
	     *   layout: function (context, options) {
	     *     var centerSize = context.resolveSize('center');
	     *     context.set('center', {origin: [0.5, 0.5]});
	     *     context.set('centerRight', {
	     *       origin: [0.5, 0.5],
	     *       translate: [centerSize[0] / 2, 0, 0]
	     *     });
	     *   },
	     *   dataSource: {
	     *     center: new Surface({content: 'center'}),
	     *     centerRight: new Surface({content: 'centerRight'}),
	     *   }
	     * });
	     * ```
	     *
	     * **When the size of the renderable is calculated by the DOM (`true` size)**
	     *
	     * When the layout-function performs its layout for the first time, it is
	     * possible that the renderable has not yet been rendered and its size
	     * is unknown. In this case, the LayoutController will cause a second
	     * reflow of the layout the next render-cycle, ensuring that the renderables
	     * are layed out as expected.
	     *
	     * @param {Object|String} node context-node, node-id or array-element
	     * @return {Size} size of the node
	     */
	    LayoutContext.prototype.resolveSize = function(node) {
	        // dummy implementation, override in constructor
	    };

	    module.exports = LayoutContext;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * Three-element floating point vector.
	     *
	     * @class Vector
	     * @constructor
	     *
	     * @param {number} x x element value
	     * @param {number} y y element value
	     * @param {number} z z element value
	     */
	    function Vector(x,y,z) {
	        if (arguments.length === 1 && x !== undefined) this.set(x);
	        else {
	            this.x = x || 0;
	            this.y = y || 0;
	            this.z = z || 0;
	        }
	        return this;
	    }

	    var _register = new Vector(0,0,0);

	    /**
	     * Add this element-wise to another Vector, element-wise.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method add
	     * @param {Vector} v addend
	     * @return {Vector} vector sum
	     */
	    Vector.prototype.add = function add(v) {
	        return _setXYZ.call(_register,
	            this.x + v.x,
	            this.y + v.y,
	            this.z + v.z
	        );
	    };

	    /**
	     * Subtract another vector from this vector, element-wise.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method sub
	     * @param {Vector} v subtrahend
	     * @return {Vector} vector difference
	     */
	    Vector.prototype.sub = function sub(v) {
	        return _setXYZ.call(_register,
	            this.x - v.x,
	            this.y - v.y,
	            this.z - v.z
	        );
	    };

	    /**
	     * Scale Vector by floating point r.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method mult
	     *
	     * @param {number} r scalar
	     * @return {Vector} vector result
	     */
	    Vector.prototype.mult = function mult(r) {
	        return _setXYZ.call(_register,
	            r * this.x,
	            r * this.y,
	            r * this.z
	        );
	    };

	    /**
	     * Scale Vector by floating point 1/r.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method div
	     *
	     * @param {number} r scalar
	     * @return {Vector} vector result
	     */
	    Vector.prototype.div = function div(r) {
	        return this.mult(1 / r);
	    };

	    /**
	     * Given another vector v, return cross product (v)x(this).
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method cross
	     * @param {Vector} v Left Hand Vector
	     * @return {Vector} vector result
	     */
	    Vector.prototype.cross = function cross(v) {
	        var x = this.x;
	        var y = this.y;
	        var z = this.z;
	        var vx = v.x;
	        var vy = v.y;
	        var vz = v.z;

	        return _setXYZ.call(_register,
	            z * vy - y * vz,
	            x * vz - z * vx,
	            y * vx - x * vy
	        );
	    };

	    /**
	     * Component-wise equality test between this and Vector v.
	     * @method equals
	     * @param {Vector} v vector to compare
	     * @return {boolean}
	     */
	    Vector.prototype.equals = function equals(v) {
	        return (v.x === this.x && v.y === this.y && v.z === this.z);
	    };

	    /**
	     * Rotate clockwise around x-axis by theta radians.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     * @method rotateX
	     * @param {number} theta radians
	     * @return {Vector} rotated vector
	     */
	    Vector.prototype.rotateX = function rotateX(theta) {
	        var x = this.x;
	        var y = this.y;
	        var z = this.z;

	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);

	        return _setXYZ.call(_register,
	            x,
	            y * cosTheta - z * sinTheta,
	            y * sinTheta + z * cosTheta
	        );
	    };

	    /**
	     * Rotate clockwise around y-axis by theta radians.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     * @method rotateY
	     * @param {number} theta radians
	     * @return {Vector} rotated vector
	     */
	    Vector.prototype.rotateY = function rotateY(theta) {
	        var x = this.x;
	        var y = this.y;
	        var z = this.z;

	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);

	        return _setXYZ.call(_register,
	            z * sinTheta + x * cosTheta,
	            y,
	            z * cosTheta - x * sinTheta
	        );
	    };

	    /**
	     * Rotate clockwise around z-axis by theta radians.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     * @method rotateZ
	     * @param {number} theta radians
	     * @return {Vector} rotated vector
	     */
	    Vector.prototype.rotateZ = function rotateZ(theta) {
	        var x = this.x;
	        var y = this.y;
	        var z = this.z;

	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);

	        return _setXYZ.call(_register,
	            x * cosTheta - y * sinTheta,
	            x * sinTheta + y * cosTheta,
	            z
	        );
	    };

	    /**
	     * Return dot product of this with a second Vector
	     * @method dot
	     * @param {Vector} v second vector
	     * @return {number} dot product
	     */
	    Vector.prototype.dot = function dot(v) {
	        return this.x * v.x + this.y * v.y + this.z * v.z;
	    };

	    /**
	     * Return squared length of this vector
	     * @method normSquared
	     * @return {number} squared length
	     */
	    Vector.prototype.normSquared = function normSquared() {
	        return this.dot(this);
	    };

	    /**
	     * Return length of this vector
	     * @method norm
	     * @return {number} length
	     */
	    Vector.prototype.norm = function norm() {
	        return Math.sqrt(this.normSquared());
	    };

	    /**
	     * Scale Vector to specified length.
	     *   If length is less than internal tolerance, set vector to [length, 0, 0].
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     * @method normalize
	     *
	     * @param {number} length target length, default 1.0
	     * @return {Vector}
	     */
	    Vector.prototype.normalize = function normalize(length) {
	        if (arguments.length === 0) length = 1;
	        var norm = this.norm();

	        if (norm > 1e-7) return _setFromVector.call(_register, this.mult(length / norm));
	        else return _setXYZ.call(_register, length, 0, 0);
	    };

	    /**
	     * Make a separate copy of the Vector.
	     *
	     * @method clone
	     *
	     * @return {Vector}
	     */
	    Vector.prototype.clone = function clone() {
	        return new Vector(this);
	    };

	    /**
	     * True if and only if every value is 0 (or falsy)
	     *
	     * @method isZero
	     *
	     * @return {boolean}
	     */
	    Vector.prototype.isZero = function isZero() {
	        return !(this.x || this.y || this.z);
	    };

	    function _setXYZ(x,y,z) {
	        this.x = x;
	        this.y = y;
	        this.z = z;
	        return this;
	    }

	    function _setFromArray(v) {
	        return _setXYZ.call(this,v[0],v[1],v[2] || 0);
	    }

	    function _setFromVector(v) {
	        return _setXYZ.call(this, v.x, v.y, v.z);
	    }

	    function _setFromNumber(x) {
	        return _setXYZ.call(this,x,0,0);
	    }

	    /**
	     * Set this Vector to the values in the provided Array or Vector.
	     *
	     * @method set
	     * @param {object} v array, Vector, or number
	     * @return {Vector} this
	     */
	    Vector.prototype.set = function set(v) {
	        if (v instanceof Array) return _setFromArray.call(this, v);
	        if (typeof v === 'number') return _setFromNumber.call(this, v);
	        return _setFromVector.call(this, v);
	    };

	    Vector.prototype.setXYZ = function(x,y,z) {
	        return _setXYZ.apply(this, arguments);
	    };

	    Vector.prototype.set1D = function(x) {
	        return _setFromNumber.call(this, x);
	    };

	    /**
	     * Put result of last internal register calculation in specified output vector.
	     *
	     * @method put
	     * @param {Vector} v destination vector
	     * @return {Vector} destination vector
	     */

	    Vector.prototype.put = function put(v) {
	        if (this === _register) _setFromVector.call(v, _register);
	        else _setFromVector.call(v, this);
	    };

	    /**
	     * Set this vector to [0,0,0]
	     *
	     * @method clear
	     */
	    Vector.prototype.clear = function clear() {
	        return _setXYZ.call(this,0,0,0);
	    };

	    /**
	     * Scale this Vector down to specified "cap" length.
	     *   If Vector shorter than cap, or cap is Infinity, do nothing.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method cap
	     * @return {Vector} capped vector
	     */
	    Vector.prototype.cap = function cap(cap) {
	        if (cap === Infinity) return _setFromVector.call(_register, this);
	        var norm = this.norm();
	        if (norm > cap) return _setFromVector.call(_register, this.mult(cap / norm));
	        else return _setFromVector.call(_register, this);
	    };

	    /**
	     * Return projection of this Vector onto another.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method project
	     * @param {Vector} n vector to project upon
	     * @return {Vector} projected vector
	     */
	    Vector.prototype.project = function project(n) {
	        return n.mult(this.dot(n));
	    };

	    /**
	     * Reflect this Vector across provided vector.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method reflectAcross
	     * @param {Vector} n vector to reflect across
	     * @return {Vector} reflected vector
	     */
	    Vector.prototype.reflectAcross = function reflectAcross(n) {
	        n.normalize().put(n);
	        return _setFromVector(_register, this.sub(this.project(n).mult(2)));
	    };

	    /**
	     * Convert Vector to three-element array.
	     *
	     * @method get
	     * @return {array<number>} three-element array
	     */
	    Vector.prototype.get = function get() {
	        return [this.x, this.y, this.z];
	    };

	    Vector.prototype.get1D = function() {
	        return this.x;
	    };

	    module.exports = Vector;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Vector = __webpack_require__(52);
	    var Transform = __webpack_require__(19);
	    var EventHandler = __webpack_require__(31);
	    var Integrator = __webpack_require__(64);

	    /**
	     * A point body that is controlled by the Physics Engine. A particle has
	     *   position and velocity states that are updated by the Physics Engine.
	     *   Ultimately, a particle is a special type of modifier, and can be added to
	     *   the Famo.us Scene Graph like any other modifier.
	     *
	     * @class Particle
	     * @uses EventHandler
	     * @extensionfor Body
	     *
	     * @param [options] {Options}           An object of configurable options.
	     * @param [options.position] {Array}    The position of the particle.
	     * @param [options.velocity] {Array}    The velocity of the particle.
	     * @param [options.mass] {Number}       The mass of the particle.
	     */
	     function Particle(options) {
	        options = options || {};
	        var defaults = Particle.DEFAULT_OPTIONS;

	        // registers
	        this.position = new Vector();
	        this.velocity = new Vector();
	        this.force = new Vector();

	        // state variables
	        this._engine = null;
	        this._isSleeping = true;
	        this._eventOutput = null;

	        // set scalars
	        this.mass = (options.mass !== undefined)
	            ? options.mass
	            : defaults.mass;

	        this.inverseMass = 1 / this.mass;

	        // set vectors
	        this.setPosition(options.position || defaults.position);
	        this.setVelocity(options.velocity || defaults.velocity);
	        this.force.set(options.force || [0,0,0]);

	        this.transform = Transform.identity.slice();

	        // cached _spec
	        this._spec = {
	            size : [true, true],
	            target : {
	                transform : this.transform,
	                origin : [0.5, 0.5],
	                target : null
	            }
	        };
	    }

	    Particle.DEFAULT_OPTIONS = {
	        position : [0, 0, 0],
	        velocity : [0, 0, 0],
	        mass : 1
	    };

	    //Catalogue of outputted events
	    var _events = {
	        start : 'start',
	        update : 'update',
	        end : 'end'
	    };

	    // Cached timing function
	    var now = Date.now;

	    /**
	     * @attribute isBody
	     * @type Boolean
	     * @static
	     */
	    Particle.prototype.isBody = false;

	    /**
	     * Determines if particle is active
	     *
	     * @method isActive
	     * @return {Boolean}
	     */
	    Particle.prototype.isActive = function isActive() {
	        return !this._isSleeping;
	    };

	    /**
	     * Stops the particle from updating
	     *
	     * @method sleep
	     */
	    Particle.prototype.sleep = function sleep() {
	        if (this._isSleeping) return;
	        this.emit(_events.end, this);
	        this._isSleeping = true;
	    };

	    /**
	     * Starts the particle update
	     *
	     * @method wake
	     */
	    Particle.prototype.wake = function wake() {
	        if (!this._isSleeping) return;
	        this.emit(_events.start, this);
	        this._isSleeping = false;
	        this._prevTime = now();
	        if (this._engine) this._engine.wake();
	    };

	    /**
	     * Basic setter for position
	     *
	     * @method setPosition
	     * @param position {Array|Vector}
	     */
	    Particle.prototype.setPosition = function setPosition(position) {
	        this.position.set(position);
	    };

	    /**
	     * 1-dimensional setter for position
	     *
	     * @method setPosition1D
	     * @param x {Number}
	     */
	    Particle.prototype.setPosition1D = function setPosition1D(x) {
	        this.position.x = x;
	    };

	    /**
	     * Basic getter function for position
	     *
	     * @method getPosition
	     * @return position {Array}
	     */
	    Particle.prototype.getPosition = function getPosition() {
	        this._engine.step();
	        return this.position.get();
	    };

	    /**
	     * 1-dimensional getter for position
	     *
	     * @method getPosition1D
	     * @return value {Number}
	     */
	    Particle.prototype.getPosition1D = function getPosition1D() {
	        this._engine.step();
	        return this.position.x;
	    };

	    /**
	     * Basic setter function for velocity Vector
	     *
	     * @method setVelocity
	     * @function
	     */
	    Particle.prototype.setVelocity = function setVelocity(velocity) {
	        this.velocity.set(velocity);
	        if (!(velocity[0] === 0 && velocity[1] === 0 && velocity[2] === 0))
	            this.wake();
	    };

	    /**
	     * 1-dimensional setter for velocity
	     *
	     * @method setVelocity1D
	     * @param x {Number}
	     */
	    Particle.prototype.setVelocity1D = function setVelocity1D(x) {
	        this.velocity.x = x;
	        if (x !== 0) this.wake();
	    };

	    /**
	     * Basic getter function for velocity Vector
	     *
	     * @method getVelocity
	     * @return velocity {Array}
	     */
	    Particle.prototype.getVelocity = function getVelocity() {
	        return this.velocity.get();
	    };

	    /**
	     * Basic setter function for force Vector
	     *
	     * @method setForce
	     * @return force {Array}
	     */
	    Particle.prototype.setForce = function setForce(force) {
	        this.force.set(force);
	        this.wake();
	    };

	    /**
	     * 1-dimensional getter for velocity
	     *
	     * @method getVelocity1D
	     * @return velocity {Number}
	     */
	    Particle.prototype.getVelocity1D = function getVelocity1D() {
	        return this.velocity.x;
	    };

	    /**
	     * Basic setter function for mass quantity
	     *
	     * @method setMass
	     * @param mass {Number} mass
	     */
	    Particle.prototype.setMass = function setMass(mass) {
	        this.mass = mass;
	        this.inverseMass = 1 / mass;
	    };

	    /**
	     * Basic getter function for mass quantity
	     *
	     * @method getMass
	     * @return mass {Number}
	     */
	    Particle.prototype.getMass = function getMass() {
	        return this.mass;
	    };

	    /**
	     * Reset position and velocity
	     *
	     * @method reset
	     * @param position {Array|Vector}
	     * @param velocity {Array|Vector}
	     */
	    Particle.prototype.reset = function reset(position, velocity) {
	        this.setPosition(position || [0,0,0]);
	        this.setVelocity(velocity || [0,0,0]);
	    };

	    /**
	     * Add force vector to existing internal force Vector
	     *
	     * @method applyForce
	     * @param force {Vector}
	     */
	    Particle.prototype.applyForce = function applyForce(force) {
	        if (force.isZero()) return;
	        this.force.add(force).put(this.force);
	        this.wake();
	    };

	    /**
	     * Add impulse (change in velocity) Vector to this Vector's velocity.
	     *
	     * @method applyImpulse
	     * @param impulse {Vector}
	     */
	    Particle.prototype.applyImpulse = function applyImpulse(impulse) {
	        if (impulse.isZero()) return;
	        var velocity = this.velocity;
	        velocity.add(impulse.mult(this.inverseMass)).put(velocity);
	    };

	    /**
	     * Update a particle's velocity from its force accumulator
	     *
	     * @method integrateVelocity
	     * @param dt {Number} Time differential
	     */
	    Particle.prototype.integrateVelocity = function integrateVelocity(dt) {
	        Integrator.integrateVelocity(this, dt);
	    };

	    /**
	     * Update a particle's position from its velocity
	     *
	     * @method integratePosition
	     * @param dt {Number} Time differential
	     */
	    Particle.prototype.integratePosition = function integratePosition(dt) {
	        Integrator.integratePosition(this, dt);
	    };

	    /**
	     * Update the position and velocity of the particle
	     *
	     * @method _integrate
	     * @protected
	     * @param dt {Number} Time differential
	     */
	    Particle.prototype._integrate = function _integrate(dt) {
	        this.integrateVelocity(dt);
	        this.integratePosition(dt);
	    };

	    /**
	     * Get kinetic energy of the particle.
	     *
	     * @method getEnergy
	     * @function
	     */
	    Particle.prototype.getEnergy = function getEnergy() {
	        return 0.5 * this.mass * this.velocity.normSquared();
	    };

	    /**
	     * Generate transform from the current position state
	     *
	     * @method getTransform
	     * @return Transform {Transform}
	     */
	    Particle.prototype.getTransform = function getTransform() {
	        this._engine.step();

	        var position = this.position;
	        var transform = this.transform;

	        transform[12] = position.x;
	        transform[13] = position.y;
	        transform[14] = position.z;
	        return transform;
	    };

	    /**
	     * The modify interface of a Modifier
	     *
	     * @method modify
	     * @param target {Spec}
	     * @return Spec {Spec}
	     */
	    Particle.prototype.modify = function modify(target) {
	        var _spec = this._spec.target;
	        _spec.transform = this.getTransform();
	        _spec.target = target;
	        return this._spec;
	    };

	    // private
	    function _createEventOutput() {
	        this._eventOutput = new EventHandler();
	        this._eventOutput.bindThis(this);
	        EventHandler.setOutputHandler(this, this._eventOutput);
	    }

	    Particle.prototype.emit = function emit(type, data) {
	        if (!this._eventOutput) return;
	        this._eventOutput.emit(type, data);
	    };

	    Particle.prototype.on = function on() {
	        _createEventOutput.call(this);
	        return this.on.apply(this, arguments);
	    };

	    Particle.prototype.removeListener = function removeListener() {
	        _createEventOutput.call(this);
	        return this.removeListener.apply(this, arguments);
	    };

	    Particle.prototype.pipe = function pipe() {
	        _createEventOutput.call(this);
	        return this.pipe.apply(this, arguments);
	    };

	    Particle.prototype.unpipe = function unpipe() {
	        _createEventOutput.call(this);
	        return this.unpipe.apply(this, arguments);
	    };

	    module.exports = Particle;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	/*global console */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Force = __webpack_require__(65);
	    var Vector = __webpack_require__(52);

	    /**
	     *  A force that moves a physics body to a location with a spring motion.
	     *    The body can be moved to another physics body, or an anchor point.
	     *
	     *  @class Spring
	     *  @constructor
	     *  @extends Force
	     *  @param {Object} options options to set on drag
	     */
	    function Spring(options) {
	        Force.call(this);

	        this.options = Object.create(this.constructor.DEFAULT_OPTIONS);
	        if (options) this.setOptions(options);

	        //registers
	        this.disp = new Vector(0,0,0);

	        _init.call(this);
	    }

	    Spring.prototype = Object.create(Force.prototype);
	    Spring.prototype.constructor = Spring;

	    /** @const */
	    var pi = Math.PI;
	    var MIN_PERIOD = 150;

	    /**
	     * @property Spring.FORCE_FUNCTIONS
	     * @type Object
	     * @protected
	     * @static
	     */
	    Spring.FORCE_FUNCTIONS = {

	        /**
	         * A FENE (Finitely Extensible Nonlinear Elastic) spring force
	         *      see: http://en.wikipedia.org/wiki/FENE
	         * @attribute FENE
	         * @type Function
	         * @param {Number} dist current distance target is from source body
	         * @param {Number} rMax maximum range of influence
	         * @return {Number} unscaled force
	         */
	        FENE : function(dist, rMax) {
	            var rMaxSmall = rMax * .99;
	            var r = Math.max(Math.min(dist, rMaxSmall), -rMaxSmall);
	            return r / (1 - r * r/(rMax * rMax));
	        },

	        /**
	         * A Hookean spring force, linear in the displacement
	         *      see: http://en.wikipedia.org/wiki/Hooke's_law
	         * @attribute FENE
	         * @type Function
	         * @param {Number} dist current distance target is from source body
	         * @return {Number} unscaled force
	         */
	        HOOK : function(dist) {
	            return dist;
	        }
	    };

	    /**
	     * @property Spring.DEFAULT_OPTIONS
	     * @type Object
	     * @protected
	     * @static
	     */
	    Spring.DEFAULT_OPTIONS = {

	        /**
	         * The amount of time in milliseconds taken for one complete oscillation
	         * when there is no damping
	         *    Range : [150, Infinity]
	         * @attribute period
	         * @type Number
	         * @default 300
	         */
	        period : 300,

	        /**
	         * The damping of the spring.
	         *    Range : [0, 1]
	         *    0 = no damping, and the spring will oscillate forever
	         *    1 = critically damped (the spring will never oscillate)
	         * @attribute dampingRatio
	         * @type Number
	         * @default 0.1
	         */
	        dampingRatio : 0.1,

	        /**
	         * The rest length of the spring
	         *    Range : [0, Infinity]
	         * @attribute length
	         * @type Number
	         * @default 0
	         */
	        length : 0,

	        /**
	         * The maximum length of the spring (for a FENE spring)
	         *    Range : [0, Infinity]
	         * @attribute length
	         * @type Number
	         * @default Infinity
	         */
	        maxLength : Infinity,

	        /**
	         * The location of the spring's anchor, if not another physics body
	         *
	         * @attribute anchor
	         * @type Array
	         * @optional
	         */
	        anchor : undefined,

	        /**
	         * The type of spring force
	         * @attribute forceFunction
	         * @type Function
	         */
	        forceFunction : Spring.FORCE_FUNCTIONS.HOOK
	    };

	    function _calcStiffness() {
	        var options = this.options;
	        options.stiffness = Math.pow(2 * pi / options.period, 2);
	    }

	    function _calcDamping() {
	        var options = this.options;
	        options.damping = 4 * pi * options.dampingRatio / options.period;
	    }

	    function _init() {
	        _calcStiffness.call(this);
	        _calcDamping.call(this);
	    }

	    /**
	     * Basic options setter
	     *
	     * @method setOptions
	     * @param options {Object}
	     */
	    Spring.prototype.setOptions = function setOptions(options) {
	        // TODO fix no-console error
	        /* eslint no-console: 0 */

	        if (options.anchor !== undefined) {
	            if (options.anchor.position instanceof Vector) this.options.anchor = options.anchor.position;
	            if (options.anchor instanceof Vector) this.options.anchor = options.anchor;
	            if (options.anchor instanceof Array)  this.options.anchor = new Vector(options.anchor);
	        }

	        if (options.period !== undefined){
	            if (options.period < MIN_PERIOD) {
	                options.period = MIN_PERIOD;
	                console.warn('The period of a SpringTransition is capped at ' + MIN_PERIOD + ' ms. Use a SnapTransition for faster transitions');
	            }
	            this.options.period = options.period;
	        }

	        if (options.dampingRatio !== undefined) this.options.dampingRatio = options.dampingRatio;
	        if (options.length !== undefined) this.options.length = options.length;
	        if (options.forceFunction !== undefined) this.options.forceFunction = options.forceFunction;
	        if (options.maxLength !== undefined) this.options.maxLength = options.maxLength;

	        _init.call(this);
	        Force.prototype.setOptions.call(this, options);
	    };

	    /**
	     * Adds a spring force to a physics body's force accumulator.
	     *
	     * @method applyForce
	     * @param targets {Array.Body} Array of bodies to apply force to.
	     */
	    Spring.prototype.applyForce = function applyForce(targets, source) {
	        var force = this.force;
	        var disp = this.disp;
	        var options = this.options;

	        var stiffness = options.stiffness;
	        var damping = options.damping;
	        var restLength = options.length;
	        var maxLength = options.maxLength;
	        var anchor = options.anchor || source.position;
	        var forceFunction = options.forceFunction;

	        var i;
	        var target;
	        var p2;
	        var v2;
	        var dist;
	        var m;

	        for (i = 0; i < targets.length; i++) {
	            target = targets[i];
	            p2 = target.position;
	            v2 = target.velocity;

	            anchor.sub(p2).put(disp);
	            dist = disp.norm() - restLength;

	            if (dist === 0) return;

	            //if dampingRatio specified, then override strength and damping
	            m      = target.mass;
	            stiffness *= m;
	            damping   *= m;

	            disp.normalize(stiffness * forceFunction(dist, maxLength))
	                .put(force);

	            if (damping)
	                if (source) force.add(v2.sub(source.velocity).mult(-damping)).put(force);
	                else force.add(v2.mult(-damping)).put(force);

	            target.applyForce(force);
	            if (source) source.applyForce(force.mult(-1));
	        }
	    };

	    /**
	     * Calculates the potential energy of the spring.
	     *
	     * @method getEnergy
	     * @param [targets] target  The physics body attached to the spring
	     * @return {source}         The potential energy of the spring
	     */
	    Spring.prototype.getEnergy = function getEnergy(targets, source) {
	        var options     = this.options;
	        var restLength  = options.length;
	        var anchor      = (source) ? source.position : options.anchor;
	        var strength    = options.stiffness;

	        var energy = 0.0;
	        for (var i = 0; i < targets.length; i++){
	            var target = targets[i];
	            var dist = anchor.sub(target.position).norm() - restLength;
	            energy += 0.5 * strength * dist * dist;
	        }
	        return energy;
	    };

	    module.exports = Spring;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var EventHandler = __webpack_require__(31);

	    /**
	     * The Physics Engine is responsible for mediating bodies with their
	     *   interaction with forces and constraints (agents). Specifically, it
	     *   is responsible for:
	     *
	     *   - adding and removing bodies
	     *   - updating a body's state over time
	     *   - attaching and detaching agents
	     *   - sleeping upon equillibrium and waking upon excitation
	     *
	     * @class PhysicsEngine
	     * @constructor
	     * @param options {Object} options
	     */
	    function PhysicsEngine(options) {
	        this.options = Object.create(PhysicsEngine.DEFAULT_OPTIONS);
	        if (options) this.setOptions(options);

	        this._particles      = [];   //list of managed particles
	        this._bodies         = [];   //list of managed bodies
	        this._agentData      = {};   //hash of managed agent data
	        this._forces         = [];   //list of Ids of agents that are forces
	        this._constraints    = [];   //list of Ids of agents that are constraints

	        this._buffer         = 0.0;
	        this._prevTime       = now();
	        this._isSleeping     = false;
	        this._eventHandler   = null;
	        this._currAgentId    = 0;
	        this._hasBodies      = false;
	        this._eventHandler   = null;
	    }

	    /** const */
	    var TIMESTEP = 17;
	    var MIN_TIME_STEP = 1000 / 120;
	    var MAX_TIME_STEP = 17;

	    var now = Date.now;

	    // Catalogue of outputted events
	    var _events = {
	        start : 'start',
	        update : 'update',
	        end : 'end'
	    };

	    /**
	     * @property PhysicsEngine.DEFAULT_OPTIONS
	     * @type Object
	     * @protected
	     * @static
	     */
	    PhysicsEngine.DEFAULT_OPTIONS = {

	        /**
	         * The number of iterations the engine takes to resolve constraints
	         * @attribute constraintSteps
	         * @type Number
	         */
	        constraintSteps : 1,

	        /**
	         * The energy threshold required for the Physics Engine to update
	         * @attribute sleepTolerance
	         * @type Number
	         */
	        sleepTolerance : 1e-7,

	        /**
	         * The maximum velocity magnitude of a physics body
	         *      Range : [0, Infinity]
	         * @attribute velocityCap
	         * @type Number
	         */
	        velocityCap : undefined,

	        /**
	         * The maximum angular velocity magnitude of a physics body
	         *      Range : [0, Infinity]
	         * @attribute angularVelocityCap
	         * @type Number
	         */
	        angularVelocityCap : undefined
	    };

	    /**
	     * Options setter
	     *
	     * @method setOptions
	     * @param opts {Object}
	     */
	    PhysicsEngine.prototype.setOptions = function setOptions(opts) {
	        for (var key in opts) if (this.options[key]) this.options[key] = opts[key];
	    };

	    /**
	     * Method to add a physics body to the engine. Necessary to update the
	     *   body over time.
	     *
	     * @method addBody
	     * @param body {Body}
	     * @return body {Body}
	     */
	    PhysicsEngine.prototype.addBody = function addBody(body) {
	        body._engine = this;
	        if (body.isBody) {
	            this._bodies.push(body);
	            this._hasBodies = true;
	        }
	        else this._particles.push(body);
	        body.on('start', this.wake.bind(this));
	        return body;
	    };

	    /**
	     * Remove a body from the engine. Detaches body from all forces and
	     *   constraints.
	     *
	     * TODO: Fix for in loop
	     *
	     * @method removeBody
	     * @param body {Body}
	     */
	    PhysicsEngine.prototype.removeBody = function removeBody(body) {
	        var array = (body.isBody) ? this._bodies : this._particles;
	        var index = array.indexOf(body);
	        if (index > -1) {
	            for (var agentKey in this._agentData) {
	                if (this._agentData.hasOwnProperty(agentKey)) {
	                    this.detachFrom(this._agentData[agentKey].id, body);
	                }
	            }
	            array.splice(index,1);
	        }
	        if (this.getBodies().length === 0) this._hasBodies = false;
	    };

	    function _mapAgentArray(agent) {
	        if (agent.applyForce)      return this._forces;
	        if (agent.applyConstraint) return this._constraints;
	    }

	    function _attachOne(agent, targets, source) {
	        if (targets === undefined) targets = this.getParticlesAndBodies();
	        if (!(targets instanceof Array)) targets = [targets];

	        agent.on('change', this.wake.bind(this));

	        this._agentData[this._currAgentId] = {
	            agent   : agent,
	            id      : this._currAgentId,
	            targets : targets,
	            source  : source
	        };

	        _mapAgentArray.call(this, agent).push(this._currAgentId);
	        return this._currAgentId++;
	    }

	    /**
	     * Attaches a force or constraint to a Body. Returns an AgentId of the
	     *   attached agent which can be used to detach the agent.
	     *
	     * @method attach
	     * @param agents {Agent|Array.Agent} A force, constraint, or array of them.
	     * @param [targets=All] {Body|Array.Body} The Body or Bodies affected by the agent
	     * @param [source] {Body} The source of the agent
	     * @return AgentId {Number}
	     */
	    PhysicsEngine.prototype.attach = function attach(agents, targets, source) {
	        this.wake();

	        if (agents instanceof Array) {
	            var agentIDs = [];
	            for (var i = 0; i < agents.length; i++)
	                agentIDs[i] = _attachOne.call(this, agents[i], targets, source);
	            return agentIDs;
	        }
	        else return _attachOne.call(this, agents, targets, source);
	    };

	    /**
	     * Append a body to the targets of a previously defined physics agent.
	     *
	     * @method attachTo
	     * @param agentID {AgentId} The agentId of a previously defined agent
	     * @param target {Body} The Body affected by the agent
	     */
	    PhysicsEngine.prototype.attachTo = function attachTo(agentID, target) {
	        _getAgentData.call(this, agentID).targets.push(target);
	    };

	    /**
	     * Undoes PhysicsEngine.attach. Removes an agent and its associated
	     *   effect on its affected Bodies.
	     *
	     * @method detach
	     * @param id {AgentId} The agentId of a previously defined agent
	     */
	    PhysicsEngine.prototype.detach = function detach(id) {
	        // detach from forces/constraints array
	        var agent = this.getAgent(id);
	        var agentArray = _mapAgentArray.call(this, agent);
	        var index = agentArray.indexOf(id);
	        agentArray.splice(index,1);

	        // detach agents array
	        delete this._agentData[id];
	    };

	    /**
	     * Remove a single Body from a previously defined agent.
	     *
	     * @method detach
	     * @param id {AgentId} The agentId of a previously defined agent
	     * @param target {Body} The body to remove from the agent
	     */
	    PhysicsEngine.prototype.detachFrom = function detachFrom(id, target) {
	        var boundAgent = _getAgentData.call(this, id);
	        if (boundAgent.source === target) this.detach(id);
	        else {
	            var targets = boundAgent.targets;
	            var index = targets.indexOf(target);
	            if (index > -1) targets.splice(index,1);
	        }
	    };

	    /**
	     * A convenience method to give the Physics Engine a clean slate of
	     * agents. Preserves all added Body objects.
	     *
	     * @method detachAll
	     */
	    PhysicsEngine.prototype.detachAll = function detachAll() {
	        this._agentData     = {};
	        this._forces        = [];
	        this._constraints   = [];
	        this._currAgentId   = 0;
	    };

	    function _getAgentData(id) {
	        return this._agentData[id];
	    }

	    /**
	     * Returns the corresponding agent given its agentId.
	     *
	     * @method getAgent
	     * @param id {AgentId}
	     */
	    PhysicsEngine.prototype.getAgent = function getAgent(id) {
	        return _getAgentData.call(this, id).agent;
	    };

	    /**
	     * Returns all particles that are currently managed by the Physics Engine.
	     *
	     * @method getParticles
	     * @return particles {Array.Particles}
	     */
	    PhysicsEngine.prototype.getParticles = function getParticles() {
	        return this._particles;
	    };

	    /**
	     * Returns all bodies, except particles, that are currently managed by the Physics Engine.
	     *
	     * @method getBodies
	     * @return bodies {Array.Bodies}
	     */
	    PhysicsEngine.prototype.getBodies = function getBodies() {
	        return this._bodies;
	    };

	    /**
	     * Returns all bodies that are currently managed by the Physics Engine.
	     *
	     * @method getBodies
	     * @return bodies {Array.Bodies}
	     */
	    PhysicsEngine.prototype.getParticlesAndBodies = function getParticlesAndBodies() {
	        return this.getParticles().concat(this.getBodies());
	    };

	    /**
	     * Iterates over every Particle and applies a function whose first
	     *   argument is the Particle
	     *
	     * @method forEachParticle
	     * @param fn {Function} Function to iterate over
	     * @param [dt] {Number} Delta time
	     */
	    PhysicsEngine.prototype.forEachParticle = function forEachParticle(fn, dt) {
	        var particles = this.getParticles();
	        for (var index = 0, len = particles.length; index < len; index++)
	            fn.call(this, particles[index], dt);
	    };

	    /**
	     * Iterates over every Body that isn't a Particle and applies
	     *   a function whose first argument is the Body
	     *
	     * @method forEachBody
	     * @param fn {Function} Function to iterate over
	     * @param [dt] {Number} Delta time
	     */
	    PhysicsEngine.prototype.forEachBody = function forEachBody(fn, dt) {
	        if (!this._hasBodies) return;
	        var bodies = this.getBodies();
	        for (var index = 0, len = bodies.length; index < len; index++)
	            fn.call(this, bodies[index], dt);
	    };

	    /**
	     * Iterates over every Body and applies a function whose first
	     *   argument is the Body
	     *
	     * @method forEach
	     * @param fn {Function} Function to iterate over
	     * @param [dt] {Number} Delta time
	     */
	    PhysicsEngine.prototype.forEach = function forEach(fn, dt) {
	        this.forEachParticle(fn, dt);
	        this.forEachBody(fn, dt);
	    };

	    function _updateForce(index) {
	        var boundAgent = _getAgentData.call(this, this._forces[index]);
	        boundAgent.agent.applyForce(boundAgent.targets, boundAgent.source);
	    }

	    function _updateForces() {
	        for (var index = this._forces.length - 1; index > -1; index--)
	            _updateForce.call(this, index);
	    }

	    function _updateConstraint(index, dt) {
	        var boundAgent = this._agentData[this._constraints[index]];
	        return boundAgent.agent.applyConstraint(boundAgent.targets, boundAgent.source, dt);
	    }

	    function _updateConstraints(dt) {
	        var iteration = 0;
	        while (iteration < this.options.constraintSteps) {
	            for (var index = this._constraints.length - 1; index > -1; index--)
	                _updateConstraint.call(this, index, dt);
	            iteration++;
	        }
	    }

	    function _updateVelocities(body, dt) {
	        body.integrateVelocity(dt);
	        if (this.options.velocityCap)
	            body.velocity.cap(this.options.velocityCap).put(body.velocity);
	    }

	    function _updateAngularVelocities(body, dt) {
	        body.integrateAngularMomentum(dt);
	        body.updateAngularVelocity();
	        if (this.options.angularVelocityCap)
	            body.angularVelocity.cap(this.options.angularVelocityCap).put(body.angularVelocity);
	    }

	    function _updateOrientations(body, dt) {
	        body.integrateOrientation(dt);
	    }

	    function _updatePositions(body, dt) {
	        body.integratePosition(dt);
	        body.emit(_events.update, body);
	    }

	    function _integrate(dt) {
	        _updateForces.call(this, dt);
	        this.forEach(_updateVelocities, dt);
	        this.forEachBody(_updateAngularVelocities, dt);
	        _updateConstraints.call(this, dt);
	        this.forEachBody(_updateOrientations, dt);
	        this.forEach(_updatePositions, dt);
	    }

	    function _getParticlesEnergy() {
	        var energy = 0.0;
	        var particleEnergy = 0.0;
	        this.forEach(function(particle) {
	            particleEnergy = particle.getEnergy();
	            energy += particleEnergy;
	        });
	        return energy;
	    }

	    function _getAgentsEnergy() {
	        var energy = 0;
	        for (var id in this._agentData)
	            energy += this.getAgentEnergy(id);
	        return energy;
	    }

	    /**
	     * Calculates the potential energy of an agent, like a spring, by its Id
	     *
	     * @method getAgentEnergy
	     * @param agentId {Number} The attached agent Id
	     * @return energy {Number}
	     */
	    PhysicsEngine.prototype.getAgentEnergy = function(agentId) {
	        var agentData = _getAgentData.call(this, agentId);
	        return agentData.agent.getEnergy(agentData.targets, agentData.source);
	    };

	    /**
	     * Calculates the kinetic energy of all Body objects and potential energy
	     *   of all attached agents.
	     *
	     * TODO: implement.
	     * @method getEnergy
	     * @return energy {Number}
	     */
	    PhysicsEngine.prototype.getEnergy = function getEnergy() {
	        return _getParticlesEnergy.call(this) + _getAgentsEnergy.call(this);
	    };

	    /**
	     * Updates all Body objects managed by the physics engine over the
	     *   time duration since the last time step was called.
	     *
	     * @method step
	     */
	    PhysicsEngine.prototype.step = function step() {
	        if (this.isSleeping()) return;

	        //set current frame's time
	        var currTime = now();

	        //milliseconds elapsed since last frame
	        var dtFrame = currTime - this._prevTime;

	        this._prevTime = currTime;

	        if (dtFrame < MIN_TIME_STEP) return;
	        if (dtFrame > MAX_TIME_STEP) dtFrame = MAX_TIME_STEP;

	        //robust integration
	//        this._buffer += dtFrame;
	//        while (this._buffer > this._timestep){
	//            _integrate.call(this, this._timestep);
	//            this._buffer -= this._timestep;
	//        };
	//        _integrate.call(this, this._buffer);
	//        this._buffer = 0.0;

	        _integrate.call(this, TIMESTEP);

	        this.emit(_events.update, this);

	        if (this.getEnergy() < this.options.sleepTolerance) this.sleep();
	    };

	    /**
	     * Tells whether the Physics Engine is sleeping or awake.
	     *
	     * @method isSleeping
	     * @return {Boolean}
	     */
	    PhysicsEngine.prototype.isSleeping = function isSleeping() {
	        return this._isSleeping;
	    };

	    /**
	     * Tells whether the Physics Engine is sleeping or awake.
	     *
	     * @method isActive
	     * @return {Boolean}
	     */
	    PhysicsEngine.prototype.isActive = function isSleeping() {
	        return !this._isSleeping;
	    };

	    /**
	     * Stops the Physics Engine update loop. Emits an 'end' event.
	     *
	     * @method sleep
	     */
	    PhysicsEngine.prototype.sleep = function sleep() {
	        if (this._isSleeping) return;
	        this.forEach(function(body) {
	            body.sleep();
	        });
	        this.emit(_events.end, this);
	        this._isSleeping = true;
	    };

	    /**
	     * Restarts the Physics Engine update loop. Emits an 'start' event.
	     *
	     * @method wake
	     */
	    PhysicsEngine.prototype.wake = function wake() {
	        if (!this._isSleeping) return;
	        this._prevTime = now();
	        this.emit(_events.start, this);
	        this._isSleeping = false;
	    };

	    PhysicsEngine.prototype.emit = function emit(type, data) {
	        if (this._eventHandler === null) return;
	        this._eventHandler.emit(type, data);
	    };

	    PhysicsEngine.prototype.on = function on(event, fn) {
	        if (this._eventHandler === null) this._eventHandler = new EventHandler();
	        this._eventHandler.on(event, fn);
	    };

	    module.exports = PhysicsEngine;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Surface = __webpack_require__(18);
	    var Context = __webpack_require__(41);

	    /**
	     * ContainerSurface is an object designed to contain surfaces and
	     *   set properties to be applied to all of them at once.
	     *   This extends the Surface class.
	     *   A container surface will enforce these properties on the
	     *   surfaces it contains:
	     *
	     *   size (clips contained surfaces to its own width and height);
	     *
	     *   origin;
	     *
	     *   its own opacity and transform, which will be automatically
	     *   applied to  all Surfaces contained directly and indirectly.
	     *
	     * @class ContainerSurface
	     * @extends Surface
	     * @constructor
	     * @param {Array.Number} [options.size] [width, height] in pixels
	     * @param {Array.string} [options.classes] CSS classes to set on all inner content
	     * @param {Array} [options.properties] string dictionary of HTML attributes to set on target div
	     * @param {string} [options.content] inner (HTML) content of surface (should not be used)
	     */
	    function ContainerSurface(options) {
	        Surface.call(this, options);
	        this._container = document.createElement('div');
	        this._container.classList.add('famous-group');
	        this._container.classList.add('famous-container-group');
	        this._shouldRecalculateSize = false;
	        this.context = new Context(this._container);
	        this.setContent(this._container);
	    }

	    ContainerSurface.prototype = Object.create(Surface.prototype);
	    ContainerSurface.prototype.constructor = ContainerSurface;
	    ContainerSurface.prototype.elementType = 'div';
	    ContainerSurface.prototype.elementClass = 'famous-surface';

	    /**
	     * Add renderables to this object's render tree
	     *
	     * @method add
	     *
	     * @param {Object} obj renderable object
	     * @return {RenderNode} RenderNode wrapping this object, if not already a RenderNode
	     */
	    ContainerSurface.prototype.add = function add() {
	        return this.context.add.apply(this.context, arguments);
	    };

	    /**
	     * Return spec for this surface.  Note: Can result in a size recalculation.
	     *
	     * @private
	     * @method render
	     *
	     * @return {Object} render spec for this surface (spec id)
	     */
	    ContainerSurface.prototype.render = function render() {
	        if (this._sizeDirty) this._shouldRecalculateSize = true;
	        return Surface.prototype.render.apply(this, arguments);
	    };

	    /**
	     * Place the document element this component manages into the document.
	     *
	     * @private
	     * @method deploy
	     * @param {Node} target document parent of this container
	     */
	    ContainerSurface.prototype.deploy = function deploy() {
	        this._shouldRecalculateSize = true;
	        return Surface.prototype.deploy.apply(this, arguments);
	    };

	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     * @param {Transform} transform unused TODO
	     * @param {Number} opacity  unused TODO
	     * @param {Array.Number} origin unused TODO
	     * @param {Array.Number} size unused TODO
	     * @return {undefined} TODO returns an undefined value
	     */
	    ContainerSurface.prototype.commit = function commit(context, transform, opacity, origin, size) {
	        var previousSize = this._size ? [this._size[0], this._size[1]] : null;
	        var result = Surface.prototype.commit.apply(this, arguments);
	        if (this._shouldRecalculateSize || (previousSize && (this._size[0] !== previousSize[0] || this._size[1] !== previousSize[1]))) {
	            this.context.setSize();
	            this._shouldRecalculateSize = false;
	        }
	        this.context.update();
	        return result;
	    };

	    module.exports = ContainerSurface;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Context = __webpack_require__(41);
	    var Transform = __webpack_require__(19);
	    var Surface = __webpack_require__(18);

	    /**
	     * A Context designed to contain surfaces and set properties
	     *   to be applied to all of them at once.
	     *   This is primarily used for specific performance improvements in the rendering engine.
	     *   Private.
	     *
	     * @private
	     * @class Group
	     * @extends Surface
	     * @constructor
	     * @param {Object} [options] Surface options array (see Surface})
	     */
	    function Group(options) {
	        Surface.call(this, options);
	        this._shouldRecalculateSize = false;
	        this._container = document.createDocumentFragment();
	        this.context = new Context(this._container);
	        this.setContent(this._container);
	        this._groupSize = [undefined, undefined];
	    }

	    /** @const */
	    Group.SIZE_ZERO = [0, 0];

	    Group.prototype = Object.create(Surface.prototype);
	    Group.prototype.elementType = 'div';
	    Group.prototype.elementClass = 'famous-group';

	    /**
	     * Add renderables to this component's render tree.
	     *
	     * @method add
	     * @private
	     * @param {Object} obj renderable object
	     * @return {RenderNode} Render wrapping provided object, if not already a RenderNode
	     */
	    Group.prototype.add = function add() {
	        return this.context.add.apply(this.context, arguments);
	    };

	    /**
	     * Generate a render spec from the contents of this component.
	     *
	     * @private
	     * @method render
	     * @return {Number} Render spec for this component
	     */
	    Group.prototype.render = function render() {
	        return Surface.prototype.render.call(this);
	    };

	    /**
	     * Place the document element this component manages into the document.
	     *
	     * @private
	     * @method deploy
	     * @param {Node} target document parent of this container
	     */
	    Group.prototype.deploy = function deploy(target) {
	        this.context.migrate(target);
	    };

	    /**
	     * Remove this component and contained content from the document
	     *
	     * @private
	     * @method recall
	     *
	     * @param {Node} target node to which the component was deployed
	     */
	    Group.prototype.recall = function recall(target) {
	        this._container = document.createDocumentFragment();
	        this.context.migrate(this._container);
	    };

	    /**
	     * Apply changes from this component to the corresponding document element.
	     *
	     * @private
	     * @method commit
	     *
	     * @param {Object} context update spec passed in from above in the render tree.
	     */
	    Group.prototype.commit = function commit(context) {
	        var transform = context.transform;
	        var origin = context.origin;
	        var opacity = context.opacity;
	        var size = context.size;
	        var result = Surface.prototype.commit.call(this, {
	            allocator: context.allocator,
	            transform: Transform.thenMove(transform, [-origin[0] * size[0], -origin[1] * size[1], 0]),
	            opacity: opacity,
	            origin: origin,
	            size: Group.SIZE_ZERO
	        });
	        if (size[0] !== this._groupSize[0] || size[1] !== this._groupSize[1]) {
	            this._groupSize[0] = size[0];
	            this._groupSize[1] = size[1];
	            this.context.setSize(size);
	        }
	        this.context.update({
	            transform: Transform.translate(-origin[0] * size[0], -origin[1] * size[1], 0),
	            origin: origin,
	            size: size
	        });
	        return result;
	    };

	    module.exports = Group;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Force = __webpack_require__(65);

	    /**
	     * Drag is a force that opposes velocity. Attach it to the physics engine
	     * to slow down a physics body in motion.
	     *
	     * @class Drag
	     * @constructor
	     * @extends Force
	     * @param {Object} options options to set on drag
	     */
	    function Drag(options) {
	        this.options = Object.create(this.constructor.DEFAULT_OPTIONS);
	        if (options) this.setOptions(options);

	        Force.call(this);
	    }

	    Drag.prototype = Object.create(Force.prototype);
	    Drag.prototype.constructor = Drag;

	    /**
	     * @property Drag.FORCE_FUNCTIONS
	     * @type Object
	     * @protected
	     * @static
	     */
	    Drag.FORCE_FUNCTIONS = {

	        /**
	         * A drag force proportional to the velocity
	         * @attribute LINEAR
	         * @type Function
	         * @param {Vector} velocity
	         * @return {Vector} drag force
	         */
	        LINEAR : function(velocity) {
	            return velocity;
	        },

	        /**
	         * A drag force proportional to the square of the velocity
	         * @attribute QUADRATIC
	         * @type Function
	         * @param {Vector} velocity
	         * @return {Vector} drag force
	         */
	        QUADRATIC : function(velocity) {
	            return velocity.mult(velocity.norm());
	        }
	    };

	    /**
	     * @property Drag.DEFAULT_OPTIONS
	     * @type Object
	     * @protected
	     * @static
	     */
	    Drag.DEFAULT_OPTIONS = {

	        /**
	         * The strength of the force
	         *    Range : [0, 0.1]
	         * @attribute strength
	         * @type Number
	         * @default 0.01
	         */
	        strength : 0.01,

	        /**
	         * The type of opposing force
	         * @attribute forceFunction
	         * @type Function
	         */
	        forceFunction : Drag.FORCE_FUNCTIONS.LINEAR
	    };

	    /**
	     * Adds a drag force to a physics body's force accumulator.
	     *
	     * @method applyForce
	     * @param targets {Array.Body} Array of bodies to apply drag force to.
	     */
	    Drag.prototype.applyForce = function applyForce(targets) {
	        var strength        = this.options.strength;
	        var forceFunction   = this.options.forceFunction;
	        var force           = this.force;
	        var index;
	        var particle;

	        for (index = 0; index < targets.length; index++) {
	            particle = targets[index];
	            forceFunction(particle.velocity).mult(-strength).put(force);
	            particle.applyForce(force);
	        }
	    };

	    /**
	     * Basic options setter
	     *
	     * @method setOptions
	     * @param {Objects} options
	     */
	    Drag.prototype.setOptions = function setOptions(options) {
	        for (var key in options) this.options[key] = options[key];
	    };

	    module.exports = Drag;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var EventHandler = __webpack_require__(31);
	    var Engine = __webpack_require__(17);
	    var OptionsManager = __webpack_require__(30);

	    /**
	     * Handles piped in mousewheel events.
	     *   Emits 'start', 'update', and 'end' events with payloads including:
	     *   delta: change since last position,
	     *   position: accumulated deltas,
	     *   velocity: speed of change in pixels per ms,
	     *   slip: true (unused).
	     *
	     *   Can be used as delegate of GenericSync.
	     *
	     * @class ScrollSync
	     * @constructor
	     * @param {Object} [options] overrides of default options
	     * @param {Number} [options.direction] Pay attention to x changes (ScrollSync.DIRECTION_X),
	     *   y changes (ScrollSync.DIRECTION_Y) or both (undefined)
	     * @param {Number} [options.minimumEndSpeed] End speed calculation floors at this number, in pixels per ms
	     * @param {boolean} [options.rails] whether to snap position calculations to nearest axis
	     * @param {Number | Array.Number} [options.scale] scale outputs in by scalar or pair of scalars
	     * @param {Number} [options.stallTime] reset time for velocity calculation in ms
	     */
	    function ScrollSync(options) {
	        this.options = Object.create(ScrollSync.DEFAULT_OPTIONS);
	        this._optionsManager = new OptionsManager(this.options);
	        if (options) this.setOptions(options);

	        this._payload = {
	            delta    : null,
	            position : null,
	            velocity : null,
	            slip     : true
	        };

	        this._eventInput = new EventHandler();
	        this._eventOutput = new EventHandler();

	        EventHandler.setInputHandler(this, this._eventInput);
	        EventHandler.setOutputHandler(this, this._eventOutput);

	        this._position = (this.options.direction === undefined) ? [0,0] : 0;
	        this._prevTime = undefined;
	        this._prevVel = undefined;
	        this._eventInput.on('mousewheel', _handleMove.bind(this));
	        this._eventInput.on('wheel', _handleMove.bind(this));
	        this._inProgress = false;
	        this._loopBound = false;
	    }

	    ScrollSync.DEFAULT_OPTIONS = {
	        direction: undefined,
	        minimumEndSpeed: Infinity,
	        rails: false,
	        scale: 1,
	        stallTime: 50,
	        lineHeight: 40,
	        preventDefault: true
	    };

	    ScrollSync.DIRECTION_X = 0;
	    ScrollSync.DIRECTION_Y = 1;

	    var MINIMUM_TICK_TIME = 8;

	    var _now = Date.now;

	    function _newFrame() {
	        if (this._inProgress && (_now() - this._prevTime) > this.options.stallTime) {
	            this._inProgress = false;

	            var finalVel = (Math.abs(this._prevVel) >= this.options.minimumEndSpeed)
	                ? this._prevVel
	                : 0;

	            var payload = this._payload;
	            payload.position = this._position;
	            payload.velocity = finalVel;
	            payload.slip = true;

	            this._eventOutput.emit('end', payload);
	        }
	    }

	    function _handleMove(event) {
	        if (this.options.preventDefault) event.preventDefault();

	        if (!this._inProgress) {
	            this._inProgress = true;
	            this._position = (this.options.direction === undefined) ? [0,0] : 0;
	            payload = this._payload;
	            payload.slip = true;
	            payload.position = this._position;
	            payload.clientX = event.clientX;
	            payload.clientY = event.clientY;
	            payload.offsetX = event.offsetX;
	            payload.offsetY = event.offsetY;
	            this._eventOutput.emit('start', payload);
	            if (!this._loopBound) {
	                Engine.on('prerender', _newFrame.bind(this));
	                this._loopBound = true;
	            }
	        }

	        var currTime = _now();
	        var prevTime = this._prevTime || currTime;

	        var diffX = (event.wheelDeltaX !== undefined) ? event.wheelDeltaX : -event.deltaX;
	        var diffY = (event.wheelDeltaY !== undefined) ? event.wheelDeltaY : -event.deltaY;

	        if (event.deltaMode === 1) { // units in lines, not pixels
	            diffX *= this.options.lineHeight;
	            diffY *= this.options.lineHeight;
	        }

	        if (this.options.rails) {
	            if (Math.abs(diffX) > Math.abs(diffY)) diffY = 0;
	            else diffX = 0;
	        }

	        var diffTime = Math.max(currTime - prevTime, MINIMUM_TICK_TIME); // minimum tick time

	        var velX = diffX / diffTime;
	        var velY = diffY / diffTime;

	        var scale = this.options.scale;
	        var nextVel;
	        var nextDelta;

	        if (this.options.direction === ScrollSync.DIRECTION_X) {
	            nextDelta = scale * diffX;
	            nextVel = scale * velX;
	            this._position += nextDelta;
	        }
	        else if (this.options.direction === ScrollSync.DIRECTION_Y) {
	            nextDelta = scale * diffY;
	            nextVel = scale * velY;
	            this._position += nextDelta;
	        }
	        else {
	            nextDelta = [scale * diffX, scale * diffY];
	            nextVel = [scale * velX, scale * velY];
	            this._position[0] += nextDelta[0];
	            this._position[1] += nextDelta[1];
	        }

	        var payload = this._payload;
	        payload.delta    = nextDelta;
	        payload.velocity = nextVel;
	        payload.position = this._position;
	        payload.slip     = true;

	        this._eventOutput.emit('update', payload);

	        this._prevTime = currTime;
	        this._prevVel = nextVel;
	    }

	    /**
	     * Return entire options dictionary, including defaults.
	     *
	     * @method getOptions
	     * @return {Object} configuration options
	     */
	    ScrollSync.prototype.getOptions = function getOptions() {
	        return this.options;
	    };

	    /**
	     * Set internal options, overriding any default options
	     *
	     * @method setOptions
	     *
	     * @param {Object} [options] overrides of default options
	     * @param {Number} [options.minimimEndSpeed] If final velocity smaller than this, round down to 0.
	     * @param {Number} [options.stallTime] ms of non-motion before 'end' emitted
	     * @param {Number} [options.rails] whether to constrain to nearest axis.
	     * @param {Number} [options.direction] ScrollSync.DIRECTION_X, DIRECTION_Y -
	     *    pay attention to one specific direction.
	     * @param {Number} [options.scale] constant factor to scale velocity output
	     */
	    ScrollSync.prototype.setOptions = function setOptions(options) {
	        return this._optionsManager.setOptions(options);
	    };

	    module.exports = ScrollSync;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    /**
	     * EventEmitter represents a channel for events.
	     *
	     * @class EventEmitter
	     * @constructor
	     */
	    function EventEmitter() {
	        this.listeners = {};
	        this._owner = this;
	    }

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    EventEmitter.prototype.emit = function emit(type, event) {
	        var handlers = this.listeners[type];
	        if (handlers) {
	            for (var i = 0; i < handlers.length; i++) {
	                handlers[i].call(this._owner, event);
	            }
	        }
	        return this;
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	   EventEmitter.prototype.on = function on(type, handler) {
	        if (!(type in this.listeners)) this.listeners[type] = [];
	        var index = this.listeners[type].indexOf(handler);
	        if (index < 0) this.listeners[type].push(handler);
	        return this;
	    };

	    /**
	     * Alias for "on".
	     * @method addListener
	     */
	    EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	   /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function} handler function object to remove
	     * @return {EventEmitter} this
	     */
	    EventEmitter.prototype.removeListener = function removeListener(type, handler) {
	        var listener = this.listeners[type];
	        if (listener !== undefined) {
	            var index = listener.indexOf(handler);
	            if (index >= 0) listener.splice(index, 1);
	        }
	        return this;
	    };

	    /**
	     * Call event handlers with this set to owner.
	     *
	     * @method bindThis
	     *
	     * @param {Object} owner object this EventEmitter belongs to
	     */
	    EventEmitter.prototype.bindThis = function bindThis(owner) {
	        this._owner = owner;
	    };

	    module.exports = EventEmitter;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * Internal helper object to Context that handles the process of
	     *   creating and allocating DOM elements within a managed div.
	     *   Private.
	     *
	     * @class ElementAllocator
	     * @constructor
	     * @private
	     * @param {Node} container document element in which Famo.us content will be inserted
	     */
	    function ElementAllocator(container) {
	        if (!container) container = document.createDocumentFragment();
	        this.container = container;
	        this.detachedNodes = {};
	        this.nodeCount = 0;
	    }

	    /**
	     * Move the document elements from their original container to a new one.
	     *
	     * @private
	     * @method migrate
	     *
	     * @param {Node} container document element to which Famo.us content will be migrated
	     */
	    ElementAllocator.prototype.migrate = function migrate(container) {
	        var oldContainer = this.container;
	        if (container === oldContainer) return;

	        if (oldContainer instanceof DocumentFragment) {
	            container.appendChild(oldContainer);
	        }
	        else {
	            while (oldContainer.hasChildNodes()) {
	                container.appendChild(oldContainer.firstChild);
	            }
	        }

	        this.container = container;
	    };

	    /**
	     * Allocate an element of specified type from the pool.
	     *
	     * @private
	     * @method allocate
	     *
	     * @param {string} type type of element, e.g. 'div'
	     * @return {Node} allocated document element
	     */
	    ElementAllocator.prototype.allocate = function allocate(type) {
	        type = type.toLowerCase();
	        if (!(type in this.detachedNodes)) this.detachedNodes[type] = [];
	        var nodeStore = this.detachedNodes[type];
	        var result;
	        if (nodeStore.length > 0) {
	            result = nodeStore.pop();
	        }
	        else {
	            result = document.createElement(type);
	            this.container.appendChild(result);
	        }
	        this.nodeCount++;
	        return result;
	    };

	    /**
	     * De-allocate an element of specified type to the pool.
	     *
	     * @private
	     * @method deallocate
	     *
	     * @param {Node} element document element to deallocate
	     */
	    ElementAllocator.prototype.deallocate = function deallocate(element) {
	        var nodeType = element.nodeName.toLowerCase();
	        var nodeStore = this.detachedNodes[nodeType];
	        nodeStore.push(element);
	        this.nodeCount--;
	    };

	    /**
	     * Get count of total allocated nodes in the document.
	     *
	     * @private
	     * @method getNodeCount
	     *
	     * @return {Number} total node count
	     */
	    ElementAllocator.prototype.getNodeCount = function getNodeCount() {
	        return this.nodeCount;
	    };

	    module.exports = ElementAllocator;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Utility = __webpack_require__(27);

	    /**
	     * Transition meta-method to support transitioning multiple
	     *   values with scalar-only methods.
	     *
	     *
	     * @class MultipleTransition
	     * @constructor
	     *
	     * @param {Object} method Transionable class to multiplex
	     */
	    function MultipleTransition(method) {
	        this.method = method;
	        this._instances = [];
	        this.state = [];
	    }

	    MultipleTransition.SUPPORTS_MULTIPLE = true;

	    /**
	     * Get the state of each transition.
	     *
	     * @method get
	     *
	     * @return state {Number|Array} state array
	     */
	    MultipleTransition.prototype.get = function get() {
	        for (var i = 0; i < this._instances.length; i++) {
	            this.state[i] = this._instances[i].get();
	        }
	        return this.state;
	    };

	    /**
	     * Set the end states with a shared transition, with optional callback.
	     *
	     * @method set
	     *
	     * @param {Number|Array} endState Final State.  Use a multi-element argument for multiple transitions.
	     * @param {Object} transition Transition definition, shared among all instances
	     * @param {Function} callback called when all endStates have been reached.
	     */
	    MultipleTransition.prototype.set = function set(endState, transition, callback) {
	        var _allCallback = Utility.after(endState.length, callback);
	        for (var i = 0; i < endState.length; i++) {
	            if (!this._instances[i]) this._instances[i] = new (this.method)();
	            this._instances[i].set(endState[i], transition, _allCallback);
	        }
	    };

	    /**
	     * Reset all transitions to start state.
	     *
	     * @method reset
	     *
	     * @param  {Number|Array} startState Start state
	     */
	    MultipleTransition.prototype.reset = function reset(startState) {
	        for (var i = 0; i < startState.length; i++) {
	            if (!this._instances[i]) this._instances[i] = new (this.method)();
	            this._instances[i].reset(startState[i]);
	        }
	    };

	    module.exports = MultipleTransition;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     *
	     * A state maintainer for a smooth transition between
	     *    numerically-specified states.  Example numeric states include floats or
	     *    Transfornm objects.
	     *
	     *    An initial state is set with the constructor or set(startValue). A
	     *    corresponding end state and transition are set with set(endValue,
	     *    transition). Subsequent calls to set(endValue, transition) begin at
	     *    the last state. Calls to get(timestamp) provide the _interpolated state
	     *    along the way.
	     *
	     *   Note that there is no event loop here - calls to get() are the only way
	     *    to find out state projected to the current (or provided) time and are
	     *    the only way to trigger callbacks. Usually this kind of object would
	     *    be part of the render() path of a visible component.
	     *
	     * @class TweenTransition
	     * @constructor
	     *
	     * @param {Object} options TODO
	     *    beginning state
	     */
	    function TweenTransition(options) {
	        this.options = Object.create(TweenTransition.DEFAULT_OPTIONS);
	        if (options) this.setOptions(options);

	        this._startTime = 0;
	        this._startValue = 0;
	        this._updateTime = 0;
	        this._endValue = 0;
	        this._curve = undefined;
	        this._duration = 0;
	        this._active = false;
	        this._callback = undefined;
	        this.state = 0;
	        this.velocity = undefined;
	    }

	    /**
	     * Transition curves mapping independent variable t from domain [0,1] to a
	     *    range within [0,1]. Includes functions 'linear', 'easeIn', 'easeOut',
	     *    'easeInOut', 'easeOutBounce', 'spring'.
	     *
	     * @property {object} Curve
	     * @final
	     */
	    TweenTransition.Curves = {
	        linear: function(t) {
	            return t;
	        },
	        easeIn: function(t) {
	            return t*t;
	        },
	        easeOut: function(t) {
	            return t*(2-t);
	        },
	        easeInOut: function(t) {
	            if (t <= 0.5) return 2*t*t;
	            else return -2*t*t + 4*t - 1;
	        },
	        easeOutBounce: function(t) {
	            return t*(3 - 2*t);
	        },
	        spring: function(t) {
	            return (1 - t) * Math.sin(6 * Math.PI * t) + t;
	        }
	    };

	    TweenTransition.SUPPORTS_MULTIPLE = true;
	    TweenTransition.DEFAULT_OPTIONS = {
	        curve: TweenTransition.Curves.linear,
	        duration: 500,
	        speed: 0 /* considered only if positive */
	    };

	    var registeredCurves = {};

	    /**
	     * Add "unit" curve to internal dictionary of registered curves.
	     *
	     * @method registerCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @param {unitCurve} curve function of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     * @return {boolean} false if key is taken, else true
	     */
	    TweenTransition.registerCurve = function registerCurve(curveName, curve) {
	        if (!registeredCurves[curveName]) {
	            registeredCurves[curveName] = curve;
	            return true;
	        }
	        else {
	            return false;
	        }
	    };

	    /**
	     * Remove object with key "curveName" from internal dictionary of registered
	     *    curves.
	     *
	     * @method unregisterCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @return {boolean} false if key has no dictionary value
	     */
	    TweenTransition.unregisterCurve = function unregisterCurve(curveName) {
	        if (registeredCurves[curveName]) {
	            delete registeredCurves[curveName];
	            return true;
	        }
	        else {
	            return false;
	        }
	    };

	    /**
	     * Retrieve function with key "curveName" from internal dictionary of
	     *    registered curves. Default curves are defined in the
	     *    TweenTransition.Curves array, where the values represent
	     *    unitCurve functions.
	     *
	     * @method getCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @return {unitCurve} curve function of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     */
	    TweenTransition.getCurve = function getCurve(curveName) {
	        var curve = registeredCurves[curveName];
	        if (curve !== undefined) return curve;
	        else throw new Error('curve not registered');
	    };

	    /**
	     * Retrieve all available curves.
	     *
	     * @method getCurves
	     *
	     * @static
	     *
	     * @return {object} curve functions of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     */
	    TweenTransition.getCurves = function getCurves() {
	        return registeredCurves;
	    };

	     // Interpolate: If a linear function f(0) = a, f(1) = b, then return f(t)
	    function _interpolate(a, b, t) {
	        return ((1 - t) * a) + (t * b);
	    }

	    function _clone(obj) {
	        if (obj instanceof Object) {
	            if (obj instanceof Array) return obj.slice(0);
	            else return Object.create(obj);
	        }
	        else return obj;
	    }

	    // Fill in missing properties in "transition" with those in defaultTransition, and
	    //   convert internal named curve to function object, returning as new
	    //   object.
	    function _normalize(transition, defaultTransition) {
	        var result = {curve: defaultTransition.curve};
	        if (defaultTransition.duration) result.duration = defaultTransition.duration;
	        if (defaultTransition.speed) result.speed = defaultTransition.speed;
	        if (transition instanceof Object) {
	            if (transition.duration !== undefined) result.duration = transition.duration;
	            if (transition.curve) result.curve = transition.curve;
	            if (transition.speed) result.speed = transition.speed;
	        }
	        if (typeof result.curve === 'string') result.curve = TweenTransition.getCurve(result.curve);
	        return result;
	    }

	    /**
	     * Set internal options, overriding any default options.
	     *
	     * @method setOptions
	     *
	     *
	     * @param {Object} options options object
	     * @param {Object} [options.curve] function mapping [0,1] to [0,1] or identifier
	     * @param {Number} [options.duration] duration in ms
	     * @param {Number} [options.speed] speed in pixels per ms
	     */
	    TweenTransition.prototype.setOptions = function setOptions(options) {
	        if (options.curve !== undefined) this.options.curve = options.curve;
	        if (options.duration !== undefined) this.options.duration = options.duration;
	        if (options.speed !== undefined) this.options.speed = options.speed;
	    };

	    /**
	     * Add transition to end state to the queue of pending transitions. Special
	     *    Use: calling without a transition resets the object to that state with
	     *    no pending actions
	     *
	     * @method set
	     *
	     *
	     * @param {number|FamousMatrix|Array.Number|Object.<number, number>} endValue
	     *    end state to which we _interpolate
	     * @param {transition=} transition object of type {duration: number, curve:
	     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
	     *    instantaneous.
	     * @param {function()=} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    TweenTransition.prototype.set = function set(endValue, transition, callback) {
	        if (!transition) {
	            this.reset(endValue);
	            if (callback) callback();
	            return;
	        }

	        this._startValue = _clone(this.get());
	        transition = _normalize(transition, this.options);
	        if (transition.speed) {
	            var startValue = this._startValue;
	            if (startValue instanceof Object) {
	                var variance = 0;
	                for (var i in startValue) variance += (endValue[i] - startValue[i]) * (endValue[i] - startValue[i]);
	                transition.duration = Math.sqrt(variance) / transition.speed;
	            }
	            else {
	                transition.duration = Math.abs(endValue - startValue) / transition.speed;
	            }
	        }

	        this._startTime = Date.now();
	        this._endValue = _clone(endValue);
	        this._startVelocity = _clone(transition.velocity);
	        this._duration = transition.duration;
	        this._curve = transition.curve;
	        this._active = true;
	        this._callback = callback;
	    };

	    /**
	     * Cancel all transitions and reset to a stable state
	     *
	     * @method reset
	     *
	     * @param {number|Array.Number|Object.<number, number>} startValue
	     *    starting state
	     * @param {number} startVelocity
	     *    starting velocity
	     */
	    TweenTransition.prototype.reset = function reset(startValue, startVelocity) {
	        if (this._callback) {
	            var callback = this._callback;
	            this._callback = undefined;
	            callback();
	        }
	        this.state = _clone(startValue);
	        this.velocity = _clone(startVelocity);
	        this._startTime = 0;
	        this._duration = 0;
	        this._updateTime = 0;
	        this._startValue = this.state;
	        this._startVelocity = this.velocity;
	        this._endValue = this.state;
	        this._active = false;
	    };

	    /**
	     * Get current velocity
	     *
	     * @method getVelocity
	     *
	     * @returns {Number} velocity
	     */
	    TweenTransition.prototype.getVelocity = function getVelocity() {
	        return this.velocity;
	    };

	    /**
	     * Get interpolated state of current action at provided time. If the last
	     *    action has completed, invoke its callback.
	     *
	     * @method get
	     *
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     * @return {number|Object.<number|string, number>} beginning state
	     *    _interpolated to this point in time.
	     */
	    TweenTransition.prototype.get = function get(timestamp) {
	        this.update(timestamp);
	        return this.state;
	    };

	    function _calculateVelocity(current, start, curve, duration, t) {
	        var velocity;
	        var eps = 1e-7;
	        var speed = (curve(t) - curve(t - eps)) / eps;
	        if (current instanceof Array) {
	            velocity = [];
	            for (var i = 0; i < current.length; i++){
	                if (typeof current[i] === 'number')
	                    velocity[i] = speed * (current[i] - start[i]) / duration;
	                else
	                    velocity[i] = 0;
	            }

	        }
	        else velocity = speed * (current - start) / duration;
	        return velocity;
	    }

	    function _calculateState(start, end, t) {
	        var state;
	        if (start instanceof Array) {
	            state = [];
	            for (var i = 0; i < start.length; i++) {
	                if (typeof start[i] === 'number')
	                    state[i] = _interpolate(start[i], end[i], t);
	                else
	                    state[i] = start[i];
	            }
	        }
	        else state = _interpolate(start, end, t);
	        return state;
	    }

	    /**
	     * Update internal state to the provided timestamp. This may invoke the last
	     *    callback and begin a new action.
	     *
	     * @method update
	     *
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     */
	    TweenTransition.prototype.update = function update(timestamp) {
	        if (!this._active) {
	            if (this._callback) {
	                var callback = this._callback;
	                this._callback = undefined;
	                callback();
	            }
	            return;
	        }

	        if (!timestamp) timestamp = Date.now();
	        if (this._updateTime >= timestamp) return;
	        this._updateTime = timestamp;

	        var timeSinceStart = timestamp - this._startTime;
	        if (timeSinceStart >= this._duration) {
	            this.state = this._endValue;
	            this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, 1);
	            this._active = false;
	        }
	        else if (timeSinceStart < 0) {
	            this.state = this._startValue;
	            this.velocity = this._startVelocity;
	        }
	        else {
	            var t = timeSinceStart / this._duration;
	            this.state = _calculateState(this._startValue, this._endValue, this._curve(t));
	            this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, t);
	        }
	    };

	    /**
	     * Is there at least one action pending completion?
	     *
	     * @method isActive
	     *
	     *
	     * @return {boolean}
	     */
	    TweenTransition.prototype.isActive = function isActive() {
	        return this._active;
	    };

	    /**
	     * Halt transition at current state and erase all pending actions.
	     *
	     * @method halt
	     *
	     */
	    TweenTransition.prototype.halt = function halt() {
	        this.reset(this.get());
	    };

	    // Register all the default curves
	    TweenTransition.registerCurve('linear', TweenTransition.Curves.linear);
	    TweenTransition.registerCurve('easeIn', TweenTransition.Curves.easeIn);
	    TweenTransition.registerCurve('easeOut', TweenTransition.Curves.easeOut);
	    TweenTransition.registerCurve('easeInOut', TweenTransition.Curves.easeInOut);
	    TweenTransition.registerCurve('easeOutBounce', TweenTransition.Curves.easeOutBounce);
	    TweenTransition.registerCurve('spring', TweenTransition.Curves.spring);

	    TweenTransition.customCurve = function customCurve(v1, v2) {
	        v1 = v1 || 0; v2 = v2 || 0;
	        return function(t) {
	            return v1*t + (-2*v1 - v2 + 3)*t*t + (v1 + v2 - 2)*t*t*t;
	        };
	    };

	    module.exports = TweenTransition;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * Ordinary Differential Equation (ODE) Integrator.
	     * Manages updating a physics body's state over time.
	     *
	     *  p = position, v = velocity, m = mass, f = force, dt = change in time
	     *
	     *      v <- v + dt * f / m
	     *      p <- p + dt * v
	     *
	     *  q = orientation, w = angular velocity, L = angular momentum
	     *
	     *      L <- L + dt * t
	     *      q <- q + dt/2 * q * w
	     *
	     * @class SymplecticEuler
	     * @constructor
	     * @param {Object} options Options to set
	     */
	    var SymplecticEuler = {};

	    /*
	     * Updates the velocity of a physics body from its accumulated force.
	     *      v <- v + dt * f / m
	     *
	     * @method integrateVelocity
	     * @param {Body} physics body
	     * @param {Number} dt delta time
	     */
	    SymplecticEuler.integrateVelocity = function integrateVelocity(body, dt) {
	        var v = body.velocity;
	        var w = body.inverseMass;
	        var f = body.force;

	        if (f.isZero()) return;

	        v.add(f.mult(dt * w)).put(v);
	        f.clear();
	    };

	    /*
	     * Updates the position of a physics body from its velocity.
	     *      p <- p + dt * v
	     *
	     * @method integratePosition
	     * @param {Body} physics body
	     * @param {Number} dt delta time
	     */
	    SymplecticEuler.integratePosition = function integratePosition(body, dt) {
	        var p = body.position;
	        var v = body.velocity;

	        p.add(v.mult(dt)).put(p);
	    };

	    /*
	     * Updates the angular momentum of a physics body from its accumuled torque.
	     *      L <- L + dt * t
	     *
	     * @method integrateAngularMomentum
	     * @param {Body} physics body (except a particle)
	     * @param {Number} dt delta time
	     */
	    SymplecticEuler.integrateAngularMomentum = function integrateAngularMomentum(body, dt) {
	        var L = body.angularMomentum;
	        var t = body.torque;

	        if (t.isZero()) return;

	        L.add(t.mult(dt)).put(L);
	        t.clear();
	    };

	    /*
	     * Updates the orientation of a physics body from its angular velocity.
	     *      q <- q + dt/2 * q * w
	     *
	     * @method integrateOrientation
	     * @param {Body} physics body (except a particle)
	     * @param {Number} dt delta time
	     */
	    SymplecticEuler.integrateOrientation = function integrateOrientation(body, dt) {
	        var q = body.orientation;
	        var w = body.angularVelocity;

	        if (w.isZero()) return;
	        q.add(q.multiply(w).scalarMultiply(0.5 * dt)).put(q);
	//        q.normalize.put(q);
	    };

	    module.exports = SymplecticEuler;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Vector = __webpack_require__(52);
	    var EventHandler = __webpack_require__(31);

	    /**
	     * Force base class.
	     *
	     * @class Force
	     * @uses EventHandler
	     * @constructor
	     */
	    function Force(force) {
	        this.force = new Vector(force);
	        this._eventOutput = new EventHandler();
	        EventHandler.setOutputHandler(this, this._eventOutput);
	    }

	    /**
	     * Basic setter for options
	     *
	     * @method setOptions
	     * @param options {Objects}
	     */
	    Force.prototype.setOptions = function setOptions(options) {
	        this._eventOutput.emit('change', options);
	    };

	    /**
	     * Adds a force to a physics body's force accumulator.
	     *
	     * @method applyForce
	     * @param targets {Array.Body} Array of bodies to apply a force to.
	     */
	    Force.prototype.applyForce = function applyForce(targets) {
	        var length = targets.length;
	        while (length--) {
	            targets[length].applyForce(this.force);
	        }
	    };

	    /**
	     * Getter for a force's potential energy.
	     *
	     * @method getEnergy
	     * @return energy {Number}
	     */
	    Force.prototype.getEnergy = function getEnergy() {
	        return 0.0;
	    };

	    module.exports = Force;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
/******/ ])