export default {
  controller: Ctrl,
  templateUrl: 'test3/landing-page.html'
};

/* @ngInject */
function Ctrl() {
  var self = this;
  self.showTheModal = false;
  self.personName = '';
}
