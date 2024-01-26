import { AsyncThunk } from '@reduxjs/toolkit'
import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk'
import { Album } from '../../@types/albums'
import { Photo } from '../../@types/photos'

export type AccordionItemProps = {
	title: string
	id: string
	children?: JSX.Element
	fetch: AsyncThunk<any, string, AsyncThunkConfig>
}
