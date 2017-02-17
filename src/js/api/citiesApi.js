/*global angular */

/**
 * Api que busca nomes de locais no googleapis
 */

angular = require('angular');

angular.module('Tripstr')
	.factory('citiesApi', function ($http) {
		'use strict';

        return {
			get_by_query: function (query) {
				return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
                        params: {
                            address: query,
                            components: 'country: BR'
                        }
                    });
			}
		};
	});