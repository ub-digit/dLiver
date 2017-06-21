import Ember from 'ember';
import IndicatesLoading from 'd-liver-ember/mixins/indicates-loading';
import ResetsScroll from 'd-liver-ember/mixins/resets-scroll';

export default Ember.Route.extend(IndicatesLoading, ResetsScroll, {
  queryParams: {
	  query: { refreshModel: true },
    page: { refreshModel: true },
    facet_queries: {refreshModel: true}
  },

  model: function(params) {
    return this.store.find('mets_package', params);
  }
});
