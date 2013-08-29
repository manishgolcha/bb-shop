define([
	'libs',
	'text!templates/singleProduct' 
	],function( Libs, singleProductTemplate) {

	var Backbone = Libs.backbone,
		_ = Libs.underscore,
		$ = Libs.jquery;

	return Backbone.View.extend({
		tagName : 'li',

		className : 'span3',

		template : _.template(singleProductTemplate),

		render : function() {
			var that = this;
			that.$el.html(that.tempalte(singleProductTemplate));
			return that;
		}
	});
	
});