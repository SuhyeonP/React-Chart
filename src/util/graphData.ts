import { EChartsOption } from 'echarts-for-react';
import { Charts, IEChartOptions } from '~/src/util/types';

const dataValue = [10, 15, 7, 12, 6, 1, 0, 20];

const max = Math.max(...dataValue);
const datalist = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',
  'SpecialItem',
];

const makeData = dataValue.map(ele => {
  return {
    value: ele,
    itemStyle: {
      color: ele === max ? 'orange' : '#6a77d7',
    },
  };
});

export const barLine = (value: 'bar' | 'line'): EChartsOption => {
  return {
    xAxis: {
      type: 'category',
      data: datalist,
      gridIndex: 0,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: makeData,
        type: value,
      },
    ],
  };
};

export const angleBarGraph = {
  polar: {
    // [중간 빈공간 크기, 차트 자체 크기]
    radius: [0, '100%'],
  },
  angleAxis: {
    max: max,
    // 원그래프의 max
    startAngle: 0,
    // 시작각도
  },
  radiusAxis: {
    type: 'category',
    data: datalist,
  },
  tooltip: {},
  series: {
    type: 'bar',
    data: makeData,
    coordinateSystem: 'polar',
    // coordinateSystem: 좌표계 , cartesian2d: xAxisIndex, yAxisIndex 와 함께 2차원 직교좌표를 사용해 축 구성요소를 할당
    // polar: palarIndex 와 함께 극좌표를 사용하여 해당 극좌표 구성요소를 할당한다.
    label: {
      show: true,
      position: 'middle', // or 'start', 'insideStart', 'end', 'insideEnd' label 위치
      formatter: '{b}: {c}',
      // a: series, b: category, c: data
    },
  },
};

export const getChartData: Record<Charts, IEChartOptions> = {
  bar: {
    id: 'bar',
    list: [barLine('bar'), angleBarGraph],
  },
  line: {
    id: 'line',
    list: [barLine('line')],
  },
  pie: {
    id: 'pie',
    list: [barLine('bar')],
  },
  sunburst: {
    id: 'sunburst',
    list: [barLine('bar')],
  },
  treemap: {
    id: 'treemap',
    list: [barLine('bar')],
  },
};
