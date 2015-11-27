import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),

  facetValues: Ember.computed('facetField', 'facetCounts', function(){
    return this.get('facetCounts.facet_fields')[this.get('facetField')];
  }),

  maxNumberToShow: 10,

  showAll: false,

  showToggleAllLink: Ember.computed.gt('maxNumberToShow', this.get('facetValues.length')),

  limitedFacetValues: Ember.computed('facetValues', 'showAll', function(){
    if (this.get('showAll')) {
      return this.get('facetValues');
    } else {
      return this.get('facetValues').slice(0, this.get('maxNumberToShow') - 1);
    }
  }),

  addFacetToQueryAction: 'addFacetToQuery',
  removeFacetFromQueryAction: 'removeFacetFromQuery',

  facetFieldTranslation: Ember.computed('facetField', function(){
    return this.get('i18n').t('facet.' + this.get('facetField'));
  }),

  toggleAllTranslation: Ember.computed('showAll', function(){
    if (this.get('showAll')) {
      return this.get('i18n').t('facet.showSome');
    } else {
      return this.get('i18n').t('facet.showAll');
    }

  }),

  actions: {
    addFacetToQuery: function(facetLabel){
      this.sendAction('addFacetToQueryAction', this.get('facetField'), facetLabel);
    },

    removeFacetFromQuery: function(facetLabel){
      this.sendAction('removeFacetFromQueryAction', this.get('facetField'), facetLabel);
    },
    toggleShowAll: function(){

      this.toggleProperty('showAll');

    }
  }
});
