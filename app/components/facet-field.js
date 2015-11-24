import Ember from 'ember';

export default Ember.Component.extend({
  facetValues: Ember.computed('facetField', 'facetCounts', function(){
    return this.get('facetCounts.facet_fields')[this.get('facetField')];
  }),

  addFacetToQueryAction: 'addFacetToQuery',
  removeFacetFromQueryAction: 'removeFacetFromQuery',

  actions: {
    addFacetToQuery: function(facetLabel){
      this.sendAction('addFacetToQueryAction', this.get('facetField'), facetLabel);
    },

    removeFacetFromQuery: function(facetLabel){
      this.sendAction('removeFacetFromQueryAction', this.get('facetField'), facetLabel);
    }
  }
});
