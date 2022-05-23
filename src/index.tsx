import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import { globalStyles } from '~/src/globalStyles';
import Router from "~/src/router/Router";

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
      <Router/>
  </React.StrictMode>,
  rootElement,
);
