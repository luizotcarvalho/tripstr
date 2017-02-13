/*global angular */

/**
 * Directive that executes an expression when the element it is applied to gets
 * an `escape` keydown event.
 */

angular = require('angular');

angular.module('app')
	.directive('appEscape', function appEscape() {
		'use strict';

		var ESCAPE_KEY = 27;

		return function (scope, elem, attrs) {
			elem.bind('keydown', function (event) {
				if (event.keyCode === ESCAPE_KEY) {
					scope.$apply(attrs.appEscape);
				}
			});
		};
	});
