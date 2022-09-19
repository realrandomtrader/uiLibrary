import * as React from 'react'
// import MaterialIcon from '@material-ui/core/Icon'
import { Icon as MaterialIcon} from '@mui/material'
import clsx from 'clsx'
import { style } from './Icon.styles'
import { IIconProps } from './Icon.props'

export type { IIconProps } from './Icon.props'

/**
 * ## Import
 *
 * ```
 * import { Icon } from '@naturacosmeticos/natds-web';
 * ```
 */
export const Icon = React.forwardRef<HTMLElement, IIconProps>(
  (
    props: IIconProps,
    ref
  ) => {
    const {
      className,
      name = 'filled-default-mockup',
      size = 'standard',
      color,
      ...otherProps
    } = props

    // const classes = style({ name, size })

    const checkColor = color === 'default' ? 'inherit' : color

    // const classNames = clsx([
    //   'natds-icons',
    //   `natds-icons-${String(name)}`,
    //   className,
    //   classes.root
    // ])

    return <MaterialIcon  component="i" color={checkColor} ref={ref} {...otherProps} />
  }
)

Icon.displayName = 'Icon'
export default Icon
