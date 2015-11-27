import Ember from 'ember';
import IndicatesLoading from 'd-liver-ember/mixins/indicates-loading';

export default Ember.Route.extend(IndicatesLoading, {
  queryParams: {
	  query: { refreshModel: true },
    facet_queries: {refreshModel: true}
  },
  model: function(params) {
    return this.store.find('mets_package', params);
  }
});
