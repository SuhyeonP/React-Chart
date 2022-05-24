import { EChartsOption } from 'echarts-for-react';

export const barLine = (value: 'bar' | 'line'): EChartsOption => {
  return {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'SpecialItem'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [
          120,
          200,
          150,
          200,
          80,
          10,
          70,
          {
            value: '300',
            itemStyle: {
              color: 'pink',
            },
          },
        ],
        type: value,
      },
    ],
  };
};

export const angleBarGraph = {
  polar: {
    radius: [30, '80%'],
  },
  angleAxis: {
    max: 4,
    startAngle: 75,
  },
  radiusAxis: {
    type: 'category',
    data: ['a', 'b', 'c', 'd'],
  },
  tooltip: {},
  series: {
    type: 'bar',
    data: [2, 1.2, 2.4, 3.6],
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'middle', // or 'start', 'insideStart', 'end', 'insideEnd'
      formatter: '{b}: {c}',
    },
  },
};
