import styles from './Header.module.css'
import { useAppSelector } from '../../hooks/redux'
import { Link } from '../../ui'

const Header = () => {
	const { LinksHeader } = useAppSelector(state => state.headerSlice)
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.items}>
					{LinksHeader.map(link => (
						<Link link={link} key={link.url} />
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
