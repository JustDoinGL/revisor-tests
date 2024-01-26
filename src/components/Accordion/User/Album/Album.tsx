import { useAppSelector } from '../../../../hooks/redux'
import { Status } from '../../../../redux/@types/enum'
import { fetchPhotos } from '../../../../redux/photos/getPhotos'
import { openModal } from '../../../../redux/photos/photosSlice'
import { getPhotosSelector } from '../../../../redux/photos/selector'
import { AccordionItem } from '../../../../ui'
import Img from '../../../../ui/Img/Img'
import { LoaderError } from '../../../../ui/LoaderError/LoaderError'
import styles from './Album.module.css'
import { AlbumProps } from './Album.type'

export const Album = ({ album }: AlbumProps) => {
	const { status, openPhotos } = useAppSelector(getPhotosSelector)

	return (
		<>
			<AccordionItem title={album.title} id={album.albumId} fetch={fetchPhotos}>
				<div className={styles.container__photo}>
					{openPhotos.findIndex(el => el.id === album.albumId) !== -1
						? openPhotos[
								openPhotos.findIndex(el => el.id === album.albumId)
							].content.map(photo =>
								status === Status.fulfilled || status === Status.pending ? (
									<Img
										height={150}
										width={150}
										key={photo.id}
										photo={photo}
										setIsOpen={openModal}
									/>
								) : (
									status === Status.rejected && (
										<LoaderError
											status={status as Status.pending | Status.rejected}
										/>
									)
								)
							)
						: null}
				</div>
			</AccordionItem>
		</>
	)
}
