/**
 * Time controller tests
 */
define(function (require) {
    'use strict';

    var chai = require('chai');
    var sinon = require('sinon');
    var sinonChai = require('sinon-chai');
    var should = chai.should();
    chai.use(sinonChai);

    var TimeController = require('controllers/TimeController');
    var CanvasController = require('controllers/CanvasController');
    var Events = require('events');

    var canvas = new CanvasController('test', 100, 100);

    describe('Time Controller', function () {
        it('should return an instantiatable', function () {
            var timeController = new TimeController(canvas);
            timeController.should.be.ok;
            timeController.destroy();
        });

        it('should throw when a canvas is not supplied', function () {
            (function () {
                new TimeController();
            }).should.throw();
        });

        it('should call the time processor when the seconds event is fired', function (done) {
            var spy = sinon.spy(TimeController.prototype, 'processTime');
            var timeController = new TimeController(canvas);

            Events.trigger('time:second');
            setTimeout(function () {
                timeController.processTime.should.have.been.called;
                spy.restore();
                timeController.destroy();
                done();
            }, 300);
        });

        it('should cleanup events with the destroy method', function () {
            sinon.spy(Events, 'off');
            var timeController = new TimeController(canvas);

            timeController.destroy();
            Events.off.should.have.been.called;
            Events.off.restore();
            timeController.destroy();
        });

        it('should return object when calling destroy method', function () {
            var timeController = new TimeController(canvas);
            timeController.destroy().should.equal(timeController);
        });
    });
});