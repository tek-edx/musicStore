import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './context';
import App from './App';


ReactDOM.render(
  <React.Fragment>
    <AppProvider>
    <App />
    </AppProvider>
  </React.Fragment>

,
  document.getElementById('root')
);

