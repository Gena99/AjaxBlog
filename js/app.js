(function(){
	"use strict";
	var app = {
		init:function(){
			var converter = new showdown.Converter();
			$.get("example.md", function(data){
				//console.log(data);
				var texteMarkDownConvertiEnHTML = converter.makeHtml(data);
    			$('#md').html(texteMarkDownConvertiEnHTML);
			});
		}
	};


	$(document).ready(function(){
		app.init();
	});
})();