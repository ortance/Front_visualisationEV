define(['marionette',
'config',
'jquery',
'dateTimePicker',
'./leafletView', // on importe la view leaflet ici
'i18n'
],
function(Marionette, config, $, dateTimePicker, LeafletView) {
	'use strict';

	return Marionette.LayoutView.extend({
		template: 'app/base/home/tpl/tpl-searchNDVI.html',
		ui: {
			searchID: '#searchNDVI',
		},
		regions: {
			testCarte: '#testCarte',
		},
		events:{
			'click button#mySubmit': 'submit'
		},

		initialize: function() {
			this.model = new Backbone.Model();
			this.model.set('searchID', 'template');
		},

		// on récupère les infos du formulaire et les coords pour les envoyer au back au moment du click
		submit: function(e){
			var _this = this;
			e.preventDefault();
			var formData = $('form').serializeArray().reduce(function(a, x) { a[x.name] = x.value; return a; }, {}); // mettre sous format json compréhensible
			var coords = this.map.drawLayer
			if (typeof(coords) == 'undefined') {
				console.log('dessinez qqch')
			}
			else {
				console.log('le traitement commence');
				formData['coords'] = coords.getLatLngs();

				$.ajax({
					url: 'http://127.0.0.1/api/getFormData',
					data: JSON.stringify(formData) ,
					contentType: "application/json",
					type: 'POST',
					success: function(response) {
						_this.map.check_celery_task(response['id_task'], response['bdd']);
						console.log(response);
					},
					error: function(error) {
						console.log(error);
					}
				})
			};
			},

			// ici on instancie la carte leaflet dans la div testSearch, dans div testCarte et qui sera dans la div testMap
			onShow: function(options) {
				this.map = new LeafletView();
				this.testCarte.show(this.map);
				// this.map.drawControlRdy.then(function(e){
				// })
			}

		});
	});
