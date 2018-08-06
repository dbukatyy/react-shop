import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import HomePage from './components/HomePage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
      <HomePage />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
