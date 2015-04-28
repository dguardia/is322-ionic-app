angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })

    .controller('PlaylistsCtrl', function ($scope) {
        $scope.playlists = [
            {title: 'Reggae', id: 1},
            {title: 'Chill', id: 2},
            {title: 'Dubstep', id: 3},
            {title: 'Indie', id: 4},
            {title: 'Rap', id: 5},
            {title: 'Cowbell', id: 6}
        ];
    })

    .controller('PlaylistCtrl', function ($scope, $stateParams) {
    })

    .controller('InvoicesCtrl', function ($scope) {
        $scope.invoices = [
            {title: 'Invoice 1', id: 1},
            {title: 'Invoice 2', id: 2},
            {title: 'Invoice 3', id: 3},
            {title: 'Invoice 4', id: 4},
            {title: 'Invoice 5', id: 5},
            {title: 'Invoice 6', id: 6}
        ]
    })
    .controller('InvoiceCtrl', function ($scope, $stateParams) {
    })
    .controller('ClientsCtrl', function ($scope) {
        $scope.clients = [
            {title: 'Client 1', id: 1},
            {title: 'Client 2', id: 2},
            {title: 'Client 3', id: 3},
            {title: 'Client 4', id: 4},
            {title: 'Client 5', id: 5},
            {title: 'Client 6', id: 6}
        ]
    })
    .controller('ClientCtrl', function ($scope, $stateParams) {
    });