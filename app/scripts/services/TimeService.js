/**
 * Time Service
 * a service for keeping track of time
 */

define(function (require) {
    'use strict';

    var _ = require('underscore');
    var Events = require('events');

    var _start = 0;
    var _started = false;
    var _interval = null;

    var getTime = function () {
        return new Date().getSeconds() * 1000;
    };

    /**
     * Time Model
     */
    var Time = function () {

    };

    /**
     * Start time tracking
     * @return {this}
     */
    Time.prototype.start = function () {
        Events.trigger('time:start');
        _start = getTime();
        _started = true;
        _interval = setInterval(_.bind(this.timeEvent, this), 1000);

        return this;
    };

    /**
     * Stop time tracking
     * @return {this}
     */
    Time.prototype.stop = function () {
        Events.trigger('time:stop');
        _start = 0;
        _started = false;

        return this;
    };

    /**
     * If the time has started
     * @return {Boolean}
     */
    Time.prototype.isStarted = function () {
        return _started;
    };

    /**
     * If the time has stopped
     * @return {Boolean} [description]
     */
    Time.prototype.isStopped = function () {
        return ! this.isStarted();
    };

    /**
     * Interval time handler
     */
    Time.prototype.timeEvent = function () {
        Events.trigger('time:second', getTime());
    };

    /**
     * Get milliseconds since started
     * @return {Number} milliseconds
     */
    Time.prototype.getMilliseconds = function () {
        if(this.isStarted()){
            return getTime() - _start;
        }
        return 0;
    };

    /**
     * Get seconds since started
     * @return {Number} seconds
     */
    Time.prototype.getSeconds = function () {
        var milliseconds = this.getMilliseconds() / 1000;
        return milliseconds < 0 ? 0 : milliseconds;
    };

    return new Time();
});