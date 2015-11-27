import Ember from 'ember';

export default Ember.Component.extend({

i18n: Ember.inject.service(),

tagName: 'li',

translatedLabel: Ember.computed('label', function() {

  var translation = this.get('i18n').t('post.' + this.get('label') );

  if (translation.toString().indexOf("Missing translation") != 0){
    return translation
  } else {
    return this.get('label')
  }

  return translation;

})

});
