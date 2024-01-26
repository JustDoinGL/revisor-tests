import styles from './CatalogPage.module.css'
import { Accordion } from '../../components/Accordion/Accordion'

export const CatalogPage = () => {
	return (
		<div className={styles.container}>
			<Accordion />
		</div>
	)
}
