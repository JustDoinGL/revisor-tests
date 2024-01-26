import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Photo } from '../../@types/photos'

export const fetchPhotos = createAsyncThunk<Photo[], string>(
	'photos/fetchPhotos',
	async function (id, { rejectWithValue }) {
		try {
			const response = await axios.get(`photos/${id}`)
			return response.data
		} catch (error) {
			return rejectWithValue('Server error.')
		}
	}
)
