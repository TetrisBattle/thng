import { useContext } from 'react'
import { ThemeStoreContext } from './BaseThemeProvider'

export const useThemeStore = () => {
	return useContext(ThemeStoreContext)
}
