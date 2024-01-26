import { AsyncThunk } from '@reduxjs/toolkit'
import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk'

export type AccordionItemProps = {
	title: string
	id: string
	children?: JSX.Element
	fetch: AsyncThunk<any, string, AsyncThunkConfig>
}
