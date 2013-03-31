/**
 * Main app
 */

define(function (require) {
    'use strict';

    var TimeController = require('controllers/TimeController');
    var CanvasController = require('controllers/CanvasController');
    var Events = require('events');

    var timeService = require('services/TimeService');

    var canvas = new CanvasController('content', 512, 512);
    new TimeController(canvas);

    timeService.start();
});