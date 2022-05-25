import React from 'react';
import { Grid } from '@mui/material';
import { IChildren } from './index';

const ChartLayout = ({ children }: IChildren): JSX.Element => {
  return (
    <Grid container m={2}>
      {children}
    </Grid>
  );
};

export default ChartLayout;
