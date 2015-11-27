import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import IndicatesLoading from 'd-liver-ember/mixins/indicates-loading';

export default Ember.Route.extend(ApplicationRouteMixin, IndicatesLoading, {
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
