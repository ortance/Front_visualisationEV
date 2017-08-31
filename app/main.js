require.config({
  baseUrl: 'app',
  paths: {

    'tmp': './tmp',

    'app': 'app',
    'config': 'config',
    'router': 'router',
      'templates': '../build/templates',
    'controller': 'controller',
    'lyt-rootview': './base/rootview/lyt-rootview',
     'transition-region': './base/transition-region/transition-region',
      'googleLoaer': './vendors/google-maps-loader',

    /*==========  NS modules  ==========*/
    'ns_modules': 'ns_modules',
    'ns_filter': 'ns_modules/ns_filter',
    'ns_form': 'ns_modules/ns_form',
    'ns_grid': 'ns_modules/ns_grid',
    'ns_map': 'ns_modules/ns_map',
    'ns_stepper': 'ns_modules/ns_stepper',
    'ns_navbar': 'ns_modules/ns_navbar',
    'ns_ruler': 'ns_modules/ns_ruler',

    /*==========  Bower  ==========*/
    'jquery': '../bower_components/jquery/jquery',
    'jqueryui': '../bower_components/jqueryui/jquery-ui',
    'underscore': '../bower_components/underscore/underscore',
    'backbone': '../bower_components/backbone/backbone',
    'marionette': '../bower_components/marionette/lib/core/backbone.marionette',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
    'radio': '../bower_components/backbone.radio/build/backbone.radio',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
    'sha1': '../bower_components/sha1/sha1',
    'sweetAlert': '../bower_components/sweetalert/lib/sweet-alert.min',
    'moment': '../bower_components/moment/min/moment.min',
    'dateTimePicker': '../bower_components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker',
    //'backbone.list'     : '../bower_components/backbone-forms/distribution.amd/editors/list',
    'backbone.paginator': '../bower_components/backbone.paginator/lib/backbone.paginator.min',
    'requirejs-text': '../bower_components/requirejs-text/text',
    'L': '../bower_components/leaflet/dist/leaflet-src',
    'Draw': '../bower_components/leaflet-draw/dist/leaflet.draw-src',

    // leaflet replaced by L in file header
    'leafletSearch': '../bower_components/leaflet-search/dist/leaflet-search.src',
    'leaflet_cluster': '../bower_components/leaflet.markercluster/dist/leaflet.markercluster-src',
    'leaflet_google': '../bower_components/leaflet-plugins/layer/tile/Google',
    'dropzone': '../bower_components/dropzone/dist/dropzone',
    'i18n': '../bower_components/i18n/i18next',
    'chart': '../bower_components/chartjs/Chart',
    'tooltipster': '../bower_components/tooltipster/js/jquery.tooltipster.min',

    'ns_filter_bower': '../bower_components/NaturalJS_Filter/model-filter',
    'ag-grid': '../bower_components/ag-grid/dist/ag-grid',


    /*==========  Vendors  ==========*/
    //waiting for a new release (amd friendly)

    'backbone-forms': 'vendors/backbone-forms',
    'fancytree': 'vendors/jquery.fancytree-all.min',

    'autocompTree': './vendors/jquery.autocompTree',
    'tooltipster-list': 'vendors/tooltipList',

  },
  map: {
      '*': {
        'backbone_forms' : 'backbone-forms'
      }
  },

  shim: {
    jquery: {
      exports: '$'
    },
    jqueryui: {
      exports: '$.ui'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    marionette: {
      exports: 'Marionette'
    },
    radio: {
      exports: 'Radio'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'Bootstrap'
    },
    templates: {
      deps: ['underscore'],
      exports: 'Templates',
    },
    sha1: {
      exports: 'sha1'
    },
    sweetAlert: {
      exports: 'Swal'
    },
    moment: {
      exports: 'moment'
    },
    dateTimePicker: {
      exports: 'dateTimePicker'
    },
    'backbone.paginator': {
      exports: 'backbone.paginator',
    },
    leaflet_cluster: {
      deps: ['L'],
      exports: 'leaflet_cluster'
    },
    Draw: {
      deps:['L'],
      exports : 'Draw'
    },
    // leafletSearch: {
    //   deps:['L'],
    //   exports : 'leafletSearch'
    // },
    leaflet_google: {
      deps: ['L'],
      exports: 'leaflet_google'
    },
    leaflet: {
      exports: 'L'
    },
    fancytree: {
      //useless?
      deps: ['jquery','jqueryui'],
      exports: 'Fancytree'
    },
    autocompTree: {
      deps: ['fancytree'],
      exports: 'autocompTree'
    },
    dropzone: {
      deps: ['jquery'],
      exports: 'Dropzone'
    },
    i18n: {
      deps: ['jquery'],
      exports: 'i18n'
    },
    tooltipster: {
      deps: [
          'jquery'
      ],
      exports: 'ToolStiper'
    },
    'tooltipster-list': {
      deps: [
          'jquery',
          'tooltipster'
      ],
      exports: 'TooltipList'
    },
  },
});

require(['app', 'templates'],
function(app, templates) {
  window.leaflet = window.L;
    app.start();
});
