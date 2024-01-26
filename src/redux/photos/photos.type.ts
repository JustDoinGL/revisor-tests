import { Photo } from '../../@types/photos'
import { Status } from '../@types/enum'

export type FavoritesPhoto = Photo

export type OpenPhotos = {
	content: Photo[]
	id: string
}

type PhotosState = {
	photos: Photo[]
	status: Status
	favoritesPhoto: FavoritesPhoto[]
	urlModal: string
	isOpenModal: boolean
	openPhotos: OpenPhotos[]
}

export const initialState: PhotosState = {
	photos: [],
	status: Status.pending,
	favoritesPhoto: [],
	urlModal: '',
	isOpenModal: false,
	openPhotos: []
}
