define([
	'libs',
	'models/category'
	],function( Libs, CategoryModel){

	var Backbone = Libs.backbone,
		_ = Libs.underscore,
		$ = Libs.jquery;

	return Backbone.Collection.extend({
		model : CategoryModel,

		url : 'index.php/category'
	});
});