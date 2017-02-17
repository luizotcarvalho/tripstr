/*global angular */

/**
 * Diretiva de criação e edição de viagens.
 */

angular = require('angular');

angular.module('Tripstr')
	.directive('travelForm', function (travelFormService, citiesService) {
		'use strict';

		return {
            restrict: 'E',
            templateUrl: '/templates/js/directives/travelForm/travelFormTemplate.html',
            controller: function($scope, $state, $stateParams, $uibModal) {
                var $ctrl = this;
                $scope.cities = citiesService;
                $scope.model = travelFormService;
                $scope.dateOptions = {
                    buttonBar: {
                        show: false
                    }
                };

                // Abre a popup de adicionar viajantes
                $scope.open_traveler_popup = function (){
                    var modalInstance = $uibModal.open({
                        templateUrl: '/templates/js/directives/travelForm/travelFormPopupTemplate.html',
                        controller: 'travelFormPopupCtrl',
                        controllerAs: '$ctrl',
                        size: 'md',
                        resolve: {
                            traveler: function () {
                                return $ctrl.traveler;
                            }
                        }
                    });

                    // Apoós a promessa da popup ser resolvida,
                    // adiciona o viajante ao modelo da viagem
                    modalInstance.result.then(function (traveler) {
                        $scope.model.add_traveler(traveler);
                    }, function () {});
                };

                // É passada como callback da função de salvar
                $scope.redirect_to_index = function() {
                    $state.go('index');
                };

                // inica o modelo da viagem
                // caso seja passado o parametro de rota "travel"
                // abre em modo de edição
                travelFormService.init($stateParams.travel);
            }
        };
	})
    // Controlador da popup de adicionar viajante
    .controller('travelFormPopupCtrl', function ($uibModalInstance) {
        var $ctrl = this;
        $ctrl.avatars = [
            '/dist/static/images/avatars/1.png',
            '/dist/static/images/avatars/2.png',
            '/dist/static/images/avatars/3.png',
            '/dist/static/images/avatars/4.png',
            '/dist/static/images/avatars/5.png',
            '/dist/static/images/avatars/6.png',
            '/dist/static/images/avatars/7.png',
            '/dist/static/images/avatars/8.png',
            '/dist/static/images/avatars/9.png'
        ];
        $ctrl.traveler = {
            avatar: $ctrl.avatars[0]
        };

        $ctrl.select_avatar = function (avatar) {
            $ctrl.traveler.avatar = avatar;
        };

        // Resolve a promessa com os dados do viajante
        $ctrl.ok = function () {
            $uibModalInstance.close($ctrl.traveler);
        };

        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });
