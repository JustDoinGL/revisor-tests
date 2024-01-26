import { Album } from '../../@types/albums'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAlbums = createAsyncThunk<Album[], string>(
	'albums/fetchAlbums',
	async function (id, { rejectWithValue }) {
		try {
			const response = await axios.get(`albums/${id}`)
			return response.data
		} catch (error) {
			return rejectWithValue('Server error.')
		}
	}
)
