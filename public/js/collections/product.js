define([
	'libs',
	'models/product'
	],function(Libs, ProductModel) {
		
	var Backbone = Libs.backbone,
		_ = Libs.underscore,
		$ = Libs.jquery;

	return Backbone.Collection.extend({
		model : ProductModel,

		url : 'index.php/products',

		sortOn : 'title',

		sortDirection : 1,

		sortProducts : function(attr) {
			var that = this;
			that.sortOn = attr;
			that.sort();
		},

		comparator : function(a,b) {
			var that = this,
				a = a.get(that.sortOn),
				b = b.get(that.sortOn);

			if(a == b) return 0;
			if(that.sortDirection == 1) {
				return a > b ? 1 : -1;
			} else {
				return a < b ? 1 : -1;
			}
		}
	});

});