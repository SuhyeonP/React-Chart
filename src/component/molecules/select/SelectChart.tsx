import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

interface IProps {
  selected: string;
  changeSelected: (
    event: React.MouseEvent<HTMLElement>,
    selected: string,
  ) => void;
}

const SelectChart = ({ selected, changeSelected }: IProps): JSX.Element => {
  return (
    <ToggleButtonGroup value={selected} onChange={changeSelected} exclusive>
      <ToggleButton value="bar">Bar</ToggleButton>
      <ToggleButton value="line">Line</ToggleButton>
      <ToggleButton value="pie">Pie</ToggleButton>
      <ToggleButton value="treemap">Treemap</ToggleButton>
      <ToggleButton value="sunburst">Sunburst</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default React.memo(SelectChart);
