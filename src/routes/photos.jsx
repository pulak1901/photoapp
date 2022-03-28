import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

import { InfinitePhotosList } from '../components/InfinitePhotosList'
import Dashboard from '../components/Dashboard'
import { ImageModal } from '../components/ImageModal'
import { ALL_PHOTOS_ALBUM_NAME } from '../utility/constants'

/* Gallery route
 * No inputs
 * Does not affect application state
 */
export default function Photos() {
	let navigate = useNavigate()
	const [modalImageData, setModalImageData] = useState({})
	const [showModal, setShowModal] = useState(false)

	const onAlbumSelected = (value) => {
		if (value === ALL_PHOTOS_ALBUM_NAME) {
			navigate("/photos")
		} else {
			navigate("/album/" + value)
		}
	}

	const onImageSelected = (imageData) => {
		setModalImageData(imageData)
		setShowModal(true)
	}

	return <>
		<Dashboard currAlbum={ALL_PHOTOS_ALBUM_NAME} onAlbumSelected={onAlbumSelected} >
			<InfinitePhotosList onImageSelected={onImageSelected}/>
		</Dashboard>
		<ImageModal showModal={showModal} closeModal={() => setShowModal(false)} imageData={modalImageData} />
	</>
}