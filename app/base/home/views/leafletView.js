// vue qui permet d'afficher une carte, on importe donc leaflet
define(['marionette',
'config',
'jquery',
'L',
'Draw',
'leafletSearch',
'i18n'
],
function(Marionette, config, $,  L, Draw , leafletSearch) {
	'use strict';

	return Marionette.LayoutView.extend({
		template: 'app/base/home/tpl/tpl-testMap.html',
		className: 'full-height',
		events: {    },

		ui: {
			testID:'#testMap',
		},

		initialize: function(options){
			console.log('init map ')
			this.drawControlRdy = $.Deferred();
		},

		initMap: function(){
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

			var baseLayers = {
				"Satellite": satellite,
				"Streets": streets
			};




			// on crée la carte
			this.mymap = L.map('testMap', {zoomDelta: 1, zoomSnap: 0}).setView([43.2874299332864,5.37500409548504], 4);

			// add default layers to map
			this.mymap.addLayer(streets);

			// on ajoute la couche de contrôle pour choisir différents fonds de carte
			L.control.layers(baseLayers).addTo(this.mymap);

			L.control.scale().addTo(this.mymap);

		},

		initDrawLayer: function(){
			var drawnItems = new L.FeatureGroup();
			this.mymap.addLayer(drawnItems);
			var _this = this;

			var drawControl = new L.Control.Draw({
				edit: {
					featureGroup: drawnItems
				}
			});
			this.mymap.addControl(drawControl);

			this.mymap.on('draw:created', function (e) {
				var type = e.layerType,
				layer = e.layer;
				_this.drawLayer = layer;
				// _this.drawControlRdy.resolve();
				console.log('ma couche controle est prete');
				drawnItems.addLayer(layer);
			});

			this.mymap.on('draw:edited', function () {
				_this.drawLayer = _this.drawLayer;
				console.log('ma couche controle a été éditée');
			});

			this.mymap.on('draw:deleted', function () {
				// Update db to save latest changes.
				_this.drawLayer = undefined;
				// _this.drawControlRdy = $.Deferred();
				console.log('ma couche a été supprimée')
			});

			// rajouter search barre avec Leaflet
			// add a layer group, yet empty
			var markersLayer = new L.LayerGroup();
			this.mymap.addLayer(markersLayer);

			// add the search bar to the map
			var controlSearch = new L.Control.Search({
				url: 'http://nominatim.openstreetmap.org/search?format=json&q={s}',
				jsonpParam: 'json_callback',
				propertyName: 'display_name',
				propertyLoc: ['lat','lon'],
				autoCollapse: true,
				autoType: false,
				minLength: 2,
				// position:'topleft',    // where do you want the search bar?
				// layer: markersLayer,  // name of the layer
				// initial: false,
				// zoom: 11,        // set zoom to found location when searched
				// marker: false,
				textPlaceholder: 'Entrer une ville' // placeholder while nothing is searched
			});

			this.mymap.addControl(controlSearch); // add it to the map
		},
		//
		// setActionAllowed: function(allowed){
		// 		this.actionAllowed = allowed;
		// },

		check_celery_task: function(id_task, bdd, city){
			var _this = this;
			var data = {};
			data['id_task'] =  id_task;
			data['table_name'] = bdd;
			data['city'] = city;
			$.ajax({
				url: 'http://127.0.0.1/api/checkCeleryTask',
				data: JSON.stringify(data),
				contentType: "application/json",
				type: 'POST',
				success: function(response) {
					if(!response['state']){
						setTimeout(function(){ _this.check_celery_task(id_task, bdd, city); }, 5000);
					}
					else{
						console.log(response);
						console.log("traitement terminé, rechargement de la carte");
						_this.loadDataLayer(response['table_name'], response['city']);
					}
				},
				error: function(error) {
					console.log(error);
				}
			})
		},

		loadDataLayer: function(table_name, city){
			var _this = this; // definition du contexte dans la fonction pour l'utiliation dans le call ajax
			var dataPass = {};
			dataPass['table_name'] = table_name;
			dataPass['city'] = city;
			$.ajax({
				url:'http://127.0.0.1/api/ndviAuto',
				data: JSON.stringify(dataPass),
				contentType: "application/json",
				type: 'POST',
				success: function(data){
					console.log(data);
					console.log("les données ont été récupérées");
					// console.log(data);
					_this.mymap.setView([data[0]['coords_center']['lat'], data[0]['coords_center']['lng']], 12);
					if(_this.mapDataLayer){
						_this.mymap.removeLayer(_this.mapDataLayer);
					}
					_this.mapDataLayer = L.geoJson(data,{
						pointToLayer: function (feature, latlng) {
							return  L.polygon(latlng);
						}}).addTo(_this.mymap);
					}
				});
			},


			onShow: function(options) {
				this.initMap();
				this.initDrawLayer();
				this.check_celery_task();
				this.loadDataLayer();
			},

		});
	});
