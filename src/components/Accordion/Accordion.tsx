import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getUsersSelector } from '../../redux/users/selector'
import { fetchUsers } from '../../redux/users/getUsers'
import { getPhotosSelector } from '../../redux/photos/selector'
import Img from '../../ui/Img/Img'
import Modal from '../../ui/Modal/Modal'
import { closeModal } from '../../redux/photos/photosSlice'
import { LoaderError } from '../../ui/LoaderError/LoaderError'
import { Status } from '../../redux/@types/enum'
import { User } from './User/User'

export const Accordion = () => {
	const dispatch = useAppDispatch()

	const { status, users } = useAppSelector(getUsersSelector)

	const { urlModal, isOpenModal } = useAppSelector(getPhotosSelector)

	useEffect(() => {
		dispatch(fetchUsers())
	}, [dispatch])

	return (
		<div>
			<Modal isOpen={isOpenModal} onClose={closeModal}>
				<>
					<Img url={urlModal} width={600} height={600} />
				</>
			</Modal>
			{status === Status.fulfilled ? (
				users?.map(user => <User user={user} />)
			) : (
				<LoaderError status={status} />
			)}
		</div>
	)
}
