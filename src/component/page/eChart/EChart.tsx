import React from 'react';
import { Grid, Typography } from '@mui/material';
import SelectChart from '~/src/component/molecules/select/SelectChart';
import {
  ChartLayout,
  InnerChartLayout,
} from '~/src/component/molecules/layout';
import { EBarLineChart } from '~/src/component/organism/echart';
import { BarOrLine } from '~/src/util/types';

const EChart = (): JSX.Element => {
  const [chart, setChart] = React.useState('');

  const onChangeChart = React.useCallback(
    (e: React.MouseEvent<HTMLElement>, value: string) => {
      if (value === null) {
        setChart('');
      } else {
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
            {chart === '' ? 'Select' : chart[0].toUpperCase() + chart.slice(1)}{' '}
            Graph
          </Typography>
        </Grid>
        <SelectChart selected={chart} changeSelected={onChangeChart} />
        <InnerChartLayout>
          {['bar', 'line'].indexOf(chart) !== -1 && (
            <EBarLineChart type={chart as BarOrLine} />
          )}
        </InnerChartLayout>
      </ChartLayout>
    </Grid>
  );
};

export default EChart;
