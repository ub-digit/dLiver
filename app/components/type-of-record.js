import Ember from 'ember';

export default Ember.Component.extend({

  i18n: Ember.inject.service(),

  tagName: 'span',
  iconClass: Ember.computed('typeOfRecord', function(){
    switch (this.get('typeOfRecord')){
      case "book":
        return "fa-book";
      case "theses":
        return "fa-graduation-cap";
      case "text":
        return "fa-bold";
      case "manuscript":
        return "fa-sticky-note-o";
      case "periodical":
        return "fa-newspaper-o";
      case "letter":
        return "fa-envelope-o";
      case "document":
        return "fa-file-text-o";
      default:
        return "fa-question";
    }
  }),

  translatedTitle: Ember.computed('typeOfRecord', function() {

    var translation = this.get('i18n').t('facet.type_of_recordValues.' + this.get('typeOfRecord') );

    if (translation.toString().indexOf("Missing translation") != 0){
      return translation
    } else {
      return this.get('typeOfRecord')
    }

    return translation;

  })

});
