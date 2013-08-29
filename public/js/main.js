require.config({
	paths : {
		jquery : 'libs/jquery',
		underscore : 'libs/underscore',
		backbone : 'libs/backbone',
		text : 'libs/require/text'
	},
	shim : {
		'underscore' : {
			exports : '_'
		},
		'backbone' : {
			deps : ['underscore','jquery'],
			exports : 'Backbone'
		}
	}
});

require(['views/app'],function(AppView){
	var appView = new AppView();
});
