import { ThemeOptions, PaletteMode } from '@mui/material'
import { makeAutoObservable } from 'mobx'
import { deepMerge } from '../../utils/objectHandler'
import {
	defaultDarkThemeOptions,
	defaultLightThemeOptions,
	defaultThemeOptions,
} from './defaultThemeOptions'

export class ThemeStore {
	paletteMode: PaletteMode = 'dark'
	private themeOptions = defaultThemeOptions
	private darkThemeOptions = defaultDarkThemeOptions
	private lightThemeOptions = defaultLightThemeOptions

	constructor() {
		makeAutoObservable(this)

		const paletteMode = localStorage.getItem('paletteMode')
		if (paletteMode) this.setPaletteMode(paletteMode as PaletteMode)
	}

	get theme(): ThemeOptions {
		const themeCopy = { ...this.themeOptions }
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

	addThemeOptions = (...options: ThemeOptions[]) => {
		options.forEach((option) => {
			switch (option.palette?.mode) {
				case 'dark': {
					const darkThemeOptionsCopy = { ...this.darkThemeOptions }
					this.darkThemeOptions = deepMerge(
						darkThemeOptionsCopy,
						option
					)
					break
				}
				case 'light': {
					const lightThemeOptionsCopy = { ...this.lightThemeOptions }
					this.lightThemeOptions = deepMerge(
						lightThemeOptionsCopy,
						option
					)
					break
				}
				default: {
					const themeOptionsCopy = { ...this.themeOptions }
					this.themeOptions = deepMerge(themeOptionsCopy, option)
					break
				}
			}
		})
	}
}
