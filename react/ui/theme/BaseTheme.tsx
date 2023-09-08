import React from 'react'
import {
	CssBaseline,
	ThemeOptions,
	ThemeProvider,
	createTheme,
} from '@mui/material'
import { getDefaultTheme } from './getDefaultTheme'
import { deepMerge } from '../../utils/objectHandler'

type BaseThemeProps = {
	theme?: ThemeOptions
	children: React.ReactNode
}

export const BaseTheme = ({ theme, children }: BaseThemeProps) => {
	const themeOptions = theme
		? deepMerge(getDefaultTheme(theme?.palette?.mode !== 'light'), theme)
		: getDefaultTheme()

	const createdTheme = createTheme(themeOptions)

	return (
		<ThemeProvider theme={createdTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}
