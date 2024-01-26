import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'

export type ModalProps = {
	isOpen: boolean
	onClose: ActionCreatorWithoutPayload<'photos/closeModal'>
	children: JSX.Element
}
