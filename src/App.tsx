import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/Default/DefaultLayout'
import { FavoritesPage, CatalogPage } from './pages'

function App() {
	return (
		<Routes>
			<Route path='/' element={<DefaultLayout />}>
				<Route index element={<CatalogPage />} />
				<Route path='/favorite' element={<FavoritesPage />} />
			</Route>
		</Routes>
	)
}

export default App
