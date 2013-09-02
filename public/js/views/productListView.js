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

		initialize : function() {
			var that = this;
			that.listenTo(that.collection,'sort',that.render);
		},

		render : function() {
			var that = this;
			that.container = document.createDocumentFragment();
			that.collection.each( that.addOne, that);
			that.$el.html(that.container);
			return that;
		},

		addOne : function(product) {
			var that = this,
				productView = new SingleProductView({ model: product });
			
			that.container.appendChild(productView.render().el);
		}
	});

});