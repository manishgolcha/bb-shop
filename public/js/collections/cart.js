define([
	'libs',
	'models/cart'
	],function( Libs, CartModel){

	var Backbone = Libs.backbone,
		_ = Libs.underscore,
		$ = Libs.jquery;

	return Backbone.Collection.extend({
		model : CartModel,

		url : 'index.php/cart'
	});
});