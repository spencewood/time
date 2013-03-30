/**
 * Time Controller
 */

define(function (require) {
    'use strict';

    var timeService = require('services/TimeService');
    var Events = require('events');
    var SecondsCircleView = require('views/SecondsCircleView');

    /**
     * Time Controller
     */
    var TimeController = function (canvas) {
        this.canvas = canvas;

        this.secondsCircleView = new SecondsCircleView();

        Events.on('time:second', this.processTime.bind(this));
    };

    /**
     * Process time on event trigger
     */
    TimeController.prototype.processTime = function (time) {
        this.canvas.addTask(this.secondsCircleView.setTime(time).render);
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