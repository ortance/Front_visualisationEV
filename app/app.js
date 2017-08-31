define([
  'marionette',
  'lyt-rootview',
  'router',
  'controller',
  'sweetAlert',
  'config',
  'jquery',
  'backbone',
  ],

function( Marionette, LytRootView, Router, Controller,Swal,config, $, Backbone) {

    var app = {};
    Backbone.Marionette.Renderer.render = function(template, data) {
      if (!JST[template]) throw 'Template \'' + template + '\' not found!';
      return JST[template](data);
  };

  app = new Marionette.Application();
  app.on('start', function() {
    app.rootView = new LytRootView();
    app.controller = new Controller();
    app.router = new Router({controller: app.controller});
    app.rootView.render();
    Backbone.history.start();
  });

  window.app = app;
  return app;


});
