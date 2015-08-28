import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
		return this.store.find('link', params.linkHash);
	},
	setupController: function(controller, model) {
		sessionStorage.setItem('linkHash.'+model.package_name, model.link_hash);
		this.transitionTo('package.show', model.package_name);
	},
	actions: {
		error: function() {
			this.transitionTo('link.error');
		}
	}
});
