import React from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { userSetIcon } from '../services/userService'
import { Avatars } from "../utility/userAvatars"

import './UserIconModal.scss'

/* Displays a list of user icons
 * Inputs: 
 *  - showModal => boolean
 *  - closeModal() => () => void
 */
export const UserIconModal = (props) => {
	const dispatch = useDispatch()

	const closeModal = props.closeModal
	const showModal = props.showModal

	const setAvatar = (idx) => {
		userSetIcon(dispatch, idx)
		closeModal()
	}
	return <Modal show={showModal} className="UserIconModal">
		<Modal.Body>
			{Avatars.map((avatar, idx) => 
				(<img src={avatar} onClick={() => setAvatar(idx)} alt="icon."/>)
			)}
		</Modal.Body>
	</Modal>
}