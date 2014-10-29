'use strict';

var App = angular.module('clientApp', ['ngResource', 'App.filters', 'App.services']);

App.controller('ClientCtrl', ['$scope', 'utils',
    function($scope) {
        $scope.selectedDate = [];
        $scope.dateList = [{
            id: 1,
            name: 'October'
        }, {
            id: 2,
            name: 'November'
        }, {
            id: 3,
            name: 'December'
        }];

        $scope.clients = [{
            name: 'Suikoden 2',
            designation: 'RPG',
            company: $scope.dateList[0]
        }, {
            name: 'Radiata Stories',
            designation: 'RPG',
            company: $scope.dateList[1]
        }, {
            name: 'Uncharted 3',
            designation: 'Action',
            company: $scope.dateList[0]
        }, {
            name: 'Assassin\'s Creed 2',
            designation: 'Action',
            company: $scope.dateList[2]
        }, {
            name: 'Brave Fencer Musash',
            designation: 'RPG',
            company: $scope.dateList[2]
        }];

        $scope.setSelectedClient = function() {
            var id = this.dates.id;
            if (_.contains($scope.selectedDate, id)) {
                $scope.selectedDate = _.without($scope.selectedDate, id);
            } else {
                $scope.selectedDate.push(id);
            }
            return false;
        };

        // $scope.checkAll = function() {
        //     $scope.selectedDate = _.pluck($scope.dateList, 'id');
        // };
    }
]);

angular.module('App.filters', [])
    .filter('dateFilter', function() {
        return function(clients, selectedDate) {
            if (!angular.isUndefined(clients) && !angular.isUndefined(selectedDate) && selectedDate.length > 0) {
                var tempClients = [];
                angular.forEach(selectedDate, function(id) {
                    angular.forEach(clients, function(client) {

                        if (angular.equals(client.company.id, id))
                            tempClients.push(client);
                    });
                });
                return tempClients;
            } else {
                return clients;
            }
        };
    });

angular.module('App.services', [])
    .factory('utils', function() {
        return {
            contains: function() {
                //Do something here
            },
            without: function() {
                //Do something else here
            },
            pluck: function() {

            }
        }
    });
