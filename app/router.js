
define(['jquery', 'marionette', 'backbone', 'config', 'sweetAlert'],
  function($, Marionette, Backbone, config, Swal) {

  'use strict';
  return Marionette.AppRouter.extend({
    history: [],
    appRoutes: {

      '*route(/:page)': 'home',
    },

    // initialize: function(opt) {
    //
    // },

    // execute: function(callback, args) {
    //   var _this= this;
    //
    //   var route = Backbone.history.fragment;
    //
    //   if ((route != '') && (route != '#')){
    //     var allowed = this.checkRoute();
    //     if (!allowed) {
    //       return false;
    //     }
    //   }
    //   this.history.push(Backbone.history.fragment);
    // },

    // onRoute: function(url, patern, params) {
    //
    // },

  });
});
