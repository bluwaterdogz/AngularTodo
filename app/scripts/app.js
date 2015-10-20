'use strict';

/**
 * @ngdoc overview
 * @name angularTodoApp
 * @description
 * # angularTodoApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angularTodoApp', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ngSanitize',
  ])

  .config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');

      $stateProvider

          // HOME STATES AND NESTED VIEWS ========================================
          .state('home', {
            url: '/home',
            templateUrl: 'views/main.html'
          })

          // TODO PAGE ===============================
          .state('todos', {
            url:'/todos',
            views:{
              "":{templateUrl: 'views/todos.html'},
              'todoList@todos':{
                templateUrl: 'views/todolist.html'
              }
            }
          })

  }]);
