/**
 * Seconds circle view
 * Draws a circle for the current minute, 100% being the beginning of a minute
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
     * Seconds circle view
     */
    var SecondsCircleView = function () {
        _.bindAll(this);

        this.time = null;
    };

    /**
     * Sets the time for the view
     */
    SecondsCircleView.prototype.setTime = function (time) {
        this.time = time;

        return this;
    };

    /**
     * Render the view with the passed in canvas context
     */
    SecondsCircleView.prototype.render = function (context) {
        var percent = this.time / 60000;
        var degrees = 360 * percent;

        context.lineWidth = 5;
        context.lineCap = 'round';
        context.strokeStyle = '333333';

        context.beginPath();
        context.arc(100, 100, 50, _top, _top + radians.fromDegrees(degrees), false);
        context.stroke();
    };

    return SecondsCircleView;
});