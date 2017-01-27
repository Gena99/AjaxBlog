(function(){
	"use strict";
	var app = {
		init:function(){
			var converter = new showdown.Converter();
			// Récupérer un texte en MarkDown et l'afficher converti dans le document
			$.get("example.md", function(data){
				//console.log(data);
				var texteMarkDownConvertiEnHTML = converter.makeHtml(data);
    			$('#md').html(texteMarkDownConvertiEnHTML);
			});
			
			// Charger et afficher le menu dans le document
			$.get("menu.json", function(data){
				//console.log(data);
				data.listeMenu.forEach(function(menu, i, listeMenu){
					//console.log('Resultat iteration', menu);
					$('#menu ul').append('<li><a href="' + menu.url + '">' + menu.titre + '</a></li>');
				});
			});
		}
	};


	$(document).ready(function(){
		app.init();
	});
})();