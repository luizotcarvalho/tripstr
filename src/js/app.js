/*global angular */

/**
 * Arquivo principal da aplição
 */

// Importa os dependencias com require através do brownserify
angular = require('angular');
animate = require('angular-animate');
routes = require('angular-ui-router');
ui = require('angular-ui-bootstrap');
mask = require('angular-ui-mask');
datetime = require('bootstrap-ui-datetime-picker');
storage = require('angular-local-storage');
templates = require('../../dist/templateCache');

// Lista de dependencias globais da aplição
var dependencies = [
	'ui.router',
	'ui.bootstrap',
    'ui.mask',
    'ui.bootstrap.datetimepicker',
    'LocalStorageModule',
	'templates'
];

angular.module('Tripstr', dependencies)
	.config(function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
		'use strict';

        // Configura rota
		$stateProvider
			.state('index', {
				url: '/',
				template: '<travels-list></travels-list>'
			})
			.state('form', {
				url: '/form',
                params: {travel: null},
				template: '<travel-form></travel-form>'
			});

		$urlRouterProvider.otherwise("/");

        localStorageServiceProvider
            .setPrefix('Tripstr');
	});

// Importa apis, serviços e diretivas da aplicação
require('travelsApi');
require('citiesApi');

require('travelsListService');
require('travelFormService');
require('citiesService');

require('travelsList/travelsListDirective');
require('travelCard/travelCardDirective');
require('travelForm/travelFormDirective');

