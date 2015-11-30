import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['facet-query-item'],

  i18n: Ember.inject.service(),

  facetField: Ember.computed('facetQuery', function(){
    return this.get('facetQuery').split(':')[0];
  }),

  translatedFacetField: Ember.computed('facetField', function(){
    return this.get('i18n').t('facet.' + this.get('facetField'));
  }),

  facetValue: Ember.computed('facetQuery', 'facetField', function(){
		var facetQuery = this.get('facetQuery');
		var facetField = this.get('facetField');
		// Extract rest of field as facetValue, ignoring citations. This prevents ":" from being
		// an issue which would have been the case with splitting.
		var facetValue = facetQuery.substring(facetField.length+1).replace(/^"(.*)"$/, '$1');
		return facetValue;
  }),

  translatedFacetValue: Ember.computed('facetValue', function(){
    // Check if translation exists, return original value if it doesn't
    var translation = this.get('i18n').t('facet.' + this.get('facetField') + 'Values.' + this.get('facetValue')).toString();

    if (translation.indexOf("Missing translation") === 0){
      translation = this.get('facetValue');
    }
    return translation.trim(); 
  }),

  removeFacetFromQueryAction: 'removeFacetFromQuery',
  actions: {
    
    removeFacetFromQuery: function(){
      this.sendAction('removeFacetFromQueryAction', this.get('facetField'), this.get('facetValue'));
    }
  }
});
