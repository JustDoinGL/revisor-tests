import { useMemo } from 'react'
import styles from './User.module.css'
import { AccordionItem } from '../../../ui'
import { fetchAlbums } from '../../../redux/albums/getAlbums'
import { useAppSelector } from '../../../hooks/redux'
import { getAlbumsSelector } from '../../../redux/albums/selector'
import { Album } from './Album/Album'
import { UserProps } from './User.type'
import { LoaderError } from '../../../ui/LoaderError/LoaderError'
import { Status } from '../../../redux/@types/enum'

export const User = ({ user }: UserProps) => {
	const { openAlbum, status } = useAppSelector(getAlbumsSelector)

	const content = useMemo(() => {
		const userIndex = openAlbum.findIndex(el => el.id === user.id)
		return userIndex !== -1
			? openAlbum[userIndex].content.map(album => (
					<Album key={album.albumId} album={album} />
				))
			: status !== Status.fulfilled && <LoaderError status={status} />
	}, [openAlbum, status, user.id])

	return (
		<>
			<AccordionItem
				key={user.id}
				title={user.name}
				id={user.id}
				fetch={fetchAlbums}
			>
				<div className={styles.children__accordion}>{content}</div>
			</AccordionItem>
		</>
	)
}
