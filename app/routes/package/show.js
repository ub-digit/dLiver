import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
		var linkHash = sessionStorage.getItem('linkHash.'+params.name);
    return this.store.find('mets_package', params.name, {link_hash: linkHash});
  }
});
