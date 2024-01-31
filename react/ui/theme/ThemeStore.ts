import { ThemeOptions, PaletteMode } from '@mui/material'
import { makeAutoObservable } from 'mobx'
import { deepMerge } from '../../utils/objectHandler'

export class ThemeStore {
	paletteMode: PaletteMode = 'dark'

	private defaultThemeOptions: ThemeOptions = {
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

		const paletteMode = localStorage.getItem('paletteMode')
		if (paletteMode) this.setPaletteMode(paletteMode as PaletteMode)
	}

	get themeOptions(): ThemeOptions {
		const themeCopy = { ...this.defaultThemeOptions }
		return deepMerge(
			themeCopy,
			this.paletteMode === 'dark'
				? this.darkThemeOptions
				: this.lightThemeOptions
		)
	}

	setPaletteMode = (paletteMode: PaletteMode) => {
		this.paletteMode = paletteMode
		localStorage.setItem('paletteMode', paletteMode)
	}

	togglePaletteMode = () => {
		if (this.paletteMode === 'dark') this.setPaletteMode('light')
		else this.setPaletteMode('dark')
	}

	setThemeOptions = (options: ThemeOptions) => {
		const themeOptionsCopy = { ...this.defaultThemeOptions }
		this.defaultThemeOptions = deepMerge(themeOptionsCopy, options)
	}

	setDarkThemeOptions = (options: ThemeOptions) => {
		const darkThemeOptionsCopy = { ...this.darkThemeOptions }
		this.darkThemeOptions = deepMerge(darkThemeOptionsCopy, options)
	}

	setLightThemeOptions = (options: ThemeOptions) => {
		const lightThemeOptionsCopy = { ...this.lightThemeOptions }
		this.lightThemeOptions = deepMerge(lightThemeOptionsCopy, options)
	}
}
