import { NavLink } from 'react-router-dom'
import { LinkProps } from './Link.type'
import styles from './Link.module.css'

export const Link = ({ link }: LinkProps) => {
	return (
		<li className={styles.item}>
			<NavLink
				className={({ isActive }) =>
					isActive ? `${styles.link} ${styles.active}` : styles.link
				}
				to={link.url}
			>
				{link.name}
			</NavLink>
		</li>
	)
}
