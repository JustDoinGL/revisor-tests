import { initialState } from './users.type'
import { Status } from '../@types/enum'
import { fetchUsers } from './getUsers'
import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, state => {
				state.status = Status.pending
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.users = action.payload
				state.status = Status.fulfilled
			})
			.addCase(fetchUsers.rejected, state => {
				state.status = Status.rejected
			})
	}
})

export default usersSlice.reducer
