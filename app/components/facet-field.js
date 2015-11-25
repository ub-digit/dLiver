import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),

  facetValues: Ember.computed('facetField', 'facetCounts', function(){
    return this.get('facetCounts.facet_fields')[this.get('facetField')];
  }),

  addFacetToQueryAction: 'addFacetToQuery',
  removeFacetFromQueryAction: 'removeFacetFromQuery',

  facetFieldTranslation: Ember.computed('facetField', function(){
    return this.get('i18n').t('facet.' + this.get('facetField'));
  }),

  actions: {
    addFacetToQuery: function(facetLabel){
      this.sendAction('addFacetToQueryAction', this.get('facetField'), facetLabel);
    },

    removeFacetFromQuery: function(facetLabel){
      this.sendAction('removeFacetFromQueryAction', this.get('facetField'), facetLabel);
    }
  }
});
