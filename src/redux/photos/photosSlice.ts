import { initialState } from './photos.type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Status } from '../@types/enum'
import { fetchPhotos } from './getPhotos'
import { Photo } from '../../@types/photos'

const photosSlice = createSlice({
	name: 'photos',
	initialState,
	reducers: {
		isFavoritesPhoto: (state, action: PayloadAction<Photo>) => {
			const { url } = action.payload
			const photoIndex = state.favoritesPhoto.findIndex(
				photo => photo.url === url
			)

			if (photoIndex !== -1) {
				state.favoritesPhoto.splice(photoIndex, 1)
			} else {
				state.favoritesPhoto.push(action.payload)
			}
		},
		openModal: (state, action: PayloadAction<string>) => {
			state.urlModal = action.payload
			state.isOpenModal = true
		},
		closeModal: state => {
			state.urlModal = ''
			state.isOpenModal = false
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchPhotos.pending, state => {
				state.status = Status.pending
			})
			.addCase(fetchPhotos.fulfilled, (state, action) => {
				state.photos = action.payload

				const isObjectExists = state.openPhotos.some(
					item => item.id === state.photos[0].albumId
				)

				if (!isObjectExists) {
					state.openPhotos.push({
						content: state.photos,
						id: state.photos[0].albumId
					})
				}

				state.status = Status.fulfilled
			})
			.addCase(fetchPhotos.rejected, state => {
				state.status = Status.rejected
			})
	}
})

export default photosSlice.reducer

export const { isFavoritesPhoto, openModal, closeModal } = photosSlice.actions
