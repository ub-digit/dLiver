import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),

  tagName: 'li',
  
  addFacetToQueryAction: 'addFacetToQuery',
  removeFacetFromQuery: 'removeFacetFromQuery',

  isActive: Ember.computed('facetQueries', function(){
   return this.get('facetQueries').contains(this.get('facetQueryKey'));
  }),

  facetQueryKey: Ember.computed('facetField', 'facetValue', function(){
    return this.get('facetField') + ":\"" + this.get('facetValue.label') + "\"";
  }),

  facetValueTranslation: Ember.computed('facetField', 'facetValue', function(){
    // Check if translation exists, return original value if it doesn't
    var translation = this.get('i18n').t('facet.' + this.get('facetField') + 'Values.' + this.get('facetValue.label'));
    if (translation.toString().indexOf("Missing translation") != 0){
      return translation
    } else {
      return this.get('facetValue.label')
    }
  }), 

  actions: {
    addFacetToQuery: function(facetLabel){
      this.sendAction('addFacetToQueryAction', facetLabel);
    },
    removeFacetFromQuery: function(facetLabel){
      this.sendAction('removeFacetFromQuery', facetLabel);
    }
  }
});
