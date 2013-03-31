/**
 * Time service tests
 */
define(function (require) {
    'use strict';

    var should = require('chai').should();
    var timeService = require('services/TimeService');
    var Events = require('events');

    describe('Time service', function () {
        it('should return an instantiatable', function () {
            timeService.should.be.ok;
        });

        it('should emit a start event on time start', function (done) {
            Events.once('time:start', function () {
                done();
                timeService.stop();
            });

            timeService.start();
        });

        it('should return time instance on start call', function () {
            timeService.start().should.equal(timeService);
            timeService.stop();
        });

        it('should return the number of seconds since started with getSeconds', function (done) {
            timeService.start();
            setTimeout(function () {
                timeService.getSeconds().should.equal(1);
                timeService.stop();
                done();
            }, 1090);
        });

        it('should emit a second tick each second after start', function (done) {
            Events.once('time:second', function (e) {
                timeService.getSeconds().should.be.above(0);
                should.exist(e);
                timeService.stop();
                done();
            });

            timeService.start();
        });

        it('should return true for isStarted when time has started', function () {
            timeService.start();
            timeService.isStarted().should.be.true;
            timeService.stop();
        });

        it('should emit a stop even on time stop', function (done) {
            Events.once('time:stop', function () {
                done();
            });

            timeService.start();
            timeService.stop();
        });

        it('should return time instance when calling stop', function () {
            timeService.start().stop().should.equal(timeService);
        });

        it('should stop the timer and and clear the time on stop', function (done) {
            timeService.start();
            setTimeout(function () {
                timeService.stop();
                timeService.getSeconds().should.equal(0);
                done()
            }, 300);
        });

        it('should return true for isStopped when time has stopped', function () {
            timeService.isStopped().should.be.true;
            timeService.start();
            timeService.stop();
            timeService.isStopped().should.be.true;
        });
    });
});