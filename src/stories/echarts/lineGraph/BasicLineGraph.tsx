import React from 'react';
import ECharts, { EChartsOption } from 'echarts-for-react';
import { Location } from '~/src/util/chartType';

export interface IBasicLineProps {
  lineData: number[];
  type: 'line' | 'bar';
  xName: string;
  axisData: any[];
  xNameLocation: Location;
  offset: number;
}

// eslint-disable-next-line react/display-name
const BasicLineGraph = React.forwardRef<HTMLDivElement, IBasicLineProps>(
  (
    {
      lineData = [0, 1, 2, 3],
      type = 'line',
      xName = 'test',
      axisData = ['test1', 'test2', 'test3', 'test4'],
      xNameLocation = 'end',
      offset = 0,
    },
    ref,
  ) => {
    const [option, setOption] = React.useState<EChartsOption>({
      xAxis: {
        type: 'category',
        data: axisData,
        name: xName,
        nameLocation: xNameLocation,
        offset,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: lineData,
          type: type,
        },
      ],
    });

    React.useEffect(() => {
      setOption({
        xAxis: {
          type: 'category',
          data: axisData,
          name: xName,
          nameLocation: xNameLocation,
          offset,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: lineData,
            type: type,
          },
        ],
      });
    }, [lineData, type, xName, axisData, xNameLocation, offset]);

    return (
      <div ref={ref}>
        <ECharts
          option={option}
          opts={{ renderer: 'canvas', width: 300, height: 500 }}
        />
      </div>
    );
  },
);

export default BasicLineGraph;
