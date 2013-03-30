/**
 * Canvas controller tests
 */
define(function (require) {
    'use strict';

    var chai = require('chai');
    var sinon = require('sinon');
    var sinonChai = require('sinon-chai');
    var should = chai.should();
    chai.use(sinonChai);

    var CanvasController = require('controllers/CanvasController');
    var Events = require('events');

    describe.skip('Canvas Controller', function () {
        it('should return an instantiatable', function () {
            var canvasController = new CanvasController();
            timeController.should.be.ok;
        });
    });
});