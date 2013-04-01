/**
 * Minues circle view
 * Draws a circle for the current hour, 100% being the beginning of the hour
 */

define(function (require) {
    'use strict';

    var _ = require('underscore');
    var radians = require('helpers/Radians');

    /**
     * The top of the circle
     */
    var _top = radians.getTop();

    /**
     * Previous time
     */
    var _oldTime = 0;

    /**
     * Seconds circle view
     */
    var MinutesCircleView = function () {
        _.bindAll(this);

        this.time = null;
    };

    /**
     * Sets the time for the view
     */
    MinutesCircleView.prototype.setTime = function (time) {
        this.time = time;
        _oldTime = time;

        return this;
    };

    /**
     * Render the view with the passed in canvas context
     */
    MinutesCircleView.prototype.render = function (context) {
        var percent = this.time / 60000;
        var degrees = 360 * percent;

        context.lineWidth = 5;
        context.lineCap = 'round';
        context.strokeStyle = '333333';

        context.beginPath();
        context.arc(90, 90, 75, _top, _top + radians.fromDegrees(degrees), false);
        context.stroke();
    };

    return MinutesCircleView;
});