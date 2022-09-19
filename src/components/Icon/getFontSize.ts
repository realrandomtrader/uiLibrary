import { Theme } from '@mui/material/styles/createTheme'
import { IIconSizes } from './Icon.props'
// import { IIconSizes } from '@naturacosmeticos/natds-styles'
// import { IThemeWeb } from '../../Themes'

type IconFontSizeArgs = {
  size?: keyof IIconSizes,
  theme: Theme
}


export const getFontSize : ({ size, theme }: IconFontSizeArgs) => string = ({ size = 'standard', theme }) => {
  /**
   * @todo fix TS7053: Element implicitly has an 'any' type, expression of type 'string' can't be used to index type {}
   */
  if (typeof theme !== 'undefined' && typeof theme.breakpoints !== 'undefined' && typeof theme.breakpoints['down'] !== 'undefined') {
    const { breakpoints } = theme
    const fontSize = breakpoints['down']

    return `${fontSize}px`
  }

  return '1em'
}
