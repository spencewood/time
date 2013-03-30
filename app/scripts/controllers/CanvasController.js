/**
 * Canvas Controller
 * Creates a Canvas context for manipulation
 */

define(function (require) {
    'use strict';

    var _ = require('underscore');

    /**
     * Animating state
     * @type {Boolean}
     */
    var animating = false;

    /**
     * A task queue
     * @type {Array}
     */
    var tasks = [];

    /**
     * Canvas Controller
     * @param {String} Id of element to append canvas to
     * @param {Number} width
     * @param {Number} height
     */
    var CanvasController = function (selector, width, height) {
        var canvas = this.canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        this.context = canvas.getContext('2d');
        document.getElementById(selector).appendChild(canvas);
    };

    /**
     * Get Canvas context
     * @returns {context}
     */
    CanvasController.prototype.getContext = function () {
        return this.context;
    };

    /**
     * Start animation
     */
    CanvasController.prototype.startAnimation = function () {
        if (!animating) {
            animating = true;
            requestAnimationFrame(this.tick.bind(this));
        }
    };

    /**
     * Stop animation
     */
    CanvasController.prototype.stopAnimation = function () {
        animating = false;
    };

    /**
     * Is Animating
     * @return {Bool}
     */
    CanvasController.prototype.isAnimating = function () {
        return animating;
    };

    /**
     * An animation tick
     * @param {Float} time
     */
    CanvasController.prototype.tick = function (time) {
        if (animating) {
            this.processTasks();
            requestAnimationFrame(this.tick.bind(this));
        }
    };

    /**
     * Add task to be done during animation
     * @param {Function} func A task to be called in the next tick
     */
    CanvasController.prototype.addTask = function (func) {
        if (_.isFunction(func)) {
            tasks.push(func);
        }
    };

    /**
     * Process tasks that are in queue passing in the canvas' context
     */
    CanvasController.prototype.processTasks = function () {
        while (tasks.length > 0) {
            tasks.shift()(this.context);
        }
    };

    /**
     * Clear Canvas
     */
    CanvasController.prototype.clear = function () {
        this.context.save();
        this.context.setTransform(1,0,0,1,0,0);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.restore();
    };

    /**
     * Run cleanup tasks
     */
    CanvasController.prototype.destroy = function () {
        this.stopAnimation();
        this.context = null;

        return this;
    };

    return CanvasController;
});
