import React, { forwardRef } from 'react'
import { MenuItem, TextField, TextFieldProps } from '@mui/material'

export type SelectOptions =
	| string[]
	| {
			value: string | number
			label: string
	  }[]

export type SelectProps = Omit<TextFieldProps, 'select'> & {
	options: SelectOptions
	addEmptyOption?: boolean
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
	({ options, addEmptyOption, ...otherProps }, ref) => {
		return (
			<TextField
				ref={ref}
				select
				SelectProps={{
					onClose: () => {
						setTimeout(() => {
							;(document.activeElement as HTMLElement).blur()
						}, 0)
					},
				}}
				{...otherProps}
			>
				{addEmptyOption && <MenuItem value=''>&nbsp;</MenuItem>}
				{options.map((option) => {
					if (typeof option === 'string') {
						return (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						)
					}
					return (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					)
				})}
			</TextField>
		)
	}
)
