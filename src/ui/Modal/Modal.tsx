import styles from './Modal.module.css'
import { ModalProps } from './Modal.type'
import { ReactComponent as CloseSvg } from '../../assets/svg/closeModal.svg'
import { useAppDispatch } from '../../hooks/redux'

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	const dispatch = useAppDispatch()

	const clickHandler = () => {
		dispatch(onClose())
	}

	if (!isOpen) {
		return null
	}

	return (
		<div className={styles.modal__overlay} onClick={clickHandler}>
			<button className={styles.modal__close__btn} onClick={clickHandler}>
				<CloseSvg />
			</button>
			<div>{children}</div>
		</div>
	)
}

export default Modal
