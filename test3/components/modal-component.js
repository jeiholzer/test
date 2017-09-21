export default {
  controller: Ctrl,
  templateUrl: 'test3/modal.html',
  require: '^stackable',
  bindings: {
    displayName: '=theName'
  }
};

/* @ngInject */
function Ctrl() {
  var self = this;
  // self.displayName = somename;
  //  self.showName = 'larry';
  self.doThis = function() {
    self.displayName = 'Ian';
  };
}
