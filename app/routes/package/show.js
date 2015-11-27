import Ember from 'ember';
import IndicatesLoading from 'd-liver-ember/mixins/indicates-loading';

export default Ember.Route.extend(IndicatesLoading, {
  model: function(params) {
		var linkHash = sessionStorage.getItem('linkHash.'+params.name);
    return this.store.find('mets_package', params.name, {link_hash: linkHash});
  },
  actions: {
    refreshModel: function() {
      this.refresh();
    }
  }
});
