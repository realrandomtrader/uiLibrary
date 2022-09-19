
// import React from 'react';
// // import FormControl from '@material-ui/core/FormControl';
// import { Controller, Control, UseFormSetValue } from 'react-hook-form';
// import { FormValues } from '../../types';
// // import {
// //   KeyboardDatePicker,
// //   MuiPickersUtilsProvider,
// // } from '@muipickers';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

// import DatePicker from '@mui/lab/DatePicker';
// import LuxonUtils from '@date-io/luxon';
// // import { IconButton } from '@material-ui/core';
// // import ClearIcon from '@material-ui/icons/Clear';

// import { FormControl, IconButton } from '@mui/material';
// import { Clear } from '@mui/icons-material';

// export type DateSelectorProps = {
//   name: 'startDate' | 'endDate';
//   control: Control<FormValues, object>;
//   setValue: UseFormSetValue<FormValues>;
// };

// export const DateSelector = ({ name, control, setValue }: DateSelectorProps) => {
//   const label = `${
//     name?.charAt(0).toLocaleUpperCase('en-US') + name?.slice(1, name.indexOf('D'))
//   } date`;

//   return (
//     <Controller
//       name={name}
//       control={control}
//       render={({ field }) => (
//         <FormControl>
//           <LocalizationProvider utils={LuxonUtils}>
//             <DatePicker
//               disableToolbar
//               format="dd-MM-yyyy"
//               label={label}
//               value={field.value}
//               onChange={(date: { toISO: () => string | null | undefined; }) => {
//                 setValue(name, date?.toISO());
//               }}
//               InputProps={{
//                 endAdornment: (
//                   <IconButton onClick={() => setValue(name, null)}>
//                     <Clear />
//                   </IconButton>
//                 ),
//               }}
//               InputAdornmentProps={{
//                 position: 'start',
//               }}
//             />
//           </LocalizationProvider>
//         </FormControl>
//       )}
//     />
//   );
// };


import React from 'react';
import {
  InputBase,
  InputProps,
  Theme,
  Typography,
} from '@mui/material';
import {
    withStyles
  } from '@mui/styles';
import { createStyles, makeStyles } from '@mui/styles';

const BootstrapInput = withStyles((theme: Theme) => createStyles({
    root: {
      margin: '20px',
      maxWidth: 300,
      'label + &': {
        marginTop:' 5px',
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: 'red',
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      fontFamily: 'Helvetica Neue',
      height: 25,
      '&:focus': {
        background: 'yellow',
        borderRadius: 4,
      },
    },
  }),
)(InputBase);

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export interface DatePickerProps {
  label: string;
  onDateChange?: (date: string) => void;
}

export const DatePicker = ({
  label,
  onDateChange,
  ...inputProps
}: InputProps & DatePickerProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="button">{label}</Typography>
      <BootstrapInput
        inputProps={{ 'aria-label': label }}
        type="date"
        fullWidth
        onChange={(event: { target: { value: string; }; }) => onDateChange?.(event.target.value)}
        {...inputProps}
      />
    </div>
  );
};

