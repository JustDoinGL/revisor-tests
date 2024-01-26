import { createSlice } from '@reduxjs/toolkit'

export type HeaderLinksType = {
	url: string
	name: string
}

type HeaderState = {
	LinksHeader: HeaderLinksType[]
}

const initialState: HeaderState = {
	LinksHeader: [
		{ url: '/', name: 'Каталог' },
		{ url: '/favorite', name: 'Избранное' }
	]
}

const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {}
})

export default headerSlice.reducer
