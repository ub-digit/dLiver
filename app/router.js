import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('index', {path: '/'});
  this.resource('login');
  this.resource('users', function(){
    this.route('index', {path: '/'}, function(){
      this.route('new');
      this.route('edit', {path: '/edit/:id'});
    });
  });
  this.resource('package', function() {
  	this.route('index');
  	this.route('show', {path: '/:name'});
  });
});

export default Router;
