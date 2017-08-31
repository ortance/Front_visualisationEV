define([
  'marionette',
  './base/home/lyt-home',

],function(
  Marionette,
  LytHome
  ) {
  'use strict';

  return Marionette.Object.extend({

    initialize: function() {
      var app = window.app;

      this.rgMain = app.rootView.rgMain;
    },

    home: function() {
      Backbone.history.navigate('');
      this.rgMain.show(new LytHome());
    },


    });
});
