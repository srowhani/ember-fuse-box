/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    sassOptions: {
      includePaths: [
        'bower_components/materialize/sass'
      ]
    },
    snippetSearchPaths: [
      'tests/dummy'
    ]
  })
  app.import(app.bowerDirectory + '/materialize/dist/js/materialize.js');
  return app.toTree();
};
