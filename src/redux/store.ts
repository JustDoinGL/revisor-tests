import { configureStore } from '@reduxjs/toolkit'
import headerSlice from './header/headerSlice'
import usersSlice from './users/usersSlice'
import albumsSlice from './albums/albumsSlice'
import photosSlice from './photos/photosSlice'

const store = configureStore({
	reducer: {
		headerSlice,
		usersSlice,
		albumsSlice,
		photosSlice
	}
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
