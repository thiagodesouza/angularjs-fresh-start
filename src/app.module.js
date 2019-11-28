import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-resource';
import 'angular-sanitize';
import 'ng-redux';

import './pages/home/home.page';

export const app = angular.module('app', [
  /* Dependencies */
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ngResource',
  'ngSanitize',
  'ngRedux',
  /* */
  /* Pages */
  'home-page',
]);
