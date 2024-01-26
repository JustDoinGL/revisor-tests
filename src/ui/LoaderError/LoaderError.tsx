import { Status } from '../../redux/@types/enum'
import styles from './LoaderError.module.css'
import { LoaderErrorProps } from './LoaderError.type'

export const LoaderError = ({ status }: LoaderErrorProps) => {
	if (status === Status.rejected)
		return (
			<div className={styles.error}>
				<div className={styles.icon}>❌</div>
				<div className={styles.text}>
					Error occurred. Please try again later.
				</div>
			</div>
		)

	return (
		<div className={styles.loader}>
			<div className={styles.spinner} />
			<div className={styles.text}>Loading...</div>
		</div>
	)
}
