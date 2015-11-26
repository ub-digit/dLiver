import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['package-item', 'clearfix'],

  highlights: Ember.computed('package.highlights', function(){
    var highlights = Ember.A([]);
  }),

  titleFull: Ember.computed('package.title', 'ordinals', function(){
    return this.get('package.title') + " " + this.get('ordinals');
  }),

  ordinals: Ember.computed('package.ordinal_1', 'package.ordinal_2', 'package.ordinal_3', function(){
    var array = [this.get('package.ordinal_1'), this.get('package.ordinal_2'), this.get('package.ordinal_3')]

    return array.compact().join(' ');
  })
});
