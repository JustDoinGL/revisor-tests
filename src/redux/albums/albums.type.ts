import { Album } from '../../@types/albums'
import { Status } from '../@types/enum'

export type OpenAlbum = {
	content: Album[]
	id: string
}

type AlbumsState = {
	albums: Album[]
	status: Status
	openAlbum: OpenAlbum[]
}

export const initialState: AlbumsState = {
	albums: [],
	status: Status.pending,
	openAlbum: []
}
