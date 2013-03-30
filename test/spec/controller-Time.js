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
    var Events = require('events');

    describe('Time Controller', function () {
        it('should return an instantiatable', function () {
            var timeController = new TimeController();
            timeController.should.be.ok;
            timeController.destroy();
        });

        it('should call the time processor when the seconds event is fired', function (done) {
            sinon.spy(TimeController.prototype, 'processTime');
            var timeController = new TimeController();

            Events.trigger('time:second');
            setTimeout(function () {
                timeController.processTime.should.have.been.calledOnce;
                timeController.processTime.restore();
                timeController.destroy();
                done();
            }, 300);
        });

        it('should cleanup events with the destroy method', function () {
            sinon.spy(Events, 'off');
            var timeController = new TimeController();

            timeController.destroy();
            Events.off.should.have.been.called;
            Events.off.restore();
            timeController.destroy();
        });

        it('should return object when calling destroy method', function () {
            var timeController = new TimeController();
            timeController.destroy().should.equal(timeController);
        });
    });
});