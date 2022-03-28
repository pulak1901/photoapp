import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { userAddAlbum } from '../services/userService'

/* Creates a new album according to user input
 * Inputs: 
 *  - showModal => boolean
 *  - closeModal() => () => void
 */
export const NewAlbumModal = (props) => {
	const dispatch = useDispatch()
	const [input, setInput] = useState('')

	const closeModal = props.closeModal
	const showModal = props.showModal

	// TODO: input validation
	// handle case when album name is same as an existing album (currently, it will simply overwrite the album with a blank album)
	// handle case when album name is same as ALL_PHOTOS_ALBUM_NAME in /utilities/constants.js
	const addAlbum = () => {
		userAddAlbum(dispatch, input)
		closeModal()
		setInput('')
	}

	return <Modal show={showModal}>
		<Modal.Body>
			<input value={input} onInput={e => setInput(e.target.value)}/>
		</Modal.Body>
		<Modal.Footer>
			<Button variant="secondary" onClick={() => closeModal()}>
			  	Close
			</Button>
			<Button variant="primary" onClick={() => addAlbum()}>Save changes</Button>
		</Modal.Footer>
	</Modal>
}