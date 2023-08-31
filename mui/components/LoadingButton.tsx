import React, { useRef } from 'react'
import { Button, ButtonProps, CircularProgress } from '@mui/material'

type LoadingButtonProps = ButtonProps & {
	isLoading: boolean
}

export const LoadingButton = ({
	isLoading,
	children,
	...props
}: LoadingButtonProps) => {
	const loadingButtonRef = useRef<HTMLButtonElement>(null)

	const { width, height } = loadingButtonRef.current
		? loadingButtonRef.current.getBoundingClientRect()
		: { width: null, height: null }

	return (
		<Button
			ref={loadingButtonRef}
			{...props}
			sx={{
				width: width,
				height: height,
				...props.sx,
			}}
		>
			{isLoading ? (
				<CircularProgress color='inherit' size={24} />
			) : (
				children
			)}
		</Button>
	)
}
