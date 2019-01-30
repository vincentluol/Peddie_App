import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './Firebase';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

serviceWorker.unregister();