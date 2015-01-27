/**
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

define(function(require) {

    //<webpack>
    require('famous-polyfills');
    require('famous/core/famous.css');
    require('famous-flex/widgets/styles.css');
    require('../bower_components/ionicons/css/ionicons.min.css');
    require('./styles.css');
    require('./index.html');
    //</webpack>

    // Fast-click
    var FastClick = require('fastclick/lib/fastclick');
    FastClick.attach(document.body);

    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var LayoutController = require('famous-flex/LayoutController');
    var FlexScrollView = require('famous-flex/FlexScrollView');
    var TabBar = require('famous-flex/widgets/TabBar');

    // create the main context
    var mainContext = Engine.createContext();

    // create main layout
    var scrollView = _createScrollView();
    mainContext.add(scrollView);

    //
    // Basic example
    //
    var tabBar = new TabBar({
        classes: ['white']
    });
    tabBar.setItems([
        'one',
        'fourty',
        'lorum ipsum'
    ]);
    _addTabBar(tabBar, 'Regular');

    //
    // itemSize: 80
    //
    tabBar = new TabBar({
        tabBarLayout: {
            itemSize: 100
        },
        classes: ['white']
    });
    tabBar.setItems([
        'one',
        'fourty',
        'lorum ipsum'
    ]);
    _addTabBar(tabBar, 'itemSize: 80');

    //
    // itemSize: true
    //
    tabBar = new TabBar({
        size: [true, undefined],
        tabBarLayout: {
            itemSize: true,
            margins: [0, 10],
            spacing: 10
        },
        classes: ['black']
    });
    tabBar.setItems([
        'one',
        'fourty',
        'lorum ipsum'
    ]);
    _addTabBar(tabBar, 'itemSize: true');

    //
    // slow motion
    //
    tabBar = new TabBar({
        layoutController: {
            nodeSpring: {
                dampingRatio: 0.8,
                period: 1000
            }
        },
        classes: ['black']
    });
    tabBar.setItems([
        'one',
        'fourty',
        'lorum ipsum'
    ]);
    _addTabBar(tabBar, 'sloooow motion');

    //
    // bouncy
    //
    tabBar = new TabBar({
        layoutController: {
            nodeSpring: {
                dampingRatio: 0.4,
                period: 400
            }
        },
        classes: ['blue']
    });
    tabBar.setItems([
        'one',
        'fourty',
        'lorum ipsum'
    ]);
    _addTabBar(tabBar, 'bouncy');

    //
    // solid
    //
    tabBar = new TabBar({
        classes: ['orange']
    });
    tabBar.setItems([
        'one',
        'fourty',
        'lorum ipsum'
    ]);
    _addTabBar(tabBar, 'solid');

    //
    // images
    //
    tabBar = new TabBar({
        classes: ['orange']
    });
    tabBar.setItems([
        '<div class="icon ion-flag"></div>',
        '<div class="icon ion-map"></div>',
        '<div class="icon ion-gear-a"></div>',
        '<div class="icon ion-star"></div>',
        '<div class="icon ion-refresh"></div>'
    ]);
    _addTabBar(tabBar, 'image');

    //
    // images + text
    //
    tabBar = new TabBar({
        classes: ['images', 'small', 'orange']
    });
    tabBar.setItems([
        '<div class="icon ion-flag"></div>Flag',
        '<div class="icon ion-map"></div>Map',
        '<div class="icon ion-gear-a"></div>Settings',
        '<div class="icon ion-star"></div>Favorites',
        '<div class="icon ion-refresh"></div>Refresh'
    ]);
    _addTabBar(tabBar, 'image + text', 110);

    //
    // Main scrollview
    //
    function _createScrollView() {
        return new FlexScrollView({
            mouseMove: true,
            useContainer: true,
            container: {},
            layoutAll: true,
            layoutOptions: {
                margins: [10, 20],
                itemSize: true
            }
        });
    }

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
});
