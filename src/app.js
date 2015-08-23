import app from 'ampersand-app';
import styles from './styles/main.styl';
import 'octicons/octicons/octicons.css';
import Router from './router';

// exposes `app` for console usage

window.app = app;

app.extend({
    init() {
        this.trigger('AppInit');
        this.router = new Router();
        this.router.history.start();
    }
});

app.on('AppInit', ()=> {
    console.log('App started');
});

app.on('hello', (data) => {
  console.log(data);
});

app.init();
