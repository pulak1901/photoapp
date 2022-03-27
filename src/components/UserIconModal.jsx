import React from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { userSetIcon } from '../services/userService'
import { Avatars } from "../utility/userAvatars"

import './UserIconModal.scss'

export const UserIconModal = (props) => {
	const dispatch = useDispatch()

	const setAvatar = (idx) => {
		userSetIcon(dispatch, idx)
		props.closeModal()
	}
	return <Modal show={props.showModal} className="UserIconModal">
		<Modal.Body>
			{Avatars.map((avatar, idx) => 
				(<img src={avatar} onClick={() => setAvatar(idx)} alt="icon."/>)
			)}
		</Modal.Body>
	</Modal>
}