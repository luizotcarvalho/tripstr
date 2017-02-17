/*global angular */

/**
 * Serviço do formulário.
 */

angular = require('angular');

angular.module('Tripstr')
	.factory('travelFormService', function (travelsApi, travelsListService) {
		'use strict';

		return {
			travel: {},
			vehicle_types: [
                {
                    id: 1,
                    name: 'Bicicleta',
                    icon: 'directions_bike',
                    color: '#2ecc71'
                },
                {
                    id: 2,
                    name: 'Carro',
                    icon: 'directions_car',
                    color: '#34495e'
                },
                {
                    id: 3,
                    name: 'Ônibus',
                    icon: 'directions_bus',
                    color: '#e74c3c'
                },
                {
                    id: 4,
                    name: 'Avião',
                    icon: 'flight',
                    color: '#3498db'
                }
			],
			init: function (travel) {
                this._reset_travel();

                // caso seja passado o obj "travel"
                // associa ao modelo para edição
                if(travel){
                    travel.date = this._convert_date(travel.date);
                    this.travel = travel;
                }
			},
            // Converte data string para date
            _convert_date: function(date_obj) {
                var date = {
                    from: new Date(date_obj.from),
                    to: new Date(date_obj.to)
                };
                return date;
            },
            // Reinicia o objeto para um novo cadastro
            _reset_travel: function() {
                this.travel = {
                    id: undefined,
                    name: undefined,
                    origin_id: undefined,
                    destination_id: undefined,
                    date: undefined,
                    vehicle_type_id: undefined,
                    travelers: []
                };
            },
            // Adiciona viajante a lista
			add_traveler: function (traveler) {
				this.travel.travelers.push(traveler);
			},
            // Remove viajante da lista
			remove_traveler: function (traveler) {
				var index = this.travel.travelers.indexOf(traveler);
				this.travel.travelers.splice(index, 1);
			},
            // Cria viagem ou salva alterações
            save: function(travel, callback) {
                var self = this;
                var creation = false;
                // Caso nao possua um id (como na criação)
                // Gera um id unico apartir do timestamp
                if(!travel.id){
                    creation = true;
                }
                travel.id = travel.id || new Date().getUTCMilliseconds();
                travelsApi.put(travel.id, travel)
                    .then(function(result){
                        self._reset_travel();

                        // Se acabou de criar, coloca na lista de viagens
                        if(creation){
                            travelsListService.travels.push(result);
                        }

                        // Se passou o callback, executa
                        if(callback) {
                            callback();
                        }
                    });
			}
		};
	});