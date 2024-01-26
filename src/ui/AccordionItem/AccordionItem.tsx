import styles from './AccordionItem.module.css'
import { AccordionItemProps } from './AccordionItem.type'
import close from '../../assets/svg/close.svg'
import open from '../../assets/svg/open.svg'
import { useAppDispatch } from '../../hooks/redux'
import { useEffect, useState } from 'react'

export const AccordionItem = ({
	id,
	title,
	children,
	fetch
}: AccordionItemProps) => {
	const dispatch = useAppDispatch()
	const [isOpen, setIsOpen] = useState(false)

	const clickHandler = () => {
		setIsOpen(!isOpen)
	}

	useEffect(() => {
		if (isOpen && fetch) {
			dispatch(fetch(id))
		}
	}, [isOpen])

	return (
		<div className={styles.accordion}>
			<div className={styles.header} onClick={clickHandler}>
				<img src={isOpen ? `${close}` : `${open}`} alt='' />
				{title}
			</div>
			<div className={`${styles.collapse} ${open ? styles.open : ''}`}>
				{isOpen && <>{children}</>}
			</div>
		</div>
	)
}
