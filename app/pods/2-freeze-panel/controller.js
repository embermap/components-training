import Ember from 'ember';

export default Ember.Controller.extend({
  isFrozen: false,

  actions: {
    toggleIsFrozen() {
      this.toggleProperty('isFrozen');
    },

    openPanel() {
      if (!this.get('isFrozen')) {
        this.toggleProperty('isOpen');
      }
    }
  }
});
