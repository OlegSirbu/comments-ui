import angular from 'angular';

import 'angular-ui-router';
import 'angular-sanitize';

import Home from './home';
import appComponent from './application.component';

import './app.scss';

angular
  .module('synopsis', ['ui.router', 'ngSanitize', Home])
  .config(($locationProvider) => {
    "ngInject";  
    $locationProvider.html5Mode(true);
  })
  .config(($urlRouterProvider) => {
    "ngInject";
    $urlRouterProvider.otherwise('/');
  })
  .component('app', appComponent);

angular
  .element(document)
  .ready(() => angular.bootstrap(document, ['synopsis']));

