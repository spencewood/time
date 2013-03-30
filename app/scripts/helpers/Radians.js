/**
 * Circle calculation methods
 */

define(function (require) {
    'use strict';

    return {
        /**
         * Convert degrees to radians
         */
        fromDegrees: function (degrees) {
            return degrees * Math.PI / 180;
        },

        /**
         * Get top of the circle
         */
        getTop: function(){
            return 1.5 * Math.PI;
        }
    };
});