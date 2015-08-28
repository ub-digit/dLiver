import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {}; // Data to include in create form
  },
  actions: {
    createUser: function(model) {
      var that = this; // To be used in nested functions

      //XXX: Bogus use to set the role to ADMIN:
      model.role = 'ADMIN';
      this.store.save('user', model).then(
        // Success handler
        function() {
          that.send('refreshModel'); // Refresh children of current model
          that.transitionTo('users.index');
        },
        // Failure handler
        function(errorObject) {
          that.controller.set('error', errorObject.error);
        }
      );
    }
  }
});
