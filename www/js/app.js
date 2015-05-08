// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })


            .state('app.home', {
                url: "/home",
                views: {
                    'menuContent': {
                        templateUrl: "templates/home.html",
                        controller: 'HomeCtrl'
                    }
                }
            })

            .state('app.dashboard', {
                url: "/dashboard",
                views: {
                    'menuContent': {
                        templateUrl: "templates/dashboard.html"
                    }
                }
            })
            .state('app.invoices', {
                url: "/invoices",
                views: {
                    'menuContent': {
                        templateUrl: "templates/invoices.html",
                        controller: 'InvoicesCtrl'
                    }
                }
            })
            .state('app.invoice', {
                url: "/invoices/:invoiceId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/invoice.html",
                        controller: 'InvoiceCtrl'
                    }
                }
            })
            .state('app.addInvoice', {
                url: "/addInvoice",
                views: {
                    'menuContent': {
                        templateUrl: "templates/addInvoice.html"}
                }
            })

            .state('app.clients', {
                url: "/clients",
                views: {
                    'menuContent': {
                        templateUrl: "templates/clients.html",
                        controller: 'ClientsCtrl'
                    }
                }
            })
            .state('app.client', {
                url: "/clients/:clientId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/client.html",
                        controller: 'ClientCtrl'
                    }
                }
            })

            .state('app.addClient', {
                url: "/addClient",
                views: {
                    'menuContent': {
                        templateUrl: "templates/addClient.html"}
                }
            })
            .state('app.about', {
                url: "/about",
                views: {
                    'menuContent': {
                        templateUrl: "templates/about.html"}
                }
            })
            .state('app.changecity', {
                url: "/city",
                views: {
                    'menuContent': {
                        templateUrl: "templates/cities.html",
                        controller: 'LocationsCtrl'
                    }
                }
            })
            .state('app.settings', {
                url: '/settings',
                views: {
                    'tab-settings': {
                        templateUrl: 'templates/settings.html',
                        controller: 'SettingsCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });