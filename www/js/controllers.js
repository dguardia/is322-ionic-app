angular.module('starter.controllers', ['ionic'])
    .constant('FORECASTIO_KEY', '85f6f9db5b7ca3a4e6e3da0b66e111f8')

    .controller('HomeCtrl', function($scope, $state, Weather, DataStore) {
        //read default settings into scope
        console.log('inside home');
        $scope.city   =  DataStore.city;
        var latitude  =  DataStore.latitude;
        var longitude =  DataStore.longitude;

        //call getCurrentWeather method in factory ‘Weather’
        Weather.getCurrentWeather(latitude,longitude).then(function(resp) {
            $scope.current = resp.data;
            console.log('GOT CURRENT', $scope.current);
            //debugger;
        }, function(error) {
            alert('Unable to get current conditions');
            console.error(error);
        });

    })

    .controller('LocationsCtrl', function($scope,$state, Cities,DataStore) {
        $scope.cities = Cities.all();

        $scope.changeCity = function(cityId) {
            //get lat and longitude for seleted location
            var lat  = $scope.cities[cityId].lat; //latitude
            var lgn  = $scope.cities[cityId].lgn; //longitude
            var city = $scope.cities[cityId].name; //city name

            DataStore.setCity(city);
            DataStore.setLatitude(lat);
            DataStore.setLongitude(lgn);

            $state.go('app.home');
        }
    })
    .controller('SettingsCtrl', function($scope) {
        //manages app settings
    })

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

    .controller('SessionsCtrl', function($scope, Session) {
        $scope.sessions = Session.query();
    })

    .controller('SessionCtrl', function($scope, $stateParams, Session) {
        $scope.session = Session.get({sessionId: $stateParams.sessionId});
    })

    .controller('InvoicesCtrl', function ($scope) {
        $scope.invoices = [
            { name: "Stanley Brauer", id: 0 },
            { name: "Alla Kriz", id: 1 },
            { name: "Lili Sharkey", id: 2 },
            { name: "Johnette Siler", id: 3 },
            { name: "Virgilio Orr", id: 4 },
            { name: "Lavinia Towles", id: 5 },
            { name: "Juana Blansett", id: 6 },
            { name: "In Mccowen", id: 7 },
            { name: "Aline Nolley", id: 8 },
            { name: "Cassy Rhymer", id: 9 },
            { name: "Dagny Gilreath", id: 10 },
            { name: "Moira Mercier", id: 11 },
            { name: "Tabatha Herrin", id: 12 },
            { name: "Loris Berkowitz", id: 13 },
            { name: "Nicky Cipriani", id: 14 },
            { name: "Nicolette Hebb", id: 15 },
            { name: "Latina Ramos", id: 16 },
            { name: "Katheleen Landey", id: 17 },
            { name: "Felisa Rahn", id: 18 },
            { name: "Griselda Fenley", id: 19 },
            { name: "Jenee Carron", id: 20 },
            { name: "Adrian Mariscal", id: 21 },
            { name: "Sage Leu", id: 22 },
            { name: "So Mccloskey", id: 23 },
            { name: "Agustin Bondi", id: 24 },
            { name: "Joline Harries", id: 25 },
            { name: "Janise Starkes", id: 26 },
            { name: "Luella Dangelo", id: 27 },
            { name: "Zulema Anspach", id: 28 },
            { name: "Glen Jesus", id: 29 },
            { name: "Geoffrey Mcguinness", id: 30 },
            { name: "Adria Schoemaker", id: 31 },
            { name: "Imelda Helfrich", id: 32 },
            { name: "Shiloh Sam", id: 33 },
            { name: "Elin Leider", id: 34 },
            { name: "Shalanda Stegner", id: 35 },
            { name: "Jorge Dwight", id: 36 },
            { name: "Kenny Dieterich", id: 37 },
            { name: "Lyndon Hulen", id: 38 },
            { name: "Lacresha Selig", id: 39 },
            { name: "Bret Mellin", id: 40 },
            { name: "Beverlee Stiger", id: 41 },
            { name: "Leora Machin", id: 42 },
            { name: "Robin Mccroy", id: 43 },
            { name: "Deann Milholland", id: 44 },
            { name: "Meggan Lolley", id: 45 },
            { name: "Trent Giltner", id: 46 },
            { name: "Marti Torre", id: 47 },
            { name: "Nikki Odonoghue", id: 48 },
            { name: "Paige Windholz", id: 49 },
            { name: "Robert Smith", id: 50 }
        ];
    })

    .controller('InvoiceCtrl', function ($scope, $stateParams) {
    })
    .controller('ClientsCtrl', function ($scope) {
        $scope.data = {
            showDelete: false
        };

        $scope.edit = function(client) {
            alert('Edit Client: ' + client.id);
        };
        $scope.share = function(client) {
            alert('Share Client: ' + client.id);
        };

        $scope.moveClient = function(client, fromIndex, toIndex) {
            $scope.clients.splice(fromIndex, 1);
            $scope.clients.splice(toIndex, 0, client);
        };

        $scope.onClientDelete = function(client) {
            $scope.clients.splice($scope.clients.indexOf(client), 1);
        };

        $scope.clients = [
            { name: "Stanley Brauer", id: 0 },
            { name: "Alla Kriz", id: 1 },
            { name: "Lili Sharkey", id: 2 },
            { name: "Johnette Siler", id: 3 },
            { name: "Virgilio Orr", id: 4 },
            { name: "Lavinia Towles", id: 5 },
            { name: "Juana Blansett", id: 6 },
            { name: "In Mccowen", id: 7 },
            { name: "Aline Nolley", id: 8 },
            { name: "Cassy Rhymer", id: 9 },
            { name: "Dagny Gilreath", id: 10 },
            { name: "Moira Mercier", id: 11 },
            { name: "Tabatha Herrin", id: 12 },
            { name: "Loris Berkowitz", id: 13 },
            { name: "Nicky Cipriani", id: 14 },
            { name: "Nicolette Hebb", id: 15 },
            { name: "Latina Ramos", id: 16 },
            { name: "Katheleen Landey", id: 17 },
            { name: "Felisa Rahn", id: 18 },
            { name: "Griselda Fenley", id: 19 },
            { name: "Jenee Carron", id: 20 },
            { name: "Adrian Mariscal", id: 21 },
            { name: "Sage Leu", id: 22 },
            { name: "So Mccloskey", id: 23 },
            { name: "Agustin Bondi", id: 24 },
            { name: "Joline Harries", id: 25 },
            { name: "Janise Starkes", id: 26 },
            { name: "Luella Dangelo", id: 27 },
            { name: "Zulema Anspach", id: 28 },
            { name: "Glen Jesus", id: 29 },
            { name: "Geoffrey Mcguinness", id: 30 },
            { name: "Adria Schoemaker", id: 31 },
            { name: "Imelda Helfrich", id: 32 },
            { name: "Shiloh Sam", id: 33 },
            { name: "Elin Leider", id: 34 },
            { name: "Shalanda Stegner", id: 35 },
            { name: "Jorge Dwight", id: 36 },
            { name: "Kenny Dieterich", id: 37 },
            { name: "Lyndon Hulen", id: 38 },
            { name: "Lacresha Selig", id: 39 },
            { name: "Bret Mellin", id: 40 },
            { name: "Beverlee Stiger", id: 41 },
            { name: "Leora Machin", id: 42 },
            { name: "Robin Mccroy", id: 43 },
            { name: "Deann Milholland", id: 44 },
            { name: "Meggan Lolley", id: 45 },
            { name: "Trent Giltner", id: 46 },
            { name: "Marti Torre", id: 47 },
            { name: "Nikki Odonoghue", id: 48 },
            { name: "Paige Windholz", id: 49 },
            { name: "Robert Smith", id: 50 }
        ];
    })
    .controller('ClientCtrl', function ($scope, $stateParams) {
        var id = $stateParams.clientId;
        console.log(id);
        //for (var i = 0; i < $scope.item.length; i++) {
        //    if ($scope.clients[i].id === id) {
        //        $scope.clients = $scope.clients[i];
        //        break;
        //    }
        //}

    });