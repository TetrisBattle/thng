import React from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { getDefaultTheme } from 'package'

type MuiThemeProviderProps = {
	children: React.ReactNode
}

export const MuiThemeProvider = ({ children }: MuiThemeProviderProps) => {
	const isDarkTheme = true
	const defaultTheme = getDefaultTheme(isDarkTheme)

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}
