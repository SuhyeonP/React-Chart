import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '~/src/App';
import { EChart } from '~/src/component/page';

const Router = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="/e-charts" element={<EChart />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
