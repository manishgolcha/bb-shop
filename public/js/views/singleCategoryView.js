define([
	'libs',
	'text!templates/singleCategory.html'
	],function( Libs, singleCategoryTemplate){

	var Backbone = Libs.backbone,
		_ = Libs.underscore,
		$ = Libs.jquery;

	return Backbone.View.extend({
		tagName : 'li', 

		template : _.template(singleCategoryTemplate),

		render : function() {
			var that = this;
			that.$el.html(that.template( that.model.toJSON() ));
			return that;
		}
	});
});