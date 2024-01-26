import React, { useMemo } from 'react'
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

  const content = useMemo(() => {
    const albumIndex = openPhotos.findIndex((el) => el.id === album.albumId)
    return albumIndex !== -1
      ? openPhotos[albumIndex].content.map((photo) => (
          <Img
            height={150}
            width={150}
            key={photo.id}
            photo={photo}
            setIsOpen={openModal}
          />
        ))
      : status !== Status.fulfilled && <LoaderError status={status} />
  }, [openPhotos, status, album.albumId])

  return (
    <>
      <AccordionItem title={album.title} id={album.albumId} fetch={fetchPhotos}>
        <div className={styles.container__photo}>{content}</div>
      </AccordionItem>
    </>
  )
}