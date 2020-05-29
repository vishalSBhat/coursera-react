import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router
} from 'react-router-dom';

ReactDOM.render( <
  Router >
  <
  App / >
  <
  /Router>,
  document.getElementById('root')
);

serviceWorker.unregister();