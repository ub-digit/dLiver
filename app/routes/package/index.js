import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
	query: { refreshModel: true }
  },
  model: function(params) {
    if (params.query.length < 4) {
      return [];
    }
    return this.store.find('mets_package', params);
  }
});
