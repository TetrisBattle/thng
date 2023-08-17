/* eslint-disable no-console */
import { LoadingButton, Logo, isInt } from 'xtools'

function App() {
	console.log(isInt('1'))
	console.log(isInt('This is a number'))

	return (
		<>
			<Logo size={48} />
			<LoadingButton isLoading={true} />
		</>
	)
}

export default App
