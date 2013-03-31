/**
 * Seconds circle tests
 */
define(function (require) {
    'use strict';

    var chai = require('chai');
    var sinon = require('sinon');
    var sinonChai = require('sinon-chai');
    var should = chai.should();
    chai.use(sinonChai);

    var SecondsCircleView = require('views/SecondsCircleView');
    var Events = require('events');

    describe('Seconds Circle View', function () {
        it('should have a render method', function () {
            var secondsCircleView = new SecondsCircleView();
            should.exist(secondsCircleView.render);
        });

        it('should have a setTime method to set the view time', function () {
            var secondsCircleView = new SecondsCircleView();
            should.exist(secondsCircleView.setTime);
        });

        it('should return view instance when setting the time', function () {
            var secondsCircleView = new SecondsCircleView();
            secondsCircleView.setTime().should.equal(secondsCircleView);
        });
    });
});