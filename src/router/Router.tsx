import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '~/src/App';
import { EChart } from '~/src/component/page';
import BaseLayout from '~/src/component/molecules/layout/BaseLayout';

const Router = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<App />} />
          <Route path="/e-charts" element={<EChart />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
