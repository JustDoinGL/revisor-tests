import { Favorite } from '../../components/Favorite/Favorite'
import styles from './FavoritesPage.module.css'

export const FavoritesPage = () => {
	return (
		<div className={styles.container}>
			<Favorite />
		</div>
	)
}
