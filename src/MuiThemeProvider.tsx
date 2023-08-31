import React from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from 'mui'

type MuiThemeProviderProps = {
	children: React.ReactNode
}

export const MuiThemeProvider = ({ children }: MuiThemeProviderProps) => {
	const defaultTheme = createTheme({
		palette: {
			mode: 'dark',
			// primary: {
			// 	main: '#BB8511',
			// },
			// secondary: {
			// 	main: '#10DAC6',
			// },
		},
		components: {
			MuiButton: {
				defaultProps: {
					// variant: 'text',
				},
			},
		},
	})

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}
