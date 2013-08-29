define([
	'libs',
	'collections/category',
	'views/categoryListView'
	],function( Libs, CategoryCollection, CategoryListView){

	var Backbone = Libs.backbone,
		_ = Libs.underscore,
		$ = Libs.jquery;

	return Backbone.View.extend({
		initialize : function() {
			//todo -  parent initialize

			var categories = new CategoryCollection();
			categories.fetch({
				success : function() {
					var categoryListView = new CategoryListView({ collection : categories });
					$('#left-pane').html(categoryListView.render().el);
				},
				error : function() {
					console.log("Error");
				}
			});
		}
	});

});