import styles from './User.module.css'
import { UserProps } from './User.type'
import { AccordionItem } from '../../../ui'
import { fetchAlbums } from '../../../redux/albums/getAlbums'
import { useAppSelector } from '../../../hooks/redux'
import { getAlbumsSelector } from '../../../redux/albums/selector'
import { Album } from './Album/Album'
import { Status } from '../../../redux/@types/enum'
import { LoaderError } from '../../../ui/LoaderError/LoaderError'

export const User = ({ user }: UserProps) => {
	const { status, openAlbum } = useAppSelector(getAlbumsSelector)
	return (
		<>
			<AccordionItem
				key={user.id}
				title={user.name}
				id={user.id}
				fetch={fetchAlbums}
			>
				<div className={styles.children__accordion}>
					{status === Status.fulfilled ? (
						openAlbum.findIndex(el => el.id === user.id) !== -1 ? (
							openAlbum[
								openAlbum.findIndex(el => el.id === user.id)
							].content.map(album => (
								<Album key={album.albumId} album={album} />
							))
						) : null
					) : (
						<LoaderError status={status} />
					)}
				</div>
			</AccordionItem>
		</>
	)
}
