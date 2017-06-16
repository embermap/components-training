import Ember from 'ember';

export default Ember.Component.extend({
  isLoading: null,
  weather: null,
  zip: null,

  actions: {
    loadWeather(zip) {
      if (zip.length === 5) {
        this.set('isLoading', true);
        Ember.$.get('/weather')
        .then((response) => {
          this.set('weather', response);
          this.set('isLoading', false);
        })
      }
    }
  }

});
