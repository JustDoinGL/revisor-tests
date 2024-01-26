import { User } from './../../@types/user'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUsers = createAsyncThunk<User[]>(
	'users/fetchUsers',
	async function (_, { rejectWithValue }) {
		try {
			const response = await axios.get(`users`)
			return response.data
		} catch (error) {
			return rejectWithValue('Server error.')
		}
	}
)
