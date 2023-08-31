import {
	Theme,
	ThemeOptions,
	createTheme as muiCreateTheme,
} from '@mui/material/styles'
import getDefaultTheme from './defaultTheme'

export const createTheme = (
	options?: ThemeOptions,
	...args: object[]
): Theme => {
	const defaultTheme = getDefaultTheme(options?.palette?.mode !== 'light')
	if (options) return muiCreateTheme(defaultTheme, options, ...args)
	return defaultTheme
}
