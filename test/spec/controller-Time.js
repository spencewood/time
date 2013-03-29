/**
 * Time controller tests
 */
define(function (require) {
    'use strict';

    var should = require('chai').should();
    var TimeController = require('controllers/TimeController');
    var Events = require('events');

    describe('Time Controller', function () {
        it('should return an instantiatable', function () {
            var time = new TimeController();
            time.should.be.ok;
        });
    });
});