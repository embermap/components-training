import Ember from 'ember';

export default Ember.Component.extend({

  classNames: 'Carousel-slider',

  selectedIndex: 0,

  currentSlide: Ember.computed('selectedIndex', function() {
    let i = this.get('selectedIndex');

    return this.get(`slides.${i}`);
  }),

  displayShift: Ember.computed('selectedIndex', function() {
    let i = this.get('selectedIndex');
    let width = 80; // from css
    let margin = 3; // from css
    let offset = 15.5;

    let shifted = ((width + margin) * -i) + offset;

    return `transform: translateX(${shifted}%)`;
  }),

  actions: {
    selectSlide(index) {
      this.set('selectedIndex', index);
    }
  }

});
