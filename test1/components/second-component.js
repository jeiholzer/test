export default {
  controller: Ctrl,
  templateUrl: 'test1-package/second.html'
};

/* @ngInject */
function Ctrl() {
  var self = this;
  self.showMyModal = false;
}
