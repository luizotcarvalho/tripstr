/*global describe, it, beforeEach, inject, expect, angular*/
(function () {
    'use strict';

    describe('travelListDirective', function () {
        var service, localStorageService, $timeout;
        var travels = [
            {
                id: 1,
                name: 'Viagem 1',
                origin: 'Ubatuba, SP, Brasil',
                destination: 'Varginha, MG, Brasil',
                date: {
                    from: new Date('2017-02-16 16:33'),
                    to: new Date('2017-02-16 16:33')
                },
                vehicle_type_id: 4,
                travelers: [{
                    avatar: 'img.png',
                    name: 'Pedro',
                    phone: '12982657438'
                }]
            },
            {
                id: 2,
                name: 'Viagem 2',
                origin: 'Ubatuba, SP, Brasil',
                destination: 'Varginha, MG, Brasil',
                date: {
                    from: new Date('2017-02-16 16:33'),
                    to: new Date('2017-02-16 16:33')
                },
                vehicle_type_id: 4,
                travelers: [{
                    avatar: 'img.png',
                    name: 'Pedro',
                    phone: '12982657438'
                }]
            }
        ];

        beforeEach(module('Tripstr'));
        beforeEach(inject(function(_travelsListService_, _localStorageService_, _$timeout_){
            service = _travelsListService_;
            localStorageService = _localStorageService_;
            $timeout = _$timeout_;

            spyOn(localStorageService, 'keys').and.callFake(function () {
                return [1, 2];
            });

            spyOn(localStorageService, 'get').and.callFake(function () {
                return travels;
            });
        }));

        it('deve carregar viagens', function () {
            service.init();
            $timeout.flush();
            expect(service.travels.length).toEqual(travels.length);
        });

        it('deve remover viagem', function () {
            service.init();
            $timeout.flush();
            var travel_to_remove = travels[0];
            service.remove(travel_to_remove);
            $timeout.flush();
            expect(service.travels.length).toEqual(1);
        });
    });
}());
