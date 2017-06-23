/*!
 * Example component module.
 *
 * Copyright (c) 2014-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Manu Sporny
 */
import angular from 'angular';
import * as bedrock from 'bedrock-angular';
import ModalComponent from './modal-component.js';
import SecondComponent from './second-component.js';

var module = angular.module('test1-module', ['bedrock.modal']);

bedrock.setRootModule(module);

module.component('brModalComp',ModalComponent);
module.component('brSecondComp',SecondComponent);

/* @ngInject */
module.config(function($routeProvider) {
  $routeProvider.when('/', {
    title: 'Joel Test One',
    template: '<br-modal-comp></br-modal-comp>'
  });
});
