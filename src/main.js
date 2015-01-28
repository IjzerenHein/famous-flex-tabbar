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
    var Transform = require('famous/core/Transform');
    var Easing = require('famous/transitions/Easing');
    var StateModifier = require('famous/modifiers/StateModifier');
    var RenderNode = require('famous/core/RenderNode');
    var LayoutController = require('famous-flex/LayoutController');
    var FlexScrollView = require('famous-flex/FlexScrollView');
    var TabBar = require('famous-flex/widgets/TabBar');

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
        classes: ['white']
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
        classes: ['white']
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
        classes: ['black']
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
        classes: ['black']
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
        classes: ['black']
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
        classes: ['blue']
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
        classes: ['orange']
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
        classes: ['images', 'small', 'orange']
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
    // custom renderables
    //
    ///////////////////////////////////////////////////////////////////
    function _createCustomRenderable(id, data) {
        if (id === 'item') {
            return new Surface({
                classes: ['ff-widget', 'ff-tabbar', 'images', 'item', 'small'],
                content: '<div><div class="icon ion-' + data.icon + '"></div>' + data.text + '</div>',
                properties: {
                    color: 'white'
                }
            });
        }
        else if (id === 'background') {
            return new Surface({
                properties: {
                    backgroundImage: 'url(' + require('./images/back.png') + ')'
                }
            });
        }
        else if (id === 'selectedItemOverlay') {
            return new Surface({
                properties: {
                    backgroundColor: 'rgba(255, 255, 255, 0.3)'
                }
            });
        }
        else {
            return TabBar.prototype.createRenderable.call(this, id, data);
        }
    }
    tabBar = new TabBar({
        classes: ['images', 'small', 'white'],
        createRenderable: _createCustomRenderable
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
        if (id === 'item') {
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
        else {
            return TabBar.prototype.createRenderable.call(this, id, data);
        }
    }
    tabBar = new TabBar({
        classes: ['images', 'small', 'orange'],
        createRenderable: _createBouncyCustomRenderable
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
});
