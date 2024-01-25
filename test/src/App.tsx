import { Box, Button, Typography, useThemeStore } from '@thng/react'

export const App = () => {
	const themeStore = useThemeStore()

	return (
		<>
			<Box sx={{ p: 2 }}>
				<Typography>App</Typography>
				<Button onClick={themeStore.toggleDarkMode}>Theme</Button>
			</Box>
		</>
	)
}
