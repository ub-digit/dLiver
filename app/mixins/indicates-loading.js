import Ember from 'ember';

export default Ember.Mixin.create({

  beforeModel: function() {

    Ember.$('body').addClass('loading');

  },

  afterModel: function() {

    Ember.$('body').removeClass('loading');

  }
});
