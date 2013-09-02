define([
	'libs',
	'text!templates/singleCartItem.html',
	'text!templates/quantityInput.html',
	'vent'
	],function (Libs, CartItemTemplate, QuantityInputTemplate, Vent){

	var Backbone = Libs.backbone,
		_ = Libs.underscore,
		$ = Libs.jquery;

	return Backbone.View.extend({
		tagName : 'tr',

		template : _.template(CartItemTemplate),

		quantityInputTemplate : _.template(QuantityInputTemplate),

		events : {
			'click [data-action]' : 'handleAction',
			'keypress input' : 'updateCart'
		},

		initialize : function() {
			// todo - call parent initialize
			var that = this;
			that.listenTo(that.model,'change',that.render);
			that.listenTo(that.model,'destroy',that.destroyItem);
		},

		render : function() {
			var that = this;
			that.$el.html(that.template(that.model.toJSON()));
			return that;
		},

		handleAction : function(e) {
			var that = this,
				jEl = $(e.currentTarget);
			
			switch(jEl.attr('data-action')) {
				case 'removeItem':
					that.removeItem();
				break;
				case 'showQuantityInput': 
					that.showQuantityInput();
				break;
			}
		},

		removeItem : function() {
			var that = this;
			that.model.destroy();
		},

		destroyItem : function() {
			var that = this;
			that.remove();
		},

		showQuantityInput : function() {
			var that = this;
			that.$el.find('.quantity-cell').html(that.quantityInputTemplate( that.model.toJSON() ));
		},

		updateCart : function(e) {
			var that = this,
				item = that.model,
				quantity = that.$el.find('.quantity-cell input').val();
			
			if(e.which === 13 && quantity !=="" && quantity >0) { //update on enter key 
				item.set('quantity',quantity);

				Backbone.sync('update',item,{
					url : 'index.php/cart/'+item.get('id'),
					success : function() {
						
					},
					error : function(){
						console.log("Error");
					}
				});
			}
		}
	});

});