define([
	'libs',
	'collections/category',
	'views/categoryListView',
	'collections/product',
	'views/productListView',
	'collections/cart',
	'views/cartListView',
	'vent'
	],function( Libs, CategoryCollection, CategoryListView, ProductCollection, ProductListView, CartCollection, CartListView, Vent){

	var Backbone = Libs.backbone,
		_ = Libs.underscore,
		$ = Libs.jquery;

	return Backbone.View.extend({
		initialize : function() {
			var that = this;
			
			//todo - call parent initialize

			that.categories = new CategoryCollection();
			
			that.categories.fetch({
				success : function() {
					that.render();	
				},
				error : function() {
					console.log("Error");
				}
			});

			that.cartItems = new CartCollection();
			that.cartItems.fetch({
				success : function() {
					cartListView  = new CartListView({ collection:that.cartItems });
					$('#cart-modal').html(cartListView.render().el);
				},
				error : function() {
					console.log("Error in app.js");
				}
			});

			Vent.on('shop:addToCart',that.addToCart,that);
		},

		render : function() {
			var that = this,
				categoryListView = new CategoryListView({ collection : that.categories }),
				products = new ProductCollection();

			$('#left-pane').html(categoryListView.render().el);

			products.fetch({
				success : function() {
					var productListView = new ProductListView({ collection : products });
					$('#right-pane').html(productListView.render().el);
				},
				error : function() {
					console.log("Error");
				}
			});
		},

		addToCart : function(data) {
			var that = this,
				cartListView,
				itemExists = that.isItemExists(data.productId);
			
			if(!itemExists) {
				that.cartItems.create(data);
				$('#cart-modal').modal();
			} else {
				itemExists.set('quantity',parseInt(itemExists.get('quantity')) + parseInt(data.quantity) );
				
				Backbone.sync('update',itemExists,{
					url : 'index.php/cart/'+itemExists.get('id'),
					success : function() {
						$('#cart-modal').modal();
					},
					error : function(){
						console.log("Error");
					}
				});
			}
		},

		isItemExists : function(productId) {
			var that = this, 
				matchedItem = false;

			that.cartItems.each(function(item) {
				if(item.get('product_id') == productId) matchedItem = item;
			});
			return matchedItem;
		}
	});

});