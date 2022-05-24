import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';

const BaseLayout = (): JSX.Element => {
  const navigate = useNavigate();

  const showChart = (value: string) => () => {
    navigate(value);
  };

  return (
    <Grid container>
      <Grid container>
        <Button onClick={showChart('')}>Home</Button>
        <Button onClick={showChart('e-charts')}>ECharts</Button>
        <Button>Search</Button>
      </Grid>
      <Outlet />
    </Grid>
  );
};

export default BaseLayout;
