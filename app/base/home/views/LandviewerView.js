// vue qui permet d'afficher une carte, on importe donc leaflet
define(['marionette',
	'config',
	'jquery',
  'L',
	'i18n'
	],
function(Marionette, config, $,  L) {
  'use strict';

  return Marionette.LayoutView.extend({
    template: 'app/base/home/tpl/tpl-LandviewerView.html', // a changer !!!

    events: {    },

    ui: {
			testID:'#testMapLV',

    },

    onShow: function(options) {
			var mymap;
      var EOS_API_KEY =  '7dac900c0375439abed294fe5182ef6d';

  // création de la carte, on rajoute un contrôle pour pouvoir choisir le fond de carte
  var satellite =  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets-satellite'
  });

  var streets =  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
  });

  // on ajoute une image sentinel2 récupérée sur landviewer
  var layerLV =  L.tileLayer('https://api.eos.com/v1/vis/S2/31/T/FJ/2017/4/20/0/B04,B03,B02/{z}/{x}/{y}' +
                 '?api_key=' + EOS_API_KEY, {
  });

  var baseLayers = {
    "Satellite": satellite,
    "Streets": streets,
    "Landviewer": layerLV
  };

// on crée la carte
  mymap = L.map('testMapLV').setView([43.2874299332864,5.37500409548504], 12);

  // add default layers to map
  mymap.addLayer(layerLV);

// on ajoute la couche de contrôle pour choisir différents fonds de carte
  L.control.layers(baseLayers).addTo(mymap);
    },

  });
});
