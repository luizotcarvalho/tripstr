/*global angular */

/**
 * Serviço de locais
 * Realiza as chamadas para a api de locais
 */

angular = require('angular');

angular.module('Tripstr')
    .factory('citiesService', function (citiesApi, $q) {
        'use strict';

        return {
            loading: false,
            get: function(query) {
                var self = this;
                this.loading = true;
                return citiesApi.get_by_query(query)
                    .then(function(result) {
                        self.loading = false;
                        return result.data.results.map(function(item){
                            return item.formatted_address;
                        });
                    });

            }
        };
    });