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
    require('./styles.css');
    require('./index.html');
    //</webpack>

    // Fast-click
    var FastClick = require('fastclick/lib/fastclick');
    FastClick.attach(document.body);

    // import dependencies
    var Engine = require('famous/core/Engine');
    var RenderNode = require('famous/core/RenderNode');
    var Modifier = require('famous/core/Modifier');
    var Surface = require('famous/core/Surface');
    var LayoutController = require('famous-flex/LayoutController');
    var HeaderFooterLayout = require('famous-flex/layouts/HeaderFooterLayout');
    var FlexScrollView = require('famous-flex/FlexScrollView');
    var TabBar = require('famous-flex/widgets/TabBar');

    // create the main context
    var mainContext = Engine.createContext();

    // create main layout
    var layout = _createLayout();
    mainContext.add(layout);

    //
    // Header-footer layout
    //
    function _createLayout() {
        var tabBarSize = [undefined, 50];
        return new FlexScrollView({
            mouseMove: true,
            autoPipeEvents: true,
            dataSource: [
                _createHeader('itemSize: undefined'),
                _createTabBar({
                    size: tabBarSize,
                    tabBarLayout: {
                        itemSize: undefined
                    }
                }),
                _createSpacer(),

                _createHeader('itemSize: 100'),
                _createTabBar({
                    size: tabBarSize,
                    tabBarLayout: {
                        itemSize: 100
                    }
                }),
                _createSpacer(),

                _createHeader('itemSize: true'),
                _createTabBar({
                    size: tabBarSize,
                    tabBarLayout: {
                        itemSize: true,
                        margins: [0, 10],
                        spacing: 10
                    }
                }),
                _createSpacer(),

                _createHeader('slow motion'),
                _createTabBar({
                    size: tabBarSize,
                    tabBarLayout: {
                        itemSize: undefined
                    },
                    layoutController: {
                        nodeSpring: {
                            dampingRatio: 0.8,
                            period: 1000
                        }
                    }
                }),
                _createSpacer(),

                _createHeader('bouncy'),
                _createTabBar({
                    size: tabBarSize,
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
                    }
                }),
                _createSpacer()
            ]
        });
    }

    function _createSpacer() {
        return new RenderNode(new Modifier({
            size: [undefined, 20]
        }));
    }

    function _createHeader(text) {
        return new Surface({
            size: [undefined, 30],
            classes: ['header'],
            content: text
        });
    }
    function _createTabItem(text, itemSize) {
        return new Surface({
            classes: ['tabbar-item'],
            size: (itemSize === true) ? [true, undefined] : undefined,
            content: text
        });
    }

    function _createTabBar(options) {
        var tabBar = new TabBar(options);
        tabBar.setItems([
            _createTabItem('one', options.tabBarLayout.itemSize),
            _createTabItem('fourty', options.tabBarLayout.itemSize),
            _createTabItem('lorum ipsum', options.tabBarLayout.itemSize)
        ]);
        tabBar.setSelectedItemOverlay(
            new Surface({
                classes: ['tabbar-selected-item']
            })
        );
        return tabBar;
    }
});
