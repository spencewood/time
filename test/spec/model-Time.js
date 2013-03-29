/**
 * Time model tests
 */
define(function (require) {
    'use strict';

    var should = require('chai').should();
    var Time = require('models/Time');
    var Events = require('events');

    describe('Time model', function () {
        it('should return an instantiatable', function () {
            var time = new Time();
            time.should.be.ok;
        });

        it('should emit a start event on time start', function (done) {
            var time = new Time();
            Events.once('time:start', function () {
                done();
                time.stop();
            });

            time.start();
        });

        it('should return time instance on start call', function () {
            var time = new Time();
            time.start().should.equal(time);
            time.stop();
        });

        it('should return the number of seconds since started with getSeconds', function (done) {
            var time = new Time();
            time.start();
            setTimeout(function () {
                time.getSeconds().should.be.above(1);
                time.stop();
                done();
            }, 1090);
        });

        it('should emit a second tick each second after start', function (done) {
            var time = new Time();
            Events.once('time:second', function (e) {
                time.getSeconds().should.be.above(0);
                should.exist(e);
                time.stop();
                done();
            });

            time.start();
        });

        it('should return true for isStarted when time has started', function () {
            var time = new Time();
            time.start();
            time.isStarted().should.be.true;
            time.stop();
        });

        it('should emit a stop even on time stop', function (done) {
            var time = new Time();
            Events.once('time:stop', function () {
                done();
            });

            time.start();
            time.stop();
        });

        it('should return time instance when calling stop', function () {
            var time = new Time();
            time.start().stop().should.equal(time);
        });

        it('should stop the timer and and clear the time on stop', function (done) {
            var time = new Time();
            time.start();
            setTimeout(function () {
                time.stop();
                time.getSeconds().should.equal(0);
                done()
            }, 300);
        });

        it('should return true for isStopped when time has stopped', function () {
            var time = new Time();
            time.isStopped().should.be.true;
            time.start();
            time.stop();
            time.isStopped().should.be.true;
        });
    });
});