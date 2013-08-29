define([
	'libs',
	'views/singleProductView'
	],function(Libs, SingleProductView) {

	var Backbone = Libs.backbone,
		_ = Libs.underscore,
		$ = Libs.jquery;

	return Backbone.View.extend({
		tagName : 'ul',

		className : 'thumbnails',

		render : function() {
			var that = this;
			that.collection.each( that.addOne, that);
			return that;
		},

		addOne : function(product) {
			var that = this,
				productView = new SingleProductView({ model : product });
				that.$el.append(productView.render().el);
		}
	});

});