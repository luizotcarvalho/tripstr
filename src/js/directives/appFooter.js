angular.module('app')
    .directive('appFooter', function appFooter() {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: '/partials/footer.html'
        };

    });
