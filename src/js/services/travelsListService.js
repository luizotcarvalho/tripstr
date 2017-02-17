/*global angular */

/**
 * Serviço de lista de viagens.
 */

angular = require('angular');

angular.module('Tripstr')
	.factory('travelsListService', function (travelsApi) {
		'use strict';

		return {
			travels: [],
            // Inicia o serviço carregando todas as viagens
            init: function() {
                var self = this;
                travelsApi.get()
                    .then(function(result) {
                        self.travels = result;
                    });
            },
            // Remove uma viagem da lista e do banco
            remove: function(travel) {
                var self = this;
                var index = this.travels.indexOf(travel);
                this.travels.splice(index, 1);
                travelsApi.delete(travel.id)
                    .then(function(result) {
                    });
            }
		};
	});