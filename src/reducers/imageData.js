import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const axios = require('axios').default

const initialState = {
	imageData: [],
	isFetching: false,
	page: 0,
	hasMore: true
}

// fetches the current page (according to state) of image data
export const fetchImageData = createAsyncThunk('posts/fetchImageData', async (_, thunkAPI) => {
	const start = thunkAPI.getState().imageData.page * 40
	const response = await axios.get(`api/image?_start=${start}&_limit=40`)
	return response.data
})

export const imageDataSlice = createSlice({
	name: 'imageData',
	initialState,
	reducers: {
		clearData: (state) => {
			state.imageData = initialState.imageData
			state.isFetching = initialState.isFetching
			state.page = initialState.page
			state.hasMore = initialState.hasMore
		}
	},
	extraReducers: {
		[fetchImageData.pending]: (state) => {
			state.isFetching = true
		},
		[fetchImageData.fulfilled]: (state, action) => {
			state.imageData = [...state.imageData, ...action.payload]
			state.page = state.page + 1
			state.hasMore = action.payload.length > 0
			state.isFetching = false
		},
		[fetchImageData.rejected]: (state) => {
			state.isFetching = false
		}
	}
})


export const { clearData } = imageDataSlice.actions

export default imageDataSlice.reducer