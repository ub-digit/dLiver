import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['query', 'page', 'facet_queries'],
  query: "",
  page: 1,
  facet_queries: Ember.A([]),

  actions: {
    addFacetToQuery: function(facet, value){
      this.get('facet_queries').addObject({facet: facet, value: value});
    },

    removeFacetFromQuery: function(facet, value){
     var queryObject = this.get('facet_queries').filterBy('facet', facet).findBy('value', value);
     this.get('facet_queries').removeObject(queryObject);
    },

    clearSearch: function(){
      this.set('query', "");
      this.set('facet_queries', []);
      Ember.$('#searchInput').focus();
    }
  }
});
