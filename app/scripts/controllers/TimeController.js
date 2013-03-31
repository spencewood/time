/**
 * Time Controller
 */

define(function (require) {
    'use strict';

    var _ = require('underscore');
    var timeService = require('services/TimeService');
    var Events = require('events');
    var SecondsCircleView = require('views/SecondsCircleView');
    var SecondsNumberView = require('views/SecondsNumberView');

    /**
     * Time Controller
     */
    var TimeController = function (canvas) {
        if(_.isUndefined(canvas)){
            throw new Error('Canvas must be supplied');
        }

        this.canvas = canvas;

        this.secondsCircleView = new SecondsCircleView();
        this.secondsNumberView = new SecondsNumberView();

        Events.on('time:second', _.bind(this.processTime, this));
        Events.on('time:start', canvas.startAnimation);
        Events.on('time:stop', canvas.stopAnimation);
    };

    /**
     * Process time on event trigger
     */
    TimeController.prototype.processTime = function (time) {
        this.canvas.addTask(this.secondsCircleView.setTime(time).render);
        this.canvas.addTask(this.secondsNumberView.setTime(time).render);
    };

    /**
     * Turns off events and cleans up
     */
    TimeController.prototype.destroy = function () {
        Events.off('time:second');
        Events.off('time:start');
        Events.off('time:stop');

        return this;
    };

    return TimeController;
});