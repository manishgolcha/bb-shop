define([
	'libs',
	'text!templates/productDetails.html',
	'vent'
	],function( Libs, ProductDetailsTemplate, Vent){

	var Backbone = Libs.backbone,
		_ = Libs.underscore,
		$ = Libs.jquery;

	return Backbone.View.extend({

		template : _.template(ProductDetailsTemplate),

		events : {
			'click [data-action]' : 'handleAction'
		},

		render : function() {
			var that = this;
			that.$el.html(that.template( that.model.toJSON()));
			return that;
		},

		handleAction : function(e) {
			var that = this,
				jEl = $(e.currentTarget),
				productId = jEl.attr('data-id');

			switch(jEl.attr('data-action')) {
				case 'addToCart':
					Vent.trigger('shop:addToCart', {
						productId: productId,
						title: jEl.attr('data-title'),
						price: jEl.attr('data-price'),
						quantity: 1
					});
				break;
			}
		}
	});

});