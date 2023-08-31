import { Button, ButtonProps, CircularProgress } from '@mui/material'
import { useRef } from 'react'

type LoadingButtonProps = ButtonProps & {
	isLoading: boolean
}

export const LoadingButton = ({
	isLoading,
	children,
	...props
}: LoadingButtonProps) => {
	const loadingButtonRef = useRef<HTMLButtonElement>(null)

	return (
		<Button
			ref={loadingButtonRef}
			{...props}
			sx={{
				width: loadingButtonRef.current
					? loadingButtonRef.current.clientWidth + 1 // +1 to fix rounding issues
					: null,
				height: loadingButtonRef.current?.clientHeight,
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
