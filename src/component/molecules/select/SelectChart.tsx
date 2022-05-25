import React from 'react';
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Charts } from '~/src/util/types';

interface IProps {
  selected: Charts;
  changeSelected: (
    event: React.MouseEvent<HTMLElement>,
    selected: Charts,
  ) => void;
}

const SelectChart = ({ selected, changeSelected }: IProps): JSX.Element => {
  return (
    <Grid container>
      <ToggleButtonGroup value={selected} onChange={changeSelected} exclusive>
        <ToggleButton value="bar">Bar</ToggleButton>
        <ToggleButton value="line">Line</ToggleButton>
        <ToggleButton value="pie">Pie</ToggleButton>
        <ToggleButton value="treemap">Treemap</ToggleButton>
        <ToggleButton value="sunburst">Sunburst</ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
};

export default React.memo(SelectChart);
