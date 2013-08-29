define([
	'libs',
	'models/product'
	],function(Libs, ProductModel) {
		
	var Backbone = Libs.backbone,
		_ = Libs.underscore,
		$ = Libs.jquery;

	return Backbone.Collection.extend({
		model : ProductModel,

		url : 'index.php/products'
	});

});