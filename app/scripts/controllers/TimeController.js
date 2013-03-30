/**
 * Time Controller
 */

define(function (require) {
    'use strict';

    var time = require('services/Time');
    var Events = require('events');

    /**
     * Time Controller
     */
    var TimeController = function () {
        Events.on('time:second', this.processTime.bind(this));
    };

    /**
     * Process time on event trigger
     */
    TimeController.prototype.processTime = function (tme) {
        console.log(tme);
    };

    /**
     * Turns off events and cleans up
     */
    TimeController.prototype.destroy = function () {
        Events.off('time:second');

        return this;
    };

    return TimeController;
});