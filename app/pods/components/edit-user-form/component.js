import Ember from 'ember';

export default Ember.Component.extend({
  user: null,

  actions: {
    save() {
      console.log('Save was clicked!');
    }
  }
});
