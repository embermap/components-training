import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('1-c-panel');
  this.route('2-freeze-panel');
  this.route('3-side-effects');
  this.route('4-data-loading-components');
  this.route('5-composability');
});

export default Router;
