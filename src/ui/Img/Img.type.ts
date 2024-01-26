import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { Photo } from '../../@types/photos'

export type ImgProps = {
	photo?: Photo
	width: number
	height: number
	url?: string
	setIsOpen?: ActionCreatorWithPayload<string, 'photos/openModal'>
}
