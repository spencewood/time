/**
 * Seconds number view
 * Draws a number for the current minute
 */

define(function (require) {
    'use strict';

    var _ = require('underscore');

    /**
     * Previous time
     */
    var _oldTime = 0;

    /**
     * Seconds circle view
     */
    var SecondsNumberView = function () {
        _.bindAll(this);

        this.time = null;
    };

    /**
     * Sets the time for the view
     */
    SecondsNumberView.prototype.setTime = function (time) {
        this.time = _oldTime = time;

        return this;
    };

    /**
     * Render the view with the passed in canvas context
     */
    SecondsNumberView.prototype.render = function (context) {
        context.font = "36px sans-serif";
        context.fillText(this.time / 1000, 80, 110);
    };

    return SecondsNumberView;
});