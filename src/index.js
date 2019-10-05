import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "./style.css";
import App from './App';
import ScrollToTop from 'react-router-scroll-top';
import * as serviceWorker from './serviceWorker';

document.title = "MangiarBene";

const app = <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>


ReactDOM.render(app, document.getElementById('main'));

// module.hot.accept();

serviceWorker.register();
