import Ember from 'ember';

export default Ember.Controller.extend({
  isOpen: true,

  actions: {
    toggleIsOpen() {
      this.toggleProperty('isOpen');
    }
  }
});
