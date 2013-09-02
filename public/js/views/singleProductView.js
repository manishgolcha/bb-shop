define([
	'libs',
	'text!templates/singleProduct.html',
	'views/productDetails',
	'vent'
	],function( Libs, singleProductTemplate, ProductDetailsView, Vent) {

	var Backbone = Libs.backbone,
		_ = Libs.underscore,
		$ = Libs.jquery;

	return Backbone.View.extend({
		tagName : 'li',

		className : 'span3',

		template : _.template(singleProductTemplate),

		events : {
			'click [data-action]' : 'handleAction'
		},

		render : function() {
			var that = this;
			that.$el.html(that.template(this.model.toJSON()));
			return that;
		},

		handleAction : function(e) {
			var that = this,
				jEl = $(e.currentTarget),
				productId = jEl.attr('data-id');

			switch(jEl.attr('data-action')) {
				case 'showDetails': 
					that.showProductDetails(productId);
				break;

				case 'addToCart':
					Vent.trigger('shop:addToCart', {
						productId: productId,
						title: jEl.attr('data-title'),
						price: jEl.attr('data-price'),
						quantity: 1
					});
				break;
			}
		},

		showProductDetails : function(id) {
			var that = this, 
				view = new ProductDetailsView({ model: that.model });

			$('#my-modal').html(view.render().el).modal();
		}
	});
	
});