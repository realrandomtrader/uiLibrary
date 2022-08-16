import React from 'react'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from "@mui/material";

export interface IMenuItem {
  value: string
  label: string;

}
interface IMenuItems{
  menuItems: IMenuItem[];
  defaultValue: string;
  handleClick: (event: SelectChangeEvent<unknown>,type:string,id:number | undefined) => void;
  elementId?:number;
  onClose:(event: React.SyntheticEvent) => void
}

const SelectInput = ({menuItems, defaultValue,handleClick,elementId,onClose}:IMenuItems) => {
    return (
        <Box sx={{ maxHeight: 20 }}>
          <Select
            value={defaultValue}
            onChange={(e) => handleClick(e,"gender",elementId)}
            onClose={onClose}
            sx={{ maxHeight: 20 }}
          >
            {menuItems.map((item, index) => (
                <MenuItem key={index} value={item.value} >{item.label}</MenuItem>
            ))}
          </Select>
      </Box>
    )
}

export default SelectInput
