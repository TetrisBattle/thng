type LogoProps = {
	width: number
	height: number
}

export const Logo = ({ width, height }: LogoProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M14.1 12L18 6H14.3684L12 9.9L9.63158 6H6L9.9 12L6 18H9.63158L12 14.1L14.3684 18H18L14.1 12Z'
				fill='black'
				stroke='url(#paint0_linear_117_24)'
				strokeWidth='0.8'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_117_24'
					x1='12'
					y1='6'
					x2='12'
					y2='18'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#00FF00' />
					<stop offset='1' stopColor='#00CCFF' />
				</linearGradient>
			</defs>
		</svg>
	)
}
