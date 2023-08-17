import { LoadingButton } from 'xtools/components'
import { isInt } from 'xtools/utils'

function App() {
  console.log(isInt('1'))
  console.log(isInt('This is a number'))

  return (
    <LoadingButton isLoading={true} />
  )
}

export default App
