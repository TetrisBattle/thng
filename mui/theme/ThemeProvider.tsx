import React from 'react'
import { CssBaseline, Theme } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { createTheme } from './createTheme'

type ThemeProviderProps = {
	theme?: Theme
	children: React.ReactNode
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
	const defaultTheme = createTheme()

	return (
		<MuiThemeProvider theme={theme ?? defaultTheme}>
			<CssBaseline />
			{children}
		</MuiThemeProvider>
	)
}
