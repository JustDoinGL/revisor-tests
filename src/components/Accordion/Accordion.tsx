import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getUsersSelector } from '../../redux/users/selector'
import styles from './Accordion.module.css'
import { fetchUsers } from '../../redux/users/getUsers'
import { AccordionItem } from '../../ui/AccordionItem/AccordionItem'
import { fetchAlbums } from '../../redux/albums/getAlbums'
import { getAlbumsSelector } from '../../redux/albums/selector'
import { getPhotosSelector } from '../../redux/photos/selector'
import { fetchPhotos } from '../../redux/photos/getPhotos'
import Img from '../../ui/Img/Img'
import Modal from '../../ui/Modal/Modal'
import { closeModal, openModal } from '../../redux/photos/photosSlice'

export const Accordion = () => {
	const dispatch = useAppDispatch()

	const { status: statusUsers, users } = useAppSelector(getUsersSelector)
	const { status: statusAlbums, openAlbum } = useAppSelector(getAlbumsSelector)
	const {
		status: statusPhotos,
		photos,
		urlModal,
		isOpenModal,
		openPhotos
	} = useAppSelector(getPhotosSelector)

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
			{users?.map(user => (
				<>
					<AccordionItem
						key={user.id}
						title={user.name}
						id={user.id}
						fetch={fetchAlbums}
					>
						<div className={styles.children__accordion}>
							{openAlbum.findIndex(el => el.id === user.id) !== -1
								? openAlbum[
										openAlbum.findIndex(el => el.id === user.id)
									].content.map(album => (
										<>
											<AccordionItem
												key={album.albumId}
												title={album.title}
												id={album.albumId}
												fetch={fetchPhotos}
											>
												<div className={styles.container__photo}>
													{openPhotos.findIndex(
														el => el.id === album.albumId
													) !== -1
														? openPhotos[
																openPhotos.findIndex(
																	el => el.id === album.albumId
																)
															].content.map(photo => (
																<Img
																	height={150}
																	width={150}
																	key={photo.id}
																	photo={photo}
																	setIsOpen={openModal}
																/>
															))
														: null}
												</div>
											</AccordionItem>
										</>
									))
								: null}
						</div>
					</AccordionItem>
				</>
			))}
		</div>
	)
}
