/*global describe, it, beforeEach, inject, expect, angular*/
(function () {
    'use strict';

    describe('travelFormService', function () {
        var service, travelsApi, localStorageService, $timeout, travelsListService;
        var travel = {
            name: 'Viagem',
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
        };
        var traveler = travel.travelers[0];


        beforeEach(module('Tripstr'));
        beforeEach(inject(function(_travelFormService_, _localStorageService_, _$timeout_, _travelsListService_){
            service = _travelFormService_;
            localStorageService = _localStorageService_;
            travelsListService = _travelsListService_;
            $timeout = _$timeout_;

            spyOn(localStorageService, 'set').and.callFake(function () {
                return travel;
            });
        }));

        it('deve iniciar o objeto travel', function() {
            expect(service.travel.travelers).toBeUndefined();
            service.init();
            expect(service.travel.travelers).toBeDefined();
        });

        it('deve adicionar integrante na viagem', function() {
            service.init();
            service.add_traveler(traveler);
            expect(service.travel.travelers.length).toEqual(1);
            expect(service.travel.travelers[0]).toEqual(traveler);
        });

        it('deve remover integrante na viagem', function () {
            service.init();
            service.add_traveler(traveler);
            service.remove_traveler(traveler);
            expect(service.travel.travelers.length).toEqual(0);
        });

        it('deve criar viagem', function () {
            service.init();
            service.save(travel);
            $timeout.flush();
            expect(travelsListService.travels.length).toEqual(1);
            expect(travelsListService.travels[0]).toEqual(travel);
            expect(localStorageService.set).toHaveBeenCalled();
        });

        it('deve editar viagem', function () {
            travel.id = 1;
            service.init(travel);
            service.save(travel);
            $timeout.flush();
            expect(localStorageService.set).toHaveBeenCalledWith(1, travel);
        });
    });
}());
