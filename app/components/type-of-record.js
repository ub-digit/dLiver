import Ember from 'ember';

export default Ember.Component.extend({
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
  })
});
