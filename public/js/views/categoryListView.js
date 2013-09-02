define([
	'libs',
	'views/singleCategoryView'
	],function( Libs, SingleCategoryView){

	return Backbone.View.extend({
		tagName : 'ul',

		className : 'nav nav-tabs nav-stacked',

		render : function() {
			var that = this;
			that.container = document.createDocumentFragment();
			that.collection.each( that.addOne, that);
			that.$el.html(that.container);
			return that;
		},

		addOne : function(category) {
			var that = this,
				categoryView = new SingleCategoryView({ model: category });

			that.container.appendChild(categoryView.render().el);
		}
	});

});