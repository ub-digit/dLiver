import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Controller.extend({
  needs: ['application'],
  i18n: Ember.inject.service(),

	source_url: Ember.computed('model.source', 'model.catalog_id', function(){
		if (this.get('model.source') === 'libris') {
			return ENV.APP.librisBaseUrl + this.get('model.catalog_id');
		} else {
			return null;
		}
	}),

	pdf_links: Ember.computed('model.file_groups', 'model.name', function(){
    var token =  this.container.lookup('simple-auth-session:main').get('secure.token');
		var link_hash = sessionStorage.getItem('linkHash.'+this.get('model.name'));
		var links = [];
		var that = this;
		this.get('model.file_groups').forEach (function(fg){
			if (fg.name === 'pdf') {
				fg.files.forEach (function(f) {
					var url = ENV.APP.assetURL + '/' + that.get('model.name') + '/file/' + f.id + '?' +
						Ember.$.param({
							token: token,
							link_hash: link_hash
						});
					links.push(url);
				});
			}
		});
		return links;
	}),

  thumbnail: Ember.computed('model.name', function(){
    return ENV.APP.serviceURL + '/mets_packages/' + this.get('model.name') + '/thumbnail?width=300';
  }),

  translatedLanguage: Ember.computed('model.language', function() {

    var translation = this.get('i18n').t('facet.languageValues.' + this.get('model.language') );

    if (translation.toString().indexOf("Missing translation") != 0){
      return translation
    } else {
      return this.get('model.language')
    }

    return translation;

  }),

  hostOrigin: Ember.computed('model', function(){
    return location.origin;
  }),

	actions: {

		createDate: function(name, date) {
			var that = this;
			var link = {};
			link.package_name = name;
			link.expire_date = date;

			this.store.save('link', link).then(
		        function(response) {
	        	  that.send('refreshModel');
            },
	        	function(error) {
	        	}

			);
		},

    deleteDate: function(link) {
      var that = this;
      this.store.destroy('link', link.link_hash).then(
        function(response) {
          that.send('refreshModel');
        },
        function(error) {
        }
      );
    }

	}

});
