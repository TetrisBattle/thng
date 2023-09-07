import { Theme, ThemeOptions, createTheme } from '@mui/material/styles'
import { defaultTheme } from './defaultTheme'
import { mergeDeep } from '../../utils/objectHandler'

export const theme = (newTheme: ThemeOptions): Theme => {
	return createTheme(mergeDeep(defaultTheme, newTheme))
}
