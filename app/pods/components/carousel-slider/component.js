import Ember from 'ember';

export default Ember.Component.extend({

  classNames: 'Carousel-slider',

  selectedIndex: 0,

  currentSlide: Ember.computed(function() {
  }),

  displayShift: Ember.computed('', function() {
  }),

  actions: {
    selectSlide() {
    }
  }

});
