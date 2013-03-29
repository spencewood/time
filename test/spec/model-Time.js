/**
 * Time model tests
 */
define(function (require) {
    'use strict';

    var should = require('chai').should();
    var Time = require('models/Time');

    describe('Time model', function () {
        it('should return an instantiatable', function () {
            var time = new Time();
            time.should.be.ok;
        });
    });
});