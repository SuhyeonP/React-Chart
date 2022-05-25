import React from 'react';
import { Grid, Typography } from '@mui/material';
import SelectChart from '~/src/component/molecules/select/SelectChart';
import {
  ChartLayout,
  InnerChartLayout,
} from '~/src/component/molecules/layout';
import { EChartApply } from '~/src/component/organism/echart';
import { Charts } from '~/src/util/types';

const EChart = (): JSX.Element => {
  const [chart, setChart] = React.useState<Charts>('bar');

  const onChangeChart = React.useCallback(
    (e: React.MouseEvent<HTMLElement>, value: Charts) => {
      if (value !== null) {
        setChart(value);
      }
    },
    [],
  );

  return (
    <Grid container m={2}>
      <ChartLayout>
        <Grid container mb={2}>
          <Typography variant="h3">
            {chart[0].toUpperCase() + chart.slice(1) + ' Graph'}
          </Typography>
        </Grid>
        <SelectChart selected={chart} changeSelected={onChangeChart} />
        <InnerChartLayout>
          <EChartApply type={chart} />
        </InnerChartLayout>
      </ChartLayout>
    </Grid>
  );
};

export default EChart;
