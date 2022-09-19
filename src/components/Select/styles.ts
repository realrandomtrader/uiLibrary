import { createStyles, makeStyles } from '@mui/styles';

import {  Theme} from '@mui/material'
export const useStyles = makeStyles(
    (theme: Theme) =>
      createStyles({
        formControl: {
          margin: `10px 0px`,
          maxWidth: 300,
        },
        label: {
          transform: 'initial',
          fontWeight: 'bold',
          fontSize: 14,
          color: '#000',
          '&.Mui-focused': {
            color: '#000',
          },
        },
        formLabel: {
          transform: 'initial',
          fontWeight: 'bold',
          fontSize: 14,
          color: '#000',
          '&.Mui-focused': {
            color: '#000',
          },
        },
        chips: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        chip: {
          margin: 2,
        },
        checkbox: {},
        root: {
          display: 'flex',
          flexDirection: 'column',
        },
      }),
    { name: 'BackstageSelect' },
  );
  