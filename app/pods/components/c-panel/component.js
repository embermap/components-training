import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  onClickTitle: null,

  actions: {
    toggleIsOpen() {
      if (this.get('onClickTitle')) {
        this.get('onClickTitle')();
      } else {
        this.toggleProperty('isOpen');
      }
    }
  }
});
