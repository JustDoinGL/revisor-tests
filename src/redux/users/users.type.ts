import { User } from '../../@types/user'
import { Status } from '../@types/enum'

type UsersState = {
	users: User[]
	status: Status
}

export const initialState: UsersState = {
	users: [],
	status: Status.pending
}
