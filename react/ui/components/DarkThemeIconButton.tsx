import React from 'react'
import { Brightness4Outlined as Brightness4OutlinedIcon } from '@mui/icons-material'
import { IconButton, IconButtonProps } from '@mui/material'
import { useThemeStore } from '../theme/useThemeStore'

export const DarkThemeIconButton = (iconButtonProps: IconButtonProps) => {
	const themeStore = useThemeStore()

	return (
		<IconButton
			onClick={themeStore.togglePaletteMode}
			{...iconButtonProps}
			sx={{ color: 'inherit', ...iconButtonProps.sx }}
		>
			<Brightness4OutlinedIcon />
		</IconButton>
	)
}
