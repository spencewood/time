/**
 * Time service tests
 */
define(function (require) {
    'use strict';

    var should = require('chai').should();
    var time = require('services/Time');
    var Events = require('events');

    describe('Time service', function () {
        it('should return an instantiatable', function () {
            time.should.be.ok;
        });

        it('should emit a start event on time start', function (done) {
            Events.once('time:start', function () {
                done();
                time.stop();
            });

            time.start();
        });

        it('should return time instance on start call', function () {
            time.start().should.equal(time);
            time.stop();
        });

        it('should return the number of seconds since started with getSeconds', function (done) {
            time.start();
            setTimeout(function () {
                time.getSeconds().should.be.above(1);
                time.stop();
                done();
            }, 1090);
        });

        it('should emit a second tick each second after start', function (done) {
            Events.once('time:second', function (e) {
                time.getSeconds().should.be.above(0);
                should.exist(e);
                time.stop();
                done();
            });

            time.start();
        });

        it('should return true for isStarted when time has started', function () {
            time.start();
            time.isStarted().should.be.true;
            time.stop();
        });

        it('should emit a stop even on time stop', function (done) {
            Events.once('time:stop', function () {
                done();
            });

            time.start();
            time.stop();
        });

        it('should return time instance when calling stop', function () {
            time.start().stop().should.equal(time);
        });

        it('should stop the timer and and clear the time on stop', function (done) {
            time.start();
            setTimeout(function () {
                time.stop();
                time.getSeconds().should.equal(0);
                done()
            }, 300);
        });

        it('should return true for isStopped when time has stopped', function () {
            time.isStopped().should.be.true;
            time.start();
            time.stop();
            time.isStopped().should.be.true;
        });
    });
});