import { Box, Button, Typography, isInt } from '@thng/react'

export const App = () => {
	console.log(isInt('asd'))

	return (
		<>
			<div>asd</div>
			<Box sx={{ p: 2 }}>
				<Typography>App</Typography>
				<Button>Button</Button>
			</Box>
		</>
	)
}
