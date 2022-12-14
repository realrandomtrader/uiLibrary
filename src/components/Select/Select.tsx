/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// import Checkbox from '@material-ui/core/Checkbox';
// import Chip from '@material-ui/core/Chip';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import FormControl from '@material-ui/core/FormControl';
// import InputBase from '@material-ui/core/InputBase';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
import {
  withStyles
} from '@mui/styles';

// import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, Typography, Checkbox, Chip, FormControl, InputBase, MenuItem, Select, InputLabel, IconButton } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener'
import React, { useEffect, useState } from 'react';
import ClosedDropdown from './static/ClosedDropdown';
import OpenedDropdown from './static/OpenedDropdown';
import { useStyles} from './styles';

/** @public */
export type SelectInputBaseClassKey = 'root' | 'input';

const BootstrapInput = withStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        'label + &': {
          marginTop: '10px',
        },
      },
      input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#eee',
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        '&:focus': {
          background:  '#eee',
          borderRadius: 4,
        },
      },
    }),
  { name: 'BackstageSelectInputBase' },
)(InputBase);

/** @public */
export type SelectClassKey =
  | 'formControl'
  | 'label'
  | 'chips'
  | 'chip'
  | 'checkbox'
  | 'root';


/** @public */
export type SelectItem = {
  label: string;
  value: string | number;
};

/** @public */
export type SelectedItems = string | string[] | number | number[];

export type SelectProps = {
  multiple?: boolean;
  items: SelectItem[];
  label: string;
  placeholder?: string;
  selected?: SelectedItems;
  onChange: (arg: SelectedItems) => void;
  triggerReset?: boolean;
  native?: boolean;
  disabled?: boolean;
  margin?: 'dense' | 'none';
};

/** @public */
export function SelectComponent(props: SelectProps) {
  const {
    multiple,
    items,
    label,
    placeholder,
    selected,
    onChange,
    triggerReset,
    native = false,
    disabled = false,
    margin,
  } = props;
  const classes = useStyles();
  const [value, setValue] = useState<SelectedItems>(
    selected || (multiple ? [] : ''),
  );
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setValue(multiple ? [] : '');
  }, [triggerReset, multiple]);

  useEffect(() => {
    if (selected !== undefined) {
      setValue(selected);
    }
  }, [selected]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as SelectedItems);
    onChange(event.target.value as SelectedItems);
  };

  const handleClick = (event: React.ChangeEvent<any>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    setOpen(previous => {
      if (multiple && !(event.target instanceof HTMLElement)) {
        return true;
      }
      return !previous;
    });
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleDelete = (selectedValue: string | number) => () => {
    const newValue = (value as any[]).filter(chip => chip !== selectedValue);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.formLabel}>{label}</InputLabel>
          <Select
            aria-label={label}
            value={value}
            native={native}
            disabled={disabled}
            data-testid="select"
            displayEmpty
            multiple={multiple}
            margin={margin}
            onChange={handleChange}
            onClick={handleClick}
            open={isOpen}
            input={<BootstrapInput />}
            label={label}
            tabIndex={0}
            renderValue={s =>
              multiple && (value as any[]).length !== 0 ? (
                <div className={classes.chips}>
                  {(s as string[]).map(selectedValue => (
                    <Chip
                      key={items.find(el => el.value === selectedValue)?.value}
                      label={
                        items.find(el => el.value === selectedValue)?.label
                      }
                      clickable
                      onDelete={handleDelete(selectedValue)}
                      className={classes.chip}
                    />
                  ))}
                </div>
              ) : (
                <Typography>
                  {(value as any[]).length === 0
                    ? placeholder || ''
                    : items.find(el => el.value === s)?.label}
                </Typography>
              )
            }
            IconComponent={() =>
              !isOpen ? <ClosedDropdown /> : <OpenedDropdown />
            }
            MenuProps={{
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
              transformOrigin: {
                vertical: 'top',
                horizontal: 'left',
              },
            }}
          >
            {placeholder && !multiple && (
              <MenuItem value={[]}>{placeholder}</MenuItem>
            )}
            {native
              ? items &&
                items.map(item => (
                  <option value={item.value} key={item.value}>
                    {item.label}
                  </option>
                ))
              : items &&
                items.map(item => (
                  <MenuItem key={item.value} value={item.value}>
                      <Checkbox
                        color="primary"
                        checked={(value as any[]).includes(item.value) || false}
                        className={classes.checkbox}
                      />
                    {item.label}
                    {multiple && (
                      <Checkbox
                        color="primary"
                        checked={(value as any[]).includes(item.value) || false}
                        className={classes.checkbox}
                      />
                    )}
                  </MenuItem>
                ))}
          </Select>
        </FormControl>
      </ClickAwayListener>
    </div>
  );
}
