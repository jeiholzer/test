/*!
 * Example component module.
 *
 * Copyright (c) 2014-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Manu Sporny
 */
import angular from 'angular';
import * as bedrock from 'bedrock-angular';
import LandingPageComponent from './landing-page-component.js';
import modalComponent from './modal-component.js';

// var module = angular.module('test2-module', []); // content displays
var module = angular.module('test3-module', ['bedrock.modal']); // content is blank

bedrock.setRootModule(module);

module.component('landingPage',LandingPageComponent);
module.component('theModal',modalComponent);

/* @ngInject */
module.config(function($routeProvider) {
  $routeProvider.when('/', {
    title: 'Joel Test Three',
    template: '<landing-page></landing-page>'
  });
});
