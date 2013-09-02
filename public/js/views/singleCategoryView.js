define([
	'libs',
	'text!templates/singleCategory.html',
	'collections/product',
	'views/productListView'
	],function( Libs, singleCategoryTemplate, ProductCollection, ProductListView){

	var Backbone = Libs.backbone,
		_ = Libs.underscore,
		$ = Libs.jquery;

	return Backbone.View.extend({
		tagName : 'li', 

		events : {
			'click [data-action]' : 'handleAction'
		},

		template : _.template(singleCategoryTemplate),

		render : function() {
			var that = this;
			that.$el.html(that.template( that.model.toJSON() ));
			return that;
		},

		handleAction : function(e) {
			var that = this,
				jEl = $(e.currentTarget);

			switch(jEl.attr('data-action')) {
				case 'showProducts' :
					that.$el.siblings().removeClass('active');
					jEl.parent().addClass('active');
					that.showProducts();
				break;
			}
		},

		showProducts : function() {
			var products = new ProductCollection([],{ url: 'index.php/products/product-by-category-id/'+ this.model.get('id') });

			// todo - cache results
			products.fetch({
				success : function(res) {
					var productListView = new ProductListView({ collection : products });
					$('#right-pane').html(productListView.render().el);
				},	
				error : function() {
					console.log("Error in singleCategoryView.js");
				}
			})
		}
	});
});