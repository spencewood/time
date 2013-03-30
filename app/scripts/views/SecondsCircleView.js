/**
 * Seconds circle view
 * Draws a circle for the current minute, 100% being the beginning of a minute
 */

define(function (require) {
	'use strict';

	/**
	 * Seconds circle view
	 */
	var SecondsCircleView = function () {
		this.time = null;
	};

	/**
	 * Sets the time for the view
	 */
	SecondsCircleView.prototype.setTime = function (time) {
		this.time = time;

		return this;
	};

	/**
	 * Render the view with the passed in canvas context
	 */
	SecondsCircleView.prototype.render = function (ctx) {

	};

	return SecondsCircleView;
});