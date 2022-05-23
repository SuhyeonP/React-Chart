import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import App from './App';
import { globalStyles } from '~/src/globalStyles';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  rootElement,
);
