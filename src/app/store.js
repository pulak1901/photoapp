import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/user'
import {loadState} from './localStorage'
import imageDataReducer from '../reducers/imageData'

export const store = configureStore({
	reducer: {
		user: userReducer,
		imageData: imageDataReducer
	},
	preloadedState: loadState()
})
