import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import styles from './DefaultLayout.module.css'

const DefaultLayout = () => {
	return (
		<div className={styles.container}>
			<Header />

			{/* <Suspense fallback={<Loader />}>
				</Suspense> */}

			<Outlet />
		</div>
	)
}

export default DefaultLayout
