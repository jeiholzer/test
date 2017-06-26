export default {
  controller: Ctrl,
  templateUrl: 'test3/modal.html',
  require: '^stackable'
};

/* @ngInject */
function Ctrl() {
  var self = this;
  self.showName = 'how do I set this?';
}
