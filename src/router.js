import Router from 'ampersand-router';

export default Router.extend({
	routes: {
		'': 'public',
		'repos': 'repos',
    'titto' : 'test1'
	},
  
	public () {
		console.log('on public page');
	},
  
	repos () {
		console.log('on repos page');
	},

  test1 () {
    console.log('on test page');
  }
});
