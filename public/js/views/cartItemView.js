define([
	'libs',
	'text!templates/singleCartItem.html'
	],function( Libs, CartItemTemplate){

	var Backbone = Libs.backbone,
		_ = Libs.underscore,
		$ = Libs.jquery;

	return Backbone.View.extend({
		tagName : 'tr',

		template : _.template(CartItemTemplate),

		events : {
			'click [data-action]' : 'handleAction'
		},

		initialize : function() {
			// todo - call parent initialize
			var that = this;
			that.model.on('change',that.render,that);
			that.model.on('destroy',that.destroyItem,that);
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
				case 'removeItem' :
					that.removeItem();
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
		}
	});

});