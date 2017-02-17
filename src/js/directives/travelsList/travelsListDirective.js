/*global angular */

/**
 * Diretiva de listagem de viagens cadastradas.
 */

angular = require('angular');

angular.module('Tripstr')
	.directive('travelsList', function (travelsListService) {
		'use strict';

		return {
            restrict: 'E',
            templateUrl: '/templates/js/directives/travelsList/travelsListTemplate.html',
            controller: function($scope) {
                $scope.model = travelsListService;

                // Inicializa a diretiva de listagem
                // Carregando os itens do banco
                travelsListService.init();
            }
        };
	});
