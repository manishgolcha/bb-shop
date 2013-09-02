define([
	'libs',
	'views/cartItemView',
	'text!templates/cartItemList.html'
	],function( Libs, CartItemView, CartItemListTemplate){

	var Backbone = Libs.backbone,
		_ = Libs.underscore,
		$ = Libs.jquery;

	return Backbone.View.extend({
		template : _.template(CartItemListTemplate),

		initialize : function() {
			// todo - call parent initialize
			var that = this;
			that.listenTo(that.collection,'add',that.addOne);
		},

		render : function() {
			var that = this;
			that.$el.html(that.template());
			that.collection.each(that.addOne,that);
			return that;
		},

		addOne : function(item) {
			var that = this,
				itemView = new CartItemView({ model: item });
			that.$el.find('#cart-body').append(itemView.render().el);
		}
	});

});