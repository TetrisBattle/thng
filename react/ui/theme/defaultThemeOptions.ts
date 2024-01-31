import { ThemeOptions } from '@mui/material'

export const defaultThemeOptions: ThemeOptions = {
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

export const defaultDarkThemeOptions: ThemeOptions = {
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

export const defaultLightThemeOptions: ThemeOptions = {
	palette: {
		mode: 'light',
	},
}
