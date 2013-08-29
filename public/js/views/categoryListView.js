define([
	'libs',
	'views/singleCategoryView'
	],function( Libs, SingleCategoryView){

	return Backbone.View.extend({
		tagName : 'ul',

		className : 'nav nav-tabs nav-stacked',

		render : function() {
			var that = this;
			that.collection.each( that.addOne, that);
			return that;
		},

		addOne : function(category) {
			var that = this,
				categoryView = new SingleCategoryView({ model : category });

			that.$el.append(categoryView.render().el);
		}
	});

});