import { ThemeOptions } from '@mui/material'
import { makeAutoObservable } from 'mobx'
import { deepMerge } from '../../utils/objectHandler'

export class ThemeStore {
	isDarkMode = true

	private themeOptions: ThemeOptions = {
		mixins: {
			toolbar: {}, // This will get rid of minHeight styles
		},
		typography: {
			h1: {
				fontSize: '3rem', // 48px
			},
			h2: {
				fontSize: '2rem', //32px
			},
			h3: {
				fontSize: '1.5rem', // 24px
			},
			h4: {
				fontSize: '1.25rem', // 20px
			},
			h5: {
				fontSize: '1rem', // 16px
			},
			button: {
				fontSize: '1rem',
				textTransform: 'none',
			},
		},
		components: {
			MuiButton: {
				defaultProps: {
					variant: 'contained',
				},
			},
			MuiTextField: {
				defaultProps: {
					autoComplete: 'off',
					fullWidth: true,
				},
			},
			MuiAppBar: {
				defaultProps: {
					position: 'static',
				},
			},
			MuiToolbar: {
				defaultProps: {
					disableGutters: true,
				},
			},
		},
	}

	private lightThemeOptions: ThemeOptions = {
		palette: {
			mode: 'light',
		},
	}

	private darkThemeOptions: ThemeOptions = {
		palette: {
			mode: 'dark',
			primary: {
				main: '#BB85FC',
			},
			secondary: {
				main: '#10DAC6',
			},
		},
	}

	constructor() {
		makeAutoObservable(this)

		const isDarkMode = localStorage.getItem('isDarkMode')
		if (isDarkMode) this.setIsDarkMode(isDarkMode === 'true')
	}

	get theme(): ThemeOptions {
		const themeCopy = { ...this.themeOptions }
		return deepMerge(
			themeCopy,
			this.isDarkMode ? this.darkThemeOptions : this.lightThemeOptions
		)
	}

	setIsDarkMode = (isDarkMode: boolean) => {
		this.isDarkMode = isDarkMode
		localStorage.setItem('isDarkMode', isDarkMode.toString())
	}

	toggleDarkMode = () => {
		this.setIsDarkMode(!this.isDarkMode)
	}

	setThemeOptions = (options: ThemeOptions) => {
		const themeOptionsCopy = { ...this.themeOptions }
		this.themeOptions = deepMerge(themeOptionsCopy, options)
	}

	setLightThemeOptions = (options: ThemeOptions) => {
		const lightThemeOptionsCopy = { ...this.lightThemeOptions }
		this.lightThemeOptions = deepMerge(lightThemeOptionsCopy, options)
	}

	setDarkThemeOptions = (options: ThemeOptions) => {
		const darkThemeOptionsCopy = { ...this.darkThemeOptions }
		this.darkThemeOptions = deepMerge(darkThemeOptionsCopy, options)
	}
}
