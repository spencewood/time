/**
 * Time controller tests
 */
define(function (require) {
    'use strict';

    var chai = require('chai');
    var should = chai.should();
    var sinonChai = require('sinon-chai');

    var TimeController = require('controllers/TimeController');
    var Events = require('events');

    describe('Time Controller', function () {
        it('should return an instantiatable', function () {
            var time = new TimeController();
            time.should.be.ok;
        });
    });
});