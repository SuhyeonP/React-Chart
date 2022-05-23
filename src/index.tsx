import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { globalStyles } from '~/src/globalStyles';
import Router from '~/src/router/Router';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Global styles={globalStyles} />
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement,
);
