import { initialState } from './albums.type'
import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../@types/enum'
import { fetchAlbums } from './getAlbums'

const albumsSlice = createSlice({
	name: 'albums',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchAlbums.pending, state => {
				state.status = Status.pending
			})
			.addCase(fetchAlbums.fulfilled, (state, action) => {
				state.albums = action.payload

				const isObjectExists = state.openAlbum.some(
					item => item.id === state.albums[0].userId
				)

				if (!isObjectExists) {
					state.openAlbum.push({
						content: state.albums,
						id: state.albums[0].userId
					})
				}

				state.status = Status.fulfilled
			})
			.addCase(fetchAlbums.rejected, state => {
				state.status = Status.rejected
			})
	}
})

export default albumsSlice.reducer
