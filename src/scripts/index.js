/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import App from './views/app';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
