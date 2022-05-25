import { EChartsOption } from 'echarts';

export type Charts = 'bar' | 'line' | 'pie' | 'treemap' | 'sunburst';

export interface IEChartOptions {
  id: string;
  list: EChartsOption[];
}
