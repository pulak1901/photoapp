import React from 'react'
import ReactDOM from 'react-dom'
import { 
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom"
import { store } from './app/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

import Photos from './routes/photos'
import { Album } from './routes/album'
import PageNotFound from './routes/pagenotfound'
import { Login } from './routes/login'

import './index.scss'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/photos" element={<Photos />}/>
					<Route path="/album/:name" element={<Album />}/>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
