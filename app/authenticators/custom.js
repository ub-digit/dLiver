import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import ENV from '../config/environment';

export default Base.extend({
  restore: function(properties) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
        Ember.$.ajax({
      type: 'GET',
      url: ENV.APP.authenticationBaseURL+'/'+properties.token
        }).then(function() {
      resolve(properties);
        }, function() {
      reject();
        });
    });
  },
  authenticate: function(credentials) {
    Ember.$('body').addClass("loading");
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        type: 'POST',
        url: ENV.APP.authenticationBaseURL,
        data: JSON.stringify({
          username: credentials.identification,
          password: credentials.password
        }),
        contentType: 'application/json'
      }).then(function(response) {
        var token = response.access_token;
        Ember.run(function() {
          resolve({
            authenticated: true,
            token: token,
            name: response.user.name,
            username: response.user.username,
            userid: response.user.id,
          });
        });
      },
      function(xhr, status, error) {
        var response = xhr.responseText;
        Ember.run(function() {
          //reject(xhr.responseJSON.error);
          reject(response);
        });
      });
    });
  },
  invalidate: function() {
    return new Ember.RSVP.Promise(function(resolve) {
      resolve();
    });
  }
});


// app/authenticators/custom.js
/*
import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import ENV from '../config/environment';

export default Base.extend({
    tokenEndpoint: 'http://localhost:3000/session',
    restore: function(data) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            if (!Ember.isEmpty(data.token)) {
                resolve(data);
            } else {
                reject();
            }
        });
    },

    authenticate: function(options) {
        return new Ember.RSVP.Promise((resolve, reject) => {
          console.log('authenticate...');
            Ember.$.ajax({
                url: this.tokenEndpoint,
                type: 'POST',
                data: JSON.stringify({
                    username: options.identification,
                    password: options.password
                }),
                contentType: 'application/json;charset=utf-8',
                dataType: 'json'
            }).then(function(response) {
                console.log('heyooo');
                Ember.run(function() {
                    resolve({
                        token: response.id_token
                    });
                });
            }, function(xhr, status, error) {
                var response = xhr.responseText;
                Ember.run(function() {
                    reject(response);
                });
            });
        });
    },

    invalidate: function() {
        console.log('invalidate...');
        return Ember.RSVP.resolve();
    }
});
*/
