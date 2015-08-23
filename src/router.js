import app from 'ampersand-app';
import Router from 'ampersand-router';
import PublicPage from './pages/public';
import ReposPage from './pages/repos';
import PippoPage from './pages/pippo';
import React from 'react';
import HomePage from './pages/home';

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos',
    'otherpage': 'otherpage',
    'login' : 'login',
    'logout' : 'logout'
	},
  
  public () {
    app.trigger('hello', {data:'ciccio'});
    React.render(<PublicPage/>, document.body);
  },

  repos () {
    React.render(<ReposPage/>, document.body);
  },

  otherpage() {
    React.render(<PippoPage/>, document.body);
  },

  login() {
    React.render(<HomePage/>, document.body);
  },

  logout() {
    app.router.history.navigate('/');
  }
});
