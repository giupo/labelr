import app from 'ampersand-app';
import styles from './styles/main.styl';
import Router from './router';

// exposes `app` for console usage

window.app = app;

app.extend({
  init() {
    this.router = new Router();
    this.router.history.start();
  }
});

app.on('hello', (data) => {
  console.log(data);
});

app.init();
