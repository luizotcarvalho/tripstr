/*global angular */

/**
* Api que grava e busca itens no localStorage (imitando um back-end) utilizando o
* localStorageService (https://github.com/grevory/angular-local-storage)
*
* Utilizo $q para criar promessas e fazer com o localStorageService se comporte um pouco mais como o $http
*/

angular = require('angular');

angular.module('Tripstr')
.factory('travelsApi', function ($q, localStorageService) {
    'use strict';

    return {
        delete: function (id) {
            var deferred = $q.defer();
            deferred.resolve(localStorageService.remove(id));
            return deferred.promise;
        },
        get: function (id) {
            var deferred = $q.defer();
            if(id){
                deferred.resolve(localStorageService.get(id));
            }
            else {
                var ids = localStorageService.keys();
                var itens = [];
                for (var i = 0; i < ids.length; i++) {
                    itens.push(localStorageService.get(ids[i]));
                }
                deferred.resolve(itens);
            }
            return deferred.promise;
        },
        put: function (id, travel) {
            var deferred = $q.defer();
            localStorageService.set(id, travel);
            deferred.resolve(travel);
            return deferred.promise;
        }
    };
});