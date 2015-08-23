import app from 'ampersand-app';
import Router from 'ampersand-router';
import PublicPage from './pages/public';
import ReposPage from './pages/repos';
import React from 'react';

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos',
    'titto' : 'test1'
	},
  
  public () {
    app.trigger('hello', {data:'ciccio'});
    React.render(<PublicPage/>, document.body);
  },

  repos () {
    React.render(<ReposPage/>, document.body);
  },
  
  test1 () {
    console.log('on test page');
  }
});
