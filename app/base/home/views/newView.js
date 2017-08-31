// Ici on définit une nouvelle vue marionette, l'application étant déjà créée dans le fichier app.js
// c'est mieux de faire une vue -> un esmble de fichier propre
// la création en elle même de la vue est faite dans le script général, on définit on ne donne que des paramètres

// On importe les fichiers, modules qui seront utilisés dans la page, c'est le require qui fait ça
define(['marionette',
	'config',
	'i18n'
	],
  // on crée la fonction qui instancie tout
function(Marionette, config) {
  'use strict';

// ce que la fonction doit retourner, cad la nouvelle vue
  return Marionette.LayoutView.extend({
    // le template qui définit comment devront être présenté les données transmises
    template: 'app/base/home/tpl/tpl-newView.html',
    // dans quelle borne sera rajouté les données
    tagName: "ul",
// l'identfiant qui définit la zone dans le template
    ui: {
		newID: "#newID"
    },
    // on rajoute un évènement, apparition d'une popup qd on clique sur la zone définie au dessus
    events: {'click #newID': 'myClick'
    },

// définition de la fonction onclick qu'on appelle
		myClick: function(event){
			alert('click');
		},

		// lorsque le template est chargé, on effectue cette fonction
    // onRender: function() {
    //   // call ajax pour récupérer les données de l'api python qui tourne
		// 	$.ajax({
		// 		url:'http://127.0.0.1:5000/arr',
		// 		success: function(data){
		// 			console.log(data)
		// 		}
		// 	}),
		// 	$.ajax({
		// 		url:'http://127.0.0.1:5000/esp',
		// 		success: function(data){
		// 			console.log(data)
		// 		}
		// 	});
    // },

// on crée un nouveau modèle, et on lui dit ce que ça doit afficher, dans le contexte de cette vue là => la donnée test prend la valeur Coucou (tpl-newView)
    initialize: function(){
      this.model = new Backbone.Model();
      this.model.set('test', 'Coucou');
      this.model.set('autre', 'autre');
    },


    onShow: function(options) {
      // this.info.show(this.infoStat);
    },

  });
});

// après la vue, on regarde le template associé !
