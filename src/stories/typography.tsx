import React from 'react'
import { Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

interface ITypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit" | undefined,
  color: string,
  text: string,
  sx?: any,
  useToolTip?: boolean 
}
const MAX_LENGTH = 20;

const TypoGraphy = ({ variant, color, text, useToolTip=false }: ITypographyProps) => {
  
  return (
    <>
      {text.length > MAX_LENGTH && useToolTip ?
        <Tooltip title={text}>
          <Typography variant={variant} color={color}>
          {`${text.substring(0, MAX_LENGTH)}...`}
          </Typography>
        </Tooltip> :
        <Typography variant={variant} color={color}>
          {text}
        </Typography>
      }
    </>
  )
}

export default TypoGraphy
