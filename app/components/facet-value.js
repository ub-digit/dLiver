import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  
  addFacetToQueryAction: 'addFacetToQuery',
  removeFacetFromQuery: 'removeFacetFromQuery',

  isActive: Ember.computed('facetQueries', function(){
   return this.get('facetQueries').contains(this.get('facetQueryKey'));
  }),

  facetQueryKey: Ember.computed('facetField', 'facetValue', function(){
    return this.get('facetField') + ":\"" + this.get('facetValue.label') + "\"";
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
