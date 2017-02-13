/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */

angular = require('angular');
require('angular-route');
require('./../../dist/templateCachePartials');

angular.module('app', ['ngRoute','appPartials'])
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'AppCtrl',
			templateUrl: '/partials/index.html',
			resolve: {
				store: ['appStorage', function (appStorage) {
					// Get the correct module (API or localStorage).
					return appStorage;
				}]
			}
		};

		$routeProvider
			.when('/', routeConfig)
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
	});

require('appCtrl');
require('appStorage');
require('appFocus');
require('appEscape');
require('appFooter');
