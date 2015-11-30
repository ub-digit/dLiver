import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),

  tagName: 'li',

	classNameBindings: ['visibilityClass'],
	
	visibilityClass: Ember.computed('facetValue.visibility_class', function(x) {
		return this.get('facetValue.visibility_class');
	}),

  addFacetToQueryAction: 'addFacetToQuery',
  removeFacetFromQuery: 'removeFacetFromQuery',

  isActive: Ember.computed('facetQueries', function(){
   return this.get('facetQueries').contains(this.get('facetQueryKey'));
  }),

  facetQueryKey: Ember.computed('facetField', 'facetValue', function(){
    return this.get('facetField') + ":\"" + this.get('facetValue.label') + "\"";
  }),

  facetValueTranslation: Ember.computed('facetField', 'facetValue', function(){

    var maxChars = 30;

    // Check if translation exists, return original value if it doesn't
    var translation = this.get('i18n').t('facet.' + this.get('facetField') + 'Values.' + this.get('facetValue.label')).toString();

    if (translation.indexOf("Missing translation") === 0){
      translation = this.get('facetValue.label')
    }

    if (translation.length > maxChars) {
      return translation.substr(0, maxChars) + '...';
    } else {
      return translation;
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
