/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'd-liver-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    'simple-auth': {
      'crossOriginWhitelist': ['http://localhost:3000/session']
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      defaultLocale: "sv",
      librisBaseUrl: "http://libris.kb.se/bib/"
    },
    i18n: {
      defaultLocale: "sv"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.contentSecurityPolicyHeader = 'Disabled-Content-Security-Policy';
    ENV.APP.serviceURL = process.env.BACKEND_URL + '/v1'; 
    ENV.APP.assetURL = process.env.BACKEND_URL + '/assets'
    ENV.APP.authenticationBaseURL = process.env.BACKEND_URL + '/session';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'lab') {
    ENV.contentSecurityPolicyHeader = 'Disabled-Content-Security-Policy';
    ENV.APP.serviceURL = process.env.BACKEND_URL + '/v1'; 
    ENV.APP.assetURL = process.env.BACKEND_URL + '/assets'
    ENV.APP.authenticationBaseURL = process.env.BACKEND_URL + '/session';

    //ENV.APP.serviceURL = 'http://dliver-server-lab.ub.gu.se/v1';
    //ENV.APP.assetURL = 'https://dliver-server-lab.ub.gu.se/assets';
    //ENV.APP.authenticationBaseURL = 'https://dliver-server-lab.ub.gu.se/session'
  }
  if (environment === 'staging') {
    ENV.contentSecurityPolicyHeader = 'Disabled-Content-Security-Policy';
    ENV.APP.serviceURL = process.env.BACKEND_URL + '/v1'; 
    ENV.APP.assetURL = process.env.BACKEND_URL + '/assets'
    ENV.APP.authenticationBaseURL = process.env.BACKEND_URL + '/session';
    //ENV.APP.serviceURL = 'https://dliver-server-staging.ub.gu.se/v1';
    //  ENV.APP.assetURL = 'https://dliver-server-staging.ub.gu.se/assets';
    //  ENV.APP.authenticationBaseURL = 'https://dliver-server-staging.ub.gu.se/session'
  }
  if (environment === 'production') {
    ENV.contentSecurityPolicyHeader = 'Disabled-Content-Security-Policy';
    ENV.APP.serviceURL = process.env.BACKEND_URL + '/v1'; 
    ENV.APP.assetURL = process.env.BACKEND_URL + '/assets'
    ENV.APP.authenticationBaseURL = process.env.BACKEND_URL + '/session';
    //ENV.APP.serviceURL = 'https://dliver-server.ub.gu.se/v1';
    //ENV.APP.assetURL = 'https://dliver-server.ub.gu.se/assets';
    //ENV.APP.authenticationBaseURL = 'https://dliver-server.ub.gu.se/session'
  }

  return ENV;
};
