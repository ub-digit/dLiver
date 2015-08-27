import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Controller.extend({
  needs: ['application'],

	source_url: Ember.computed('model.source', 'model.catalog_id', function(){
		if (this.get('model.source') === 'libris') {
			return ENV.APP.librisBaseUrl + this.get('model.catalog_id');
		} else {
			return null;
		}
	}),

	pdf_links: Ember.computed('model.file_groups', 'model.name', function(){
    var token =  this.container.lookup('simple-auth-session:main').get('secure.token');
		var links = [];
		var that = this;
		this.get('model.file_groups').forEach (function(fg){
			if (fg.name === 'pdf') {
				fg.files.forEach (function(f) {
					var url = ENV.APP.assetURL + '/' + that.get('model.name') + '/file/' + f.id + '?token=' + token;
					links.push(url);
				});
			}
		});
		return links;
	})
});
