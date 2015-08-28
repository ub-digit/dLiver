import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function() {
    var that = this;
    // Used to load data that will not be changed during runtime
    return Ember.RSVP.hash({
      roles: that.store.find('role')
    });
  },
  setupController: function(controller, model) {
    // To be able to access from specific controllers
    controller.set('model', {});
    controller.set('roleSelection', model.roles);
  },
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
