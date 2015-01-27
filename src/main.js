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
    // Add examples
    //
    _createTabBar('Regular', {
        tabBarLayout: {
            itemSize: undefined
        },
        classes: ['white']
    });
    _createTabBar('itemSize: 80', {
        tabBarLayout: {
            itemSize: 100
        },
        classes: ['white']
    });
    _createTabBar('itemSize: true', {
        size: [true, undefined],
        tabBarLayout: {
            itemSize: true,
            margins: [0, 10],
            spacing: 10
        },
        classes: ['black']
    });
    _createTabBar('slow-motion', {
        tabBarLayout: {
            itemSize: undefined
        },
        layoutController: {
            nodeSpring: {
                dampingRatio: 0.8,
                period: 1000
            }
        },
        classes: ['black']
    });
    _createTabBar('bouncy', {
        size: [true, undefined],
        tabBarLayout: {
            itemSize: true,
            margins: [0, 20],
            spacing: 20
        },
        layoutController: {
            nodeSpring: {
                dampingRatio: 0.4,
                period: 400
            }
        },
        classes: ['blue']
    });

    //
    // Main scrollview
    //
    function _createScrollView() {
        return new FlexScrollView({
            mouseMove: true,
            autoPipeEvents: true,
            layoutOptions: {
                margins: [10, 20],
                itemSize: 100
            }
        });
    }

    function _createTabBar(title, options) {
        var tabBar = new TabBar(options);
        tabBar.setItems([
            'one',
            'fourty',
            'lorum ipsum'
        ]);
        scrollView.push(new LayoutController({
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
                content: tabBar
            }
        }));
        tabBar.on('tabchange', function(event) {
            console.log('tabchange: ' + event.index + ' (oldIndex: ' + event.oldIndex + ')');
        });
    }
});
