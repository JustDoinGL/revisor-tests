import { useMemo } from 'react';
import styles from './User.module.css';
import { AccordionItem } from '../../../ui';
import { fetchAlbums } from '../../../redux/albums/getAlbums';
import { useAppSelector } from '../../../hooks/redux';
import { getAlbumsSelector } from '../../../redux/albums/selector';
import { Album } from './Album/Album';
import { UserProps } from './User.type';

export const User = ({ user }: UserProps) => {
  const { openAlbum } = useAppSelector(getAlbumsSelector);

  const content = useMemo(() => {
    const userIndex = openAlbum.findIndex((el) => el.id === user.id);
    return userIndex !== -1
      ? openAlbum[userIndex].content.map((album) => (
          <Album key={album.albumId} album={album} />
        ))
      : null;
  }, [openAlbum, user.id]);

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
  );
};