import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonGroup, Image, Modal } from 'react-bootstrap'
import { userAddAlbumImage, userAlbumContainsImage, userRemoveAlbumImage } from '../services/userService'

import './ImageModal.scss'

/* Modal to display the currently selected image.
 * Also displays list of albums and the user can add/remove the current image to/from any album
 * Inputs:
 *  - imageData => {url:, thumbnailUrl:, id:}
 *  - showModal => boolean
 *  - closeModal() => () => void
 */
export const ImageModal = (props) => {
	const dispatch = useDispatch()

	const imageData = props.imageData
	const imageSrc = imageData.url

	const user = useSelector(state => state.user.currentUser)
	const stateAlbums = useSelector(state => state.user.userData[user].albums)
	const currAlbums = Object.keys(stateAlbums)

	// Toggles the existence of an image within an album
	const onAlbumSelected = (e) => {
		const album = e.currentTarget.value
		if (userAlbumContainsImage(album, imageData)) {
			userRemoveAlbumImage(dispatch, album, imageData)
		} else {
			userAddAlbumImage(dispatch, album, imageData)
		}
	}

	return <Modal show={props.showModal} className="ImageModal">
		<Modal.Header>
			<Modal.Title>{imageData.title}</Modal.Title>
		</Modal.Header>
		<Modal.Body className="ImageModalBody">
			<Image src={imageSrc} className="img-fluid" />
			<ButtonGroup className="ImageModalAlbumGroup mr-1">
				{currAlbums.map((album, index) => (
					<Button
						key={index}
						id={`album-${index}`}
						variant={userAlbumContainsImage(album, imageData) ? "success" : "outline-danger"}
						value={album}
						onClick={onAlbumSelected}
					>
						<p>{album}</p>
					</Button>
				))}
			</ButtonGroup>
		</Modal.Body>
		<Modal.Footer>
			<Button variant="secondary" onClick={() => props.closeModal()}>
				Close
			</Button>
		</Modal.Footer>
	</Modal>
}