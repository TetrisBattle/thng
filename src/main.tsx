import React from 'react'
import ReactDOM from 'react-dom/client'
import { Playground } from './Playground'
import { MuiThemeProvider } from './MuiThemeProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<MuiThemeProvider>
			<Playground />
		</MuiThemeProvider>
	</React.StrictMode>
)
