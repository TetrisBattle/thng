import React from 'react'
import { Box, Typography } from '@thng/react'

export const NotFound = () => {
	return (
		<Box
			id='NotFound'
			sx={{
				display: 'flex',
				justifyContent: 'center',
				mt: 3,
			}}
		>
			<Typography
				variant='h1'
				sx={{
					fontWeight: (theme) => theme.typography.fontWeightMedium,
				}}
			>
				Not Found!
			</Typography>
		</Box>
	)
}
