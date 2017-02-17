/*global angular */

/**
 * Diretiva para exibir a viagem.
 */

angular = require('angular');

angular.module('Tripstr')
    .directive('travelCard', function (travelsListService, travelFormService) {
        'use strict';

        return {
            scope: {
                travel: '='
            },
            restrict: 'E',
            templateUrl: '/templates/js/directives/travelCard/travelCardTemplate.html',
            controller: function($scope, $state) {
                $scope.model = travelsListService;

                // Redireciona para a rota de edição
                $scope.edit_travel = function(travel) {
                    $state.go('form', {travel: travel})
                };

                // Pega o tipo de viagem no travelFormService através do id guardado no objeto travel
                $scope.get_vehicle_type = function(type_id) {
                    for(var i = 0; i < travelFormService.vehicle_types.length; i++){
                        var type = travelFormService.vehicle_types[i];
                        if(type.id === type_id){
                            return type;
                        }
                    }
                    return;
                };
            }
        };
    });
