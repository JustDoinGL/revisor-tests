import styles from './Img.module.css'
import { ImgProps } from './Img.type'
import { ReactComponent as CircleSvg } from '../../assets/svg/circle.svg'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { isFavoritesPhoto } from '../../redux/photos/photosSlice'
import { getPhotosSelector } from '../../redux/photos/selector'
import { useState } from 'react'

const Img = ({
	photo,
	width,
	height,
	setIsOpen,
	url,
	describe = true
}: ImgProps) => {
	const dispatch = useAppDispatch()
	const { favoritesPhoto } = useAppSelector(getPhotosSelector)

	const [showDescription, setShowDescription] = useState(false)

	const handleMouseEnter = () => {
		setShowDescription(true)
	}

	const handleMouseLeave = () => {
		setShowDescription(false)
	}

	const clickHandler = () => {
		if (photo) {
			dispatch(isFavoritesPhoto(photo))
		}
	}

	const openModal = () => {
		if (setIsOpen && photo) {
			dispatch(setIsOpen(photo.url))
		}

		if (setIsOpen && url) {
			dispatch(setIsOpen(url))
		}
	}

	if (url)
		return (
			<>
				<img
					className={styles.img}
					src={url}
					width={width}
					height={height}
					alt='cats'
				/>
			</>
		)

	return (
		<>
			{photo && (
				<div className={styles.container}>
					<div
						onClick={clickHandler}
						className={
							favoritesPhoto.findIndex(
								favorite => favorite.url === photo?.url
							) !== -1
								? `${styles.circle} ${styles.active}`
								: styles.circle
						}
					>
						<CircleSvg />
					</div>
					<div
						onClick={openModal}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						<img
							className={styles.img}
							src={`${photo?.url}`}
							width={width}
							height={height}
							alt={photo?.title}
						/>
					</div>
					{describe && showDescription && (
						<p
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							className={styles.modal}
						>
							{photo.title}
						</p>
					)}
				</div>
			)}
		</>
	)
}

export default Img
