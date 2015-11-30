import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),

  facetValues: Ember.computed('facetField', 'facetCounts', function(){
    return this.get('facetCounts.facet_fields')[this.get('facetField')];
  }),

  maxNumberToShow: 10,

  showAll: false,

  showToggleAllLink: Ember.computed('facetValues.length', 'maxNumberToShow', function() {

    return (this.get('facetValues.length') > this.get('maxNumberToShow'));

  }),

  limitedFacetValues: Ember.computed('facetValues', 'showAll', function(){
		var facetValues;
		var maxShow = this.get('maxNumberToShow');
    if (this.get('showAll')) {
      facetValues = this.get('facetValues').map(function(item) {
				Ember.set(item, 'visibility_class', 'show-value');
				return item;
			});
    } else {
      facetValues = this.get('facetValues').map(function(item,i) {
				if(i < maxShow) {
					Ember.set(item, 'visibility_class', 'show-value');
				} else {
					Ember.set(item, 'visibility_class', 'hide-value');
				}
				return item;
			});
    }
		return facetValues;
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
