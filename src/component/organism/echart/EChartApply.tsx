import React from 'react';
import ECharts from 'echarts-for-react';
import { Grid } from '@mui/material';
import { Charts, IEChartOptions } from '~/src/util/types';
import { getChartData } from '~/src/util/graphData';

interface IProps {
  type: Charts;
}

const EChartApply = ({ type }: IProps): JSX.Element => {
  const [options, setOptions] = React.useState<IEChartOptions>(
    getChartData[type],
  );

  React.useEffect(() => {
    setOptions(getChartData[type]);
  }, [type]);

  return (
    <Grid container>
      {options.list.map((option, index) => (
        <Grid item xs={6} key={type + index}>
          <ECharts
            option={option}
            opts={{ renderer: 'canvas', width: 300, height: 500 }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default EChartApply;
