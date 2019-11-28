import angular from 'angular';

import template from './home.page.html';
import './home.page.scss';

class HomePageController {
  static get $inject() {
    return ['$scope', '$element'];
  }

  constructor($scope, $element) {
    Object.assign(this, {
      $: $element[0],
      $scope,
    });

  }

  $onInit() { }

  $onDestroy() { }
}

class HomePage {
  constructor() {
    this.template = template;
    this.controller = HomePageController;
  }
}

angular.module('home-page', []).component('homePage', new HomePage());
