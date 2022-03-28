import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	currentUser: '', // TODO: might be worth storing currentUser as {name: '', albums: []}
	userData: {}
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action) => {
			if (!state.userData[action.payload]) {
				state.userData[action.payload] = {
					icon: 0,
					albums: {}
				}
			}
			state.currentUser = action.payload
		},
		logout: (state) => {
			state.currentUser = initialState.currentUser
		},
		setIcon: (state, action) => {
			state.userData[state.currentUser].icon = action.payload
		},
		addAlbum: (state, action) => {
			let user = state.currentUser
			state.userData[user].albums[action.payload] = []
		},
		removeAlbum: (state, action) => {
			let user = state.currentUser
			delete state.userData[user].albums[action.payload]
		},
		addImageToAlbum: (state, action) => {
			let user = state.currentUser
			let albumData = state.userData[user].albums[action.payload.album]
			albumData.push(action.payload.imageData)
			state.userData[user].albums[action.payload.album] = albumData
		},
		removeImageFromAlbum: (state, action) => {
			let user = state.currentUser
			let albumData = state.userData[user].albums[action.payload.album].filter(imageData => imageData.id !== action.payload.imageData.id)
			state.userData[user].albums[action.payload.album] = albumData
		}
	},
})

export const { login, logout, setIcon, addAlbum, removeAlbum, addImageToAlbum, removeImageFromAlbum } = userSlice.actions

export default userSlice.reducer