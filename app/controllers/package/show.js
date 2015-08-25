import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Controller.extend({
	source_url: Ember.computed('model.source', 'model.catalog_id', function(){
		if (this.get('model.source') === 'libris') {
			return ENV.APP.librisBaseUrl + this.get('model.catalog_id');
		} else {
			return null;
		}
	})
});
