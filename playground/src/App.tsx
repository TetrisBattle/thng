/* eslint-disable */
import { LoadingButton, isInt } from 'xtools'

function App() {
	console.log(isInt('1'))
	console.log(isInt('This is a number'))

	return <LoadingButton isLoading={true} />
}

export default App
