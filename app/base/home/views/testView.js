// vue qui permet d'afficher une carte, on importe donc leaflet
define(['marionette',
	'ns_map/ns_map',
	'config',
  'L',
	'i18n'
	],
function(Marionette, NsMap, config, L) {
  'use strict';

  return Marionette.LayoutView.extend({
    template: 'app/base/home/tpl/test-viw-tpl.html',

    events: {    },

    ui: {
			testID:'#testID',

    },

    initialize: function(){
      // this.model = new Backbone.Model();
      // this.model.set('toto', 'tutututututut');
    },


		// avec cette fonction, on fait appel avec ajax, ce qui affiche les données de mon api flask, qui doit tourner dans l'invite de commande !!
    // getGeom: function() {
    //   var _this = this; // important de préciser dans quel context on est !
		// 	$.ajax({
		// 		url:'http://127.0.0.1:5000/arr',
		// 		success: function(data){
		// 			console.log(data);
    //       // L.GeoJSON(data).addTo(_this.map.map);
		// 		}
		// 	}),
		// 	$.ajax({
    //     context: this,
		// 		url:'http://127.0.0.1:5000/esp',
		// 		success: function(data){
		// 			console.log(data)
		// 		}
		// 	});
		//
    // },

    onShow: function(options) {
      // this.info.show(this.infoStat);
      // this.graph.show(this.curveGraph);
      this.map = new NsMap({
        popup: false,
        zoom: 2,
        element: 'testID',
      });
      // console.log(this.map.map)
      // this.getGeom();
      console.log(L)
    },

  });
});
