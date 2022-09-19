import { Theme } from "@mui/material"
import { createStyles } from "@mui/material"
import { IIconProps } from "./Icon.props"
import { getFontSize } from './getFontSize'
export const style = (theme: Theme) => createStyles({
    root: ({ size }: IIconProps) => ({
      '-moz-osx-font-smoothing': 'grayscale',
      '-webkit-font-smoothing': 'antialiased',
      display: 'inline-block',
      flexShrink: 0,
      fontFamily: 'natds-icons',
      fontSize: getFontSize({ size, theme }),
  
      /**
       * Overrides the user agent stylesheet for `i` elements
       */
      fontStyle: 'normal',
      fontVariant: 'normal',
      fontWeight: 400,
      letterSpacing: 'normal',
      lineHeight: 1,
      overflow: 'hidden',
      textRendering: 'auto',
      userSelect: 'none'
    })
  })