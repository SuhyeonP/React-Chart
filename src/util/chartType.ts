export interface IChartCommon {
  show?: boolean;
}

export interface ICommonStyle {
  color?: string;
  width?: number;
}

export interface ICommonShadowStyle {
  shadowBlur?: number;
  shadowColor?: string;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
}

export type DataPointer = 'none' | 'shadow' | 'line';
export type VerticalDirection = 'top' | 'middle' | 'bottom';
export type AlignDirection = 'left' | 'center' | 'right';
export type Direction = 'top' | 'bottom' | 'left' | 'right';
export type AxisType = 'category' | 'log' | 'time' | 'value';
export type Location = 'end' | 'start' | 'middle' | 'center';
export type FontStyle = 'normal' | 'italic' | 'oblique';
export type FontWeight = number | 'normal' | 'bold' | 'border' | 'lighter';
export type BorderType = 'solid' | 'dashed' | 'dotted';
export type BorderTypeExtends = BorderType | number | number[];
export type OverflowType = 'none' | 'truncate' | 'break' | 'breakAll';
export type CapType = 'butt' | 'round' | 'square';
export type JoinType = 'bevel' | 'round' | 'miter';

export interface IMinMaxValue {
  min?: number;
  max?: number;
}

export type MinMaxVoid = (value: IMinMaxValue) => number;
export type IntervalVoid = (index: number, value: string) => boolean;

export interface IInterval {
  interval?: 'auto' | number | IntervalVoid;
}
export interface IFontStyle {
  fontStyle?: FontStyle;
  fontWeight?: FontWeight;
  fontFamily?: string;
}

export interface IBorderStyle {
  borderColor?: string;
  borderWidth?: number;
  borderType?: BorderTypeExtends;
  borderDashOffset?: number;
  borderRadius?: number;
}

export interface ITextOverflow {
  overflow?: string;
  ellipsis?: OverflowType;
}

export interface ITextStyle {
  textBorderColor?: string;
  textBorderWidth?: BorderTypeExtends;
  textBorderDashOffset?: number;
  textShadowColor?: string;
  textShadowBlur?: number;
  textShadowOffsetX?: number;
  textShadowOffsetY?: number;
}

export interface IStyle
  extends ICommonStyle,
    ICommonShadowStyle,
    IFontStyle,
    IBorderStyle,
    ITextStyle,
    ITextOverflow {
  align?: AlignDirection;
  verticalAlign?: VerticalDirection;
  lineHeight?: number;
  backgroundColor?: string | Record<string, string>;
  padding?:
    | number
    | [number, number]
    | [number, number, number]
    | [number, number, number, number];
  rich?: any;
  height?: number;
}

export interface ILineStyle extends ICommonStyle, ICommonShadowStyle {
  dashOffset?: number;
  type?: BorderType;
  cap?: CapType;
  join?: JoinType;
  miterLimit?: number;
  opacity?: number;
}

export interface IAxisLine extends IChartCommon {
  onZero?: boolean;
  onZeroAxisIndex?: number;
  symbol?: string | [string, string];
  symbolSize?: number[];
  symbolOffset?: number[] | number;
  lineStyle?: ILineStyle;
}

export interface IAxisTick extends IChartCommon, IInterval {
  alignWithLabel?: boolean;
  inside?: boolean;
  length?: number;
  lineStyle?: ILineStyle;
}

export interface IMinorTick extends IChartCommon {
  splitNumber?: number;
  length?: number;
  lineStyle?: ILineStyle;
}

export interface IAxisLabel
  extends IAxisTick,
    IFontStyle,
    IBorderStyle,
    ICommonShadowStyle,
    ITextStyle,
    ITextOverflow {
  rotate?: number;
  margin?: number;
  formatter?: string | any;
  showMinLabel?: boolean;
  showMaxLabel?: boolean;
  hideOverlap?: boolean;
  color?: string;
  fontSize?: number;
  align?: AlignDirection;
  verticalAlign?: VerticalDirection;
  lineHeight?: number;
  backgroundColor?: string | Record<string, string>;
  padding?:
    | number
    | [number, number]
    | [number, number, number]
    | [number, number, number, number];
  height?: number;
  rich?: any;
}

export interface ISplitLine extends IChartCommon {
  lineStyle?: ILineStyle;
}

export interface IAreaStyle {
  color?: string;
  opacity?: number;
}

export interface ISplitArea extends IChartCommon, IInterval {
  areaStyle?: ICommonShadowStyle & IAreaStyle;
}

export interface IAxisData {
  value?: string;
  textStyle?: IStyle;
}

export interface IPrecision {
  precision?: string | number;
}

export interface IHandleProps extends IChartCommon, ICommonShadowStyle {
  icon?: any;
  size?: number | [any, any];
  margin?: number;
  throttle?: number;
}

export interface IAxisPointer extends IChartCommon {
  type?: DataPointer;
  snap?: boolean;
  z?: number;
  label: ICommonStyle & IStyle & IPrecision & IChartCommon;
  lineStyle?: ILineStyle;
  shadowStyle?: ICommonShadowStyle & Record<'color', string>;
  triggerTooltip?: boolean;
  value?: number;
  status?: boolean;
  handle?: IHandleProps;
}

export interface IXYAxisProps extends IChartCommon {
  gridIndex?: number;
  offset?: number;
  alignTicks?: boolean;
  position?: Direction;
  type?: AxisType;
  name?: string;
  nameLocation?: Location;
  nameTextStyle?: IStyle;
  nameGap?: number;
  nameRotate?: number;
  inverse?: boolean;
  boundaryGap?: boolean | string[];
  min?: number | string | MinMaxVoid;
  max?: number | string | MinMaxVoid;
  scale?: boolean;
  splitNumber?: number;
  minInterval?: number;
  maxInterval?: number;
  interval?: number;
  logBase?: number;
  silent?: boolean;
  triggerEvent?: boolean;
  axisLine?: IAxisLine;
  axisTick?: IAxisTick;
  minorTick?: IMinorTick;
  axisLabel?: IAxisLabel;
  splitLine?: ISplitLine & IInterval;
  minorSplitLine?: ISplitLine;
  splitArea?: ISplitArea;
  data?: IAxisData[] | any[];
  axisPointer?: IAxisPointer;
  zlevel?: number;
  z?: number;
}

export interface IEChartOptions {
  xAxis?: IXYAxisProps;
  yAxis?: IXYAxisProps;
}
