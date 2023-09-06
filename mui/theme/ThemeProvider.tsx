import React from 'react'
import { CssBaseline } from '@mui/material'
import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
} from '@mui/material/styles'
import { defaultTheme } from './defaultTheme'

type ThemeProviderProps = {
	children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	return (
		<MuiThemeProvider theme={createTheme(defaultTheme)}>
			<CssBaseline />
			{children}
		</MuiThemeProvider>
	)
}
