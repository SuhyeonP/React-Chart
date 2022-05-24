import React from 'react';
import ECharts, { EChartsOption } from 'echarts-for-react';
import { barLine } from '~/src/util/graphData';
import { BarOrLine } from '~/src/util/types';

interface IProps {
  type: BarOrLine;
}

const EBarLineChart = ({ type }: IProps): JSX.Element => {
  const [option, setOption] = React.useState<EChartsOption>(barLine(type));

  React.useEffect(() => {
    setOption(barLine(type));
  }, [type]);

  return (
    <>
      <ECharts
        option={option}
        opts={{ renderer: 'canvas', width: 300, height: 500 }}
      />
    </>
  );
};

export default EBarLineChart;
