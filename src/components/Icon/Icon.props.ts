import { IconProps } from "@mui/material/Icon";
import { IconName } from './iconGroup/index'
// import { IIconSizes } from '@naturacosmeticos/natds-styles'
export type IconColor ='default' |
  'error' |
  'inherit' |
  'primary' |
  'secondary';

  export type IIconSizes ='24' |
  '28' |
  '32' |
  '38' |
  '50';

 export type IconSize = keyof IIconSizes;

export interface IIconProps extends Omit<IconProps, 'children' | 'fontSize' | 'name' | 'color'> {
    color?: IconColor;
    name: IconName;
     size?: IconSize;
}