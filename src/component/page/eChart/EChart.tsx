import React from 'react';
import { Grid } from '@mui/material';
import SelectChart from '~/src/component/molecules/select/SelectChart';

const EChart = (): JSX.Element => {
  const [chart, setChart] = React.useState('');

  const onChangeChart = React.useCallback(
    (e: React.MouseEvent<HTMLElement>, value: string) => {
      setChart(value);
    },
    [],
  );

  return (
    <Grid container>
      <SelectChart selected={chart} changeSelected={onChangeChart} />
    </Grid>
  );
};

export default EChart;
