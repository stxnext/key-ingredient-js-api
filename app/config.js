// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // JavaScript folders.
    libs: "../lib",

    // Libraries.
    jquery: "../node_modules/jquery/tmp/jquery",
    lodash: "../node_modules/lodash/lodash",
    backbone: "../node_modules/backbone/backbone",
    require: "../node_modules/requirejs/require"
  },

  shim: {
    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },

    // Backbone.LayoutManager depends on Backbone.
    //"plugins/backbone.layoutmanager": ["backbone"]
  }

});
