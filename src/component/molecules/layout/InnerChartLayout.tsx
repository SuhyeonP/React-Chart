import React from 'react';
import { Grid } from '@mui/material';
import { IChildren } from './index';

const InnerChartLayout = ({ children }: IChildren): JSX.Element => {
  return (
    <Grid container p={3}>
      {children}
    </Grid>
  );
};

export default InnerChartLayout;
