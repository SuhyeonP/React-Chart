import React from 'react';
import ECharts, { EChartsOption } from 'echarts-for-react';

export interface ILogGraphProps {
  type: 'log' | 'value';
  logSelect: 2 | 3;
  logBase: 10 | 2 | 3;
  boundaryGap: boolean;
  xInverse: boolean;
  yInverse: boolean;
  chartType: 'line' | 'bar';
}

// eslint-disable-next-line react/display-name
const LogGraph = React.forwardRef<HTMLDivElement, ILogGraphProps>(
  (
    {
      type = 'value',
      logSelect = 2,
      logBase = 10,
      boundaryGap = true,
      xInverse = false,
      yInverse = false,
      chartType = 'bar',
    },
    ref,
  ) => {
    const [option, setOption] = React.useState<EChartsOption>({
      xAxis: {
        type: 'category',
        data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        inverse: xInverse,
        boundaryGap,
      },
      yAxis: {
        type,
        logBase,
        inverse: yInverse,
      },
      series: [
        {
          data: Array.from({ length: 11 }, (e, i) => Math.pow(logSelect, i)),
          type: chartType,
        },
      ],
    });

    React.useEffect(() => {
      setOption({
        xAxis: {
          type: 'category',
          data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          inverse: xInverse,
          boundaryGap,
        },
        yAxis: {
          type,
          logBase,
          inverse: yInverse,
        },
        series: [
          {
            data: Array.from({ length: 11 }, (e, i) => Math.pow(logSelect, i)),
            type: chartType,
          },
        ],
      });
    }, [type, logBase, boundaryGap, xInverse, yInverse, chartType, logSelect]);

    return (
      <div ref={ref}>
        <ECharts
          option={option}
          opts={{ renderer: 'canvas', width: 500, height: 500 }}
        />
      </div>
    );
  },
);

export default LogGraph;
