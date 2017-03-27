import Ember from 'ember';

export default Ember.Controller.extend({
  isFrozen: false,
  
  actions: {
    toggleIsFrozen() {
      this.toggleProperty('isFrozen');
    }
  }
});
