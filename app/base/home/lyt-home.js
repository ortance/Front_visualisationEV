define(['marionette',
	// './views/LandviewerView',
	'./views/leafletView',
	// './views/newView', // on importe le fichier js qui concerne notre nouvelle vue
	'./views/searchView', // on importe le fichier js qui concerne notre nouvelle vue
	'config',
	'i18n'
	],
function(Marionette, LeafletView, SearchView, config) { // on définit ici une nouvelle vue, NewView
	// attention de bien mettre les define et les function dans le même ordre !
  'use strict';

  return Marionette.LayoutView.extend({
		// template dans lequel sera inséré le template des vues créées
    template: 'app/base/home/tpl/tpl-home.html',
    className: 'home-page ns-full-height animated',
    regions: {
      graph: '#graph',
      info: '#info',
			// testCarte: '#testCarte',
			testSearch: '#testSearch'
    },

    ui: {
			donuts:'#donuts',
			test: '#test'

    },

		// lorsque le template est chargé, on effectue cette fonction
    onRender: function() {
			// $(this.ui.test).append('<h1>tototototo</h1>');
    },

// avec cette fonction, oncré, on affiche et on montre sur la page les nouvelles vues
    onShow: function(options) {
      // this.info.show(this.infoStat);
      // this.graph.show(new TestView());
			//this.info.show(new NewView());
			// this.testCarte.show(new LeafletView());
			this.testSearch.show(new SearchView());

    },

  });
});
