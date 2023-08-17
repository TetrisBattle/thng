import { Header } from 'xtools/components'
import { isInt } from 'xtools/utils'

function App() {
  console.log(isInt('1'))
  console.log(isInt('This is a number'))

  return (
    <Header />
  )
}

export default App
