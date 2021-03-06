require.config({
	paths : {
		jquery : 'libs/jquery',
		underscore : 'libs/underscore',
		backbone : 'libs/backbone',
		bootstrap : '../bootstrap/js/bootstrap',
		text : 'libs/require/text'
	},
	shim : {
		'underscore' : {
			exports : '_'
		},
		'backbone' : {
			deps : ['underscore','jquery'],
			exports : 'Backbone'
		},
		'bootstrap' : {
			deps : ['jquery'],
			exports : 'Bootstrap'
		}
	}
});

require(['views/app'],function(AppView){
	var appView = new AppView();
});
