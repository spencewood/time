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

    describe('Canvas Controller', function () {
        it('should return an instantiatable', function () {
            var canvasController = new CanvasController('test', 100, 100);
            canvasController.should.be.ok;
            canvasController.destroy();
        });

        it('should stop animating and remove the context on destroy', function () {
            var canvasController = new CanvasController('test', 100, 100);
            canvasController.destroy();
            should.not.exist(canvasController.getContext());
            canvasController.isAnimating().should.be.false;
        });

        it('should report current animation status with isAnimating', function () {
            var canvasController = new CanvasController('test', 100, 100);
            canvasController.startAnimation();
            canvasController.isAnimating().should.be.true;
            canvasController.stopAnimation();
            canvasController.isAnimating().should.be.false;
            canvasController.destroy();
        });

        it('should call tick while animation is going', function (done) {
            var canvasController = new CanvasController('test', 100, 100);
            sinon.spy(canvasController, 'tick');
            canvasController.startAnimation();
            setTimeout(function () {
                canvasController.tick.should.have.been.called;
                canvasController.destroy();
                done();
            }, 300);
        });

        it('should take functions to call for animation run', function (done) {
            var canvasController = new CanvasController('test', 100, 100);
            var spy = sinon.spy();
            canvasController.addTask(spy);
            canvasController.startAnimation();
            setTimeout(function () {
                spy.should.have.been.calledOnce;
                canvasController.destroy();
                done();
            }, 300);
        });

        it('should pass the task functions the canvas context', function (done) {
            var canvasController = new CanvasController('test', 100, 100);
            var spy = sinon.spy();
            canvasController.addTask(spy);
            canvasController.startAnimation();
            setTimeout(function () {
                spy.args[0].should.not.be.null;
                canvasController.destroy();
                done();
            }, 300);
        });
    });
});