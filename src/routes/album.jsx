import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import { ImageModal } from '../components/ImageModal'
import { ImageTile } from '../components/ImageTile'
import { ALL_PHOTOS_ALBUM_NAME } from '../utility/constants'

export function Album() {
	let navigate = useNavigate()
	const { name } = useParams()
	const userName = useSelector(state => state.user.currentUser)
	const albumData = useSelector(state => state.user.userData[userName].albums[name])
	const [modalImageData, setModalImageData] = useState({})
	const [showModal, setShowModal] = useState(false)

	// If the album is deleted while viewing the same, force the user back to all photos
	useEffect(() => {
		if (!albumData) {
			navigate("/photos")
		}
	})

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

	// If album is empty, show a "no content" message. Else, show the album in tiles
	const getAlbumGallery = () => {
		if (albumData && albumData.length > 0)
			return (albumData.map((image, index) => <ImageTile key={index} image={image} onClick={onImageSelected} />))
		else
			return <div style={{display:"flex", flexDirection:"column"}}>
				<img src="/assets/empty.svg" style={{width: "400px"}} alt="No images in this album!"/>
				<p>Head to the <a href="/photos">image gallery</a> and add some photos!</p>
			</div>
	}
	
	return <>
		<Dashboard currAlbum={name} onAlbumSelected={onAlbumSelected}>
			<div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
				{getAlbumGallery()}
			</div>
		</Dashboard>
		<ImageModal showModal={showModal} closeModal={() => setShowModal(false)} imageData={modalImageData} />
	</>
}