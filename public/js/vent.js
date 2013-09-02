define([
	'libs'
	],function( Libs){

	var Backbone = Libs.backbone,
		_ = Libs.underscore;

	return _.extend({},Backbone.Events);
});