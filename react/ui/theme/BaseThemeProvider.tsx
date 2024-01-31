import React, { createContext } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { ThemeStore } from './ThemeStore.ts'
import { useThemeStore } from './useThemeStore'
import { observer } from 'mobx-react-lite'

const themeStore = new ThemeStore()
export const ThemeStoreContext = createContext(themeStore)

type BaseThemeProviderProps = {
	children: React.ReactNode
}

export const BaseThemeProvider = observer(
	({ children }: BaseThemeProviderProps) => {
		const themeStore = useThemeStore()
		const theme = createTheme(themeStore.themeOptions)

		return (
			<ThemeStoreContext.Provider value={themeStore}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					{children}
				</ThemeProvider>
			</ThemeStoreContext.Provider>
		)
	}
)
