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

    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var LayoutController = require('famous-flex/LayoutController');
    var HeaderFooterLayout = require('famous-flex/layouts/HeaderFooterLayout');
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
        return new LayoutController({
            layout: HeaderFooterLayout,
            layoutOptions: {
                headerSize: 60
            },
            dataSource: {
                header: _createTabBar(),
                content: new Surface()
            }
        });
    }

    function _createTabItem(text, image) {
        return new Surface({
            classes: ['tabbar-item'],
            content: text
        });
    }

    function _createTabBar() {
        var tabBar = new TabBar({
        });
        tabBar.setItems([
            _createTabItem('one'),
            _createTabItem('two'),
            _createTabItem('three')
        ]);
        tabBar.setSelectedItemOverlay(
            new Surface({
                classes: ['tabbar-selected-item']
            })
        );
        return tabBar;
    }
});
