import styles from './Favorite.module.css'
import { ReactComponent as Illustration } from '../../assets/svg/illustration.svg'
import { useAppSelector } from '../../hooks/redux'
import { getPhotosSelector } from '../../redux/photos/selector'
import { closeModal, openModal } from '../../redux/photos/photosSlice'
import Modal from '../../ui/Modal/Modal'
import Img from '../../ui/Img/Img'

export const Favorite = () => {
	const { favoritesPhoto, isOpenModal, urlModal } =
		useAppSelector(getPhotosSelector)

	if (favoritesPhoto.length === 0)
		return (
			<>
				<div className={styles.svg}>
					<Illustration />
				</div>
				<h1 className={styles.title}>Список избранного пуст</h1>
				<p className={styles.paragraph}>
					Добавляйте изображения, нажимая на звездочки
				</p>
			</>
		)

	return (
		<div className={styles.container__photo}>
			{favoritesPhoto.map(photo => (
				<div className={styles.photo}>
					<Modal isOpen={isOpenModal} onClose={closeModal}>
						<>
							<Img url={urlModal} width={600} height={600} />
						</>
					</Modal>
					<Img
						width={150}
						height={150}
						photo={photo}
						key={photo.id}
						setIsOpen={openModal}
						describe={false}
					/>
					<p className={styles.paragraph}>{photo.title}</p>
				</div>
			))}
		</div>
	)
}
